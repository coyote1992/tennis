import Image from "next/image";
import { PriceSwitch } from "@/components/b/PriceSwitch";
import {
  IconArrow,
  IconCalendar,
  IconCard,
  IconCheck,
  IconClock,
  IconExternal,
  IconFacebook,
  IconMail,
  IconPhone,
  IconPin,
  IconRacket,
  IconSnow,
  IconStar,
  IconTrophy,
  IconUsers,
} from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import { ADULTS, CAMP, CLUB, COACHES, COMPETE, COURTS, INTRO, KIDS, PATHS, STATS, fmt } from "@/lib/site";

/** keep phone numbers and amounts on one line */
const nb = (t: string) => t.replace(/ /g, " ");
const ft = (n: number) => `${fmt(n)} Ft`;
/** no line break right after a hyphen or a dash */
const join = (t: string) => t.replace(/([-–])/g, "$1⁠");
const tel = (p: string) => `tel:${p.replace(/[^\d+]/g, "")}`;

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;
const INFO_ICONS = [IconCalendar, IconRacket, IconCard];

const TENT = [
  { src: "/img/sator-tenyeres.jpg", alt: "Kisfiú világoskék melegítőben tenyerest üt a sátor alatti salakpályán" },
  { src: "/img/sator-lany.jpg", alt: "Lány világoskék melegítőben labdára vár a salakpályán" },
  { src: "/img/sator-tenyeres-2.jpg", alt: "Fiú tenyeres ütés közben a salakpályán" },
];

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">{CLUB.name} · Zugló</p>
            <h1 id="hero-title" className="h1 reveal">
              Nálunk mindenki <em>teniszezhet.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">{INTRO.lead}</p>
              <div className="hero__ctas">
                <a href={CLUB.booking} {...EXT} className="btn btn--accent">
                  <IconCalendar /> Online pályafoglalás
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  <IconPhone /> {nb(CLUB.phone)}
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/ksi-csapat.jpg"
              alt="Gyerekek KSI-feliratú melegítőben és edzőjük, egymást átkarolva a háló mellett, háttal, a salakpálya és a fák felé"
              fill
              priority
              sizes="(max-width: 1296px) 100vw, 1200px"
            />
            <figcaption className="hero__caption">A KSI Tenisz fiataljai</figcaption>
          </figure>

          <ul className="paths">
            {PATHS.map((p) => (
              <li key={p.id} className="reveal">
                <a href={`#${p.id}`} className="path glass">
                  <span className="path__title">{p.title}</span>
                  <span className="path__text">{p.text}</span>
                  <span className="path__go" aria-hidden="true">
                    <IconArrow />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <ul className="facts reveal">
            {STATS.map((f) => (
              <li key={f.label} className="fact">
                <span className="fact__num">{f.value}</span>
                <span className="fact__label">{f.label}</span>
              </li>
            ))}
          </ul>
          <p className="hero__community reveal">{INTRO.community}</p>
        </div>
      </section>

      {/* ——— Gyerekeknek ——— */}
      <section id="gyerekeknek" className="section" aria-labelledby="gyerekeknek-title">
        <div className="container">
          <p className="eyebrow reveal">Gyerekeknek · Tenisz suli</p>
          <h2 id="gyerekeknek-title" className="h2 reveal">
            Játékosan, <em>óvodás kortól.</em>
          </h2>
          <p className="lead reveal">{KIDS.lead}</p>

          <div className="kids">
            <article className="kids__card glass reveal">
              <p className="label">
                <IconClock /> Edzésrend
              </p>
              <p className="kids__big">{nb(KIDS.schedule.perWeek)}</p>
              <div className="kids__rows">
                <div>
                  <span className="kids__k">Napok</span>
                  <ul className="chips">
                    {KIDS.schedule.days.map((d) => (
                      <li key={d}>{join(d)}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="kids__k">Kezdések</span>
                  <ul className="chips">
                    {KIDS.schedule.starts.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="muted">{KIDS.schedule.note}</p>
            </article>

            <article className="kids__card kids__card--price glass reveal">
              <p className="label">
                <IconCard /> A tenisziskola díja
              </p>
              <p className="price">
                <strong>{ft(KIDS.price.amount)}</strong>
                <span>/ {KIDS.price.per}</span>
              </p>
              <ul className="checks">
                {KIDS.price.includes.map((i) => (
                  <li key={i}>
                    <IconCheck />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <p className="muted">{KIDS.price.note}</p>
            </article>
          </div>

          <div className="levels glass reveal">
            <p className="label">
              <IconStar /> Négy szint, saját tempóban
            </p>
            <ol className="levels__row">
              {KIDS.levels.map((l, i) => (
                <li key={l.name} className="level">
                  <span className="level__ball" style={{ ["--ball" as string]: l.color }} aria-hidden="true" />
                  <span className="level__n">{i + 1}.</span>
                  <span className="level__name">{l.name}</span>
                </li>
              ))}
            </ol>
            <p className="muted">{KIDS.levelsNote}</p>
          </div>

          <div className="method reveal">
            <p className="method__text">{KIDS.method}</p>
            <ol className="steps">
              {KIDS.steps.map((s, i) => (
                <li key={s.title} className="step">
                  <span className="step__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="tent">
            {TENT.map((t) => (
              <figure key={t.src} className="snap tent__photo reveal reveal--img">
                <Image src={t.src} alt={t.alt} fill sizes="(max-width: 900px) 33vw, 280px" />
              </figure>
            ))}
            <p className="tent__cap muted">Edzés télen, a sátor alatt.</p>
          </div>

          <aside className="callcard glass reveal">
            <div>
              <p className="label">
                <IconCalendar /> {KIDS.year.title}
              </p>
              <p className="callcard__text">
                {KIDS.year.started} {KIDS.year.signup}
              </p>
            </div>
            <div className="callcard__ctas">
              <a href={CLUB.signup} {...EXT} className="btn btn--accent">
                Jelentkezési lap <IconExternal />
              </a>
              <a href={CLUB.phoneHref} className="btn btn--ghost">
                <IconPhone /> {nb(CLUB.phone)}
              </a>
            </div>
          </aside>
          <p className="muted kids__schools reveal">{KIDS.schools}</p>
        </div>
      </section>

      {/* ——— Felnőtteknek ——— */}
      <section id="felnotteknek" className="section" aria-labelledby="felnotteknek-title">
        <div className="container">
          <p className="eyebrow reveal">Felnőtteknek</p>
          <h2 id="felnotteknek-title" className="h2 reveal">
            Kezdőként is, <em>haladóként is.</em>
          </h2>
          <p className="lead reveal">{ADULTS.lead}</p>

          <ul className="formats">
            {ADULTS.formats.map((f, i) => (
              <li key={f.title} className={`format glass reveal${i === 2 ? " format--hi" : ""}`}>
                <h3 className="h3">{f.title}</h3>
                <p>{f.text}</p>
                <p className={i === 2 ? "format__price" : "format__ask"}>{nb(f.price)}</p>
              </li>
            ))}
          </ul>
          <p className="muted formats__note reveal">{ADULTS.groupNote}</p>

          <article className="beginner glass reveal">
            <div className="beginner__head">
              <span className="tag tag--accent">Felnőtt kezdő csoport</span>
              <h3 className="h3 beginner__title">{ADULTS.beginner.title}</h3>
              <p>{ADULTS.beginner.text}</p>
            </div>
            <dl className="beginner__facts">
              <div>
                <dt>Mikor</dt>
                <dd>{join(nb(ADULTS.beginner.when))}</dd>
              </div>
              <div>
                <dt>Díj</dt>
                <dd>{nb(ADULTS.beginner.price)}</dd>
              </div>
              <div>
                <dt>Jelentkezés</dt>
                <dd>{ADULTS.beginner.how}</dd>
              </div>
            </dl>
            <div className="beginner__cta">
              <p className="muted">Kérdés esetén hívd a klubot:</p>
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <IconPhone /> {nb(CLUB.phone)}
              </a>
            </div>
          </article>

          <p className="team reveal">
            <IconUsers /> <span>{ADULTS.team}</span>
          </p>
        </div>
      </section>

      {/* ——— Pályák és árak ——— */}
      <section id="palyak" className="section" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák és árak</p>
          <h2 id="palyak-title" className="h2 reveal">
            Négy salakpálya, <em>egy keménypálya.</em>
          </h2>
          <p className="lead reveal">{COURTS.lead}</p>

          <div className="courts">
            <ul className="courts__facts reveal">
              {COURTS.facts.map((f) => (
                <li key={f.label}>
                  <span className="fact__num">{f.value}</span>
                  <span className="fact__label">{f.label}</span>
                </li>
              ))}
            </ul>
            <figure className="snap courts__photo reveal reveal--img">
              <Image
                src="/img/sator-lanyok.jpg"
                alt="Két lány átöleli egymást a háló mellett, mögöttük a sátor alatti salakpálya"
                fill
                sizes="(max-width: 900px) 100vw, 560px"
              />
              <figcaption>Télen a sátor alatt</figcaption>
            </figure>
            <p className="courts__winter glass reveal">
              <IconSnow /> <span>{COURTS.winter}</span>
            </p>
          </div>

          <PriceSwitch />

          <ul className="info">
            {COURTS.info.map((c, i) => {
              const Icon = INFO_ICONS[i] ?? IconCheck;
              return (
                <li key={c.title} className="infocard glass reveal">
                  <p className="label">
                    <Icon /> {c.title}
                  </p>
                  <p>{c.text}</p>
                </li>
              );
            })}
          </ul>

          <div className="book reveal">
            <a href={CLUB.booking} {...EXT} className="btn btn--accent">
              <IconCalendar /> Online pályafoglalás
            </a>
            <a href={CLUB.phoneHref} className="btn btn--ghost">
              <IconPhone /> Telefonon: {nb(CLUB.phone)}
            </a>
          </div>
        </div>
      </section>

      {/* ——— Versenyzés ——— */}
      <section id="verseny" className="section" aria-labelledby="verseny-title">
        <div className="container">
          <p className="eyebrow reveal">Versenyzés · KSI Tenisz</p>
          <h2 id="verseny-title" className="h2 reveal">
            Út a versenyzés felé, <em>lépésről lépésre.</em>
          </h2>

          <article className="ksi glass reveal">
            <div className="ksi__head">
              <Image src="/img/ksi-logo.png" alt="KSI" width={600} height={308} className="ksi__logo" />
              <h3 className="h3">{COMPETE.ksi.title}</h3>
            </div>
            <p>{COMPETE.ksi.text}</p>
            <blockquote className="ksi__quote">
              <p>„{COMPETE.ksi.quote}”</p>
            </blockquote>
          </article>

          <ol className="path4">
            {COMPETE.path.map((p) => (
              <li key={p.n} className="path4__step glass reveal">
                <span className="path4__n">{p.n}</span>
                <h3 className="h3">{p.title}</h3>
                <p>{p.text}</p>
                {p.n === 2 && (
                  <div className="training">
                    {COMPETE.training.map((t) => (
                      <div key={t.ages} className="training__group">
                        <span className="tag">{t.ages}</span>
                        <ul className="checks">
                          {t.plan.map((x) => (
                            <li key={x}>
                              <IconCheck />
                              <span>{nb(x)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                {p.items.length > 0 && (
                  <ul className="chips">
                    {p.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>

          <div className="cats glass reveal">
            <p className="label" id="cats-title">
              <IconTrophy /> MTSZ korosztályok, labdák, kategóriák
            </p>
            <table className="cats__table" aria-labelledby="cats-title">
              <thead>
                <tr>
                  <th scope="col">Korosztály</th>
                  <th scope="col">Labda</th>
                  <th scope="col">Versenykategória</th>
                </tr>
              </thead>
              <tbody>
                {COMPETE.categories.map((c) => (
                  <tr key={c.ages}>
                    <th scope="row">{c.ages}</th>
                    <td>
                      <span className="cats__ball" style={{ ["--ball" as string]: c.color }} aria-hidden="true" />
                      {c.ball}
                    </td>
                    <td>{c.cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pride">
            <div className="pride__head reveal">
              <h3 className="h3 pride__title">
                Büszkeségeink: <em>{COMPETE.pride}</em>
              </h3>
              <ol className="titles">
                {COMPETE.titles.map((t) => (
                  <li key={t.year}>
                    <span className="titles__year">{t.year}</span>
                    <span>{t.text}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="players reveal" role="region" aria-label="A Pillangó volt és mostani versenyzői" tabIndex={0}>
              {COMPETE.players.map((p) => (
                <figure key={p.name} className="player">
                  <div className="player__img">
                    <Image src={`/img/${p.img}`} alt={p.name} fill sizes="(max-width: 900px) 62vw, 240px" />
                  </div>
                  <figcaption>
                    <strong>{p.name}</strong>
                    <span>{p.text}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="muted players__hint">Húzd oldalra a versenyzőket.</p>
          </div>

          <div className="competition-photos">
            <figure className="snap reveal reveal--img">
              <Image
                src="/img/verseny-edzok.jpg"
                alt="Két edző és gyerekek érmekkel és kupákkal egy versenyen, jókedvűen a kamerába mutatva"
                fill
                sizes="(max-width: 900px) 100vw, 480px"
              />
              <figcaption>Edzők és versenyzők egy versenyen</figcaption>
            </figure>
            <figure className="snap reveal reveal--img">
              <Image
                src="/img/dijatado.jpg"
                alt="Gyerekek kupákkal egy díjátadón, fedett pálya mellett"
                fill
                sizes="(max-width: 900px) 100vw, 480px"
              />
              <figcaption>Díjátadó</figcaption>
            </figure>
          </div>

          <aside className="callcard glass reveal">
            <div>
              <p className="label">
                <IconUsers /> {CLUB.headCoach.name}, {CLUB.headCoach.role}
              </p>
              <p className="callcard__text">{COMPETE.contact}</p>
            </div>
            <div className="callcard__ctas">
              <a href={CLUB.headCoach.phoneHref} className="btn btn--accent">
                <IconPhone /> {nb(CLUB.headCoach.phone)}
              </a>
              <a href={`mailto:${CLUB.headCoach.email}`} className="btn btn--ghost">
                <IconMail /> E-mail
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ——— Nyári tábor ——— */}
      <section id="tabor" className="section" aria-labelledby="tabor-title">
        <div className="container">
          <p className="eyebrow reveal">Nyári gyerektábor</p>
          <h2 id="tabor-title" className="h2 reveal">
            Egy aktív nyári hét <em>a pályán.</em>
          </h2>
          <p className="lead reveal">{CAMP.lead}</p>

          <ul className="camp__facts">
            {CAMP.facts.map((f) => (
              <li key={f.label} className="infocard glass reveal">
                <p className="label">{f.label}</p>
                <p className="infocard__big">{join(f.value)}</p>
              </li>
            ))}
          </ul>

          <div className="camp">
            <article className="camp__day glass reveal">
              <p className="label">
                <IconClock /> Egy nap a táborban
              </p>
              <ul className="checks">
                {CAMP.day.map((d) => (
                  <li key={d}>
                    <IconCheck />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="camp__price glass reveal">
              <p className="label">
                <IconCard /> A tábor díja
              </p>
              <p className="price">
                <strong>{ft(CAMP.price.week)}</strong>
                <span>/ hét / fő</span>
              </p>
              <p className="camp__day-price">
                1 nap: <strong>{ft(CAMP.price.day)}</strong>
              </p>
              <p className="muted">{CAMP.price.includes}</p>
              <div className="camp__ctas">
                <a href={CLUB.camp.emailHref} className="btn btn--accent">
                  <IconMail /> Jelentkezés e-mailben
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  <IconPhone /> Recepció
                </a>
              </div>
              <p className="muted camp__mail">{CLUB.camp.email}</p>
            </article>
          </div>

          <figure className="snap camp__photo reveal reveal--img">
            <Image
              src="/img/palyak-nyar.jpg"
              alt="Gyerekek a salakpályákon egy nyári délelőttön, a háttérben fák"
              fill
              sizes="(max-width: 1296px) 100vw, 1200px"
            />
            <figcaption>Nyári délelőtt, 2017</figcaption>
          </figure>
        </div>
      </section>

      {/* ——— Edzők ——— */}
      <section id="edzok" className="section" aria-labelledby="edzok-title">
        <div className="container">
          <p className="eyebrow reveal">Edzők</p>
          <h2 id="edzok-title" className="h2 reveal">
            {COACHES.length} edző és oktató, <em>egy csapat.</em>
          </h2>

          <ul className="coaches">
            {COACHES.map((c) => (
              <li key={c.name} className="coach glass reveal">
                <div className="coach__img">
                  <Image src={`/img/${c.img}`} alt={c.name} fill sizes="(max-width: 640px) 110px, (max-width: 1100px) 33vw, 280px" />
                </div>
                <div className="coach__body">
                  <h3 className="h3">{c.name}</h3>
                  <p className="coach__role">
                    {c.role}
                    {c.langs && <span className="coach__langs">{c.langs}</span>}
                  </p>
                  {c.text && <p className="coach__text">{c.text}</p>}
                  {(c.phone || c.email) && (
                    <p className="coach__links">
                      {c.phone && (
                        <a href={tel(c.phone)}>
                          <IconPhone /> {nb(c.phone)}
                        </a>
                      )}
                      {c.email && (
                        <a href={`mailto:${c.email}`}>
                          <IconMail /> <span>{c.email}</span>
                        </a>
                      )}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Kapcsolat ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Gyere el <em>a Pillangó Parkba.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Recepció</span>
                    <a href={CLUB.phoneHref}>{nb(CLUB.phone)}</a>
                  </div>
                </li>
                <li>
                  <IconMail />
                  <div>
                    <span className="contact__label">E-mail</span>
                    <a href={CLUB.emailHref}>{CLUB.email}</a>
                  </div>
                </li>
                <li>
                  <IconUsers />
                  <div>
                    <span className="contact__label">Vezetőedző</span>
                    <a href={CLUB.headCoach.phoneHref}>{nb(CLUB.headCoach.phone)}</a>
                    <span className="contact__name">
                      {CLUB.headCoach.name} · <a href={`mailto:${CLUB.headCoach.email}`}>{CLUB.headCoach.email}</a>
                    </span>
                  </div>
                </li>
                <li>
                  <IconCalendar />
                  <div>
                    <span className="contact__label">Pályafoglalás</span>
                    <a href={CLUB.booking} {...EXT}>
                      Online foglalási rendszer
                    </a>
                    <span className="contact__name">vagy telefonon, a recepción</span>
                  </div>
                </li>
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
                    <a href={CLUB.mapsUrl} {...EXT}>
                      {CLUB.address}
                    </a>
                    <span className="contact__line">Zugló, Budapest XIV. kerület</span>
                  </div>
                </li>
              </ul>
              <div className="social">
                <a href={CLUB.facebook} {...EXT} aria-label="A Pillangó Tenisz Klub a Facebookon">
                  <IconFacebook />
                </a>
              </div>
              <div className="visit__actions">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> Hívás
                </a>
                <a href={CLUB.mapsUrl} {...EXT} className="btn btn--ghost">
                  <IconArrow /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__form glass reveal">
              <p className="label">
                <IconMail /> Írj nekünk
              </p>
              <p className="muted">Tenisz suli, edzés, pálya vagy tábor: a levél a {CLUB.email} címre megy.</p>
              <ContactForm />
            </div>
          </div>

          <div className="visit__map glass reveal">
            <iframe
              title="A Pillangó Tenisz Klub Zuglóban, a térképen"
              src={CLUB.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
