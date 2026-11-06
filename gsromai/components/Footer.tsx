import Image from "next/image";
import Link from "next/link";
import { CLUB, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/rpa-logo.png" alt="Római Padel Akadémia" width={120} height={113} />
          <p className="footer__motto">
            Edzések, pályafoglalás, versenyek, <em>közösség.</em>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Padel és komplexum</h2>
          <address className="footer__list">
            <a href={CLUB.padel.href}>{CLUB.padel.phone}</a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            <span className="footer__muted">{CLUB.hours}</span>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Tenisz · {CLUB.tennis.club}</h2>
          <address className="footer__list">
            <a href={CLUB.tennis.href}>{CLUB.tennis.phone}</a>
            <a href={`mailto:${CLUB.tennis.email}`}>{CLUB.tennis.email}</a>
            <a href={CLUB.tennis.booking} target="_blank" rel="noopener noreferrer">
              Online pályafoglalás
            </a>
            <span className="footer__muted">{CLUB.tennisUntil}</span>
          </address>
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
          © {CLUB.name} · {CLUB.alsoKnown}
        </span>
        <span className="footer__muted">A komplexum teljes területe akadálymentesített</span>
      </div>
    </footer>
  );
}
