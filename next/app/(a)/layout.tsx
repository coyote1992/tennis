import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Footer } from "@/components/a/Footer";
import { Header } from "@/components/a/Header";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://next.tenis.studio"),
  title: {
    default: "Next Tenisz Akadémia · Teniszpályák és edzés a Normafánál",
    template: "%s · Next Tenisz Akadémia",
  },
  description:
    "Négy felújított salakpálya a Budai-hegység szívében, pár perc sétára a Normafától. Junior csoportok, tenisz felnőtteknek, személyi edzés, kiscsoportos órák és regeneráció. Pályafoglalás a Hellán.",
  openGraph: {
    title: "Next Tenisz Akadémia · Normafa",
    description: "Tenisz a hegyen: négy salakpálya, junior csoportok, személyi edzés és regeneráció a Normafánál.",
    images: ["/images/hero-poster.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#121b26",
  colorScheme: "dark",
};

export default function ALayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip">
          Ugrás a tartalomhoz
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <VersionSwitch current="a" />
        <style dangerouslySetInnerHTML={{ __html: VSWITCH_CSS }} />
        <Reveal />
      </body>
    </html>
  );
}
