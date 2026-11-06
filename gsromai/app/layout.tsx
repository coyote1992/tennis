import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Syne } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const display = Syne({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gsromai.tenis.studio"),
  title: {
    default: "Római Padel Akadémia & GS Tenisz Club · Padel és tenisz a Római-parton",
    template: "%s · Római Padel Akadémia",
  },
  description:
    "Több mint 12 000 m²-es sport- és szabadidőközpont a Római-parton: 4 padelpálya, 5 keményborítású teniszpálya, télen fedett, fűtött pályák, lábtengó, szauna, masszázs, konditerem, bisztró és rendezvények.",
  openGraph: {
    title: "Római Padel Akadémia & GS Tenisz Club",
    description: "Padel és tenisz a Római-parton, télen fedett, fűtött pályákon. Bisztró, szauna, masszázs, konditerem.",
    images: ["/img/komplexum.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <Reveal />
      </body>
    </html>
  );
}
