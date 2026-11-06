import Image from "next/image";
import { CLUB, HOURS, NAV, SPONSORS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/logo.png" alt="Pécs Városi Tenisz Club, 1992" width={96} height={96} />
          <p className="footer__motto">
            Versenyzők, gyerekek és társasági játékosok klubja, <em>1992 óta.</em>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.bookingPhoneHref}>{CLUB.bookingPhone} · pályafoglalás</a>
            <a href={CLUB.officePhoneHref}>{CLUB.officePhone} · klubiroda</a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            {HOURS.map((h) => (
              <span key={h.days} className="footer__muted">
                {h.days}: {h.time}
              </span>
            ))}
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
          <h2 className="footer__title">Oldalak</h2>
          <ul className="footer__list">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__sponsors">
        <span className="footer__title">Kiemelt partnereink</span>
        <ul>
          {SPONSORS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <div className="container footer__bottom">
        <span>© {CLUB.name}</span>
        <span className="footer__muted">Gulyás István Teniszcentrum · {CLUB.address}</span>
      </div>
    </footer>
  );
}
