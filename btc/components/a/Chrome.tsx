"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PickGroup } from "@/components/shared/EnquiryForm";
import { CLUB, SECTIONS } from "@/lib/site";

const NAV = SECTIONS.filter((s) => s.id !== "jelentkezes");
const HOURS = CLUB.hours.map((h) => `${h.days} ${h.time}`).join(" · ");

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
            <span className="topbar__hide"> · {CLUB.place}</span>
          </span>
          <span className="topbar__links">
            <span className="topbar__hide">Nyitva: {HOURS}</span>
            <a href={CLUB.phoneHref}>
              <span className="topbar__label">Recepció: </span>
              {CLUB.phone}
            </a>
          </span>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" onClick={close} aria-label="Budapest Tenisz Centrum – az oldal teteje">
            <Image src="/img/logo.png" alt="" width={422} height={425} className="brand__mark" priority />
            <span className="brand__name">
              Budapest Tenisz Centrum
              <small>Városmajor · BTC</small>
            </span>
          </a>
          <nav className="nav" aria-label="Fő navigáció">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <PickGroup mode="court" className="btn btn--accent">
            Pályafoglalás
          </PickGroup>
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
                Recepció: {CLUB.phone}
              </a>
              <p className="menu__hours">Nyitva: {HOURS}</p>
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
        <Image src="/img/logo-sotet.png" alt="BTC" width={438} height={438} className="footer__logo" />
        <div>
          <p className="footer__name">{CLUB.name}</p>
          <p className="footer__line">
            {CLUB.address} · {CLUB.place}
          </p>
          <p className="footer__line">Nyitva: {HOURS}</p>
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
        <p className="footer__small">© {CLUB.name} (BTC)</p>
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
      <PickGroup mode="court" className="btn btn--accent">
        Pályafoglalás
      </PickGroup>
    </div>
  );
}
