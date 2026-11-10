import Image from "next/image";
import { CLUB } from "@/lib/site";
import { IconFacebook } from "./icons";
import { NAV_B } from "./nav";

const nb = (t: string) => t.replace(/ /g, " ");

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="/b" className="brand brand--footer" aria-label="Pillangó Tenisz Klub – kezdőlap">
            <Image src="/img/pillango-jel.png" alt="" width={256} height={256} className="brand__logo" />
            <span className="brand__name">
              Pillangó Tenisz Klub
              <small>Budapest · Zugló</small>
            </span>
          </a>
          <p className="footer__motto">
            Teniszklub a Pillangó Parkban, <em>{CLUB.founded} óta.</em> Nálunk mindenki teniszezhet.
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.phoneHref}>
              {nb(CLUB.phone)} <span className="footer__muted">recepció</span>
            </a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <a href={CLUB.headCoach.phoneHref}>
              {nb(CLUB.headCoach.phone)}{" "}
              <span className="footer__muted">
                {CLUB.headCoach.name}, {CLUB.headCoach.role}
              </span>
            </a>
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
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
              <a href={CLUB.signup} target="_blank" rel="noopener noreferrer">
                Tenisz suli jelentkezés
              </a>
            </li>
            <li>
              <a href={CLUB.camp.emailHref}>{CLUB.camp.email}</a>
            </li>
            <li>
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer" className="footer__fb">
                <IconFacebook /> Facebook
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
          © {CLUB.name} · {CLUB.founded} óta
        </span>
        <span>{CLUB.company}</span>
      </div>
    </footer>
  );
}
