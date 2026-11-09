"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@/components/shared/Icon";
import { CLUB, HOURS, SECTIONS } from "@/lib/site";

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
            Nyitva: {HOURS.map((h) => `${h.days.toLowerCase()} ${h.time}`).join(", ")}
          </span>
          <a href={CLUB.phoneHref}>Recepció: {CLUB.phone}</a>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" onClick={close} aria-label="Match-Point Tennis Club & Shop – az oldal teteje">
            <Image src="/img/logo-vilagos-hatter.png" alt="Match-Point Tennis Club & Shop" width={320} height={200} className="brand__logo" priority sizes="124px" />
          </a>
          <nav className="nav" aria-label="Fő navigáció">
            {SECTIONS.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href={CLUB.webshop} className="btn btn--ghost header__shop" target="_blank" rel="noopener noreferrer">
            Webshop <Icon name="arrowUpRight" size={16} />
          </a>
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
                <Icon name="phone" size={16} /> Recepció: {CLUB.phone}
              </a>
              <a href={CLUB.webshop} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                Webshop <Icon name="arrowUpRight" size={16} />
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
        <Image src="/img/logo-sotet-hatter.png" alt="Match-Point Tennis Club & Shop" width={220} height={139} className="footer__logo" sizes="150px" />
        <div>
          <p className="footer__line">{CLUB.address}</p>
          {HOURS.map((h) => (
            <p key={h.days} className="footer__line">
              {h.days}: {h.time}
            </p>
          ))}
        </div>
        <div className="footer__links">
          <a href={CLUB.phoneHref}>{CLUB.phone}</a>
          <a href={CLUB.emailHref}>{CLUB.email}</a>
          <a href={CLUB.webshop} target="_blank" rel="noopener noreferrer">
            Webshop
          </a>
        </div>
      </div>
      <div className="container">
        <p className="footer__small">
          {CLUB.company} · {CLUB.address}
        </p>
      </div>
    </footer>
  );
}

export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.webshop} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
        Webshop
      </a>
      <a href={CLUB.phoneHref} className="btn btn--accent">
        <Icon name="phone" size={16} /> Pályafoglalás
      </a>
    </div>
  );
}
