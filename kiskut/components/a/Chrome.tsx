"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CLUB, SECTIONS } from "@/lib/site";

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
            {CLUB.motto}
            <span className="topbar__addr"> · {CLUB.address}</span>
          </span>
          <span className="topbar__links">
            <a href={CLUB.phoneHref}>{CLUB.phone}</a>
            <a className="topbar__email" href={`mailto:${CLUB.email}`}>
              {CLUB.email}
            </a>
          </span>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="/" className="brand" onClick={close} aria-label="Kiskút Tenisz Klub – főoldal">
            <Image src="/img/logo.png" alt="" width={256} height={256} className="brand__mark" priority />
            <span className="brand__name">
              Kiskút Tenisz Klub
              <small>Székesfehérvár</small>
            </span>
          </a>
          <nav className="nav" aria-label="Fő navigáció">
            {SECTIONS.map((n) => (
              <a key={n.id} href={`/#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href="/#foglalas" className="btn btn--accent">
            Pályafoglalás
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
              <a key={n.id} href={`/#${n.id}`} className="menu__link" onClick={close}>
                {n.label}
              </a>
            ))}
            <a href="/hazirend" className="menu__link menu__link--small" onClick={close}>
              Házirend
            </a>
            <div className="menu__foot">
              <a href="/#foglalas" className="btn btn--accent" onClick={close}>
                Pályafoglalás
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
        <Image src="/img/logo.png" alt="" width={256} height={256} className="footer__mark" />
        <p className="footer__name">{CLUB.fullName}</p>
        <p className="footer__line">
          {CLUB.motto} · {CLUB.address}
        </p>
        <div className="footer__links">
          <a href={CLUB.phoneHref}>{CLUB.phone}</a>
          <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
          <a href="/hazirend">Házirend</a>
          <a href={`${CLUB.legacySite}/aszf`} target="_blank" rel="noopener noreferrer">
            ÁSZF
          </a>
          <a href={`${CLUB.legacySite}/adatvedelmi-tajekoztato/`} target="_blank" rel="noopener noreferrer">
            Adatvédelem
          </a>
          <a href={`${CLUB.legacySite}/impressum`} target="_blank" rel="noopener noreferrer">
            Impresszum
          </a>
        </div>
        <p className="footer__small">© {CLUB.fullName}</p>
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
      <a href="/#foglalas" className="btn btn--accent">
        Pályafoglalás
      </a>
    </div>
  );
}
