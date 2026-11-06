import { CLUB } from "@/lib/site";
import { IconArrow, IconMail } from "./icons";

/** Phones only: write to the club, or open the online court booking. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.emailHref} className="btn btn--ghost">
        <IconMail /> Írj nekünk
      </a>
      <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
        Pályafoglalás <IconArrow />
      </a>
    </div>
  );
}
