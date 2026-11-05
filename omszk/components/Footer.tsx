import Image from "next/image";
import Link from "next/link";
import { CLUB, HOURS, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/logo-pin.png" alt="OMSZK Park Tenisz logó" width={44} height={66} />
          <p className="footer__motto">
            Természetközeli, modern teniszklub Budapest határán, <em>az Omszki-tó partján.</em>
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
              <Link href="/gyerek-tanfolyam">Gyerek tanfolyam</Link>
            </li>
            <li>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
                Online foglalás
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {CLUB.fullName} · Budakalász</span>
        <span className="footer__muted">Budapest határán, az M0-ról könnyen elérhető</span>
      </div>
    </footer>
  );
}
