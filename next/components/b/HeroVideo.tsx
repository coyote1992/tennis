"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/shared/Icon";

/**
 * The drone film of the courts, muted and looping. It does not start when the visitor prefers
 * reduced motion, and it can always be paused (the poster stays as the still image).
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <video ref={ref} className="hero__video" src="/video/dron.mp4" poster="/images/hero-poster.jpg" muted loop playsInline preload="metadata" aria-hidden="true" />
      <button type="button" className="hero__play" onClick={toggle} aria-label={playing ? "Háttérvideó megállítása" : "Háttérvideó lejátszása"}>
        <Icon name={playing ? "pause" : "play"} size={14} />
      </button>
    </>
  );
}
