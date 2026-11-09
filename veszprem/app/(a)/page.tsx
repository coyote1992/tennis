import Image from "next/image";
import { WeekChart } from "@/components/a/WeekChart";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
import { BOOKING, CAMP, CLUB, COACHES, EVENTS, VENUE } from "@/lib/site";

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`label${light ? " label--light" : ""}`}>{children}</p>;
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");

const ONLINE_STEPS = [
  { title: "Nap és pálya", text: "Válaszd ki a dátumot, és kattints egy szabad pályán a kezdési időpontra." },
  { title: "Időtartam és adatok", text: "Add meg a befejezést, a nevedet, e-mail-címedet és telefonszámodat." },
  { title: "Visszaigazolás", text: "A foglalásról e-mailt küldünk; fizetni a helyszínen lehet." },
];

export default function Page() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="hero__kicker">
              {CLUB.short} · {CLUB.venue}, Veszprém
            </p>
            <h1 id="hero-title" className="hero__title">
              Hét salakpálya a Jutasi úton, <em>télen három sátorban.</em>
            </h1>
            <p className="hero__lead">{VENUE.intro}</p>
            <div className="btn-row">
              <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
                Online pályafoglalás <Icon name="arrowUpRight" size={17} />
              </a>
              <a href={CLUB.phoneHref} className="btn btn--ghost">
                <Icon name="phone" size={17} /> {CLUB.phone}
              </a>
            </div>
            <dl className="hero__facts">
              {VENUE.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="hero__figure">
            <div className="hero__photo">
              <Image src="/img/palyak-sor.jpg" alt="Salakos teniszpályák sora reflektorokkal a Jutasi úti Sportcentrumban" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
            </div>
            <div className="hero__tent">
              <Image src="/img/sator.jpg" alt="A téli sátras pálya belülről" fill sizes="(max-width: 900px) 44vw, 20vw" />
            </div>
            <Image src="/img/tvse-logo.png" alt="" width={512} height={512} className="hero__crest" sizes="110px" />
          </figure>
        </div>
      </section>

      {/* ——— pályák ——— */}
      <section id="palyak" className="band" aria-labelledby="palyak-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Pályák</Label>
              <h2 id="palyak-title" className="title">
                Nyáron hét pálya, <em>télen három sátor.</em>
              </h2>
            </div>
            <p className="intro">{VENUE.hours}</p>
          </div>
          <div className="seasons">
            {VENUE.seasons.map((s, i) => (
              <article key={s.name} className={`season reveal${i === 1 ? " season--winter" : ""}`}>
                <div className="season__photo">
                  <Image
                    src={i === 0 ? "/img/palyak-jatek.jpg" : "/img/sator-labdak.jpg"}
                    alt={i === 0 ? "Játékosok a szabadtéri salakpályákon" : "A sátras pálya belülről, labdakosárral"}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <div className="season__text">
                  <p className="season__when">{s.when}</p>
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="venue reveal">
            <ul className="venue__extras">
              {VENUE.extras.map((x) => (
                <li key={x}>
                  <Icon name="check" size={18} /> {x}
                </li>
              ))}
            </ul>
            <div className="venue__photos">
              <div className="venue__photo">
                <Image src="/img/palya-kefe.jpg" alt="Pályalehúzó kefe a hálónál" fill sizes="(max-width: 900px) 50vw, 22vw" />
              </div>
              <div className="venue__photo">
                <Image src="/img/klubhaz.jpg" alt="A klubház konyhája és asztala" fill sizes="(max-width: 900px) 50vw, 22vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— foglalás ——— */}
      <section id="foglalas" className="band band--soft" aria-labelledby="foglalas-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Foglalás</Label>
              <h2 id="foglalas-title" className="title">
                Online naptár <em>vagy egy telefon.</em>
              </h2>
            </div>
            <p className="intro">
              {BOOKING.online} {BOOKING.prices}
            </p>
          </div>
          <div className="book">
            <ol className="book__steps reveal">
              {ONLINE_STEPS.map((s) => (
                <li key={s.title}>
                  <b>{s.title}</b>
                  <p>{s.text}</p>
                </li>
              ))}
              <li className="book__cta">
                <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
                  Az online naptár megnyitása <Icon name="arrowUpRight" size={17} />
                </a>
              </li>
            </ol>
            <aside className="book__phone reveal">
              <p className="book__label">{BOOKING.phone}</p>
              <a href={CLUB.phoneHref} className="book__num">
                {CLUB.phone}
              </a>
              <small>Lázár Ottó, pályafoglalás</small>
              <a href={CLUB.phone2Href} className="book__num">
                {CLUB.phone2}
              </a>
              <small>Mészáros Csaba</small>
            </aside>
          </div>
          <dl className="book__rules reveal">
            {BOOKING.rules.map((r) => (
              <div key={r.title}>
                <dt>{r.title}</dt>
                <dd>{r.text}</dd>
              </div>
            ))}
          </dl>
          <div className="deal reveal">
            <div className="deal__text">
              <h3 className="subtitle">{BOOKING.discount.title}</h3>
              <ul>
                {BOOKING.discount.slots.map((s) => (
                  <li key={s.days}>
                    <b>{s.days}</b> {s.time}
                  </li>
                ))}
              </ul>
              <p className="deal__note">{BOOKING.outdoor}</p>
            </div>
            <WeekChart />
          </div>
        </div>
      </section>

      {/* ——— edzők ——— */}
      <section id="edzok" className="band" aria-labelledby="edzok-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Edzők</Label>
              <h2 id="edzok-title" className="title">
                Edzés nyáron <em>és télen is.</em>
              </h2>
            </div>
            <p className="intro">{COACHES.intro}</p>
          </div>
          <div className="coaches">
            {COACHES.list.map((c) => (
              <article key={c.name} className="coach reveal">
                <div className="coach__photo">
                  {c.photo ? (
                    <Image src={c.photo} alt={c.name} fill sizes="(max-width: 900px) 40vw, 18vw" />
                  ) : (
                    <span className="coach__mono" aria-hidden="true">
                      {initials(c.name)}
                    </span>
                  )}
                </div>
                <h3>{c.name}</h3>
                {c.bio && <p className="coach__bio">{c.bio}</p>}
                <p className="coach__links">
                  <a href={c.phoneHref}>
                    <Icon name="phone" size={15} /> {c.phone}
                  </a>
                  {c.web && (
                    <a href={c.web} target="_blank" rel="noopener noreferrer">
                      {c.webLabel} <Icon name="arrowUpRight" size={14} />
                    </a>
                  )}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— tábor ——— */}
      <section id="tabor" className="band band--violet" aria-labelledby="tabor-title">
        <div className="container camp">
          <div className="camp__text reveal">
            <Label light>Tenisztábor</Label>
            <h2 id="tabor-title" className="title">
              Augusztusban <em>tenisztábor.</em>
            </h2>
            <p className="intro">{CAMP.intro}</p>
            <div className="camp__two">
              <p>
                <b>Kezdőknek.</b> {CAMP.beginners}
              </p>
              <p>
                <b>Haladóknak.</b> {CAMP.advanced}
              </p>
            </div>
            <p className="camp__day">{CAMP.day}</p>
            <ul className="camp__inc">
              {CAMP.included.map((x) => (
                <li key={x}>
                  <Icon name="check" size={16} /> {x}
                </li>
              ))}
            </ul>
            <a href={CAMP.contactHref} className="btn btn--light">
              <Icon name="phone" size={17} /> Érdeklődés: {CAMP.contact}
            </a>
          </div>
          <div className="camp__photos reveal">
            <div className="camp__photo camp__photo--big">
              <Image src="/img/tabor-palya.jpg" alt="Táborozók feltartott ütőkkel a salakpályán" fill sizes="(max-width: 900px) 100vw, 46vw" />
            </div>
            <div className="camp__photo">
              <Image src="/img/tabor-csoport.jpg" alt="Csoportkép a táborban" fill sizes="(max-width: 900px) 50vw, 23vw" />
            </div>
            <div className="camp__photo">
              <Image src="/img/tabor-jatek.jpg" alt="Játék a pályán a táborban" fill sizes="(max-width: 900px) 50vw, 23vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ——— versenyek ——— */}
      <section id="versenyek" className="band" aria-labelledby="versenyek-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Versenyek</Label>
              <h2 id="versenyek-title" className="title">
                Házibajnokság <em>és nagy kupák.</em>
              </h2>
            </div>
            <p className="intro">{EVENTS.league.text}</p>
          </div>
          <div className="league reveal">
            <div className="league__card">
              <p className="league__label">{EVENTS.league.title} 2026/2027</p>
              <p className="league__next">{EVENTS.league.next}</p>
              <ul className="league__contacts">
                {EVENTS.league.contacts.map((c) => (
                  <li key={c.name}>
                    <span>{c.name}</span>
                    <a href={c.phoneHref}>{c.phone}</a>
                  </li>
                ))}
              </ul>
              <p className="league__piramis">{EVENTS.piramis}</p>
            </div>
            <div className="league__photo">
              <Image src="/img/verseny-amator.jpg" alt="Az amatőr verseny résztvevői a pálya mellett" fill sizes="(max-width: 900px) 100vw, 40vw" />
            </div>
          </div>
          <div className="cups">
            {EVENTS.highlights.map((h, i) => (
              <article key={h.title} className="cup reveal">
                <div className="cup__photo">
                  <Image
                    src={i === 0 ? "/img/palya-panel.jpg" : "/img/verseny-herend.jpg"}
                    alt={i === 0 ? "A Jutasi úti salakpályák" : "A 2019-es Miklós Gyula Emlékverseny díjazottjai a Herend molinó előtt"}
                    fill
                    sizes="(max-width: 900px) 100vw, 34vw"
                  />
                </div>
                <p className="cup__year">{h.year}</p>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </article>
            ))}
            <aside className="cup cup--list reveal">
              <div className="cup__photo">
                <Image src="/img/verseny-csoport.jpg" alt="Egy 2021-es amatőr verseny résztvevői a Jutasi úti pályán" fill sizes="(max-width: 900px) 100vw, 34vw" />
              </div>
              <p className="cup__year">Amatőr versenyek</p>
              <ul>
                {EVENTS.amateur.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band band--soft" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <Label>Kapcsolat</Label>
            <h2 id="kapcsolat-title" className="title">
              Jutasi út 18., <em>Veszprém.</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Pályafoglalás</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                  <small>Lázár Ottó · vagy Mészáros Csaba: <a href={CLUB.phone2Href}>{CLUB.phone2}</a></small>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={CLUB.emailHref}>{CLUB.email}</a>
                </dd>
              </div>
              <div>
                <dt>Cím</dt>
                <dd>
                  {CLUB.venue}, {CLUB.address}
                  <small>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Útvonal a Google Térképen
                    </a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Szezonok</dt>
                <dd>
                  Nyár: április–október · Tél: október–április
                  <small>{VENUE.hours}</small>
                </dd>
              </div>
            </dl>
            <div className="map">
              <iframe src={CLUB.mapsEmbed} title="A Jutasi úti Sportcentrum a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="visit__form reveal">
            <h3 className="subtitle">Írj nekünk</h3>
            <p>Pálya, edzés, tábor vagy házibajnokság: a levél a sportegyesülethez megy.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
