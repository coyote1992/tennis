// Tréning Center's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → court → racket → the logo's tennis player (red body, cream head and racket) beside
// the coaching heading → a big red ball (the Play & Stay red ball) behind the club section → black hole.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the court stands on the right; the courts section keeps its content in the left ~70%
  { anchor: "#palyak", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left of booking
  { anchor: "#foglalas", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the logo's player beside the coaching heading, complete at mid-screen
  {
    anchor: "#oktatas-title",
    done: 0.5,
    shape: { image: "/img/figura-pontok.png", size: 1.25 },
    wide: at(0.78, 0.5, 0.2, 0.36),
    narrow: at(0.5, 0.2, 0.3, 0.18), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the club section
  { anchor: "#klub", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the logo's red (accent), cream (light), clay (warm), tennis-ball lime (secondary)
export const B_PALETTE = ["#f0574d", "#f6efe4", "#e8935a", "#d7e35c"];
