// Match-Point Tennis Club's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → a racket beside the courts and prices → court lines beside the coaching →
// the logo's serving player (with the ball and the swoosh) beside the Racket Service heading →
// a big, slowly spinning ball behind the shop and the club's story → black hole on contact.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the racket stands on the right while the season tables, the passes and the house rules scroll past
  { anchor: "#palyak", shape: "racket", wide: at(0.85, 0.56, 0.1, 0.28), narrow: phone },
  // the court stands on the left of the adult lessons and the kids' groups
  { anchor: "#oktatas", shape: "courtLines", wide: at(0.15, 0.56, 0.12, 0.3), narrow: phone },
  // the serving player from the logo beside the Racket Service heading, complete at mid-screen
  {
    anchor: "#racket-service-title",
    done: 0.5,
    shape: { image: "/img/matchpoint-jel-pontok.png", size: 2.1 },
    wide: at(0.83, 0.5, 0.12, 0.32),
    narrow: at(0.5, 0.27, 0.16, 0.12), // phones: small, above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the shop and the club's story
  { anchor: "#shop", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the logo's lime (accent: the ball, the racket strings), white (lines, the player), court clay
// (warm), the logo's deeper green (secondary: the swoosh)
export const B_PALETTE = ["#cde84a", "#f4f6f0", "#d9774a", "#90c018"];
