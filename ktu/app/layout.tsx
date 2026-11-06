import type { Metadata, Viewport } from "next";
import { Albert_Sans, Exo_2 } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const display = Exo_2({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Albert_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ktu.tenis.studio"),
  title: {
    default: "Kecskeméti Tenisz Udvar · KTU, ahol minden a teniszről szól",
    template: "%s · Kecskeméti Tenisz Udvar",
  },
  description:
    "Salakpályák Kecskeméten, télen sátras borítás alatt. Online időpontfoglalás, alkalmi és bérletes pályabérlés, teniszoktatás, ütőszerviz bárkinek. Ceglédi út 108., minden nap 7–22.",
  openGraph: {
    title: "Kecskeméti Tenisz Udvar",
    description: "Salakpályák, télen sátorban. Foglalj online, bérelj bérlettel, hozd az ütődet szervizbe.",
    images: ["/img/fedett-palya.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1040",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`space ${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        <SpaceBackground displayFamily={display.style.fontFamily} />
        <a href="#main" className="skip">
          Ugrás a tartalomra
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ActionBar />
        <Reveal />
      </body>
    </html>
  );
}
