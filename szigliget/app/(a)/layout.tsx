import type { Metadata, Viewport } from "next";
import { Figtree, Marcellus } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Marcellus({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const sans = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://szigliget.tenis.studio"),
  title: "Tennis Club Szigliget · Salakpályák, online foglalás, családi tagság",
  description:
    "Gondozott salakpályák Szigligeten, klubházzal. Minden nap 8:00–21:00, online foglalás, nem tagoknak 5 000 Ft egy óra. Családi tagság, személyi edzők, Szigliget Open.",
  openGraph: {
    title: "Tennis Club Szigliget",
    description: "Salakpályák Szigligeten. Online foglalás minden nap 8:00–21:00, családi tagság egész szezonra.",
    images: ["/img/palya-klubhaz.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1650",
};

export default function ALayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${serif.variable} ${sans.variable}`}>
      <body id="top">
        <a href="#main" className="skip">
          Ugrás a tartalomhoz
        </a>
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
