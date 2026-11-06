"use client";

/**
 * The A/B design switch shown on every page of both versions. A is the multi-page site at /,
 * B is the dot-space one-pager at /b. Switching keeps your place: an A page opens the matching
 * B section, and from B the section you are looking at opens the matching A page.
 * It is a plain link (full page load), because the two versions have separate root layouts.
 */
import { usePathname } from "next/navigation";
import { useCallback } from "react";

const A_TO_B: Record<string, string> = {
  "/tenisz": "#junior",
  "/szemelyi-edzes": "#felnotteknek",
  "/csoportos-orak": "#felnotteknek",
  "/regeneracio": "#regeneracio",
  "/palyaberles": "#palyak",
  "/jelentkezes": "#jelentkezes",
  "/kapcsolat": "#kapcsolat",
  "/galeria": "#normafa",
};
const B_TO_A: Record<string, string> = {
  palyak: "/palyaberles",
  junior: "/tenisz",
  felnotteknek: "/szemelyi-edzes",
  regeneracio: "/regeneracio",
  jelentkezes: "/jelentkezes",
  normafa: "/kapcsolat",
  kapcsolat: "/kapcsolat",
};

export function VersionSwitch({ current }: { current: "a" | "b" }) {
  const path = usePathname() || "/";
  const hrefA = "/";
  const hrefB = "/b" + (A_TO_B[path] ?? "");

  // from B, pick the A page that matches the section in the middle of the screen
  const toA = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const mid = window.innerHeight / 2;
    let target = "/";
    for (const id of Object.keys(B_TO_A)) {
      const el = document.getElementById(id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (r.top <= mid && r.bottom >= mid) target = B_TO_A[id];
    }
    e.preventDefault();
    window.location.href = target;
  }, []);

  return (
    <nav className={`vswitch vswitch--${current}`} aria-label="Dizájnváltozat">
      <span className="vswitch__label">Változat</span>
      <a href={current === "a" ? path : hrefA} className="vswitch__opt" aria-current={current === "a" ? "page" : undefined} onClick={current === "b" ? toA : undefined}>
        A
      </a>
      <a href={current === "b" ? "/b" : hrefB} className="vswitch__opt" aria-current={current === "b" ? "page" : undefined}>
        B
      </a>
    </nav>
  );
}

/** Shared styles for the switch; each version only sets its colour variables and offset. */
export const VSWITCH_CSS = `
.vswitch{position:fixed;left:16px;bottom:calc(16px + var(--vswitch-lift,0px) + env(safe-area-inset-bottom));z-index:90;display:flex;align-items:center;gap:2px;padding:4px 4px 4px 12px;border-radius:999px;background:var(--vswitch-bg);color:var(--vswitch-fg);border:1px solid var(--vswitch-line);box-shadow:0 10px 30px rgba(0,0,0,.28);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);font:600 12px/1 system-ui,-apple-system,"Segoe UI",sans-serif;letter-spacing:.02em}
.vswitch__label{margin-right:6px;opacity:.7;font-weight:500;text-transform:uppercase;letter-spacing:.14em;font-size:10px}
.vswitch__opt{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;color:inherit;text-decoration:none;transition:background .2s,color .2s}
.vswitch__opt:hover{background:var(--vswitch-hover)}
.vswitch__opt[aria-current=page]{background:var(--vswitch-on-bg);color:var(--vswitch-on-fg)}
.vswitch__opt:focus-visible{outline:2px solid var(--vswitch-on-bg);outline-offset:2px}
@media (min-width:1000px){.vswitch{left:max(10px,calc((100vw - 1312px)/4));top:50%;bottom:auto;transform:translateY(-50%);flex-direction:column;gap:4px;padding:12px 4px 4px}.vswitch__label{writing-mode:vertical-rl;transform:rotate(180deg);margin:0 0 6px}}
@media print{.vswitch{display:none}}
`;
