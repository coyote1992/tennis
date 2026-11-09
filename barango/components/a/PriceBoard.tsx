"use client";

/**
 * The court prices from the Árak page. The student switch takes the club's 500 Ft per hour off the
 * two hourly rates (the only places the site lists the discount); the 10-hour pass stays as published.
 */
import { useState } from "react";
import { Icon } from "@/components/shared/Icon";
import { PRICES, fmt } from "@/lib/site";

export function PriceBoard() {
  const [student, setStudent] = useState(false);
  const { pass } = PRICES;

  return (
    <div className="prices">
      <div className="prices__bar">
        <p className="prices__unit">Pályadíj, 60 perc</p>
        <label className="switch">
          <input type="checkbox" checked={student} onChange={(e) => setStudent(e.target.checked)} />
          <span className="switch__track" aria-hidden="true" />
          <span>Diák vagyok <small>(−{fmt(PRICES.studentOff)} Ft/óra)</small></span>
        </label>
      </div>
      <div className="prices__grid">
        {PRICES.hourly.map((h) => {
          const price = student ? h.price - PRICES.studentOff : h.price;
          return (
            <article key={h.id} className="price">
              <h3>{h.title}</h3>
              <p className="price__num" aria-live="polite">
                <b>{fmt(price)}</b> Ft<span>/óra</span>
              </p>
              <p className="price__when">
                <Icon name="clock" size={16} /> {h.when}
              </p>
              {student && <p className="price__tag">diákár</p>}
              <p className="price__foot">
                <Icon name="check" size={16} /> Diákkedvezmény: −{fmt(PRICES.studentOff)} Ft/óra
              </p>
            </article>
          );
        })}
        <article className="price price--pass">
          <h3>{pass.title}</h3>
          <p className="price__num">
            <b>{fmt(pass.price)}</b> Ft<span>/{pass.hours} óra</span>
          </p>
          <p className="price__when">
            <Icon name="calendar" size={16} /> {pass.valid}
          </p>
          <p className="price__note">{pass.change}</p>
        </article>
      </div>
    </div>
  );
}
