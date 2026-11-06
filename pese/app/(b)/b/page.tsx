import Image from "next/image";
import { IconCheck, IconClock, IconExternal, IconFacebook, IconMail, IconPhone, IconPin, IconUsers } from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import {
  AMENITIES,
  ARCHIVE,
  CLUB,
  COURT_PRICES,
  EVENTS,
  FACTS,
  HOURS,
  MEMBERSHIP,
  OTHER_PRICES,
  OTHER_SPORTS,
  STORY,
  SUPPORTERS,
  TEAM,
  TENNIS,
  TIMELINE,
} from "@/lib/site";

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">
              {CLUB.full} · {CLUB.founded}
            </p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz és pihenés <em>a Diófa utcában.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                13 salakos és 1 műfüves pálya, télen három fedett, mellettük medence, szauna, jakuzzi, konditerem és asztalitenisz. Foglalás online, 14 nappal előre.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Pályafoglalás <IconExternal />
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  <IconPhone /> {CLUB.phone}
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/sporttelep-dron.jpg"
              alt="A Diófa utcai sporttelep felülről: salakpályák fasorok között, jobbra a téli fedés vázai"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 62%" }}
            />
            <figcaption className="hero__caption">{CLUB.address}</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Számokban">
            {FACTS.map((f) => (
              <li className="fact" key={f.label}>
                <span className="fact__num">{f.num}</span>
                <span className="fact__label">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Tennis (the dot court stands on the right) ——— */}
      <section id="tenisz" className="section tennis" aria-labelledby="tenisz-title">
        <div className="container">
          <p className="eyebrow reveal">Tenisz</p>
          <h2 id="tenisz-title" className="h2 reveal">
            Tizennégy pálya. <em>Egész évben.</em>
          </h2>
          <p className="lead reveal">{TENNIS.text}</p>

          <div className="court-feature">
            <figure className="court-feature__photo glass reveal reveal--img">
              <Image
                src="/img/salakpalya.jpg"
                alt="Salakpálya, mögötte lámpaoszlopok és fasor"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </figure>
            <div className="court-feature__body glass reveal">
              <ul className="checks">
                {TENNIS.points.map((p) => (
                  <li key={p}>
                    <IconCheck /> {p}
                  </li>
                ))}
              </ul>
              <div className="court-feature__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent btn--sm">
                  Online pályafoglalás <IconExternal />
                </a>
                <a href={CLUB.register} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                  Regisztráció
                </a>
              </div>
            </div>
          </div>

          <div className="coach-grid">
            {TENNIS.coaching.map((c) => (
              <article key={c.title} className="coach glass reveal">
                <figure className="coach__photo">
                  <Image src={c.img} alt={c.imgAlt} fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: "cover" }} />
                </figure>
                <div className="coach__body">
                  <h3 className="h3">{c.title}</h3>
                  <p>{c.text}</p>
                  <a href={c.contact.phoneHref} className="coach__contact">
                    <IconPhone />
                    <span>
                      {c.contact.name}
                      <strong>{c.contact.phone}</strong>
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Pool, sauna, gym (the racket stands on the left) ——— */}
      <section id="pihenes" className="section relax" aria-labelledby="pihenes-title">
        <div className="container">
          <p className="eyebrow reveal">Medence, szauna, edzés</p>
          <h2 id="pihenes-title" className="h2 reveal">
            Meccs után <em>medence és szauna.</em>
          </h2>
          <p className="lead reveal">
            A teniszpályák mellett kültéri medence, szauna, jakuzzi, konditerem és két fűtött asztalitenisz-terem várja a játékosokat és a pihenni vágyókat.
          </p>

          <div className="amenity-grid">
            {AMENITIES.map((a) => (
              <article key={a.id} className="amenity glass reveal">
                <figure className="amenity__photo">
                  <Image src={a.img} alt={a.imgAlt} fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
                </figure>
                <div className="amenity__body">
                  <h3 className="h3">{a.title}</h3>
                  <p>{a.text}</p>
                  {a.price && <p className="amenity__price">{a.price}</p>}
                </div>
              </article>
            ))}
          </div>

          <div className="member glass reveal">
            <div>
              <p className="label">Éves tagság</p>
              <p className="member__price">{MEMBERSHIP.price}</p>
            </div>
            <div className="member__text">
              <p>{MEMBERSHIP.text}</p>
              <p className="muted">{OTHER_SPORTS}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Prices (the club's crossed rackets form on the right) ——— */}
      <section id="arak" className="section prices-sec" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Árak</p>
          <h2 id="arak-title" className="h2 reveal">
            Pályabérlés <em>{COURT_PRICES.season.replace("-", "\u2011")}.</em>
          </h2>
          <p className="lead reveal">Nyári szezon: {COURT_PRICES.seasonDates} Kérdésed van az árakról vagy a bérletekről? Hívj minket.</p>

          <div className="pricecard glass reveal">
            <p className="label">Óradíjak</p>
            <ul className="prices__list">
              {COURT_PRICES.rows.map((r) => (
                <li key={r.item} className="price">
                  <span className="price__item">
                    {r.item}
                    <span>{r.who}</span>
                  </span>
                  <span className="price__value">
                    {r.price}
                    <small> {r.unit}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pricecard glass reveal">
            <p className="label">Szezonbérlet érvényes tagsággal · szezonra, fejenként</p>
            <ul className="passes">
              {COURT_PRICES.passes.map((p) => (
                <li key={p.item} className="pass">
                  <span className="pass__item">{p.item}</span>
                  <span className="pass__when">{p.when}</span>
                  <span className="pass__price">{p.price}</span>
                </li>
              ))}
            </ul>
            <ul className="notes">
              {COURT_PRICES.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>

          <div className="pricecard glass reveal">
            <p className="label">Szauna, konditerem, asztalitenisz · 2026</p>
            <ul className="prices__list prices__list--two">
              {OTHER_PRICES.map((r) => (
                <li key={r.item} className="price">
                  <span className="price__item">{r.item}</span>
                  <span className="price__value price__value--sm">
                    {r.price}
                    <small> {r.unit}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="booking-ctas reveal">
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
              Online pályafoglalás <IconExternal />
            </a>
            <a href={CLUB.phoneHref} className="btn btn--ghost">
              <IconPhone /> {CLUB.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ——— Events ——— */}
      <section id="rendezveny" className="section events" aria-labelledby="rendezveny-title">
        <div className="container">
          <p className="eyebrow reveal">Rendezvények</p>
          <h2 id="rendezveny-title" className="h2 reveal">
            Klubház és terasz, <em>50 főig.</em>
          </h2>
          <p className="lead reveal">{EVENTS.text}</p>

          <div className="events__grid">
            <figure className="snap events__big reveal reveal--img">
              <Image src="/img/terasz.jpg" alt="Fedett terasz faasztalokkal és kerti sütővel" fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="snap reveal reveal--img">
              <Image src="/img/klubhaz.jpg" alt="A faburkolatú klubszoba padokkal és asztallal" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="snap reveal reveal--img">
              <Image src="/img/terasz-asztal.jpg" alt="Hosszú asztal a teraszon, kertre néző kilátással" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>

          <div className="pricecard glass reveal events__prices">
            <div>
              <p className="label">Bérleti díj</p>
              <ul className="prices__list">
                {EVENTS.rows.map((r) => (
                  <li key={r.item} className="price">
                    <span className="price__item">{r.item}</span>
                    <span className="price__value price__value--sm">
                      {r.price}
                      <small> {r.unit}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="events__side">
              <p className="muted">{EVENTS.includes}</p>
              <div className="events__ctas">
                <a href="#urlap" className="btn btn--accent btn--sm">
                  <IconMail /> Ajánlatot kérek
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost btn--sm">
                  <IconPhone /> {CLUB.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— The club (the big ball spins behind) ——— */}
      <section id="klub" className="section club" aria-labelledby="klub-title">
        <div className="container">
          <p className="eyebrow reveal">A klub</p>
          <h2 id="klub-title" className="h2 reveal">
            1968 óta <em>a Diófa utcában.</em>
          </h2>
          {STORY.map((p) => (
            <p key={p.slice(0, 24)} className="lead reveal">
              {p}
            </p>
          ))}

          <ol className="timeline reveal" aria-label="Az egyesület története röviden">
            {TIMELINE.map((m) => (
              <li key={m.year} className="timeline__item">
                <span className="timeline__year">{m.year}</span>
                <span className="timeline__text">{m.text}</span>
              </li>
            ))}
          </ol>

          <div className="archive reveal">
            <p className="label">Archív felvételek</p>
            <ul className="archive__strip">
              {ARCHIVE.map((a) => (
                <li key={a.src} className="archive__item">
                  <Image src={a.src} alt={a.alt} width={a.w} height={a.h} sizes="(max-width: 900px) 70vw, 24vw" />
                </li>
              ))}
            </ul>
          </div>

          <figure className="club__photo glass reveal reveal--img">
            <Image src="/img/pecs-mecsek.jpg" alt="A sporttelep felülről, mögötte Pécs és a Mecsek" fill sizes="(max-width: 900px) 100vw, 900px" style={{ objectFit: "cover", objectPosition: "50% 45%" }} />
            <figcaption className="hero__caption">A sporttelep, háttérben Pécs és a Mecsek</figcaption>
          </figure>

          <div className="team glass reveal">
            <p className="label">
              <IconUsers /> Vezetőség
            </p>
            <ul className="team__list">
              {TEAM.map((t) => (
                <li key={t.name}>
                  <span className="team__name">{t.name}</span>
                  <span className="team__role">{t.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="supporters reveal">
            <p className="label">Támogatóink</p>
            <ul className="supporters__list">
              {SUPPORTERS.map((s) => (
                <li key={s.name} className={`supporter${s.main ? " supporter--main" : ""}`}>
                  <Image src={s.img} alt={s.name} width={s.w} height={s.h} sizes="200px" />
                  {s.main && <span>Kiemelt támogatónk</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Diófa utca 6. <em>Pécs.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
                    <span className="contact__name">{CLUB.full}</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address}
                    </a>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Telefon</span>
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
                  <IconClock />
                  <div>
                    <span className="contact__label">Nyitva tartás</span>
                    <ul className="hours">
                      {HOURS.map((h) => (
                        <li key={h.day}>
                          <span>{h.day}</span>
                          <strong>{h.time}</strong>
                        </li>
                      ))}
                    </ul>
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
                <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer" className="btn btn--ghost" aria-label="Facebook">
                  <IconFacebook />
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
            <iframe title="A Pécsi Elektromos SE sporttelepe a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
