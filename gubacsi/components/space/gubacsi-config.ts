// Gubacsi Zsófi Tenisz Klub's dot-space choreography.
// Arc: starfield → court → racket → 2001, the year of Gubacsi Zsófi's WTA title → ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export function homeSteps(font: string): SpaceStep[] {
  return [
    // the court stands on the right; the courts section keeps its content in the left ~70%
    { anchor: "#palyak", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
    // the racket stands on the left; the prices section moves its content to the right
    { anchor: "#arak", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
    // 2001: WTA Casablanca title, beside the Gubacsi Zsófi heading; complete when it is mid-screen
    {
      anchor: "#gubacsi-zsofi-title",
      done: 0.5,
      shape: { word: "2001", font },
      wide: at(0.75, 0.5, 0.19, 0.28),
      narrow: at(0.5, 0.2, 0.34, 0.2),
    },
    // large, centred, faint, slowly spinning, behind the coaching section
    { anchor: "#edzes", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
    // the ending: the ball's dots spiral into the middle and vanish; the stars stay
    { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
  ];
}

// logo lime (accent), white (light), clay (warm), logo blue (secondary)
export const PALETTE = ["#cdea28", "#f3f6fb", "#e2875b", "#6f95ff"];
