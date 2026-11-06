"use client";

/**
 * The A/B design switch, shown on both versions: a labelled control fixed at the bottom centre of
 * the screen. A (classic) lives at /, B (modern, dot-space) at /b. Both pages use the same section
 * ids, so switching opens the other version at the section you were looking at. It is a plain link
 * (full page load), because the two versions have separate root layouts.
 */
import { useCallback } from "react";
import { SECTIONS } from "@/lib/site";

export function VersionSwitch({ current }: { current: "a" | "b" }) {
  const go = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const target = e.currentTarget.dataset.target as "a" | "b";
      if (target === current) {
        e.preventDefault();
        return;
      }
      const mid = window.innerHeight / 2;
      let hash = "";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) hash = "#" + s.id;
      }
      e.preventDefault();
      window.location.href = (target === "a" ? "/" : "/b") + hash;
    },
    [current],
  );

  return (
    <nav className={`vswitch vswitch--${current}`} aria-label="Dizájnváltozat">
      <span className="vswitch__label" aria-hidden="true">
        Dizájn
      </span>
      <a href="/" data-target="a" className="vswitch__opt" aria-current={current === "a" ? "page" : undefined} onClick={go}>
        <b>A</b>
        <span>Klasszikus</span>
      </a>
      <a href="/b" data-target="b" className="vswitch__opt" aria-current={current === "b" ? "page" : undefined} onClick={go}>
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
