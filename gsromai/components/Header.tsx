"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CLUB, NAV } from "@/lib/site";
import { IconArrow, IconPhone } from "./icons";

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
          <span>Télen 2 fedett, fűtött padel- és 2 teniszpálya</span>
          <span>
            Padel:{" "}
            <a href={CLUB.padel.href} className="announce__phone">
              {CLUB.padel.phone}
            </a>
          </span>
          <span className="announce__hours">Római-part · nyitva 7–22</span>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <Link href="/" className="brand" onClick={close} aria-label="Római Padel Akadémia – főoldal">
            <Image src="/img/rp-monogram.png" alt="" width={48} height={42} className="brand__logo" priority />
            <span className="brand__text">
              <span className="brand__name">Római Padel</span>
              <span className="brand__sub">& GS Tenisz Club</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Fő navigáció">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="nav__link">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="header__cta">
            <a href={CLUB.padel.href} className="btn btn--accent btn--sm">
              Pályát foglalok <IconArrow />
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
            {NAV.map((n, i) => (
              <Link key={n.href} href={n.href} className="mobile-menu__link" onClick={close} style={{ ["--i" as string]: i }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="container mobile-menu__foot">
            <a href={CLUB.padel.href} className="btn btn--accent btn--block">
              <IconPhone /> Padel: {CLUB.padel.phone}
            </a>
            <a href={CLUB.tennis.booking} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--block">
              Teniszpálya online <IconArrow />
            </a>
            <p className="mobile-menu__hours">
              <span>{CLUB.hours}</span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
