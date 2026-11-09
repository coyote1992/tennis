import Image from "next/image";
import { Pyramid } from "@/components/a/Pyramid";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
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

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`label${light ? " label--light" : ""}`}>{children}</p>;
}

function BookButton({ children = "Online pályafoglalás" }: { children?: React.ReactNode }) {
  return (
    <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
      {children} <Icon name="arrowUpRight" size={17} />
    </a>
  );
}

const ft = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Ft`;

export default function Page() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="hero__kicker">
              {CLUB.venue} · {CLUB.town}
            </p>
            <h1 id="hero-title" className="hero__title">
              Salakpálya nyáron, sátor télen. <em>A strandfürdő mellett.</em>
            </h1>
            <p className="hero__lead">
              Négy salakos teniszpálya és egy fedett, műfüves sportsátor a Hungarospa Sportcentrumban. Foglalj online, edzz velünk, és
              játssz meccseket a Piramis versenyen.
            </p>
            <p className="hero__now">
              <span className="hero__dot" aria-hidden="true" />
              {SEASON_NOW}
            </p>
            <div className="btn-row">
              <BookButton />
              <a href="#arak" className="btn btn--ghost">
                Téli árak
              </a>
            </div>
            <p className="hero__phone">
              <a href={CLUB.phoneHref}>
                <Icon name="phone" size={16} /> {CLUB.phone}
              </a>
              <span>
                H–P {HOURS[0].time} · Szo–V {HOURS[1].time}
              </span>
            </p>
          </div>
          <div className="hero__art">
            <div className="hero__tall">
              <Image src="/img/labda-logo.jpg" alt="Szoboszlótenisz-logós labda a salakpálya vonalán" fill priority sizes="(max-width: 900px) 60vw, 30vw" />
            </div>
            <div className="hero__wide">
              <Image src="/img/sator-edzes.jpg" alt="Fiatal játékosok edzésen a fedett sportsátorban" fill sizes="(max-width: 900px) 60vw, 26vw" />
            </div>
            <Image src="/img/logo.png" alt="" width={611} height={611} className="hero__badge" sizes="120px" />
          </div>
        </div>
      </section>

      {/* ——— pályák ——— */}
      <section id="palyak" className="band" aria-labelledby="palyak-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Pályák</Label>
              <h2 id="palyak-title" className="title">
                Négy salakpálya <em>és egy sátor.</em>
              </h2>
            </div>
            <p className="intro">
              A Hungarospa Sportcentrum 2005 óta várja a teniszezőket. A fedett sportsátor 2008 óta télen-nyáron is lehetővé teszi a
              játékot.
            </p>
          </div>

          <ul className="facilities reveal">
            {FACILITIES.map((f, i) => (
              <li key={f.title}>
                <span className="facilities__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>

          <div className="booking reveal">
            <div className="booking__steps">
              <h3 className="subtitle">Így foglalsz</h3>
              <ol className="steps">
                {BOOKING_STEPS.map((s, i) => (
                  <li key={s.title}>
                    <span className="steps__n">{i + 1}</span>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <BookButton>Tovább a foglaláshoz</BookButton>
            </div>
            <div className="booking__side">
              <div className="hours">
                <p className="hours__title">
                  <Icon name="clock" size={18} /> Nyitvatartás
                </p>
                {HOURS.map((h) => (
                  <p key={h.days} className="hours__row">
                    <span>{h.days}</span>
                    <b>{h.time}</b>
                  </p>
                ))}
              </div>
              <details className="rules">
                <summary>
                  Pályarend <span>a foglalás és a játék szabályai</span>
                </summary>
                <ul>
                  {COURT_RULES.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* ——— árak ——— */}
      <section id="arak" className="band band--sky" aria-labelledby="arak-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Téli árak</Label>
              <h2 id="arak-title" className="title">
                A sátorban, <em>márciusig.</em>
              </h2>
            </div>
            <p className="intro">Aktuális árak: {PRICES.period}, a fedett sportsátorban. A nyári, salakpályás árakról telefonon érdeklődj.</p>
          </div>

          <div className="prices">
            <div className="pricelist reveal">
              <h3 className="pricelist__h">Pálya és bérlés</h3>
              <dl>
                {PRICES.court.map((p) => (
                  <div key={p.label}>
                    <dt>{p.label}</dt>
                    <dd>{p.price}</dd>
                  </div>
                ))}
              </dl>
              <h3 className="pricelist__h">Edzés</h3>
              <dl>
                {PRICES.coaching.map((p) => (
                  <div key={p.label}>
                    <dt>{p.label}</dt>
                    <dd>{p.price}</dd>
                  </div>
                ))}
              </dl>
              <p className="pricelist__note">{PRICES.coachingNote}</p>
            </div>

            <div className="cards reveal">
              <h3 className="subtitle">Szezonkártyák</h3>
              <p className="cards__lead">Egységekben fizetsz: minél nagyobb a kártya, annál olcsóbb egy óra.</p>
              <div className="cards__grid">
                {PRICES.cards.map((c) => (
                  <article key={c.units} className={`card${c.units === 80 ? " card--best" : ""}`}>
                    <p className="card__units">
                      {c.units} <span>egység</span>
                    </p>
                    <p className="card__price">{c.price}</p>
                    <dl className="card__per">
                      <div>
                        <dt>1 óra a pályán</dt>
                        <dd>{c.hour}</dd>
                      </div>
                      <div>
                        <dt>egyéniben fejenként</dt>
                        <dd>{c.half}</dd>
                      </div>
                      <div>
                        <dt>párosban fejenként</dt>
                        <dd>{ft(c.single)}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
              <ul className="cards__rules">
                {PRICES.cardRules.map((r) => (
                  <li key={r}>{r}</li>
                ))}
                <li>
                  <b>{PRICES.cardsValid}</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ——— edzés ——— */}
      <section id="edzes" className="band" aria-labelledby="edzes-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Edzés</Label>
              <h2 id="edzes-title" className="title">
                Két edző, <em>minden szintre.</em>
              </h2>
            </div>
            <p className="intro">Magán- és csoportos edzés gyerekeknek és felnőtteknek. Időpontot telefonon vagy e-mailben kérhetsz.</p>
          </div>
          <div className="coaches">
            {COACHES.map((c) => (
              <article key={c.name} className="coach reveal">
                <div className="coach__photo">
                  <Image src={c.img} alt={c.name} fill sizes="(max-width: 640px) 40vw, 200px" />
                </div>
                <div className="coach__body">
                  <h3>{c.name}</h3>
                  <ul className="coach__facts">
                    {c.facts.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <p>{c.text}</p>
                  <p className="coach__contact">
                    <a href={c.phoneHref}>
                      <Icon name="phone" size={15} /> {c.phone}
                    </a>
                    <a href={`mailto:${c.email}`}>
                      <Icon name="mail" size={15} /> {c.email}
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="partner reveal">
            <Icon name="users" size={26} />
            <div>
              <h3>Nincs teniszpartnered?</h3>
              <p>{COACHES[0].partner}</p>
            </div>
            <a href={CLUB.phoneHref} className="btn btn--light">
              <Icon name="phone" size={16} /> {CLUB.phone}
            </a>
          </div>

          <div className="kids reveal">
            <div className="kids__photo">
              <Image src="/img/marozsan-gyerekek.jpg" alt="Gyerekek a salakpályán egy bemutató edzés után" fill sizes="(max-width: 900px) 100vw, 40vw" />
            </div>
            <div>
              <h3 className="subtitle">Gyerekeknek</h3>
              <p>{KIDS}</p>
              <p>{CAMP}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— piramis ——— */}
      <section id="piramis" className="band dark" aria-labelledby="piramis-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label light>Piramis verseny</Label>
              <h2 id="piramis-title" className="title">
                Hívd ki, <em>és lépj feljebb.</em>
              </h2>
            </div>
            <p className="intro">{PIRAMIS.intro}</p>
          </div>

          <ul className="stats reveal">
            {PIRAMIS.stats.map((s) => (
              <li key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>

          <div className="ladder">
            <div className="ladder__viz reveal">
              <Pyramid />
            </div>
            <div className="ladder__text reveal">
              <p className="ladder__how">{PIRAMIS.how}</p>
              <ul className="ladder__rules">
                {PIRAMIS.rules.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <div className="ladder__last">
                <p className="ladder__last-h">A {PIRAMIS.last.year}-es kiírás</p>
                <p>{PIRAMIS.last.schedule}</p>
                <p>{PIRAMIS.last.costs}</p>
              </div>
            </div>
          </div>

          <div className="results reveal">
            <figure className="result">
              <div className="result__photo">
                <Image src="/img/piramis-donto.jpg" alt="A 2025-ös Piramis döntő résztvevői a salakpályán" fill sizes="(max-width: 900px) 100vw, 34vw" />
              </div>
              <figcaption>
                <b>2025, döntő</b>
                <ol>
                  {PIRAMIS.final2025.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ol>
              </figcaption>
            </figure>
            <figure className="result">
              <div className="result__photo">
                <Image src="/img/piramis-kisdonto.jpg" alt="A 2025-ös Piramis kisdöntő résztvevői" fill sizes="(max-width: 900px) 100vw, 34vw" />
              </div>
              <figcaption>
                <b>2025, kisdöntő (5–8. hely)</b>
                <ol>
                  {PIRAMIS.mini2025.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ol>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ——— klubélet ——— */}
      <section id="klubelet" className="band band--paper" aria-labelledby="klubelet-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Klubélet</Label>
              <h2 id="klubelet-title" className="title">
                Versenyek, csapatok, <em>1980 óta.</em>
              </h2>
            </div>
            <p className="intro">{TEAMS.text}</p>
          </div>

          <div className="events">
            {EVENTS.map((e) => (
              <article key={e.title} className="event reveal">
                <div className="event__img">
                  <Image src={e.img} alt={e.alt} width={e.w} height={e.h} sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>

          <div className="club">
            <div className="club__history reveal">
              <h3 className="subtitle">Röviden a múltról</h3>
              <ol className="history">
                {HISTORY.map((h) => (
                  <li key={h.year}>
                    <b>{h.year}</b>
                    <p>{h.text}</p>
                  </li>
                ))}
              </ol>
              <h3 className="subtitle club__famous-h">Hírességeink</h3>
              <ul className="famous">
                {FAMOUS.map((f) => (
                  <li key={f.name}>
                    <b>{f.name}</b>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="shop reveal">
              <div className="shop__img">
                <Image src="/img/shop.jpg" alt="Ütők és teniszfelszerelés a sportcentrum boltjában" fill sizes="(max-width: 900px) 100vw, 36vw" />
              </div>
              <div className="shop__body">
                <h3>Shop és húrozás</h3>
                <p>{SHOP.text}</p>
                <a href={CLUB.shop} className="link" target="_blank" rel="noopener noreferrer">
                  Online bolt: jsport.hu <Icon name="arrowUpRight" size={15} />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band dark dark--green" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <Label light>Kapcsolat</Label>
            <h2 id="kapcsolat-title" className="title">
              József Attila u. 25., <em>a Thermál Hotel mellett.</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Pályafoglalás, edzés, bérlés</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                  <small>
                    <a href={CLUB.emailHref}>{CLUB.email}</a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Cím</dt>
                <dd>
                  {CLUB.address}
                  <small>
                    {CLUB.entrance} ·{" "}
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Útvonal a Google Térképen
                    </a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Nyitvatartás</dt>
                <dd>
                  {HOURS.map((h) => (
                    <span key={h.days} className="visit__hours">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="btn-row">
              <BookButton />
              <a href={CLUB.facebook} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                Facebook-csoport
              </a>
            </div>
            <div className="map">
              <iframe src={CLUB.mapsEmbed} title="A Hungarospa Sportcentrum a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="visit__form reveal">
            <h3 className="subtitle">Írj nekünk</h3>
            <p>Foglalás, szezonkártya, edzés vagy Piramis: a levél a sportcentrumhoz megy.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
