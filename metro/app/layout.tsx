import type { Metadata, Viewport } from "next";
import { Archivo, Fraunces } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const sans = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metro.tenis.studio"),
  title: {
    default: "Metro Tenisz · Rákosszentmihály, Budapest XVI.",
    template: "%s · Metro Tenisz",
  },
  description:
    "12 salak- és 2 kemény pálya a Csömöri úton, télen sátor alatt. Pályafoglalás telefonon, gyerekedzés 5–6 éves kortól ingyenes próbaórával, nyári tenisztábor. A Metro R.S.C. 1950 óta.",
  openGraph: {
    title: "Metro Tenisz · Mindenünk a tenisz",
    description: "12 salak- és 2 kemény pálya Rákosszentmihályon. Pályafoglalás, edzés ingyenes próbaórával, nyári tábor.",
    images: ["/img/metro-tabor.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b111d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`space ${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body>
        <SpaceBackground displayFamily={sans.style.fontFamily} />
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
