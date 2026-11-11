"use client";

import { useEffect, useState } from "react";
import { CLUB, HOURS } from "@/lib/site";
import { IconPhone } from "./icons";
import { NAV_B } from "./nav";

const nb = (t: string) => t.replace(/ /g, " ").replace(/–/g, "–⁠");

/** The logo's three stripes (light navy on the dark sky), drawn from the club's own mark. */
export function Brand({ footer }: { footer?: boolean }) {
  return (
    <span className={`brand__inner${footer ? " brand__inner--footer" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/folyondar-jel-vilagos.svg" alt="" width={121} height={58} className="brand__logo" />
      <span className="brand__name">
        Folyondár
        <small>Vasas Sport és Tánc</small>
      </span>
    </span>
  );
}

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
            Nyitva: H–P {nb(HOURS.center[0].time)}, Szo–V {nb(HOURS.center[1].time)}
          </span>
          <span className="announce__tel">
            Recepció:{" "}
            <a href={CLUB.phoneHref} className="announce__phone">
              {nb(CLUB.phone)}
            </a>
          </span>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <a href="/b" className="brand" onClick={close} aria-label="Folyondár Sportközpont – kezdőlap">
            <Brand />
          </a>

          <nav className="nav" aria-label="Fő navigáció">
            {NAV_B.map((n) => (
              <a key={n.href} href={n.href} className="nav__link">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="header__cta">
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
              <IconPhone /> Recepció: {nb(CLUB.phone)}
            </a>
            <a href={CLUB.phone2Href} className="btn btn--ghost btn--block">
              <IconPhone /> {nb(CLUB.phone2)}
            </a>
            <p className="mobile-menu__hours">
              <span>{CLUB.email}</span>
              <span>{CLUB.address}</span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
