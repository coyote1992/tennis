import Image from "next/image";
import Link from "next/link";
import { CLUB, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/molnar-logo.png" alt="Molnár Teniszakadémia – Tenisz. Másképp." width={200} height={92} />
          <p className="footer__motto">
            Mottónk: <em>profizmus szívvel.</em>
          </p>
          <p className="footer__social">
            <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <span className="footer__muted">Fő szponzorunk: HEAD</span>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            <a href={CLUB.reception.href}>
              {CLUB.reception.phone}
              <br />
              <span className="footer__muted">{CLUB.reception.label}</span>
            </a>
            <a href={CLUB.coaching.href}>
              {CLUB.coaching.phone}
              <br />
              <span className="footer__muted">{CLUB.coaching.label}</span>
            </a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Nyitvatartás</h2>
          <ul className="footer__list">
            {CLUB.hours.map((h) => (
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
        <span>
          © {CLUB.name} · {CLUB.founded} óta
        </span>
        <span className="footer__muted">Budakeszi teniszcentrum, a város sportpályáján</span>
      </div>
    </footer>
  );
}
