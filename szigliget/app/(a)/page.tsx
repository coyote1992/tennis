import Image from "next/image";
import { HoursCalc } from "@/components/a/HoursCalc";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
import {
  BOOKING_RULES,
  BOOKING_STEPS,
  CLUB,
  COACHES,
  COURTS,
  COURT_PRICE,
  GUEST_PRICE,
  MEMBERSHIP_NOTES,
  OPEN,
  fmt,
} from "@/lib/site";

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`label${light ? " label--light" : ""}`}>{children}</p>;
}

function BookingButton({ children = "Pályát foglalok" }: { children?: React.ReactNode }) {
  return (
    <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
      {children} <Icon name="arrowUpRight" size={17} />
    </a>
  );
}

const ARCHIVE = [
  { src: "/img/open-serlegek.jpg", alt: "Serlegek egy asztalon", w: 639, h: 480 },
  { src: "/img/open-meccs.jpg", alt: "Mérkőzés a salakpályán, a háttérben a palánkok és a fák", w: 638, h: 480 },
  { src: "/img/open-nosztalgia.jpg", alt: "Résztvevők fehér, régies öltözékben", w: 640, h: 426 },
  { src: "/img/open-csapat.jpg", alt: "A résztvevők csoportképe a klubház előtt", w: 640, h: 480 },
  { src: "/img/open-meccs-2.jpg", alt: "Játék a salakpályán", w: 640, h: 479 },
];

