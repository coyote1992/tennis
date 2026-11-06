import Image from "next/image";
import Link from "next/link";
import { CLUB, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/teniszcentrum-logo.png" alt="Egyetemi Tenisz – Teniszcentrum" width={220} height={50} />
          <p className="footer__motto">
            A pályák minden érdeklődő számára <em>nyitottak.</em>
          </p>
          <a href={CLUB.university} target="_blank" rel="noopener noreferrer" className="footer__uni">
            <Image src="/img/me-logo.png" alt="Miskolci Egyetem – University of Miskolc" width={180} height={47} />
          </a>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.phoneHref}>{CLUB.phone}</a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            <span className="footer__muted">{CLUB.hours}</span>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Online</h2>
          <ul className="footer__list">
            <li>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
                Pályafoglalás
              </a>
            </li>
            <li>
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                Facebook: Egyetemi Sportcentrum
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
        <span>© {CLUB.name}</span>
        <span className="footer__muted">Miskolci Egyetemi Sportcentrum</span>
      </div>
    </footer>
  );
}
