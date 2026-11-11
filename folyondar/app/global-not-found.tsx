// One 404 for both versions (they have separate root layouts). Styled like version A.
import type { Metadata } from "next";
import { Literata, Red_Hat_Text } from "next/font/google";
import "./not-found.css";

// same options as version A's layout (only preload differs), so the routes don't pick up extra preloads
const serif = Literata({ subsets: ["latin", "latin-ext"], style: ["normal", "italic"], variable: "--font-serif", display: "swap", preload: false });
const sans = Red_Hat_Text({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap", preload: false });

export const metadata: Metadata = {
  title: "Az oldal nem található · Folyondár Sportközpont",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="hu" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <main className="nf">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/folyondar-jel-vilagos.svg" alt="Folyondár" width={120} height={58} />
          <p className="nf__code">404</p>
          <h1>
            Ez a labda kiment.
            <em>A keresett oldal nem található.</em>
          </h1>
          <p>
            <a href="/">Vissza a főoldalra</a>
          </p>
        </main>
      </body>
    </html>
  );
}
