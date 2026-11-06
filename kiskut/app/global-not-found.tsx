// One 404 for both versions (they have separate root layouts). Styled like version A, with its own
// small stylesheet: every route includes the global 404, so importing A's stylesheet here would make
// /b preload version A's fonts.
import type { Metadata } from "next";
import { Albert_Sans, Newsreader } from "next/font/google";
import "./not-found.css";

const serif = Newsreader({ subsets: ["latin", "latin-ext"], style: ["normal", "italic"], axes: ["opsz"], variable: "--font-serif", display: "swap", preload: false });
const sans = Albert_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap", preload: false });

export const metadata: Metadata = {
  title: "Az oldal nem található · Kiskút Tenisz Klub",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="hu" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <main className="nf">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo.png" alt="" width={112} height={112} />
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
