import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, FaqList, Head, HoursPanel, PageHero, PriceTable, Steps } from "@/components/a/Blocks";
import { Icon } from "@/components/shared/Icon";
import { PRICE_FROM, SITE, num } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pályabérlés",
  description: `Négy felújított salakpálya a Normafánál. Téli óradíj ${num(PRICE_FROM)} Ft-tól, ${SITE.season.untilIg}. Foglalás online, a Hellán.`,
};

export default function CourtsPage() {
  return (
    <>
      <PageHero
        eyebrow="Pályabérlés"
        title={
          <>
            Pályabérlés <em>a Normafánál.</em>
          </>
        }
        lead={`Négy felújított salakpálya, erdő ölelésében. A szabad időpontokat a Hellán látod, és ott is foglalsz. ${SITE.season.label}: ${SITE.season.untilIg}.`}
        image="/images/aerial-hills.jpg"
        imageAlt="A négy salakpálya felülről, körülötte erdő, a háttérben a Budai-hegység"
      >
        <a className="btn btn--primary" href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer">
          Foglalás a Hellán <Icon name="arrowUpRight" size={14} />
        </a>
        <a className="btn btn--ghost" href="#arak">
          Árak <Icon name="arrowDown" size={14} />
        </a>
      </PageHero>

      <section className="band band--paper" id="arak" aria-labelledby="fees-title">
        <div className="container">
          <Head
            eyebrow={SITE.season.label}
            id="fees-title"
            title={
              <>
                Pályabérleti <em>díjak</em>
              </>
            }
            lead={
              <>
                {SITE.season.label}, <strong>{SITE.season.untilIg}</strong>. Az óradíj pályánként értendő, és a foglalás időpontjától függ. A
                legkedvezőbb a vasárnap, hétköznap pedig a 10 és 14 óra közötti sáv.
              </>
            }
          />
          <div className="prices">
            <PriceTable />
            <HoursPanel />
          </div>
        </div>
      </section>

      <section className="band band--dark band--contour" aria-labelledby="hella-title">
        <div className="container split split--top split--wide-left">
          <div>
            <p className="eyebrow reveal">Foglalás</p>
            <h2 className="h2 reveal" id="hella-title">
              Foglalás a Hellán, <em>három lépésben</em>
            </h2>
            <div style={{ marginTop: 30 }}>
              <Steps
                items={[
                  {
                    title: "Nyisd meg a Hellát",
                    text: (
                      <>
                        A foglalási rendszer a{" "}
                        <a className="inline-link" href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer">
                          {SITE.hellaLabel}
                        </a>{" "}
                        címen érhető el, telefonról is.
                      </>
                    ),
                  },
                  { title: "Lépj be vagy regisztrálj", text: "Első alkalommal létre kell hoznod egy fiókot, utána már csak belépsz." },
                  { title: "Válassz pályát és időpontot", text: "A szabad időpontok ott látszanak, a foglalás néhány kattintás." },
                ]}
              />
            </div>
          </div>
          <aside className="promo reveal" aria-labelledby="pass-title">
            <h3 id="pass-title">Rendszeresen játszol?</h3>
            <p>
              Kedvezményes bérletárakért írj a{" "}
              <a className="inline-link" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>{" "}
              címre, vagy hívj a{" "}
              <a className="inline-link" href={SITE.phone.href}>
                {SITE.phone.display}
              </a>{" "}
              számon.
            </p>
            <a className="btn btn--primary btn--block" href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer">
              Pályafoglalás a Hellán <Icon name="arrowUpRight" size={14} />
            </a>
            <hr />
            <p className="small" style={{ margin: 0 }}>
              Edzőt is keresel?{" "}
              <Link className="inline-link" href="/jelentkezes?program=felnott-tenisz">
                Jelentkezz felnőtt teniszre
              </Link>
              , és ajánlunk hozzá edzőt és időpontot.
            </p>
          </aside>
        </div>
      </section>

      <section className="band band--raised" aria-label="A pályák képekben">
        <div className="container">
          <div className="cards">
            {[
              { src: "/images/aerial-courts.jpg", alt: "A pályák felülről, a kék szélfogókkal" },
              { src: "/images/aerial-courts-2.jpg", alt: "Játékosok a pályákon, felülről" },
              { src: "/images/aerial-club.jpg", alt: "A klub felülről: a pályák, a parkoló és a faház" },
            ].map((im) => (
              <figure key={im.src} className="fig fig--wide reveal reveal--img" style={{ margin: 0 }}>
                <Image src={im.src} alt={im.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </figure>
            ))}
          </div>
          <p className="figcap reveal" style={{ textAlign: "center", marginTop: 22 }}>
            Négy salakpálya, a hegy tetején.
          </p>
        </div>
      </section>

      <section className="band band--stone" aria-labelledby="faq-title">
        <div className="container">
          <Head center eyebrow="Gyakori kérdések" id="faq-title" title={<>Pálya, ár, <em>megközelítés</em></>} />
          <FaqList keys={["booking", "price", "access"]} />
          <div className="btn-row" style={{ justifyContent: "center", marginTop: 36 }}>
            <Link className="btn btn--ghost" href="/kapcsolat#megkozelites">
              Megközelítés és elérhetőség
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title={<>Pálya van. <em>Csak az időpont hiányzik.</em></>} />
    </>
  );
}
