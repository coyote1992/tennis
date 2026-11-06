import Image from "next/image";
import { Icon } from "@/components/shared/Icon";
import { SITE, TRAINER } from "@/lib/site";
import { B_NAV } from "./nav";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <Image src="/img-b/logo.png" alt="Next Tenisz Akadémia" width={161} height={124} />
            <span>
              <span className="brand__name">Next Tenisz</span>
              <span className="brand__sub">Akadémia · Normafa</span>
            </span>
          </div>
          <p className="footer__motto">
            Tenisz · Mozgás · <em>Közösség</em>
          </p>
          <a href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Next Tenisz Akadémia a Facebookon">
            <Icon name="facebook" size={18} /> Facebook
          </a>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={SITE.phone.href}>{SITE.phone.display}</a>
            <span className="footer__muted">Pályabérlés, tenisz</span>
            <a href={TRAINER.phone.href}>{TRAINER.phone.display}</a>
            <span className="footer__muted">Személyi edzés, csoportos órák</span>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.address.mapsUrl} target="_blank" rel="noopener noreferrer">
              {SITE.address.line}
            </a>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Online</h2>
          <ul className="footer__list">
            <li>
              <a href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer">
                Pályafoglalás a Hellán
              </a>
            </li>
            <li>
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                Good Morning Club, Köredzés: helyfoglalás
              </a>
            </li>
            <li>
              <a href="#jelentkezes">Jelentkezés edzésre</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Az oldalon</h2>
          <ul className="footer__list">
            {B_NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© 2026 {SITE.name} · Budapest, Normafa</span>
        <a href="/adatkezeles" className="footer__muted">
          Adatkezelés
        </a>
      </div>
    </footer>
  );
}
