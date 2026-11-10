// Tenisziskola Veszprém SE's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → a racket beside the courts and the two seasons → court lines beside the booking →
// the logo's Veszprém skyline with the crossed rackets and the ball beside the coaches' heading →
// a big, slowly spinning ball behind the camp and the tournaments → black hole on contact.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the racket stands on the right while the seasons, the tent and the clubhouse scroll past
  { anchor: "#palyak", shape: "racket", wide: at(0.85, 0.56, 0.1, 0.28), narrow: phone },
  // the court stands on the left of the booking steps, rules and the unheated slots
  { anchor: "#foglalas", shape: "courtLines", wide: at(0.15, 0.56, 0.12, 0.3), narrow: phone },
  // the logo: the Veszprém skyline, the crossed rackets and the ball, complete at mid-screen
  {
    anchor: "#edzok-title",
    done: 0.5,
    shape: { image: "/img/veszprem-jel-pontok.png", size: 2.5 },
    wide: at(0.82, 0.5, 0.12, 0.25),
    narrow: at(0.5, 0.25, 0.2, 0.11), // phones: small, above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the camp and the tournaments
  { anchor: "#tabor", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.8 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the logo's violet (accent: the ball, the racket strings), white (lines, the rackets), court clay
// (warm), the logo's forest green, lifted for the dark (secondary: the skyline)
export const B_PALETTE = ["#b3a0ff", "#f3f2f8", "#d9774a", "#62c870"];
