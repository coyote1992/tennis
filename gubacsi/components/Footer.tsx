import Image from "next/image";
import Link from "next/link";
import { CLUB, NAV, RECEPTION } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/logo-feher.png" alt="Gubacsi Zsófi Tenisz Klub SE" width={200} height={38} />
          <p className="footer__motto">
            Családias hangulat, profi hozzáállás. <em>Alapítva {CLUB.founded}.</em>
          </p>
          <p className="footer__social">
            <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            <a href={CLUB.phoneHref}>{CLUB.phone}</a>
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
              Online foglalás
            </a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Recepció</h2>
          <ul className="footer__list">
            {RECEPTION.map((h) => (
              <li key={h.days}>
                {h.days}
                <br />
                <span className="footer__muted">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Oldalak</h2>
          <ul className="footer__list">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {CLUB.fullName}</span>
        <span className="footer__muted">Vecsés, a Liszt Ferenc repülőtér mellett</span>
      </div>
    </footer>
  );
}
