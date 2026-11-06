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
  metadataBase: new URL("https://marcal.tenis.studio"),
  title: "Marcal Teniszcentrum · Tenisz, padel, squash és bowling Győrben",
  description:
    "Győr ütős sportközpontja 2006 óta: 7 salakos teniszpálya (télen 4 fűtött sátorban), 4 padel-, 4 squash- és 2 bowlingpálya, egyéni és csoportos oktatás, online pályafoglalás, családi és céges rendezvények.",
  alternates: { canonical: "/b" },
  openGraph: {
    title: "Marcal Teniszcentrum",
    description: "Tenisz, padel, squash és bowling Győrben, 2006 óta. Foglalj pályát online, vagy jelentkezz oktatásra.",
    images: ["/img/padel-terasz.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#140a0d",
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
