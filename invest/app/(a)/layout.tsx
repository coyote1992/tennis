import type { Metadata, Viewport } from "next";
import { Bitter, DM_Sans } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Bitter({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://invest.tenis.studio"),
  title: "Invest Sportcentrum és Vendégház · tenisz, fallabda, szállás Egerben",
  description:
    "7 salakos teniszpálya, fedett teniszcsarnok 2 pályával, 4 fallabdapálya, szauna, büfé és 6 szobás vendégház Egerben, a Dr. Frank Mária utcában. Pályafoglalás telefonon: +36 30 912 2116.",
  openGraph: {
    title: "Invest Sportcentrum és Vendégház, Eger",
    description: "Az ütős sportok bázisa: tenisz, fallabda és szállás egy helyen.",
    images: ["/img/csarnok.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#161616",
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
