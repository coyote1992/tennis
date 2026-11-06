import Image from "next/image";
import Link from "next/link";
import { CLUB, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/bibic-jelveny.png" alt="Bíbic Tennis Club, Nyíregyháza" width={104} height={104} />
          <p className="footer__motto">
            Sport és kikapcsolódás <em>tóparti környezetben.</em>
          </p>
          <p className="footer__social">
            <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={CLUB.hotel} target="_blank" rel="noopener noreferrer">
              Bíbic Hotel
            </a>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Teniszpályák</h2>
          <address className="footer__list">
            <span>{CLUB.contact.name}</span>
            <a href={CLUB.contact.href}>{CLUB.contact.phone}</a>
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
              Online időpontfoglalás
            </a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Tüskevár</h2>
          <address className="footer__list">
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            <a href={CLUB.hotelPhoneHref}>{CLUB.hotelPhone}</a>
            <a href={CLUB.hotelMobileHref}>{CLUB.hotelMobile}</a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
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
        <span>© {CLUB.name} · Tüskevár, Nyíregyháza</span>
        <span className="footer__muted">Online fizetés a foglaláskor</span>
      </div>
    </footer>
  );
}
