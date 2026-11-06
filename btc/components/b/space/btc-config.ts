// BTC's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → court lines beside the groups → racket beside the courts → the BTC ball mark
// (sky-blue ring, light B·T·C seams) beside the coaches heading → a big ball behind the club
// section → black hole on the contact section.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the court stands on the right; the groups keep their content in the left ~70%
  { anchor: "#edzesek", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left of the courts
  { anchor: "#palyak", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the club's ball mark beside the coaches heading, complete at mid-screen
  {
    anchor: "#edzok-title",
    done: 0.5,
    shape: { image: "/img/btc-jel-pontok.png", size: 1.7 },
    wide: at(0.79, 0.5, 0.17, 0.3),
    narrow: at(0.5, 0.2, 0.3, 0.18), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the club section
  { anchor: "#klub", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the logo's sky blue (accent), a cool white (light), clay (warm), the logo's blue lifted for the dark (secondary)
export const B_PALETTE = ["#3cb8ff", "#eaf2ff", "#e0895a", "#5d8dff"];
