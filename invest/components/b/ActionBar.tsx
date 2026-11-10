import { CLUB } from "@/lib/site";
import { IconPhone } from "./icons";

/** Phones only: the guesthouse, and a call — courts are booked by phone only. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href="#vendeghaz" className="btn btn--ghost">
        Szállás
      </a>
      <a href={CLUB.phoneHref} className="btn btn--accent">
        <IconPhone /> Pályafoglalás
      </a>
    </div>
  );
}
