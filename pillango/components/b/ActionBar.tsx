import { CLUB } from "@/lib/site";
import { IconCalendar, IconPhone } from "./icons";

/** Phones only: the online court booking, and a call to the reception. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
        <IconCalendar /> Pályafoglalás
      </a>
      <a href={CLUB.phoneHref} className="btn btn--accent">
        <IconPhone /> Hívás
      </a>
    </div>
  );
}
