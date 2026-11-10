"use client";

/**
 * The indoor hall's winter prices from the Árlisták page as bars: one per time slot, as tall as its
 * hourly price. The switch shows the pass-holder price (300 Ft/óra less) in place of the one-off price.
 */
import { useState } from "react";
import { HALL, fmt } from "@/lib/site";

export function HallPrices() {
  const [pass, setPass] = useState(false);
  const max = Math.max(...HALL.winter.map((w) => w.price));

  return (
    <div className="hall">
      <div className="hall__top">
        <div>
          <p className="hall__label">{HALL.title}, téli óradíjak</p>
          <p className="hall__date">{HALL.listDate}</p>
        </div>
        <div className="seg" role="group" aria-label="Ár típusa">
          <button type="button" className="seg__btn" aria-pressed={!pass} onClick={() => setPass(false)}>
            Alkalmi
          </button>
          <button type="button" className="seg__btn" aria-pressed={pass} onClick={() => setPass(true)}>
            Bérlettel
          </button>
        </div>
      </div>
      <ul className="hall__bars">
        {HALL.winter.map((w) => {
          const v = pass ? w.pass : w.price;
          return (
            <li key={w.days + w.time} className="hall__bar">
              <span className="hall__track">
                <span className="hall__col" style={{ height: `${(v / max) * 100}%` }}>
                  <b aria-live="polite">{fmt(v)} Ft</b>
                </span>
              </span>
              <span className="hall__slot">
                <small>{w.days}</small>
                {w.time}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="hall__summer">
        <b>Nyári időszak:</b> {HALL.summer.days} {HALL.summer.time}: {fmt(HALL.summer.price)} Ft/óra · bérlet: {HALL.summer.pass}
      </p>
    </div>
  );
}
