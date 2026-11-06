// Almádi's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → court lines beside the season → racket beside the courts → the club's serving
// player (white figure, clay swoosh and ball) beside the booking heading → a big ball behind the club
// section → black hole on the contact section.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the court stands on the right; the season keeps its content in the left ~70%
  { anchor: "#szezon", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left of the courts and prices
  { anchor: "#palyak", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the logo's serving player beside the booking heading, complete at mid-screen
  {
    anchor: "#foglalas-title",
    done: 0.5,
    shape: { image: "/img/almadi-jel-pontok.png", size: 2.1 },
    wide: at(0.79, 0.5, 0.19, 0.3),
    narrow: at(0.5, 0.2, 0.34, 0.18), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the club section
  { anchor: "#klub", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// court clay (accent), a cool white (light), a deeper clay (warm), the logo's blue lifted for the dark (secondary)
export const B_PALETTE = ["#ef8f62", "#eef3ff", "#d9714a", "#5b8fe8"];
