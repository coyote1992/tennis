import Image from "next/image";
import { IconCheck, IconClock, IconExternal, IconFacebook, IconMail, IconPhone, IconPin, IconTrophy, IconUsers } from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import { CLUB, COACH, COURTS, FAMILY, PRICES, STEPS } from "@/lib/site";

const HERO_FACTS = [
  { num: "7–21", label: "minden nap nyitva" },
  { num: "Salak", label: "pályák a fák között" },
  { num: "Télen", label: "teniszsátor" },
];

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">
              {CLUB.name} · {CLUB.town}
            </p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz Nyergesújfalun, <em>évi 10 000 forintért.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Salakpályák a Május 1. tér mögött, minden nap <span className="nobr">7:00–21:00</span>. 14 éves korig ingyen játszhatsz, és két alkalom ingyen kipróbálásra.
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
              src="/img/palyak-dron.jpg"
              alt="Az Előnyitt SE salakpályái felülről, fák között, jobbra a faházas klubház"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 45%" }}
            />
            <figcaption className="hero__caption">{CLUB.address}</figcaption>
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

      {/* ——— Prices (the dot court stands on the right) ——— */}
      <section id="arak" className="section prices-sec" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Árak</p>
          <h2 id="arak-title" className="h2 reveal">
            Három ár. <em>Ebből kettő ingyenes.</em>
          </h2>
          <p className="lead reveal">A klub három árat hirdet: 14 éves korig és kipróbálásra ingyenes, minden más esetben éves bérlet, időben és gyakoriságban korlátlanul.</p>

          <ul className="price-cards">
            {PRICES.map((p) => (
              <li key={p.id} className={`price-card glass reveal${p.main ? " price-card--main" : ""}`}>
                <p className="label">{p.title}</p>
                <p className="price-card__price">
                  {p.price}
                  {p.unit && <small>{p.unit}</small>}
                </p>
                <p className="price-card__note">{p.note}</p>
              </li>
            ))}
          </ul>

          <div className="family glass reveal">
            <span className="family__icon" aria-hidden="true">
              <IconUsers />
            </span>
            <p>{FAMILY}</p>
          </div>

          <div className="booking-ctas reveal">
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
              Online pályafoglalás <IconExternal />
            </a>
            <a href={CLUB.phoneHref} className="btn btn--ghost">
              <IconPhone /> {CLUB.contact}: {CLUB.phone}
            </a>
          </div>

          <div className="play-strip">
            <figure className="snap reveal reveal--img">
              <Image src="/img/paros.jpg" alt="Két játékos a háló mellett a salakpályán" fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="snap reveal reveal--img">
              <Image src="/img/tenyeres.jpg" alt="Tenyeres ütés a salakpályán" fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: "cover", objectPosition: "50% 40%" }} />
            </figure>
          </div>
        </div>
      </section>

      {/* ——— How to start (the racket stands on the left) ——— */}
      <section id="kezdes" className="section start" aria-labelledby="kezdes-title">
        <div className="container">
          <p className="eyebrow reveal">Kezdés</p>
          <h2 id="kezdes-title" className="h2 reveal">
            Három lépés <em>a pályáig.</em>
          </h2>
          <p className="lead reveal">A legtöbb új felnőtt tag a két ingyenes alkalommal kezdi, és szülők is beállnak a gyerekük mellett.</p>

          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="step glass reveal">
                <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="start__foot glass reveal">
            <div>
              <p className="label">
                <IconPhone /> Foglalás telefonon
              </p>
              <p className="start__name">{CLUB.contact}</p>
              <a href={CLUB.phoneHref} className="start__phone">
                {CLUB.phone}
              </a>
            </div>
            <div className="start__ctas">
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                Regisztráció és foglalás <IconExternal />
              </a>
              <a href="#urlap" className="btn btn--ghost">
                <IconMail /> Írj nekünk
              </a>
            </div>
          </div>

          <figure className="snap start__photo reveal reveal--img">
            <Image src="/img/palyak-dron-3.jpg" alt="A pályák felülről, a klubházzal és a parkolóval" fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover", objectPosition: "50% 55%" }} />
          </figure>
        </div>
      </section>

      {/* ——— Courts (the club's rally forms on the right of the heading) ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Salakpályák <em>a fák között.</em>
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
              <Image src="/img/klubhaz-dron.jpg" alt="A pályák és a faházas klubház felülről, a parkolóval" fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="snap reveal reveal--img">
              <Image src="/img/palyak-dron-2.jpg" alt="Két pályasor felülről, játékosokkal" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="snap courts__tall reveal reveal--img">
              <Image src="/img/futas.jpg" alt="Játékos fut a labdáért a salakpályán" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover", objectPosition: "50% 40%" }} />
            </figure>
          </div>

          <div className="piramis glass reveal">
            <div>
              <p className="label">
                <IconTrophy /> Online foglalás és piramis
              </p>
              <p>{COURTS.piramis}</p>
            </div>
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent btn--sm">
              klub.elonyitt.hu <IconExternal />
            </a>
          </div>
        </div>
      </section>

      {/* ——— Coach (the big ball spins behind) ——— */}
      <section id="edzo" className="section coach-sec" aria-labelledby="edzo-title">
        <div className="container">
          <p className="eyebrow reveal">Teniszsuli · {COACH.role}</p>
          <h2 id="edzo-title" className="h2 reveal">
            {COACH.name}. <em>1980 óta a teniszben.</em>
          </h2>
          <p className="lead reveal">{COACH.intro}</p>

          <div className="coach-grid">
            <div className="coach-bio glass reveal">
              {COACH.bio.map((b) => (
                <p key={b.slice(0, 24)}>{b}</p>
              ))}
              <p className="coach-bio__offer">
                <IconCheck /> {COACH.offer}
              </p>
              <a href="#urlap" className="btn btn--accent btn--sm">
                <IconMail /> Érdeklődöm az oktatásról
              </a>
            </div>
            <figure className="coach-photo glass reveal reveal--img">
              <Image src="/img/gyerekek-sator.jpg" alt="Gyerekedzés a klub téli teniszsátrában" fill sizes="(max-width: 900px) 100vw, 360px" style={{ objectFit: "cover" }} />
              <figcaption className="hero__caption">Gyerekedzés a téli teniszsátorban</figcaption>
            </figure>
          </div>

          <blockquote className="coach-quote reveal">
            <p>„{COACH.quote}”</p>
            <footer>{COACH.name}</footer>
          </blockquote>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Május 1. tér mögött. <em>Nyergesújfalu.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
                    <span className="contact__name">{CLUB.name}</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address}
                    </a>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Pályabérlés telefonon</span>
                    <span className="contact__name">{CLUB.contact}</span>
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
                    <span className="contact__label">Nyitvatartás</span>
                    <span className="contact__line">{CLUB.hours}</span>
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
            <iframe title="Az Előnyitt SE pályái a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
