import { CLUB, HOURS, INTRO } from "@/lib/site";
import { Brand } from "./Header";
import { IconExternal, IconFacebook } from "./icons";
import { NAV_B } from "./nav";

const nb = (t: string) => t.replace(/ /g, " ").replace(/–/g, "–⁠");

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="/b" className="brand brand--footer" aria-label="Folyondár Sportközpont – kezdőlap">
            <Brand footer />
          </a>
          <p className="footer__motto">
            {CLUB.full}. <em>{INTRO.place}</em>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.phoneHref}>
              {nb(CLUB.phone)} <span className="footer__muted">recepció</span>
            </a>
            <a href={CLUB.phone2Href}>{nb(CLUB.phone2)}</a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Nyitvatartás</h2>
          <ul className="footer__list">
            {HOURS.center.map((h) => (
              <li key={h.days}>
                {nb(h.days)} <span className="footer__muted">{nb(h.time)}</span>
              </li>
            ))}
            <li>
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer" className="footer__fb">
                <IconFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href={CLUB.events.site} target="_blank" rel="noopener noreferrer" className="footer__fb">
                <IconExternal /> Rendezvények
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Az oldalon</h2>
          <ul className="footer__list">
            {NAV_B.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {CLUB.full}</span>
        <span>{CLUB.address}</span>
      </div>
    </footer>
  );
}
