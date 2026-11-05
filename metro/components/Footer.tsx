import Image from "next/image";
import Link from "next/link";
import { CLUB, HOURS, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/cimer.png" alt="A Rákosszentmihályi Sport Club címere, alapítva 1950" width={72} height={72} />
          <p className="footer__motto">
            {CLUB.fullName}. <em>Mindenünk a tenisz.</em>
          </p>
          <p className="footer__social">
            <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={CLUB.youtube} target="_blank" rel="noopener noreferrer">
              YouTube
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
              <Link href="/hazirend">Házirend</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {CLUB.short} · alapítva {CLUB.founded}
        </span>
        <span className="footer__muted">Budapest XVI. kerület, Rákosszentmihály</span>
      </div>
    </footer>
  );
}
