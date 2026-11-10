import { CLUB } from "@/lib/site";
import { IconPhone } from "./icons";

/** Phones only: the price list, and a call — courts are booked by phone or e-mail. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href="#arak" className="btn btn--ghost">
        Árak
      </a>
      <a href={CLUB.phoneHref} className="btn btn--accent">
        <IconPhone /> Hívás
      </a>
    </div>
  );
}
