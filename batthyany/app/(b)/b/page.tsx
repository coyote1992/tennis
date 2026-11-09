import Image from "next/image";
import { IconArrow, IconCalendar, IconCard, IconCheck, IconClock, IconExternal, IconFacebook, IconMail, IconPhone, IconPin, IconTrophy, IconUsers } from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import {
  BOOKING_STEPS,
  CAMP,
  CLUB,
  COACHES,
  COURT_RULES,
  EVENTS,
  FACILITIES,
  FAMOUS,
  HISTORY,
  HOURS,
  KIDS,
  PIRAMIS,
  PRICES,
  SEASON_NOW,
  SHOP,
  TEAMS,
} from "@/lib/site";

const HERO_FACTS = [
  { num: "4", label: "salakos pálya, kettő világítással" },
  { num: "1", label: "fedett sportsátor, télen-nyáron" },
  { num: "1980", label: "óta teniszeznek a városban" },
];

/** 1 + 2 + 3 + 4 players on the ladder; "you" sits in the third row. */
const LADDER = [1, 2, 3, 4];
const YOU = { row: 2, col: 1 };
const canChallenge = (row: number, col: number) =>
  (row === YOU.row && col !== YOU.col) || row === YOU.row - 1;

const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
/** keep phone numbers and "u. 25." on one line */
const keep = (t: string) => t.replace(CLUB.phone, CLUB.phone.replace(/ /g, "\u00a0")).replace(/u\. (\d)/g, "u.\u00a0$1");

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">
              {CLUB.venue} · {CLUB.town}
            </p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz a fürdővárosban, <em>télen-nyáron.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Négy salakos pálya és egy fedett, műfüves sportsátor a Hungarospa Sportcentrumban, a strandfürdő mellett. Foglalj online, vagy hívj, ha edzést kérnél.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
                  <IconCalendar /> Pályafoglalás
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  <IconPhone /> {CLUB.phone}
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/szoboszlo-open-2021.jpg"
              alt="A Szoboszló Open résztvevői csoportképen a salakpályán"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 55%" }}
            />
            <figcaption className="hero__caption">A Szoboszló Open résztvevői</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Röviden">
            {HERO_FACTS.map((f) => (
              <li className="fact" key={f.label}>
                <span className="fact__num">{f.num}</span>
                <span className="fact__label">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Courts and booking (the racket stands on the right) ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Salak nyáron, <em>sátor télen.</em>
          </h2>
          <p className="lead reveal">{SEASON_NOW}</p>

          <ul className="facility-grid">
            {FACILITIES.map((f) => (
              <li key={f.title} className="facility glass reveal">
                <h3 className="h3">{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>

          <div className="book glass reveal">
            <div className="book__main">
              <p className="label">
                <IconCalendar /> Online foglalás
              </p>
              <ol className="steps">
                {BOOKING_STEPS.map((s, i) => (
                  <li key={s.title}>
                    <span className="steps__n">{i + 1}</span>
                    <div>
                      <strong>{s.title}</strong>
                      <span>{keep(s.text)}</span>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="book__ctas">
                <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
                  Tovább a foglaláshoz <IconExternal />
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  <IconPhone /> Hívás
                </a>
              </div>
            </div>
            <div className="book__side">
              <p className="label">
                <IconClock /> Nyitvatartás
              </p>
              <ul className="hours">
                {HOURS.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <strong>{h.time}</strong>
                  </li>
                ))}
              </ul>
              <p className="label book__where">
                <IconPin /> Hol vagyunk
              </p>
              <p className="book__addr">
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {keep(CLUB.address)}
                </a>
                <span>{CLUB.entrance}</span>
              </p>
            </div>
          </div>

          <details className="rules glass reveal">
            <summary>
              <span className="label">Pályarend</span>
              <span className="rules__hint">Foglalás, lemondás, játékidő, cipő</span>
            </summary>
            <ul className="checks rules__list">
              {COURT_RULES.map((r) => (
                <li key={r}>
                  <IconCheck /> {r}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </section>

      {/* ——— Prices (the court lines stand on the left) ——— */}
      <section id="arak" className="section prices" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Árak · {PRICES.period}</p>
          <h2 id="arak-title" className="h2 reveal">
            Téli árak, <em>a sátorban.</em>
          </h2>

          <div className="price-pair">
            <div className="price-list glass reveal">
              <p className="label">
                <IconCalendar /> Pályabérlés
              </p>
              <ul>
                {PRICES.court.map((p) => (
                  <li key={p.label}>
                    <span>{p.label}</span>
                    <strong>{p.price}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="price-list glass reveal">
              <p className="label">
                <IconUsers /> Teniszedzés
              </p>
              <ul>
                {PRICES.coaching.map((p) => (
                  <li key={p.label}>
                    <span>{p.label}</span>
                    <strong>{p.price}</strong>
                  </li>
                ))}
              </ul>
              <p className="muted">{PRICES.coachingNote}</p>
            </div>
          </div>

          <div className="cards-head reveal">
            <p className="label">
              <IconCard /> Szezonkártyák
            </p>
            <p className="muted">{PRICES.cardsValid}</p>
          </div>
          <ul className="card-grid">
            {PRICES.cards.map((c) => (
              <li key={c.units} className={`season-card glass reveal${c.units === 80 ? " season-card--best" : ""}`}>
                <p className="season-card__units">
                  {c.units} <span>egység</span>
                </p>
                <p className="season-card__price">{c.price}</p>
                <dl className="season-card__per">
                  <div>
                    <dt>Egy pályaóra</dt>
                    <dd>{c.hour}</dd>
                  </div>
                  <div>
                    <dt>Egyéni, fejenként</dt>
                    <dd>{c.half}</dd>
                  </div>
                  <div>
                    <dt>Páros, fejenként</dt>
                    <dd>{fmt(c.single)} Ft</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
          <ul className="checks unit-rules reveal">
            {PRICES.cardRules.map((r) => (
              <li key={r}>
                <IconCheck /> {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Coaching (the court lines still stand on the left) ——— */}
      <section id="edzes" className="section coaching" aria-labelledby="edzes-title">
        <div className="container">
          <p className="eyebrow reveal">Edzés</p>
          <h2 id="edzes-title" className="h2 reveal">
            Két edző, <em>gyerekeknek és felnőtteknek.</em>
          </h2>
          <p className="lead reveal">Magánedzés legfeljebb két főnek, csoportos edzés háromtól, gyerekcsoportok és nyári tábor.</p>

          <ul className="coach-grid">
            {COACHES.map((c) => (
              <li key={c.name} className="coach glass reveal">
                <figure className="coach__photo">
                  <Image src={c.img} alt={c.name} fill sizes="(max-width: 900px) 40vw, 180px" style={{ objectFit: "cover" }} />
                </figure>
                <div className="coach__body">
                  <h3 className="h3">{c.name}</h3>
                  <ul className="chips">
                    {c.facts.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <p>{c.text}</p>
                  {c.partner && (
                    <p className="coach__partner">{c.partner}</p>
                  )}
                  <div className="coach__contact">
                    <a href={c.phoneHref} className="btn btn--accent btn--sm">
                      <IconPhone /> {c.phone}
                    </a>
                    <a href={`mailto:${c.email}`} className="coach__mail">
                      <IconMail /> {c.email}
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="kids">
            <figure className="snap kids__photo reveal reveal--img">
              <Image src="/img/tabor-2026.jpg" alt="A 2026-os tenisztábor gyerekei oklevelekkel a salakpályán" fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: "cover", objectPosition: "50% 40%" }} />
              <figcaption>Tenisztábor, 2026 augusztus</figcaption>
            </figure>
            <div className="kids__cards">
              <div className="kids__card glass reveal">
                <p className="label">
                  <IconUsers /> Gyerekcsoport
                </p>
                <p>{KIDS}</p>
                <a href={CLUB.phoneHref} className="btn btn--ghost btn--sm">
                  <IconPhone /> Időpontot kérek
                </a>
              </div>
              <div className="kids__card glass reveal">
                <p className="label">
                  <IconTrophy /> Nyári tábor
                </p>
                <p>{CAMP}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Piramis (the club's ball mark forms on the right of the heading) ——— */}
      <section id="piramis" className="section piramis" aria-labelledby="piramis-title">
        <div className="container">
          <p className="eyebrow reveal">Piramis verseny</p>
          <h2 id="piramis-title" className="h2 reveal">
            Hívd ki, <em>és lépj feljebb.</em>
          </h2>
          <p className="lead reveal">{PIRAMIS.intro}</p>

          <ul className="stats reveal" aria-label="A Piramis számokban">
            {PIRAMIS.stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>

          <div className="ladder glass reveal">
            <div className="ladder__figure" aria-hidden="true">
              {LADDER.map((count, row) => (
                <div key={row} className="ladder__row">
                  {Array.from({ length: count }, (_, col) => {
                    const you = row === YOU.row && col === YOU.col;
                    const target = !you && canChallenge(row, col);
                    return <span key={col} className={`ladder__dot${you ? " is-you" : ""}${target ? " is-target" : ""}`} />;
                  })}
                </div>
              ))}
            </div>
            <div className="ladder__text">
              <p className="label">Így működik</p>
              <p>{PIRAMIS.how}</p>
              <ul className="ladder__legend">
                <li>
                  <span className="ladder__key ladder__key--you" /> te
                </li>
                <li>
                  <span className="ladder__key ladder__key--target" /> akit kihívhatsz: azonos sorban vagy egy szinttel feljebb
                </li>
              </ul>
            </div>
          </div>

          <ul className="checks checks--grid piramis__rules reveal">
            {PIRAMIS.rules.map((r) => (
              <li key={r}>
                <IconCheck /> {r}
              </li>
            ))}
          </ul>

          <div className="edition glass reveal">
            <span className="tag">A legutóbbi kiírás: {PIRAMIS.last.year}</span>
            <p>{PIRAMIS.last.schedule}</p>
            <p className="muted">{PIRAMIS.last.costs}</p>
          </div>

          <div className="results">
            <article className="result glass reveal">
              <figure className="result__img">
                <Image src="/img/piramis-donto.jpg" alt="A 2025-ös Piramis döntő résztvevői a salakpályán" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
              </figure>
              <div className="result__body">
                <p className="label">
                  <IconTrophy /> 2025 · Döntő
                </p>
                <ol className="podium">
                  {PIRAMIS.final2025.map((n, i) => (
                    <li key={n}>
                      <span>{i + 1}.</span> {n}
                    </li>
                  ))}
                </ol>
              </div>
            </article>
            <article className="result glass reveal">
              <figure className="result__img">
                <Image src="/img/piramis-kisdonto.jpg" alt="A 2025-ös Piramis kisdöntő résztvevői a salakpályán" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
              </figure>
              <div className="result__body">
                <p className="label">
                  <IconTrophy /> 2025 · Kisdöntő
                </p>
                <ol className="podium">
                  {PIRAMIS.mini2025.map((n, i) => (
                    <li key={n}>
                      <span>{i + 1}.</span> {n}
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ——— Club life (the big ball spins behind) ——— */}
      <section id="klubelet" className="section club" aria-labelledby="klubelet-title">
        <div className="container">
          <p className="eyebrow reveal">Klubélet</p>
          <h2 id="klubelet-title" className="h2 reveal">
            Versenyek, csapatok, <em>barátok.</em>
          </h2>
          <p className="lead reveal">{TEAMS.text}</p>

          <ul className="event-grid">
            {EVENTS.map((e) => (
              <li key={e.title} className="event glass reveal">
                <figure className="event__img">
                  <Image src={e.img} alt={e.alt} fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover", objectPosition: "50% 35%" }} />
                </figure>
                <div className="event__body">
                  <h3 className="h3">{e.title}</h3>
                  <p>{e.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="club__grid">
            <div className="history glass reveal">
              <p className="label">
                <IconClock /> A sportcentrum
              </p>
              <ol className="history__list">
                {HISTORY.map((h) => (
                  <li key={h.year}>
                    <span className="history__year">{h.year}</span>
                    <p>{h.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="famous glass reveal">
              <p className="label">
                <IconTrophy /> Hírességeink
              </p>
              <ul className="famous__list">
                {FAMOUS.map((f) => (
                  <li key={f.name}>
                    <strong>{f.name}</strong>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="shop glass reveal">
            <figure className="shop__img">
              <Image src="/img/shop.jpg" alt="Ütők, húrok és kiegészítők a pálya melletti bolt falán" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
            </figure>
            <div className="shop__body">
              <p className="label">Shop és húrozás</p>
              <h3 className="h3">Minden a pálya mellett.</h3>
              <p>{SHOP.text}</p>
              <a href={CLUB.shop} className="btn btn--ghost btn--sm" target="_blank" rel="noopener noreferrer">
                Webshop <IconExternal />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Foglalj pályát, <em>vagy hívj minket.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Pálya, edzés, eszközbérlés</span>
                    <a href={CLUB.phoneHref}>{CLUB.phone}</a>
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
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {keep(CLUB.address)}
                    </a>
                    <span className="contact__name">
                      {CLUB.venue} · {CLUB.entrance}
                    </span>
                  </div>
                </li>
                <li>
                  <IconClock />
                  <div>
                    <span className="contact__label">Nyitvatartás</span>
                    {HOURS.map((h) => (
                      <span key={h.days} className="contact__line">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </div>
                </li>
                <li>
                  <IconFacebook />
                  <div>
                    <span className="contact__label">Facebook-csoport</span>
                    <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                      Szoboszlótenisz
                    </a>
                  </div>
                </li>
              </ul>
              <div className="visit__actions">
                <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
                  <IconCalendar /> Foglalás
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconArrow /> Útvonal
                </a>
              </div>
              <p className="visit__operator">Üzemeltető: {CLUB.operator}</p>
            </div>

            <div className="visit__form glass reveal">
              <p className="label">
                <IconMail /> Írj nekünk
              </p>
              <ContactForm />
            </div>
          </div>

          <div className="visit__map glass reveal">
            <iframe title="A Hungarospa Sportcentrum a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
