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
  metadataBase: new URL("https://otv.tenis.studio"),
  title: "Open Tennis Valley · Teniszklub Mogyoródon",
  description:
    "6 salakpálya Mogyoródon, nyáron szabadtéren, télen fedve (2026/27: szeptember 28. – április 25.). Pályafoglalás az OTV appban, ovi-tenisz, gyerektenisz ingyenes próbaedzéssel, felnőtt edzés, nemzetközi tornák, gyógytorna és masszázs a klubházban.",
  alternates: { canonical: "/b" },
  openGraph: {
    title: "Open Tennis Valley, Mogyoród",
    description: "Teniszklub Mogyoródon: 6 salakpálya egész évben, oktatás, versenyek és közösség.",
    images: ["/img/hero-paros.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1430",
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
