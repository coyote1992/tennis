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
  const hours = CLUB.hours.map((h) => `${h.days} ${h.time}`).join(" · ");

  return (
    <>
      <div className="announce">
        <div className="container announce__inner">
          <span>{CLUB.address}</span>
          <span className="announce__hours">Nyitva: {hours}</span>
          <span>
            Recepció: <a href={CLUB.phoneHref} className="announce__phone">{CLUB.phone}</a>
          </span>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="/b" className="brand" onClick={close} aria-label="Budapest Tenisz Centrum – kezdőlap">
            <Image src="/img/logo-sotet.png" alt="" width={438} height={438} className="brand__mark" priority />
            <span className="brand__name">
              Budapest Tenisz Centrum
              <small>BTC · {CLUB.place}</small>
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
            <a href="#jelentkezes" className="btn btn--accent btn--sm">
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
            <a href="#jelentkezes" className="btn btn--accent btn--block" onClick={close}>
              Pályafoglalás, jelentkezés <IconArrow />
            </a>
            <a href={CLUB.phoneHref} className="btn btn--ghost btn--block">
              <IconPhone /> Recepció: {CLUB.phone}
            </a>
            <p className="mobile-menu__hours">
              {CLUB.hours.map((h) => (
                <span key={h.days}>
                  {h.days}: {h.time}
                </span>
              ))}
              <span>{CLUB.address}</span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
