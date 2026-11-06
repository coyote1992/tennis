import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, Events, FaqList, Head, JuniorLevels, PageHero, Schedule } from "@/components/a/Blocks";
import { Icon } from "@/components/shared/Icon";
import { JUNIOR_TERM, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tenisz",
  description: "Junior csoportok négy szinten, hétköznap délutánonként, és tenisz felnőtteknek kezdőtől versenyzőig, négy felújított salakpályán a Normafánál.",
};

export default function TeniszPage() {
  return (
    <>
      <PageHero
        eyebrow="Tenisz"
        title={
          <>
            Teniszedzés <em>a salakon.</em>
          </>
        }
        lead="Junior csoportok négy szinten, hétköznap délutánonként, és órák felnőtteknek, kezdőtől versenyzőig. Négy felújított salakpályán, a Normafa mellett."
        image="/images/coach-feeding.jpg"
        imageAlt="Edző labdát adogat a kosárból a salakpályán"
        position="50% 40%"
      >
        <Link className="btn btn--primary" href="/jelentkezes?program=junior">
          Jelentkezés junior csoportba
        </Link>
        <a className="btn btn--ghost" href="#orarend">
          Órarend <Icon name="arrowDown" size={14} />
        </a>
      </PageHero>

      <section className="band band--raised" aria-labelledby="levels-title">
        <div className="container">
          <Head
            eyebrow="Junior tenisz"
            id="levels-title"
            title={
              <>
                Junior csoportok, <em>{JUNIOR_TERM}</em>
              </>
            }
            lead="A pálya és a labda együtt nő a gyerekkel. A nemzetközi Play & Stay rendszerben a kicsik lassabb labdával, kisebb pályán kezdenek, így már az első órákon valódi labdamenetek születnek."
          />
          <JuniorLevels />
          <div className="strip reveal">
            <div>
              <h3>Erőnlét és koordináció a tenisz mellé</h3>
              <p>A jelentkezésnél jelezheted, ha a gyereket az erőnléti és koordinációs edzés is érdekli, a pályák melletti mozgásstúdióban.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--ghost" href="/szemelyi-edzes">
                Mozgásstúdió és személyi edzés
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--dark" id="orarend" aria-labelledby="schedule-title">
        <div className="container">
          <Head
            eyebrow={JUNIOR_TERM}
            id="schedule-title"
            title={
              <>
                Heti <em>órarend</em>
              </>
            }
            lead="Minden csoportnak több időpontja van. A jelentkezésnél bejelölheted mindet, amelyik jó, és egyeztetjük, hány alkalommal jön a gyerek."
            aside={
              <Link className="btn btn--primary" href="/jelentkezes?program=junior">
                Jelentkezés
              </Link>
            }
          />
          <Schedule />
          <p className="small muted reveal" style={{ marginTop: 18 }}>
            A 2026 őszi jelentkezési lap szerinti időpontok. Változás esetén a jelentkezés után értesítünk.
          </p>
        </div>
      </section>

      <section className="band band--stone" id="felnott" aria-labelledby="adult-title">
        <div className="container split">
          <div>
            <p className="eyebrow reveal">Felnőtteknek</p>
            <h2 className="h2 reveal" id="adult-title">
              Tenisz <em>felnőtteknek</em>
            </h2>
            <p className="lead reveal" style={{ marginTop: 20 }}>
              Most kezdenéd, évek után térnél vissza, vagy a versenyekre készülsz? Írd meg, hol tartasz és mit szeretnél, és ajánlunk hozzá
              edzőt és időpontot.
            </p>
            <ul className="checklist reveal" style={{ color: "var(--ink-2)" }}>
              {["Kezdőknek az alapoktól, türelemmel", "Visszatérőknek, hogy újra magabiztos legyen a játék", "Haladóknak és versenyzőknek, meccshelyzetekre"].map((t) => (
                <li key={t} style={{ color: "var(--ink-2)" }}>
                  <Icon name="check" size={16} />
                  {t}
                </li>
              ))}
            </ul>
            <div className="btn-row reveal">
              <Link className="btn btn--primary" href="/jelentkezes?program=felnott-tenisz">
                Jelentkezés felnőtt teniszre
              </Link>
              <Link className="textlink" href="/palyaberles">
                Csak pálya kell? <Icon name="arrow" size={15} />
              </Link>
            </div>
          </div>
          <figure className="fig fig--tall reveal reveal--img" style={{ margin: 0 }}>
            <Image src="/images/forehand-pink.jpg" alt="Játékos tenyeres ütés közben" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </figure>
        </div>
      </section>

      <section className="band band--deep band--contour" id="versenyek" aria-labelledby="events-title">
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

      <section className="band band--paper" aria-labelledby="faq-title">
        <div className="container">
          <Head center eyebrow="Gyakori kérdések" id="faq-title" title={<>Kérdések a <em>junior edzésekről</em></>} />
          <FaqList keys={["group", "juniorTimes", "firstTraining"]} />
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
