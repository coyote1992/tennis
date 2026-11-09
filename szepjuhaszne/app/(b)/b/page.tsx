import Image from "next/image";
import { IconCalendar, IconCard, IconCheck, IconClock, IconFacebook, IconInstagram, IconMail, IconPhone, IconPin, IconTrophy, IconUsers } from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import { ABOUT, CAMP, CLUB, COLLECTION, COURTS, HOURS, PROGRAMS, SCHOOL, WINTER } from "@/lib/site";

const HERO_FACTS = [
  { num: "7–22", label: "hétköznap nyitva, hétvégén 7–20" },
  { num: "2", label: "salakos pálya, télen sátor alatt" },
  { num: "30+", label: "év gyűjtése a klubház vitrinjeiben" },
];

export default function BHome() {
  const balazs = ABOUT.people[0];

  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">
              {CLUB.name} · Budapest, II. kerület
            </p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz a Hárshegy lábánál, <em>klubház tenisztörténettel.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Két salakos pálya zöld környezetben, a Budai Tájvédelmi Körzet mellett. Télen sátor alatt játszunk, a klubházban egész évben kiállítás. Pályát telefonon foglalhatsz Gáspár Balázsnál.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> Hívom Balázst
                </a>
                <a href="#arak" className="btn btn--ghost">
                  <IconCard /> Téli árak
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/klubhaz-kiallitas.jpg"
              alt="A klubház belseje: faütők a mennyezeten, a falakon tenisztörténeti képek és relikviák"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 42%" }}
            />
            <figcaption className="hero__caption">A klubház, a gyűjtemény darabjaival</figcaption>
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

      {/* ——— Courts, booking, winter prices (the racket stands on the right) ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák és árak</p>
          <h2 id="palyak-title" className="h2 reveal">
            Két salakpálya, <em>télen sátor alatt.</em>
          </h2>
          <p className="lead reveal">{COURTS.intro}</p>

          <ul className="checks checks--grid reveal">
            {COURTS.points.map((p) => (
              <li key={p}>
                <IconCheck /> {p}
              </li>
            ))}
          </ul>

          <div className="book glass reveal">
            <div className="book__main">
              <p className="label">
                <IconPhone /> Pályafoglalás
              </p>
              <p className="book__lead">{COURTS.booking}</p>
              <a href={CLUB.phoneHref} className="book__phone">
                {CLUB.phone}
              </a>
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <IconPhone /> Hívom
              </a>
            </div>
            <div className="book__hours">
              <p className="label">
                <IconClock /> Nyitvatartás
              </p>
              <ul className="hours">
                {HOURS.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <strong>{h.time}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="arak" className="prices">
            <div className="prices__head reveal">
              <p className="label">
                <IconCalendar /> Téli bérleti díjak
              </p>
              <p className="prices__season">
                {WINTER.season} <span>· {WINTER.weeks} hét</span>
              </p>
            </div>

            <div className="price-table glass reveal" role="table" aria-label="Téli teniszpálya bérleti díjak">
              <div className="price-table__row price-table__row--head" role="row">
                <span role="columnheader">Időszak</span>
                {WINTER.columns.map((c) => (
                  <span key={c} role="columnheader">
                    {c}
                  </span>
                ))}
              </div>
              {WINTER.rows.map((r) => (
                <div key={r.period} className="price-table__row" role="row">
                  <span className="price-table__period" role="rowheader">
                    {r.period}
                  </span>
                  <span className="price-table__cell" role="cell" data-label={WINTER.columns[0]}>
                    <strong>{r.season}</strong>
                    <small>{r.seasonHour}</small>
                  </span>
                  <span className="price-table__cell" role="cell" data-label={WINTER.columns[1]}>
                    <strong>{r.ten}</strong>
                    <small>{r.tenHour}</small>
                  </span>
                  <span className="price-table__cell price-table__cell--single" role="cell" data-label={WINTER.columns[2]}>
                    <strong>{r.single}</strong>
                  </span>
                </div>
              ))}
            </div>

            <div className="price-notes">
              <div className="price-note price-note--accent glass reveal">
                <p className="label">{WINTER.lastMinute.title}</p>
                <p className="price-note__price">{WINTER.lastMinute.price}</p>
                <p>{WINTER.lastMinute.text}</p>
              </div>
              <div className="price-note glass reveal">
                <p className="label">
                  <IconCalendar /> Pályalemondás
                </p>
                <p>{WINTER.cancel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Tennis school and camp (the court stands on the left) ——— */}
      <section id="tenisziskola" className="section school" aria-labelledby="tenisziskola-title">
        <div className="container">
          <p className="eyebrow reveal">Tenisziskola</p>
          <h2 id="tenisziskola-title" className="h2 reveal">
            Gyerekeknek, <em>heti két alkalommal.</em>
          </h2>
          <p className="lead reveal">{SCHOOL.text}</p>

          <div className="school__grid">
            <figure className="snap school__photo reveal reveal--img">
              <Image src="/img/sator-gyerekek.jpg" alt="Gyerekek edzésen a sátor alatti salakpályán" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover", objectPosition: "50% 55%" }} />
            </figure>
            <div className="school__card glass reveal">
              <ul className="checks">
                {SCHOOL.points.map((p) => (
                  <li key={p}>
                    <IconCheck /> {p}
                  </li>
                ))}
              </ul>
              <div className="person">
                <p className="label">Tenisziskola információ</p>
                <p className="person__name">{CLUB.school.name}</p>
                <a href={CLUB.school.phoneHref} className="person__line">
                  {CLUB.school.phone}
                </a>
                <a href={`mailto:${CLUB.school.email}`} className="person__line">
                  {CLUB.school.email}
                </a>
              </div>
              <a href={CLUB.school.phoneHref} className="btn btn--accent btn--sm">
                <IconPhone /> Hívom Benedeket
              </a>
            </div>
          </div>

          <div className="camp glass reveal">
            <div className="camp__text">
              <p className="label">
                <IconTrophy /> Nyári tenisztábor
              </p>
              <h3 className="h3">{CAMP.intro}</h3>
              <ul className="checks">
                {CAMP.points.map((p) => (
                  <li key={p}>
                    <IconCheck /> {p}
                  </li>
                ))}
              </ul>
              <p className="muted">{CAMP.pay}</p>
            </div>
            <div className="camp__side">
              <div className="camp__price">
                <span className="tag">{CAMP.lastYear}-es díj</span>
                <strong>{CAMP.lastPrice}</strong>
                <span>egy hét, a háromszori étkezéssel és a tanfolyami díjjal</span>
              </div>
              <p className="camp__ask">Az idei időpontokról és díjról érdeklődj a szervezőknél: {CAMP.organizers}.</p>
              <div className="camp__ctas">
                <a href={CLUB.phoneHref} className="btn btn--ghost btn--sm">
                  <IconPhone /> Balázs
                </a>
                <a href={CLUB.school.phoneHref} className="btn btn--ghost btn--sm">
                  <IconPhone /> Benedek
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— The collection (the club's mark forms on the right of the heading) ——— */}
      <section id="kiallitas" className="section collection" aria-labelledby="kiallitas-title">
        <div className="container">
          <p className="eyebrow reveal">Kiállítás a klubházban</p>
          <h2 id="kiallitas-title" className="h2 reveal">
            Tenisztörténet <em>a vitrinekben.</em>
          </h2>
          <p className="lead reveal">{COLLECTION.intro}</p>

          <p className="permanent glass reveal">
            <IconTrophy />
            <span>{COLLECTION.permanent}</span>
          </p>

          <ol className="timeline reveal" aria-label="Kiállítások">
            {COLLECTION.exhibitions.map((x) => (
              <li key={x.year} className="timeline__item">
                <span className="timeline__year">{x.year}</span>
                <div>
                  <h3 className="h3">{x.title}</h3>
                  <p>{x.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <ul className="objects">
            {COLLECTION.objects.map((o) => (
              <li key={o.src} className="object reveal">
                <figure className="snap object__img reveal--img">
                  <Image src={o.src} alt={`${o.title}: ${o.text}`} fill sizes="(max-width: 900px) 50vw, 26vw" style={{ objectFit: "cover" }} />
                </figure>
                <p className="object__label">
                  <strong>{o.title}</strong>
                  <span>{o.text}</span>
                </p>
              </li>
            ))}
          </ul>

          <div className="press reveal">
            <span className="label">Írtak, beszéltek rólunk</span>
            <ul className="chips">
              {COLLECTION.press.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Programmes (the big ball spins behind) ——— */}
      <section id="programok" className="section programs" aria-labelledby="programok-title">
        <div className="container">
          <p className="eyebrow reveal">Programok</p>
          <h2 id="programok-title" className="h2 reveal">
            Tenisz, zene, <em>közösség.</em>
          </h2>
          <p className="lead reveal">
            {ABOUT.welcome} A versenyek mellett a klubházban koncertek, előadások és születésnapok is vannak.
          </p>

          <ul className="program-grid">
            {PROGRAMS.map((p) => (
              <li key={p.title} className="program glass reveal">
                <figure className="program__img">
                  <Image src={p.img} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
                </figure>
                <div className="program__body">
                  <h3 className="h3">{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="welcome glass reveal">
            <p>
              <strong>Szívesen csatlakoznál?</strong> Hívd Gáspár Balázst, és mindent megbeszéltek.
            </p>
            <a href={CLUB.phoneHref} className="btn btn--accent">
              <IconPhone /> {CLUB.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ——— About ——— */}
      <section id="rolunk" className="section about" aria-labelledby="rolunk-title">
        <div className="container">
          <div className="about__grid">
            <div>
              <p className="eyebrow reveal">Rólunk</p>
              <h2 id="rolunk-title" className="h2 reveal">
                Egy régi barátság <em>klubja.</em>
              </h2>
              {ABOUT.text.map((t) => (
                <p key={t.slice(0, 24)} className="lead reveal">
                  {t}
                </p>
              ))}
              <ul className="people">
                {ABOUT.people.map((p) => (
                  <li key={p.name} className="person-card glass reveal">
                    <p className="label">{p.role}</p>
                    <h3 className="h3">{p.name}</h3>
                    <p>{p.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="snap about__photo reveal reveal--img">
              <Image src="/img/gaspar-balazs.jpg" alt={`${balazs.name} teniszütővel a klub logója előtt`} fill sizes="(max-width: 900px) 100vw, 36vw" style={{ objectFit: "cover", objectPosition: "50% 30%" }} />
              <figcaption>
                {balazs.name}, {balazs.role.toLowerCase()}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Hívj, <em>és megbeszéljük.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Pálya, edzés</span>
                    <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                    <span className="contact__name">{CLUB.owner}</span>
                  </div>
                </li>
                <li>
                  <IconUsers />
                  <div>
                    <span className="contact__label">Tenisziskola</span>
                    <a href={CLUB.school.phoneHref}>{CLUB.school.phone}</a>
                    <span className="contact__name">{CLUB.school.name}</span>
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
                    {HOURS.map((h) => (
                      <span key={h.days} className="contact__line">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </div>
                </li>
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address}
                    </a>
                    <span className="contact__name">Ingyenes parkolás a pályánál</span>
                  </div>
                </li>
              </ul>
              <div className="social" aria-label="Közösségi oldalak">
                <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <IconFacebook />
                </a>
                <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <IconInstagram />
                </a>
              </div>
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
            <iframe title="A Szép Juhászné Teniszklub a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
