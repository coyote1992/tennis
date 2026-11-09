import type { Metadata, Viewport } from "next";
import { Alegreya, Mulish } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Alegreya({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Mulish({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veszprem.tenis.studio"),
  title: "Tenisziskola Veszprém SE · teniszpályák a Jutasi úti Sportcentrumban",
  description:
    "Hét salakos teniszpálya a veszprémi Jutasi úti Sportcentrumban, télen három sátras pályával. Online és telefonos pályafoglalás, edzők, nyári tenisztábor, téli házibajnokság.",
  openGraph: {
    title: "Tenisziskola Veszprém SE",
    description: "Hét salakpálya a Jutasi úton, télen három sátorban.",
    images: ["/img/palyak-sor.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#123a20",
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
