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
            {CLUB.address}
            <span className="topbar__hide">
              {" "}
              · H–P {HOURS[0].time}, Szo–V {HOURS[1].time}
            </span>
          </span>
          <a href={CLUB.phoneHref}>{CLUB.phone}</a>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" onClick={close} aria-label="Szép Juhászné Teniszklub – az oldal teteje">
            <Image src="/img/logo.png" alt="" width={512} height={512} className="brand__logo" priority sizes="56px" />
            <span className="brand__name">
              Szép Juhászné
              <small>Teniszklub</small>
            </span>
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
                <Icon name="phone" size={16} /> Pályafoglalás: {CLUB.phone}
              </a>
              <a href={CLUB.emailHref} className="btn btn--ghost">
                {CLUB.email}
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
        <Image src="/img/logo-vilagos.png" alt="Szép Juhászné Teniszklub" width={512} height={512} className="footer__logo" sizes="88px" />
        <div>
          <p className="footer__name">{CLUB.name}</p>
          <p className="footer__line">{CLUB.address}</p>
          <p className="footer__line">
            {HOURS.map((h) => `${h.days}: ${h.time}`).join(" · ")}
          </p>
        </div>
        <div className="footer__links">
          <a href={CLUB.phoneHref}>{CLUB.phone}</a>
          <a href={CLUB.emailHref}>{CLUB.email}</a>
          <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
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
      <a href="#palyak" className="btn btn--ghost">
        Árak
      </a>
      <a href={CLUB.phoneHref} className="btn btn--accent">
        <Icon name="phone" size={16} /> Pályafoglalás
      </a>
    </div>
  );
}
