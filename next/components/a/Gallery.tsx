"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY } from "@/lib/site";
import { Icon } from "../shared/Icon";

/** Masonry gallery with a keyboard-friendly lightbox (Esc closes, arrows step). */
export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const n = GALLERY.length;

  const close = useCallback(() => {
    setOpen(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (open === null) return;
    document.documentElement.classList.add("menu-open");
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open, close, step]);

  const cur = open === null ? null : GALLERY[open];

  return (
    <>
      <div className="gallery">
        {GALLERY.map((g, i) => (
          <button
            key={g.src + i}
            type="button"
            className="reveal"
            onClick={(e) => {
              lastTrigger.current = e.currentTarget;
              setOpen(i);
            }}
            aria-label={`${g.alt} – nagyítás`}
          >
            <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw" />
          </button>
        ))}
      </div>
      {cur && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Képnézegető" onClick={(e) => e.target === e.currentTarget && close()}>
          <button type="button" className="lightbox__btn" onClick={() => step(-1)} aria-label="Előző kép">
            <Icon name="left" size={20} />
          </button>
          <figure>
            <Image src={cur.src} alt={cur.alt} width={cur.w} height={cur.h} sizes="100vw" />
            <figcaption>
              {cur.alt} · {open! + 1} / {n}
            </figcaption>
          </figure>
          <button type="button" className="lightbox__btn" onClick={() => step(1)} aria-label="Következő kép">
            <Icon name="right" size={20} />
          </button>
          <button ref={closeRef} type="button" className="lightbox__btn lightbox__close" onClick={close} aria-label="Bezárás">
            <Icon name="close" size={20} />
          </button>
        </div>
      )}
    </>
  );
}
