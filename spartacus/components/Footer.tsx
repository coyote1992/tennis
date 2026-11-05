import Image from "next/image";
import Link from "next/link";
import { CLUB, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/cimer.png" alt="Siófoki Spartacus SE címer" width={72} height={72} />
          <p className="footer__motto">
            Siófok teniszklubja, <em>ugyanott 1915 óta.</em>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            <a href={CLUB.managerPhoneHref}>
              {CLUB.managerPhone} <span className="footer__muted">(klubvezető)</span>
            </a>
            <a href={CLUB.clubPhoneHref}>
              {CLUB.clubPhone} <span className="footer__muted">(büfé)</span>
            </a>
            <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Foglalás</h2>
          <ul className="footer__list">
            <li>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
                {CLUB.bookingLabel}
              </a>
            </li>
            <li className="footer__muted">A hét minden napján, 0–24 órában</li>
            <li>
              <Link href="/palyarend">Pályarend</Link>
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
        <span>© {CLUB.fullName}</span>
        <span className="footer__muted">Jókai park, Siófok</span>
      </div>
    </footer>
  );
}
