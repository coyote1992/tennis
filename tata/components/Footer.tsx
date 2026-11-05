import Image from "next/image";
import Link from "next/link";
import { CLUB, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/cimer.png" alt="A Tata Városi Tenisz Klub címere" width={58} height={64} />
          <p className="footer__motto">
            {CLUB.fullName}. <em>Tata egyik legszebb pontján.</em>
          </p>
          <p className="footer__tax">
            Támogasd a klubot adód 1%-ával: <strong>{CLUB.taxId}</strong>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            <a href={CLUB.bookingPhoneHref}>
              {CLUB.bookingPhone} <span className="footer__muted">(pályafoglalás)</span>
            </a>
            <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
            <span className="footer__muted">Levelezési cím: {CLUB.mail}</span>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Foglalás</h2>
          <ul className="footer__list">
            <li>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
                Online, az e-foglalóban
              </a>
            </li>
            <li>
              <Link href="/palyarend">Pályahasználati rend</Link>
            </li>
            <li>
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
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
        <span>© {CLUB.name} · alakult {CLUB.founded}</span>
        <span className="footer__muted">Cseke-liget, Tata</span>
      </div>
    </footer>
  );
}
