// Fortuna's dot-space choreography: what the dots form as you scroll the homepage.
// Arc: starfield → court → racket → the club's own emblem (the tennis ball with the four-leaf
// clover from the FORTUNA logo) → the big spinning ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const HOME_STEPS: SpaceStep[] = [
  // the court stands on the right; the tennis-school section keeps its content in the left ~70%
  { anchor: "#teniszsuli", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left; the court-rental section moves its content to the right
  { anchor: "#arak", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the logo's emblem: clay-orange ball, green clover (colours map to the palette's warm and
  // secondary roles); complete at mid-screen beside the "about us" heading
  {
    anchor: "#rolunk-title",
    done: 0.5,
    shape: { image: "/img/emblem-dots.png", size: 1.3 },
    wide: at(0.77, 0.5, 0.16, 0.3),
    narrow: at(0.5, 0.2, 0.3, 0.17), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the coaches
  { anchor: "#edzok", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// ball yellow-green (accent), warm white (light), the logo's clay orange (warm), clover green (secondary)
export const PALETTE = ["#d9f04a", "#f7f0e8", "#e5552f", "#6fcf86"];
