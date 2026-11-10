"use client";

/**
 * The A/B design switch, shown on both versions: a labelled control fixed at the bottom centre of
 * the screen. A (classic) lives at /, B (modern, dot-space) at /b.
 * Switching opens the same page in the other version, scrolled to the section you were looking at
 * (both versions use the same section ids). It is a plain link (full page load), because the two
 * versions have separate root layouts.
 */
import { usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

/** The same page in the other version: /x <-> /b/x. */
function counterpart(path: string, target: "a" | "b") {
  const bare = path.replace(/^\/b(?=\/|$)/, "") || "/";
  return target === "a" ? bare : bare === "/" ? "/b" : `/b${bare}`;
}

/**
 * Arriving with #section (from the switch or a shared link): the browser jumps to the section at
 * once, before the web fonts and images have settled, so the headings above can still change height
 * and leave the section off its mark. Once fonts and the page have loaded, line it up again —
 * unless the visitor has started scrolling by then.
 */
function useSettleHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const el = id ? document.getElementById(id) : null;
    if (!el) return;
    let stopped = false;
    const stop = () => {
      stopped = true;
    };
    const fix = () => {
      if (stopped) return;
      const pad = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const off = el.getBoundingClientRect().top - pad;
      if (Math.abs(off) > 6) window.scrollTo({ top: window.scrollY + off, behavior: "instant" as ScrollBehavior });
    };
    const opts = { passive: true, once: true } as const;
    window.addEventListener("wheel", stop, opts);
    window.addEventListener("touchstart", stop, opts);
    window.addEventListener("keydown", stop, { once: true });
    document.fonts?.ready.then(fix);
    if (document.readyState === "complete") fix();
    else window.addEventListener("load", fix, { once: true });
    const timers = [400, 1200].map((ms) => window.setTimeout(fix, ms));
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
      window.removeEventListener("load", fix);
    };
  }, []);
}

export function VersionSwitch({ current }: { current: "a" | "b" }) {
  useSettleHash();
  const path = usePathname() || (current === "a" ? "/" : "/b");
  const go = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const target = e.currentTarget.dataset.target as "a" | "b";
      e.preventDefault();
      if (target === current) return;
      // the section being read: the last one whose top is above 40% of the screen
      const line = window.innerHeight * 0.4;
      let hash = "";
      document.querySelectorAll<HTMLElement>("main section[id]").forEach((el) => {
        if (el.getBoundingClientRect().top <= line) hash = "#" + el.id;
      });
      window.location.href = counterpart(window.location.pathname, target) + hash;
    },
    [current],
  );

  return (
    <nav className={`vswitch vswitch--${current}`} aria-label="Dizájnváltozat">
      <span className="vswitch__label" aria-hidden="true">
        Dizájn
      </span>
      <a href={counterpart(path, "a")} data-target="a" className="vswitch__opt" aria-current={current === "a" ? "page" : undefined} onClick={go}>
        <b>A</b>
        <span>Klasszikus</span>
      </a>
      <a href={counterpart(path, "b")} data-target="b" className="vswitch__opt" aria-current={current === "b" ? "page" : undefined} onClick={go}>
        <b>B</b>
        <span>Modern</span>
      </a>
    </nav>
  );
}

/**
 * Shared styles for the switch. Each version sets --vs-accent / --vs-accent-ink (the active
 * option) and, on phones, --vs-lift (to sit above its action bar). On first load the option you
 * are not on pulses three times, so the switch is noticed.
 */
export const VSWITCH_CSS = `
.vswitch{position:fixed;left:50%;bottom:calc(18px + var(--vs-lift,0px) + env(safe-area-inset-bottom));transform:translateX(-50%);z-index:95;display:flex;align-items:center;gap:4px;padding:5px;border-radius:999px;background:rgba(12,14,18,.9);color:#fff;border:1px solid rgba(255,255,255,.16);box-shadow:0 18px 50px rgba(0,0,0,.45),0 0 0 4px rgba(255,255,255,.06);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);font:600 14px/1 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;white-space:nowrap}
.vswitch__label{padding:0 10px 0 12px;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.62)}
.vswitch__opt{position:relative;display:inline-flex;align-items:center;gap:8px;height:42px;padding:0 18px 0 6px;border-radius:999px;color:#fff;text-decoration:none;transition:background .2s,color .2s}
.vswitch__opt b{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.14);font-size:14px}
.vswitch__opt:hover{background:rgba(255,255,255,.1)}
.vswitch__opt[aria-current=page]{background:var(--vs-accent,#f2c94c);color:var(--vs-accent-ink,#111)}
.vswitch__opt[aria-current=page] b{background:rgba(0,0,0,.14)}
.vswitch__opt:not([aria-current]) b{animation:vs-pulse 1.6s ease-out .8s 3}
.vswitch__opt:focus-visible{outline:2px solid var(--vs-accent,#f2c94c);outline-offset:2px}
@keyframes vs-pulse{0%{box-shadow:0 0 0 0 rgba(255,255,255,.55)}100%{box-shadow:0 0 0 12px rgba(255,255,255,0)}}
@media (max-width:520px){.vswitch{font-size:13px}.vswitch__label{display:none}.vswitch__opt{height:38px;padding:0 14px 0 5px}.vswitch__opt b{width:28px;height:28px}}
@media (prefers-reduced-motion:reduce){.vswitch__opt b{animation:none!important}}
@media print{.vswitch{display:none}}
`;
