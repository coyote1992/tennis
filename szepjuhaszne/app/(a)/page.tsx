import Image from "next/image";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
import { ABOUT, CAMP, CLUB, COLLECTION, COURTS, HOURS, PROGRAMS, SCHOOL, WINTER } from "@/lib/site";

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`label${light ? " label--light" : ""}`}>{children}</p>;
}

function CallButton({ children = "Pályafoglalás" }: { children?: React.ReactNode }) {
  return (
    <a href={CLUB.phoneHref} className="btn btn--accent">
      <Icon name="phone" size={17} /> {children}
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
            <p className="hero__kicker">{CLUB.area}</p>
            <h1 id="hero-title" className="hero__title">
              Tenisz a Hárshegy lábánál, <em>tenisztörténet a klubházban.</em>
            </h1>
            <p className="hero__lead">
              Két salakos pálya a II. kerületi Szép Juhászné úton, télen sátor alatt. A klubházban egész évben kiállítás, koncertek és
              előadások. Pályát telefonon foglalhatsz Gáspár Balázsnál.
            </p>
            <div className="btn-row">
              <CallButton>{CLUB.phone}</CallButton>
              <a href="#palyak" className="btn btn--ghost">
                Téli árak
              </a>
            </div>
            <ul className="hero__hours">
              {HOURS.map((h) => (
                <li key={h.days}>
                  <span>{h.days}</span>
                  <b>{h.time}</b>
                </li>
              ))}
            </ul>
          </div>
          <figure className="hero__frame">
            <div className="hero__photo">
              <Image
                src="/img/klubhaz-kiallitas.jpg"
                alt="A klubház belseje: faütők a mennyezeten, régi fotók és tárlók a falakon"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <figcaption>A klubház, a gyűjtemény darabjaival</figcaption>
            <Image src="/img/logo.png" alt="" width={512} height={512} className="hero__seal" sizes="120px" />
          </figure>
        </div>
      </section>

      {/* ——— pályák és árak ——— */}
      <section id="palyak" className="band" aria-labelledby="palyak-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Pályák és árak</Label>
              <h2 id="palyak-title" className="title">
                Két salakpálya, <em>télen sátor alatt.</em>
              </h2>
            </div>
            <p className="intro">{COURTS.intro}</p>
          </div>

          <div className="courts">
            <div className="courts__side reveal">
              <ul className="ticks">
                {COURTS.points.map((p) => (
                  <li key={p}>
                    <Icon name="check" size={17} />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="callcard">
                <p className="callcard__label">Pályafoglalás telefonon</p>
                <a href={CLUB.phoneHref} className="callcard__phone">
                  {CLUB.phone}
                </a>
                <p className="callcard__who">{CLUB.owner}</p>
                <p className="callcard__note">Pályát, bérletet és edzést nála lehet egyeztetni.</p>
              </div>
              <div className="courts__photo">
                <Image src="/img/sator-gyerekek.jpg" alt="Salakpálya a téli sátor alatt, edzés közben" fill sizes="(max-width: 900px) 100vw, 34vw" />
              </div>
            </div>

            <article className="board reveal" aria-labelledby="board-title">
              <header className="board__head">
                <Image src="/img/logo.png" alt="" width={512} height={512} className="board__logo" sizes="64px" />
                <div>
                  <h3 id="board-title" className="board__title">
                    Téli teniszpálya bérleti díjak
                  </h3>
                  <p className="board__season">
                    {WINTER.season} · {WINTER.weeks} hét
                  </p>
                </div>
              </header>
              <div className="board__table" role="table" aria-label="Téli pályadíjak időszak szerint">
                <div className="board__row board__row--head" role="row">
                  <span role="columnheader">Időszak</span>
                  {WINTER.columns.map((c) => (
                    <span key={c} role="columnheader">
                      {c}
                    </span>
                  ))}
                </div>
                {WINTER.rows.map((r) => (
                  <div key={r.period} className="board__row" role="row">
                    <span className="board__period" role="rowheader">
                      {r.period}
                    </span>
                    <span role="cell" data-label="Szezonbérlet">
                      <b>{r.season}</b>
                      <small>{r.seasonHour}</small>
                    </span>
                    <span role="cell" data-label="10 alkalmas">
                      <b>{r.ten}</b>
                      <small>{r.tenHour}</small>
                    </span>
                    <span role="cell" data-label="Alkalmi">
                      <b>{r.single}</b>
                    </span>
                  </div>
                ))}
              </div>
              <div className="board__foot">
                <div>
                  <p className="board__foot-title">{WINTER.lastMinute.title}</p>
                  <p>
                    <b>{WINTER.lastMinute.price}</b> · {WINTER.lastMinute.text}
                  </p>
                </div>
                <div>
                  <p className="board__foot-title">Pályalemondás</p>
                  <p>{WINTER.cancel}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ——— tenisziskola ——— */}
      <section id="tenisziskola" className="band band--sage" aria-labelledby="tenisziskola-title">
        <div className="container">
          <div className="school">
            <div className="school__photos reveal">
              <div className="school__photo school__photo--a">
                <Image src="/img/gyerek-salak.jpg" alt="Gyerek tenyeres ütése a salakpályán, a háttérben fák" fill sizes="(max-width: 900px) 60vw, 26vw" />
              </div>
              <div className="school__photo school__photo--b">
                <Image src="/img/labdakosar.jpg" alt="Gyerek tolja a labdákkal teli kosarat" fill sizes="(max-width: 900px) 40vw, 18vw" />
              </div>
            </div>
            <div className="school__text reveal">
              <Label>Tenisziskola</Label>
              <h2 id="tenisziskola-title" className="title">
                Heti két edzés, <em>játékosan.</em>
              </h2>
              <p className="school__lead">{SCHOOL.text}</p>
              <ul className="pills">
                {SCHOOL.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="contactline">
                <span>Tenisziskola:</span>
                <b>{CLUB.school.name}</b>
                <a href={CLUB.school.phoneHref}>{CLUB.school.phone}</a>
                <a href={`mailto:${CLUB.school.email}`}>{CLUB.school.email}</a>
              </div>
            </div>
          </div>

          <div className="camp reveal">
            <div className="camp__head">
              <h3 className="subtitle">Nyári tenisztábor</h3>
              <p>{CAMP.intro}</p>
            </div>
            <ol className="camp__list">
              {CAMP.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
            <div className="camp__price">
              <p className="camp__fee">
                {CAMP.lastPrice}
                <span>részvételi díj {CAMP.lastYear}-ben, 3 étkezéssel</span>
              </p>
              <p>{CAMP.pay}</p>
              <p className="camp__ask">
                Az idei turnusokról Gáspár Balázsnál vagy Gáspár Benedeknél érdeklődj:{" "}
                <a href={CLUB.phoneHref}>{CLUB.phone}</a>, <a href={CLUB.school.phoneHref}>{CLUB.school.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— kiállítás ——— */}
      <section id="kiallitas" className="band museum" aria-labelledby="kiallitas-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label light>Kiállítás a klubházban</Label>
              <h2 id="kiallitas-title" className="title">
                Minden évben <em>új tárlat.</em>
              </h2>
            </div>
            <div>
              <p className="intro">{COLLECTION.intro}</p>
              <p className="museum__permanent">{COLLECTION.permanent}</p>
            </div>
          </div>

          <ol className="timeline reveal" aria-label="Eddigi kiállítások">
            {COLLECTION.exhibitions.map((e) => (
              <li key={e.year}>
                <span className="timeline__year">{e.year}</span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </li>
            ))}
          </ol>

          <div className="vitrine">
            {COLLECTION.objects.map((o, i) => (
              <figure key={o.src} className={`vitrine__item vitrine__item--${i + 1} reveal`}>
                <div className="vitrine__img">
                  <Image src={o.src} alt={`${o.title}: ${o.text}`} fill sizes="(max-width: 900px) 100vw, 40vw" />
                </div>
                <figcaption className="plaque">
                  <span className="plaque__no">No. {String(i + 1).padStart(2, "0")}</span>
                  <b>{o.title}</b>
                  <span>{o.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="press reveal">
            <span>Írtak rólunk:</span>
            {COLLECTION.press.map((p) => (
              <b key={p}>{p}</b>
            ))}
          </p>
        </div>
      </section>

      {/* ——— programok ——— */}
      <section id="programok" className="band band--paper2" aria-labelledby="programok-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Programok</Label>
              <h2 id="programok-title" className="title">
                Több mint <em>teniszpálya.</em>
              </h2>
            </div>
            <p className="intro">
              Versenyek, koncertek, előadások és családi összejövetelek. A klubház programjaira azokat is várjuk, akik még nem
              teniszeznek nálunk.
            </p>
          </div>
          <div className="programs">
            {PROGRAMS.map((p) => (
              <article key={p.title} className="program reveal">
                <div className="program__img">
                  <Image src={p.img} alt={p.alt} width={p.w} height={p.h} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw" />
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
          <div className="welcome reveal">
            <p className="welcome__quote">„{ABOUT.welcome}”</p>
            <p className="welcome__who">{CLUB.owner}, a klub tulajdonosa</p>
            <CallButton>Hívom Balázst</CallButton>
          </div>
        </div>
      </section>

      {/* ——— rólunk ——— */}
      <section id="rolunk" className="band" aria-labelledby="rolunk-title">
        <div className="container about">
          <figure className="about__figure reveal">
            <div className="about__photo">
              <Image src="/img/gaspar-balazs.jpg" alt="Gáspár Balázs teniszütővel a klub logója előtt" fill sizes="(max-width: 900px) 70vw, 30vw" />
            </div>
            <figcaption>Gáspár Balázs</figcaption>
          </figure>
          <div className="about__text reveal">
            <Label>Rólunk</Label>
            <h2 id="rolunk-title" className="title">
              Egy régi barátság <em>klubja.</em>
            </h2>
            {ABOUT.text.map((t) => (
              <p key={t.slice(0, 24)}>{t}</p>
            ))}
            <ul className="people">
              {ABOUT.people.map((p) => (
                <li key={p.name}>
                  <b>{p.name}</b>
                  <span className="people__role">{p.role}</span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band dark" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <Label light>Kapcsolat</Label>
            <h2 id="kapcsolat-title" className="title">
              Szép Juhászné út 14., <em>Hűvösvölgy.</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Pályafoglalás, edzés</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                  <small>
                    {CLUB.owner} · <a href={CLUB.emailHref}>{CLUB.email}</a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Tenisziskola</dt>
                <dd>
                  <a href={CLUB.school.phoneHref}>{CLUB.school.phone}</a>
                  <small>
                    {CLUB.school.name} · <a href={`mailto:${CLUB.school.email}`}>{CLUB.school.email}</a>
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
              <div>
                <dt>Cím</dt>
                <dd>
                  {CLUB.address}
                  <small>
                    Ingyenes parkolás a pályánál ·{" "}
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Útvonal a Google Térképen
                    </a>
                  </small>
                </dd>
              </div>
            </dl>
            <div className="btn-row">
              <a href={CLUB.facebook} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href={CLUB.instagram} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
            <div className="map">
              <iframe src={CLUB.mapsEmbed} title="A Szép Juhászné Teniszklub a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="visit__form reveal">
            <h3 className="subtitle">Írj nekünk</h3>
            <p>Foglalás, bérlet, tenisziskola, tábor vagy program: a levél Gáspár Balázshoz megy.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
