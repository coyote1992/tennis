import { CLUB } from "@/lib/site";
import { IconArrow, IconPhone } from "./icons";

/** Phones only: call the club, or jump to court booking (the club's own app). */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.phoneHref} className="btn btn--ghost">
        <IconPhone /> Hívás
      </a>
      <a href="#foglalas" className="btn btn--accent">
        Foglalás <IconArrow />
      </a>
    </div>
  );
}
