import { CLUB } from "@/lib/site";
import { IconArrow, IconPhone } from "./icons";

/** Phones only: call about free slots, or open the online booking. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.contact.href} className="btn btn--ghost">
        <IconPhone /> Hívás
      </a>
      <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
        Időpontfoglalás <IconArrow />
      </a>
    </div>
  );
}
