import Image from "next/image";
import { CLUB, HOURS } from "@/lib/site";
import { NAV_B } from "./nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__mark">
            <Image src="/img/logo.png" alt="Szoboszlótenisz" width={611} height={611} className="footer__logo" />
            <p className="footer__name">
              Szoboszlótenisz
              <small>Hungarospa Sportcentrum</small>
            </p>
          </div>
          <p className="footer__motto">
            <em>Tenisz a fürdővárosban,</em> télen-nyáron.
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
            <span className="footer__muted">{CLUB.entrance}</span>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Nyitvatartás</h2>
          <ul className="footer__list">
            {HOURS.map((h) => (
              <li key={h.days} className="footer__muted">
                {h.days}: <span className="nobr">{h.time}</span>
              </li>
            ))}
            <li>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
                Online pályafoglalás
              </a>
            </li>
            <li>
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                Facebook-csoport
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
        <span>
          © {CLUB.name} · Üzemeltető: {CLUB.operator}
        </span>
        <span>{CLUB.address}</span>
      </div>
    </footer>
  );
}
