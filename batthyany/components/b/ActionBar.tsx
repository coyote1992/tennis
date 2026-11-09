import { HOTEL } from "@/lib/site";
import { IconPhone } from "./icons";

/** Phones only: jump to the wellness days, or call the reception (court and wellness bookings). */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href="#wellness" className="btn btn--ghost">
        Wellness nap
      </a>
      <a href={HOTEL.phoneHref} className="btn btn--accent">
        <IconPhone /> Hívd a recepciót
      </a>
    </div>
  );
}
