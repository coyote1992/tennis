// Open Tennis Valley's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → court → racket → the club's ball logo (OTV green, ivory ring and seams) beside
// the coaching heading → the big spinning ball behind the tournaments → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the court stands on the right; the courts section keeps its content in the left ~70%
  { anchor: "#palyak", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left of booking and prices
  { anchor: "#foglalas", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the OTV ball logo beside the coaching heading, complete at mid-screen
  {
    anchor: "#oktatas-title",
    done: 0.5,
    shape: { image: "/img/otv-labda-pontok.png", size: 1.4 },
    wide: at(0.77, 0.5, 0.2, 0.34),
    narrow: at(0.5, 0.2, 0.34, 0.18), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the tournaments
  { anchor: "#versenyek", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// OTV green (accent), ivory (light), clay (warm), tennis-ball lime (secondary)
export const B_PALETTE = ["#2fd39c", "#f3f1ea", "#e27a46", "#d8e65a"];
