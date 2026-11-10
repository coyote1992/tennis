"use client";

/**
 * The court price lists from the Pályát foglalok page: a winter/summer switch (winter first, it is the
 * current season) and the three ways to pay (one-off, 10-hour pass, season pass). The bars share one
 * scale across both seasons for the chosen kind, so switching season shows how the prices move. The
 * "/óra" line under the 10-hour pass is just its price divided by ten.
 */
import { useState } from "react";
import { COURTS, fmt, type PriceKind, type Season } from "@/lib/site";

const DAYS: Record<string, string> = { "H–P": "Hétköznap", "Sz–V": "Hétvégén" };

function split(slot: string) {
  const [d, t] = slot.split(" ");
  return { day: DAYS[d] ?? d, time: t };
}

export function CourtPrices() {
  const [season, setSeason] = useState<Season>(COURTS.current);
  const [kind, setKind] = useState<PriceKind>("alkalmi");
  const s = COURTS.seasons[season];
  const k = COURTS.kinds.find((x) => x.id === kind)!;
  const list = s.prices[kind];
  const max = Math.max(...COURTS.seasons.nyar.prices[kind], ...COURTS.seasons.tel.prices[kind]);

  return (
    <div className="cp">
      <div className="cp__controls">
        <div className="seg" role="group" aria-label="Szezon">
          {(["tel", "nyar"] as Season[]).map((id) => (
            <button key={id} type="button" aria-pressed={season === id} onClick={() => setSeason(id)}>
              {COURTS.seasons[id].label}
            </button>
          ))}
        </div>
        <div className="seg seg--kinds" role="group" aria-label="Fizetés módja">
          {COURTS.kinds.map((x) => (
            <button key={x.id} type="button" aria-pressed={kind === x.id} onClick={() => setKind(x.id)}>
              {x.label}
            </button>
          ))}
        </div>
      </div>

      <p className="cp__range">
        <b>{s.label}i árak</b> · {s.range}
      </p>

      <ul className="cp__list" aria-live="polite">
        {s.slots.map((slot, i) => {
          const { day, time } = split(slot);
          return (
            <li key={slot} className="cp__row">
              <span className="cp__slot">
                {day} <span className="nowrap">{time}</span>
              </span>
              <span className="cp__track" aria-hidden="true">
                <span className={`cp__fill cp__fill--${season}`} style={{ width: `${(list[i] / max) * 100}%` }} />
              </span>
              <span className="cp__price">
                <b>{fmt(list[i])} Ft</b>
                {kind === "tizes" && <small>{fmt(list[i] / 10)} Ft/óra</small>}
              </span>
            </li>
          );
        })}
      </ul>

      <p className="cp__unit">
        {k.unit}. {k.note}
      </p>
      {s.extras.length > 0 && (
        <ul className="cp__extras">
          {s.extras.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
