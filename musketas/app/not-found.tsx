import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="h2 h2--xl">
          Ez a labda <em>kiment a pályáról.</em>
        </h1>
        <p className="lead">A keresett oldal nem található.</p>
        <p style={{ marginTop: 32 }}>
          <Link href="/" className="btn btn--accent">
            Vissza a főoldalra
          </Link>
        </p>
      </div>
    </section>
  );
}
