import Image from "next/image";
import { CLUB } from "@/lib/site";
import { NAV_B } from "./nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/cimer.svg" alt="Pécs 2000 Tenisz Club" width={96} height={96} />
          <p className="footer__motto">
            A Koncz Tennis Team klubja Pécsett, <em>1993 óta.</em>
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
          </address>
        </div>

        <div>
          <h2 className="footer__title">Kövess minket</h2>
          <ul className="footer__list">
            <li>
              <a href={CLUB.instagram.url} target="_blank" rel="noopener noreferrer">
                Instagram · @{CLUB.instagram.handle}
              </a>
            </li>
            <li>
              <a href={CLUB.tiktok.url} target="_blank" rel="noopener noreferrer">
                TikTok · @{CLUB.tiktok.handle}
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
        <span className="footer__muted">Gyermek és felnőtt teniszoktatás · Pécs</span>
      </div>
    </footer>
  );
}
