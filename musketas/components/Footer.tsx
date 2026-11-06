import Image from "next/image";
import Link from "next/link";
import { CLUB, NAV } from "@/lib/site";

const DOCS = [
  { label: "Házirend", href: "https://musketastenisz.hu/dokumentumok/hazirend.pdf" },
  { label: "ÁSZF", href: "https://musketastenisz.hu/dokumentumok/aszf.pdf" },
  { label: "Adatkezelési tájékoztató", href: "https://musketastenisz.hu/dokumentumok/adatkezelesi-tajekoztato.pdf" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/musketas-logo.png" alt="Muskétás Teniszcentrum" width={120} height={146} />
          <p className="footer__motto">
            A Muskétás a <em>TE klubod.</em>
          </p>
          <p className="footer__social">
            <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Elérhetőség</h2>
          <address className="footer__list">
            <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
              {CLUB.address}
            </a>
            <a href={CLUB.mobileHref}>{CLUB.mobile}</a>
            <a href={CLUB.landlineHref}>
              {CLUB.landline} <span className="footer__muted">· 9–20 óráig</span>
            </a>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
            <span className="footer__muted">{CLUB.hours}</span>
          </address>
        </div>

        <div>
          <h2 className="footer__title">Dokumentumok</h2>
          <ul className="footer__list">
            {DOCS.map((d) => (
              <li key={d.label}>
                <a href={d.href} target="_blank" rel="noopener noreferrer">
                  {d.label}
                </a>
              </li>
            ))}
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
        <span className="footer__muted">A budai hegyek lábánál, Budapest XI.</span>
      </div>
    </footer>
  );
}
