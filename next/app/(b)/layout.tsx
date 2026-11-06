import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { ActionBar } from "@/components/b/ActionBar";
import { Footer } from "@/components/b/Footer";
import { Header } from "@/components/b/Header";
import { SpaceBackground } from "@/components/b/space/SpaceBackground";
import { Reveal } from "@/components/shared/Reveal";
import { VersionSwitch, VSWITCH_CSS } from "@/components/shared/VersionSwitch";
import "@/kits/dot-space/theme/space.css";
import "./b.css";

const display = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://next.tenis.studio"),
  title: "Next Tenisz Akadémia · Teniszpályák és edzés a Normafánál",
  description:
    "Négy felújított salakpálya a Normafánál, a Budai-hegység szívében. Pályafoglalás a Hellán, junior csoportok, tenisz felnőtteknek, személyi edzés, Köredzés, Good Morning Club és regeneráció.",
  alternates: { canonical: "/b" },
  openGraph: {
    title: "Next Tenisz Akadémia · Normafa",
    description: "Négy felújított salakpálya a Budai-hegység szívében. Pályafoglalás a Hellán, edzésre jelentkezés online.",
    images: ["/images/aerial-hills.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1322",
  colorScheme: "dark",
};

export default function BLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`space ${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        <style dangerouslySetInnerHTML={{ __html: VSWITCH_CSS }} />
        <SpaceBackground />
        <a href="#main" className="skip">
          Ugrás a tartalomra
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ActionBar />
        <VersionSwitch current="b" />
        <Reveal />
      </body>
    </html>
  );
}
