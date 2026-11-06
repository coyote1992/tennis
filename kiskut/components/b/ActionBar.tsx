import Link from "next/link";
import { CLUB } from "@/lib/site";
import { IconCalendar, IconPhone } from "./icons";

/** Phones only: the two things people come for, always one tap away. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.phoneHref} className="btn btn--ghost">
        <IconPhone /> Hívás
      </a>
      <Link href="/b#foglalas" className="btn btn--accent">
        <IconCalendar /> Pályafoglalás
      </Link>
    </div>
  );
}
