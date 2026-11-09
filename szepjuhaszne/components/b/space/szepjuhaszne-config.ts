// Szép Juhászné Teniszklub's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → a racket beside the courts and winter prices → court lines beside the tennis
// school → the club's own mark from its logo (the pin-shaped ring, the heart, the racket and the
// ball) beside the collection heading → a big ball behind the programmes → black hole on contact.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the racket stands on the right while the courts, booking and prices scroll past on the left ~70%
  { anchor: "#palyak", shape: "racket", wide: at(0.85, 0.58, 0.1, 0.28), narrow: phone },
  // the court stands on the left of the tennis school
  { anchor: "#tenisziskola", shape: "courtLines", wide: at(0.15, 0.58, 0.12, 0.3), narrow: phone },
  // the logo's mark beside the collection heading, complete at mid-screen (about 1.1:1)
  {
    anchor: "#kiallitas-title",
    done: 0.5,
    shape: { image: "/img/szepjuhaszne-jel-pontok.png", size: 2.4 },
    wide: at(0.78, 0.47, 0.15, 0.3),
    narrow: at(0.5, 0.2, 0.3, 0.17), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the programmes
  { anchor: "#programok", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// a warm brass from the clubhouse vitrines (accent: the ball, the racket strings), a cream (light:
// lines, the racket frame), court clay (warm, sparingly: the logo's heart), the logo's green lifted
// for the dark (secondary: the pin-shaped ring)
export const B_PALETTE = ["#e9c77b", "#f2eddd", "#d9703f", "#3fd18a"];
