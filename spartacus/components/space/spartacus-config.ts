// Siófoki Spartacus' dot-space choreography: what the dots form as you scroll the homepage.
// Arc: starfield → court → racket → 1915, the year of the town's first tennis court → ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export function homeSteps(font: string): SpaceStep[] {
  return [
    // the court stands on the right; the courts section keeps its content in the left ~70%
    { anchor: "#palyak", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
    // the racket stands on the left; the booking section moves its content to the right
    { anchor: "#foglalas", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
    // 1915: Siófok's first tennis court, on the same ground the club still plays on
    {
      anchor: "#tortenet-title",
      done: 0.5,
      shape: { word: "1915", font },
      wide: at(0.73, 0.5, 0.2, 0.3),
      narrow: at(0.5, 0.2, 0.34, 0.2), // phones: above the heading, in the gap between sections
    },
    // large, centred, faint, slowly spinning, behind the coaching section
    { anchor: "#edzes", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
    // the ending: the ball's dots spiral into the middle and vanish; the stars stay
    { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
  ];
}

// crest gold (accent), parchment (light), clay (warm), crest blue (secondary)
export const PALETTE = ["#e6bf5c", "#f3ead8", "#d9824f", "#6f9cf0"];
