import type { Metadata } from "next";
import Link from "next/link";
import { RULES, RULES_VALID } from "@/lib/hazirend";
import { CLUB } from "@/lib/site";

export const metadata: Metadata = {
  title: "Házirend",
  description: "A Kiskút Tenisz Klub házirendje: foglalás, lemondás, öltözék, pályahúzás, fizetés és parkolás.",
};

export default function HouseRules() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Házirend</p>
          <h1 className="h2 h2--xl">
            Hogy mindenkinek <em>jó pálya jusson.</em>
          </h1>
          <p className="lead">
            A Kiskút Tenisz Klub házirendje röviden és áttekinthetően. Kérdés esetén hívd a recepciót:{" "}
            <a href={CLUB.phoneHref}>{CLUB.phone}</a>.
          </p>
        </div>
      </section>

      <div className="container rules">
        <nav className="rules__toc" aria-label="Házirend részei">
          {RULES.map((r) => (
            <a key={r.id} href={`#${r.id}`}>
              {r.title}
            </a>
          ))}
        </nav>
        <div className="rules__body">
          {RULES.map((r) => (
            <section key={r.id} id={r.id} className="rule glass" aria-labelledby={`${r.id}-t`}>
              <h2 id={`${r.id}-t`}>{r.title}</h2>
              <ul>
                {r.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </section>
          ))}
          <p className="rules__valid">
            {RULES_VALID}{" "}
            <Link href="/b#foglalas" className="link-arrow">
              Vissza a foglaláshoz
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
