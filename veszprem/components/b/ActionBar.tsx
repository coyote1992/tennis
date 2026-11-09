import { CLUB } from "@/lib/site";
import { IconExternal, IconPhone } from "./icons";

/** Phones only: the club's online booking calendar, or a call to book by phone. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.phoneHref} className="btn btn--ghost">
        <IconPhone /> Hívás
      </a>
      <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
        Online foglalás <IconExternal />
      </a>
    </div>
  );
}
