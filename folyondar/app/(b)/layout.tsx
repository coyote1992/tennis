import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { ActionBar } from "@/components/b/ActionBar";
import { Footer } from "@/components/b/Footer";
import { Header } from "@/components/b/Header";
import { SpaceBackground } from "@/components/b/space/SpaceBackground";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "@/kits/dot-space/theme/space.css";
import "./b.css";

// Archivo for headings (sporty, a touch wide), Inter for text; both variable, one file per subset.
const display = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://folyondar.tenis.studio"),
  title: "Folyondár Sportközpont · Teniszpályák a Kiscelli parkerdő szélén",
  description:
    "Salakos teniszpályák Budapest III. kerületében, ősfákkal övezett parkban: télen 7 pálya két fedett sátorban, nyáron 8, és két rekortán pálya a csarnok tetején. Téli árak 2026/27, teniszoktatók közvetlen elérhetőséggel, edzőterem, táncterem, kávézó és rendezvények.",
  alternates: { canonical: "/b" },
  openGraph: {
    title: "Folyondár Sportközpont, Budapest III.",
    description: "Tenisz a parkerdő szélén: salakos pályák télen sátorban, nyáron a fák alatt, és két rekortán pálya a tetőn.",
    images: ["/img/park-palyak.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#070d24",
  colorScheme: "dark",
};

export default function BLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`space ${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        <SpaceBackground />
        <a href="#main" className="skip">
          Ugrás a tartalomra
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ActionBar />
        <VersionSwitch current="b" />
        <style dangerouslySetInnerHTML={{ __html: VSWITCH_CSS }} />
        <Reveal />
      </body>
    </html>
  );
}
