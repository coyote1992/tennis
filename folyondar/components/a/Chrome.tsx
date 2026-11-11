"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/shared/Icon";
import { CLUB, SECTIONS } from "@/lib/site";

function Brand({ light }: { light?: boolean }) {
  return (
    <span className={`brand__inner${light ? " brand__inner--light" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={light ? "/img/folyondar-jel-vilagos.svg" : "/img/folyondar-jel.svg"} alt="" width={121} height={58} className="brand__logo" />
      <span className="brand__name">
        <b>Folyondár</b>
        <small>Sportközpont · Budapest III.</small>
      </span>
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
          <span>{CLUB.address} · Kiscelli parkerdő</span>
          <a href={CLUB.phoneHref}>Recepció: {CLUB.phone}</a>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" onClick={close} aria-label="Folyondár Sportközpont – az oldal teteje">
            <Brand />
          </a>
          <nav className="nav" aria-label="Fő navigáció">
            {SECTIONS.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.short}
              </a>
            ))}
          </nav>
          <a href={CLUB.phoneHref} className="btn btn--accent header__call">
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
                <Icon name="phone" size={16} /> {CLUB.phone}
              </a>
              <a href={CLUB.phone2Href} className="btn btn--ghost">
                <Icon name="phone" size={16} /> {CLUB.phone2}
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
        <Brand light />
        <div>
          <p className="footer__line">{CLUB.address}</p>
          <p className="footer__line">{CLUB.full}</p>
        </div>
        <div className="footer__links">
          <a href={CLUB.phoneHref}>{CLUB.phone}</a>
          <a href={CLUB.phone2Href}>{CLUB.phone2}</a>
          <a href={CLUB.emailHref}>{CLUB.email}</a>
          <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
      <div className="container">
        <p className="footer__small">
          {CLUB.full} · {CLUB.address}
        </p>
      </div>
    </footer>
  );
}

export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href="#arak" className="btn btn--ghost">
        Árak
      </a>
      <a href={CLUB.phoneHref} className="btn btn--accent">
        <Icon name="phone" size={16} /> Hívás
      </a>
    </div>
  );
}
