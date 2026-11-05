"use client";

import { useEffect, useState } from "react";
import { TURNS } from "@/lib/course";

/**
 * The course season as a strip of 4-week blocks. After hydration it marks the block that is
 * running today and the next start date, so the page never shows a stale "now".
 */
export function TurnStrip({ detailed = false }: { detailed?: boolean }) {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    const d = new Date();
    setToday(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`);
  }, []);

  const current = today ? TURNS.findIndex((t) => !t.brk && t.start <= today && today <= t.end) : -1;
  const next = today ? TURNS.findIndex((t) => !t.brk && t.start > today) : -1;
  let n = 0;

  return (
    <div className="turns">
      {today && next >= 0 && (
        <p className="turns__next">
          Következő turnus indul: <strong>{TURNS[next].label.split(" – ")[0]}</strong>
        </p>
      )}
      <ol className={`turns__strip${detailed ? " turns__strip--detailed" : ""}`}>
        {TURNS.map((t, i) => {
          if (!t.brk) n += 1;
          const cls = ["turn", t.brk ? "turn--break" : "", i === current ? "turn--now" : "", i === next ? "turn--next" : ""]
            .filter(Boolean)
            .join(" ");
          return (
            <li key={t.start} className={cls}>
              <span className="turn__num">{t.brk ? "Szünet" : `${n}.`}</span>
              <span className="turn__dates">{t.label}</span>
              {i === current && <span className="turn__tag">most</span>}
              {i === next && <span className="turn__tag">következő</span>}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
