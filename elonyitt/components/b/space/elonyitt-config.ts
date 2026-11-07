// Előnyitt S.E. Tenisz Klub's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → court lines beside the prices → racket beside the three steps → the club's own
// rally from its logo (orange racket, the ball's flight arc with the bounce, the ball, the blue
// racket) beside the courts heading → a big ball behind the coach → black hole on the contact section.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the court stands on the right; the prices keep to the left ~70%
  { anchor: "#arak", shape: "courtLines", wide: at(0.85, 0.58, 0.12, 0.3), narrow: phone },
  // the racket stands on the left of the three steps
  { anchor: "#kezdes", shape: "racket", wide: at(0.15, 0.58, 0.1, 0.28), narrow: phone },
  // the logo's rally beside the courts heading, complete at mid-screen (a wide mark, ~2.9:1)
  {
    anchor: "#palyak-title",
    done: 0.5,
    shape: { image: "/img/elonyitt-jel-pontok.png", size: 2.6 },
    wide: at(0.79, 0.42, 0.16, 0.3),
    narrow: at(0.5, 0.2, 0.3, 0.18), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the coach
  { anchor: "#edzo", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the logo's ball yellow-green (accent: strings, ball felt), a cool white (light: lines, frames),
// the logo's orange (warm: the clay field, grips, the left racket), the logo's blue (secondary)
export const B_PALETTE = ["#d6ec4c", "#eef4fb", "#f5a524", "#3ea6f5"];
