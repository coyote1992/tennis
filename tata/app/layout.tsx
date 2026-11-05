import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  variable: "--font-serif-face",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tata.tenis.studio"),
  title: {
    default: "Tata Városi Tenisz Klub · Salakpályák a Cseke-tó mellett",
    template: "%s · Tata Városi Tenisz Klub",
  },
  description:
    "Négy salakpálya Tatán, a Cseke-liget mellett. Klubtagság 2026 (normál, nyári, hétvégi, diák, nyugdíjas), vendég pályadíjak, online foglalás az e-foglalóban, és három próbaalkalom, amit a tagdíjba beszámítunk.",
  openGraph: {
    title: "Tata Városi Tenisz Klub · Cseke-liget",
    description: "Négy salakpálya a Cseke-tó mellett. Tagság, vendégjáték, online foglalás.",
    images: ["/img/palyak-paros.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1410",
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
