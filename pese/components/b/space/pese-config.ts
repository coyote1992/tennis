// Pécsi Elektromos SE's dot-space choreography (version B): what the dots form as you scroll.
// Arc: starfield → court lines beside the tennis section → racket beside the pool, sauna and gym →
// the club's crossed rackets and ball (from the 1968 roundel) beside the prices heading → a big ball
// behind the club's story → black hole on the contact section.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const B_STEPS: SpaceStep[] = [
  // the court stands on the right; the tennis section keeps its content in the left ~70%
  { anchor: "#tenisz", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // the racket stands on the left of the pool, sauna and gym
  { anchor: "#pihenes", shape: "racket", wide: at(0.15, 0.6, 0.1, 0.28), narrow: phone },
  // the roundel's crossed rackets and ball beside the prices heading, complete at mid-screen
  {
    anchor: "#arak-title",
    done: 0.5,
    shape: { image: "/img/pese-jel-pontok.png", size: 2.2 },
    wide: at(0.79, 0.5, 0.19, 0.3),
    narrow: at(0.5, 0.2, 0.34, 0.18), // phones: above the heading, in the gap between sections
  },
  // large, centred, faint, slowly spinning, behind the club's story
  { anchor: "#klub", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// court clay (accent), a warm cream (light), a deeper clay (warm), the roundel's olive lifted for the dark (secondary)
export const B_PALETTE = ["#e8875a", "#f4f0e3", "#c96a3f", "#a9c25b"];
