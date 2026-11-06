"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CLUB, SECTIONS } from "@/lib/site";

const NAV = SECTIONS.filter((s) => s.id !== "jelentkezes");

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
            Edzések: {CLUB.venue}
            <span className="topbar__addr"> · {CLUB.venueAddress}</span>
          </span>
          <span className="topbar__links">
            <a href={CLUB.coachPhoneHref}>
              <span className="topbar__label">Edzés: </span>
              {CLUB.coachPhone}
            </a>
            <a className="topbar__email" href={CLUB.courtPhoneHref}>
              Pályabérlés: {CLUB.courtPhone}
            </a>
          </span>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" onClick={close} aria-label="PG Tenisz – az oldal teteje">
            <Image src="/img/pg-jel.png" alt="" width={479} height={334} className="brand__mark" priority />
            <span className="brand__name">
              PG Tenisz
              <small>Sport Club Egyesület</small>
            </span>
          </a>
          <nav className="nav" aria-label="Fő navigáció">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#jelentkezes" className="btn btn--accent">
            Jelentkezés
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
              <a href="#jelentkezes" className="btn btn--accent" onClick={close}>
                Jelentkezés edzésre
              </a>
              <a href={CLUB.coachPhoneHref} className="btn btn--ghost">
                {CLUB.coachPhone}
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
      <div className="container">
        <Image src="/img/logo-vilagos.png" alt="PG Tenisz" width={560} height={504} className="footer__logo" />
        <p className="footer__name">{CLUB.full}</p>
        <p className="footer__line">
          {CLUB.motto} · Edzések: {CLUB.venue}, {CLUB.venueAddress}
        </p>
        <div className="footer__links">
          <a href={CLUB.coachPhoneHref}>{CLUB.coachPhone}</a>
          <a href={CLUB.emailHref}>{CLUB.email}</a>
          <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <p className="footer__small">
          © {CLUB.full} · Adószám: {CLUB.taxNumber}
        </p>
      </div>
    </footer>
  );
}

export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.coachPhoneHref} className="btn btn--ghost">
        Hívás
      </a>
      <a href="#jelentkezes" className="btn btn--accent">
        Jelentkezés
      </a>
    </div>
  );
}
