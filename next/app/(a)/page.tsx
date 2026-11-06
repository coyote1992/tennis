import Image from "next/image";
import Link from "next/link";
import { AdultCards, CtaBand, Events, FaqList, Head, HoursPanel, JuniorLevels, PriceTable, Steps } from "@/components/a/Blocks";
import { HeroVideo } from "@/components/a/HeroVideo";
import { Icon } from "@/components/shared/Icon";
import { JUNIOR_TERM, PRICE_FROM, SITE, TREATMENTS, TRAINER, PT_QUOTE, num } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <HeroVideo />
        <div className="container hero__content">
          <div className="hero__grid">
            <div>
              <p className="eyebrow">Budai-hegység · Normafa</p>
              <h1 className="display" id="hero-title">
                Tenisz a hegyen, <em>a&nbsp;Normafánál.</em>
              </h1>
              <p className="hero__lead">
                Négy felújított salakpálya a Budai-hegység szívében, erdő és friss levegő között. Pályát a Hellán foglalsz, edzésre itt
                jelentkezel.
              </p>
            </div>
            <div className="hero__choices">
              <a className="choicecard" href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer">
                <b>Pályát foglalnék</b>
                <span>
                  Téli óradíj {num(PRICE_FROM)}&nbsp;Ft-tól, bérlettel is. Foglalás a Hellán.
                </span>
                <Icon name="arrowUpRight" size={20} />
              </a>
              <Link className="choicecard" href="/jelentkezes">
                <b>Edzeni szeretnék</b>
                <span>Junior csoportok, tenisz felnőtteknek, személyi edzés és kiscsoportos órák.</span>
                <Icon name="arrow" size={20} />
              </Link>
            </div>
          </div>
          <div className="hero__stats">
            <div>
              <b>4</b>
              <span>felújított salakpálya</span>
            </div>
            <div>
              <b>4 szint</b>
              <span>junior csoport, a labda színe szerint</span>
            </div>
            <div>
              <b className="num">7–21</b>
              <span>hétköznap, hétvégén 8–19</span>
            </div>
            <div>
              <b>Normafa</b>
              <span>pár perc sétára</span>
            </div>
          </div>
        </div>
      </section>

      {/* ——— how it works ——— */}
      <section className="band band--dark" aria-labelledby="start-title">
        <div className="container split">
          <div>
            <p className="eyebrow reveal">Kezdés</p>
            <h2 className="h2 reveal" id="start-title">
              Edzés nálunk, <em>három lépésben</em>
            </h2>
            <p className="lead reveal" style={{ marginTop: 22 }}>
              <strong>A junior csoportok hétköznap délutánonként edzenek,</strong> 15 és 19 óra között, négy szinten. A felnőtt órák és a
              személyi edzés időpontját veled egyeztetjük.
            </p>
            <div style={{ marginTop: 34 }}>
              <Steps
                items={[
                  {
                    title: "Válaszd ki a programot",
                    text: "Gyerekeknek a Piros, Narancs, Zöld vagy Nagyok csoport. Felnőtteknek tenisz, személyi edzés, Köredzés vagy a reggeli Good Morning Club.",
                  },
                  {
                    title: "Jelöld be, mikor érsz rá",
                    text: "A junior csoportoknál a meghirdetett időpontok közül választasz, a többi programnál megadod, mely napok és napszakok jók neked.",
                  },
                  { title: "Visszajelzünk", text: "Telefonon vagy e-mailben egyeztetjük a csoportot, az időpontot és az első alkalmat." },
                ]}
              />
            </div>
            <p className="reveal" style={{ marginTop: 28, color: "var(--ivory-2)" }}>
              Nem tudod, melyik csoport illik a gyerekedhez? Jelöld a „Még nem tudom” lehetőséget, és segítünk dönteni.{" "}
              <Link className="inline-link" href="/jelentkezes?program=junior">
                Jelentkezés
              </Link>
            </p>
          </div>
          <div className="pair">
            <figure className="fig fig--tall reveal reveal--img" style={{ margin: 0 }}>
              <Image src="/images/junior-portrait.jpg" alt="Kisfiú tenyeres ütésre készül a salakpályán" fill sizes="(max-width: 900px) 50vw, 25vw" />
            </figure>
            <figure className="fig fig--tall reveal reveal--img" style={{ margin: 0 }}>
              <Image src="/images/coach-lesson.jpg" alt="Edző figyeli a kislány ütését a háló túloldaláról" fill sizes="(max-width: 900px) 50vw, 25vw" />
            </figure>
          </div>
        </div>
      </section>

      {/* ——— junior groups ——— */}
      <section className="band band--raised" aria-labelledby="junior-title">
        <div className="container">
          <Head
            eyebrow="Junior tenisz"
            id="junior-title"
            title={
              <>
                Junior csoportok, <em>{JUNIOR_TERM}</em>
              </>
            }
            lead={
              <>
                <strong>Négy szint, a labda színe szerint,</strong> a nemzetközi Play & Stay rendszerben: a pálya és a labda együtt nő a
                gyerekkel. A pluszos csoportok az adott szinten haladóbbaknak szólnak.
              </>
            }
            aside={
              <Link className="btn btn--ghost" href="/tenisz#orarend">
                Teljes órarend
              </Link>
            }
          />
          <JuniorLevels />
        </div>
      </section>

      {/* ——— adults ——— */}
      <section className="band band--stone" aria-labelledby="adults-title">
        <div className="container">
          <Head
            eyebrow="Felnőtteknek"
            id="adults-title"
            title={
              <>
                Tenisz és mozgás, <em>a pályák mellett</em>
              </>
            }
            lead="Egyéni edzés, kiscsoport vagy reggeli közös mozgás, ugyanott, a pályák melletti mozgásstúdióban."
          />
          <AdultCards />
          <div className="strip reveal">
            <div>
              <h3>Tenisz felnőtteknek, kezdőtől versenyzőig</h3>
              <p>Most kezdenéd, vagy évek után térnél vissza? Írd meg a jelentkezésben, hol tartasz és mit szeretnél, és ajánlunk hozzá edzőt és időpontot.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/jelentkezes?program=felnott-tenisz">
                Jelentkezés felnőtt teniszre
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— what happens next + court booking ——— */}
      <section className="band band--dark band--contour" aria-labelledby="after-title">
        <div className="container split split--top split--wide-left">
          <div>
            <p className="eyebrow reveal">A jelentkezés után</p>
            <h2 className="h2 reveal" id="after-title">
              Mi történik, <em>miután elküldöd?</em>
            </h2>
            <p className="lead reveal" style={{ marginTop: 20 }}>
              <strong>A jelentkezés még nem kötelez semmire.</strong> Elküldöd, amit tudnunk kell, mi pedig visszajelzünk.
            </p>
            <div style={{ marginTop: 32 }}>
              <Steps
                items={[
                  { title: "Megkapjuk a jelentkezésed", text: "Látjuk, melyik programot választottad, mikor érsz rá, és mindent, amit még fontosnak tartottál megírni." },
                  {
                    title: "Egyeztetjük a részleteket",
                    text: "Telefonon vagy e-mailben megbeszéljük a csoportot, az időpontot és az első alkalmat. Ha a gyerekednek másik csoport illik jobban, azt is megmondjuk.",
                  },
                  { title: "Találkozunk a pályán", text: "Az első alkalomra kényelmes sportruhában és teniszcipőben gyere, és hozz magaddal vizet." },
                ]}
              />
            </div>
          </div>
          <aside className="promo reveal" aria-labelledby="promo-title">
            <h3 id="promo-title">Pályát foglalnál?</h3>
            <p>A pályákat a Hella foglalási rendszerében foglalod, a szabad időpontok ott látszanak. Első alkalommal regisztrálnod kell.</p>
            <a className="btn btn--primary btn--block" href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer">
              Pályafoglalás a Hellán <Icon name="arrowUpRight" size={14} />
            </a>
            <hr />
            <p className="small">
              Rendszeresen játszol? Kedvezményes bérletárakért írj a{" "}
              <a className="inline-link" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>{" "}
              címre, vagy hívj a{" "}
              <a className="inline-link" href={SITE.phone.href}>
                {SITE.phone.display}
              </a>{" "}
              számon.
            </p>
            <p className="small" style={{ margin: 0 }}>
              A téli árakat a{" "}
              <Link className="inline-link" href="/palyaberles">
                pályabérlés
              </Link>{" "}
              oldalon találod.
            </p>
          </aside>
        </div>
      </section>

      {/* ——— the place ——— */}
      <section className="band band--stone" aria-labelledby="place-title">
        <div className="container split">
          <figure className="reveal" style={{ margin: 0 }}>
            <div className="fig fig--wide reveal--img">
              <Image src="/images/aerial-tower.jpg" alt="A pályák és az adótorony a Budai-hegységben" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <figcaption className="figcap">Négy salakpálya, a hegy tetején.</figcaption>
          </figure>
          <div>
            <p className="eyebrow reveal">A pályák</p>
            <h2 className="h2 reveal" id="place-title">
              Pályák a Budai-hegység <em>szívében</em>
            </h2>
            <p className="lead reveal" style={{ marginTop: 20 }}>
              Négy teljesen felújított szabadtéri salakpálya, erdő ölelésében, pár perc sétára a Normafától. Fent tisztább a levegő, csendesebb a
              környék, és a játék után ott a hegy.
            </p>
            <p className="reveal" style={{ color: "var(--ink-2)" }}>
              Kocsival az Istenhegyi úton jössz fel, és a pályák mellett parkolsz. Busszal a Széll Kálmán térről nagyjából húsz perc.
            </p>
            <Link className="textlink reveal" href="/kapcsolat#megkozelites">
              Megközelítés <Icon name="arrow" size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ——— statement ——— */}
      <section className="statement" aria-labelledby="statement-title">
        <div className="statement__media">
          <Image src="/images/junior-group.jpg" alt="" fill sizes="100vw" style={{ objectPosition: "50% 40%" }} />
        </div>
        <div className="statement__inner">
          <h2 className="h1 reveal" id="statement-title">
            Komoly tenisz, <em>a város fölött.</em>
          </h2>
          <p className="reveal">Elég közel ahhoz, hogy hetente többször is feljöjj, és elég magasan ahhoz, hogy a pályán ne a várost halld.</p>
        </div>
      </section>

      {/* ——— trainer ——— */}
      <section className="band band--dark" aria-label="Személyi edzés">
        <div className="container">
          <div className="quotecard reveal">
            <div className="quotecard__text">
              <p className="eyebrow">Személyi edzés</p>
              <blockquote>{PT_QUOTE.replace(/\.$/, "")}.</blockquote>
              <p style={{ color: "var(--ivory-2)" }}>
                András funkcionális mozgásfejlesztéssel, koordinációs gyakorlatokkal és fokozatos terheléssel dolgozik, olimpiai rúddal,
                kettlebellel, TRX-szel és medicinlabdával. A cél, hogy az edzés hosszú távon is beleférjen az életedbe.
              </p>
              <p className="quotecard__by">
                {TRAINER.name} · {TRAINER.role}
              </p>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/jelentkezes?program=szemelyi-edzes">
                  Jelentkezés személyi edzésre
                </Link>
                <Link className="textlink" href="/szemelyi-edzes">
                  Részletek <Icon name="arrow" size={15} />
                </Link>
              </div>
            </div>
            <div className="quotecard__media">
              <Image src="/images/studio-wallbars.jpg" alt="Bordásfal, TRX és medicinlabdák a mozgásstúdióban" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ——— court fees ——— */}
      <section className="band band--paper" aria-labelledby="fees-title">
        <div className="container">
          <Head
            eyebrow={`${SITE.season.label}`}
            id="fees-title"
            title={
              <>
                Pályabérleti <em>díjak</em>
              </>
            }
            lead={
              <>
                Téli szezon, <strong>{SITE.season.untilIg}</strong>. Óradíjak pályánként, a foglalás időpontja szerint. A legkedvezőbb a vasárnap.
              </>
            }
            aside={
              <a className="btn btn--primary" href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer">
                Foglalás a Hellán <Icon name="arrowUpRight" size={14} />
              </a>
            }
          />
          <div className="prices">
            <PriceTable />
            <HoursPanel />
          </div>
        </div>
      </section>

      {/* ——— regeneration ——— */}
      <section className="band band--raised" aria-labelledby="regen-title">
        <div className="container">
          <Head
            eyebrow="Regeneráció"
            id="regen-title"
            title={
              <>
                Edzés után: <em>regeneráció</em>
              </>
            }
            lead="Masszázzsal, köpölyözéssel és vagus terápiával segítünk, hogy a test és az idegrendszer is helyreálljon. A softlaser kezelés hamarosan indul."
            aside={
              <Link className="btn btn--ghost" href="/regeneracio">
                A kezelésekről
              </Link>
            }
          />
          <div className="cards">
            {TREATMENTS.map((t) => (
              <article key={t.id} className="card reveal">
                <div className="card__body">
                  <span className={`badge ${t.status === "open" ? "badge--open" : "badge--soon"}`} style={{ alignSelf: "flex-start" }}>
                    {t.status === "open" ? "Foglalható" : "Hamarosan"}
                  </span>
                  <h3 className="h3">{t.name}</h3>
                  <p>{t.lead}</p>
                  <div className="card__cta" style={{ marginTop: "auto" }}>
                    <Link className="textlink" href={`/regeneracio#${t.id}`}>
                      Részletek <Icon name="arrow" size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— tournaments ——— */}
      <section className="band band--deep band--contour" aria-labelledby="events-title">
        <div className="container">
          <Head
            eyebrow="Versenyek"
            id="events-title"
            title={
              <>
                Versenyek a <em>saját pályáinkon</em>
              </>
            }
            lead="2026-ban három amatőr versenyt rendeztünk a Normafánál. A következőt a Facebook-oldalunkon hirdetjük meg."
            aside={
              <a className="btn btn--ghost" href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer">
                Kövess a Facebookon <Icon name="arrowUpRight" size={14} />
              </a>
            }
          />
          <Events />
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className="band band--stone" aria-labelledby="faq-title">
        <div className="container">
          <Head
            center
            eyebrow="Gyakori kérdések"
            id="faq-title"
            title={
              <>
                Kérdésed van? <em>Szívesen segítünk.</em>
              </>
            }
          />
          <FaqList keys={["booking", "price", "group", "juniorTimes", "access", "gmc"]} />
          <div className="btn-row" style={{ justifyContent: "center", marginTop: 36 }}>
            <Link className="btn btn--ghost" href="/kapcsolat#kerdesek">
              További kérdések
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Egy óra a pályán többet mond <em>minden leírásnál.</em>
          </>
        }
      />
    </>
  );
}
