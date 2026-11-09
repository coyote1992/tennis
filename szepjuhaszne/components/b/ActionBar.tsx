import { CLUB } from "@/lib/site";
import { IconCard, IconPhone } from "./icons";

/** Phones only: the winter prices, or call Gáspár Balázs (courts are booked by phone). */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href="#arak" className="btn btn--ghost">
        <IconCard /> Árak
      </a>
      <a href={CLUB.phoneHref} className="btn btn--accent">
        <IconPhone /> Pályafoglalás
      </a>
    </div>
  );
}
