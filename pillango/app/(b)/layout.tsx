import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { ActionBar } from "@/components/b/ActionBar";
import { Footer } from "@/components/b/Footer";
import { Header } from "@/components/b/Header";
import { SpaceBackground } from "@/components/b/space/SpaceBackground";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "@/kits/dot-space/theme/space.css";
import "./b.css";

// Outfit is the club's own site font; both are variable fonts, so one file per subset.
const display = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pillango.tenis.studio"),
  title: "Pillangó Tenisz Klub · Gyerek- és felnőtt tenisz Zuglóban",
  description:
    "Teniszklub Zuglóban, a Pillangó Parkban, 2010 óta: tenisz suli óvodás kortól Play and Stay módszerrel, felnőtt edzések kezdőknek és haladóknak, 4 salak- és 1 keménypálya online foglalással, nyári tábor, és 2026-tól a KSI teniszszakosztálya.",
  alternates: { canonical: "/b" },
  openGraph: {
    title: "Pillangó Tenisz Klub, Zugló",
    description: "Nálunk mindenki teniszezhet: tenisz suli, felnőtt edzések, pályabérlés, versenyzés és nyári tábor a Pillangó Parkban.",
    images: ["/img/ksi-csapat.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050e09",
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
