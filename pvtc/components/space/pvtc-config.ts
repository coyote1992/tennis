// The Pécs Városi Tenisz Club's dot-space choreography: what the dots form as you scroll.
// Arc: starfield → court → racket → the club's badge (the yellow ball with "PVTC" and 1992)
// → the big spinning ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const HOME_STEPS: SpaceStep[] = [
  // the court stands on the right; the courts section keeps its content in the left ~70%
  { anchor: "#palyak", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left of the price list
  { anchor: "#arak", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the badge beside the club-history heading, complete at mid-screen
  {
    anchor: "#klub-title",
    done: 0.5,
    shape: { image: "/img/pvtc-pontok.png", size: 1.45 },
    wide: at(0.77, 0.5, 0.18, 0.32),
    narrow: at(0.5, 0.2, 0.32, 0.18), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the competitions
  { anchor: "#versenyek", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the badge's yellow (accent), white (light), the clay courts' orange (warm), a cool blue (secondary)
export const PALETTE = ["#f6d24a", "#f5f3ee", "#e0703c", "#7fb6e6"];
