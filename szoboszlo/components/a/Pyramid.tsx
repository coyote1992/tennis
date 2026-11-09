"use client";

/**
 * The Piramis rule, drawn: tap a player and the ones they may challenge light up (anyone in the same
 * row, and anyone one row higher). Positions only, no names: it illustrates the published rule.
 */
import { useState } from "react";

const ROWS = 5;

export function Pyramid() {
  const [sel, setSel] = useState<[number, number]>([3, 1]);
  const [sr, si] = sel;

  return (
    <div className="pyr">
      <div className="pyr__rows" role="group" aria-label="Piramis: válassz egy helyet, hogy lásd, kit hívhat ki">
        {Array.from({ length: ROWS }, (_, r) => (
          <div key={r} className="pyr__row">
            {Array.from({ length: r + 1 }, (_, i) => {
              const me = r === sr && i === si;
              const can = !me && (r === sr || r === sr - 1);
              const n = (r * (r + 1)) / 2 + i + 1;
              return (
                <button
                  key={i}
                  type="button"
                  className={`pyr__slot${me ? " pyr__slot--me" : can ? " pyr__slot--can" : ""}`}
                  aria-pressed={me}
                  aria-label={`${n}. hely${me ? ", kijelölve" : can ? ", kihívható" : ""}`}
                  onClick={() => setSel([r, i])}
                >
                  {n}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <p className="pyr__legend">
        <span className="pyr__item">
          <span className="pyr__key pyr__key--me" /> a kijelölt játékos (koppints egy másik helyre)
        </span>
        <span className="pyr__item">
          <span className="pyr__key pyr__key--can" /> akit kihívhat: a saját sorában és egy sorral feljebb bárkit
        </span>
      </p>
    </div>
  );
}
