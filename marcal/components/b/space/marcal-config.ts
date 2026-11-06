// The Marcal Teniszcentrum's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → court → racket → the club's logo ball (lime, with its white seam) beside the
// coaching heading → the big spinning ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the court stands on the right; the sports section keeps its content in the left ~70%
  { anchor: "#sportagak", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left of the booking section
  { anchor: "#foglalas", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the logo ball beside the coaching heading, complete at mid-screen
  {
    anchor: "#oktatas-title",
    done: 0.5,
    shape: { image: "/img/labda-pontok.png", size: 1.4 },
    wide: at(0.77, 0.5, 0.2, 0.34),
    narrow: at(0.5, 0.2, 0.34, 0.18), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the events and celebrations
  { anchor: "#rendezvenyek", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the logo ball's lime (accent), ivory (light), the logo's claret red lifted (warm), a cool court blue (secondary)
export const B_PALETTE = ["#dfe24e", "#f5f2ea", "#d0453f", "#7cc3d6"];
