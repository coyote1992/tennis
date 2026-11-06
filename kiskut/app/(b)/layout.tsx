import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import { ActionBar } from "@/components/b/ActionBar";
import { Footer } from "@/components/b/Footer";
import { Header } from "@/components/b/Header";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import { SpaceBackground } from "@/components/b/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./b.css";

const sans = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiskut.tenis.studio"),
  title: {
    default: "Kiskút Tenisz Klub · Salakpályák Székesfehérváron",
    template: "%s · Kiskút Tenisz Klub",
  },
  description:
    "Hat salakpálya Székesfehérváron, a Kiskút útján, télen fedett csarnokkal. Online pályafoglalás, gyerektenisz 6 éves kortól, kezdő tanfolyam felnőtteknek, és a Kiskút Open profi tornái.",
  openGraph: {
    title: "Kiskút Tenisz Klub · Több mint tenisz",
    description: "Hat salakpálya Székesfehérváron, télen fedett csarnokkal. Pályafoglalás, edzés, Kiskút Open.",
    images: ["/img/csarnok.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1530",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`space ${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body>
        <SpaceBackground serifFamily={serif.style.fontFamily} />
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
