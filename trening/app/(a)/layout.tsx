import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Public_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trening.tenis.studio"),
  title: "Tréning Center · Tenisz, foci és rendezvények Békéscsabán",
  description:
    "Sport- és szabadidőközpont Békéscsabán: három salakos teniszpálya télen fűtött sátorral, két kivilágított műfüves focipálya, teniszoktatás gyerekeknek és felnőtteknek, söröző, beltéri sportok, céges és családi rendezvények. Online pályafoglalás.",
  openGraph: {
    title: "Tréning Center, Békéscsaba",
    description: "Tenisz, foci, beltéri sport és rendezvények egy 15 000 m²-es sporttelepen.",
    images: ["/img/teli-sator.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2b2826",
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
