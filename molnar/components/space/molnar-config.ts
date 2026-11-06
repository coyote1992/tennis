// Molnár Teniszakadémia's dot-space choreography: what the dots form as you scroll the homepage.
// Arc: starfield → court → racket → "2009", the year the academy was founded, in the logo's
// Trajan-like serif → the big spinning ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export function homeSteps(font: string): SpaceStep[] {
  return [
    // the court stands on the right; the adults' section keeps its content in the left ~70%
    { anchor: "#felnott", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
    // the racket stands on the left; the children's section moves its content to the right
    { anchor: "#gyerekek", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
    // the founding year beside the "about us" heading, complete at mid-screen
    {
      anchor: "#rolunk-title",
      done: 0.5,
      shape: { word: "2009", font },
      wide: at(0.76, 0.5, 0.2, 0.28),
      narrow: at(0.5, 0.2, 0.34, 0.2), // phones: above the heading, in the gap between sections
    },
    // large, centred, faint, slowly spinning, behind the courts and prices
    { anchor: "#palyak", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
    // the ending: the ball's dots spiral into the middle and vanish; the stars stay
    { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
  ];
}

// the logo's copper ball (accent), warm white (light), the Budakeszi heart's red (warm), steel blue (secondary)
export const PALETTE = ["#e8975e", "#f4efe8", "#e5483f", "#8fb3d9"];
