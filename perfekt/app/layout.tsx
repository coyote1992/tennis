import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Roboto_Slab } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

// a slab serif like the emblem's lettering, and a soft, round sans like the old site's Quicksand
const display = Roboto_Slab({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perfekt.tenis.studio"),
  title: {
    default: "Perfekt Teniszklub · Négy salakpálya a XVII. kerületben",
    template: "%s · Perfekt Teniszklub",
  },
  description:
    "Négy salakos teniszpálya Budapest XVII. kerületében, az óriás fenyők árnyékában. Alkalmi bérlés, 10 alkalmas és szezonbérlet, egyéni oktatás gyerekeknek és felnőtteknek. Télen zárva, tavasszal újra nyitunk.",
  openGraph: {
    title: "Perfekt Teniszklub",
    description: "Négy salakpálya a XVII. kerületben, kora tavasztól késő őszig. Pályabérlés és egyéni oktatás.",
    images: ["/img/palyak.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c2219",
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
