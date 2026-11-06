import Image from "next/image";
import { CLUB } from "@/lib/site";
import { NAV_B } from "./nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/logo-vilagos.png" alt="PG Tenisz" width={560} height={504} className="footer__logo" />
          <p className="footer__sub">{CLUB.full}</p>
          <p className="footer__motto">
            <em>{CLUB.motto}</em>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.coachPhoneHref}>Edzés: {CLUB.coachPhone}</a>
            <a href={CLUB.courtPhoneHref}>Pályabérlés: {CLUB.courtPhone}</a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.venue}, {CLUB.venueAddress}
            </a>
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
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {CLUB.full} · {CLUB.seat}
        </span>
        <span>Adószám: {CLUB.taxNumber}</span>
      </div>
    </footer>
  );
}
