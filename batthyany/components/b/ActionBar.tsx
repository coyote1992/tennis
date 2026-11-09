import { CLUB } from "@/lib/site";
import { IconCalendar, IconPhone } from "./icons";

/** Phones only: call the club, or book a court online. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.phoneHref} className="btn btn--ghost">
        <IconPhone /> Hívás
      </a>
      <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
        <IconCalendar /> Pályafoglalás
      </a>
    </div>
  );
}
