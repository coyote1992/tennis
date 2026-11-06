import Image from "next/image";
import { CLUB, HOURS } from "@/lib/site";
import { NAV_B } from "./nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__logo">
            <Image src="/img/otv-labda.png" alt="" width={56} height={56} />
            <span>
              Open Tennis Valley
              <small>Mogyoródi Tenisz Centrum</small>
            </span>
          </span>
          <p className="footer__motto">
            Teniszklub Mogyoródon: 6 salakpálya, <em>egész évben.</em>
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
            {HOURS.map((h) => (
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
              <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href={CLUB.appStore} target="_blank" rel="noopener noreferrer">
                OTV app · App Store
              </a>
            </li>
            <li>
              <a href={CLUB.googlePlay} target="_blank" rel="noopener noreferrer">
                OTV app · Google Play
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
        <span>© {CLUB.legal}</span>
        <a href={CLUB.clubRules} target="_blank" rel="noopener noreferrer" className="footer__muted">
          Klubszabályzat (PDF)
        </a>
      </div>
    </footer>
  );
}
