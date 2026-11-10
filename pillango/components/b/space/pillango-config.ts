// Pillangó Tenisz Klub's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → a racket beside the tenisz suli and the adult training → court lines beside the
// four clay courts, the hard court and the price list → the club's own butterfly mark (the butterfly
// in its round badge) beside the competition heading → a big, slowly spinning ball behind the summer
// camp and the coaches → black hole on contact.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the racket stands on the right while the kids' and the adults' training scroll past
  { anchor: "#gyerekeknek", shape: "racket", wide: at(0.85, 0.56, 0.1, 0.28), narrow: phone },
  // the court stands on the left of the courts, the winter tent and the price list
  { anchor: "#palyak", shape: "courtLines", wide: at(0.15, 0.56, 0.12, 0.3), narrow: phone },
  // the butterfly in its round badge, complete when the competition heading is mid-screen
  {
    anchor: "#verseny-title",
    done: 0.5,
    shape: { image: "/img/pillango-jel-pontok.png", size: 2.3 },
    wide: at(0.84, 0.5, 0.13, 0.27),
    narrow: at(0.5, 0.28, 0.24, 0.13), // phones: small, above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the camp
  { anchor: "#tabor", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.75 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the logo's lime (accent: the ball, the racket strings), a green-white (lines, the butterfly), court
// clay (warm), the logo's mint (the badge's right side)
export const B_PALETTE = ["#dfee57", "#eef6ec", "#d9774a", "#6ddc9a"];
