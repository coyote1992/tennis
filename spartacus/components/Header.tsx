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
          <span>Téli szezon: 2026. október 12. – 2027. április 11., fűtött sátorban</span>
          <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="announce__phone">
            {CLUB.bookingLabel}
          </a>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <Link href="/" className="brand" onClick={close} aria-label="Siófoki Spartacus SE – főoldal">
            <Image src="/img/cimer.png" alt="" width={46} height={46} className="brand__logo" priority />
            <span className="brand__text">
              <span className="brand__name">Spartacus</span>
              <span className="brand__sub">Siófok · tenisz 1915 óta</span>
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
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent btn--sm">
              Pályafoglalás <IconArrow />
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
            <Link href="/palyarend" className="mobile-menu__link mobile-menu__link--small" onClick={close}>
              Pályarend
            </Link>
          </nav>
          <div className="container mobile-menu__foot">
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent btn--block">
              Online pályafoglalás <IconArrow />
            </a>
            <a href={CLUB.managerPhoneHref} className="btn btn--ghost btn--block">
              <IconPhone /> {CLUB.manager}: {CLUB.managerPhone}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
