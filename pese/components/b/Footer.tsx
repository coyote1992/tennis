import Image from "next/image";
import { CLUB } from "@/lib/site";
import { NAV_B } from "./nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/logo-vilagos.png" alt="Pécsi Elektromos Sportegyesület, 1968" width={975} height={957} className="footer__logo" />
          <p className="footer__sub">{CLUB.full}</p>
          <p className="footer__motto">
            <em>Tenisz és pihenés a Diófa utcában, {CLUB.founded} óta.</em>
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
              <a href={CLUB.register} target="_blank" rel="noopener noreferrer">
                Regisztráció
              </a>
            </li>
            <li>
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
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
        <span>© {CLUB.full}</span>
        <span>{CLUB.address}</span>
      </div>
    </footer>
  );
}
