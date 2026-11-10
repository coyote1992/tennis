"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CLUB, VENUE } from "@/lib/site";
import { IconPhone } from "./icons";
import { NAV_B } from "./nav";

const nb = (t: string) => t.replace(/ /g, " ");

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
          <span className="announce__place">{CLUB.address}</span>
          <span className="announce__open">
            {VENUE.season}, {VENUE.hours.toLowerCase().replace(/ (\d)/, " $1")}
          </span>
          <span className="announce__tel">
            Pályafoglalás:{" "}
            <a href={CLUB.phoneHref} className="announce__phone">
              {nb(CLUB.phone)}
            </a>
          </span>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="/b" className="brand" onClick={close} aria-label="Építők Teniszklub – kezdőlap">
            <Image src="/img/epitok-cimer.png" alt="" width={787} height={906} className="brand__logo" priority />
            <span className="brand__name">
              Építők Teniszklub
              <small>Budapest · Népliget</small>
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
            <a href="#arak" className="btn btn--ghost btn--sm">
              Árak
            </a>
            <a href={CLUB.phoneHref} className="btn btn--accent btn--sm">
              <IconPhone /> {nb(CLUB.phone)}
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
            <a href={CLUB.phoneHref} className="btn btn--accent btn--block">
              <IconPhone /> Pályafoglalás: {nb(CLUB.phone)}
            </a>
            <a href={CLUB.emailHref} className="btn btn--ghost btn--block">
              {CLUB.email}
            </a>
            <p className="mobile-menu__hours">
              <span>
                {VENUE.season}, {VENUE.hours.toLowerCase().replace(/–/g, "–\u2060")}
              </span>
              <span>{CLUB.address}</span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
