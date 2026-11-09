// Batthyány Kastélyszálló's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → a racket beside the tennis court and its booking → a big, slowly spinning ball
// behind the wellness days → court lines beside the park route (it starts at the court, no. 5 on the
// hotel's map) → the castle itself, drawn from the hotel's logo, beside the castle heading → black
// hole on contact.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the racket stands on the right while the court, prices, booking and house rules scroll past
  { anchor: "#tenisz", shape: "racket", wide: at(0.85, 0.58, 0.1, 0.28), narrow: phone },
  // large, centred, faint, slowly spinning, behind the wellness days
  { anchor: "#wellness", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the court stands on the left of the park route and the activities
  { anchor: "#park", shape: "courtLines", wide: at(0.15, 0.58, 0.12, 0.3), narrow: phone },
  // the castle from the logo, beside the castle heading, complete at mid-screen
  {
    anchor: "#kastely-title",
    done: 0.5,
    shape: { image: "/img/batthyany-jel-pontok.png", size: 2 },
    wide: at(0.8, 0.45, 0.15, 0.3),
    narrow: at(0.5, 0.2, 0.34, 0.17), // phones: above the heading, in the gap between sections
  },
  // the ending: the castle's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// champagne gold (accent: the ball, the racket strings, the castle's roofs), a warm ivory (light:
// lines, the racket frame, the castle's facade), court clay (warm, sparingly), a pale park green
// (secondary)
export const B_PALETTE = ["#e4c88c", "#f4ecdc", "#d9794a", "#8fbf96"];
