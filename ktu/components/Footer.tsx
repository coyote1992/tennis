import Image from "next/image";
import Link from "next/link";
import { CLUB, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/ktu-logo.png" alt="Kecskeméti Tenisz Udvar" width={120} height={99} />
          <p className="footer__motto">
            KTU, ahol minden <em>a teniszről szól.</em>
          </p>
          <p className="footer__social">
            <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={CLUB.review} target="_blank" rel="noopener noreferrer">
              Értékelj a Google-n
            </a>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            <a href={CLUB.phoneHref}>{CLUB.phone}</a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <span className="footer__muted">{CLUB.hours}</span>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Online</h2>
          <ul className="footer__list">
            <li>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
                Időpontfoglalás
              </a>
            </li>
            <li>
              <a href={CLUB.signup} target="_blank" rel="noopener noreferrer">
                Regisztráció
              </a>
            </li>
            <li>
              <a href={`mailto:${CLUB.service.email}`}>Ütőszerviz: {CLUB.service.email}</a>
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
        <span>
          © {CLUB.name} · {CLUB.founded} óta
        </span>
        <span className="footer__muted">Kecskemét, Ceglédi út</span>
      </div>
    </footer>
  );
}
