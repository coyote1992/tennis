// OMSZK Park's dot-space choreography: what the dots form as you scroll the homepage.
// Arc: starfield → court → racket → the club's own map-pin emblem → the big spinning ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const HOME_STEPS: SpaceStep[] = [
  // the court stands on the right; the courts section keeps its content in the left ~70%
  { anchor: "#palyak", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left; the prices section moves its content to the right
  { anchor: "#arak", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the club's map-pin emblem (from its logo) beside the location heading; complete at mid-screen
  {
    anchor: "#helyszin-title",
    done: 0.5,
    shape: { image: "/img/logo-pin.png", size: 1.15 },
    wide: at(0.76, 0.5, 0.15, 0.3),
    narrow: at(0.5, 0.2, 0.3, 0.17), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the coaching section
  { anchor: "#edzes", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// tennis-ball lime (accent, from the logo), white (light), clay (warm), lake teal (secondary)
export const PALETTE = ["#cde34f", "#f2f4f0", "#e2875b", "#6fd3cb"];
