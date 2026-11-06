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
          <span>{CLUB.address}</span>
          <span className="topbar__links">
            <a href={CLUB.emailHref} className="topbar__hide">
              {CLUB.email}
            </a>
            <a href={CLUB.phoneHref}>{CLUB.phone}</a>
          </span>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" onClick={close} aria-label="Pécsi Elektromos SE – az oldal teteje">
            <Image src="/img/logo.png" alt="" width={975} height={957} className="brand__mark" priority />
            <span className="brand__name">
              Pécsi Elektromos
              <small>Sportegyesület · 1968</small>
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
        <Image src="/img/logo-vilagos.png" alt="Pécsi Elektromos Sportegyesület, 1968" width={975} height={957} className="footer__logo" />
        <div>
          <p className="footer__name">{CLUB.full}</p>
          <p className="footer__line">{CLUB.address}</p>
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
        Pályafoglalás <Icon name="arrowUpRight" size={16} />
      </a>
    </div>
  );
}
