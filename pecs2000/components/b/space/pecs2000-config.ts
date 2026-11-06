// The Pécs 2000 Tenisz Club's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → court → racket → the club's crest (the crossed rackets in the laurel wreath)
// → the big spinning ball → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the court stands on the right; the courses section keeps its content in the left ~70%
  { anchor: "#tanfolyamok", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left of the coaches
  { anchor: "#edzok", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the crest beside the club-history heading, complete at mid-screen
  {
    anchor: "#tortenet-title",
    done: 0.5,
    shape: { image: "/img/cimer-pontok.png", size: 1.5 },
    wide: at(0.77, 0.5, 0.2, 0.34),
    narrow: at(0.5, 0.2, 0.34, 0.18), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the racket service
  { anchor: "#szerviz", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the crest's gold (accent), ivory (light), clay orange (warm), a soft court green (secondary)
export const B_PALETTE = ["#f2cf6e", "#f4f1e8", "#e0703c", "#79c39a"];
