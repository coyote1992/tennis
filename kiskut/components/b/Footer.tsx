import Image from "next/image";
import Link from "next/link";
import { CLUB, HOURS, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/logo.png" alt="Fehérvár Kiskút Tenisz Klub címer" width={64} height={64} />
          <p className="footer__motto">
            Kiskút Tenisz Klub, <em>több mint tenisz.</em>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            <a href={CLUB.phoneHref}>{CLUB.phone}</a>
            <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Nyitvatartás</h2>
          <ul className="footer__list">
            {HOURS.map((h) => (
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
            <li>
              <Link href="/b/hazirend">Házirend</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {CLUB.fullName}</span>
        <span className="footer__legal">
          <a href={`${CLUB.legacySite}/aszf`} target="_blank" rel="noopener noreferrer">
            ÁSZF
          </a>
          <a href={`${CLUB.legacySite}/adatvedelmi-tajekoztato/`} target="_blank" rel="noopener noreferrer">
            Adatvédelem
          </a>
          <a href={`${CLUB.legacySite}/impressum`} target="_blank" rel="noopener noreferrer">
            Impresszum
          </a>
        </span>
      </div>
    </footer>
  );
}
