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
  metadataBase: new URL("https://pecs2000.tenis.studio"),
  title: "Pécs 2000 Tenisz Club · Teniszoktatás 5 éves kortól",
  description:
    "A Koncz Tennis Team klubja Pécsett, 1993 óta: tenisz óvoda, iskolás és középiskolás csoportok, felnőtt tanfolyamok, egyéni edzés, családi tenisz és ütőszerviz.",
  alternates: { canonical: "/b" },
  openGraph: {
    title: "Pécs 2000 Tenisz Club",
    description: "Gyermek és felnőtt teniszoktatás, egyéni foglalkozások, családi tenisz. A Koncz Tennis Team klubja, 1993 óta.",
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1612",
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
