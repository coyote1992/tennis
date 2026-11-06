import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, FaqList, Head, PageHero } from "@/components/a/Blocks";
import { Icon } from "@/components/shared/Icon";
import { SITE, TREATMENTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regeneráció",
  description: "Masszázs, köpölyözés és vagus terápia a Normafánál, a pályák mellett. A softlaser kezelés hamarosan indul.",
};

export default function RegenPage() {
  const [massage, vagus, laser] = TREATMENTS;
  return (
    <>
      <PageHero
        eyebrow="Regeneráció"
        title={
          <>
            Figyelem <em>a testednek.</em>
          </>
        }
        lead="Masszázs, köpölyözés és vagus terápia, hogy edzés vagy egy hosszú hét után a test és az idegrendszer is helyreálljon. A softlaser kezelés hamarosan indul."
        image="/images/masszazs-szoba.jpg"
        imageAlt="A masszázsszoba: kezelőágy, a falon anatómiai plakátok"
        position="50% 62%"
      >
        <Link className="btn btn--primary" href="/jelentkezes?program=regeneracio">
          Időpontot kérek
        </Link>
        <a className="btn btn--ghost" href={SITE.phone.href}>
          <Icon name="phone" size={15} /> {SITE.phone.display}
        </a>
      </PageHero>

      <section className="band band--dark" id={massage.id} aria-labelledby="massage-title">
        <div className="container split">
          <div>
            <span className="badge badge--open reveal">Foglalható</span>
            <h2 className="h2 reveal" id="massage-title" style={{ marginTop: 20 }}>
              Masszázs, <em>köpölyözés</em>
            </h2>
            <p className="lead reveal" style={{ marginTop: 20, color: "var(--ivory)" }}>
              {massage.lead}
            </p>
            {massage.text.map((p) => (
              <p key={p} className="reveal" style={{ color: "var(--ivory-2)" }}>
                {p}
              </p>
            ))}
            <p className="reveal" style={{ color: "var(--ivory-2)" }}>
              A tudatos mozgás és a megfelelő regeneráció egymást kiegészítve segítik a mozgató szervrendszer egyensúlyát hosszú távon.
            </p>
          </div>
          <figure className="fig fig--tall reveal reveal--img" style={{ margin: 0 }}>
            <Image src={massage.image!} alt={massage.imageAlt!} fill sizes="(max-width: 900px) 100vw, 50vw" />
          </figure>
        </div>
      </section>

      <section className="band band--paper" id={vagus.id} aria-labelledby="vagus-title">
        <div className="container split">
          <figure className="reveal" style={{ margin: 0 }}>
            <div className="fig fig--square reveal--img" style={{ background: "#f3efe6" }}>
              <Image src={vagus.image!} alt={vagus.imageAlt!} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "contain" }} />
            </div>
          </figure>
          <div>
            <span className="badge badge--open reveal">Foglalható</span>
            <h2 className="h2 reveal" id="vagus-title" style={{ marginTop: 20 }}>
              Vagus <em>terápia</em>
            </h2>
            <p className="lead reveal" style={{ marginTop: 20 }}>
              <strong>{vagus.lead}</strong>
            </p>
            {vagus.text.map((p) => (
              <p key={p} className="reveal" style={{ color: "var(--ink-2)" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--raised" id={laser.id} aria-labelledby="laser-title">
        <div className="container">
          <div className="strip reveal" style={{ marginTop: 0 }}>
            <div>
              <span className="badge badge--soon">Hamarosan</span>
              <h3 id="laser-title" style={{ marginTop: 14 }}>
                Softlaser
              </h3>
              <p>{laser.lead} {laser.text[0]}</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--ghost" href="/jelentkezes?program=regeneracio">
                Értesítést kérek
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--stone" aria-labelledby="faq-title">
        <div className="container">
          <Head center eyebrow="Időpont" id="faq-title" title={<>Hogyan <em>kérhetsz időpontot?</em></>} />
          <FaqList keys={["treatments", "noTennis", "access"]} />
        </div>
      </section>

      <CtaBand title={<>Edzés után <em>jár a pihenés.</em></>} primary={{ href: "/jelentkezes?program=regeneracio", label: "Időpontot kérek" }} />
    </>
  );
}
