import Image from "next/image";
import { IconCalendar, IconCard, IconCheck, IconClock, IconExternal, IconGlobe, IconMail, IconPhone, IconPin, IconRain, IconTrophy, IconUsers } from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import {
  BOOKING_RULES,
  BOOKING_STEPS,
  CLUB,
  COACHES,
  COURT_PRICE,
  COURTS,
  GUEST_PRICE,
  MEMBERSHIP_NOTES,
  MEMBERSHIPS,
  OPEN,
  fmt,
  type Membership,
} from "@/lib/site";

const HERO_FACTS = [
  { num: "8–21", label: "minden nap nyitva" },
  { num: `${fmt(COURT_PRICE)} Ft`, label: "egy pályaóra nem tagoknak" },
  { num: "0 Ft", label: "pályadíj tagoknak, napi 2 óráig" },
];

const RULE_ICONS = [IconCalendar, IconRain, IconClock, IconCheck];

/** A membership's price in court hours (price ÷ the non-member hourly rate), drawn as dots. */
function HourDots({ m }: { m: Membership }) {
  const hours = Math.round(m.price / COURT_PRICE);
  return (
    <div className="hours-eq">
      <span className="hour-dots" aria-hidden="true">
        {Array.from({ length: hours }, (_, i) => (
          <i key={i} />
        ))}
      </span>
      <span className="hours-eq__text">
        <strong>{hours} pályaóra</strong> ára nem tagként
      </span>
    </div>
  );
}

