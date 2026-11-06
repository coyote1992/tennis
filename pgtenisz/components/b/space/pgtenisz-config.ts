// PG Tenisz's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → court beside the club's story → racket beside the coaches → the PG mark (green P,
// yellow ball-G) beside the results heading → a big tennis ball behind the programmes → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the court stands on the right; the club section keeps its content in the left ~70%
  { anchor: "#egyesulet", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left of the coaches
  { anchor: "#edzok", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the club's PG mark beside the results heading, complete at mid-screen
  {
    anchor: "#eredmenyek-title",
    done: 0.5,
    shape: { image: "/img/pg-jel-pontok.png", size: 1.5 },
    wide: at(0.78, 0.5, 0.2, 0.36),
    narrow: at(0.5, 0.2, 0.3, 0.18), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the programmes
  { anchor: "#programok", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the logo's yellow (accent), cream (light), clay (warm), the logo's green lifted for the dark sky (secondary)
export const B_PALETTE = ["#f2c53d", "#f4f1e6", "#e0895a", "#46d674"];
