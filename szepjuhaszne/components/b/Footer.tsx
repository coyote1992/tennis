import Image from "next/image";
import { CLUB, HOURS } from "@/lib/site";
import { NAV_B } from "./nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__mark">
            <Image src="/img/logo-vilagos.png" alt="Szép Juhászné Teniszklub" width={512} height={512} className="footer__logo" />
            <p className="footer__name">
              Szép Juhászné
              <small>Teniszklub</small>
            </p>
          </div>
          <p className="footer__motto">
            <em>Tenisz a Hárshegy lábánál,</em> klubház tenisztörténeti kiállítással.
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
          <h2 className="footer__title">Nyitvatartás</h2>
          <ul className="footer__list">
            {HOURS.map((h) => (
              <li key={h.days} className="footer__muted">
                {h.days}: <span className="nobr">{h.time}</span>
              </li>
            ))}
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
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {CLUB.name}</span>
        <span>{CLUB.address}</span>
      </div>
    </footer>
  );
}
