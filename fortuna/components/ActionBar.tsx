import { CLUB } from "@/lib/site";
import { IconMail, IconPhone } from "./icons";

/** Phones only: courts and lessons are booked by phone or e-mail. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.emailHref} className="btn btn--ghost">
        <IconMail /> E-mail
      </a>
      <a href={CLUB.phoneHref} className="btn btn--accent">
        <IconPhone /> Hívás · {CLUB.phoneName.split(" ")[1]}
      </a>
    </div>
  );
}
