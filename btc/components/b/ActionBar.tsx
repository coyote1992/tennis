import { CLUB } from "@/lib/site";
import { IconArrow, IconPhone } from "./icons";

/** Phones only: call the reception, or jump to the booking / training form. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.phoneHref} className="btn btn--ghost">
        <IconPhone /> Recepció
      </a>
      <a href="#jelentkezes" className="btn btn--accent">
        Foglalás, jelentkezés <IconArrow />
      </a>
    </div>
  );
}
