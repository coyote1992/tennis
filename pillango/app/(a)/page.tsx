import Image from "next/image";
import { BallChart } from "@/components/a/BallChart";
import { CourtPrices } from "@/components/a/CourtPrices";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
import { ADULTS, CAMP, CLUB, COACHES, COMPETE, COURTS, INTRO, KIDS, PATHS, STATS, fmt } from "@/lib/site";

const TENT = [
  { src: "/img/sator-tenyeres.jpg", alt: "Fiú tenyeresre készül a téli sátorban", w: 541, h: 800 },
  { src: "/img/sator-lany.jpg", alt: "Lány tenyeres ütés közben a salakon", w: 609, h: 800 },
  { src: "/img/sator-orom.jpg", alt: "Fiú örül egy jól sikerült pontnak", w: 556, h: 800 },
];

export default function Page() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="label">Zugló · Pillangó Park · {CLUB.founded} óta</p>
            <h1 id="hero-title" className="hero__title">
              Nálunk mindenki <em>teniszezhet.</em>
            </h1>
            <p className="hero__lead">{INTRO.lead}</p>
            <div className="btn-row">
              <a href="#gyerekeknek" className="btn btn--accent">
                Tenisz suli gyerekeknek <Icon name="arrowDown" size={16} />
              </a>
              <a href={CLUB.booking} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                <Icon name="calendar" size={16} /> Online pályafoglalás
              </a>
            </div>
          </div>
          <figure className="hero__media">
            <div className="hero__img">
              <Image
                src="/img/ksi-csapat.jpg"
                alt="Fiatal játékosok KSI-mezben, edzőjükkel a háló előtt, háttal, a salakpályák felé fordulva"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 56vw"
              />
            </div>
            <Image src="/img/pillango-jel.png" alt="" width={256} height={256} className="hero__mark" sizes="120px" />
            <figcaption>A KSI Tenisz fiataljai</figcaption>
          </figure>
        </div>

        <div className="container">
          <h2 className="paths__title">Merre indulnál?</h2>
          <ol className="paths">
            {PATHS.map((p, i) => (
              <li key={p.id}>
                <a href={`#${p.id}`} className="path">
                  <span className="path__n">0{i + 1}</span>
                  <b>{p.title}</b>
                  <span>{p.text}</span>
                  <Icon name="arrow" size={18} className="path__go" />
                </a>
              </li>
            ))}
          </ol>
          <dl className="stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ——— gyerekeknek ——— */}
      <section id="gyerekeknek" className="band band--paper" aria-labelledby="gyerek-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <p className="label">Gyerek teniszoktatás</p>
              <h2 id="gyerek-title" className="title">
                Tenisz suli <em>óvodás kortól.</em>
              </h2>
            </div>
            <p className="intro">{KIDS.lead}</p>
          </div>

          <div className="kids">
            <div className="kids__card reveal">
              <p className="kids__year">{KIDS.year.title}</p>
              <div className="kids__price">
                <b>{fmt(KIDS.price.amount)} Ft</b>
                <span>/ {KIDS.price.per}</span>
              </div>
              <ul className="ticks">
                {KIDS.price.includes.map((x) => (
                  <li key={x}>
                    <Icon name="check" size={16} /> {x}
                  </li>
                ))}
              </ul>
              <div className="kids__sched">
                <p>
                  <Icon name="clock" size={16} /> {KIDS.schedule.perWeek}
                </p>
                <div className="kids__days">
                  {KIDS.schedule.days.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
                <p className="kids__k">Kezdési időpontok</p>
                <div className="kids__times">
                  {KIDS.schedule.starts.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <p className="kids__note">{KIDS.price.note}</p>
              <p className="kids__note">
                {KIDS.year.started} {KIDS.year.signup}
              </p>
              <div className="btn-row">
                <a href={CLUB.signup} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
                  Jelentkezési lap <Icon name="arrowUpRight" size={16} />
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  <Icon name="phone" size={16} /> {CLUB.phone}
                </a>
              </div>
            </div>

            <div className="kids__side">
              <figure className="kids__photo reveal">
                <Image src="/img/lanyok-labdakkal.jpg" alt="Két lány guggol a háló előtt, körülöttük teniszlabdák" fill sizes="(max-width: 900px) 100vw, 46vw" />
              </figure>
              <div className="levels reveal">
                <p className="levels__title">Négy labda, négy szint</p>
                <ol className="levels__row">
                  {KIDS.levels.map((l) => (
                    <li key={l.name}>
                      <span className="ball" style={{ background: l.color }} aria-hidden="true" />
                      {l.name}
                    </li>
                  ))}
                </ol>
                <p className="levels__note">{KIDS.levelsNote}</p>
              </div>
            </div>
          </div>

          <ol className="steps reveal">
            {KIDS.steps.map((s, i) => (
              <li key={s.title}>
                <span className="steps__n">{i + 1}</span>
                <b>{s.title}</b>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="method reveal">
            <p>{KIDS.method}</p>
            <p>{KIDS.schools}</p>
          </div>
        </div>
      </section>

      {/* ——— felnőtteknek ——— */}
      <section id="felnotteknek" className="band dark" aria-labelledby="felnott-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <p className="label label--light">Felnőtt teniszoktatás</p>
              <h2 id="felnott-title" className="title">
                Kezdőként is, <em>haladóként is.</em>
              </h2>
            </div>
            <p className="intro">{ADULTS.lead}</p>
          </div>

          <div className="adults">
            <div className="adults__beginner reveal">
              <p className="adults__tag">Kezdőknek</p>
              <h3>{ADULTS.beginner.title}</h3>
              <p>{ADULTS.beginner.text}</p>
              <dl className="adults__facts">
                <div>
                  <dt>Felnőtt kezdő csoport</dt>
                  <dd>{ADULTS.beginner.when}</dd>
                </div>
                <div>
                  <dt>Díj</dt>
                  <dd>{ADULTS.beginner.price}</dd>
                </div>
              </dl>
              <p>{ADULTS.beginner.how} Kérdés esetén hívd a klubot.</p>
              <a href={CLUB.phoneHref} className="btn btn--lime">
                <Icon name="phone" size={16} /> {CLUB.phone}
              </a>
            </div>
            <ul className="formats">
              {ADULTS.formats.map((f) => (
                <li key={f.title} className="reveal">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                  <p className="formats__price">{f.price}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="adults__note reveal">{ADULTS.groupNote}</p>
          <p className="adults__team reveal">
            <Icon name="users" size={18} /> {ADULTS.team}
          </p>
        </div>
      </section>

      {/* ——— pályák és árak ——— */}
      <section id="palyak" className="band" aria-labelledby="palyak-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <p className="label">Pályabérlés</p>
              <h2 id="palyak-title" className="title">
                Négy salak, <em>egy kemény.</em>
              </h2>
            </div>
            <p className="intro">{COURTS.lead}</p>
          </div>

          <div className="courts">
            <div className="courts__info reveal">
              <figure className="courts__photo">
                <Image src="/img/sator-lanyok.jpg" alt="Két lány átöleli egymást a háló előtt, mögöttük salakpálya a téli sátorban" fill sizes="(max-width: 900px) 100vw, 40vw" />
                <figcaption>{COURTS.winter}</figcaption>
              </figure>
              <dl className="courts__facts">
                {COURTS.facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.value}</dt>
                    <dd>{f.label}</dd>
                  </div>
                ))}
              </dl>
              <ul className="courts__list">
                {COURTS.info.map((i) => (
                  <li key={i.title}>
                    <b>{i.title}</b> {i.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="courts__prices reveal">
              <CourtPrices />
              <div className="btn-row">
                <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
                  <Icon name="calendar" size={16} /> Online pályafoglalás
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  <Icon name="phone" size={16} /> Foglalás telefonon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— versenyzés ——— */}
      <section id="verseny" className="band band--paper" aria-labelledby="verseny-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <p className="label">Versenyzés · KSI Tenisz</p>
              <h2 id="verseny-title" className="title">
                A háziversenytől <em>a válogatottig.</em>
              </h2>
            </div>
            <p className="intro">{COMPETE.ksi.text}</p>
          </div>

          <div className="ksi reveal">
            <Image src="/img/ksi-logo.png" alt="KSI" width={600} height={308} className="ksi__logo" sizes="140px" />
            <div>
              <p className="ksi__title">{COMPETE.ksi.title}</p>
              <blockquote>„{COMPETE.ksi.quote}”</blockquote>
            </div>
          </div>

          <ol className="route reveal">
            {COMPETE.path.map((p) => (
              <li key={p.n}>
                <span className="route__n">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {p.items.length > 0 && (
                  <ul className="route__items">
                    {p.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>

          <div className="chart reveal">
            <div className="chart__head">
              <h3 className="subtitle">Melyik labda, melyik verseny?</h3>
              <p>Az MTSZ korosztályos versenyein a pálya mérete és a labda a gyerek korához igazodik. Válaszd ki az életkort.</p>
            </div>
            <BallChart />
          </div>

          <div className="pride">
            <div className="pride__head reveal">
              <h3 className="subtitle">Büszkeségeink</h3>
              <p>{COMPETE.pride}</p>
              <ul className="pride__titles">
                {COMPETE.titles.map((t) => (
                  <li key={t.year}>
                    <b>{t.year}</b> {t.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="players reveal" tabIndex={0} aria-label="Játékosaink, oldalra görgethető">
              {COMPETE.players.map((p) => (
                <figure key={p.name} className="player">
                  <div className="player__img">
                    <Image src={`/img/${p.img}`} alt={p.name} fill sizes="240px" />
                  </div>
                  <figcaption>
                    <b>{p.name}</b>
                    {p.text}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="players__hint">Húzd oldalra a további játékosokért.</p>
          </div>

          <div className="coachcall reveal">
            <p>{COMPETE.contact}</p>
            <div className="btn-row">
              <a href={CLUB.headCoach.phoneHref} className="btn btn--accent">
                <Icon name="phone" size={16} /> {CLUB.headCoach.phone}
              </a>
              <a href={`mailto:${CLUB.headCoach.email}`} className="btn btn--ghost">
                <Icon name="mail" size={16} /> {CLUB.headCoach.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— nyári tábor ——— */}
      <section id="tabor" className="band" aria-labelledby="tabor-title">
        <div className="container camp">
          <div className="camp__text reveal">
            <p className="label">Nyári gyerektábor</p>
            <h2 id="tabor-title" className="title">
              Egy aktív nyári hét <em>a pályán.</em>
            </h2>
            <p className="intro">{CAMP.lead}</p>
            <dl className="camp__facts">
              {CAMP.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            <ul className="ticks ticks--loose">
              {CAMP.day.map((d) => (
                <li key={d}>
                  <Icon name="check" size={16} /> {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="camp__side">
            <figure className="camp__photo reveal">
              <Image src="/img/palyak-nyar.jpg" alt="Gyerekek a salakpályákon egy nyári délelőtt" fill sizes="(max-width: 900px) 100vw, 44vw" />
            </figure>
            <div className="camp__price reveal">
              <div>
                <b>{fmt(CAMP.price.week)} Ft</b>
                <span>/ hét / fő</span>
              </div>
              <div>
                <b>{fmt(CAMP.price.day)} Ft</b>
                <span>/ nap</span>
              </div>
              <p>{CAMP.price.includes}</p>
              <div className="btn-row">
                <a href={CLUB.camp.emailHref} className="btn btn--accent">
                  <Icon name="mail" size={16} /> {CLUB.camp.email}
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  <Icon name="phone" size={16} /> Recepció
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— edzők ——— */}
      <section id="edzok" className="band band--paper" aria-labelledby="edzok-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <p className="label">Edzőink</p>
              <h2 id="edzok-title" className="title">
                Tizenegy edző, <em>kicsiktől a felnőttekig.</em>
              </h2>
            </div>
            <p className="intro">Az egyéni és páros edzések díjáról közvetlenül az edzőknél érdeklődhetsz. Többen angolul is tartanak edzést.</p>
          </div>
          <ul className="coaches">
            {COACHES.map((c) => (
              <li key={c.name} className="coach reveal">
                <div className="coach__img">
                  <Image src={`/img/${c.img}`} alt={c.name} fill sizes="(max-width: 640px) 96px, (max-width: 1100px) 30vw, 270px" />
                </div>
                <div className="coach__body">
                  <p className="coach__role">
                    {c.role}
                    {c.langs && <span>{c.langs}</span>}
                  </p>
                  <h3>{c.name}</h3>
                  {c.text && <p className="coach__text">{c.text}</p>}
                  <p className="coach__links">
                    {c.phone && <a href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a>}
                    {c.email && <a href={`mailto:${c.email}`}>{c.email}</a>}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="tentstrip reveal">
            {TENT.map((t) => (
              <figure key={t.src}>
                <Image src={t.src} alt={t.alt} width={t.w} height={t.h} sizes="(max-width: 640px) 33vw, 260px" />
              </figure>
            ))}
            <p>Edzés a téli sátorban.</p>
          </div>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <p className="label">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="title">
              Gyere el <em>a Pillangóra.</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Recepció</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                  <small>
                    <a href={CLUB.emailHref}>{CLUB.email}</a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Pályafoglalás</dt>
                <dd>
                  <a href={CLUB.booking} target="_blank" rel="noopener noreferrer">
                    Online foglalási rendszer
                  </a>
                  <small>vagy telefonon, a recepción</small>
                </dd>
              </div>
              <div>
                <dt>Vezetőedző</dt>
                <dd>
                  {CLUB.headCoach.name}
                  <small>
                    <a href={CLUB.headCoach.phoneHref}>{CLUB.headCoach.phone}</a> · <a href={`mailto:${CLUB.headCoach.email}`}>{CLUB.headCoach.email}</a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Cím</dt>
                <dd>
                  {CLUB.address}
                  <small>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Útvonal a Google Térképen
                    </a>{" "}
                    · <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                  </small>
                </dd>
              </div>
            </dl>
            <div className="map">
              <iframe src={CLUB.mapsEmbed} title="A Pillangó Tenisz Klub a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="visit__form reveal">
            <h3 className="subtitle">Írj nekünk</h3>
            <p>Tenisz suli, edzés, pálya vagy tábor: a levél a klub címére megy, {CLUB.email}.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
