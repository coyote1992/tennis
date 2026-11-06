import Image from "next/image";
import { CLUB, SEASON } from "@/lib/site";
import { NAV_B } from "./nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/logo-korvonal.svg" alt="Balatonalmádi Tenisz Klub, 1925" width={141} height={141} className="footer__logo" unoptimized />
          <p className="footer__sub">{CLUB.full}</p>
          <p className="footer__motto">
            <em>Hat salakpálya a Balaton partján, 1925 óta.</em>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.phoneHref}>{CLUB.phone}</a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            <span className="footer__muted">Szezonban: {CLUB.hours}</span>
            {SEASON.closed && <span className="footer__muted">Nyitás: {SEASON.reopen}</span>}
          </address>
        </div>

        <div>
          <h2 className="footer__title">Foglalás</h2>
          <ul className="footer__list">
            <li>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
                Foggo naptár
              </a>
            </li>
            <li>
              <a href={CLUB.bookingPrices} target="_blank" rel="noopener noreferrer">
                Bérletek a Foggóban
              </a>
            </li>
            <li>
              <a href={CLUB.phoneHref}>Telefonon: {CLUB.phone}</a>
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
