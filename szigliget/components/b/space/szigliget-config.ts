// Tennis Club Szigliget's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → a racket beside the booking steps → court lines beside the memberships → the
// club's own mark from its roundel (the castle hill with the ball, the crossed rackets, the lake with
// its wave) beside the courts heading → a big ball behind the Szigliget Open → black hole on contact.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the racket stands on the right while the booking steps scroll past on the left ~70%
  { anchor: "#foglalas", shape: "racket", wide: at(0.85, 0.58, 0.1, 0.28), narrow: phone },
  // the court stands on the left of the memberships
  { anchor: "#tagsag", shape: "courtLines", wide: at(0.15, 0.58, 0.12, 0.3), narrow: phone },
  // the roundel's mark beside the courts heading, complete at mid-screen (a wide mark, ~1.9:1)
  {
    anchor: "#palyak-title",
    done: 0.5,
    shape: { image: "/img/szigliget-jel-pontok.png", size: 2.3 },
    wide: at(0.775, 0.45, 0.17, 0.3),
    narrow: at(0.5, 0.2, 0.32, 0.18), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the Szigliget Open
  { anchor: "#open", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the roundel's gold (accent: the castle hill, the ball, racket strings), a warm cream from its white
// (light: lines, frames), court clay (warm, sparingly: the grips), the lake's indigo lifted for the
// dark (secondary: the Balaton band)
export const B_PALETTE = ["#f2c94c", "#f3efe2", "#d9703f", "#8b93f0"];
