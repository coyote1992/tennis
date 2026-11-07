import Image from "next/image";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
import { CLUB, COACH, COURTS, FAMILY, PRICES, STEPS } from "@/lib/site";

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
        <Image
          src="/img/palyak-dron.jpg"
          alt="Az Előnyitt salakpályái felülről, fák között, jobbra a faházas klubház"
          fill
          priority
          sizes="100vw"
          className="hero__img"
        />
        <div className="hero__shade" />
        <div className="container hero__inner">
          <p className="hero__kicker">{CLUB.town} · Május 1. tér mögött</p>
          <h1 id="hero-title" className="hero__title">
            Tenisz a fák között. <em>Egész évre 10 000 forintért.</em>
          </h1>
          <p className="hero__lead">Salakpályák, klubház, télen teniszsátor. 14 éves korig ingyen játszhatsz, és kipróbálni is ingyen lehet, két alkalommal.</p>
          <div className="btn-row">
            <a href="#kezdes" className="btn btn--accent">
              Kipróbálom
            </a>
            <a href={CLUB.booking} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
              Pályafoglalás <Icon name="arrowUpRight" size={17} />
            </a>
          </div>
          <p className="hero__phone">
            <a href={CLUB.phoneHref}>
              <Icon name="phone" size={16} /> {CLUB.contact}: {CLUB.phone}
            </a>
            <span>{CLUB.hours}</span>
          </p>
        </div>
      </section>

      {/* ——— árak ——— */}
      <section id="arak" className="band" aria-labelledby="arak-title">
        <div className="container">
          <div className="head head--center reveal">
            <Label>Árak</Label>
            <h2 id="arak-title" className="title">
              Három ár. <em>Kettő ingyenes.</em>
            </h2>
          </div>
          <div className="tickets">
            {PRICES.map((p) => (
              <article key={p.id} className={`ticket reveal${p.main ? " ticket--main" : ""}`}>
                <div className="ticket__top">
                  <p className="ticket__title">{p.title}</p>
                  {p.main && <Image src="/img/logo-szo.png" alt="" width={2439} height={700} className="ticket__logo" sizes="120px" />}
                </div>
                <p className="ticket__price">
                  {p.price}
                  {p.unit && <span>{p.unit}</span>}
                </p>
                <p className="ticket__note">{p.note}</p>
                {p.main && <span className="ticket__stamp">korlátlan</span>}
              </article>
            ))}
          </div>
          <p className="family reveal">
            <Icon name="users" size={20} />
            {FAMILY}
          </p>
        </div>
      </section>

      {/* ——— kezdés ——— */}
      <section id="kezdes" className="band band--blue" aria-labelledby="kezdes-title">
        <div className="container start">
          <div className="start__photo reveal">
            <Image src="/img/paros.jpg" alt="Két játékos a háló mellett a salakpályán" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div className="reveal">
            <Label>Kezdés</Label>
            <h2 id="kezdes-title" className="title">
              Így kezdd el, <em>három lépésben.</em>
            </h2>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="steps__n">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="btn-row">
              <BookingButton>Regisztráció és foglalás</BookingButton>
              <a href={CLUB.phoneHref} className="btn btn--ghost">
                <Icon name="phone" size={17} /> {CLUB.phone}
              </a>
            </div>
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
                {COURTS.title}
              </h2>
            </div>
            <p className="intro">{COURTS.text}</p>
          </div>
          <div className="mosaic reveal">
            <div className="mosaic__item mosaic__item--a">
              <Image src="/img/klubhaz-dron.jpg" alt="A pályák és a faházas klubház felülről" fill sizes="(max-width: 900px) 100vw, 60vw" />
            </div>
            <div className="mosaic__item mosaic__item--b">
              <Image src="/img/futas.jpg" alt="Játékos fut a labdáért a salakpályán" fill sizes="(max-width: 900px) 50vw, 25vw" />
            </div>
            <div className="mosaic__item mosaic__item--c">
              <Image src="/img/tenyeres.jpg" alt="Tenyeres ütés a salakpályán" fill sizes="(max-width: 900px) 50vw, 35vw" />
            </div>
            <div className="mosaic__item mosaic__item--d">
              <Image src="/img/palyak-dron-2.jpg" alt="Játékosok a salakpályákon, felülről" fill sizes="(max-width: 900px) 100vw, 40vw" />
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
              <p>{COURTS.piramis}</p>
              <BookingButton>klub.elonyitt.hu</BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* ——— edző ——— */}
      <section id="edzo" className="band band--paper2" aria-labelledby="edzo-title">
        <div className="container coach">
          <div className="coach__text reveal">
            <Label>Teniszsuli</Label>
            <h2 id="edzo-title" className="title">
              {COACH.name}, <em>az edzőnk</em>
            </h2>
            <p className="coach__intro">{COACH.intro}</p>
            {COACH.bio.map((b) => (
              <p key={b.slice(0, 20)}>{b}</p>
            ))}
            <p className="coach__offer">
              <Icon name="check" size={18} /> {COACH.offer}
            </p>
            <a href="#urlap" className="btn btn--accent">
              Oktatásról érdeklődöm
            </a>
          </div>
          <figure className="coach__figure reveal">
            <div className="coach__photo">
              <Image src="/img/gyerekek-sator.jpg" alt="Gyerekek labdás gyakorlata edzővel a téli teniszsátorban" fill sizes="(max-width: 900px) 80vw, 30vw" />
            </div>
            <figcaption>Gyerekedzés a téli teniszsátorban</figcaption>
            <blockquote className="coach__quote">
              <p>„{COACH.quote}”</p>
              <cite>{COACH.name}</cite>
            </blockquote>
          </figure>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band dark" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <Label light>Kapcsolat</Label>
            <h2 id="kapcsolat-title" className="title">
              Május 1. tér mögött, <em>Nyergesújfalu.</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Cím</dt>
                <dd>
                  {CLUB.address}
                  <small>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Útvonal a Google Térképen
                    </a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Pályabérlés, telefon</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                  <small>{CLUB.contact}</small>
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
                <dd>{CLUB.hours}</dd>
              </div>
            </dl>
            <div className="btn-row">
              <a href={CLUB.facebook} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
            <div className="map">
              <iframe src={CLUB.mapsEmbed} title="Az Előnyitt S.E. a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="visit__form reveal">
            <h3 className="subtitle">Írj nekünk</h3>
            <p>Kipróbálás, bérlet, oktatás: a levél a klubhoz megy.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
