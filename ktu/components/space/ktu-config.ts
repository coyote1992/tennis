// The Kecskeméti Tenisz Udvar's dot-space choreography: what the dots form as you scroll.
// Arc: starfield → court → racket → "KTU" (the kids at a KTU training spelled it in tennis balls;
// here the dots do) → the big spinning ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export function homeSteps(font: string): SpaceStep[] {
  return [
    // the court stands on the right; the booking section keeps its content in the left ~70%
    { anchor: "#foglalas", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
    // the racket stands on the left; the prices section moves its content to the right
    { anchor: "#arak", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
    // the club's name beside the "about" heading, complete at mid-screen
    {
      anchor: "#ktu-title",
      done: 0.5,
      shape: { word: "KTU", font },
      wide: at(0.76, 0.5, 0.2, 0.28),
      narrow: at(0.5, 0.2, 0.34, 0.2), // phones: above the heading, in the gap between sections
    },
    // large, centred, faint, slowly spinning, behind the coaching section
    { anchor: "#edzes", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
    // the ending: the ball's dots spiral into the middle and vanish; the stars stay
    { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
  ];
}

// the logo's lime (accent), cool white (light), clay (warm), violet (secondary)
export const PALETTE = ["#c8f031", "#f2f4fb", "#e07a4f", "#8f7cff"];
