"use client";

/**
 * The day in prices: the published 2026/27 clay list and the hard-court list drawn on one 6–22 hour
 * axis, weekday and weekend. Pick a way to pay and every band shows its price; the shade gets deeper
 * as the price goes up (per surface), so the dearer morning and afternoon bands and the cheaper
 * weekend stand out. The hard-court list has no 10-hour price, so those rows say so.
 */
import { useState } from "react";
import { PRICES, fmt, type ClayKind } from "@/lib/site";

const H0 = 6;
const H1 = 22;
const col = (h: number) => h - H0 + 1;
const TICKS = [6, 8, 10, 12, 14, 16, 18, 20, 22];

type Band = { from: number; to: number; szezon: number; alkalmi: number; tizes?: number };

export function PriceDay() {
  const [kind, setKind] = useState<ClayKind>("alkalmi");
  const rows: { key: string; label: string; sub: string; surface: "clay" | "hard"; bands: Band[] }[] = [
    { key: "cw", label: "Salak", sub: "hétköznap", surface: "clay", bands: PRICES.clay.weekday },
    { key: "ce", label: "Salak", sub: "hétvégén", surface: "clay", bands: PRICES.clay.weekend },
    { key: "hw", label: "Rekortán", sub: "hétköznap", surface: "hard", bands: PRICES.hard.weekday },
    { key: "he", label: "Rekortán", sub: "hétvégén", surface: "hard", bands: PRICES.hard.weekend },
  ];
  const range = (surface: "clay" | "hard") => {
    const vals = rows.filter((r) => r.surface === surface).flatMap((r) => r.bands.map((b) => b[kind])).filter((v): v is number => typeof v === "number");
    return [Math.min(...vals), Math.max(...vals)] as const;
  };
  const unit = PRICES.kinds.find((k) => k.id === kind)!.unit;

  return (
    <div className="pd">
      <div className="pd__bar">
        <div className="seg" role="group" aria-label="Fizetés módja">
          {PRICES.kinds.map((k) => (
            <button key={k.id} type="button" aria-pressed={kind === k.id} onClick={() => setKind(k.id)}>
              {k.label}
            </button>
          ))}
        </div>
        <p className="pd__unit">{unit}</p>
      </div>

      <div className="pd__chart">
        {rows.map((r) => {
          const [lo, hi] = range(r.surface);
          const missing = r.bands.every((b) => typeof b[kind] !== "number");
          return (
            <div key={r.key} className={`pd__row pd__row--${r.surface}`}>
              <p className="pd__label">
                <b>{r.label}</b> {r.sub}
              </p>
              <div className="pd__track">
                {missing ? (
                  <span className="pd__none" style={{ gridColumn: `${col(r.bands[0].from)} / ${col(r.bands[r.bands.length - 1].to)}` }}>
                    10 alkalmas ár erre nincs
                  </span>
                ) : (
                  r.bands.map((b) => {
                    const v = b[kind] as number;
                    const t = hi > lo ? (v - lo) / (hi - lo) : 0.5;
                    return (
                      <span
                        key={b.from}
                        className="pd__band"
                        style={{ gridColumn: `${col(b.from)} / ${col(b.to)}`, ["--t" as string]: t.toFixed(2) }}
                        title={`${b.from}:00–${b.to}:00 · ${fmt(v)} ${unit}`}
                      >
                        <b>{fmt(v)}</b>
                        <small>
                          {b.from}–{b.to}
                        </small>
                      </span>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
        <div className="pd__axis" aria-hidden="true">
          <span />
          <div className="pd__track pd__track--axis">
            {TICKS.map((h) => (
              <i key={h} style={{ left: `${((h - H0) / (H1 - H0)) * 100}%` }}>
                {h}
              </i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
