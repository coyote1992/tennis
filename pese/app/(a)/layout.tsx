import type { Metadata, Viewport } from "next";
import { Rethink_Sans, Young_Serif } from "next/font/google";
import { ActionBar, Footer, Header } from "@/components/a/Chrome";
import { Reveal } from "@/components/shared/Reveal";
import { VSWITCH_CSS, VersionSwitch } from "@/components/shared/VersionSwitch";
import "./a.css";

const serif = Young_Serif({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Rethink_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pese.tenis.studio"),
  title: "Pécsi Elektromos SE · Tenisz, medence, szauna a Diófa utcában, 1968 óta",
  description:
    "13 salakos és 1 műfüves teniszpálya, télen 3 fedett pálya, kültéri medence, szauna, jakuzzi, konditerem és asztalitenisz Pécsen, a Diófa utcában. Online pályafoglalás, teniszoktatás, Teddy Tennis, rendezvények 50 főig.",
  openGraph: {
    title: "Pécsi Elektromos SE, 1968 óta",
    description: "Tenisz, medence, szauna és klubház a Diófa utcai sporttelepen.",
    images: ["/img/sporttelep-dron.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2a3418",
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
