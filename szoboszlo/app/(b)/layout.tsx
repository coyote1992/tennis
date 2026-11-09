import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { ActionBar } from "@/components/b/ActionBar";
import { Footer } from "@/components/b/Footer";
import { Header } from "@/components/b/Header";
import { SpaceBackground } from "@/components/b/space/SpaceBackground";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "@/kits/dot-space/theme/space.css";
import "./b.css";

const display = Sora({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "600", "700"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://szoboszlo.tenis.studio"),
  title: "Szoboszlótenisz · Hungarospa Sportcentrum, Hajdúszoboszló · tenisz télen-nyáron",
  description:
    "Négy salakos pálya és fedett, műfüves sportsátor a Hungarospa Sportcentrumban, a strandfürdő mellett. Online pályafoglalás, téli árak és szezonkártyák, edzés, gyerekcsoportok, Piramis verseny. Telefon: +36 20 977 5773.",
  alternates: { canonical: "/b" },
  openGraph: {
    title: "Szoboszlótenisz · Hungarospa Sportcentrum",
    description: "Tenisz Hajdúszoboszlón, télen-nyáron: négy salakpálya és egy sportsátor a strandfürdő mellett.",
    images: ["/img/szoboszlo-open-2021.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#061633",
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
