"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CLUB, HOURS, NAV } from "@/lib/site";
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
          <span>Fedett pályák egész héten 6–21 óráig</span>
          <span className="announce__book">
            Foglalás telefonon:{" "}
            <a href={CLUB.phoneHref} className="announce__phone">
              {CLUB.phone}
            </a>
          </span>
          <span className="announce__hours">{CLUB.address}</span>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <Link href="/" className="brand" onClick={close} aria-label="Fortuna SE Tenisz – főoldal">
            <Image src="/img/logo-fortuna.png" alt="Fortuna SE" width={160} height={33} className="brand__logo" priority />
            <span className="brand__sub">Tenisz szakosztály</span>
          </Link>

          <nav className="nav" aria-label="Fő navigáció">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="nav__link">
                {n.label}
              </Link>
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
              <Link key={n.href} href={n.href} className="mobile-menu__link" onClick={close} style={{ ["--i" as string]: i }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="container mobile-menu__foot">
            <a href={CLUB.phoneHref} className="btn btn--accent btn--block">
              <IconPhone /> {CLUB.phone} · {CLUB.phoneName}
            </a>
            <a href={CLUB.emailHref} className="btn btn--ghost btn--block">
              <IconMail /> {CLUB.email}
            </a>
            <p className="mobile-menu__hours">
              {HOURS.map((h) => (
                <span key={h.days}>
                  Fedett pályák {h.days.toLowerCase()}: {h.time}
                </span>
              ))}
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
