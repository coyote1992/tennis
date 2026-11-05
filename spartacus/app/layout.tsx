import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif-face",
  display: "swap",
});

const sans = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spartacus.tenis.studio"),
  title: {
    default: "Siófoki Spartacus SE · Tenisz a Jókai parkban, 1915 óta",
    template: "%s · Siófoki Spartacus SE",
  },
  description:
    "Négy salakpálya a siófoki Jókai parkban, télen fűtött sátor alatt. Online pályafoglalás 0–24, téli árak 2026/27, edzés, szauna, büfé. Siófok első teniszpályája 1915 óta ugyanitt.",
  openGraph: {
    title: "Siófoki Spartacus SE · Tenisz 1915 óta",
    description: "Négy salakpálya a Jókai parkban, télen fűtött sátorban. Online foglalás, edzés, klubház.",
    images: ["/img/klubhaz-terasz.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#100e0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`space ${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <SpaceBackground serifFamily={serif.style.fontFamily} />
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
