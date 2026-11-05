import Link from "next/link";
import { CLUB } from "@/lib/site";
import { IconPhone } from "./icons";

/** Phones only: book a court by phone, or start with the free trial lesson. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.phoneHref} className="btn btn--ghost">
        <IconPhone /> Pálya
      </a>
      <Link href="/#probaora" className="btn btn--accent">
        Ingyenes próbaóra
      </Link>
    </div>
  );
}
