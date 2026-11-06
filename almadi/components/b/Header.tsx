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
          {SEASON.closed && (
            <a href="#szezon" className="announce__season">
              <span className="announce__dot" aria-hidden="true" />
              {SEASON.status} · nyitás: {SEASON.reopen}
            </a>
          )}
          <span className="announce__hours">Szezonban: {CLUB.hours}</span>
          <span className="announce__tel">
            <a href={CLUB.phoneHref} className="announce__phone">
              {CLUB.phone}
            </a>
          </span>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="/b" className="brand" onClick={close} aria-label="Balatonalmádi Tenisz Club – kezdőlap">
            <Image src="/img/logo-kek-korong.svg" alt="" width={139} height={139} className="brand__mark" unoptimized priority />
            <span className="brand__name">
              Almádi Tenisz
              <small>
                {CLUB.founded} · {CLUB.place}
              </small>
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
            <a href={CLUB.phoneHref} className="btn btn--ghost btn--sm header__phone">
              <IconPhone /> {CLUB.phone}
            </a>
            <a href="#foglalas" className="btn btn--accent btn--sm">
              Foglalás <IconArrow />
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
              Foglalás a Foggóban <IconArrow />
            </a>
            <a href={CLUB.phoneHref} className="btn btn--ghost btn--block">
              <IconPhone /> {CLUB.phone}
            </a>
            <p className="mobile-menu__hours">
              {SEASON.closed && (
                <span>
                  {SEASON.status} · nyitás: {SEASON.reopen}
                </span>
              )}
              <span>Szezonban: {CLUB.hours}</span>
              <span>{CLUB.address}</span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
