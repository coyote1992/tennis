import type { Metadata, Viewport } from "next";
import { DM_Sans, Sora } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const display = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-face",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gubacsi.tenis.studio"),
  title: {
    default: "Gubacsi Zsófi Tenisz Klub · Vecsés, a repülőtér mellett",
    template: "%s · Gubacsi Zsófi Tenisz Klub",
  },
  description:
    "Teniszklub Vecsésen, 2 percre a Liszt Ferenc repülőtértől: nyáron hat, télen két fedett salakpálya, online foglalás, gyerek- és felnőttoktatás, nyári tábor. A klubot a WTA-tornagyőztes Gubacsi Zsófi vezeti.",
  openGraph: {
    title: "Gubacsi Zsófi Tenisz Klub · Vecsés",
    description: "Hat salakpálya nyáron, kettő fedett télen. Online foglalás, oktatás kezdőtől haladóig.",
    images: ["/img/tabor-csoport.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#081230",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`space ${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        <SpaceBackground displayFamily={display.style.fontFamily} />
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
