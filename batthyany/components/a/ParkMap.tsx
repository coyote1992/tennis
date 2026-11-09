"use client";

/**
 * The hotel's own park map with the tennis-and-wellness stops. Hover or tap a stop in the list and
 * its numbered spot on the map lights up. The numbers are the map's own; the list runs in route order
 * (court, pool, saunas, massage, buffet, castle). Pin positions are the numbered circles on the image.
 */
import Image from "next/image";
import { useState } from "react";
import { PARK_ROUTE } from "@/lib/site";

const PINS: Record<number, [number, number]> = {
  5: [50.0, 48.0],
  3: [45.6, 35.6],
  6: [36.6, 41.3],
  7: [40.5, 32.8],
  4: [42.2, 40.5],
  1: [66.3, 25.6],
};

export function ParkMap() {
  const [active, setActive] = useState(5);

  return (
    <div className="pmap">
      <div className="pmap__img">
        <Image
          src="/img/park-terkep.jpg"
          alt="A Batthyány Kastélyszálló parkjának rajzolt térképe: kastély, kültéri termálmedence, szaunák, teniszpálya, minigolf, footgolf, kúria"
          width={1671}
          height={1114}
          sizes="(max-width: 900px) 100vw, 62vw"
        />
        {PARK_ROUTE.map((s) => {
          const [x, y] = PINS[s.n];
          return (
            <span
              key={s.n}
              className={`pmap__pin${active === s.n ? " pmap__pin--on" : ""}`}
              style={{ left: `${x}%`, top: `${y}%` }}
              aria-hidden="true"
            />
          );
        })}
      </div>
      <ol className="pmap__list">
        {PARK_ROUTE.map((s) => (
          <li key={s.n}>
            <button
              type="button"
              className={`pmap__stop${active === s.n ? " pmap__stop--on" : ""}`}
              aria-pressed={active === s.n}
              onMouseEnter={() => setActive(s.n)}
              onFocus={() => setActive(s.n)}
              onClick={() => setActive(s.n)}
            >
              <span className="pmap__n">{s.n}</span>
              <span>
                <b>{s.title}</b>
                <small>{s.text}</small>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