export default function BHome() {
  const family = MEMBERSHIPS.filter((m) => m.family);
  const single = MEMBERSHIPS.filter((m) => !m.family);

  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">
              {CLUB.name} · {CLUB.region}
            </p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz Szigligeten, <em>minden nap 8-tól 21-ig.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Gondozott salakpályák nyárfák között, mellettük a klubház terasza. Foglalj online pár lépésben, vagy válts tagságot: ha mindenki tag a pályán, nincs pályadíj.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Pályafoglalás <IconExternal />
                </a>
                <a href="#tagsag" className="btn btn--ghost">
                  <IconUsers /> Családi tagság
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/palya-klubhaz.jpg"
              alt="Salakpálya magas fák között, a háttérben a klubház"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 62%" }}
            />
            <figcaption className="hero__caption">Szigliget · a pályák és a klubház</figcaption>
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

      {/* ——— Booking (the racket stands on the right) ——— */}
      <section id="foglalas" className="section booking" aria-labelledby="foglalas-title">
        <div className="container">
          <p className="eyebrow reveal">Foglalás</p>
          <h2 id="foglalas-title" className="h2 reveal">
            Három lépés <em>a salakig.</em>
          </h2>
          <p className="lead reveal">A klub saját rendszerében választasz időpontot, és kártyával fizetsz. Nem tagként egy pályaóra {fmt(COURT_PRICE)} forint.</p>

          <ol className="steps">
            {BOOKING_STEPS.map((s, i) => (
              <li key={s.title} className="step glass reveal">
                <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="rate glass reveal">
            <div className="rate__col">
              <p className="label">Nem tagoknak</p>
              <p className="rate__price">
                {fmt(COURT_PRICE)} Ft <small>/ pályaóra</small>
              </p>
              <p className="rate__note">Pályánként és óránként, 1–4 játékossal.</p>
            </div>
            <div className="rate__col rate__col--member">
              <p className="label">Tagoknak</p>
              <p className="rate__price">
                0 Ft <small>ha mindenki tag</small>
              </p>
              <p className="rate__note">
                Minden nem tag játékostárs után {fmt(GUEST_PRICE)} Ft óránként. <a href="#tagsag">Tagság →</a>
              </p>
            </div>
          </div>

          <div className="rules glass reveal">
            <p className="rules__title">
              <IconCard /> Jó tudni
            </p>
            <ul className="rules__list">
              {BOOKING_RULES.map((r, i) => {
                const I = RULE_ICONS[i % RULE_ICONS.length];
                return (
                  <li key={r}>
                    <I /> <span>{r}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="booking__foot reveal">
            <div className="booking-ctas">
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                Online pályafoglalás <IconExternal />
              </a>
              <a href={CLUB.register} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                Regisztráció <IconExternal />
              </a>
            </div>
            <p className="langs">
              <IconGlobe />
              <span>A foglalási oldal németül és angolul is elérhető:</span>
              <a href={CLUB.bookingDe} target="_blank" rel="noopener noreferrer" lang="de">
                Deutsch
              </a>
              <a href={CLUB.bookingEn} target="_blank" rel="noopener noreferrer" lang="en">
                English
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ——— Membership (the court stands on the left) ——— */}
      <section id="tagsag" className="section members" aria-labelledby="tagsag-title">
        <div className="container">
          <p className="eyebrow reveal">Klubtagság {MEMBERSHIP_NOTES.year}</p>
          <h2 id="tagsag-title" className="h2 reveal">
            Családi tagság: <em>a pálya a tiétek.</em>
          </h2>
          <p className="lead reveal">
            {MEMBERSHIP_NOTES.reply} Ha mindenki tag a pályán, nem fizettek pályadíjat. A pontok megmutatják, hány pályaóra árával egyenlő egy-egy tagság.
          </p>

          <ul className="member-cards member-cards--family">
            {family.map((m, i) => (
              <li key={m.id} className={`member-card glass reveal${i === 1 ? " member-card--main" : ""}`}>
                <p className="label">
                  <IconUsers /> {m.title}
                </p>
                <p className="member-card__who">{m.who}</p>
                <p className="member-card__price">
                  {fmt(m.price)} <small>Ft / év</small>
                </p>
                <HourDots m={m} />
              </li>
            ))}
          </ul>

          <ul className="member-cards member-cards--single">
            {single.map((m) => (
              <li key={m.id} className="member-card member-card--small glass reveal">
                <p className="label">{m.title}</p>
                <p className="member-card__who">{m.who}</p>
                <p className="member-card__price">
                  {fmt(m.price)} <small>Ft</small>
                </p>
                <HourDots m={m} />
              </li>
            ))}
          </ul>

          <div className="member-notes glass reveal">
            <ul className="checks">
              <li>
                <IconCheck /> {MEMBERSHIP_NOTES.daily}
              </li>
              <li>
                <IconCheck /> {MEMBERSHIP_NOTES.valid}
              </li>
              <li>
                <IconCheck /> {MEMBERSHIP_NOTES.kids}
              </li>
            </ul>
            <div className="member-notes__ctas">
              <a href={CLUB.membershipShop} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                Tagságot veszek <IconExternal />
              </a>
              <a href="#urlap" className="btn btn--ghost">
                <IconMail /> Kérdésem van
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Courts and clubhouse (the club's mark forms on the right of the heading) ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák és klubház</p>
          <h2 id="palyak-title" className="h2 reveal">
            Salak, nyárfák, <em>klubház.</em>
          </h2>
          <p className="lead reveal">{COURTS.text}</p>

          <ul className="checks checks--grid reveal">
            {COURTS.points.map((p) => (
              <li key={p}>
                <IconCheck /> {p}
              </li>
            ))}
          </ul>

          <div className="courts__grid">
            <figure className="snap courts__big reveal reveal--img">
              <Image src="/img/halo-klubhaz.jpg" alt="A háló a salakpályán, mögötte a klubház a fák között" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover", objectPosition: "50% 50%" }} />
            </figure>
            <figure className="snap reveal reveal--img">
              <Image src="/img/klubhaz-terasz.jpg" alt="A klubház terasza asztalokkal és napernyőkkel" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover", objectPosition: "50% 60%" }} />
            </figure>
            <figure className="snap reveal reveal--img">
              <Image src="/img/palya-fak.jpg" alt="Salakpálya a fák árnyékában, magas nyárfákkal" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>

          <div className="visitors glass reveal">
            <div>
              <p className="label">
                <IconUsers /> Kísérőknek és családoknak
              </p>
              <p>{COURTS.visitors}</p>
            </div>
            <a href={CLUB.rules} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
              Házirend <IconExternal />
            </a>
          </div>
        </div>
      </section>

      {/* ——— Coaches (the mark still stands on the right) ——— */}
      <section id="edzok" className="section coaches" aria-labelledby="edzok-title">
        <div className="container">
          <p className="eyebrow reveal">Edzők</p>
          <h2 id="edzok-title" className="h2 reveal">
            Személyi edzés <em>a klub edzőivel.</em>
          </h2>
          <p className="lead reveal">A klub két személyi edzője. Időpontért hívd őket közvetlenül.</p>

          <ul className="coach-cards">
            {COACHES.map((c) => (
              <li key={c.name} className="coach-card glass reveal">
                <span className="coach-card__mono" aria-hidden="true">
                  {c.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
                <div>
                  <p className="label">Személyi edző</p>
                  <h3 className="h3">{c.name}</h3>
                  <a href={c.phoneHref} className="coach-card__phone">
                    {c.phone}
                  </a>
                </div>
                <a href={c.phoneHref} className="btn btn--accent btn--sm coach-card__btn">
                  <IconPhone /> Hívom
                </a>
              </li>
            ))}
          </ul>

          <figure className="snap coaches__photo reveal reveal--img">
            <Image src="/img/palya-halo.jpg" alt="Két salakpálya hálóval, fák között, kék ég alatt" fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: "cover", objectPosition: "50% 60%" }} />
          </figure>
        </div>
      </section>

      {/* ——— Szigliget Open (the big ball spins behind) ——— */}
      <section id="open" className="section open-sec" aria-labelledby="open-title">
        <div className="container">
          <p className="eyebrow reveal">Szigliget Open · a legutóbbi verseny</p>
          <h2 id="open-title" className="h2 reveal">
            Szigliget Open <em>{OPEN.dates}</em>
          </h2>
          <p className="lead reveal">A klub nyári versenye felnőtteknek, ifjúságiaknak és gyerekeknek. {OPEN.kidsFrom}. Így szólt a {OPEN.year}-es kiírás.</p>

          <div className="open-grid">
            <div className="open-card glass reveal">
              <p className="label">
                <IconTrophy /> Versenyszámok
              </p>
              <ul className="events">
                {OPEN.events.map((e) => (
                  <li key={e.title}>
                    <strong>{e.title}</strong>
                    {e.detail && <span>{e.detail}</span>}
                  </li>
                ))}
              </ul>
            </div>

            <div className="open-card glass reveal">
              <p className="label">
                <IconCard /> Nevezési díj
              </p>
              <ul className="fees">
                {OPEN.fees.map((f) => (
                  <li key={f.label}>
                    <span>{f.label}</span>
                    <strong>{f.price}</strong>
                  </li>
                ))}
              </ul>
              <p className="label open-card__sub">
                <IconCalendar /> Nevezési határidő
              </p>
              <ul className="entry">
                {OPEN.entry.map((e) => (
                  <li key={e.label}>
                    <strong>{e.label}:</strong> {e.value}
                  </li>
                ))}
              </ul>
              <p className="muted">{OPEN.preEntry}</p>
            </div>
          </div>

          <div className="open-more">
            <div className="open-card glass reveal">
              <p className="label">Játékrend</p>
              <p className="open-card__text">{OPEN.format}</p>
              <ul className="checks">
                {OPEN.extras.map((x) => (
                  <li key={x}>
                    <IconCheck /> {x}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="snap open-photo reveal reveal--img">
              <Image src="/img/gyerekek-csoport.jpg" alt="Gyerekek teniszütőkkel csoportképen a salakpályán" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover", objectPosition: "50% 45%" }} />
              <figcaption>Gyerekek a szigligeti salakon (archív fotó)</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Hívj, írj, <em>vagy foglalj.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Telefon</span>
                    <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                    <span className="contact__name">{CLUB.operators}</span>
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
                  <IconClock />
                  <div>
                    <span className="contact__label">Nyitvatartás</span>
                    <span className="contact__line">{CLUB.hours}</span>
                  </div>
                </li>
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Postacím</span>
                    <span className="contact__name">{CLUB.legal}</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address}
                    </a>
                  </div>
                </li>
              </ul>
              <div className="visit__actions">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> Hívás
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconPin /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__form glass reveal">
              <p className="label">
                <IconMail /> Írj nekünk
              </p>
              <ContactForm />
            </div>
          </div>

          <div className="visit__map glass reveal">
            <iframe title="Szigliget, Réhelyi út a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
