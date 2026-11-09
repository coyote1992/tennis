"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/shared/Icon";
import { CLUB, OPEN, SECTIONS } from "@/lib/site";

function Wordmark({ light }: { light?: boolean }) {
  return (
    <span className={`mark${light ? " mark--light" : ""}`}>
      <b>Barango</b>
      <small>Tenisz Club · Érd</small>
    </span>
  );
}

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
            {OPEN.days} {OPEN.hours}
            <span className="topbar__addr"> · {CLUB.address}</span>
          </span>
          <a href={CLUB.phoneHref}>{CLUB.phone}</a>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" onClick={close} aria-label="Barango Tenisz Club – az oldal teteje">
            <Wordmark />
          </a>
          <nav className="nav" aria-label="Fő navigáció">
            {SECTIONS.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href={CLUB.phoneHref} className="btn btn--accent">
            <Icon name="phone" size={16} /> Pályafoglalás
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
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <Icon name="phone" size={16} /> Hívás: {CLUB.phone}
              </a>
              <a href={CLUB.emailHref} className="btn btn--ghost">
                <Icon name="mail" size={16} /> {CLUB.email}
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
      <div className="container footer__inner">
        <Wordmark light />
        <div>
          <p className="footer__line">{CLUB.address}</p>
          <p className="footer__line">
            {OPEN.days} {OPEN.hours}
          </p>
        </div>
        <div className="footer__links">
          <a href={CLUB.phoneHref}>{CLUB.phone}</a>
          <a href={CLUB.emailHref}>{CLUB.email}</a>
          <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
            Útvonal
          </a>
        </div>
      </div>
      <div className="container">
        <p className="footer__small">
          Üzemeltető: {CLUB.operator}, {CLUB.operatorAddress}
        </p>
      </div>
    </footer>
  );
}

export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href="#palya" className="btn btn--ghost">
        Árak
      </a>
      <a href={CLUB.phoneHref} className="btn btn--accent">
        <Icon name="phone" size={16} /> Pályafoglalás
      </a>
    </div>
  );
}
