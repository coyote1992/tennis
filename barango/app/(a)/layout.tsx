import type { Metadata, Viewport } from "next";
import { Lora, Manrope } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Lora({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barango.tenis.studio"),
  title: "Barango Tenisz Club · salakpálya, edzés és tenisziskola Érden",
  description:
    "Salakos teniszpálya Érden, a Porcsinrózsa utcában: hétköznap 3 500 Ft, hétvégén 4 000 Ft óránként, 10 órás bérlet 36 000 Ft. Edzések, gyerek tenisziskola, salakpálya-építés. Minden nap 7–22.",
  openGraph: {
    title: "Barango Tenisz Club, Érd",
    description: "Salakpálya világítással, edzések és tenisziskola Érden.",
    images: ["/img/ejszakai-palya.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#173a31",
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
