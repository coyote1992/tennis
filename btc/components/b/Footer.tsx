import Image from "next/image";
import { CLUB } from "@/lib/site";
import { NAV_B } from "./nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/logo-sotet.png" alt="Budapest Tenisz Centrum" width={438} height={438} className="footer__logo" />
          <p className="footer__sub">
            {CLUB.name} · {CLUB.short}
          </p>
          <p className="footer__motto">
            <em>Aktív teniszélet a Városmajor szívében.</em>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.phoneHref}>Recepció: {CLUB.phone}</a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            {CLUB.hours.map((h) => (
              <span key={h.days} className="footer__muted">
                {h.days}: {h.time}
              </span>
            ))}
          </address>
        </div>

        <div>
          <h2 className="footer__title">Kövess minket</h2>
          <ul className="footer__list">
            <li>
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
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
            <li>
              <a href="#jelentkezes">Foglalás, jelentkezés</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {CLUB.name} ({CLUB.short})
        </span>
        <span>{CLUB.address}</span>
      </div>
    </footer>
  );
}
