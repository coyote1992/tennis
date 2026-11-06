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
  metadataBase: new URL("https://pgtenisz.tenis.studio"),
  title: "PG Tenisz · Teniszedzés és versenytenisz a Kőér Tenisz Klubban",
  description:
    "A PG Tenisz és Sport Club Egyesület 2019 óta edz gyerekeket és felnőtteket a Kőér Tenisz Klubban (1103 Budapest, Kőér u. 2/b): Play & Stay-től a versenyzőkig, felnőtt csapatok a Szuperligában és az I–III. osztályban. Jelentkezés edzésre, pályabérlés.",
  alternates: { canonical: "/b" },
  openGraph: {
    title: "PG Tenisz, Budapest",
    description: "Versenytenisz és utánpótlás-nevelés 2019 óta, a Kőér Tenisz Klubban.",
    images: ["/img/csaladi-nap.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1811",
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
