"use client";

/**
 * Hourly court fees vs. the unlimited weekday-morning season pass, from the 2026 price list: pick how
 * many hours a week you'd play on weekday mornings (9–14, 3 500 Ft/óra) and the number of weeks, and the
 * bar shows what the single-hour fees would add up to next to the 73 000 Ft pass. Only a sum of two items
 * on the club's own price list; no verdict, since the list doesn't say whether the pass is per person.
 */
import { useState } from "react";
import { MORNING, PRICES, fmt } from "@/lib/site";

const MORNING_RATE = PRICES.single.find((p) => p.slot === "Hétköznap 9–14")?.price ?? 3500;

export function MorningCalc() {
  const [hours, setHours] = useState(2);
  const [weeks, setWeeks] = useState(20);
  const total = hours * weeks * MORNING_RATE;
  const max = Math.max(total, MORNING.price) * 1.08;
  const even = Math.ceil(MORNING.price / MORNING_RATE);

  return (
    <div className="calc">
      <div className="calc__inputs">
        <label className="calc__field">
          <span>
            Heti óra hétköznap délelőtt <b>{hours}</b>
          </span>
          <input type="range" min={1} max={6} step={1} value={hours} onChange={(e) => setHours(Number(e.target.value))} />
        </label>
        <label className="calc__field">
          <span>
            Hány hétig <b>{weeks}</b>
          </span>
          <input type="range" min={4} max={30} step={1} value={weeks} onChange={(e) => setWeeks(Number(e.target.value))} />
        </label>
      </div>
      <div className="calc__bars" aria-live="polite">
        <div className="calc__row">
          <span className="calc__name">Alkalmi óradíjjal</span>
          <span className="calc__track">
            <span className="calc__bar calc__bar--hour" style={{ width: `${(total / max) * 100}%` }} />
          </span>
          <b>{fmt(total)} Ft</b>
        </div>
        <div className="calc__row">
          <span className="calc__name">Délelőtti bérlettel</span>
          <span className="calc__track">
            <span className="calc__bar calc__bar--pass" style={{ width: `${(MORNING.price / max) * 100}%` }} />
          </span>
          <b>{fmt(MORNING.price)} Ft</b>
        </div>
      </div>
      <p className="calc__verdict">
        {hours * weeks} óra délelőtt, alkalmi díjjal. A bérlet ára kevesebb, mint {even} alkalmi délelőtti óra díja, és vele korlátlanul játszhatsz.
      </p>
      <p className="calc__note">
        A 2026-os árlista két tételének összege: hétköznap 9–14 között {fmt(MORNING_RATE)} Ft/óra, a délelőtti bérlet {fmt(MORNING.price)} Ft.
      </p>
    </div>
  );
}
