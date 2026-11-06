"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CLUB, NAV } from "@/lib/site";
import { IconPhone } from "./icons";

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
          <span>Nálunk 1 az 2: egy óra árán kettőt játszhatsz</span>
          <span>
            Pályafoglalás:{" "}
            <a href={CLUB.reception.href} className="announce__phone">
              {CLUB.reception.phone}
            </a>
          </span>
          <span className="announce__hours">Budakeszi, Márity László u. 17.</span>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <Link href="/" className="brand" onClick={close} aria-label="Molnár Teniszakadémia – főoldal">
            <Image src="/img/molnar-logo.png" alt="Molnár Teniszakadémia – Tenisz. Másképp." width={176} height={81} className="brand__logo" priority />
          </Link>

          <nav className="nav" aria-label="Fő navigáció">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="nav__link">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="header__cta">
            <a href={CLUB.reception.href} className="btn btn--accent btn--sm">
              <IconPhone /> Pályafoglalás
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
            <a href={CLUB.reception.href} className="btn btn--accent btn--block">
              <IconPhone /> Pályafoglalás: {CLUB.reception.phone}
            </a>
            <a href={CLUB.coaching.href} className="btn btn--ghost btn--block">
              <IconPhone /> Oktatás, tábor: {CLUB.coaching.phone}
            </a>
            <p className="mobile-menu__hours">
              {CLUB.hours.map((h) => (
                <span key={h.days}>
                  {h.days}: {h.time}
                </span>
              ))}
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
