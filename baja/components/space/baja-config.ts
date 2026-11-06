// The Bajai Tenisz Klub's dot-space choreography: what the dots form as you scroll the homepage.
// Arc: starfield → court → racket → "1980", the year the club was founded → the big spinning
// ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export function homeSteps(font: string): SpaceStep[] {
  return [
    // the court stands on the right; the booking section keeps its content in the left ~70%
    { anchor: "#foglalas", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
    // the racket stands on the left; the prices section moves its content to the right
    { anchor: "#arak", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
    // the founding year beside the club heading, complete at mid-screen
    {
      anchor: "#klub-title",
      done: 0.5,
      shape: { word: "1980", font },
      wide: at(0.76, 0.5, 0.2, 0.28),
      narrow: at(0.5, 0.2, 0.34, 0.2), // phones: above the heading, in the gap between sections
    },
    // large, centred, faint, slowly spinning, behind the coaches
    { anchor: "#edzok", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
    // the ending: the ball's dots spiral into the middle and vanish; the stars stay
    { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
  ];
}

// the club's yellow (accent), warm white (light), clay (warm), Danube blue (secondary)
export const PALETTE = ["#ffd23f", "#f2f5ef", "#e2875b", "#7cc7f0"];
