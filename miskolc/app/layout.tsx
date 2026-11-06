import type { Metadata, Viewport } from "next";
import { Karla, Oswald } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const display = Oswald({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Karla({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miskolc.tenis.studio"),
  title: {
    default: "Miskolci Egyetem Teniszcentrum · Tenisz és squash Miskolc-Egyetemvárosban",
    template: "%s · Egyetemi Teniszcentrum Miskolc",
  },
  description:
    "2024-ben megújult teniszcentrum a Miskolci Egyetemen: 4 fedett és 4 kültéri keménypálya, 4 salakpálya, 2 squash-pálya, felújított klubház. Mindenki számára nyitott, online foglalással, egyetemi kedvezménnyel.",
  openGraph: {
    title: "Miskolci Egyetem Teniszcentrum",
    description: "4 fedett és 4 kültéri keménypálya, 4 salakpálya, 2 squash-pálya. Foglalj online, télen-nyáron.",
    images: ["/img/csarnok.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1a35",
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
