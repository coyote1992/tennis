"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/shared/Icon";
import { CLUB, SEASON, SECTIONS } from "@/lib/site";

export function SeasonBar() {
  if (!SEASON.closed) return null;
  return (
    <div className="seasonbar">
      <div className="container seasonbar__inner">
        <b>{SEASON.status}</b>
        <span>
          Nyitás: {SEASON.reopen}
          <span className="seasonbar__more"> · Pályafoglalás és bérlet a szezonra a Foggóban</span>
        </span>
      </div>
    </div>
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
    <header className={`header${open ? " header--open" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="brand" onClick={close} aria-label="Balatonalmádi Tenisz Club – az oldal teteje">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo-kek-korong.svg" alt="" width={52} height={52} className="brand__mark" />
          <span className="brand__name">
            Almádi Tenisz
            <small>1925 óta</small>
          </span>
        </a>
        <nav className="nav" aria-label="Fő navigáció">
          {SECTIONS.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>
        <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
          Foglalás <Icon name="arrowUpRight" size={16} />
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
              Pályafoglalás a Foggóban <Icon name="arrowUpRight" size={16} />
            </a>
            <a href={CLUB.phoneHref} className="btn btn--ghost">
              {CLUB.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/logo-korvonal.svg" alt="Balatonalmádi Tenisz Club 1925" width={84} height={84} className="footer__logo" />
        <div>
          <p className="footer__name">{CLUB.full}</p>
          <p className="footer__line">{CLUB.address}</p>
          <p className="footer__line">Szabadtéri szezon tavasztól október végéig · {CLUB.hours}</p>
        </div>
        <div className="footer__links">
          <a href={CLUB.phoneHref}>{CLUB.phone}</a>
          <a href={CLUB.emailHref}>{CLUB.email}</a>
          <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
            Foggo pályafoglalás
          </a>
        </div>
      </div>
      <div className="container">
        <p className="footer__small">© {CLUB.full}</p>
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
        Foglalás <Icon name="arrowUpRight" size={16} />
      </a>
    </div>
  );
}
