import { CLUB } from "@/lib/site";
import { IconCard, IconPhone } from "./icons";

/** Phones only: the price list, and a call to the reception (booking is by phone). */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href="#arak" className="btn btn--ghost">
        <IconCard /> Árak
      </a>
      <a href={CLUB.phoneHref} className="btn btn--accent">
        <IconPhone /> Hívás
      </a>
    </div>
  );
}
