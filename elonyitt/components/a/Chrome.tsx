"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@/components/shared/Icon";
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
            {CLUB.address}
            <span className="topbar__hide"> · {CLUB.hours}</span>
          </span>
          <a href={CLUB.phoneHref}>{CLUB.phone}</a>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" onClick={close} aria-label="Előnyitt S.E. Tenisz Klub – az oldal teteje">
            <Image src="/img/logo.png" alt="" width={2439} height={817} className="brand__logo" priority />
          </a>
          <nav className="nav" aria-label="Fő navigáció">
            {SECTIONS.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
            Pályafoglalás <Icon name="arrowUpRight" size={16} />
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
              <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
                Online pályafoglalás <Icon name="arrowUpRight" size={16} />
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
      <div className="container footer__inner">
        <Image src="/img/logo-vilagos.png" alt="Előnyitt S.E. Nyergesújfalu" width={2439} height={817} className="footer__logo" />
        <div>
          <p className="footer__name">{CLUB.name}</p>
          <p className="footer__line">
            {CLUB.address} · {CLUB.hours}
          </p>
        </div>
        <div className="footer__links">
          <a href={CLUB.phoneHref}>{CLUB.phone}</a>
          <a href={CLUB.emailHref}>{CLUB.email}</a>
          <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
      <div className="container">
        <p className="footer__small">© {CLUB.name}</p>
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
      <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
        Pályafoglalás <Icon name="arrowUpRight" size={16} />
      </a>
    </div>
  );
}
