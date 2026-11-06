import type { Metadata, Viewport } from "next";
import { Gabarito, Onest } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const display = Gabarito({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Onest({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fortuna.tenis.studio"),
  title: {
    default: "Fortuna SE Tenisz · Budapest XVII., Gyökér utca 18.",
    template: "%s · Fortuna SE Tenisz",
  },
  description:
    "A Fortuna Sportegyesület tenisz szakosztálya a XVII. kerületben: ovitenisz, teniszsuli és versenytenisz gyerekeknek, télen négy fedett pálya bérelhető, nyáron napközis tenisztábor. Foglalás telefonon vagy e-mailben.",
  openGraph: {
    title: "Fortuna SE Tenisz · Budapest XVII.",
    description: "Teniszsuli gyerekeknek kezdőtől haladóig, négy fedett pálya télen, nyári napközis tábor. Gyökér utca 18.",
    images: ["/img/csapat-ermekkel.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#160e0b",
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
