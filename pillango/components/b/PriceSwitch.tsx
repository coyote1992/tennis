"use client";

/**
 * The court price list with a winter / summer switch (the current season first). All three kinds
 * side by side: one-off, the 10-hour pass and the season pass, exactly as the club publishes them.
 * On phones each time slot becomes a small block with the three prices under it.
 */
import { useState } from "react";
import { COURTS, type Season, fmt } from "@/lib/site";
import { IconSnow, IconSun } from "./icons";

const ORDER: Season[] = COURTS.current === "tel" ? ["tel", "nyar"] : ["nyar", "tel"];
const nb = (t: string) => t.replace(/ /g, " ").replace(/–/g, "–⁠");

export function PriceSwitch() {
  const [season, setSeason] = useState<Season>(COURTS.current);
  const s = COURTS.seasons[season];

  return (
    <div className="prices glass reveal">
      <div className="prices__head">
        <p className="label" id="prices-label">
          Pályabérlés · árlista
        </p>
        <div className="seg" role="tablist" aria-label="Szezon">
          {ORDER.map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              id={`tab-${id}`}
              aria-selected={season === id}
              aria-controls="prices-panel"
              className={`seg__btn${season === id ? " is-on" : ""}`}
              onClick={() => setSeason(id)}
            >
              {id === "tel" ? <IconSnow /> : <IconSun />} {COURTS.seasons[id].label}
              {id === COURTS.current && (
                <>
                  {" "}
                  <span className="seg__now">most</span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      <div id="prices-panel" role="tabpanel" aria-labelledby={`tab-${season}`}>
        <p className="prices__range">
          {s.label === "Tél" ? "Téli árak" : "Nyári árak"}: {nb(s.range)}
        </p>
        <table className="ptable">
          <caption className="sr-only">
            {s.label === "Tél" ? "Téli" : "Nyári"} pályabérleti árak idősávonként
          </caption>
          <thead>
            <tr>
              <th scope="col">Idősáv</th>
              {COURTS.kinds.map((k) => (
                <th scope="col" key={k.id}>
                  {k.label}
                  <small>{k.unit}</small>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {s.slots.map((slot, i) => (
              <tr key={slot}>
                <th scope="row">{nb(slot)}</th>
                {COURTS.kinds.map((k) => (
                  <td key={k.id}>
                    <span className="ptable__k">{k.label}</span>
                    <strong>{fmt(s.prices[k.id][i])}</strong>
                    <span className="ptable__u"> {k.unit.replace(/ \/ /g, "/")}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <ul className="prices__kinds">
          {COURTS.kinds.map((k) => (
            <li key={k.id}>
              <strong>{k.label}:</strong> {k.note}
            </li>
          ))}
        </ul>

        {s.extras.length > 0 && (
          <ul className="chips prices__extras" aria-label="További díjak">
            {s.extras.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
