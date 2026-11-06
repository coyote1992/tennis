import { CLUB } from "@/lib/site";
import { IconMail, IconPhone } from "./icons";

/** Phones only: courts are booked at reception by phone; questions by e-mail. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.emailHref} className="btn btn--ghost">
        <IconMail /> E-mail
      </a>
      <a href={CLUB.reception.href} className="btn btn--accent">
        <IconPhone /> Pályafoglalás
      </a>
    </div>
  );
}
