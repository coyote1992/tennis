import Image from "next/image";
import { Suspense } from "react";
import { HeroVideo } from "@/components/b/HeroVideo";
import { PriceExplorer } from "@/components/b/PriceExplorer";
import { BookingFlow } from "@/components/shared/BookingFlow";
import { Icon } from "@/components/shared/Icon";
import {
  DIRECTIONS,
  EVENTS,
  ft,
  GOOD_MORNING_CLUB,
  HOURS,
  JUNIOR_LEVELS,
  JUNIOR_TERM,
  KOREDZES,
  num,
  PRICE_FROM,
  PT_QUOTE,
  SITE,
  TRAINER,
  TREATMENTS,
} from "@/lib/site";

const signup = (program: string, group?: string) => `/b?program=${program}${group ? `&csoport=${group}` : ""}#jelentkezes`;

const HELLA_STEPS = [
  { title: "Nyisd meg a Hellát", text: `A foglalási rendszer a ${SITE.hellaLabel} címen érhető el, telefonról is.` },
  { title: "Lépj be vagy regisztrálj", text: "Első alkalommal létre kell hoznod egy fiókot, utána már csak belépsz." },
  { title: "Válassz pályát és időpontot", text: "A szabad időpontok ott látszanak, a foglalás néhány kattintás." },
];

