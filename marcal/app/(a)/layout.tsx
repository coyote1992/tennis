import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Display, Libre_Franklin } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Libre_Caslon_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Libre_Franklin({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marcal.tenis.studio"),
  title: "Marcal Teniszcentrum · Tenisz, padel, squash és bowling Győrben",
  description:
    "Győr egyik legkomplexebb sportközpontja 2006 óta: 7 salakos teniszpálya (télen 4 fűtött sátorban), 4 padel-, 4 squash- és 2 bowlingpálya, edzők, események, rendezvényterem. Online pályafoglalás.",
  openGraph: {
    title: "Marcal Teniszcentrum, Győr",
    description: "Tenisz, padel, squash és bowling egy helyen, 2006 óta.",
    images: ["/img/padel-terasz.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#6e1822",
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
