// Építők Teniszklub's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → a racket beside the courts in the park → court lines beside the price list and the
// weekday-morning season pass → the club's crest (the shield with the crossed rackets and the ball)
// beside the history heading → a big, slowly spinning ball behind the events → black hole on contact.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the racket stands on the right while the courts, the season and the photos scroll past
  { anchor: "#palyak", shape: "racket", wide: at(0.85, 0.56, 0.1, 0.28), narrow: phone },
  // the court stands on the left of the 2026 price list and the morning pass
  { anchor: "#arak", shape: "courtLines", wide: at(0.15, 0.56, 0.12, 0.3), narrow: phone },
  // the crest: the shield outline, the crossed rackets and the ball, complete at mid-screen
  {
    anchor: "#tortenet-title",
    done: 0.5,
    shape: { image: "/img/epitok-jel-pontok.png", size: 2.2 },
    wide: at(0.83, 0.5, 0.13, 0.27),
    narrow: at(0.5, 0.28, 0.24, 0.13), // phones: small, above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the events
  { anchor: "#esemenyek", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.75 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the crest's ice-light blue (accent: the ball, the racket strings), white (lines, the rackets), court
// clay (warm), the crest's royal blue (the shield outline)
export const B_PALETTE = ["#a9d1ff", "#f2f5fb", "#d9774a", "#4f8ef0"];
