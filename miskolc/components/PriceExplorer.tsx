"use client";

import { useState } from "react";
import { PRICES } from "@/lib/site";

/**
 * The winter price lists, one tab per facility. Every list stays in the HTML (only hidden), so the
 * prices are readable without JavaScript.
 */
export function PriceExplorer() {
  const [active, setActive] = useState(PRICES[0].id);

  return (
    <div className="prices">
      <div className="seg" role="tablist" aria-label="Létesítmény">
        {PRICES.map((p) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={active === p.id}
            aria-controls={`arlista-${p.id}`}
            className={`seg__btn${active === p.id ? " is-on" : ""}`}
            onClick={() => setActive(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {PRICES.map((p) => (
        <div key={p.id} id={`arlista-${p.id}`} role="tabpanel" className="pricecard glass" hidden={p.id !== active}>
          <p className="pricecard__title">
            {p.label} <span>· {p.note}</span>
          </p>
          <table className="pricetable">
            <thead>
              <tr>
                <th scope="col">Ft / pálya / óra</th>
                {p.bands.map((b) => (
                  <th scope="col" key={b}>
                    {b}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {p.rows.map((r) => (
                <tr key={r.who} className={r.member ? "is-member" : undefined}>
                  <th scope="row">{r.who}</th>
                  {r.prices.map((v, i) => (
                    <td key={i} data-label={p.bands[i]}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
