import Image from "next/image";
import { HOTEL } from "@/lib/site";
import { NAV_B } from "./nav";

const nb = (t: string) => t.replace(/ /g, " ");

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/logo-white.png" alt={`${HOTEL.name} ${HOTEL.stars} ${HOTEL.town}`} width={376} height={229} className="footer__logo" />
          <p className="footer__motto">
            <em>Tenisz a kastélyparkban,</em> utána wellness.
          </p>
        </div>

        <div>
          <h2 className="footer__title">Recepció</h2>
          <address className="footer__list">
            <a href={HOTEL.phoneHref}>{nb(HOTEL.phone)}</a>
            <a href={HOTEL.mobileHref}>{nb(HOTEL.mobile)}</a>
            <a href={HOTEL.emailHref}>{HOTEL.email}</a>
            <a href={HOTEL.mapsUrl} target="_blank" rel="noopener noreferrer">
              {HOTEL.address}
            </a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Szállás</h2>
          <ul className="footer__list">
            <li>
              <a href={HOTEL.booking} target="_blank" rel="noopener noreferrer">
                Szobafoglalás
              </a>
            </li>
            <li>
              <a href={HOTEL.offer} target="_blank" rel="noopener noreferrer">
                Ajánlatkérés
              </a>
            </li>
            <li>
              <a href={HOTEL.packages} target="_blank" rel="noopener noreferrer">
                Csomagajánlatok
              </a>
            </li>
            <li>
              <a href={HOTEL.facebook} target="_blank" rel="noopener noreferrer">
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
        <span>
          © {HOTEL.name} {HOTEL.stars}
        </span>
        <span>{HOTEL.address}</span>
      </div>
    </footer>
  );
}
