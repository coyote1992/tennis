import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Unbounded } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const display = Unbounded({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omszk.tenis.studio"),
  title: {
    default: "OMSZK Park Tenisz · Salakpályák az Omszki-tó partján, Budakalász",
    template: "%s · OMSZK Park Tenisz",
  },
  description:
    "Négy salakpálya az Omszki-tó partján, Budapest határán, télen két fedett pályával. Online pályafoglalás, gyerek tenisz akadémia 5 éves kortól, felnőtt kiscsoportos edzés, nyári tábor.",
  openGraph: {
    title: "OMSZK Park Tenisz · Budakalász",
    description: "Négy salakpálya az Omszki-tó partján. Online foglalás, gyerek és felnőtt edzés, nyári tábor.",
    images: ["/img/adogatas-to-partjan.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#081719",
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
