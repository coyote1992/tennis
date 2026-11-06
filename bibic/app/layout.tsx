import type { Metadata, Viewport } from "next";
import { Montserrat, Mulish } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const display = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Mulish({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bibic.tenis.studio"),
  title: {
    default: "Bíbic Tennis Club · Tüskevár, Nyíregyháza",
    template: "%s · Bíbic Tennis Club",
  },
  description:
    "Családias teniszklub a nyíregyházi Tüskevárban: gyerekoktatás és edzések, két kültéri és egy fedett salakpálya egész évben, online foglalás 3 000 Ft/órától, tóparti környezetben.",
  openGraph: {
    title: "Bíbic Tennis Club · Tüskevár, Nyíregyháza",
    description: "Gyerekoktatás és szabad pályák a tóparton: 2 kültéri és 1 fedett salakpálya, online foglalással.",
    images: ["/img/legifoto.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08251f",
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
