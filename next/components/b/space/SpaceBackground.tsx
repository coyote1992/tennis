"use client";

import { DotSpace } from "@/kits/dot-space/engine/react/DotSpace";
import { HOME_STEPS, PALETTE } from "./next-config";

/** Version B is one page (/b), so the dot field always runs the full choreography. */
export function SpaceBackground() {
  return <DotSpace key="b-home" steps={HOME_STEPS} palette={PALETTE} />;
}
