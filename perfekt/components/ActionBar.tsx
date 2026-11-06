import { CLUB } from "@/lib/site";
import { IconMail, IconPhone } from "./icons";

/** Phones only: call the club, or ask to be told when it reopens in spring. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.phoneHref} className="btn btn--ghost">
        <IconPhone /> Hívás
      </a>
      <a href={CLUB.notifyHref} className="btn btn--accent">
        <IconMail /> Szóljatok, ha nyitunk
      </a>
    </div>
  );
}