export default function Page() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <Image
          src="/img/palya-klubhaz.jpg"
          alt="Salakpálya a fák árnyékában, a háttérben a klubház"
          fill
          priority
          sizes="100vw"
          className="hero__img"
        />
        <div className="hero__shade" />
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="hero__kicker">
              {CLUB.name}
              <span className="hero__kicker-more"> · {CLUB.region}</span>
            </p>
            <h1 id="hero-title" className="hero__title">
              Salakpályák Szigligeten.
              <em>
                Foglalj online, <span className="nowrap">minden nap 8-tól 21-ig.</span>
              </em>
            </h1>
            <p className="hero__lead">
              Gondozott pályák nyárfák között, mellettük a klubház teraszával. Nem tagként {fmt(COURT_PRICE)} Ft egy óra. Tagként nincs
              pályadíj, ha mindenki tag a pályán.
            </p>
            <div className="btn-row">
              <BookingButton />
              <a href="#tagsag" className="btn btn--ghost">
                Családi tagság
              </a>
            </div>
            <p className="hero__phone">
              <a href={CLUB.phoneHref}>
                <Icon name="phone" size={16} /> {CLUB.phone}
              </a>
              <span>{CLUB.operators}</span>
            </p>
          </div>
          <Image src="/img/logo.png" alt="" width={608} height={532} className="hero__badge" sizes="(max-width: 900px) 120px, 220px" />
        </div>
      </section>

      {/* ——— foglalás ——— */}
      <section id="foglalas" className="band" aria-labelledby="foglalas-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Foglalás</Label>
              <h2 id="foglalas-title" className="title">
                Három lépés, <em>és tiéd a pálya.</em>
              </h2>
            </div>
            <p className="intro">
              Pályát a klub online rendszerében foglalsz, bankkártyás fizetéssel. A foglalási oldal magyarul, németül és angolul is
              használható.
            </p>
          </div>

          <div className="book">
            <ol className="steps reveal">
              {BOOKING_STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="steps__n">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="price reveal" aria-label="Pályadíj">
              <p className="price__label">Pályadíj</p>
              <p className="price__big">
                {fmt(COURT_PRICE)} Ft <span>/ óra / pálya</span>
              </p>
              <p className="price__sub">nem tagoknak, egy foglalás 1–4 játékosra szól</p>
              <ul className="price__list">
                <li>
                  <b>0 Ft</b> tagoknak, ha mindenki tag a pályán
                </li>
                <li>
                  <b>+{fmt(GUEST_PRICE)} Ft / óra</b> minden nem tag játékostárs után
                </li>
              </ul>
              <BookingButton>Pályát foglalok</BookingButton>
              <p className="price__lang">
                <a href={CLUB.register} target="_blank" rel="noopener noreferrer">
                  Regisztráció
                </a>
                <span aria-hidden="true">·</span>
                <a href={CLUB.bookingDe} target="_blank" rel="noopener noreferrer" lang="de">
                  Auf Deutsch buchen
                </a>
                <span aria-hidden="true">·</span>
                <a href={CLUB.bookingEn} target="_blank" rel="noopener noreferrer" lang="en">
                  Book in English
                </a>
              </p>
            </aside>
          </div>

          <div className="hour reveal" aria-label="Egy óra a pályán">
            <p className="hour__title">Egy óra a pályán</p>
            <div className="hour__bar" aria-hidden="true">
              <span className="hour__play">55 perc játék</span>
              <span className="hour__care" />
            </div>
            <div className="hour__ticks" aria-hidden="true">
              <span>:00</span>
              <span className="hour__tick55">:55</span>
              <span>:00</span>
            </div>
            <p className="hour__legend">
              Egész órakor kezdesz, az óra 55. percéig játszol, az utolsó öt percben locsolod és lehúzod a pályát a következőknek.
            </p>
          </div>

          <ul className="rules reveal">
            {BOOKING_RULES.map((r) => (
              <li key={r}>
                <Icon name="check" size={17} />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— tagság ——— */}
      <section id="tagsag" className="band band--lake" aria-labelledby="tagsag-title">
        <div className="container">
          <div className="member__head reveal">
            <div>
              <Label>Tagság {MEMBERSHIP_NOTES.year}</Label>
              <h2 id="tagsag-title" className="title">
                Egész szezon, <em>az egész családnak.</em>
              </h2>
            </div>
            <div className="member__intro">
              <p className="member__quote">{MEMBERSHIP_NOTES.reply}</p>
              <p>
                A családi tagság két felnőttnek és legfeljebb három gyereknek szól. Tagként naponta két órát foglalhattok tagi áron, és
                ha mindenki tag a pályán, nincs pályadíj.
              </p>
            </div>
          </div>
          <div className="reveal">
            <HoursCalc />
          </div>
          <div className="member__foot reveal">
            <a href={CLUB.membershipShop} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
              Tagságot veszek <Icon name="arrowUpRight" size={17} />
            </a>
            <p>A tagság a klub oldalán, regisztráció után, bankkártyával vásárolható meg.</p>
          </div>
        </div>
      </section>

      {/* ——— pályák ——— */}
      <section id="palyak" className="band" aria-labelledby="palyak-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Pályák és klubház</Label>
              <h2 id="palyak-title" className="title">
                Salak, nyárfák, <em>klubház.</em>
              </h2>
            </div>
            <p className="intro">{COURTS.text}</p>
          </div>
          <div className="mosaic reveal">
            <div className="mosaic__item mosaic__item--a">
              <Image src="/img/halo-klubhaz.jpg" alt="A háló a salakpályán, mögötte a klubház" fill sizes="(max-width: 900px) 100vw, 58vw" />
            </div>
            <div className="mosaic__item mosaic__item--b">
              <Image src="/img/klubhaz-terasz.jpg" alt="A klubház terasza napernyőkkel és asztalokkal" fill sizes="(max-width: 900px) 50vw, 26vw" />
            </div>
            <div className="mosaic__item mosaic__item--c">
              <Image src="/img/palya-felhok.jpg" alt="Salakpálya nyári égbolt alatt, magas nyárfákkal" fill sizes="(max-width: 900px) 50vw, 16vw" />
            </div>
            <div className="mosaic__item mosaic__item--d">
              <Image src="/img/palya-fak.jpg" alt="A pálya a fák árnyékában, délelőtt" fill sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
          </div>
          <div className="courtinfo reveal">
            <ul className="ticks">
              {COURTS.points.map((p) => (
                <li key={p}>
                  <Icon name="check" size={17} />
                  {p}
                </li>
              ))}
            </ul>
            <div className="courtinfo__box">
              <p className="courtinfo__hours">
                <Icon name="clock" size={18} /> {CLUB.hours}
              </p>
              <p>{COURTS.visitors}</p>
              <a href={CLUB.rules} className="link" target="_blank" rel="noopener noreferrer">
                A teljes házirend <Icon name="arrowUpRight" size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— edzők ——— */}
      <section id="edzok" className="band band--clay" aria-labelledby="edzok-title">
        <div className="container coach">
          <div className="coach__text reveal">
            <Label>Edzők</Label>
            <h2 id="edzok-title" className="title">
              Edzés? <em>Hívd az edzőt.</em>
            </h2>
            <p className="intro">
              Két személyi edzőnk van. Az edzés időpontját és részleteit közvetlenül velük beszéld meg, telefonon.
            </p>
          </div>
          <ul className="coaches reveal">
            {COACHES.map((c) => (
              <li key={c.name} className="coachcard">
                <p className="coachcard__role">Személyi edző</p>
                <p className="coachcard__name">{c.name}</p>
                <a href={c.phoneHref} className="coachcard__call">
                  <Icon name="phone" size={17} /> {c.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— szigliget open ——— */}
      <section id="open" className="band band--paper2" aria-labelledby="open-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Szigliget Open</Label>
              <h2 id="open-title" className="title">
                Augusztusi verseny, <em>Player&apos;s Partyval.</em>
              </h2>
            </div>
            <p className="intro">
              A klub nyári versenye felnőtteknek, ifjúságiaknak és gyerekeknek. A legutóbbi kiírás: {OPEN.dates}, gyerekeknek
              augusztus 6-tól.
            </p>
          </div>

          <div className="open">
            <article className="poster reveal" aria-label={`Szigliget Open ${OPEN.year}, a kiírás`}>
              <header className="poster__top">
                <Image src="/img/logo.png" alt="" width={608} height={532} className="poster__logo" sizes="72px" />
                <div>
                  <p className="poster__kicker">Szigliget Open</p>
                  <p className="poster__date">{OPEN.dates}</p>
                  <p className="poster__kids">{OPEN.kidsFrom}</p>
                </div>
              </header>
              <div className="poster__grid">
                <div>
                  <h3 className="poster__h">Versenyszámok</h3>
                  <ul className="poster__events">
                    {OPEN.events.map((e) => (
                      <li key={e.title}>
                        <b>{e.title}</b>
                        {e.detail && <span>{e.detail}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="poster__h">Nevezési díj</h3>
                  <dl className="poster__fees">
                    {OPEN.fees.map((f) => (
                      <div key={f.label}>
                        <dt>{f.label}</dt>
                        <dd>{f.price}</dd>
                      </div>
                    ))}
                  </dl>
                  <h3 className="poster__h">Nevezési határidő</h3>
                  <dl className="poster__entry">
                    {OPEN.entry.map((f) => (
                      <div key={f.label}>
                        <dt>{f.label}</dt>
                        <dd>{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <p className="poster__format">{OPEN.format}</p>
            </article>

            <div className="open__side reveal">
              <ul className="open__extras">
                {OPEN.extras.map((x) => (
                  <li key={x}>
                    <Icon name="ball" size={18} />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="open__pre">{OPEN.preEntry}</p>
              <div className="btn-row">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <Icon name="phone" size={17} /> {CLUB.phone}
                </a>
                <a href="#urlap" className="btn btn--ghost">
                  Írok a klubnak
                </a>
              </div>
            </div>
          </div>

          <figure className="archive reveal">
            <div className="archive__strip">
              {ARCHIVE.map((p) => (
                <div key={p.src} className="archive__item">
                  <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(max-width: 640px) 70vw, 20vw" />
                </div>
              ))}
            </div>
            <figcaption>Képek a korábbi Szigliget Openekről, a klub galériájából (2012–2016).</figcaption>
          </figure>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band dark" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <Label light>Kapcsolat</Label>
            <h2 id="kapcsolat-title" className="title">
              Szigliget, <em>Balaton-felvidék.</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                  <small>{CLUB.operators}</small>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={CLUB.emailHref}>{CLUB.email}</a>
                </dd>
              </div>
              <div>
                <dt>Nyitvatartás</dt>
                <dd>
                  {CLUB.hours}
                  <small>A nyitvatartás szezonálisan változhat.</small>
                </dd>
              </div>
              <div>
                <dt>Postacím</dt>
                <dd>
                  {CLUB.address}
                  <small>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Megnyitás a Google Térképen
                    </a>
                  </small>
                </dd>
              </div>
            </dl>
            <div className="map">
              <iframe src={CLUB.mapsEmbed} title="Szigliget, Réhelyi út a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="visit__form reveal">
            <h3 className="subtitle">Írj nekünk</h3>
            <p>Foglalás, tagság, edzés vagy verseny: a levél a klubhoz megy.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
