import Image from "next/image";
import { BUILD, CLUB, OPEN } from "@/lib/site";
import { NAV_B } from "./nav";

const nb = (t: string) => t.replace(/ /g, " ");

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="/b" className="brand brand--footer" aria-label="Barango Tenisz Club – kezdőlap">
            <Image src="/img/barango-jel-pontok.png" alt="" width={900} height={900} className="brand__logo" />
            <span className="brand__name">
              Barango
              <small>Tenisz Club · {CLUB.town}</small>
            </span>
          </a>
          <p className="footer__motto">
            <em>Salakpálya Érden,</em> {OPEN.days.toLowerCase()} {OPEN.hours}.
          </p>
        </div>

        <div>
          <h2 className="footer__title">Foglalás, edzés, tenisziskola</h2>
          <address className="footer__list">
            <span className="footer__muted">
              {CLUB.contact}, {CLUB.contactRole.replace(/-/g, "\u2011")}
            </span>
            <a href={CLUB.phoneHref}>{nb(CLUB.phone)}</a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Pályaépítés</h2>
          <address className="footer__list">
            <span className="footer__muted">{BUILD.contact.name}</span>
            <a href={BUILD.contact.phoneHref}>{nb(BUILD.contact.phone)}</a>
            <a href={`mailto:${BUILD.contact.email}`}>{BUILD.contact.email}</a>
          </address>
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
          Üzemeltető: {CLUB.operator}, {CLUB.operatorAddress}
        </span>
      </div>
    </footer>
  );
}
