"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@/components/shared/Icon";
import { HOURS, SITE } from "@/lib/site";
import { B_NAV } from "./nav";

export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a href="#top" className="brand" onClick={onClick} aria-label="Next Tenisz Akadémia – az oldal teteje">
      <Image src="/img-b/logo.png" alt="" width={161} height={124} className="brand__logo" priority />
      <span className="brand__word">
        <span className="brand__name">Next Tenisz</span>
        <span className="brand__sub">Akadémia · Normafa</span>
      </span>
    </a>
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
      <div className="announce" id="top">
        <div className="container announce__inner">
          <span>
            {SITE.season.label}, téli óradíjak {SITE.season.untilIg}
          </span>
          <span>
            <a href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer" className="announce__link">
              Pályafoglalás a Hellán
            </a>
          </span>
          <span className="announce__hours">Nyitva: H–P 7–21, Szo–V 8–19</span>
        </div>
      </div>
      <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
        <div className="container header__inner">
          <Brand onClick={close} />

          <nav className="nav" aria-label="Az oldal részei">
            {B_NAV.map((n) => (
              <a key={n.href} href={n.href} className="nav__link">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="header__cta">
            <a href="#jelentkezes" className="btn btn--accent btn--sm">
              Jelentkezés <Icon name="arrow" size={16} />
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
            {B_NAV.map((n, i) => (
              <a key={n.href} href={n.href} className="mobile-menu__link" onClick={close} style={{ ["--i" as string]: i }}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="container mobile-menu__foot">
            <a href="#jelentkezes" onClick={close} className="btn btn--accent btn--block">
              Jelentkezés edzésre <Icon name="arrow" size={16} />
            </a>
            <a href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--block">
              Pályafoglalás a Hellán <Icon name="arrowUpRight" size={16} />
            </a>
            <p className="mobile-menu__hours">
              {HOURS.map((h) => (
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
