"use client";

/**
 * Which ball, which category: the MTSZ age table from the Versenyzés page drawn as a chart (ages 6–16
 * across, one row per ball), with the competitor training plan by age group under it. Pick an age and
 * the column lights up, the matching categories and the plan are spelled out. Nothing beyond the table:
 * before 7 there is no category in it, so the text says only that.
 */
import { useState } from "react";
import { COMPETE } from "@/lib/site";

const AGES = Array.from({ length: 11 }, (_, i) => 6 + i);
const col = (age: number) => age - 5;

export function BallChart() {
  const [age, setAge] = useState(9);
  const cats = COMPETE.categories.filter((c) => age >= c.from && age <= c.to);
  const plan = age <= 8 ? COMPETE.training[0] : COMPETE.training[1];

  return (
    <div className="bc">
      <div className="bc__ages" role="group" aria-label="A gyerek életkora">
        <span className="bc__ask">Hány éves a gyerek?</span>
        <div className="bc__grid">
          {AGES.map((a) => (
            <button key={a} type="button" className="bc__age" aria-pressed={age === a} onClick={() => setAge(a)} style={{ gridColumn: col(a) }}>
              {a}
            </button>
          ))}
        </div>
      </div>

      <div className="bc__rows">
        {COMPETE.categories.map((c) => {
          const on = age >= c.from && age <= c.to;
          return (
            <div key={c.cat} className={`bc__row${on ? " is-on" : ""}`}>
              <span className="bc__label">
                <i style={{ background: c.color }} aria-hidden="true" />
                {c.ball} <small>{c.cat}</small>
              </span>
              <div className="bc__grid" aria-hidden="true">
                <span className="bc__col" style={{ gridColumn: col(age) }} />
                <span className="bc__bar" style={{ gridColumn: `${col(c.from)} / ${col(Math.min(c.to, 16)) + 1}`, background: c.color }}>
                  {c.to >= 16 && <em>→</em>}
                </span>
              </div>
            </div>
          );
        })}
        {COMPETE.training.map((t, i) => {
          const from = i === 0 ? 6 : 9;
          const to = i === 0 ? 8 : 16;
          const on = age >= from && age <= to;
          return (
            <div key={t.ages} className={`bc__row bc__row--plan${on ? " is-on" : ""}`}>
              <span className="bc__label">Versenyzői képzés, {t.ages}</span>
              <div className="bc__grid" aria-hidden="true">
                <span className="bc__col" style={{ gridColumn: col(age) }} />
                <span className="bc__bar bc__bar--plan" style={{ gridColumn: `${col(from)} / ${col(to) + 1}` }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bc__out" aria-live="polite">
        <div>
          <p className="bc__k">{age} évesen: MTSZ-verseny</p>
          {cats.length ? (
            <ul className="bc__cats">
              {cats.map((c) => (
                <li key={c.cat}>
                  <i style={{ background: c.color }} aria-hidden="true" />
                  <b>{c.ball}</b> · {c.cat}
                </li>
              ))}
            </ul>
          ) : (
            <p className="bc__none">A versenyzési táblázat a 7–8 éveseknél, piros labdával kezdődik. Addig: tenisz suli és háziversenyek.</p>
          )}
        </div>
        <div>
          <p className="bc__k">Versenyzői képzés ({plan.ages})</p>
          <ul className="bc__plan">
            {plan.plan.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
