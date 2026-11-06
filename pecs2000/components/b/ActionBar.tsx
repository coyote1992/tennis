import { CLUB } from "@/lib/site";
import { IconArrow, IconPhone } from "./icons";

/** Phones only: call the club, or jump to the course enquiry. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.phoneHref} className="btn btn--ghost">
        <IconPhone /> Hívás
      </a>
      <a href="#jelentkezes" className="btn btn--accent">
        Jelentkezés <IconArrow />
      </a>
    </div>
  );
}
