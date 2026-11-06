import Image from "next/image";
import { CLUB, HOURS } from "@/lib/site";
import { NAV_B } from "./nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__logo">
            <Image src="/img/logo.png" alt="Marcal Teniszcentrum" width={200} height={74} />
          </span>
          <p className="footer__motto">
            Tenisz, padel, squash és bowling Győrben, <em>2006 óta.</em>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.phoneHref}>{CLUB.phone}</a>
            <a href={CLUB.phone2Href}>{CLUB.phone2}</a>
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
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={CLUB.tiktok} target="_blank" rel="noopener noreferrer">
                TikTok
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
        <span className="footer__muted">Mozgás. Játék. Egészség.</span>
      </div>
    </footer>
  );
}
