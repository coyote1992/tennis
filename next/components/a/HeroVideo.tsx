"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "../shared/Icon";

/** The drone footage behind the home hero, with a pause button (and no autoplay for reduced motion). */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      setPlaying(false);
    }
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <div className="hero__media">
        <video ref={ref} autoPlay muted loop playsInline preload="metadata" poster="/images/hero-poster.jpg" aria-hidden="true">
          <source src="/video/dron.mp4" type="video/mp4" />
        </video>
      </div>
      <button type="button" className="hero__pause" onClick={toggle} aria-label={playing ? "Háttérvideó megállítása" : "Háttérvideó indítása"}>
        <Icon name={playing ? "pause" : "play"} size={14} />
      </button>
    </>
  );
}
