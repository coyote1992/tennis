import Image from "next/image";
import Link from "next/link";
import { CLUB, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/img/emblema.png" alt="A KATE emblémája" width={96} height={96} />
          <p className="footer__motto">
            Sport, ami összeköt <em>fiatalt és időset.</em>
          </p>
        </div>

        <div>
          <h2 className="footer__title">Egyesület</h2>
          <address className="footer__list">
            <span>{CLUB.fullName}</span>
            <span className="footer__muted">{CLUB.address}</span>
            <a href={CLUB.emailHref}>{CLUB.email}</a>
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
              <a href={CLUB.league} target="_blank" rel="noopener noreferrer">
                Városi bajnokság, eredmények
              </a>
            </li>
            <li>
              <a href={CLUB.joinForm} target="_blank" rel="noopener noreferrer">
                Tagfelvételi űrlap
              </a>
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
          © {CLUB.name} · {CLUB.fullName}, alapítva {CLUB.founded}
        </span>
        <span className="footer__muted">
          Bankszámla ({CLUB.bank.name}): {CLUB.bank.account}
        </span>
      </div>
    </footer>
  );
}
