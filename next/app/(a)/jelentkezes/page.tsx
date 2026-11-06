import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { Head, Steps } from "@/components/a/Blocks";
import { BookingFlow } from "@/components/shared/BookingFlow";
import { Icon } from "@/components/shared/Icon";
import { JUNIOR_TERM, SITE, TRAINER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jelentkezés",
  description: "Jelentkezés junior teniszre, felnőtt teniszre, személyi edzésre, Köredzésre, a Good Morning Clubra vagy regenerációs kezelésre, két perc alatt.",
};

export default function SignupPage() {
  return (
    <>
      <section className="phero" style={{ alignItems: "flex-start", minHeight: 0 }} aria-labelledby="signup-title">
        <div className="phero__media">
          <Image src="/images/forehand-dark.jpg" alt="" fill priority sizes="100vw" style={{ objectPosition: "60% 30%" }} />
        </div>
        <div className="container phero__content" style={{ paddingBottom: "clamp(64px, 8vw, 110px)" }}>
          <div className="signup">
            <div className="signup__intro">
              <p className="eyebrow">Jelentkezés</p>
              <h1 className="h1" id="signup-title">
                Jelentkezés, <em>két perc alatt.</em>
              </h1>
              <p className="lead" style={{ marginTop: 22 }}>
                Válaszd ki, mire jelentkezel, jelöld be, mikor érsz rá, és hagyd meg az elérhetőséged. A többit telefonon vagy e-mailben
                egyeztetjük.
              </p>
              <ul className="checklist">
                {[
                  "A jelentkezés még nem kötelez semmire",
                  `Junior csoportoknál a ${JUNIOR_TERM.toLowerCase()}i időpontok közül választasz`,
                  "Ha bizonytalan vagy, segítünk dönteni",
                ].map((t) => (
                  <li key={t}>
                    <Icon name="check" size={16} />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="small" style={{ color: "var(--ivory-2)" }}>
                Pályát foglalnál?{" "}
                <a className="inline-link" href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer">
                  Azt a Hellán teheted meg
                </a>
                .
              </p>
            </div>
            <Suspense fallback={<div className="flow" aria-busy="true" style={{ minHeight: 420 }} />}>
              <BookingFlow />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="band band--stone" aria-labelledby="after-title">
        <div className="container">
          <Head center eyebrow="A jelentkezés után" id="after-title" title={<>Nem kell fiókot létrehoznod. <em>Így folytatjuk:</em></>} />
          <Steps
            row
            items={[
              { title: "Visszajelzünk", text: "Telefonon vagy e-mailben keresünk, hogy egyeztessük a részleteket." },
              { title: "Megbeszéljük az időpontot", text: "Csoportot, napot és az első alkalmat. Ha más csoport illik jobban, azt is megmondjuk." },
              { title: "Találkozunk a pályán", text: "Kényelmes sportruhában és teniszcipőben gyere, és hozz magaddal vizet." },
            ]}
          />
          <p className="reveal" style={{ textAlign: "center", marginTop: 40, color: "var(--ink-2)" }}>
            Inkább telefonálnál? Tenisz és pályák:{" "}
            <a className="inline-link" href={SITE.phone.href}>
              {SITE.phone.display}
            </a>{" "}
            · Személyi edzés és csoportos órák:{" "}
            <a className="inline-link" href={TRAINER.phone.href}>
              {TRAINER.phone.display}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
