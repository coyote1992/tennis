import type { Metadata, Viewport } from "next";
import { EB_Garamond, Hanken_Grotesk } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://szepjuhaszne.tenis.studio"),
  title: "Szép Juhászné Teniszklub · Salakpályák és tenisztörténeti kiállítás a Hárshegy lábánál",
  description:
    "Két salakos pálya a II. kerületi Szép Juhászné úton, télen sátor alatt. Téli bérletek 2026/27, gyerek tenisziskola, nyári tábor, és a klubházban egész évben tenisztörténeti kiállítás. Foglalás: +36 30 397 8401.",
  openGraph: {
    title: "Szép Juhászné Teniszklub",
    description: "Tenisz a Hárshegy lábánál, a klubházban tenisztörténeti kiállítással.",
    images: ["/img/klubhaz-kiallitas.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#123a2a",
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
