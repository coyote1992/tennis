"use client";

import { usePathname } from "next/navigation";
import { DotSpace } from "@/kits/dot-space/engine/react/DotSpace";
import { B_PALETTE, B_STEPS } from "./szepjuhaszne-config";

/** One dot field behind version B: the shapes on /b, a quiet starfield anywhere else. */
export function SpaceBackground() {
  const home = usePathname() === "/b";
  return <DotSpace key={home ? "home" : "quiet"} steps={home ? B_STEPS : undefined} palette={B_PALETTE} />;
}
