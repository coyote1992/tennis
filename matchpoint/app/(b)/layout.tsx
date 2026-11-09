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
  metadataBase: new URL("https://barango.tenis.studio"),
  title: "Barango Tenisz Club · salakpálya, edzés, tenisziskola Érden",
  description:
    "Salakos teniszpálya Érden, a Porcsinrózsa utcában, minden nap 7 és 22 óra között: 3 500 Ft/óra hétköznap, 4 000 Ft/óra hétvégén, 10 órás bérlet 36 000 Ft. Edzések, tenisziskola, pályaépítés. Foglalás: +36 20 267 3097.",
  alternates: { canonical: "/b" },
  openGraph: {
    title: "Barango Tenisz Club · Érd",
    description: "Salakpálya esti világítással, edzések és tenisziskola Érden. Foglalás telefonon vagy e-mailben.",
    images: ["/img/ejszakai-palya.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07140f",
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
