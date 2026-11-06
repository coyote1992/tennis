// Version B's dot-space choreography: what the dots form as you scroll down /b.
// Arc: starfield → court (the court fees) → racket (the junior groups) → the club's own logo, the
// lime ball with the red arrow (beside the adult programmes) → the big spinning ball (behind the
// regeneration, sign-up and Normafa sections) → black hole at the contact section.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const HOME_STEPS: SpaceStep[] = [
  // the court stands on the right; the courts section keeps its content in the left ~70%
  { anchor: "#palyak", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left while the junior groups scroll past on the right
  { anchor: "#junior", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the logo beside the adults heading, complete at mid-screen
  {
    anchor: "#felnotteknek-title",
    done: 0.5,
    shape: { image: "/img-b/logo-pontok.png", size: 1.8 },
    wide: at(0.745, 0.5, 0.2, 0.32),
    narrow: at(0.5, 0.2, 0.36, 0.17),
  },
  // large, centred, faint, slowly spinning, behind the regeneration section
  { anchor: "#regeneracio", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the logo's lime (accent), white (light), the arrow's red (warm), the ball's green (secondary)
export const PALETTE = ["#dcef4c", "#f2f4ee", "#f0533d", "#78c24a"];
