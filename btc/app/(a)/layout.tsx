import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Schibsted_Grotesk } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://btc.tenis.studio"),
  title: "Budapest Tenisz Centrum · Teniszpályák és edzések a Városmajorban",
  description:
    "Hét pálya a Városmajori Park fái között (5 salak, 2 Rebound Ace), télen légsátor. Óvodai tenisz, Play & Stay, U12–16 és felnőtt csoportok, pályafoglalás a recepción: +36 30 226 1890.",
  openGraph: {
    title: "Budapest Tenisz Centrum (BTC), Városmajor",
    description: "Aktív teniszélet a Városmajor szívében: 7 pálya, edzések 3 éves kortól felnőttig.",
    images: ["/img/klubhaz.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#003070",
};

export default function ALayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${serif.variable} ${sans.variable}`}>
      <body id="top">
        <a href="#main" className="skip">
          Ugrás a tartalomhoz
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ActionBar />
        <VersionSwitch current="a" />
        <style dangerouslySetInnerHTML={{ __html: VSWITCH_CSS }} />
        <Reveal />
      </body>
    </html>
  );
}
