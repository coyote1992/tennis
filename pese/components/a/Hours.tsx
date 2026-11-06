"use client";

import { useEffect, useState } from "react";
import { HOURS } from "@/lib/site";

/** Opening hours with today's row marked (worked out in the browser, so the page can stay static). */
export function Hours({ className = "" }: { className?: string }) {
  const [today, setToday] = useState<number | null>(null);
  // getDay(): 0 = Sunday; HOURS starts on Monday
  useEffect(() => setToday((new Date().getDay() + 6) % 7), []);
  return (
    <table className={`hours ${className}`}>
      <tbody>
        {HOURS.map((h, i) => (
          <tr key={h.day} className={i === today ? "is-today" : undefined}>
            <th scope="row">
              {h.day}
              {i === today && <span className="hours__today">ma</span>}
            </th>
            <td>{h.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
