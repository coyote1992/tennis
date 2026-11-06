"use client";

/**
 * "Időjárás a pályán": live weather at the courts, as the club's own site shows it. Data from
 * Open-Meteo (no key), fetched in the browser; if it can't load, the box says so and points to the
 * phone. It only reports the weather: whether a court is playable is up to the club (the maintainer
 * flags unplayable courts in the booking system).
 * Styling comes from each version's stylesheet (.wx, .wx__*).
 */
import { useEffect, useState } from "react";
import { CLUB } from "@/lib/site";

type Now = { temp: number; wind: number; gust: number; dir: number; rain: number; code: number; time: string };

const LABELS: [number[], string][] = [
  [[0], "Derült"],
  [[1], "Többnyire derült"],
  [[2], "Változóan felhős"],
  [[3], "Borult"],
  [[45, 48], "Köd"],
  [[51, 53, 55, 56, 57], "Szitálás"],
  [[61, 63, 65, 66, 67], "Eső"],
  [[71, 73, 75, 77], "Havazás"],
  [[80, 81, 82], "Zápor"],
  [[85, 86], "Hózápor"],
  [[95, 96, 99], "Zivatar"],
];
const label = (c: number) => LABELS.find(([cs]) => cs.includes(c))?.[1] ?? "";
const WET = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99];
const DIRS = ["É", "ÉK", "K", "DK", "D", "DNy", "Ny", "ÉNy"];
const dirName = (d: number) => DIRS[Math.round(((d % 360) + 360) % 360 / 45) % 8];

export function Weather({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<Now | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${CLUB.lat}&longitude=${CLUB.lon}` +
      "&current=temperature_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=Europe%2FBudapest";
    // one retry after a short wait if the service is busy (429) or briefly unreachable
    const get = (retry: boolean): Promise<Response> =>
      fetch(url, { signal: ctrl.signal }).then((r) =>
        r.ok || !retry ? r : new Promise<Response>((res) => setTimeout(() => res(get(false)), 1500)),
      );
    get(true)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => {
        const c = d.current;
        setNow({ temp: c.temperature_2m, wind: c.wind_speed_10m, gust: c.wind_gusts_10m, dir: c.wind_direction_10m, rain: c.precipitation, code: c.weather_code, time: c.time });
      })
      .catch(() => {
        if (!ctrl.signal.aborted) setFailed(true);
      });
    return () => ctrl.abort();
  }, []);

  // The same rows in every state (loading, data, unavailable), so the card keeps its height and
  // nothing below it moves when the data arrives (a jump to a section further down stays put).
  const state = now ? "ok" : failed ? "off" : "loading";
  return (
    <div className={`wx wx--${state} ${className}`} aria-live="polite" aria-busy={state === "loading"}>
      <p className="wx__title">
        <span className="wx__dot" aria-hidden="true" />
        Időjárás a pályán most
      </p>
      <p className="wx__temp">
        {now ? Math.round(now.temp) : "–"}
        <span>°C</span>
      </p>
      <p className={`wx__sky${state === "loading" ? " wx__loading" : ""}`}>
        {now ? label(now.code) : failed ? "Most nem tölthető be" : "Betöltés…"}
      </p>
      <dl className="wx__list">
        <div>
          <dt>Szél</dt>
          <dd>
            {now ? `${Math.round(now.wind)} km/h ${dirName(now.dir)}${now.gust > now.wind + 8 ? `, lökésekben ${Math.round(now.gust)}` : ""}` : "–"}
          </dd>
        </div>
        <div>
          <dt>Csapadék</dt>
          <dd>{now ? (now.rain > 0 ? `${now.rain.toLocaleString("hu-HU")} mm` : "nincs") : "–"}</dd>
        </div>
      </dl>
      {now && (WET.includes(now.code) || now.rain > 0) ? (
        <p className="wx__warn">
          Esik: indulás előtt hívj minket, játszhatók-e a pályák. <a href={CLUB.phoneHref}>{CLUB.phone}</a>
        </p>
      ) : (
        <p className="wx__src">
          {now ? (
            `Open-Meteo · ${now.time.slice(11, 16)}`
          ) : (
            <>
              Pályaállapot telefonon: <a href={CLUB.phoneHref}>{CLUB.phone}</a>
            </>
          )}
        </p>
      )}
    </div>
  );
}
