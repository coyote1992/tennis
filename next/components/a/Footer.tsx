import Link from "next/link";
import { HOURS, SITE, TRAINER } from "@/lib/site";
import { Icon } from "../shared/Icon";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <h2 className="footer__title">Szeretnél többet tudni?</h2>
            <address className="footer__contact">
              <a href={SITE.phone.href}>
                <Icon name="phone" size={16} />
                <span>
                  {SITE.phone.display}
                  <small>Pályabérlés, tenisz</small>
                </span>
              </a>
              <a href={TRAINER.phone.href}>
                <Icon name="phone" size={16} />
                <span>
                  {TRAINER.phone.display}
                  <small>Személyi edzés, csoportos órák · {TRAINER.name}</small>
                </span>
              </a>
              <a href={`mailto:${SITE.email}`}>
                <Icon name="mail" size={16} />
                <span>{SITE.email}</span>
              </a>
              <a href={SITE.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="pin" size={16} />
                <span>
                  {SITE.address.line}
                  <small>{SITE.address.note}</small>
                </span>
              </a>
              <div>
                <Icon name="clock" size={16} />
                <span>
                  {HOURS.map((h) => (
                    <small key={h.days}>
                      {h.days}: {h.time}
                      {h.note ? `, ${h.note}` : ""}
                    </small>
                  ))}
                </span>
              </div>
            </address>
            <a className="footer__social" href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Next Tenisz Akadémia a Facebookon">
              <Icon name="facebook" size={18} />
            </a>
          </div>
          <div>
            <p className="footer__head">Edzések</p>
            <nav className="footer__links" aria-label="Edzések">
              <Link href="/tenisz">Junior tenisz</Link>
              <Link href="/tenisz#felnott">Tenisz felnőtteknek</Link>
              <Link href="/szemelyi-edzes">Személyi edzés</Link>
              <Link href="/csoportos-orak#koredzes">Köredzés</Link>
              <Link href="/csoportos-orak#good-morning-club">Good Morning Club</Link>
              <Link href="/regeneracio">Regeneráció</Link>
            </nav>
          </div>
          <div>
            <p className="footer__head">Pályák</p>
            <nav className="footer__links" aria-label="Pályák">
              <Link href="/palyaberles">Pályabérleti díjak</Link>
              <a href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer">
                Foglalás a Hellán ↗
              </a>
              <Link href="/tenisz#versenyek">Versenyek</Link>
              <Link href="/galeria">Galéria</Link>
            </nav>
          </div>
          <div>
            <p className="footer__head">Információ</p>
            <nav className="footer__links" aria-label="Információ">
              <Link href="/jelentkezes">Jelentkezés</Link>
              <Link href="/kapcsolat#megkozelites">Megközelítés</Link>
              <Link href="/kapcsolat#kerdesek">Gyakori kérdések</Link>
              <Link href="/adatkezeles">Adatkezelés</Link>
            </nav>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 {SITE.name} · Budapest, Normafa</span>
          <nav aria-label="Lábléc">
            <span>Tenisz · Mozgás · Közösség</span>
            <Link href="/adatkezeles">Adatkezelés</Link>
            <Link href="/kapcsolat">Kapcsolat</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
