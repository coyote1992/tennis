import { CLUB } from "@/lib/site";
import { IconArrow, IconPhone } from "./icons";

/** Phones only: padel is booked by phone, tennis online. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.padel.href} className="btn btn--accent">
        <IconPhone /> Padel
      </a>
      <a href={CLUB.tennis.booking} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
        Tenisz <IconArrow />
      </a>
    </div>
  );
}
