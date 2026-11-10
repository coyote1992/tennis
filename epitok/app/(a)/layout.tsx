import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Work_Sans } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Libre_Baskerville({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
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
  metadataBase: new URL("https://epitok.tenis.studio"),
  title: "Építők Teniszklub · 12 salakpálya a Népligetben",
  description:
    "12 salakos teniszpálya a budapesti Népligetben, áprilistól októberig, minden nap 7–20 óráig. Korlátlan hétköznap délelőtti idénybérlet, idénybérletek, alkalmi pályabérlés. Sporttelep 1896 óta.",
  openGraph: {
    title: "Építők Teniszklub, Népliget",
    description: "12 salakpálya a Népligetben, 1896 óta sporttelep.",
    images: ["/img/klubhaz-szeles.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#13285a",
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
