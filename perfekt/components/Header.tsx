"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CLUB, NAV } from "@/lib/site";
import { IconMail, IconPhone } from "./icons";

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
          <span>Télen zárva tartunk</span>
          <span>Tavaszi nyitás {CLUB.reopen}</span>
          <span className="announce__hours">
            <a href={CLUB.phoneHref} className="announce__phone">
              {CLUB.phone}
            </a>
          </span>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <Link href="/" className="brand" onClick={close} aria-label="Perfekt Teniszklub – főoldal">
            <Image src="/img/logo.png" alt="" width={52} height={52} className="brand__badge" priority />
            <span className="brand__name">
              Perfekt
              <small>Teniszklub · XVII. kerület</small>
            </span>
          </Link>

          <nav className="nav" aria-label="Fő navigáció">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="nav__link">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="header__cta">
            <a href={CLUB.phoneHref} className="btn btn--accent btn--sm">
              <IconPhone /> Hívás
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
              <a key={n.href} href={n.href} className="mobile-menu__link" onClick={close} style={{ ["--i" as string]: i }}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="container mobile-menu__foot">
            <a href={CLUB.phoneHref} className="btn btn--accent btn--block">
              <IconPhone /> {CLUB.phone}
            </a>
            <a href={CLUB.notifyHref} className="btn btn--ghost btn--block">
              <IconMail /> Szóljatok, ha nyitunk
            </a>
            <p className="mobile-menu__hours">
              <span>Télen zárva · tavaszi nyitás {CLUB.reopen}</span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
