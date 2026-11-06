import { CLUB } from "@/lib/site";
import { IconArrow, IconPhone } from "./icons";

/** Phones only: call the caretaker, or open the online court booking. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.caretakerHref} className="btn btn--ghost">
        <IconPhone /> Gondnok
      </a>
      <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
        Online foglalás <IconArrow />
      </a>
    </div>
  );
}
