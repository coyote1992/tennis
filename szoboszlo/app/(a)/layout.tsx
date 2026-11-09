import type { Metadata, Viewport } from "next";
import { Karla, Zilla_Slab } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Zilla_Slab({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Karla({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://szoboszlo.tenis.studio"),
  title: "Szoboszlótenisz · Hungarospa Sportcentrum, Hajdúszoboszló",
  description:
    "4 salakos teniszpálya és fedett, műfüves sportsátor Hajdúszoboszlón, a strandfürdő mellett. Online pályafoglalás, téli árak és szezonkártyák, edzés, Piramis verseny.",
  openGraph: {
    title: "Szoboszlótenisz · Hungarospa Sportcentrum",
    description: "Salakpálya nyáron, sportsátor télen, Hajdúszoboszlón.",
    images: ["/img/szoboszlo-open-2026.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#00427a",
};

export default function ALayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${serif.variable} ${sans.variable}`}>
      <body id="top">
        <a href="#main" className="skip">
          Ugrás a tartalomhoz
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ActionBar />
        <VersionSwitch current="a" />
        <style dangerouslySetInnerHTML={{ __html: VSWITCH_CSS }} />
        <Reveal />
      </body>
    </html>
  );
}
