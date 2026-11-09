import Image from "next/image";
import { CLUB, VENUE } from "@/lib/site";
import { NAV_B } from "./nav";

const nb = (t: string) => t.replace(/ /g, " ");

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="/b" className="brand brand--footer" aria-label="Tenisziskola Veszprém SE – kezdőlap">
            <Image src="/img/tvse-logo.png" alt="" width={512} height={512} className="brand__logo" />
            <span className="brand__name">
              Tenisziskola Veszprém
              <small>Sportegyesület · TVSE</small>
            </span>
          </a>
          <p className="footer__motto">
            Hét salakpálya a {CLUB.venue}ban, télen három sátorral. Online foglalás, edzők, nyári tábor, téli házibajnokság.
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.phoneHref}>
              {nb(CLUB.phone)} <span className="footer__muted">Lázár Ottó, pályafoglalás</span>
            </a>
            <a href={CLUB.phone2Href}>
              {nb(CLUB.phone2)} <span className="footer__muted">Mészáros Csaba</span>
            </a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Szezonok</h2>
          <ul className="footer__list">
            {VENUE.seasons.map((s) => (
              <li key={s.name}>
                <span className="footer__muted">{s.name}</span> {s.when}
              </li>
            ))}
            <li>
              <span className="footer__muted">Nyitva</span> {nb("7:00–21:00")}
            </li>
            <li>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
                Online pályafoglalás
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
        <span>
          {CLUB.venue}, {CLUB.address}
        </span>
      </div>
    </footer>
  );
}
