import Image from "next/image";
import Link from "next/link";
import { CLUB, COACHES, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/logo-btk.png" alt="Bajai Tenisz Klub" width={120} height={110} />
          <p className="footer__motto">
            Tenisz a Petőfi-szigeten, <em>{CLUB.founded} óta.</em>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.centre}
              <br />
              <span className="footer__muted">{CLUB.address}</span>
            </a>
            <a href={CLUB.caretakerHref}>
              {CLUB.caretakerPhone} <span className="footer__muted">· gondnok</span>
            </a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Edzők</h2>
          <ul className="footer__list">
            {COACHES.map((c) => (
              <li key={c.name}>
                <a href={c.href}>
                  {c.name}
                  <br />
                  <span className="footer__muted">{c.phone}</span>
                </a>
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

      <div className="container footer__support">
        <p className="footer__sponsor">
          <Image src="/img/he-do.jpg" alt="HE-DO Kft." width={64} height={63} />
          <span>
            Támogatónk
            <br />
            <strong>HE-DO Kft.</strong>
          </span>
        </p>
        <p className="footer__grant">
          <Image src="/img/infoblokk-szechenyi2020.png" alt="Széchenyi 2020 – Európai Unió, Magyarország Kormánya" width={110} height={78} />
          <span>
            Kamatmentes Újraindítási Gyorskölcsön Hitelprogram, 10 millió forint visszatérítendő hitel. A finanszírozás a COVID-19
            világjárványra adott uniós válasz része.
          </span>
        </p>
      </div>

      <div className="container footer__bottom">
        <span>
          © {CLUB.name} · alapítva {CLUB.founded}
        </span>
        <span className="footer__muted">Bankszámla: {CLUB.bank}</span>
      </div>
    </footer>
  );
}
