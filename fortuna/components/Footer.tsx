import Image from "next/image";
import Link from "next/link";
import { CLUB, HOURS, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/logo-fortuna.png" alt="Fortuna SE" width={190} height={39} />
          <p className="footer__motto">
            Tenisz gyerekeknek és felnőtteknek, <em>a Gyökér utcában.</em>
          </p>
          <p className="footer__social">
            <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            <a href={CLUB.phoneHref}>
              {CLUB.phone} <span className="footer__muted">· {CLUB.phoneName}</span>
            </a>
            <a href={CLUB.phone2Href}>
              {CLUB.phone2} <span className="footer__muted">· {CLUB.phone2Name}</span>
            </a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Fedett pályák</h2>
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
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {CLUB.fullName}</span>
        <span className="footer__muted">
          Bankszámla ({CLUB.bank.name}): {CLUB.bank.account} · {CLUB.bank.holder}
        </span>
      </div>
    </footer>
  );
}
