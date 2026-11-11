"use client";

/**
 * Winter / summer at Folyondár, from the Teniszpálya and Sportolj pages: in winter 7 clay courts in two
 * covered tents, in summer 8 clay courts in the open, and 2 hard courts on the hall's roof (listed for
 * both). The plan is schematic: it shows the counts, not the real layout of the grounds.
 */
import Image from "next/image";
import { useState } from "react";
import { COURTS } from "@/lib/site";

type Id = "tel" | "nyar";

const PHOTO: Record<Id, { src: string; alt: string }> = {
  tel: { src: "/img/teli-sator.jpg", alt: "Salakpálya a fedett téli sátorban" },
  nyar: { src: "/img/palyak-fak.jpg", alt: "Salakpályák a park fái között, nyáron" },
};

export function SeasonCourts() {
  const [id, setId] = useState<Id>("tel");
  const s = COURTS.seasons.find((x) => x.id === id)!;
  const maxClay = Math.max(...COURTS.seasons.map((x) => x.clay));

  return (
    <div className={`sc sc--${id}`}>
      <div className="sc__top">
        <div className="seg" role="group" aria-label="Évszak">
          {COURTS.seasons.map((x) => (
            <button key={x.id} type="button" aria-pressed={id === x.id} onClick={() => setId(x.id as Id)}>
              {x.label}
            </button>
          ))}
        </div>
        <p className="sc__range">{s.range}</p>
      </div>

      <div className="sc__plan" aria-hidden="true">
        <div className="sc__zone sc__zone--roof">
          <span className="sc__zlabel">A csarnok tetején</span>
          <div className="sc__tiles">
            {Array.from({ length: s.hard }, (_, i) => (
              <i key={i} className="court court--hard" />
            ))}
          </div>
        </div>
        <div className="sc__zone sc__zone--ground">
          <span className="sc__zlabel">{id === "tel" ? "Két fedett sátorban" : "A szabad ég alatt"}</span>
          <div className="sc__tiles">
            {Array.from({ length: maxClay }, (_, i) => (
              <i key={i} className={`court court--clay${i >= s.clay ? " is-off" : ""}`} />
            ))}
          </div>
        </div>
      </div>

      <dl className="sc__facts" aria-live="polite">
        <div>
          <dt>{s.clay}</dt>
          <dd>
            salakos pálya, <span>{s.clayNote}</span>
          </dd>
        </div>
        <div>
          <dt>{s.hard}</dt>
          <dd>
            rekortán pálya, <span>{s.hardNote}</span>
          </dd>
        </div>
      </dl>

      <figure className="sc__photo">
        {(["tel", "nyar"] as Id[]).map((k) => (
          <Image key={k} src={PHOTO[k].src} alt={id === k ? PHOTO[k].alt : ""} fill sizes="(max-width: 900px) 100vw, 46vw" className={id === k ? "is-on" : ""} />
        ))}
      </figure>
    </div>
  );
}
