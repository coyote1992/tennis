// One 404 for both versions (they have separate root layouts). Styled like version A.
import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./not-found.css";

// same options as version A's layout (only preload differs), so the routes don't pick up extra preloads
const display = Barlow_Condensed({ subsets: ["latin", "latin-ext"], weight: "700", style: ["normal", "italic"], variable: "--font-display", display: "swap", preload: false });
const sans = Barlow({ subsets: ["latin", "latin-ext"], weight: ["400", "600"], variable: "--font-sans", display: "swap", preload: false });

export const metadata: Metadata = {
  title: "Az oldal nem található · Match-Point Tennis Club & Shop",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="hu" className={`${display.variable} ${sans.variable}`}>
      <body>
        <main className="nf">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo-sotet-hatter.png" alt="Match-Point Tennis Club & Shop" width={176} height={111} />
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
