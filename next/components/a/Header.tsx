"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { Icon } from "../shared/Icon";
import { Brand } from "./Brand";

/** Pages whose hero runs under the header (the header starts transparent there). */
const OVER = new Set(["/", "/tenisz", "/szemelyi-edzes", "/csoportos-orak", "/regeneracio", "/palyaberles", "/galeria", "/kapcsolat", "/jelentkezes"]);

export function Header() {
  const path = usePathname() || "/";
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const over = OVER.has(path);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const cls = ["header", over ? "header--over" : "header--solid", solid ? "header--solid" : "", open ? "header--open" : ""].join(" ");

  return (
    <>
      <div className="announce">
        <div className="container announce__inner">
          <span>
            {SITE.season.label} {SITE.season.untilIg}
          </span>
          <span className="announce__sep announce__hide-sm">·</span>
          <span className="announce__hide-sm">Junior csoportok, személyi edzés, regeneráció</span>
          <span className="announce__sep">·</span>
          <Link href="/jelentkezes">Jelentkezés online →</Link>
        </div>
      </div>
      <header className={cls}>
        <div className="container header__inner">
          <Brand onClick={close} />
          <nav className="nav" aria-label="Fő navigáció">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="nav__link" aria-current={path === n.href ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="header__cta">
            <a href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
              Pályafoglalás <Icon name="arrowUpRight" size={14} />
            </a>
            <Link href="/jelentkezes" className="btn btn--primary btn--sm">
              Jelentkezés
            </Link>
          </div>
          <button
            type="button"
            className="burger"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={open}
            aria-controls="a-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
        <div id="a-menu" className="mobile-menu" hidden={!open}>
          <nav className="container mobile-menu__nav" aria-label="Mobil navigáció">
            <Link href="/" className="mobile-menu__link" onClick={close} style={{ ["--i" as string]: 0 }}>
              Kezdőlap <Icon name="right" size={20} />
            </Link>
            {NAV.map((n, i) => (
              <Link key={n.href} href={n.href} className="mobile-menu__link" onClick={close} style={{ ["--i" as string]: i + 1 }}>
                {n.label} <Icon name="right" size={20} />
              </Link>
            ))}
          </nav>
          <div className="container mobile-menu__foot">
            <Link href="/jelentkezes" className="btn btn--primary btn--block" onClick={close}>
              Jelentkezés edzésre
            </Link>
            <a href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--block">
              Pályafoglalás a Hellán <Icon name="arrowUpRight" size={14} />
            </a>
            <p>
              <a className="inline-link" href={SITE.phone.href}>
                {SITE.phone.display}
              </a>{" "}
              · {SITE.address.line}
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
