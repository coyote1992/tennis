import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kate.tenis.studio"),
  title: {
    default: "KATE · Kecskeméti Amatőr Teniszezők Egyesülete",
    template: "%s · KATE Kecskemét",
  },
  description:
    "A Kecskeméti Amatőr Teniszezők Egyesülete 2002 óta: városi csapatbajnokság, Aranyhomok Open egyéni bajnokság, OB III-as csapat és klubélet. Tagdíj 2026-ban 8 000 / 13 000 Ft, online pályafoglalás.",
  openGraph: {
    title: "KATE · Kecskeméti Amatőr Teniszezők Egyesülete",
    description: "Városi csapatbajnokság, Aranyhomok Open, klubélet. Kecskemét amatőr teniszezőinek egyesülete, 2002 óta.",
    images: ["/img/csapat.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a0f1f",
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
