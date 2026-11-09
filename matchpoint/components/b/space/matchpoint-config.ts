// Barango Tenisz Club's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → a racket beside the court prices → court lines beside the coaching → the
// club's mark (a "B" in a ball-yellow ring) beside the tennis school heading → a big, slowly
// spinning ball behind the court building and the house rules → black hole on contact.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the racket stands on the right while the prices, the pass and the court details scroll past
  { anchor: "#palya", shape: "racket", wide: at(0.85, 0.58, 0.1, 0.28), narrow: phone },
  // the court stands on the left of the coach, the weekly schedule and how to sign up
  { anchor: "#edzesek", shape: "courtLines", wide: at(0.15, 0.58, 0.12, 0.3), narrow: phone },
  // the club's mark beside the tennis school heading, complete at mid-screen
  {
    anchor: "#tenisziskola-title",
    done: 0.5,
    shape: { image: "/img/barango-jel-pontok.png", size: 2 },
    wide: at(0.82, 0.48, 0.13, 0.3),
    narrow: at(0.5, 0.29, 0.2, 0.1), // phones: small, above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the court building and the house rules
  { anchor: "#palyaepites", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// ball yellow-green (accent: the ball, the racket strings, the mark's ring), floodlight white
// (light: lines, the racket frame, the "B"), court clay (warm), windscreen green (secondary)
export const B_PALETTE = ["#d8ea5a", "#f6f1e5", "#e47a4b", "#7fc4a6"];
