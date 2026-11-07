import type { Metadata, Viewport } from "next";
import { Golos_Text, Petrona } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Petrona({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Golos_Text({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elonyitt.tenis.studio"),
  title: "Előnyitt S.E. Tenisz Klub · Nyergesújfalu · Egész évre 10 000 Ft",
  description:
    "Salakpályák Nyergesújfalun, a Május 1. tér mögött. 14 éves korig ingyenes, kipróbálásra két alkalom ingyen, éves pályabérlet 10 000 Ft. Online pályafoglalás, oktatás Pánya Sándorral.",
  openGraph: {
    title: "Előnyitt S.E. Tenisz Klub, Nyergesújfalu",
    description: "Egész évre 10 000 Ft, 14 éves korig ingyen, kipróbálás két alkalommal ingyen.",
    images: ["/img/palyak-dron.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c2d4f",
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
