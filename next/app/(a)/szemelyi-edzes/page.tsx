import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, FaqList, Head, PageHero, Steps } from "@/components/a/Blocks";
import { Icon } from "@/components/shared/Icon";
import { GOOD_MORNING_CLUB, KOREDZES, PT_HELPS, PT_QUOTE_2, PT_TOOLS, SITE, TRAINER, ft } from "@/lib/site";

export const metadata: Metadata = {
  title: "Személyi edzés",
  description: `Személyi edzés ${TRAINER.nameWith} a pályák melletti mozgásstúdióban: erő, mobilitás, állóképesség és fájdalommentesebb mozgás, a te tempódban.`,
};

export default function PtPage() {
  return (
    <>
      <PageHero
        eyebrow={`Személyi edzés · ${TRAINER.name}`}
        title={
          <>
            Mozgás, <em>ami rólad szól.</em>
          </>
        }
        lead={`Személyi edzés ${TRAINER.nameWith}, a pályák melletti mozgásstúdióban. Az edzés a mostani állapotodhoz, a céljaidhoz és az életedhez igazodik.`}
        image="/images/studio-room.jpg"
        imageAlt="A mozgásstúdió világos terme, a falon bordásfal"
        position="50% 55%"
      >
        <Link className="btn btn--primary" href="/jelentkezes?program=szemelyi-edzes">
          Jelentkezés személyi edzésre
        </Link>
        <a className="btn btn--ghost" href={TRAINER.phone.href}>
          <Icon name="phone" size={15} /> {TRAINER.phone.display}
        </a>
      </PageHero>

      <section className="band band--dark" aria-labelledby="philosophy-title">
        <div className="container split split--top">
          <div>
            <p className="eyebrow reveal">A szemlélet</p>
            <h2 className="h2 reveal" id="philosophy-title">
              Minden ember <em>egyedi.</em>
            </h2>
            <div className="stack reveal" style={{ marginTop: 24, color: "var(--ivory-2)" }}>
              <p className="lead" style={{ color: "var(--ivory)" }}>
                Ezért hiszek abban, hogy a hatékony edzés személyre szabott. Az edzéseket mindig az aktuális fizikai állapotodhoz, a
                mozgásminőségedhez és az egyéni igényeidhez igazítom.
              </p>
              <p>
                A közös munka során a teljes embert figyelembe véve dolgozunk. Nem egy-egy izomcsoportot fejlesztünk, hanem azt, hogy a mozgásod
                egésze hatékonyabb, tudatosabb és fenntarthatóbb legyen.
              </p>
              <p>
                A funkcionális mozgásfejlesztés mellett az idegrendszer alkalmazkodását támogató koordinációs gyakorlatokat is használok. Fontos a
                megfelelő terhelés, a fokozatosság, és hogy az edzés hosszú távon is beleférjen az életedbe.
              </p>
            </div>
          </div>
          <div>
            <figure className="fig fig--tall reveal reveal--img" style={{ margin: 0 }}>
              <Image src="/images/studio-wallbars.jpg" alt="Bordásfal, TRX és medicinlabdák a mozgásstúdióban" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </figure>
          </div>
        </div>
      </section>

      <section className="band band--stone" aria-labelledby="help-title">
        <div className="container split split--top">
          <div>
            <p className="eyebrow reveal">Amiben segíthetek</p>
            <h2 className="h2 reveal" id="help-title">
              Célok, <em>a te tempódban</em>
            </h2>
            <ul className="tags reveal" style={{ marginTop: 28 }}>
              {PT_HELPS.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow reveal">Amivel dolgozunk</p>
            <p className="lead reveal">
              A saját testsúlyos gyakorlatok mellett változatos eszközökkel, hogy a mozgás hatékony, élvezetes és a hétköznapokban is jól
              használható legyen.
            </p>
            <ul className="tags reveal" style={{ marginTop: 22 }}>
              {PT_TOOLS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <blockquote className="reveal" style={{ margin: "40px 0 0", fontFamily: "var(--serif)", fontSize: "1.65rem", lineHeight: 1.25 }}>
              „{PT_QUOTE_2}”
              <footer className="small" style={{ marginTop: 14, fontFamily: "var(--sans)", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--brass-ink)", fontSize: 12 }}>
                {TRAINER.name}
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="band band--dark band--contour" aria-labelledby="start-title">
        <div className="container split split--top split--wide-left">
          <div>
            <p className="eyebrow reveal">Így kezdünk</p>
            <h2 className="h2 reveal" id="start-title">
              Az első lépés <em>egy beszélgetés</em>
            </h2>
            <div style={{ marginTop: 30 }}>
              <Steps
                items={[
                  { title: "Jelentkezel", text: "Megírod, mit szeretnél elérni, mikor érsz rá, és ha van sérülésed vagy fájdalmad, azt is." },
                  { title: "Az első alkalom", text: "Beszélgetünk, és megnézzük, honnan indulsz: hogyan mozogsz most, mi esik jól, mire kell figyelni." },
                  { title: "A saját programod", text: "Ebből épül fel az edzésed, a terhelést pedig a fejlődésedhez igazítjuk." },
                ]}
              />
            </div>
            <p className="reveal" style={{ marginTop: 26, color: "var(--ivory-2)" }}>
              <strong style={{ color: "var(--ivory)", fontWeight: 500 }}>Teniszezőknek is.</strong> A junior csoportokba jelentkezők a
              teniszórák mellé erőnléti és koordinációs edzést is kérhetnek, a jelentkezésnél egyetlen pipával.{" "}
              <Link className="inline-link" href="/tenisz">
                Junior tenisz
              </Link>
            </p>
          </div>
          <aside className="panel reveal" aria-labelledby="pt-info">
            <h3 id="pt-info">Személyi edzés</h3>
            <dl className="dl">
              <div>
                <dt>Edző</dt>
                <dd>
                  {TRAINER.name}
                  <small>{TRAINER.role}</small>
                </dd>
              </div>
              <div>
                <dt>Helyszín</dt>
                <dd>
                  Mozgásstúdió a pályák mellett
                  <small>{SITE.address.line}</small>
                </dd>
              </div>
              <div>
                <dt>Időpont</dt>
                <dd>Egyeztetés szerint, egyénileg vagy kiscsoportban</dd>
              </div>
            </dl>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/jelentkezes?program=szemelyi-edzes">
                Jelentkezés
              </Link>
              <a className="btn btn--ghost" href={TRAINER.phone.href}>
                {TRAINER.phone.display}
              </a>
            </div>
            <p className="small muted" style={{ margin: "16px 0 0" }}>
              A díjakról és a bérletekről a jelentkezés után egyeztetünk.
            </p>
          </aside>
        </div>
      </section>

      <section className="band band--raised" aria-labelledby="studio-title">
        <div className="container">
          <Head
            eyebrow="A mozgásstúdió"
            id="studio-title"
            title={
              <>
                Csendes terem, <em>a fák alatt</em>
              </>
            }
            lead="Világos, csendes terem a pályák mellett. Bordásfal, TRX, kettlebellek, medicinlabdák és szabadsúlyok: minden, ami egy jó edzéshez kell."
          />
          <div className="cards">
            {[
              { src: "/images/studio-kettlebells.jpg", alt: "Színes kettlebellek sorban a mozgásstúdió padlóján" },
              { src: "/images/studio-corner.jpg", alt: "Medicinlabdák, kettlebellek, kötél és gimnasztikai labda a stúdió sarkában" },
              { src: "/images/studio-house.jpg", alt: "A stúdió faháza reggel, előtte virágágyás és fű" },
            ].map((im) => (
              <figure key={im.src} className="fig fig--tall reveal reveal--img" style={{ margin: 0 }}>
                <Image src={im.src} alt={im.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--paper" aria-labelledby="group-title">
        <div className="container">
          <Head
            eyebrow="Csoportos órák"
            id="group-title"
            title={
              <>
                Inkább <em>társaságban</em> mozognál?
              </>
            }
            lead="Ugyanez a szemlélet kiscsoportban és reggelente, közösen."
            aside={
              <Link className="btn btn--ghost" href="/csoportos-orak">
                Csoportos órák
              </Link>
            }
          />
          <div className="cards" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <article className="card reveal">
              <div className="card__body">
                <span className="card__kicker">Kiscsoport</span>
                <h3 className="h3">{KOREDZES.name}</h3>
                <p>Mozgásminőség, erő, mobilitás és állóképesség, támogató közösségben.</p>
                <dl className="card__meta">
                  <div>
                    <dt>Mikor</dt>
                    <dd>{KOREDZES.whenShort}</dd>
                  </div>
                  <div>
                    <dt>Díj</dt>
                    <dd>{ft(KOREDZES.fee)} / alkalom</dd>
                  </div>
                </dl>
              </div>
            </article>
            <article className="card reveal">
              <div className="card__body">
                <span className="card__kicker">Reggel · Mindenkinek</span>
                <h3 className="h3">{GOOD_MORNING_CLUB.name}</h3>
                <p>Reggeli mobilizálás, nyújtás és keringésfokozás, hogy frissen indulj.</p>
                <dl className="card__meta">
                  <div>
                    <dt>Mikor</dt>
                    <dd>{GOOD_MORNING_CLUB.whenShort}</dd>
                  </div>
                  <div>
                    <dt>Díj</dt>
                    <dd>{ft(GOOD_MORNING_CLUB.fee)} / alkalom</dd>
                  </div>
                </dl>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="band band--stone" aria-labelledby="faq-title">
        <div className="container">
          <Head center eyebrow="Gyakori kérdések" id="faq-title" title={<>Mielőtt <em>elkezdenéd</em></>} />
          <FaqList keys={["firstPt", "experience", "bringPt", "access"]} />
        </div>
      </section>

      <CtaBand title={<>Az első lépés <em>egy beszélgetés.</em></>} primary={{ href: "/jelentkezes?program=szemelyi-edzes", label: "Jelentkezés edzésre" }} />
    </>
  );
}
