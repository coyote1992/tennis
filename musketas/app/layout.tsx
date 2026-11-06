import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Urbanist } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const display = Urbanist({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://musketas.tenis.studio"),
  title: {
    default: "Muskétás Teniszcentrum · Budapest XI., Muskétás u. 1.",
    template: "%s · Muskétás Teniszcentrum",
  },
  description:
    "Nyolc fedett és három szabadtéri Swiss Court® salakpálya, négy keménypálya a budai hegyek lábánál. Online foglalás a HELLA rendszerben, szezonbérlet, klubtagság, MATK amatőr versenyek. Nyitva minden nap 7–22.",
  openGraph: {
    title: "Muskétás Teniszcentrum",
    description: "8 fedett és 3 szabadtéri Swiss Court® salakpálya, 4 keménypálya. Válaszd ki a borítást, és foglalj online.",
    images: ["/img/legifoto.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a2a1d",
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
