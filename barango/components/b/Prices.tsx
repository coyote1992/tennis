"use client";

/**
 * The two hourly court prices with a "Diák vagyok" switch: students get 500 Ft off per hour on both
 * (Árak page). Plain arithmetic on the published prices; nothing else changes.
 */
import { useState } from "react";
import { PRICES } from "@/lib/site";

const ft = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Ft`;

export function Prices() {
  const [student, setStudent] = useState(false);

  return (
    <div className="prices">
      <div className="prices__head">
        <p className="label">Óradíj · 60 perc</p>
        <button type="button" role="switch" aria-checked={student} className={`switch${student ? " is-on" : ""}`} onClick={() => setStudent((s) => !s)}>
          <span className="switch__track" aria-hidden="true">
            <span className="switch__thumb" />
          </span>
          <span>
            Diák vagyok <span className="switch__hint">−{ft(PRICES.studentOff)}/óra</span>
          </span>
        </button>
      </div>
      <ul className="rates" aria-live="polite">
        {PRICES.hourly.map((h) => (
          <li key={h.id} className={`rate glass rate--${h.id}`}>
            <span className="rate__who">{h.title}</span>
            <span className="rate__price">
              <strong>{ft(student ? h.price - PRICES.studentOff : h.price)}</strong> / óra
            </span>
            <span className="rate__when">{h.when}</span>
            <span className="rate__note">{student ? `Diákár; az alapár ${ft(h.price)}.` : "Diákoknak 500 Ft-tal kevesebb."}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
