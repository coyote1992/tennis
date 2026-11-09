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
  metadataBase: new URL("https://batthyany.tenis.studio"),
  title: "Tenisz és wellness · Batthyány Kastélyszálló, Zalacsány",
  description:
    "Megújult salakos teniszpálya a Batthyány Kastélyszálló 10 hektáros parkjában, Zalacsányban: 5 000 Ft/óra szállóvendégeknek, 6 000 Ft/óra külsős vendégeknek. Vasárnapi és páros wellness nap. Recepció: +36 83 537 000.",
  alternates: { canonical: "/b" },
  openGraph: {
    title: "Tenisz és wellness · Batthyány Kastélyszálló",
    description: "Salakpálya a kastélyparkban, utána termálmedence, szaunák és wellness nap. Zalacsány.",
    images: ["/img/kastely-szokokut.jpg"],
    locale: "hu_HU",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#140e08",
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
