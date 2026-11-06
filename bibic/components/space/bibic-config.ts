// Bíbic Tennis Club's dot-space choreography: what the dots form as you scroll the homepage.
// Arc: starfield → court → racket → the club's lapwing ("bíbic") on its tennis ball, from the logo →
// the big spinning ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const HOME_STEPS: SpaceStep[] = [
  // the court stands on the right; the children's section keeps its content in the left ~70%
  { anchor: "#gyerekek", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left; the court-rental section moves its content to the right
  { anchor: "#arak", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the logo: lime ball (accent), light bird, green breast (secondary), orange throat (warm)
  {
    anchor: "#tuskevar-title",
    done: 0.5,
    shape: { image: "/img/bibic-pontok.png", size: 1.45 },
    wide: at(0.77, 0.5, 0.17, 0.34),
    narrow: at(0.5, 0.2, 0.3, 0.19), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the house rules
  { anchor: "#hazirend", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the logo's ball lime (accent), soft white (light), the lapwing's orange throat (warm), its green breast (secondary)
export const PALETTE = ["#cfe23e", "#eef4ea", "#e8862e", "#86c76a"];
