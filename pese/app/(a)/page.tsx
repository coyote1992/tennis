import Image from "next/image";
import { Hours } from "@/components/a/Hours";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
import {
  AMENITIES,
  ARCHIVE,
  CLUB,
  COURT_PRICES,
  EVENTS,
  FACTS,
  MEMBERSHIP,
  OTHER_PRICES,
  OTHER_SPORTS,
  STORY,
  SUPPORTERS,
  TEAM,
  TENNIS,
  TIMELINE,
} from "@/lib/site";

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`label${light ? " label--light" : ""}`}>{children}</p>;
}

function BookingButton({ children = "Online pályafoglalás" }: { children?: React.ReactNode }) {
  return (
    <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
      {children} <Icon name="arrowUpRight" size={17} />
    </a>
  );
}

export default function Page() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="hero__kicker">Pécs · Diófa utca · 1968 óta</p>
            <h1 id="hero-title" className="hero__title">
              Tenisz, medence, szauna. <em>Egy sporttelepen.</em>
            </h1>
            <p className="hero__lead">
              13 salakos és 1 műfüves teniszpálya, télen fedett pályák. Mellette kültéri medence, szauna, jakuzzi, konditerem, asztalitenisz, és klubház terasszal a pihenéshez.
            </p>
            <div className="btn-row">
              <BookingButton />
              <a href="#arak" className="btn btn--ghost">
                Árak
              </a>
            </div>
            <p className="hero__phone">
              <a href={CLUB.phoneHref}>
                <Icon name="phone" size={16} /> {CLUB.phone}
              </a>
              <span>Foglalás 14 nappal előre, regisztráció után</span>
            </p>
          </div>
          <figure className="hero__figure">
            <div className="hero__photo">
              <Image
                src="/img/sporttelep-dron.jpg"
                alt="A Diófa utcai sporttelep felülről: salakpályák fasorokkal, jobbra a téli fedés vázával"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 56vw"
              />
            </div>
            <Image src="/img/logo.png" alt="" width={975} height={957} className="hero__stamp" sizes="150px" />
          </figure>
        </div>
      </section>

      <div className="facts">
        <ul className="container facts__list">
          {FACTS.map((f) => (
            <li key={f.label}>
              <b>{f.num}</b>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ——— tenisz ——— */}
      <section id="tenisz" className="band" aria-labelledby="tenisz-title">
        <div className="container">
          <div className="tennis">
            <div className="tennis__text reveal">
              <Label>Tenisz</Label>
              <h2 id="tenisz-title" className="title">
                {TENNIS.title}
              </h2>
              <p className="intro">{TENNIS.text}</p>
              <ul className="ticks">
                {TENNIS.points.map((p) => (
                  <li key={p}>
                    <Icon name="check" size={17} />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="btn-row">
                <BookingButton />
              </div>
            </div>
            <div className="tennis__photos reveal">
              <div className="tennis__photo tennis__photo--a">
                <Image src="/img/salakpalya.jpg" alt="Salakpálya esti fényben, villanyoszlopokkal és nyárfasorral" fill sizes="(max-width: 900px) 70vw, 30vw" />
              </div>
              <div className="tennis__photo tennis__photo--b">
                <Image src="/img/negyes.jpg" alt="Négy játékos ütőkkel a háló mellett" fill sizes="(max-width: 900px) 60vw, 24vw" />
              </div>
            </div>
          </div>

          <div className="coaching">
            {TENNIS.coaching.map((c) => (
              <article key={c.title} className="coach reveal">
                <div className="coach__photo">
                  <Image src={c.img} alt={c.imgAlt} fill sizes="(max-width: 760px) 100vw, 40vw" />
                </div>
                <div className="coach__body">
                  <h3 className="subtitle">{c.title}</h3>
                  <p>{c.text}</p>
                  <a href={c.contact.phoneHref} className="coach__contact">
                    <Icon name="phone" size={16} />
                    <span>
                      {c.contact.name}: <b>{c.contact.phone}</b>
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— medence, szauna, edzés ——— */}
      <section id="pihenes" className="band band--paper2" aria-labelledby="pihenes-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Medence, szauna, edzés</Label>
              <h2 id="pihenes-title" className="title">
                A meccs után <em>sem kell hazasietni.</em>
              </h2>
            </div>
            <p className="intro">
              Kültéri medence nyáron, szauna és jakuzzi, konditerem és két asztalitenisz-terem: külön is foglalhatók, a teniszezés mellé vagy helyette.
            </p>
          </div>
          <div className="amenities">
            {AMENITIES.map((a) => (
              <article key={a.id} className="amenity reveal">
                <div className="amenity__photo">
                  <Image src={a.img} alt={a.imgAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1060px) 50vw, 25vw" />
                  {a.price && <span className="amenity__price">{a.price}</span>}
                </div>
                <h3 className="amenity__title">{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
          <div className="member reveal">
            <div className="member__price">
              <span>Éves tagdíj</span>
              <b>{MEMBERSHIP.price}</b>
            </div>
            <p>
              {MEMBERSHIP.text} {OTHER_SPORTS}
            </p>
          </div>
        </div>
      </section>

      {/* ——— árak ——— */}
      <section id="arak" className="band" aria-labelledby="arak-title">
        <div className="container">
          <div className="head reveal">
            <Label>Árak</Label>
            <h2 id="arak-title" className="title">
              Árjegyzék, <em>2026</em>
            </h2>
          </div>
          <div className="board reveal">
            <Image src="/img/logo.png" alt="" width={975} height={957} className="board__stamp" sizes="96px" />
            <div className="board__cols">
              <div>
                <h3 className="board__head">
                  Teniszpálya <small>{COURT_PRICES.season}</small>
                </h3>
                <table className="prices">
                  <tbody>
                    {COURT_PRICES.rows.map((r) => (
                      <tr key={r.item}>
                        <th scope="row">
                          {r.item}
                          <small>{r.who}</small>
                        </th>
                        <td>
                          <b>{r.price}</b> <span>{r.unit}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <h4 className="board__sub">Szezon pályabérlet, tagoknak · fő / szezon</h4>
                <table className="prices prices--compact">
                  <tbody>
                    {COURT_PRICES.passes.map((r) => (
                      <tr key={r.item}>
                        <th scope="row">
                          {r.item}
                          <small>{r.when}</small>
                        </th>
                        <td>
                          <b>{r.price}</b>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="board__dates">Nyári szezon: {COURT_PRICES.seasonDates}</p>
              </div>
              <div>
                <h3 className="board__head">
                  Szauna, konditerem, asztalitenisz <small>2026</small>
                </h3>
                <table className="prices">
                  <tbody>
                    {OTHER_PRICES.map((r) => (
                      <tr key={r.item}>
                        <th scope="row">{r.item}</th>
                        <td>
                          <b>{r.price}</b> <span>{r.unit}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <ul className="board__notes">
                  {COURT_PRICES.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                  <li>A téli, fedett pályák díjáról és a medencehasználatról a klubnál érdeklődj.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="btn-row btn-row--center reveal">
            <BookingButton>Foglalás és vásárlás online</BookingButton>
            <a href={CLUB.phoneHref} className="btn btn--ghost">
              <Icon name="phone" size={17} /> {CLUB.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ——— rendezvények ——— */}
      <section id="rendezveny" className="band dark" aria-labelledby="rendezveny-title">
        <div className="container events">
          <div className="events__photos reveal">
            <div className="events__photo events__photo--main">
              <Image src="/img/terasz.jpg" alt="A fedett terasz fa asztalokkal és kerti sütővel" fill sizes="(max-width: 900px) 100vw, 40vw" />
            </div>
            <div className="events__photo">
              <Image src="/img/klubhaz.jpg" alt="A faburkolatú klubterem" fill sizes="(max-width: 900px) 50vw, 20vw" />
            </div>
            <div className="events__photo">
              <Image src="/img/terasz-asztal.jpg" alt="Hosszú asztal a teraszon" fill sizes="(max-width: 900px) 50vw, 20vw" />
            </div>
          </div>
          <div className="events__text reveal">
            <Label light>Rendezvények</Label>
            <h2 id="rendezveny-title" className="title">
              {EVENTS.title}
            </h2>
            <p className="intro">{EVENTS.text}</p>
            <table className="prices prices--dark">
              <tbody>
                {EVENTS.rows.map((r) => (
                  <tr key={r.item}>
                    <th scope="row">{r.item}</th>
                    <td>
                      <b>{r.price}</b> <span>{r.unit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="events__note">{EVENTS.includes}</p>
            <div className="btn-row">
              <a href="#urlap" className="btn btn--accent">
                Időpontot kérek
              </a>
              <a href={CLUB.phoneHref} className="btn btn--ghost">
                {CLUB.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— a klub ——— */}
      <section id="klub" className="band" aria-labelledby="klub-title">
        <div className="container">
          <div className="story">
            <div className="story__text reveal">
              <Label>A klub</Label>
              <h2 id="klub-title" className="title">
                Fél évszázad <em>a Diófa utcában.</em>
              </h2>
              {STORY.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <ol className="timeline reveal">
              {TIMELINE.map((t) => (
                <li key={t.year}>
                  <b>{t.year}</b>
                  <span>{t.text}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="archive reveal" aria-label="Archív fotók">
            {ARCHIVE.map((a, i) => (
              <figure key={a.src} className={`archive__item archive__item--${i}`}>
                <Image src={a.src} alt={a.alt} width={a.w} height={a.h} sizes="(max-width: 760px) 60vw, 22vw" />
              </figure>
            ))}
            <p className="archive__cap">Archív fotók a sporttelepről</p>
          </div>

          <div className="city reveal">
            <div className="city__photo">
              <Image src="/img/pecs-mecsek.jpg" alt="A sporttelep pályái felülről, háttérben Pécs és a Mecsek a tévétoronnyal" fill sizes="(max-width: 900px) 100vw, 60vw" />
            </div>
            <div className="city__team">
              <h3 className="subtitle">Az egyesület vezetése</h3>
              <ul>
                {TEAM.map((t) => (
                  <li key={t.name}>
                    <b>{t.name}</b>
                    <span>{t.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="supporters reveal">
            <p className="supporters__title">Támogatóink</p>
            <ul>
              {SUPPORTERS.map((s) => {
                const h = Math.round(Math.min(70, 58 / Math.sqrt(s.w / s.h / 1.6)) * (s.main ? 1.25 : 1));
                return (
                  <li key={s.name} className={s.main ? "is-main" : undefined}>
                    <Image src={s.img} alt={s.name} width={s.w} height={s.h} style={{ height: h, width: "auto" }} sizes="220px" />
                    {s.main && <span>Kiemelt támogatónk</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band dark dark--deep" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <Label light>Kapcsolat</Label>
            <h2 id="kapcsolat-title" className="title">
              Diófa utca 6., <em>Pécs.</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Cím</dt>
                <dd>
                  {CLUB.address}
                  <small>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Útvonal a Google Térképen
                    </a>{" "}
                    · parkolás a telephelyen belül
                  </small>
                </dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={CLUB.emailHref}>{CLUB.email}</a>
                </dd>
              </div>
            </dl>
            <h3 className="visit__hours-title">Nyitva tartás</h3>
            <Hours />
          </div>
          <div className="visit__right reveal">
            <div className="visit__form">
              <h3 className="subtitle">Írj nekünk</h3>
              <p>Foglalás, oktatás, tagság vagy rendezvény: a levél az egyesülethez megy.</p>
              <ContactForm />
            </div>
            <div className="map">
              <iframe src={CLUB.mapsEmbed} title="A Pécsi Elektromos SE a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
