import type { Metadata, Viewport } from "next";
import { Albert_Sans, Newsreader } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Albert_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiskut.tenis.studio"),
  title: {
    default: "Kiskút Tenisz Klub · Salakpályák Székesfehérváron",
    template: "%s · Kiskút Tenisz Klub",
  },
  description:
    "Hat salakpálya Székesfehérváron, a Kiskút útján, télen fedett csarnokkal. Online pályafoglalás, gyerektenisz 6 éves kortól, kezdő tanfolyam felnőtteknek, és a Kiskút Open profi tornái.",
  openGraph: {
    title: "Kiskút Tenisz Klub · Több mint tenisz",
    description: "Hat salakpálya Székesfehérváron, télen fedett csarnokkal. Pályafoglalás, edzés, Kiskút Open.",
    images: ["/img/csarnok.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#142b5c",
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
