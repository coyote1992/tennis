"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CLUB, SEASON } from "@/lib/site";
import { IconArrow, IconPhone } from "./icons";
import { NAV_B } from "./nav";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <div className="announce">
        <div className="container announce__inner">
          <span>Téli szezon: szept. 28. – ápr. 25. · {SEASON.courts}</span>
          <span>
            <a href="#foglalas" className="announce__link">
              Foglalás az OTV appban
            </a>
          </span>
          <span className="announce__hours">
            <a href={CLUB.phoneHref} className="announce__phone">
              {CLUB.phone}
            </a>
          </span>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="/b" className="brand" onClick={close} aria-label="Open Tennis Valley – kezdőlap">
            <Image src="/img/otv-labda.png" alt="" width={44} height={44} className="brand__badge" priority />
            <span className="brand__name">
              Open Tennis Valley
              <small>Teniszklub · Mogyoród</small>
            </span>
          </a>

          <nav className="nav" aria-label="Fő navigáció">
            {NAV_B.map((n) => (
              <a key={n.href} href={n.href} className="nav__link">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="header__cta">
            <a href="#foglalas" className="btn btn--accent btn--sm">
              Foglalj pályát <IconArrow />
            </a>
          </div>

          <button
            type="button"
            className="burger"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>

        <div id="mobile-menu" className="mobile-menu" hidden={!open}>
          <nav className="container mobile-menu__nav" aria-label="Mobil navigáció">
            {NAV_B.map((n, i) => (
              <a key={n.href} href={n.href} className="mobile-menu__link" onClick={close} style={{ ["--i" as string]: i }}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="container mobile-menu__foot">
            <a href="#foglalas" className="btn btn--accent btn--block" onClick={close}>
              Foglalj pályát <IconArrow />
            </a>
            <a href="#jelentkezes" className="btn btn--ghost btn--block" onClick={close}>
              Ingyenes próbaedzés gyerekeknek
            </a>
            <a href={CLUB.phoneHref} className="btn btn--ghost btn--block">
              <IconPhone /> {CLUB.phone}
            </a>
            <p className="mobile-menu__hours">
              <span>{CLUB.address}</span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
