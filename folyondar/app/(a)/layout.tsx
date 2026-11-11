import type { Metadata, Viewport } from "next";
import { Literata, Red_Hat_Text } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Literata({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Red_Hat_Text({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://folyondar.tenis.studio"),
  title: "Folyondár Sportközpont · Tenisz a Kiscelli parkerdő szélén",
  description:
    "Salakos teniszpályák Óbudán, ősfás parkban: télen 7 pálya két fedett sátorban, nyáron 8, és 2 rekortán pálya a csarnok tetején. Oktatók közvetlen elérhetőséggel, edzőterem, táncterem, kávézó. 1037 Budapest, Folyondár utca 15.",
  openGraph: {
    title: "Folyondár Sportközpont, Budapest III.",
    description: "Teniszpályák egy ősfás parkban, a Kiscelli parkerdő szomszédságában.",
    images: ["/img/park-palyak.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#17204a",
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
