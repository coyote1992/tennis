import Image from "next/image";
import { CLUB, MISSION } from "@/lib/site";
import { NAV_B } from "./nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/logo-krem-2x.png" alt="Tréning Center" width={597} height={118} className="footer__logo" />
          <p className="footer__sub">Sport- és Szabadidőközpont · {CLUB.city}</p>
          <p className="footer__motto">
            Küldetésünk: <em>{MISSION.charAt(0).toLowerCase() + MISSION.slice(1)}</em>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.bookingPhoneHref}>Pályafoglalás: {CLUB.bookingPhone}</a>
            <a href={CLUB.officePhoneHref}>Iroda: {CLUB.officePhone}</a>
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
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
                Online foglalási naptár
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
        <span>© {CLUB.operator}</span>
        <span className="footer__grants">
          Pályázatok:{" "}
          {CLUB.grants.map((g, i) => (
            <span key={g.href}>
              {i > 0 && " · "}
              <a href={g.href} target="_blank" rel="noopener noreferrer" className="footer__muted">
                {g.label}
              </a>
            </span>
          ))}
        </span>
      </div>
    </footer>
  );
}
