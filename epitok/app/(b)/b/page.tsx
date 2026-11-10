import Image from "next/image";
import {
  IconArrow,
  IconCalendar,
  IconCheck,
  IconClock,
  IconFacebook,
  IconMail,
  IconPhone,
  IconPin,
  IconTrophy,
  IconUsers,
} from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import {
  CLUB,
  EVENTS,
  HISTORY,
  MORNING,
  PRICES,
  VENUE,
  VISIT,
  fmt,
} from "@/lib/site";

/** keep phone numbers and times on one line */
const nb = (t: string) => t.replace(/ /g, " ");
const ft = (n: number) => `${fmt(n)} Ft`;
/** "Hétköznap 9–14" → "Hétköznap 9–14 óra" with the hours kept together */
const slot = (t: string) => t.replace(/ (\d)/, " $1");
/** no line break right after a hyphen or a dash */
const join = (t: string) => t.replace(/([-–])/g, "$1⁠");

const ARCHIVE = [
  {
    src: "/img/tortenet-kepeslap.jpg",
    alt: "Régi képeslap: hölgyek hosszú ruhában teniszeznek a sporttelep pavilonja előtt",
    cap: "Budapest-Tisztviselőtelep, Sporttelep – képeslap 1900 tájáról",
  },
  {
    src: "/img/tortenet-rajz.jpg",
    alt: "Korabeli rajz a Népligeti Sporttelepről, teniszezőkkel a pavilon előtt",
    cap: "Népligeti Sporttelep, korabeli rajz",
  },
  {
    src: "/img/tortenet-noi-csapat.jpg",
    alt: "Női teniszcsapat fehérben, két vezetővel a pályán",
    cap: "A Gyárépítők I. osztályú női csapata",
  },
  {
    src: "/img/tortenet-1960.jpg",
    alt: "Öt férfi a háló mellett a népligeti pályán",
    cap: "Engel Antal, Forró Mihály, Szigeti Ottó, Katona Zoltán, Gulyás István – 1960-as évek eleje",
  },
  {
    src: "/img/tortenet-merkozes.jpg",
    alt: "Bajnoki mérkőzés a pályákon, bírói székkel és nézőkkel",
    cap: "Bajnoki mérkőzés, 60-as évek",
  },
  {
    src: "/img/tortenet-nezok.jpg",
    alt: "Nézők padokon ülve figyelnek egy mérkőzést",
    cap: "Nézők a pálya mellett",
  },
  {
    src: "/img/tortenet-palyaepites.jpg",
    alt: "Munkások ássák egy új pálya alapját a fák között",
    cap: "A 9–10-es pálya alapozása, 60-as évek",
  },
  {
    src: "/img/tortenet-csapatkep.jpg",
    alt: "Fehérbe öltözött csapat sorban a klubház előtti pályán",
    cap: "Csapatkép a klubház előtt",
  },
  {
    src: "/img/tortenet-szines.jpg",
    alt: "Az Építők SC csapata a klubház előtt, színes felvétel",
    cap: "Az első színes csapatkép: Építők SC, a 70-es évek közepe",
  },
  {
    src: "/img/archiv-uj-klubhaz.jpg",
    alt: "Fekete-fehér felvétel egy újabb, pavilonszerű klubházról",
    cap: "Az újabb klubház, archív felvétel",
  },
];

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">{CLUB.name} · Népliget</p>
            <h1 id="hero-title" className="h1 reveal">
              12 salakpálya a Népligetben, <em>1896 óta.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">{VENUE.intro}</p>
              <div className="hero__ctas">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> {nb(CLUB.phone)}
                </a>
                <a href="#arak" className="btn btn--ghost">
                  Árak <IconArrow />
                </a>
              </div>
            </div>
            <p className="hero__note reveal">
              <IconClock />{" "}
              <span>
                {VENUE.season}, {join(VENUE.hours.toLowerCase())}
              </span>
            </p>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/klubhaz-szeles.jpg"
              alt="A népligeti klubház favázas homlokzata a fák között"
              fill
              priority
              sizes="(max-width: 1296px) 100vw, 1200px"
            />
            <figcaption className="hero__caption">
              A klubház a Népligetben
            </figcaption>
          </figure>

          <ul className="facts reveal">
            {VENUE.facts.map((f) => (
              <li key={f.label} className="fact">
                <span className="fact__num">{f.value}</span>
                <span className="fact__label">{join(f.label)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Pályák ——— */}
      <section id="palyak" className="section" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Tizenkét salakpálya, <em>egy park közepén.</em>
          </h2>
          <p className="lead reveal">
            {VENUE.season}, {join(VENUE.hours.toLowerCase())}. Pályát telefonon vagy{" "}
            {join("e-mailben")} foglalhatsz {CLUB.contact}nál.
          </p>

          <div className="grounds">
            <figure className="grounds__main reveal reveal--img">
              <Image
                src="/img/palyak.jpg"
                alt="Salakos pályák, a háttérben a klubházzal és a fákkal"
                fill
                sizes="(max-width: 900px) 100vw, 560px"
              />
              <figcaption className="hero__caption">
                Salakpályák a klubház előtt
              </figcaption>
            </figure>
            <figure className="snap reveal reveal--img">
              <Image
                src="/img/palyak-fak.jpg"
                alt="Salakos pályák a Népliget fái között"
                fill
                sizes="(max-width: 900px) 50vw, 300px"
              />
            </figure>
            <figure className="snap reveal reveal--img">
              <Image
                src="/img/klubhaz-osz.jpg"
                alt="A klubház és a pályák ősszel, sárguló fák között"
                fill
                sizes="(max-width: 900px) 50vw, 300px"
              />
              <figcaption>A klubház ősszel</figcaption>
            </figure>
          </div>

          <div className="ground-info">
            <article className="infocard glass reveal">
              <p className="label">
                <IconCalendar /> Szezon
              </p>
              <p className="infocard__big">{VENUE.season}</p>
              <p className="muted">Mind a 12 pálya salakos.</p>
            </article>
            <article className="infocard glass reveal">
              <p className="label">
                <IconClock /> Nyitva
              </p>
              <p className="infocard__big">{nb(VENUE.hours)}</p>
              <p className="muted">A szezonban minden nap.</p>
            </article>
            <article className="infocard glass reveal">
              <p className="label">
                <IconPhone /> Foglalás
              </p>
              <p className="infocard__big">
                <a href={CLUB.phoneHref}>{nb(CLUB.phone)}</a>
              </p>
              <p className="muted">
                {CLUB.contact} · <a href={CLUB.emailHref}>{CLUB.email}</a>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ——— Árak ——— */}
      <section id="arak" className="section" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Árak</p>
          <h2 id="arak-title" className="h2 reveal">
            Alkalmanként <em>vagy egész idényre.</em>
          </h2>
          <p className="lead reveal">
            A klub {PRICES.title.toLowerCase().replace("árlista", "árlistája")}:
            óradíj egy alkalomra, vagy fix heti óra az egész szezonra.
          </p>

          <div className="pricing">
            <article className="price-card glass reveal">
              <div className="price-card__head">
                <p className="label">
                  <IconClock /> Egy alkalomra
                </p>
                <span className="tag">{PRICES.title}</span>
              </div>
              <ul className="hours">
                {PRICES.single.map((p) => (
                  <li key={p.slot}>
                    <span>{slot(p.slot)}</span>
                    <strong>{ft(p.price)}</strong>
                  </li>
                ))}
              </ul>
              <p className="muted">{PRICES.singleNote}</p>
            </article>
            <article className="price-card glass reveal">
              <div className="price-card__head">
                <p className="label">
                  <IconCalendar /> Egész idényre
                </p>
                <span className="tag">{PRICES.title}</span>
              </div>
              <ul className="hours">
                {PRICES.season.map((p) => (
                  <li key={p.slot}>
                    <span>{slot(p.slot)}</span>
                    <strong>{ft(p.price)}</strong>
                  </li>
                ))}
              </ul>
              <p className="muted">{PRICES.seasonNote}</p>
            </article>
          </div>

          <aside className="callcard glass reveal">
            <div>
              <p className="label">
                <IconPhone /> Pályafoglalás
              </p>
              <p className="callcard__text">
                Telefonon vagy {join("e-mailben")}, {CLUB.contact}nál. A tenisztelepen{" "}
                {CLUB.site.name} ({nb(CLUB.site.phone)}).
              </p>
            </div>
            <div className="callcard__ctas">
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <IconPhone /> {nb(CLUB.phone)}
              </a>
              <a href={CLUB.emailHref} className="btn btn--ghost">
                <IconMail /> E-mail
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ——— Délelőtti bérlet ——— */}
      <section
        id="delelott"
        className="section section--tight"
        aria-labelledby="delelott-title"
      >
        <div className="container">
          <p className="eyebrow reveal">Délelőtti bérlet</p>
          <h2 id="delelott-title" className="h2 reveal">
            Hétköznap délelőtt, <em>korlátlanul.</em>
          </h2>

          <div className="morning">
            <article className="morning__card glass reveal">
              <span className="tag tag--accent">
                Idénybérlet · {PRICES.title}
              </span>
              <p className="morning__price">
                <strong>{ft(MORNING.price)}</strong>
                <span>egész idényre</span>
              </p>
              <p className="morning__when">
                <IconClock /> {nb(MORNING.when)}
              </p>
              <p className="morning__how">{MORNING.how}</p>
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <IconPhone /> Érdeklődés: {nb(CLUB.phone)}
              </a>
            </article>

            <figure className="morning__voice glass reveal">
              <p className="label">
                <IconUsers /> Kinek jó?
              </p>
              <blockquote>
                <p>{MORNING.who}</p>
                <p>{MORNING.fit}</p>
              </blockquote>
              <figcaption>
                {CLUB.contact} szerint, az Építők Teniszklubtól
              </figcaption>
            </figure>
          </div>

          <div className="ladder glass reveal">
            <p className="label ladder__title" id="ladder-title">
              <IconCalendar /> A délelőtti sáv díjai egymás mellett
            </p>
            <div role="table" aria-labelledby="ladder-title">
              <div className="ladder__row" role="row">
                <span role="cell">Egy alkalom, hétköznap 9–14</span>
                <strong role="cell">{ft(PRICES.single[1].price)}</strong>
                <span role="cell" className="muted">
                  óránként
                </span>
              </div>
              <div className="ladder__row" role="row">
                <span role="cell">Fix heti óra, hétköznap 9–14</span>
                <strong role="cell">{ft(PRICES.season[1].price)}</strong>
                <span role="cell" className="muted">
                  egész idényre
                </span>
              </div>
              <div className="ladder__row ladder__row--hi" role="row">
                <span role="cell">Korlátlan délelőtti bérlet, 7–14</span>
                <strong role="cell">{ft(MORNING.price)}</strong>
                <span role="cell" className="muted">
                  egész idényre, ha van szabad pálya
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Klubtörténet ——— */}
      <section
        id="tortenet"
        className="section"
        aria-labelledby="tortenet-title"
      >
        <div className="container">
          <p className="eyebrow reveal">Klubtörténet</p>
          <h2 id="tortenet-title" className="h2 reveal">
            A park egyidős <em>a sporttelepével.</em>
          </h2>
          <p className="lead reveal">{HISTORY.intro}</p>

          <ol className="timeline reveal">
            {HISTORY.milestones.map((m) => (
              <li key={m.year} className="timeline__item">
                <span className="timeline__year">{m.year}</span>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>

          <div
            className="archive reveal"
            role="region"
            aria-label="Archív fotók a népligeti sporttelepről"
            tabIndex={0}
          >
            {ARCHIVE.map((a) => (
              <figure key={a.src} className="archive__item">
                <div className="archive__img">
                  <Image
                    src={a.src}
                    alt={a.alt}
                    fill
                    sizes="(max-width: 900px) 70vw, 340px"
                  />
                </div>
                <figcaption>{a.cap}</figcaption>
              </figure>
            ))}
          </div>
          <p className="muted archive__hint">Húzd oldalra az archív képeket.</p>

          <article className="itf glass reveal">
            <div className="itf__head">
              <p className="label">
                <IconTrophy /> {HISTORY.itf.title}
              </p>
              <p className="itf__big">
                <strong>21</strong>
                <span>torna a Népligetben, 1994–2014</span>
              </p>
            </div>
            <p className="itf__text">{HISTORY.itf.text}</p>
            <p className="muted">{HISTORY.itf.growth}</p>
            <div className="itf__lists">
              <div>
                <p className="itf__sub">
                  Később a világ élmezőnyében – férfiak
                </p>
                <ul className="checks">
                  {HISTORY.itf.men.map((p) => (
                    <li key={p}>
                      <IconCheck />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="itf__sub">Később a világ élmezőnyében – nők</p>
                <ul className="checks">
                  {HISTORY.itf.women.map((p) => (
                    <li key={p}>
                      <IconCheck />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="itf__hu">{HISTORY.itf.hungarians}</p>
          </article>

          <figure className="painting reveal reveal--img">
            <Image
              src="/img/tortenet-festmeny.jpg"
              alt="Festmény a népligeti klubházról és a pályákról"
              fill
              sizes="(max-width: 1296px) 100vw, 1200px"
            />
            <figcaption className="hero__caption">
              A klubház egy festményen
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ——— Események ——— */}
      <section
        id="esemenyek"
        className="section"
        aria-labelledby="esemenyek-title"
      >
        <div className="container">
          <p className="eyebrow reveal">Események</p>
          <h2 id="esemenyek-title" className="h2 reveal">
            Klubversenyek, <em>klubélet.</em>
          </h2>
          <p className="lead reveal">{EVENTS.intro}</p>

          <ul className="events">
            {EVENTS.list.map((e) => (
              <li key={e.title} className="event glass reveal">
                <span className="tag">{e.date}</span>
                <h3 className="h3">{e.title}</h3>
                <p>{e.text}</p>
              </li>
            ))}
          </ul>

          <div className="events__foot">
            <figure className="snap events__photo reveal reveal--img">
              <Image
                src="/img/klubhaz-kozosseg.jpg"
                alt="Sok ember a klubház előtt, napernyők alatt"
                fill
                sizes="(max-width: 900px) 100vw, 780px"
              />
              <figcaption>Klubélet a klubház előtt</figcaption>
            </figure>
            <figure className="snap events__prize reveal reveal--img">
              <Image
                src="/img/dijak.jpg"
                alt="Építők Kupa feliratú serlegek és csokoládék egy asztalon"
                fill
                sizes="(max-width: 900px) 100vw, 400px"
              />
              <figcaption>Díjak egy versenyre</figcaption>
            </figure>
            <a
              href={CLUB.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost events__fb"
            >
              <IconFacebook /> Hírek a Facebook-csoportban
            </a>
          </div>
        </div>
      </section>

      {/* ——— Kapcsolat ——— */}
      <section
        id="kapcsolat"
        className="section final"
        aria-labelledby="kapcsolat-title"
      >
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Gyere ki <em>a Népligetbe.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Pályafoglalás</span>
                    <a href={CLUB.phoneHref}>{nb(CLUB.phone)}</a>
                    <span className="contact__name">{CLUB.contact}</span>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Tenisztelep</span>
                    <a href={CLUB.site.phoneHref}>{nb(CLUB.site.phone)}</a>
                    <span className="contact__name">{CLUB.site.name}</span>
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
                    <a
                      href={CLUB.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {CLUB.address}
                    </a>
                    <span className="contact__line">{VISIT.transit}</span>
                  </div>
                </li>
                <li>
                  <IconClock />
                  <div>
                    <span className="contact__label">Szezon</span>
                    <span className="contact__line">
                      {VENUE.season}, {join(VENUE.hours.toLowerCase())}
                    </span>
                  </div>
                </li>
              </ul>
              <div className="visit__actions">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> Hívás
                </a>
                <a
                  href={CLUB.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  <IconArrow /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__form glass reveal">
              <p className="label">
                <IconMail /> Írj nekünk
              </p>
              <p className="muted">
                Pálya, bérlet vagy verseny: a levél {CLUB.contact}hoz megy.
              </p>
              <ContactForm />
            </div>
          </div>

          <div className="car glass reveal">
            <p className="label">
              <IconPin /> Autóval
            </p>
            <p>{VISIT.car}</p>
          </div>

          <div className="visit__map glass reveal">
            <iframe
              title="Az Építők Teniszklub a Népligetben, a térképen"
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
