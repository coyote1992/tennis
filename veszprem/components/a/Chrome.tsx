"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@/components/shared/Icon";
import { CLUB, SECTIONS } from "@/lib/site";

function Brand({ light }: { light?: boolean }) {
  return (
    <span className={`brand__inner${light ? " brand__inner--light" : ""}`}>
      <Image src="/img/tvse-logo.png" alt="" width={512} height={512} className="brand__logo" priority={!light} sizes="56px" />
      <span className="brand__name">
        <b>Tenisziskola Veszprém</b>
        <small>Sportegyesület · {CLUB.venue}</small>
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
          <span>{CLUB.address} · nyitva 7:00–21:00</span>
          <a href={CLUB.phoneHref}>Pályafoglalás: {CLUB.phone}</a>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" onClick={close} aria-label="Tenisziskola Veszprém Sportegyesület – az oldal teteje">
            <Brand />
          </a>
          <nav className="nav" aria-label="Fő navigáció">
            {SECTIONS.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href={CLUB.booking} className="btn btn--accent header__book" target="_blank" rel="noopener noreferrer">
            Online foglalás <Icon name="arrowUpRight" size={16} />
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
                Online foglalás <Icon name="arrowUpRight" size={16} />
              </a>
              <a href={CLUB.phoneHref} className="btn btn--ghost">
                <Icon name="phone" size={16} /> {CLUB.phone}
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
          <p className="footer__line">Nyári szezon április–október, téli szezon október–április</p>
        </div>
        <div className="footer__links">
          <a href={CLUB.phoneHref}>{CLUB.phone}</a>
          <a href={CLUB.phone2Href}>{CLUB.phone2}</a>
          <a href={CLUB.emailHref}>{CLUB.email}</a>
        </div>
      </div>
      <div className="container">
        <p className="footer__small">
          {CLUB.name} ({CLUB.short}) · {CLUB.venue}
        </p>
      </div>
    </footer>
  );
}

export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.phoneHref} className="btn btn--ghost">
        <Icon name="phone" size={16} /> Hívás
      </a>
      <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
        Online foglalás
      </a>
    </div>
  );
}
