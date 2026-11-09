// Szoboszlótenisz's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → a racket beside the courts and booking → court lines beside the prices and
// coaching → the club's own mark from its roundel (the two green seam lenses inside the white
// ring of the ball) beside the Piramis heading → a big ball behind club life → black hole on contact.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the racket stands on the right while the courts, booking and rules scroll past on the left ~70%
  { anchor: "#palyak", shape: "racket", wide: at(0.85, 0.58, 0.1, 0.28), narrow: phone },
  // the court stands on the left of the prices and the coaches
  { anchor: "#arak", shape: "courtLines", wide: at(0.15, 0.58, 0.12, 0.3), narrow: phone },
  // the logo's ball mark beside the Piramis heading, complete at mid-screen
  {
    anchor: "#piramis-title",
    done: 0.5,
    shape: { image: "/img/szoboszlo-jel-pontok.png", size: 2.4 },
    wide: at(0.8, 0.5, 0.15, 0.3),
    narrow: at(0.5, 0.2, 0.3, 0.17), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind club life
  { anchor: "#klubelet", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// ball yellow (accent: the ball, the racket strings), a cool white (light: lines, the racket frame,
// the mark's seams and ring), court clay (warm, sparingly), the logo's green lifted for the dark
// (secondary: the mark's lenses)
export const B_PALETTE = ["#e3f15c", "#e8f0ff", "#e0784a", "#34d27f"];
