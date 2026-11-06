import type { Metadata, Viewport } from "next";
import { Spectral, Work_Sans } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Spectral({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Work_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pgtenisz.tenis.studio"),
  title: "PG Tenisz · Teniszedzés és versenytenisz a Kőér Tenisz Klubban",
  description:
    "A PG Tenisz és Sport Club Egyesület 2019 óta: edzés és versenylehetőség gyerekeknek és felnőtteknek a Kőér Tenisz Klubban (Budapest X.). Play & Stay-től a Férfi Szuperligáig, öt edzővel.",
  openGraph: {
    title: "PG Tenisz, Budapest",
    description: "A sport maga az élet. Mindenre megtanít. Edzés és versenytenisz 2019 óta.",
    images: ["/img/csoportkep.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#123f27",
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
