import { Icon } from "@/components/shared/Icon";
import { SITE } from "@/lib/site";

/** Phones only: call the club, or jump to the sign-up form. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={SITE.phone.href} className="btn btn--ghost">
        <Icon name="phone" /> Hívás
      </a>
      <a href="#jelentkezes" className="btn btn--accent">
        Jelentkezés <Icon name="arrow" />
      </a>
    </div>
  );
}
