// B's in-page navigation (a plain module, so both the client header and the server footer can read it).
import { SECTIONS } from "@/lib/site";

export const NAV_B = SECTIONS.map((s) => ({ href: `#${s.id}`, label: s.label }));
