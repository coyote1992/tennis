"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CLUB, NAV } from "@/lib/site";
import { IconArrow, IconMail } from "./icons";

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
          <span>A GAMF-pályák {CLUB.winterClosed} óta téli szünetre zártak</span>
          <span>
            <a href={CLUB.league} target="_blank" rel="noopener noreferrer" className="announce__link">
              Városi bajnokság: eredmények
            </a>
          </span>
          <span className="announce__hours">Kecskemét, {CLUB.founded} óta</span>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <Link href="/" className="brand" onClick={close} aria-label="KATE – főoldal">
            <Image src="/img/emblema.png" alt="" width={44} height={44} className="brand__mark" priority />
            <span className="brand__text">
              <span className="brand__name">KATE</span>
              <span className="brand__sub">Kecskeméti Amatőr Teniszezők</span>
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
            <Link href="/#tagsag" className="btn btn--accent btn--sm">
              Csatlakozom <IconArrow />
            </Link>
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
            <Link href="/#tagsag" className="btn btn--accent btn--block" onClick={close}>
              Csatlakozom <IconArrow />
            </Link>
            <a href={CLUB.emailHref} className="btn btn--ghost btn--block">
              <IconMail /> Írj nekünk
            </a>
            <p className="mobile-menu__hours">
              <span>A GAMF-pályák {CLUB.winterClosed} óta téli szünetre zártak.</span>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
