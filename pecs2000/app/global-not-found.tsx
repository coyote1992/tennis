// One 404 for both versions (they have separate root layouts). Styled like version A.
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./(a)/a.css";

const serif = Playfair_Display({ subsets: ["latin", "latin-ext"], weight: ["400"], style: ["normal", "italic"], variable: "--font-serif", preload: false });
const sans = Source_Sans_3({ subsets: ["latin", "latin-ext"], weight: ["400", "600"], variable: "--font-sans", preload: false });

export const metadata: Metadata = {
  title: "Az oldal nem található · Pécs 2000 Tenisz Club",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="hu" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <main className="hero dark" style={{ minHeight: "100svh", display: "grid", alignContent: "center", paddingBottom: 64 }}>
          <div className="container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/cimer.svg" alt="" className="hero__crest" width={160} height={160} />
            <p className="hero__est">404</p>
            <h1>
              Ez a labda kiment a pályáról.
              <em>A keresett oldal nem található.</em>
            </h1>
            <div className="btn-row">
              <a href="/" className="btn btn--accent">
                Vissza a főoldalra
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
