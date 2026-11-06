"use client";

/**
 * The outdoor season as a strip of the twelve months: playing months filled, the opening month
 * half-filled, the current month marked (worked out in the browser, so the page can stay static).
 * Styling comes from each version's stylesheet (.season, .season__*).
 */
import { useEffect, useState } from "react";
import { SEASON } from "@/lib/site";

const MONTHS = ["jan", "febr", "márc", "ápr", "máj", "jún", "júl", "aug", "szept", "okt", "nov", "dec"];

export function SeasonStrip({ className = "" }: { className?: string }) {
  const [current, setCurrent] = useState<number | null>(null);
  useEffect(() => setCurrent(new Date().getMonth()), []);
  return (
    <figure className={`season ${className}`}>
      <ol className="season__months">
        {MONTHS.map((m, i) => {
          const on = SEASON.months.includes(i);
          const half = SEASON.partial.includes(i);
          return (
            <li key={m} className={`season__m${on ? " is-on" : ""}${half ? " is-half" : ""}${current === i ? " is-now" : ""}`}>
              <span className="season__bar" aria-hidden="true" />
              <span className="season__name">{m}</span>
              {current === i && <span className="season__now">most</span>}
            </li>
          );
        })}
      </ol>
      <figcaption className="season__cap">
        <span>
          <i className="season__key season__key--on" aria-hidden="true" /> szabadtéri szezon
        </span>
        <span>
          <i className="season__key season__key--half" aria-hidden="true" /> nyitás: március vége / április eleje
        </span>
      </figcaption>
    </figure>
  );
}
