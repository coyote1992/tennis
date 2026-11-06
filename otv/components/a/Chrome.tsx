"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CLUB, SECTIONS } from "@/lib/site";

const NAV = SECTIONS.filter((s) => s.id !== "jelentkezes");

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>
            Teniszklub Mogyoródon<span className="topbar__addr"> · {CLUB.address}</span>
          </span>
          <span className="topbar__links">
            <a href={CLUB.phoneHref}>{CLUB.phone}</a>
            <a className="topbar__email" href={CLUB.emailHref}>
              {CLUB.email}
            </a>
          </span>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" onClick={close} aria-label="Open Tennis Valley – az oldal teteje">
            <Image src="/img/otv-labda-navy.png" alt="" width={46} height={46} className="brand__mark" priority />
            <span className="brand__name">
              Open Tennis Valley
              <small>Mogyoród</small>
            </span>
          </a>
          <nav className="nav" aria-label="Fő navigáció">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#foglalas" className="btn btn--accent">
            Foglalj pályát
          </a>
          <button
            type="button"
            className="burger"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={open}
            aria-controls="a-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
        <div id="a-menu" className="menu" hidden={!open}>
          <nav className="container" aria-label="Mobil navigáció">
            {SECTIONS.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="menu__link" onClick={close}>
                {n.label}
              </a>
            ))}
            <div className="menu__foot">
              <a href="#foglalas" className="btn btn--accent" onClick={close}>
                Foglalj pályát
              </a>
              <a href={CLUB.phoneHref} className="btn btn--ghost">
                {CLUB.phone}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Image src="/img/otv-labda.png" alt="" width={64} height={64} />
        <p className="footer__name">{CLUB.name}</p>
        <p className="footer__line">
          Tenisz · Oktatás · Versenyek · Klubház · {CLUB.address}
        </p>
        <div className="footer__links">
          <a href={CLUB.phoneHref}>{CLUB.phone}</a>
          <a href={CLUB.emailHref}>{CLUB.email}</a>
          <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href={CLUB.clubRules} target="_blank" rel="noopener noreferrer">
            Klubszabályzat
          </a>
        </div>
        <p className="footer__small">© {CLUB.legal}</p>
      </div>
    </footer>
  );
}

export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.phoneHref} className="btn btn--ghost">
        Hívás
      </a>
      <a href="#foglalas" className="btn btn--accent">
        Foglalj pályát
      </a>
    </div>
  );
}
