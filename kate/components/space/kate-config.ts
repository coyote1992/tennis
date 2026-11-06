// KATE's dot-space choreography: what the dots form as you scroll the homepage.
// Arc: starfield → court → racket → the club's own emblem (the shield with the crossed rackets,
// designed by Goór Imre) → the big spinning ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const HOME_STEPS: SpaceStep[] = [
  // the court stands on the right; the "how to start" section keeps its content in the left ~70%
  { anchor: "#kezdes", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left; the championships section moves its content to the right
  { anchor: "#bajnoksag", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the emblem: orange shield (warm role), light rackets and lettering; complete at mid-screen
  {
    anchor: "#klub-title",
    done: 0.5,
    shape: { image: "/img/emblema-pontok.png", size: 1.5 },
    wide: at(0.77, 0.5, 0.2, 0.32),
    narrow: at(0.5, 0.2, 0.34, 0.18), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the membership section
  { anchor: "#tagsag", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// golden sand (accent: the Aranyhomok), warm white (light), the emblem's orange (warm), lilac (secondary)
export const PALETTE = ["#e9b949", "#f4efe6", "#e0622f", "#b7a4e8"];
