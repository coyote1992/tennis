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
          <span>
            Edzések helyszíne: {CLUB.venue}, {CLUB.venueAddress}
          </span>
          <span>
            Edzés: <a href={CLUB.coachPhoneHref} className="announce__phone">{CLUB.coachPhone}</a>
          </span>
          <span className="announce__court">
            Pályabérlés: <a href={CLUB.courtPhoneHref} className="announce__phone">{CLUB.courtPhone}</a>
          </span>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="/b" className="brand" onClick={close} aria-label="PG Tenisz – kezdőlap">
            <Image src="/img/pg-jel.png" alt="" width={479} height={334} className="brand__mark" priority />
            <span className="brand__name">
              PG Tenisz
              <small>Sport Club · Budapest</small>
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
            <a href="#jelentkezes" className="btn btn--accent btn--sm">
              Jelentkezés edzésre <IconArrow />
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
            <a href="#jelentkezes" className="btn btn--accent btn--block" onClick={close}>
              Jelentkezés edzésre <IconArrow />
            </a>
            <a href={CLUB.coachPhoneHref} className="btn btn--ghost btn--block">
              <IconPhone /> Edzés: {CLUB.coachPhone}
            </a>
            <a href={CLUB.courtPhoneHref} className="btn btn--ghost btn--block">
              <IconPhone /> Pályabérlés: {CLUB.courtPhone}
            </a>
            <p className="mobile-menu__hours">
              <span>
                {CLUB.venue} · {CLUB.venueAddress}
              </span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
