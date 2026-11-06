"use client";

import { useState } from "react";
import { ft, PRICE_BANDS } from "@/lib/site";

const TABS = [
  { id: "alkalmi", label: "Alkalmi", note: "egy-egy alkalomra, bérlet nélkül", key: "casual" as const },
  { id: "berletes", label: "Bérletes", note: "rendszeres játékosoknak, bérlettel", key: "pass" as const },
];

/**
 * The winter court fees, one tab per rate. Both lists stay in the HTML (only hidden), so the
 * prices are readable without JavaScript.
 */
export function PriceExplorer() {
  const [active, setActive] = useState(TABS[0].id);

  return (
    <div className="prices">
      <div className="seg" role="tablist" aria-label="Díjtípus">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`dij-${t.id}`}
            className={`seg__btn${active === t.id ? " is-on" : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {TABS.map((t) => (
        <div key={t.id} id={`dij-${t.id}`} role="tabpanel" aria-labelledby={`tab-${t.id}`} className="pricecard glass" hidden={t.id !== active}>
          <p className="pricecard__title">
            {t.label} <span>· {t.note}</span>
          </p>
          <table className="pricetable">
            <thead>
              <tr>
                <th scope="col">Időszak</th>
                <th scope="col">Ft / pálya / óra</th>
              </tr>
            </thead>
            <tbody>
              {PRICE_BANDS.map((b) => (
                <tr key={b.label}>
                  <th scope="row">
                    {b.label}
                    <span>{b.time}</span>
                  </th>
                  <td>{ft(b[t.key])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
