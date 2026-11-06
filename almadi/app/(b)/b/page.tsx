import Image from "next/image";
import { IconArrow, IconCalendar, IconCheck, IconClock, IconExternal, IconMail, IconPhone, IconPin, IconUsers } from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import { SeasonStrip } from "@/components/shared/SeasonStrip";
import { Weather } from "@/components/shared/Weather";
import { BOOKING_STEPS, CLUB, COURTS, FACTS, MILESTONES, PRICES, SEASON, STORY } from "@/lib/site";

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            {SEASON.closed && (
              <a href="#szezon" className="status reveal">
                <span className="status__dot" aria-hidden="true" />
                <strong>{SEASON.status}</strong>
                <span>{SEASON.reopenShort}</span>
              </a>
            )}
            <p className="eyebrow reveal">
              {CLUB.full}
            </p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz a Balaton partján, <em>1925 óta.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Hat salakpálya a Szent Erzsébet liget fái között, esti világítással. Foglalás a Foggóban vagy telefonon.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Foglalás a Foggóban <IconExternal />
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  <IconPhone /> {CLUB.phone}
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/liget-dron.jpg"
              alt="A hat salakpálya felülről ősszel, a Szent Erzsébet liget fái között, fent a Balaton"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 40%" }}
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

      {/* ——— Season (the dot court stands on the right) ——— */}
      <section id="szezon" className="section season-sec" aria-labelledby="szezon-title">
        <div className="container">
          <p className="eyebrow reveal">Szezon</p>
          <h2 id="szezon-title" className="h2 reveal">
            {SEASON.closed ? (
              <>
                Téli szünet. <em>Tavasszal újra nyitunk.</em>
              </>
            ) : (
              <>
                Nyitva. <em>Reggel héttől este kilencig.</em>
              </>
            )}
          </h2>
          <p className="lead reveal">
            Szabadtéri klub vagyunk: a pályák tavasztól október végéig játszhatók. {SEASON.closed && SEASON.note}
          </p>

          <div className="season-grid">
            <div className="seasoncard glass reveal">
              <div className="seasoncard__row">
                <div>
                  <p className="label">
                    <IconCalendar /> Nyitás
                  </p>
                  <p className="seasoncard__big">{SEASON.reopen}</p>
                </div>
                <div>
                  <p className="label">
                    <IconClock /> Szezonban
                  </p>
                  <p className="seasoncard__big">{CLUB.hours}</p>
                  <p className="muted">minden nap, esti világítással</p>
                </div>
              </div>
              <SeasonStrip />
            </div>
            <div className="glass weathercard reveal">
              <Weather />
            </div>
          </div>
        </div>
      </section>

      {/* ——— Courts & prices (the racket stands on the left) ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák és árak</p>
          <h2 id="palyak-title" className="h2 reveal">
            Hat salakpálya. <em>A ligetben, a víz mellett.</em>
          </h2>
          <p className="lead reveal">{COURTS.text}</p>

          <div className="court-feature">
            <figure className="court-feature__photo glass reveal reveal--img">
              <Image
                src="/img/palyak-felulrol.jpg"
                alt="A hat salakpálya felülről, két sorban, egy esős őszi nap után"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </figure>
            <div className="court-feature__body glass reveal">
              <div className="courtmap" aria-hidden="true">
                {Array.from({ length: COURTS.count }, (_, i) => (
                  <span key={i} className="courtmap__court" />
                ))}
              </div>
              <ul className="checks">
                {COURTS.points.map((p) => (
                  <li key={p}>
                    <IconCheck /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="prices glass reveal">
            <div className="prices__head">
              <p className="label">Árak · {PRICES.season}-os szezon</p>
              <p className="muted">{PRICES.note}</p>
            </div>
            <ul className="prices__list">
              {PRICES.rows.map((r) => (
                <li key={r.item} className="price">
                  <span className="price__item">
                    {r.item}
                    <span>{r.note}</span>
                  </span>
                  <span className="price__value">
                    {r.price}
                    <small> {r.unit}</small>
                  </span>
                </li>
              ))}
            </ul>
            <a href={CLUB.bookingPrices} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm prices__link">
              Bérletek a Foggóban <IconExternal />
            </a>
          </div>
        </div>
      </section>

      {/* ——— Booking (the club's serving player forms on the right) ——— */}
      <section id="foglalas" className="section booking-sec" aria-labelledby="foglalas-title">
        <div className="container">
          <p className="eyebrow reveal">Foglalás</p>
          <h2 id="foglalas-title" className="h2 h2--xl reveal">
            Foglalj pályát. <em>Foggóban vagy telefonon.</em>
          </h2>
          {SEASON.closed && (
            <p className="lead reveal">
              Idén már nem fogadunk vendégeket, a nyitás várhatóan {SEASON.reopen}. Kérdéseidre addig is válaszolunk telefonon és e-mailben.
            </p>
          )}

          <ol className="steps">
            {BOOKING_STEPS.map((s, i) => (
              <li key={s.title} className="step glass reveal">
                <span className="step__n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="booking-ctas reveal">
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
              Foggo naptár <IconExternal />
            </a>
            <a href={CLUB.phoneHref} className="btn btn--ghost">
              <IconPhone /> {CLUB.phone}
            </a>
            <a href="#urlap" className="btn btn--ghost">
              <IconMail /> Írj nekünk
            </a>
          </div>
        </div>
      </section>

      {/* ——— The club (the big ball spins behind) ——— */}
      <section id="klub" className="section club" aria-labelledby="klub-title">
        <div className="container">
          <p className="eyebrow reveal">A klub</p>
          <h2 id="klub-title" className="h2 reveal">
            1925 óta <em>a Szent Erzsébet ligetben.</em>
          </h2>
          {STORY.map((p) => (
            <p key={p.slice(0, 24)} className="lead reveal">
              {p}
            </p>
          ))}

          <ol className="timeline reveal" aria-label="A klub története röviden">
            {MILESTONES.map((m) => (
              <li key={m.year} className="timeline__item">
                <span className="timeline__year">{m.year}</span>
                <span className="timeline__text">{m.text}</span>
              </li>
            ))}
          </ol>

          <figure className="club__photo glass reveal reveal--img">
            <Image src="/img/adogatas.jpg" alt="Adogató játékos salakpályán, felülről" fill sizes="(max-width: 1260px) 100vw, 1200px" style={{ objectFit: "cover", objectPosition: "50% 55%" }} />
          </figure>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Szent Erzsébet liget. <em>Balatonalmádi.</em>
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
                    <span className="contact__line">Pályafoglalás, oktatás, bérlet</span>
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
                    <span className="contact__line">
                      Szezonban minden nap: <strong>{CLUB.hours}</strong>
                    </span>
                    {SEASON.closed && <span className="contact__line">Nyitás: {SEASON.reopen}</span>}
                  </div>
                </li>
                <li>
                  <IconUsers />
                  <div>
                    <span className="contact__label">Elnök</span>
                    <span className="contact__line">{CLUB.president}</span>
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
            <iframe title="A Balatonalmádi Tenisz Club a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
