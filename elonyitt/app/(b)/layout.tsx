import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { ActionBar } from "@/components/b/ActionBar";
import { Footer } from "@/components/b/Footer";
import { Header } from "@/components/b/Header";
import { SpaceBackground } from "@/components/b/space/SpaceBackground";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "@/kits/dot-space/theme/space.css";
import "./b.css";

const display = Sora({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "600", "700"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elonyitt.tenis.studio"),
  title: "Előnyitt S.E. Tenisz Klub · Tenisz Nyergesújfalun, évi 10 000 forintért",
  description:
    "Salakpályák Nyergesújfalun, a Május 1. tér mögött, minden nap 7:00–21:00. 14 éves korig ingyenes, az éves pályabérlet 10 000 Ft, kipróbálásra két alkalom ingyen. Online foglalás vagy telefon: +36 30 982 0360.",
  alternates: { canonical: "/b" },
  openGraph: {
    title: "Előnyitt S.E. Tenisz Klub, Nyergesújfalu",
    description: "Tenisz évi 10 000 forintért, 14 éves korig ingyen, két alkalom ingyen kipróbálásra.",
    images: ["/img/palyak-dron.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#081d3a",
  colorScheme: "dark",
};

export default function BLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`space ${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        <SpaceBackground />
        <a href="#main" className="skip">
          Ugrás a tartalomra
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ActionBar />
        <VersionSwitch current="b" />
        <style dangerouslySetInnerHTML={{ __html: VSWITCH_CSS }} />
        <Reveal />
      </body>
    </html>
  );
}
