"use client";

/**
 * The court price lists with a clay / hard-court switch. Clay: the 2026/27 winter list with all three
 * kinds side by side (one-off, the 10-hour pass, the season price per hour), exactly as published.
 * Hard courts (on the roof of the hall): season price and one-off price; the site gives no season for
 * that list, so none is shown. On phones each time band becomes a small block with its prices.
 */
import { useState } from "react";
import { PRICES, fmt } from "@/lib/site";

type Surface = "clay" | "hard";
type Row = { from: number; to: number; szezon: number; alkalmi: number; tizes?: number };

const nb = (t: string) => t.replace(/ /g, " ").replace(/–/g, "–⁠");
const hh = (h: number) => `${h}:00`;
const ft = (n: number) => `${fmt(n)} Ft`;

const COLS = {
  clay: [
    { k: "alkalmi" as const, label: "Alkalmi", unit: "Ft/óra" },
    { k: "tizes" as const, label: "10 alkalmas", unit: "Ft / 10 óra" },
    { k: "szezon" as const, label: "Szezonár", unit: "Ft/óra" },
  ],
  hard: [
    { k: "alkalmi" as const, label: "Alkalmi", unit: "Ft/óra" },
    { k: "szezon" as const, label: "Szezonár", unit: "Ft/óra" },
  ],
};

export function PriceSwitch() {
  const [surface, setSurface] = useState<Surface>("clay");
  const list = PRICES[surface];
  const rows: { day: string; r: Row }[] = [
    ...list.weekday.map((r) => ({ day: "Hétköznap", r: r as Row })),
    ...list.weekend.map((r) => ({ day: "Hétvégén", r: r as Row })),
  ];
  const cols = COLS[surface];

  return (
    <div className="prices glass reveal">
      <div className="prices__head">
        <p className="label">Pályabérlés · árlista</p>
        <div className="seg" role="tablist" aria-label="Pálya">
          {(["clay", "hard"] as Surface[]).map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              id={`tab-${id}`}
              aria-selected={surface === id}
              aria-controls="prices-panel"
              className={`seg__btn${surface === id ? " is-on" : ""}`}
              onClick={() => setSurface(id)}
            >
              <span className={`seg__dot seg__dot--${id}`} aria-hidden="true" />
              {id === "clay" ? "Salakos pályák" : "Rekortán, a tetőn"}
            </button>
          ))}
        </div>
      </div>

      <div id="prices-panel" role="tabpanel" aria-labelledby={`tab-${surface}`}>
        <p className="prices__range">
          {surface === "clay" ? (
            <>
              {PRICES.title}: {nb(PRICES.range)}
            </>
          ) : (
            "A két rekortán pálya a csarnok tetején van."
          )}
        </p>
        <table className={`ptable ptable--${surface}`}>
          <caption className="sr-only">{surface === "clay" ? "A salakos pályák téli árai idősávonként" : "A rekortán pályák árai idősávonként"}</caption>
          <thead>
            <tr>
              <th scope="col">Idősáv</th>
              {cols.map((c) => (
                <th key={c.k} scope="col">
                  {c.label}
                  <small>{c.unit}</small>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ day, r }) => (
              <tr key={`${day}-${r.from}`}>
                <th scope="row">
                  {day} <span className="nobr">{nb(`${hh(r.from)}–${hh(r.to)}`)}</span>
                </th>
                {cols.map((c) => (
                  <td key={c.k}>
                    <span className="ptable__k">{c.label}</span>
                    <strong>{ft(r[c.k] as number)}</strong>
                    <span className="ptable__u">{c.unit}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="prices__kinds">
          {surface === "clay" ? (
            <>
              <span>
                <strong>Alkalmi:</strong> egy alkalomra, óradíj.
              </span>
              <span>
                <strong>10 alkalmas:</strong> tíz alkalom ára egy összegben.
              </span>
              <span>
                <strong>Szezonár:</strong> a szezonra szóló óradíj.
              </span>
            </>
          ) : (
            <span>
              <strong>Szezonár</strong> és <strong>alkalmi</strong> óradíj, ahogy a sportközpont közzétette.
            </span>
          )}
          <span>{PRICES.vat}</span>
        </p>
      </div>
    </div>
  );
}
