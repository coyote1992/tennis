// Kiskút's dot-space choreography: what the dots form as you scroll the homepage.
// Arc: starfield → court → racket → the club's own year → the big spinning ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export function homeSteps(font: string): SpaceStep[] {
  return [
    // the court stands on the right; the courts section keeps its text in the left ~70%
    { anchor: "#palyak", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
    // the racket stands on the left; the booking section moves its content to the right
    { anchor: "#foglalas", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
    // 2017, the first Kiskút Open (ITF), beside its heading; complete when the heading is mid-screen
    {
      anchor: "#kiskut-open-title",
      done: 0.5,
      shape: { word: "2017", font },
      wide: at(0.73, 0.5, 0.2, 0.3),
      narrow: at(0.5, 0.42, 0.34, 0.2),
    },
    // large, centred, faint, slowly spinning, behind the coaching programme
    { anchor: "#edzes", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
    // the ending: the ball's dots spiral into the middle and vanish; the stars stay
    { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
  ];
}

// Kiskút yellow (accent), paper (light), clay (warm), club blue (secondary)
export const PALETTE = ["#f5d547", "#f3f1ea", "#e2875b", "#8db6ea"];
