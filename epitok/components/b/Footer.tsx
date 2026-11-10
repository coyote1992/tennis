import Image from "next/image";
import { CLUB, VENUE } from "@/lib/site";
import { IconFacebook } from "./icons";
import { NAV_B } from "./nav";

const nb = (t: string) => t.replace(/ /g, " ");

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="/b" className="brand brand--footer" aria-label="Építők Teniszklub – kezdőlap">
            <Image src="/img/epitok-cimer.png" alt="" width={787} height={906} className="brand__logo" />
            <span className="brand__name">
              Építők Teniszklub
              <small>Budapest · Népliget</small>
            </span>
          </a>
          <p className="footer__motto">
            12 salakos teniszpálya a Népligetben, egy sporttelepen, amely <em>1896 óta</em> a park része.
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.phoneHref}>
              {nb(CLUB.phone)} <span className="footer__muted">{CLUB.contact}</span>
            </a>
            <a href={CLUB.site.phoneHref}>
              {nb(CLUB.site.phone)} <span className="footer__muted">{CLUB.site.name}, {CLUB.site.role}</span>
            </a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Szezon</h2>
          <ul className="footer__list">
            <li>{VENUE.season}</li>
            <li>{VENUE.hours}</li>
            <li>
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer" className="footer__fb">
                <IconFacebook /> Facebook-csoport
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
        <span>
          © {CLUB.name} · alapítva {CLUB.founded}
        </span>
        <span>{CLUB.address}</span>
      </div>
    </footer>
  );
}
