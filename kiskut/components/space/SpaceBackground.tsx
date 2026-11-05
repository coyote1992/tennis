"use client";

import { usePathname } from "next/navigation";
import { DotSpace } from "@/kits/dot-space/engine/react/DotSpace";
import { homeSteps, PALETTE } from "./kiskut-config";

/** One dot field behind every page: the shapes on the homepage, a quiet starfield elsewhere. */
export function SpaceBackground({ serifFamily }: { serifFamily: string }) {
  const home = usePathname() === "/";
  const font = `italic 400 230px ${serifFamily}, Georgia, serif`;
  return <DotSpace key={home ? "home" : "quiet"} steps={home ? homeSteps(font) : undefined} palette={PALETTE} font={font} />;
}
