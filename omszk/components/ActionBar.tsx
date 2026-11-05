import { CLUB } from "@/lib/site";
import { IconArrow, IconPhone } from "./icons";

/** Phones only: call, or open the online court booking. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.phoneHref} className="btn btn--ghost">
        <IconPhone /> Hívás
      </a>
      <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
        Pályafoglalás <IconArrow />
      </a>
    </div>
  );
}
