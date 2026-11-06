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
  metadataBase: new URL("https://pese.tenis.studio"),
  title: "Pécsi Elektromos SE · Tenisz, medence, szauna a Diófa utcában",
  description:
    "A Pécsi Elektromos Sportegyesület sporttelepe 1968 óta: 13 salakos és 1 műfüves teniszpálya, télen 3 fedett pálya, kültéri medence, szauna, jakuzzi, konditerem, asztalitenisz és klubház rendezvényekre. 7622 Pécs, Diófa u. 6.",
  alternates: { canonical: "/b" },
  openGraph: {
    title: "Pécsi Elektromos SE, 1968 óta",
    description: "Tenisz és pihenés a Diófa utcai sporttelepen: 14 pálya, medence, szauna, konditerem.",
    images: ["/img/sporttelep-dron.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#121d0c",
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
