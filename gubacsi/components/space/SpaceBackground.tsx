"use client";

import { usePathname } from "next/navigation";
import { DotSpace } from "@/kits/dot-space/engine/react/DotSpace";
import { homeSteps, PALETTE } from "./gubacsi-config";

/** One dot field behind every page: the shapes on the homepage, a quiet starfield elsewhere. */
export function SpaceBackground({ displayFamily }: { displayFamily: string }) {
  const home = usePathname() === "/";
  const font = `700 220px ${displayFamily}, "Arial Black", sans-serif`;
  return <DotSpace key={home ? "home" : "quiet"} steps={home ? homeSteps(font) : undefined} palette={PALETTE} font={font} />;
}
