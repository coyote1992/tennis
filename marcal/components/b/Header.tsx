"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CLUB } from "@/lib/site";
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
          <span>Téli szezon: 4 teniszpálya fűtött sátorban</span>
          <span>
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="announce__link">
              Online pályafoglalás
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
          <a href="/b" className="brand" onClick={close} aria-label="Marcal Teniszcentrum – kezdőlap">
            <Image src="/img/labda.png" alt="" width={44} height={44} className="brand__badge" priority />
            <span className="brand__name">
              Marcal
              <small>Teniszcentrum · Győr</small>
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
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent btn--sm">
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
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent btn--block" onClick={close}>
              Foglalj pályát online <IconArrow />
            </a>
            <a href="#jelentkezes" className="btn btn--ghost btn--block" onClick={close}>
              Jelentkezz oktatásra
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
