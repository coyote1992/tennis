import type { Metadata, Viewport } from "next";
import { Albert_Sans, Newsreader } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Albert_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pillango.tenis.studio"),
  title: "Pillangó Tenisz Klub · Gyerek- és felnőtt tenisz Zuglóban",
  description:
    "Teniszklub Zuglóban, a Pillangó Parkban, 2010 óta: tenisz suli óvodás kortól Play and Stay módszerrel, felnőtt edzések kezdőknek és haladóknak, 4 salak- és 1 keménypálya online foglalással, nyári tábor. 2026-tól a KSI teniszszakosztálya.",
  openGraph: {
    title: "Pillangó Tenisz Klub, Zugló",
    description: "Nálunk mindenki teniszezhet: gyerekek, felnőttek, versenyzők. Pillangó Park, 2010 óta.",
    images: ["/img/ksi-csapat.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#16301f",
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
