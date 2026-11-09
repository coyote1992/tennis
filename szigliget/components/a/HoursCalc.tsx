"use client";

/**
 * The membership prices as court hours. A slider sets how many hours you would play this year;
 * the cards whose price is at most that many paid hours (hours × 5 000 Ft) are marked "ennél olcsóbb".
 * Pure arithmetic on the published prices; the footnotes carry the conditions (guests, 2 h a day).
 */
import { useId, useState } from "react";
import { COURT_PRICE, GUEST_PRICE, MEMBERSHIPS, MEMBERSHIP_NOTES, fmt } from "@/lib/site";

export function HoursCalc() {
  const [hours, setHours] = useState(30);
  const id = useId();
  const paid = hours * COURT_PRICE;

  return (
    <div className="calc">
      <div className="calc__panel">
        <label htmlFor={id} className="calc__q">
          Hány órát játszanátok egy évben?
        </label>
        <div className="calc__row">
          <input
            id={id}
            className="calc__range"
            type="range"
            min={4}
            max={60}
            step={1}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            style={{ "--p": `${((hours - 4) / 56) * 100}%` } as React.CSSProperties}
            aria-valuetext={`${hours} óra`}
          />
          <output htmlFor={id} className="calc__hours">
            {hours} <span>óra</span>
          </output>
        </div>
        <p className="calc__paid" aria-live="polite">
          {hours} óra pályadíj tagság nélkül: <b>{fmt(paid)} Ft</b>
        </p>
      </div>

      <ul className="cards" aria-label="Tagsági díjak 2026">
        {MEMBERSHIPS.map((m) => {
          const even = Math.ceil(m.price / COURT_PRICE);
          const worth = m.price <= paid;
          return (
            <li key={m.id} className={`card${m.family ? " card--family" : ""}${worth ? " card--worth" : ""}`}>
              <p className="card__title">{m.title}</p>
              <p className="card__who">{m.who}</p>
              <p className="card__price">
                {fmt(m.price)} <span>Ft</span>
              </p>
              <p className="card__even">
                = {even} óra pályadíj
                {worth && <span className="card__badge">ennél olcsóbb</span>}
              </p>
            </li>
          );
        })}
      </ul>

      <ul className="calc__notes">
        <li>Ha mindenki tag a pályán, nincs pályadíj. Nem tag játékostárs után {fmt(GUEST_PRICE)} Ft/óra a díj.</li>
        <li>{MEMBERSHIP_NOTES.daily}</li>
        <li>
          {MEMBERSHIP_NOTES.valid} {MEMBERSHIP_NOTES.kids}
        </li>
      </ul>
    </div>
  );
}
