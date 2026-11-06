import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const display = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baja.tenis.studio"),
  title: {
    default: "Bajai Tenisz Klub · Petőfi-sziget, 1980 óta",
    template: "%s · Bajai Tenisz Klub",
  },
  description:
    "A Bajai Tenisz Klub salakpályái a Petőfi-szigeten, a Dr. Csátaljay István Tenisz Centrumban. Nincs tagdíj: regisztrálj, foglalj online, és csak a pályáért fizetsz. Edzők, versenynaptár, téli pályabérlés.",
  openGraph: {
    title: "Bajai Tenisz Klub · Petőfi-sziget",
    description: "Salakpályák a Petőfi-szigeten, 1980 óta. Nincs tagdíj, online foglalás.",
    images: ["/img/klubhaz.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#062434",
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
