// Folyondár Sportközpont's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → a racket beside the courts (winter tent, summer park, rooftop) → court lines beside
// the 2026/27 price list → the club's own three-stripe mark beside the coaches' heading → a big,
// slowly spinning ball behind the rest of the sports centre → black hole on contact.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the racket stands on the right while the courts scroll past
  { anchor: "#palyak", shape: "racket", wide: at(0.85, 0.56, 0.1, 0.28), narrow: phone },
  // the court stands on the left of the price lists
  { anchor: "#arak", shape: "courtLines", wide: at(0.15, 0.56, 0.12, 0.3), narrow: phone },
  // the logo's three stripes, complete when the coaches' heading is mid-screen
  {
    anchor: "#oktatok-title",
    done: 0.5,
    shape: { image: "/img/folyondar-jel-pontok.png", size: 2.5 },
    wide: at(0.84, 0.5, 0.14, 0.2),
    narrow: at(0.5, 0.26, 0.3, 0.1), // phones: small, above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the rest of the sports centre
  { anchor: "#sportkozpont", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.7 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// roles: accent = the logo's red (racket strings, the mark's top stripe), light = lines and the mark's
// bottom stripe, warm = the courts' clay, secondary = the logo's magenta (the ball's felt, middle stripe)
export const B_PALETTE = ["#ff4d6f", "#eef1fb", "#e4875a", "#ff5cb4"];
