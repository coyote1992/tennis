/**
 * The tent's cheaper, unheated hours from the Pályafoglalás page, drawn on the week from 7:00 to
 * 21:00 (the published opening hours). Monday and Wednesday have no discounted window.
 */
const START = 7;
const END = 21;

const WEEK: { day: string; from?: number; to?: number; label?: string }[] = [
  { day: "Hétfő" },
  { day: "Kedd", from: 7, to: 14, label: "14:00-ig" },
  { day: "Szerda" },
  { day: "Csütörtök", from: 7, to: 14, label: "14:00-ig" },
  { day: "Péntek", from: 7, to: 14, label: "14:00-ig" },
  { day: "Szombat", from: 16, to: 21, label: "16:00-tól" },
  { day: "Vasárnap", from: 13, to: 21, label: "13:00-tól" },
];

const pct = (h: number) => `${((h - START) / (END - START)) * 100}%`;

export function WeekChart() {
  return (
    <figure className="week">
      <div className="week__axis" aria-hidden="true">
        {[7, 10, 13, 16, 19, 21].map((h) => (
          <span key={h} style={{ left: pct(h) }}>
            {h}:00
          </span>
        ))}
      </div>
      <ul className="week__rows">
        {WEEK.map((d) => (
          <li key={d.day} className="week__row">
            <span className="week__day">{d.day}</span>
            <span className="week__bar">
              {d.from !== undefined && d.to !== undefined ? (
                <span className="week__deal" style={{ left: pct(d.from), width: `calc(${pct(d.to)} - ${pct(d.from)})` }}>
                  {d.label}
                </span>
              ) : (
                <span className="week__none">nincs kedvezményes sáv</span>
              )}
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="week__key">
        <span className="week__swatch" aria-hidden="true" /> Kedvezményes sátras ár, fűtés nélkül · a sáv a 7–21 órás nyitvatartáson belül
      </figcaption>
    </figure>
  );
}
