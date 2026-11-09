import Image from "next/image";
import { IconArrow, IconCalendar, IconCheck, IconClock, IconExternal, IconMail, IconPhone, IconPin, IconTrophy, IconUsers } from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import { BOOKING, CAMP, CLUB, COACHES, EVENTS, VENUE } from "@/lib/site";

/** keep times and phone numbers on one line */
const nb = (t: string) => t.replace(/ /g, " ");
/** keep "400 000 Ft" together without freezing the whole sentence */
const numnb = (t: string) => t.replace(/(\d) (\d{3})/g, "$1\u00a0$2").replace(/ Ft\b/g, "\u00a0Ft");
const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");

/** the booking page's paragraph, as the four steps it describes */
const STEPS = [
  { title: "Napot választasz", text: "A naptárban kiválasztod a dátumot." },
  { title: "Kezdést a szabad pályán", text: "A megjelenő időpontok közül egy szabad pályán a kezdési időpontra kattintasz." },
  { title: "Befejezés és adatok", text: "Megadod a befejezést (a játékidőt) és az adataidat." },
  { title: "Foglalás", text: "A Foglalás gombbal véglegesíted; a sikerről visszaigazoló e-mailt küldünk. Fizetés a helyszínen." },
];

export default function BHome() {
  const [lazar] = COACHES.list;
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Tenisziskola Veszprém SE · {CLUB.venue}</p>
            <h1 id="hero-title" className="h1 reveal">
              Hét salakpálya Veszprémben, <em>télen három sátorral.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">{VENUE.intro}</p>
              <div className="hero__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Online foglalás <IconExternal />
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  <IconPhone /> {nb(CLUB.phone)}
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image src="/img/palyak-sor.jpg" alt="A Jutasi úti Sportcentrum salakpályái reflektoroszlopokkal, nyári délelőtt" fill priority sizes="(max-width: 1296px) 100vw, 1200px" />
            <figcaption className="hero__caption">A szabadtéri salakpályák nyáron</figcaption>
          </figure>

          <ul className="facts reveal">
            {VENUE.facts.map((f) => (
              <li key={f.label} className="fact">
                <span className="fact__num">{f.value}</span>
                <span className="fact__label">{f.label}</span>
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
            Nyáron szabadtéren, <em>télen sátor alatt.</em>
          </h2>
          <p className="lead reveal">{VENUE.hours}</p>

          <div className="seasons">
            {VENUE.seasons.map((s, i) => (
              <article key={s.name} className={`season season--${i === 0 ? "nyar" : "tel"} glass reveal`}>
                <figure className="season__photo">
                  <Image
                    src={i === 0 ? "/img/palyak-jatek.jpg" : "/img/sator.jpg"}
                    alt={i === 0 ? "Játékosok a szabadtéri salakpályákon" : "A fehér téli sátor belülről, a fedett salakpályával"}
                    fill
                    sizes="(max-width: 900px) 100vw, 420px"
                  />
                </figure>
                <div className="season__body">
                  <h3 className="h3">{s.name}</h3>
                  <p className="season__when">{s.when}</p>
                  <p className="season__text">{s.text}</p>
                </div>
              </article>
            ))}
          </div>

          <ul className="chips extras reveal" aria-label="A pályák mellett">
            {VENUE.extras.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>

          <div className="venue-photos">
            <figure className="snap reveal reveal--img">
              <Image src="/img/palya-kefe.jpg" alt="Lehúzó kefe a háló mellett a salakon" fill sizes="(max-width: 900px) 100vw, 400px" />
              <figcaption>Lehúzó kefe</figcaption>
            </figure>
            <figure className="snap reveal reveal--img">
              <Image src="/img/palya-vonal.jpg" alt="Alapvonal a salakpályán, háttérben a szélfogó háló" fill sizes="(max-width: 900px) 50vw, 260px" />
              <figcaption>Salakpálya</figcaption>
            </figure>
            <figure className="snap reveal reveal--img">
              <Image src="/img/klubhaz.jpg" alt="A klubház konyhája asztallal és székekkel" fill sizes="(max-width: 900px) 50vw, 260px" />
              <figcaption>A klubház</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Foglalás ——— */}
      <section id="foglalas" className="section" aria-labelledby="foglalas-title">
        <div className="container">
          <p className="eyebrow reveal">Foglalás</p>
          <h2 id="foglalas-title" className="h2 reveal">
            Online, négy lépésben, <em>vagy telefonon.</em>
          </h2>
          <p className="lead reveal">A klub saját foglalási naptárában látod a szabad pályákat, és azonnal le is foglalhatod őket.</p>

          <div className="book">
            <article className="book__online glass reveal">
              <p className="label">
                <IconCalendar /> Online foglalás
              </p>
              <ol className="steps">
                {STEPS.map((s, i) => (
                  <li key={s.title}>
                    <span className="steps__n">{i + 1}</span>
                    <span>
                      <strong>{s.title}</strong>
                      <span>{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                A foglalási naptár <IconExternal />
              </a>
              <p className="muted">A klub foglalási oldala (teniszveszprem.hu) új lapon nyílik.</p>
            </article>

            <article className="book__phone glass reveal">
              <p className="label">
                <IconPhone /> Telefonos foglalás
              </p>
              <p className="book__phonetext">{BOOKING.phone}</p>
              <ul className="phones">
                <li>
                  <a href={CLUB.phoneHref}>{nb(CLUB.phone)}</a>
                  <span>Lázár Ottó, pályafoglalás</span>
                </li>
                <li>
                  <a href={CLUB.phone2Href}>{nb(CLUB.phone2)}</a>
                  <span>Mészáros Csaba</span>
                </li>
              </ul>
              <p className="outdoor">
                <IconCheck /> <span>{BOOKING.outdoor}</span>
              </p>
              <p className="muted">{BOOKING.prices}</p>
            </article>
          </div>

          <ul className="keyrules">
            {BOOKING.rules.map((r) => (
              <li key={r.title} className="keyrule glass reveal">
                <strong>{r.title}</strong>
                <span>{r.text}</span>
              </li>
            ))}
          </ul>

          <div className="book__more">
            <article className="discount glass reveal">
              <p className="label">
                <IconClock /> Fűtés nélkül, kedvezményesen
              </p>
              <h3 className="h3 discount__title">{BOOKING.discount.title}</h3>
              <ul className="discount__slots">
                {BOOKING.discount.slots.map((s) => (
                  <li key={s.days}>
                    <span>{s.days}</span>
                    <strong>{nb(s.time)}</strong>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ——— Edzők ——— */}
      <section id="edzok" className="section" aria-labelledby="edzok-title">
        <div className="container">
          <p className="eyebrow reveal">Edzők</p>
          <h2 id="edzok-title" className="h2 reveal">
            Edzés nyáron és télen, <em>a Jutasi úton.</em>
          </h2>
          <p className="lead reveal">{COACHES.intro}</p>

          <div className="coaches">
            <article className="coach coach--lead glass reveal">
              <figure className="coach__photo">
                <Image src={lazar.photo} alt={`${lazar.name} edző`} fill sizes="(max-width: 900px) 40vw, 200px" />
              </figure>
              <div className="coach__body">
                <h3 className="h3">{lazar.name}</h3>
                <p className="coach__bio">{lazar.bio}</p>
                <div className="coach__links">
                  <a href={lazar.phoneHref} className="btn btn--accent btn--sm">
                    <IconPhone /> {nb(lazar.phone)}
                  </a>
                  <a href={lazar.web} target="_blank" rel="noopener noreferrer" className="coach__web">
                    {lazar.webLabel} <IconExternal />
                  </a>
                </div>
              </div>
            </article>

            {COACHES.list.slice(1).map((c) => (
              <article key={c.name} className="coach glass reveal">
                {c.photo ? (
                  <figure className="coach__photo coach__photo--sm">
                    <Image src={c.photo} alt={`${c.name} edző`} fill sizes="120px" />
                  </figure>
                ) : (
                  <span className="coach__mono" aria-hidden="true">
                    {initials(c.name)}
                  </span>
                )}
                <div className="coach__body">
                  <h3 className="h3">{c.name}</h3>
                  <a href={c.phoneHref} className="coach__phone">
                    <IconPhone /> {nb(c.phone)}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Tenisztábor ——— */}
      <section id="tabor" className="section" aria-labelledby="tabor-title">
        <div className="container">
          <p className="eyebrow reveal">Tenisztábor</p>
          <h2 id="tabor-title" className="h2 reveal">
            Nyáron tábor, <em>kicsiknek és nagyoknak.</em>
          </h2>
          <p className="lead reveal">{CAMP.intro}</p>

          <div className="camp">
            <figure className="camp__main reveal reveal--img">
              <Image src="/img/tabor-csoport.jpg" alt="Táborozó gyerekek csoportképe a salakpályán" fill sizes="(max-width: 900px) 100vw, 620px" />
              <figcaption className="hero__caption">Tábor a Jutasi úton</figcaption>
            </figure>
            <div className="camp__side">
              <article className="camp__card glass reveal">
                <p className="label">
                  <IconUsers /> Kezdőknek
                </p>
                <p>{CAMP.beginners}</p>
              </article>
              <article className="camp__card glass reveal">
                <p className="label">
                  <IconTrophy /> Haladóknak
                </p>
                <p>{CAMP.advanced}</p>
              </article>
            </div>
          </div>

          <div className="camp__day glass reveal">
            <div>
              <p className="label">
                <IconClock /> Egy nap a táborban
              </p>
              <p className="camp__text">{CAMP.day}</p>
            </div>
            <div>
              <p className="label">
                <IconCheck /> A táborban biztosítjuk
              </p>
              <ul className="chips camp__incl">
                {CAMP.included.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <a href={CAMP.contactHref} className="btn btn--accent">
              <IconPhone /> {nb(CAMP.contact)}
            </a>
          </div>

          <div className="camp__strip">
            <figure className="snap reveal reveal--img">
              <Image src="/img/tabor-palya.jpg" alt="Táborozók ütőiket a magasba emelve a pályán" fill sizes="(max-width: 900px) 100vw, 590px" />
            </figure>
            <figure className="snap reveal reveal--img">
              <Image src="/img/tabor-jatek.jpg" alt="Gyerekek játék közben a salakpályán" fill sizes="(max-width: 900px) 100vw, 590px" />
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Versenyek ——— */}
      <section id="versenyek" className="section" aria-labelledby="versenyek-title">
        <div className="container">
          <p className="eyebrow reveal">Versenyek</p>
          <h2 id="versenyek-title" className="h2 reveal">
            Téli házibajnokság <em>és versenyek.</em>
          </h2>

          <article className="league glass reveal">
            <div className="league__text">
              <p className="label">
                <IconCalendar /> Télen, hétvégente
              </p>
              <h3 className="h3">{EVENTS.league.title}</h3>
              <p>{EVENTS.league.text}</p>
              <p className="league__next">
                <IconClock /> <span>{EVENTS.league.next}</span>
              </p>
              <ul className="phones phones--inline">
                {EVENTS.league.contacts.map((c) => (
                  <li key={c.name}>
                    <a href={c.phoneHref}>{nb(c.phone)}</a>
                    <span>{c.name}</span>
                  </li>
                ))}
              </ul>
              <p className="muted">{EVENTS.piramis}</p>
            </div>
            <figure className="league__photo">
              <Image src="/img/sator-labdak.jpg" alt="Labdakosár a sátras pálya szélén, télen" fill sizes="(max-width: 900px) 100vw, 440px" />
            </figure>
          </article>

          <div className="highlights">
            <figure className="highlights__photo reveal reveal--img">
              <Image src="/img/verseny-herend.jpg" alt="A Miklós Gyula Emlékverseny két díjazottja a Herend-molinó előtt, 2019" fill sizes="(max-width: 900px) 100vw, 520px" />
              <figcaption className="hero__caption">Miklós Gyula Emlékverseny, 2019</figcaption>
            </figure>
            <ul className="highlights__list">
              {EVENTS.highlights.map((h) => (
                <li key={h.title} className="highlight glass reveal">
                  <span className="tag">{h.year}</span>
                  <h3 className="h3">{h.title}</h3>
                  <p>{numnb(h.text)}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="amateur">
            <div className="amateur__list glass reveal">
              <p className="label">
                <IconTrophy /> Amatőr versenyeink
              </p>
              <ul className="checks">
                {EVENTS.amateur.map((a) => (
                  <li key={a}>
                    <IconCheck />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="snap amateur__photo reveal reveal--img">
              <Image src="/img/verseny-csoport.jpg" alt="Egy amatőr verseny résztvevői csoportképen a pálya mellett, 2021" fill sizes="(max-width: 900px) 100vw, 520px" />
              <figcaption>Amatőr verseny, 2021</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Kapcsolat ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Foglalj pályát, <em>és találkozunk a Jutasi úton.</em>
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
                    <span className="contact__name">Lázár Ottó</span>
                    <a href={CLUB.phone2Href} className="contact__alt">
                      {nb(CLUB.phone2)}
                    </a>
                    <span className="contact__name">Mészáros Csaba</span>
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
                      {CLUB.address.replace(/ (\d+\.)$/, " $1")}
                    </a>
                    <span className="contact__name">{CLUB.venue}</span>
                  </div>
                </li>
                <li>
                  <IconClock />
                  <div>
                    <span className="contact__label">Szezonok és nyitvatartás</span>
                    {VENUE.seasons.map((s) => (
                      <span key={s.name} className="contact__line">
                        {s.name}: <strong>{s.when}</strong>
                      </span>
                    ))}
                    <span className="contact__line">{VENUE.hours}</span>
                  </div>
                </li>
              </ul>
              <div className="visit__actions">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Online foglalás <IconExternal />
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconArrow /> Útvonal
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
            <iframe title="A Jutasi úti Sportcentrum a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
