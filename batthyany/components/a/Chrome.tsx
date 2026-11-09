"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@/components/shared/Icon";
import { HOTEL, SECTIONS } from "@/lib/site";

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
            {HOTEL.address}
          </span>
          <a href={HOTEL.phoneHref}>Recepció: {HOTEL.phone}</a>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" onClick={close} aria-label="Batthyány Kastélyszálló – az oldal teteje">
            <Image src="/img/logo-brown.png" alt="Batthyány Kastélyszálló, Zalacsány" width={376} height={229} className="brand__logo" priority sizes="110px" />
          </a>
          <nav className="nav" aria-label="Fő navigáció">
            {SECTIONS.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href={HOTEL.phoneHref} className="btn btn--accent">
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
              <a href={HOTEL.phoneHref} className="btn btn--accent">
                <Icon name="phone" size={16} /> Recepció: {HOTEL.phone}
              </a>
              <a href={HOTEL.booking} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                Szállásfoglalás <Icon name="arrowUpRight" size={16} />
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
        <Image src="/img/logo-white.png" alt="Batthyány Kastélyszálló, Zalacsány" width={376} height={229} className="footer__logo" sizes="150px" />
        <div>
          <p className="footer__name">
            {HOTEL.name}
            {HOTEL.stars}
          </p>
          <p className="footer__line">{HOTEL.address}</p>
        </div>
        <div className="footer__links">
          <a href={HOTEL.phoneHref}>{HOTEL.phone}</a>
          <a href={HOTEL.emailHref}>{HOTEL.email}</a>
          <a href={HOTEL.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
      <div className="container">
        <p className="footer__small">Tenisz és wellness a Batthyány Kastélyszállóban</p>
      </div>
    </footer>
  );
}

export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href="#wellness" className="btn btn--ghost">
        Wellness nap
      </a>
      <a href={HOTEL.phoneHref} className="btn btn--accent">
        <Icon name="phone" size={16} /> Pályafoglalás
      </a>
    </div>
  );
}
