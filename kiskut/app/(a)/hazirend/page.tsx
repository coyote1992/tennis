import type { Metadata } from "next";
import { RULES, RULES_VALID } from "@/lib/hazirend";
import { CLUB } from "@/lib/site";

export const metadata: Metadata = {
  title: "Házirend",
  description: "A Kiskút Tenisz Klub házirendje: foglalás, lemondás, öltözék, pályahúzás, fizetés és parkolás.",
};

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export default function HouseRules() {
  return (
    <>
      <section className="pagehead dark" aria-labelledby="hazirend-title">
        <div className="container">
          <p className="hero__est">Házirend</p>
          <h1 id="hazirend-title">
            Hogy mindenkinek <em>jó pálya jusson.</em>
          </h1>
          <p className="hero__lead">
            A Kiskút Tenisz Klub házirendje röviden és áttekinthetően. Kérdés esetén hívd a recepciót: <a href={CLUB.phoneHref}>{CLUB.phone}</a>.
          </p>
        </div>
      </section>

      <div className="band rules-band">
        <div className="container rules">
          <nav className="rules__toc" aria-label="Házirend részei">
            {RULES.map((r, i) => (
              <a key={r.id} href={`#${r.id}`}>
                <span>{ROMAN[i]}.</span> {r.title}
              </a>
            ))}
          </nav>
          <div className="rules__body">
            {RULES.map((r, i) => (
              <section key={r.id} id={r.id} className="rule" aria-labelledby={`${r.id}-t`}>
                <p className="rule__n">{ROMAN[i]}.</p>
                <h2 id={`${r.id}-t`}>{r.title}</h2>
                <ul>
                  {r.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              </section>
            ))}
            <p className="rules__valid">
              {RULES_VALID} <a href="/#foglalas">Vissza a foglaláshoz</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
