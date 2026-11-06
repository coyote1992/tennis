import { PRICES } from "@/lib/site";

/** The 2026 season's court fees: one row per ticket type, weekday and weekend side by side. */
export function PriceTable() {
  return (
    <div className="pricecard glass">
      <p className="pricecard__title">
        Pályabérlés <span>· Ft / pálya, 2026-os szezon</span>
      </p>
      <table className="pricetable">
        <thead>
          <tr>
            <th scope="col">Típus</th>
            <th scope="col">Hétköznap</th>
            <th scope="col">Hétvégén</th>
          </tr>
        </thead>
        <tbody>
          {PRICES.map((p) => (
            <tr key={p.type}>
              <th scope="row">
                {p.type}
                <small>{p.note}</small>
              </th>
              <td data-label="Hétköznap">
                {p.weekday}
                {p.weekdayHour ? <small>{p.weekdayHour} Ft / óra</small> : <small>Ft / óra</small>}
              </td>
              <td data-label="Hétvégén">
                {p.weekend}
                {p.weekendHour ? <small>{p.weekendHour} Ft / óra</small> : <small>Ft / óra</small>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
