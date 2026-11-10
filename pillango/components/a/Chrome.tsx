"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { Icon } from "@/components/shared/Icon";
import { CLUB, SECTIONS } from "@/lib/site";

function Brand({ light }: { light?: boolean }) {
  return (
    <span className={`brand__inner${light ? " brand__inner--light" : ""}`}>
      <Image src="/img/pillango-jel.png" alt="" width={256} height={256} className="brand__logo" priority={!light} sizes="48px" />
      <span className="brand__name">
        <b>Pillangó Tenisz Klub</b>
        <small>Zugló · {CLUB.founded} óta</small>
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
          <span>Pillangó Park, Zugló · {CLUB.szep}</span>
          <a href={CLUB.phoneHref}>Recepció: {CLUB.phone}</a>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" onClick={close} aria-label="Pillangó Tenisz Klub – az oldal teteje">
            <Brand />
          </a>
          <nav className="nav" aria-label="Fő navigáció">
            {SECTIONS.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.short}
              </a>
            ))}
          </nav>
          <a href={CLUB.booking} className="btn btn--accent header__call" target="_blank" rel="noopener noreferrer">
            <Icon name="calendar" size={16} /> Pályafoglalás
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
                <Icon name="calendar" size={16} /> Online pályafoglalás
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
          <p className="footer__line">2026-tól a KSI teniszszakosztálya</p>
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
        <p className="footer__small">
          {[CLUB.name, CLUB.address, ...CLUB.company.split(" · ")].map((t, i) => (
            <Fragment key={t}>
              {i > 0 && " · "}
              <span className="nowrap">{t}</span>
            </Fragment>
          ))}
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
        <Icon name="calendar" size={16} /> Pályafoglalás
      </a>
    </div>
  );
}
