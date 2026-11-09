"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HOTEL } from "@/lib/site";
import { IconMail, IconPhone } from "./icons";
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
          <span className="announce__place">
            {HOTEL.name} {HOTEL.stars} · {HOTEL.town}
          </span>
          <span className="announce__mail">
            <a href={HOTEL.emailHref} className="announce__link">
              {HOTEL.email}
            </a>
          </span>
          <span className="announce__tel">
            Recepció:{" "}
            <a href={HOTEL.phoneHref} className="announce__phone">
              {nb(HOTEL.phone)}
            </a>
          </span>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="/b" className="brand" onClick={close} aria-label="Batthyány Kastélyszálló – tenisz és wellness, kezdőlap">
            <Image src="/img/batthyany-jel-pontok.png" alt="" width={900} height={346} className="brand__logo" priority />
            <span className="brand__name">
              Batthyány Kastélyszálló
              <small>Tenisz · Wellness · Zalacsány</small>
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
            <a href={HOTEL.emailHref} className="btn btn--ghost btn--sm btn--icon" aria-label={`E-mail: ${HOTEL.email}`}>
              <IconMail />
            </a>
            <a href={HOTEL.phoneHref} className="btn btn--accent btn--sm">
              <IconPhone /> {nb(HOTEL.phone)}
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
            <a href={HOTEL.phoneHref} className="btn btn--accent btn--block">
              <IconPhone /> Recepció: {nb(HOTEL.phone)}
            </a>
            <a href={HOTEL.emailHref} className="btn btn--ghost btn--block">
              <IconMail /> {HOTEL.email}
            </a>
            <p className="mobile-menu__hours">
              <span>Pálya és wellness nap: a recepción, telefonon vagy e-mailben.</span>
              <span>{HOTEL.address}</span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
