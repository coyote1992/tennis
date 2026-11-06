// One 404 for both versions (they have separate root layouts). Styled like version A.
import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./(a)/a.css";

const serif = Bodoni_Moda({ subsets: ["latin", "latin-ext"], style: ["normal", "italic"], variable: "--font-serif", preload: false });
const sans = Jost({ subsets: ["latin", "latin-ext"], variable: "--font-sans", preload: false });

export const metadata: Metadata = {
  title: "Az oldal nem található · Open Tennis Valley",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="hu" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <main className="hero" style={{ minHeight: "100svh", display: "grid", alignContent: "center", paddingBottom: 64 }}>
          <div className="container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/otv-labda.png" alt="" width={96} height={96} style={{ margin: "0 auto 24px" }} />
            <p className="hero__est">404</p>
            <h1>
              Ez a labda kiment.
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
