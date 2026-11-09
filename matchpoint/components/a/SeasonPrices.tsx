"use client";

/**
 * The court prices from the Pályabérlés page, drawn as the day from 6:00 to 22:00: each band is one
 * price, so the cheaper midday hours stand out. A switch flips between the two published seasons.
 */
import { useState } from "react";
import { COURTS, fmt } from "@/lib/site";

const START = 6;
const END = 22;

function hours(t: string) {
  const [a, b] = t.split("–").map((x) => {
    const [h, m] = x.split(":").map(Number);
    return h + m / 60;
  });
  return [a, b];
}

function Row({ label, bands }: { label: string; bands: { time: string; price: number }[] }) {
  const prices = bands.map((b) => b.price);
  const min = Math.min(...prices);
  return (
    <div className="day">
      <p className="day__label">{label}</p>
      <div className="day__bar">
        {bands.map((b) => {
          const [a, z] = hours(b.time);
          return (
            <div
              key={b.time}
              className={`day__band${b.price === min && prices.length > 1 ? " day__band--low" : ""}`}
              style={{ left: `${((a - START) / (END - START)) * 100}%`, width: `${((z - a) / (END - START)) * 100}%` }}
            >
              <b>{fmt(b.price)} Ft</b>
              <span>{b.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function SeasonPrices() {
  const [id, setId] = useState(COURTS.seasons[0].id);
  const season = COURTS.seasons.find((s) => s.id === id) ?? COURTS.seasons[0];

  return (
    <div className="season">
      <div className="season__top">
        <div className="season__tabs" role="tablist" aria-label="Szezon">
          {COURTS.seasons.map((s) => (
            <button key={s.id} type="button" role="tab" aria-selected={s.id === id} className="season__tab" onClick={() => setId(s.id)}>
              {s.title}
            </button>
          ))}
        </div>
        <p className="season__dates">
          {season.dates} · {season.note}
        </p>
      </div>
      <div className="season__chart" role="tabpanel" aria-label={`${season.title}: pályadíjak óránként`}>
        <div className="season__axis" aria-hidden="true">
          {[6, 10, 14, 18, 22].map((h) => (
            <span key={h} style={{ left: `${((h - START) / (END - START)) * 100}%` }}>
              {h}:00
            </span>
          ))}
        </div>
        <Row label="Hétköznap" bands={season.weekday} />
        <Row label="Hétvégén" bands={season.weekend} />
      </div>
      <ul className="season__list">
        {season.weekday.map((b) => (
          <li key={`h${b.time}`}>
            <span>Hétköznap {b.time}</span>
            <b>{fmt(b.price)} Ft/óra</b>
          </li>
        ))}
        {season.weekend.map((b) => (
          <li key={`v${b.time}`}>
            <span>Hétvégén {b.time}</span>
            <b>{fmt(b.price)} Ft/óra</b>
          </li>
        ))}
      </ul>
      <p className="season__note">{COURTS.current}</p>
    </div>
  );
}
