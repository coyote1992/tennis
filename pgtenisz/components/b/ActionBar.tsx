import { CLUB } from "@/lib/site";
import { IconArrow, IconPhone } from "./icons";

/** Phones only: call about court rental, or jump to the training enquiry. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.courtPhoneHref} className="btn btn--ghost">
        <IconPhone /> Pályabérlés
      </a>
      <a href="#jelentkezes" className="btn btn--accent">
        Jelentkezés edzésre <IconArrow />
      </a>
    </div>
  );
}
