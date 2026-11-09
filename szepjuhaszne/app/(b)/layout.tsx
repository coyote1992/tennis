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
  metadataBase: new URL("https://szepjuhaszne.tenis.studio"),
  title: "Szép Juhászné Teniszklub · Tenisz a Hárshegy lábánál, tenisztörténeti kiállítással",
  description:
    "Két salakos pálya a II. kerületi Szép Juhászné úton, télen sátor alatt. Téli bérletek, tenisziskola gyerekeknek, klubház egész éves tenisztörténeti kiállítással. Pályafoglalás telefonon: +36 30 397 8401.",
  alternates: { canonical: "/b" },
  openGraph: {
    title: "Szép Juhászné Teniszklub",
    description: "Tenisz a Hárshegy lábánál: két salakos pálya, télen sátor alatt, és egy klubház tenisztörténeti kiállítással.",
    images: ["/img/klubhaz-kiallitas.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#071a12",
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
