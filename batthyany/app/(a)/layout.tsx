import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://batthyany.tenis.studio"),
  title: "Tenisz és wellness · Batthyány Kastélyszálló****, Zalacsány",
  description:
    "Megújult salakos teniszpálya a Batthyány Kastélyszálló parkjában: szállóvendégeknek 5 000 Ft, külsős vendégeknek 6 000 Ft óránként. Kösd össze egy wellness nappal: termálmedencék, szaunák, háromfogásos ebéd.",
  openGraph: {
    title: "Tenisz és wellness a Batthyány Kastélyban",
    description: "Salakpálya a kastélyparkban, utána termálmedence és szauna.",
    images: ["/img/kastely-szokokut.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#3b2f1d",
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
