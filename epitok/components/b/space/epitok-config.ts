// Invest Sportcentrum és Vendégház's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → a racket beside the tennis courts and the hall prices → court lines beside the squash
// and the sauna → the logo's two players with the ball, in their ring, beside the guesthouse heading →
// a big, slowly spinning ball behind the packages and the house rules → black hole on contact.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the racket stands on the right while the courts, the hall prices and the passes scroll past
  { anchor: "#tenisz", shape: "racket", wide: at(0.85, 0.56, 0.1, 0.28), narrow: phone },
  // the court stands on the left of the squash prices, the sauna and the rental
  { anchor: "#fallabda", shape: "courtLines", wide: at(0.15, 0.56, 0.12, 0.3), narrow: phone },
  // the logo: the two players and the ball inside the yellow ring, complete at mid-screen
  {
    anchor: "#vendeghaz-title",
    done: 0.5,
    shape: { image: "/img/invest-jel-pontok.png", size: 2.5 },
    wide: at(0.82, 0.5, 0.12, 0.25),
    narrow: at(0.5, 0.28, 0.22, 0.12), // phones: small, above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the packages and the house rules
  { anchor: "#csomagok", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.75 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// the logo's sports yellow (accent: the ball, the ring, the racket strings), white (lines, the players),
// court clay (warm), the indoor courts' blue (secondary)
export const B_PALETTE = ["#f2dd2c", "#f4f3ee", "#d9774a", "#5aa2e6"];
