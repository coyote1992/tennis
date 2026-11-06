import type { Metadata, Viewport } from "next";
import { Inter, Marcellus } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "@/kits/dot-space/theme/space.css";
import "./globals.css";

const display = Marcellus({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-display-face",
  display: "swap",
});

const body = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://molnar.tenis.studio"),
  title: {
    default: "Molnár Teniszakadémia Budakeszi · Tenisz. Másképp.",
    template: "%s · Molnár Teniszakadémia",
  },
  description:
    "Teniszakadémia 2009 óta, Budakeszin 2019 óta: három salakpálya, télen fűtött, 11 méter magas sátorban. Amatőr csapatok és csapatedzés, felnőtt- és gyerekoktatás, Die Zukunft versenyprogram, nyári tábor, pályabérlés.",
  openGraph: {
    title: "Molnár Teniszakadémia Budakeszi",
    description: "Tenisz. Másképp. Három salakpálya télen-nyáron, amatőr csapatok, gyerek- és felnőttoktatás Budakeszin.",
    images: ["/img/palyak-nyar.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#17171b",
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
