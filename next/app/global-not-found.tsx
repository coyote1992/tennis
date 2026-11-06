// One 404 for both versions (they have separate root layouts). Styled like version A.
import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Link from "next/link";
import { Mark } from "@/components/a/Brand";
import { SITE } from "@/lib/site";
import "./not-found.css";

const serif = Cormorant_Garamond({ subsets: ["latin", "latin-ext"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--font-serif", preload: false });
const sans = Jost({ subsets: ["latin", "latin-ext"], weight: ["400", "500"], variable: "--font-sans", preload: false });

export const metadata: Metadata = {
  title: "Az oldal nem található · Next Tenisz Akadémia",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="hu" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <main className="band band--dark band--contour" style={{ minHeight: "100svh", display: "grid", alignItems: "center" }}>
          <div className="container">
            <Link href="/" className="brand" aria-label="Next Tenisz Akadémia – kezdőlap" style={{ marginBottom: 56 }}>
              <Mark className="brand__mark" />
              <span className="brand__name">
                <b>Next Tenisz</b>
                <small>Akadémia · Normafa</small>
              </span>
            </Link>
            <p className="eyebrow">404</p>
            <h1 className="h1">
              Ez a labda <em>kiment a pályáról.</em>
            </h1>
            <p className="lead" style={{ marginTop: 22 }}>
              A keresett oldal nem található. Lehet, hogy elköltözött, vagy elírás került a címbe.
            </p>
            <div className="btn-row" style={{ marginTop: 32 }}>
              <Link className="btn btn--primary" href="/">
                Vissza a kezdőlapra
              </Link>
              <a className="btn btn--ghost" href={SITE.hellaUrl}>
                Pályafoglalás
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
