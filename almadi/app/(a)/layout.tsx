import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Gloock } from "next/font/google";
import { ActionBar, Footer, Header, SeasonBar } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Gloock({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Familjen_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://almadi.tenis.studio"),
  title: "Balatonalmádi Tenisz Club 1925 · Hat salakpálya a Szent Erzsébet ligetben",
  description:
    "Tenisz Balatonalmádiban 1925 óta: hat salakpálya esti világítással a Szent Erzsébet ligetben, a Wesselényi strand mellett. Szabadtéri szezon tavasztól október végéig, foglalás a Foggóban vagy a +36 70 321 5001-es számon.",
  openGraph: {
    title: "Almádi Tenisz, 1925 óta",
    description: "Hat salakpálya a Szent Erzsébet ligetben, pár lépésre a Balatontól.",
    images: ["/img/liget-dron.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2c57",
};

export default function ALayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${serif.variable} ${sans.variable}`}>
      <body id="top">
        <a href="#main" className="skip">
          Ugrás a tartalomhoz
        </a>
        <SeasonBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ActionBar />
        <VersionSwitch current="a" />
        <style dangerouslySetInnerHTML={{ __html: VSWITCH_CSS }} />
        <Reveal />
      </body>
    </html>
  );
}
