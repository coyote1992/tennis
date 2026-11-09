/**
 * The tenisziskola's red–orange–green progression drawn as three courts inside each other: the
 * children start on the smallest and grow into the full court. Proportions are schematic.
 */
import { SCHOOL } from "@/lib/site";

const COURTS = [
  { id: "zold", w: 560, h: 260, color: "var(--lvl-green)" },
  { id: "narancs", w: 400, h: 196, color: "var(--lvl-orange)" },
  { id: "piros", w: 240, h: 132, color: "var(--lvl-red)" },
];

export function Levels() {
  const cx = 300;
  const cy = 150;
  return (
    <figure className="levels">
      <svg viewBox="0 0 600 300" role="img" aria-label="Piros, narancs és zöld pálya egymásban: a gyerekek a legkisebben kezdenek">
        {COURTS.map((c, i) => {
          const x = cx - c.w / 2;
          const y = cy - c.h / 2;
          return (
            <g key={c.id} className={`levels__court levels__court--${i}`} stroke={c.color}>
              <rect x={x} y={y} width={c.w} height={c.h} rx="3" />
              <line x1={cx} y1={y - 8} x2={cx} y2={y + c.h + 8} className="levels__net" />
              <line x1={x + c.w * 0.22} y1={cy} x2={x + c.w * 0.78} y2={cy} />
              <line x1={x + c.w * 0.22} y1={y} x2={x + c.w * 0.22} y2={y + c.h} />
              <line x1={x + c.w * 0.78} y1={y} x2={x + c.w * 0.78} y2={y + c.h} />
            </g>
          );
        })}
      </svg>
      <figcaption className="levels__keys">
        {SCHOOL.levels.map((l, i) => (
          <span key={l} className={`levels__key levels__key--${i}`}>
            <i aria-hidden="true" />
            {l}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
