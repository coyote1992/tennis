import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const display = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: "700",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matchpoint.tenis.studio"),
  title: "Match-Point Tennis Club & Shop · Marczibányi tér, Budapest",
  description:
    "Két salakpálya (télen sátorral fedve), oktatás, a Match-Point Racket Service húrozása Velcz Zsolttal, és Magyarország hivatalos Nike Tennis Shopja a II. kerületi Marczibányi téren, 1996 óta.",
  openGraph: {
    title: "Match-Point Tennis Club & Shop",
    description: "Salakpályák, oktatás, húrozás és Nike Tennis Shop a Marczibányi téren.",
    images: ["/img/palya-bejarat.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#111311",
};

export default function ALayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${display.variable} ${sans.variable}`}>
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
