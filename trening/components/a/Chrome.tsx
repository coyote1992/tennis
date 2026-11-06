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
            Sport- és Szabadidőközpont<span className="topbar__addr"> · {CLUB.address}</span>
          </span>
          <span className="topbar__links">
            <a href={CLUB.bookingPhoneHref}>
              <span className="topbar__label">Pályafoglalás: </span>
              {CLUB.bookingPhone}
            </a>
            <a className="topbar__email" href={CLUB.emailHref}>
              {CLUB.email}
            </a>
          </span>
        </div>
      </div>
      <header className={`header${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" onClick={close} aria-label="Tréning Center – az oldal teteje">
            <Image src="/img/logo-2x.png" alt="Tréning Center" width={597} height={118} className="brand__logo" priority />
          </a>
          <nav className="nav" aria-label="Fő navigáció">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
            Foglalj pályát
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
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                Foglalj pályát
              </a>
              <a href={CLUB.bookingPhoneHref} className="btn btn--ghost">
                {CLUB.bookingPhone}
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
        <Image src="/img/logo-krem-2x.png" alt="Tréning Center" width={597} height={118} className="footer__logo" />
        <p className="footer__line">
          Tenisz · Foci · Beltéri sport · Rendezvények · Pub · {CLUB.address}
        </p>
        <div className="footer__links">
          <a href={CLUB.bookingPhoneHref}>{CLUB.bookingPhone}</a>
          <a href={CLUB.emailHref}>{CLUB.email}</a>
          <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          {CLUB.grants.map((g) => (
            <a key={g.href} href={g.href} target="_blank" rel="noopener noreferrer">
              {g.label}
            </a>
          ))}
        </div>
        <p className="footer__small">
          © {CLUB.full} · Üzemelteti: {CLUB.operator}
        </p>
      </div>
    </footer>
  );
}

export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={CLUB.bookingPhoneHref} className="btn btn--ghost">
        Hívás
      </a>
      <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
        Foglalj pályát
      </a>
    </div>
  );
}
