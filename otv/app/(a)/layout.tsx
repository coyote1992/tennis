import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://otv.tenis.studio"),
  title: "Open Tennis Valley · Teniszklub Mogyoródon",
  description:
    "Hat salakpálya Mogyoródon, télen 30 hét fedett tenisz. Pályafoglalás saját appban, ovi-tenisz, gyerektenisz ingyenes próbaedzéssel, felnőtt edzés, nemzetközi ITF- és Tennis Europe-tornák, gyógytorna és masszázs a klubházban.",
  openGraph: {
    title: "Open Tennis Valley, Mogyoród",
    description: "Hat salakpálya, egész éves tenisz, oktatás, versenyek és közösség.",
    images: ["/img/hero-paros.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#131f39",
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
