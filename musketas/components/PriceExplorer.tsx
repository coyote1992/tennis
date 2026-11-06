"use client";

import { useState } from "react";
import { PRICES } from "@/lib/site";

const SEASONS = [
  { id: "tél", label: "Tél" },
  { id: "nyár", label: "Nyár" },
] as const;

/**
 * The 2026/27 price lists, chosen the way players book: season first, then the court type.
 * Every list stays in the HTML (only hidden), so the prices are readable without JavaScript.
 */
export function PriceExplorer() {
  const [season, setSeason] = useState<"tél" | "nyár">("tél");
  const sets = PRICES.filter((p) => p.season === season);
  const [active, setActive] = useState<string>(sets[0].id);
  const current = sets.find((s) => s.id === active) ?? sets[0];

  return (
    <div className="prices">
      <div className="prices__controls">
        <div className="seg" role="tablist" aria-label="Szezon">
          {SEASONS.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={season === s.id}
              className={`seg__btn${season === s.id ? " is-on" : ""}`}
              onClick={() => {
                setSeason(s.id);
                setActive(PRICES.find((p) => p.season === s.id)!.id);
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="seg seg--ghost" role="tablist" aria-label="Pályatípus">
          {sets.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={current.id === s.id}
              aria-controls={`arlista-${s.id}`}
              className={`seg__btn${current.id === s.id ? " is-on" : ""}`}
              onClick={() => setActive(s.id)}
            >
              {s.place} <span>· {s.surface}</span>
            </button>
          ))}
        </div>
      </div>

      {PRICES.map((p) => (
        <div key={p.id} id={`arlista-${p.id}`} role="tabpanel" className="pricecard glass" hidden={p.id !== current.id}>
          <p className="pricecard__title">
            {p.place}, {p.surface.toLowerCase().startsWith("swiss") ? p.surface : p.surface.toLowerCase()} · {p.season === "tél" ? "téli" : "nyári"} árak 2026/27
          </p>
          <div className="pricecard__scroll">
            <table className="pricetable">
              <thead>
                <tr>
                  <th scope="col">Idősáv</th>
                  <th scope="col">Alkalmi óradíj</th>
                  <th scope="col">Szezonbérlet, {p.weeks} hét</th>
                  <th scope="col">Klubtagság</th>
                </tr>
              </thead>
              <tbody>
                {p.bands.map((b) => (
                  <tr key={b.when}>
                    <th scope="row">{b.when}</th>
                    <td className="pricetable__hourly" data-label="Alkalmi óradíj">
                      {b.hourly} Ft
                    </td>
                    <td data-label={`Szezonbérlet, ${p.weeks} hét`}>
                      {b.season} Ft<span>alkalmanként {b.seasonPer} Ft</span>
                    </td>
                    <td className="pricetable__member" data-label="Klubtagság">
                      {b.member} Ft<span>alkalmanként {b.memberPer} Ft</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
