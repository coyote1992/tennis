// The Római Padel Akadémia's dot-space choreography: what the dots form as you scroll the homepage.
// Arc: starfield → court → racket → the "RP" monogram from the logo (the padel racket inside the R,
// the lime ball) → the big spinning ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const HOME_STEPS: SpaceStep[] = [
  // the court stands on the right; the padel section keeps its content in the left ~70%
  { anchor: "#padel", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left of the tennis and price sections
  { anchor: "#tenisz", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the monogram beside the club heading, complete at mid-screen
  {
    anchor: "#klub-title",
    done: 0.5,
    shape: { image: "/img/rp-pontok.png", size: 1.4 },
    wide: at(0.77, 0.5, 0.18, 0.32),
    narrow: at(0.5, 0.2, 0.32, 0.18), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the events section
  { anchor: "#rendezveny", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the logo's ball lime (accent), white (light), warm clay (warm), the hard courts' blue (secondary)
export const PALETTE = ["#d6e23a", "#f6f7f2", "#e8875b", "#4f8ff7"];
