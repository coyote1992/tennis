import Image from "next/image";
import { CLUB, HOURS, SHOP } from "@/lib/site";
import { NAV_B } from "./nav";

const nb = (t: string) => t.replace(/ /g, " ");

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="/b" className="brand brand--footer" aria-label="Match-Point Tennis Club & Shop – kezdőlap">
            <Image src="/img/logo-sotet-hatter.png" alt="Match-Point Tennis Club & Shop" width={220} height={139} className="brand__logo" />
          </a>
          <p className="footer__motto">
            <em>{CLUB.quote.text}</em> {CLUB.quote.by}
          </p>
        </div>

        <div>
          <h2 className="footer__title">Recepció</h2>
          <address className="footer__list">
            <a href={CLUB.phoneHref}>{nb(CLUB.phone)}</a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <a href={`mailto:${CLUB.emailAlt}`}>{CLUB.emailAlt}</a>
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Nyitva (shop)</h2>
          <ul className="footer__list">
            {HOURS.map((h) => (
              <li key={h.days}>
                <span className="footer__muted">{h.days}</span> {nb(h.time)}
              </li>
            ))}
            <li>
              <a href={CLUB.webshop} target="_blank" rel="noopener noreferrer">
                Webshop: {SHOP.claim}
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
        <span>© {CLUB.name}</span>
        <span>
          {CLUB.company}, {CLUB.address}
        </span>
      </div>
    </footer>
  );
}
