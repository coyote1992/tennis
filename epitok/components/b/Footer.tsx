import Image from "next/image";
import { CLUB } from "@/lib/site";
import { NAV_B } from "./nav";

const nb = (t: string) => t.replace(/ /g, " ");

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="/b" className="brand brand--footer" aria-label="Invest Sportcentrum és Vendégház – kezdőlap">
            <Image src="/img/invest-logo.png" alt="" width={512} height={512} className="brand__logo" />
            <span className="brand__name">
              Invest Sportcentrum
              <small>és Vendégház · Eger</small>
            </span>
          </a>
          <p className="footer__motto">
            {CLUB.tagline}: 7 salakos és 2 fedett teniszpálya, 4 fallabdapálya, szauna, büfé és egy 6 szobás vendégház egy helyen.
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.phoneHref}>
              {nb(CLUB.phone)} <span className="footer__muted">pályafoglalás telefonon</span>
            </a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Nyitva</h2>
          <ul className="footer__list">
            <li>
              <span className="footer__muted">Büfé és recepció</span> minden nap {nb("8:00–20:00")}
            </li>
            <li>
              <a href={CLUB.roomBooking} target="_blank" rel="noopener noreferrer">
                Szobafoglalási űrlap
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
          © {CLUB.name} · {CLUB.company}
        </span>
        <span>{CLUB.address}</span>
      </div>
    </footer>
  );
}
