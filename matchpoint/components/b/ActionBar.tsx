import { CLUB } from "@/lib/site";
import { IconPhone } from "./icons";

/** Phones only: jump to the prices, or call to book (court, coaching and the school). */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href="#palya" className="btn btn--ghost">
        Árak
      </a>
      <a href={CLUB.phoneHref} className="btn btn--accent">
        <IconPhone /> Foglalás telefonon
      </a>
    </div>
  );
}
