import Link from "next/link";
import { CLUB } from "@/lib/site";
import { IconArrow, IconPhone } from "./icons";

/** Phones only: call about a court, or open the online booking. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.bookingPhoneHref} className="btn btn--ghost">
        <IconPhone /> Hívás
      </a>
      <Link href="/#probald-ki" className="btn btn--accent">
        Kipróbálom <IconArrow />
      </Link>
    </div>
  );
}
