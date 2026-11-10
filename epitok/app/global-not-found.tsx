// One 404 for both versions (they have separate root layouts). Styled like version A.
import type { Metadata } from "next";
import { Libre_Baskerville, Work_Sans } from "next/font/google";
import "./not-found.css";

// same options as version A's layout (only preload differs), so the routes don't pick up extra preloads
const serif = Libre_Baskerville({ subsets: ["latin", "latin-ext"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-serif", display: "swap", preload: false });
const sans = Work_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap", preload: false });

export const metadata: Metadata = {
  title: "Az oldal nem található · Építők Teniszklub",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="hu" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <main className="nf">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/epitok-cimer.png" alt="Építők Teniszklub" width={86} height={99} />
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
