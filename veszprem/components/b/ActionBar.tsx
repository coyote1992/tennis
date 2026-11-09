import { CLUB } from "@/lib/site";
import { IconPhone } from "./icons";

/** Phones only: jump to the court prices, or call the reception (courts, coaching, stringing, racket test). */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href="#palyak" className="btn btn--ghost">
        Pályaárak
      </a>
      <a href={CLUB.phoneHref} className="btn btn--accent">
        <IconPhone /> Recepció
      </a>
    </div>
  );
}
