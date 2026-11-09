import Image from "next/image";
import { CLUB } from "@/lib/site";
import { NAV_B } from "./nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__mark">
            <Image src="/img/logo.png" alt="Tennis Club Szigliget" width={608} height={532} className="footer__logo" />
            <p className="footer__name">
              {CLUB.name}
              <small>{CLUB.region}</small>
            </p>
          </div>
          <p className="footer__motto">
            <em>Salakpályák Szigligeten, minden nap 8-tól 21-ig.</em> A pályákat {CLUB.operators} üzemeltetik.
          </p>
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
          <h2 className="footer__title">Foglalás</h2>
          <ul className="footer__list">
            <li>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
                Online pályafoglalás
              </a>
            </li>
            <li>
              <a href={CLUB.membershipShop} target="_blank" rel="noopener noreferrer">
                Klubtagság vásárlása
              </a>
            </li>
            <li>
              <a href={CLUB.rules} target="_blank" rel="noopener noreferrer">
                Házirend
              </a>
            </li>
            <li>
              <a href={CLUB.terms} target="_blank" rel="noopener noreferrer">
                ÁSZF
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Az oldalon</h2>
          <ul className="footer__list">
            {NAV_B.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {CLUB.legal}</span>
        <span>{CLUB.address}</span>
      </div>
    </footer>
  );
}