const AFTER = [
  { title: "Visszajelzünk", text: "Telefonon vagy e-mailben keresünk, hogy egyeztessük a részleteket." },
  { title: "Megbeszéljük az időpontot", text: "Csoportot, napot és az első alkalmat. Ha más csoport illik jobban, azt is megmondjuk." },
  { title: "Találkozunk a pályán", text: "Kényelmes sportruhában és teniszcipőben gyere, és hozz magaddal vizet." },
];

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Budapest · Normafa</p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz a hegyen, <em>a Normafánál.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Négy felújított salakpálya a Budai-hegység szívében, erdő és friss levegő között. Junior csoportok, tenisz felnőtteknek,
                személyi edzés, csoportos órák és regeneráció, mind ugyanott.
              </p>
              <div className="hero__ctas">
                <a href="#jelentkezes" className="btn btn--accent">
                  Jelentkezés edzésre <Icon name="arrow" />
                </a>
                <a href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  Pályafoglalás <Icon name="arrowUpRight" />
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <HeroVideo />
            <figcaption className="hero__caption">A négy salakpálya a Budai-hegységben, drónról</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Röviden">
            <li className="fact">
              <span className="fact__num">4</span>
              <span className="fact__label">felújított salakpálya, erdő ölelésében</span>
            </li>
            <li className="fact">
              <span className="fact__num">{ft(PRICE_FROM)}</span>
              <span className="fact__label">a legkedvezőbb téli óradíj, vasárnap</span>
            </li>
            <li className="fact">
              <span className="fact__num">7–21</span>
              <span className="fact__label">nyitva hétköznap, hétvégén 8–19</span>
            </li>
            <li className="fact">
              <span className="fact__num">20&nbsp;perc</span>
              <span className="fact__label">busszal a Széll Kálmán térről</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— Courts and fees ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák · {SITE.season.label.toLowerCase()}</p>
          <h2 id="palyak-title" className="h2 reveal">
            Négy salakpálya, <em>a hegy tetején.</em>
          </h2>
          <p className="lead reveal">
            Négy teljesen felújított szabadtéri salakpálya, pár perc sétára a Normafától. A szabad időpontokat a Hellán látod, és ott is
            foglalsz. Az óradíj pályánként értendő, és a foglalás időpontjától függ; a téli díjak {SITE.season.untilIg} érvényesek.
          </p>

          <div className="reveal">
            <PriceExplorer />
          </div>
          <p className="pricing__note reveal">
            Kedvezményes bérletárakért írj a <a href={`mailto:${SITE.email}`}>{SITE.email}</a> címre, vagy hívj:{" "}
            <a href={SITE.phone.href} className="nobr">
              {SITE.phone.display}
            </a>
            .
          </p>

          <div className="courtinfo">
            <div className="hours glass reveal">
              <p className="kicker">Nyitvatartás</p>
              <ul>
                {HOURS.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <strong>
                      {h.time}
                      {h.note && <small>{h.note}</small>}
                    </strong>
                  </li>
                ))}
              </ul>
              <p className="hours__bank">
                Az egyesület bankszámlaszáma: {SITE.bank.name}, <span className="nobr">{SITE.bank.account}</span>
              </p>
            </div>
            <div className="hella glass reveal">
              <p className="kicker">Foglalás a Hellán, három lépésben</p>
              <ol>
                {HELLA_STEPS.map((s, i) => (
                  <li key={s.title}>
                    <span className="hella__num">0{i + 1}</span>
                    <div>
                      <h3 className="h3">{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                Pályafoglalás a Hellán <Icon name="arrowUpRight" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Junior groups ——— */}
      <section id="junior" className="section junior" aria-labelledby="junior-title">
        <div className="container">
          <p className="eyebrow reveal">Junior tenisz · {JUNIOR_TERM}</p>
          <h2 id="junior-title" className="h2 reveal">
            A labda színe <em>szerint.</em>
          </h2>
          <p className="lead reveal">
            Négy szint, a nemzetközi Play &amp; Stay rendszerben: a pálya és a labda együtt nő a gyerekkel, így már az első órákon valódi
            labdamenetek születnek. A csoportok hétköznap délutánonként, 15 és 19 óra között edzenek; a pluszos csoportok az adott szinten
            haladóbbaknak szólnak.
          </p>

          <ul className="levels">
            {JUNIOR_LEVELS.map((l) => (
              <li key={l.id} className="level glass reveal" style={{ ["--ball" as string]: l.color }}>
                <figure className="level__photo">
                  <Image src={l.image} alt={l.imageAlt} fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
                </figure>
                <div className="level__body">
                  <p className="level__court">
                    <span className="level__dot" aria-hidden="true" />
                    {l.ball} · {l.court}
                  </p>
                  <h3 className="h3">{l.name}</h3>
                  <p className="level__who">{l.who}</p>
                  <div className="level__groups">
                    {l.groups.map((g) => (
                      <div key={g.id} className="slots">
                        <p className="slots__name">{g.name}</p>
                        <ul>
                          {g.slots.map((s) => {
                            const [day, ...time] = s.split(" ");
                            return (
                              <li key={s}>
                                <span>{day}</span>
                                <span>{time.join(" ")}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <a href={signup("junior", l.groups[0].id)} className="level__cta">
                    Jelentkezés: {l.name} <Icon name="arrow" size={16} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <p className="junior__note reveal">
            <strong>Erőnlét és koordináció a tenisz mellé.</strong> A jelentkezésnél egy pipával jelezheted, ha a gyereket a mozgásstúdió
            erőnléti és koordinációs edzése is érdekli. Ha nem tudod, melyik csoport illik hozzá, jelöld a „Még nem tudom” lehetőséget, és
            segítünk dönteni.
          </p>
        </div>
      </section>

      {/* ——— Adults ——— */}
      <section id="felnotteknek" className="section adults" aria-labelledby="felnotteknek-title">
        <div className="container">
          <p className="eyebrow reveal">Felnőtteknek</p>
          <h2 id="felnotteknek-title" className="h2 h2--xl reveal">
            Tenisz és mozgás, <em>ugyanott.</em>
          </h2>
          <p className="lead reveal">
            Teniszóra kezdőtől versenyzőig, személyi edzés, kiscsoportos Köredzés vagy a reggeli Good Morning Club: a pályák melletti,
            fák alatti mozgásstúdióban és a friss levegőn.
          </p>

          <div className="programs">
            <article className="program glass reveal">
              <p className="kicker">Kezdőtől versenyzőig</p>
              <h3 className="h3">Tenisz felnőtteknek</h3>
              <p>
                Most kezdenéd, évek után térnél vissza, vagy a versenyekre készülsz? Írd meg, hol tartasz és mit szeretnél, és ajánlunk
                hozzá edzőt és időpontot.
              </p>
              <a href={signup("felnott-tenisz")} className="program__link">
                Jelentkezés felnőtt teniszre <Icon name="arrow" size={16} />
              </a>
            </article>

            <article className="program glass reveal">
              <p className="kicker">Egyéni · {TRAINER.name}</p>
              <h3 className="h3">Személyi edzés</h3>
              <p>A mostani állapotodhoz, a céljaidhoz és az életedhez igazítva: erő, mobilitás, állóképesség, fájdalommentesebb mozgás.</p>
              <dl className="program__facts">
                <div>
                  <dt>Helyszín</dt>
                  <dd>Mozgásstúdió</dd>
                </div>
                <div>
                  <dt>Időpont</dt>
                  <dd>Egyeztetés szerint</dd>
                </div>
              </dl>
              <div className="program__links">
                <a href={signup("szemelyi-edzes")} className="program__link">
                  Jelentkezés <Icon name="arrow" size={16} />
                </a>
                <a href={TRAINER.phone.href} className="program__phone">
                  <Icon name="phone" size={15} /> {TRAINER.phone.display}
                </a>
              </div>
            </article>

            <article className="program glass reveal">
              <p className="kicker">Kiscsoport · {TRAINER.name}</p>
              <h3 className="h3">{KOREDZES.name}</h3>
              <p>{KOREDZES.text}</p>
              <dl className="program__facts">
                <div>
                  <dt>Mikor</dt>
                  <dd>{KOREDZES.when}</dd>
                </div>
                <div>
                  <dt>Részvételi díj</dt>
                  <dd>{ft(KOREDZES.fee)} / alkalom</dd>
                </div>
              </dl>
              <div className="program__links">
                <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="program__link">
                  Helyfoglalás online <Icon name="arrowUpRight" size={16} />
                </a>
                <a href={signup("koredzes")} className="program__phone">
                  Jelentkezés
                </a>
              </div>
            </article>

            <article className="program glass reveal">
              <p className="kicker">Reggel · mindenkinek</p>
              <h3 className="h3">{GOOD_MORNING_CLUB.name}</h3>
              <p>{GOOD_MORNING_CLUB.text}</p>
              <dl className="program__facts">
                <div>
                  <dt>Mikor</dt>
                  <dd>{GOOD_MORNING_CLUB.when}</dd>
                </div>
                <div>
                  <dt>Részvételi díj</dt>
                  <dd>{ft(GOOD_MORNING_CLUB.fee)} / alkalom</dd>
                </div>
              </dl>
              <p className="program__bring">Hozd magaddal: {GOOD_MORNING_CLUB.bring.toLowerCase()}.</p>
              <div className="program__links">
                <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="program__link">
                  Helyfoglalás online <Icon name="arrowUpRight" size={16} />
                </a>
                <a href={signup("good-morning-club")} className="program__phone">
                  Jelentkezés
                </a>
              </div>
            </article>
          </div>

          <figure className="quote reveal">
            <div className="quote__photo">
              <Image src="/images/studio-wallbars.jpg" alt="Bordásfal, TRX és medicinlabdák a mozgásstúdióban" fill sizes="(max-width: 900px) 40vw, 220px" style={{ objectFit: "cover" }} />
            </div>
            <div>
              <blockquote>„{PT_QUOTE}”</blockquote>
              <figcaption>
                {TRAINER.name} · {TRAINER.role.toLowerCase()}
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* ——— Regeneration ——— */}
      <section id="regeneracio" className="section regen" aria-labelledby="regeneracio-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Regeneráció</p>
              <h2 id="regeneracio-title" className="h2 reveal">
                A mozgás mellé <em>pihenés is jár.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Masszázs, köpölyözés és vagus terápia a pályák mellett, edzés vagy meccs után, és bárkinek, aki szeretne könnyebben mozogni.
              A softlaser kezelés hamarosan indul.
            </p>
          </div>

          <div className="treatments">
            {TREATMENTS.map((t) => (
              <article key={t.id} className={`treatment glass reveal${t.status === "soon" ? " treatment--soon" : ""}`}>
                {t.image ? (
                  <figure className={`treatment__photo${t.id === "vagus" ? " treatment__photo--art" : ""}`}>
                    <Image src={t.image} alt={t.imageAlt ?? ""} fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
                  </figure>
                ) : (
                  <div className="treatment__photo treatment__photo--soon" aria-hidden="true">
                    <span />
                  </div>
                )}
                <div className="treatment__body">
                  {t.status === "soon" && <span className="badge">Hamarosan</span>}
                  <h3 className="h3">{t.name}</h3>
                  <p className="treatment__lead">{t.lead}</p>
                  {t.text.map((p) => (
                    <p key={p.slice(0, 24)} className="treatment__text">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="regen__cta reveal">
            <a href={signup("regeneracio")} className="btn btn--accent">
              Időpontot kérek <Icon name="arrow" />
            </a>
            <a href={SITE.phone.href} className="btn btn--ghost">
              <Icon name="phone" /> {SITE.phone.display}
            </a>
          </div>
        </div>
      </section>

      {/* ——— Sign-up ——— */}
      <section id="jelentkezes" className="section signup" aria-labelledby="jelentkezes-title">
        <div className="container signup__grid">
          <div className="signup__head">
            <p className="eyebrow reveal">Jelentkezés</p>
            <h2 id="jelentkezes-title" className="h2 reveal">
              Két perc, <em>és kész.</em>
            </h2>
            <p className="lead reveal">
              Válaszd ki, mire jelentkezel, jelöld be, mikor érsz rá, és hagyd meg az elérhetőséged. A többit telefonon vagy e-mailben
              egyeztetjük.
            </p>
          </div>
          <div className="signup__form glass reveal">
            <Suspense fallback={<div className="flow" />}>
              <BookingFlow homeHref="/b" />
            </Suspense>
          </div>
          <div className="signup__info">
            <ul className="assure reveal">
              <li>
                <Icon name="check" size={16} /> A jelentkezés még nem kötelez semmire
              </li>
              <li>
                <Icon name="check" size={16} /> Junior csoportoknál a {JUNIOR_TERM} időpontok közül választasz
              </li>
              <li>
                <Icon name="check" size={16} /> Ha bizonytalan vagy, segítünk dönteni
              </li>
            </ul>
            <ol className="after reveal">
              {AFTER.map((a, i) => (
                <li key={a.title}>
                  <span className="after__num">0{i + 1}</span>
                  <div>
                    <p className="after__title">{a.title}</p>
                    <p>{a.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ——— The place ——— */}
      <section id="normafa" className="section place" aria-labelledby="normafa-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">A hely</p>
              <h2 id="normafa-title" className="h2 reveal">
                Komoly tenisz, <em>a város fölött.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Elég közel ahhoz, hogy hetente többször is feljöjj, és elég magasan ahhoz, hogy a pályán ne a várost halld. Fent tisztább a
              levegő, csendesebb a környék, és a játék után ott a hegy.
            </p>
          </div>

          <div className="place__photos">
            <figure className="place__photo place__photo--wide reveal reveal--img">
              <Image src="/images/aerial-hills.jpg" alt="A négy salakpálya felülről, körülötte erdő, a háttérben a Budai-hegység" fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="place__photo reveal reveal--img">
              <Image src="/images/junior-group.jpg" alt="A junior csoport közös fotója a salakpályán, ütőkkel a magasban" fill sizes="(max-width: 900px) 50vw, 30vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="place__photo reveal reveal--img">
              <Image src="/images/studio-house.jpg" alt="A mozgásstúdió faháza a fák alatt, előtte virágokkal" fill sizes="(max-width: 900px) 50vw, 30vw" style={{ objectFit: "cover", objectPosition: "50% 60%" }} />
            </figure>
          </div>

          <div className="getthere">
            <div className="way reveal">
              <Icon name="pin" />
              <div>
                <h3 className="h3">Autóval</h3>
                <p>
                  {DIRECTIONS.car} {DIRECTIONS.parking}
                </p>
              </div>
            </div>
            <div className="way reveal">
              <Icon name="clock" />
              <div>
                <h3 className="h3">Tömegközlekedéssel</h3>
                <p>{DIRECTIONS.transit}</p>
              </div>
            </div>
          </div>

          <div className="events">
            <div className="events__head">
              <div>
                <p className="kicker reveal">Versenyek a saját pályáinkon</p>
                <p className="events__lead reveal">
                  2026-ban három amatőr versenyt rendeztünk a Normafánál. A következőt a Facebook-oldalunkon hirdetjük meg.
                </p>
              </div>
              <a href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm reveal">
                <Icon name="facebook" size={16} /> Kövess a Facebookon
              </a>
            </div>
            <ul className="eventlist">
              {EVENTS.map((e) => (
                <li key={e.name} className="event glass reveal">
                  <span className="badge badge--muted">Lezajlott</span>
                  <h3 className="h3">{e.name}</h3>
                  <p className="event__meta">
                    <Icon name="calendar" size={15} /> {e.date}
                  </p>
                  <p className="event__meta">Nevezési díj volt: {ft(e.fee)} / fő</p>
                  {e.note && <p className="event__note">{e.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Egy óra a pályán <em>többet mond minden leírásnál.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <Icon name="phone" />
                  <div>
                    <span className="contact__label">Pályabérlés, tenisz</span>
                    <a href={SITE.phone.href}>{SITE.phone.display}</a>
                  </div>
                </li>
                <li>
                  <Icon name="phone" />
                  <div>
                    <span className="contact__label">Személyi edzés, csoportos órák · {TRAINER.name}</span>
                    <a href={TRAINER.phone.href}>{TRAINER.phone.display}</a>
                  </div>
                </li>
                <li>
                  <Icon name="mail" />
                  <div>
                    <span className="contact__label">E-mail</span>
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </div>
                </li>
                <li>
                  <Icon name="pin" />
                  <div>
                    <span className="contact__label">Cím</span>
                    <a href={SITE.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {SITE.address.line}
                    </a>
                    <span className="contact__line">{SITE.address.note}</span>
                  </div>
                </li>
                <li>
                  <Icon name="clock" />
                  <div>
                    <span className="contact__label">Nyitvatartás</span>
                    {HOURS.map((h) => (
                      <span key={h.days} className="contact__line">
                        {h.days}: <strong>{h.time}</strong>
                        {h.note ? `, ${h.note}` : ""}
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
              <div className="visit__actions">
                <a href="#jelentkezes" className="btn btn--accent">
                  Jelentkezés <Icon name="arrow" />
                </a>
                <a href={SITE.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <Icon name="pin" /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__map glass reveal">
              <iframe title="A Next Tenisz Akadémia a térképen" src={SITE.address.embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <p className="final__price reveal">
            Téli óradíj {num(PRICE_FROM)}&nbsp;Ft-tól · Pályafoglalás:{" "}
            <a href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer" className="nobr">
              {SITE.hellaLabel}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
