import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

// a classic high-contrast serif like the badge's lettering, and a clean modern sans for text
const display = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pvtc.tenis.studio"),
  title: {
    default: "Pécs Városi Tenisz Club · 12 salakpálya, télen 4 fedett pálya",
    template: "%s · Pécs Városi Tenisz Club",
  },
  description:
    "A régió legnagyobb teniszklubja Pécsett, a jégpálya mellett: nyáron 12 salakpálya, télen 4 fedett, fűtött pálya, online pályafoglalás, oktatás 4 éves kortól felnőttekig, versenyek, szauna és klubház büfével.",
  openGraph: {
    title: "Pécs Városi Tenisz Club",
    description: "12 salakpálya nyáron, 4 fedett, fűtött pálya télen. Pályafoglalás online, oktatás minden korosztálynak, 1992 óta.",
    images: ["/img/legifoto.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#10141f",
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
