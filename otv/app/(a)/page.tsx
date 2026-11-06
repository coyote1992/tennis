import Image from "next/image";
import { JoinPicker } from "@/components/shared/JoinPicker";
import {
  APP_NOTE,
  APP_STEPS,
  CAMP,
  CHAMPIONS,
  CHAMPIONS_U14,
  CLUB,
  FACTS,
  HOURS,
  MEMBERSHIP,
  PARTNERS,
  PLAY_STAY,
  PRICE_NOTES,
  PRICES,
  PROGRAMS,
  ROOMS,
  SEASON,
  SERVICES,
  TIMETABLE,
  TOURNAMENTS,
  TOURNAMENT_DIRECTOR,
} from "@/lib/site";

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Chapter({ n, children, left = false }: { n: string; children: React.ReactNode; left?: boolean }) {
  return (
    <p className={`chapter${left ? " chapter--left" : ""}`}>
      <span className="chapter__n">{n}.</span> {children}
    </p>
  );
}

const DAYS = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];

const BALL_CLASS: Record<string, string> = { "Piros labda": "ball--red", "Narancs labda": "ball--orange", "Zöld labda": "ball--green" };

export default function Home() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero dark" aria-labelledby="hero-title">
        <div className="container">
          <p className="hero__est">Mogyoród · Teniszklub</p>
          <h1 id="hero-title">
            Open Tennis Valley
            <em>Hat salakpálya, egész évben.</em>
          </h1>
          <p className="hero__lead">
            Nyáron a szabad ég alatt, télen fedett csarnokban. Oktatás ovisoktól felnőttekig, nemzetközi versenyek és közösség, Budapest belvárosától kb. 25 km-re.
          </p>
          <div className="btn-row">
            <a href="#foglalas" className="btn btn--accent">
              Foglalj pályát <Arrow />
            </a>
            <a href="#oktatas" className="btn btn--ghost">
              Ingyenes gyerek-próbaedzés
            </a>
          </div>
          <figure className="hero__mat">
            <div className="hero__mat-inner">
              <Image src="/img/hero-paros.jpg" alt="Páros mérkőzés a szabadtéri salakpályán, felülnézetből" fill priority sizes="(max-width: 1100px) 100vw, 1060px" />
            </div>
            <figcaption>Páros a nyári salakon · Open Tennis Valley, Mogyoród</figcaption>
          </figure>
          <ul className="pillars">
            {FACTS.map((f) => (
              <li key={f.label}>
                <b>{f.num}</b>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— I. pályák ——— */}
      <section id="palyak" className="band" aria-labelledby="palyak-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="I">A pályák</Chapter>
            <h2 id="palyak-title" className="title title--center">
              Két évszak, <em>ugyanaz a salak.</em>
            </h2>
            <p className="intro intro--center">
              Hat salakpálya, egész éves teniszezéssel. A 2026/27-es téli szezon szeptember 28-tól április 25-ig tart: {SEASON.weeks} hét fedett tenisz.
            </p>
          </div>
          <div className="seasons">
            <article className="season reveal">
              <figure className="photo-mat">
                <div className="photo-mat__inner">
                  <Image src="/img/nyari-palyak.jpg" alt="A szabadtéri salakpályák egy nyári tornán" fill sizes="(max-width: 860px) 100vw, 560px" />
                </div>
              </figure>
              <p className="season__tag">Nyár</p>
              <h3>Szabadtéri salak</h3>
              <p>{SEASON.summer}</p>
            </article>
            <article className="season reveal">
              <figure className="photo-mat">
                <div className="photo-mat__inner">
                  <Image src="/img/teli-csarnok.jpg" alt="A fedett téli csarnok salakpályái egy junior tornán" fill sizes="(max-width: 860px) 100vw, 560px" />
                </div>
              </figure>
              <p className="season__tag">Tél · {SEASON.weeks} hét</p>
              <h3>Fedett csarnok</h3>
              <p>{SEASON.winter}</p>
            </article>
          </div>
          <div className="hours-strip reveal" aria-label="Nyitvatartás">
            <p className="hours-strip__title">Nyitvatartás</p>
            {HOURS.map((h) => (
              <p key={h.days}>
                <span>{h.days}</span>
                <b>{h.time}</b>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ——— II. foglalás ——— */}
      <section id="foglalas" className="band band--paper2" aria-labelledby="foglalas-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="II">Foglalás és árak</Chapter>
            <h2 id="foglalas-title" className="title title--center">
              Pár kattintás, <em>és tiéd a pálya.</em>
            </h2>
            <p className="intro intro--center">Bérlet és elköteleződés nélkül: a saját Open Tennis Valley appban látod a szabad pályákat, foglalsz és fizetsz.</p>
          </div>

          <div className="booking">
            <div className="tariff reveal">
              <div className="tariff__head">
                <p className="tariff__kicker">{SEASON.name}</p>
                <h3>Pályaárak</h3>
                <p className="tariff__sub">
                  {SEASON.courts} · {SEASON.dates}
                </p>
              </div>
              <table className="tariff__table">
                <thead>
                  <tr>
                    <th scope="col">Sáv</th>
                    <th scope="col">Alkalmi · pálya/óra</th>
                    <th scope="col">10 alkalmas bérlet</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICES.map((p) => (
                    <tr key={p.band} className={p.best ? "is-best" : undefined}>
                      <th scope="row">{p.band}</th>
                      <td>{p.price}</td>
                      <td>
                        {p.pass}
                        <small>{p.perPass} / alkalom</small>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="tariff__note">
                {PRICE_NOTES.pass} {PRICE_NOTES.fine}
              </p>
            </div>

            <div className="app reveal">
              <p className="app__kicker">Saját appunkban</p>
              <h3>Foglalj bárhonnan, bármikor.</h3>
              <ol className="steps">
                {APP_STEPS.map((s, i) => (
                  <li key={s.title}>
                    <span className="steps__n">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <b>{s.title}</b>
                      <span>{s.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="stores">
                <a className="btn btn--accent" href={CLUB.appStore} target="_blank" rel="noopener noreferrer">
                  App Store <Arrow />
                </a>
                <a className="btn btn--accent" href={CLUB.googlePlay} target="_blank" rel="noopener noreferrer">
                  Google Play <Arrow />
                </a>
              </div>
              <p className="app__note">
                {APP_NOTE} Kérdésed van? Hívj: <a href={CLUB.phoneHref}>{CLUB.phone}</a>
              </p>
            </div>
          </div>

          <div className="membership reveal">
            <div className="membership__price">
              <p className="membership__kicker">Klubtagság · 2026/27</p>
              <p className="membership__num">{MEMBERSHIP.price}</p>
              <p className="membership__per">{MEMBERSHIP.per}</p>
            </div>
            <div className="membership__body">
              <h3>Több tenisz, több kedvezmény.</h3>
              <ul className="perks">
                {MEMBERSHIP.perks.map((p) => (
                  <li key={p.title}>
                    <b>{p.title}</b> {p.text}
                  </li>
                ))}
              </ul>
              <p className="membership__status">{MEMBERSHIP.status}</p>
              <div className="btn-row">
                <a className="btn btn--ghost" href={MEMBERSHIP.notifyHref}>
                  Értesítést kérek a nyitásról
                </a>
                <a className="link" href={CLUB.clubRules} target="_blank" rel="noopener noreferrer">
                  Klubszabályzat (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— III. oktatás ——— */}
      <section id="oktatas" className="band" aria-labelledby="oktatas-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="III">Oktatás</Chapter>
            <h2 id="oktatas-title" className="title title--center">
              Szeresse meg a teniszt. <em>A többi majd jön magától.</em>
            </h2>
            <p className="intro intro--center">
              Nálunk nem a dobogó a cél, hanem a játék: hogy a gyerek szívesen jöjjön edzésre, barátokat találjon, és megszeresse a teniszt. Aki
              komolyabban is belevágna, annak is megvan a helye, a saját tempójában.
            </p>
          </div>

          <div className="programs">
            {PROGRAMS.map((p) => (
              <article key={p.id} className="program reveal">
                <p className="program__age">{p.age}</p>
                <h3>{p.name}</h3>
                <p className="program__price">
                  {p.price} <span>{p.per}</span>
                </p>
                <p className="program__lead">{p.lead}</p>
                {p.when && <p className="program__when">{p.when}</p>}
                <ul className="program__points">
                  {p.points.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="playstay reveal">
            <figure className="photo-mat playstay__photo">
              <div className="photo-mat__inner">
                <Image src="/img/piros-labda.jpg" alt="Puha piros labda a háló mögött" fill sizes="(max-width: 860px) 100vw, 460px" />
              </div>
              <figcaption>A piros labda: itt kezd mindenki.</figcaption>
            </figure>
            <div>
              <p className="chapter chapter--left">ITF Play &amp; Stay</p>
              <h3 className="subtitle">Már az első edzésen játszik.</h3>
              <p className="playstay__lead">
                A kezdők lassabb labdával, a méretükhöz igazított pályán tanulnak, így az első órától adogatnak, labdamenetet játszanak és pontot
                számolnak. A következő szintre a gyerek az edző javaslatára lép tovább.
              </p>
              <ol className="balls">
                {PLAY_STAY.map((b) => (
                  <li key={b.ball}>
                    <span className={`ball ${BALL_CLASS[b.ball]}`} aria-hidden="true" />
                    <div>
                      <b>{b.ball}</b>
                      <span className="balls__meta">
                        {b.speed} · {b.court}
                      </span>
                      <span>{b.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="schedule reveal">
            <div className="schedule__head">
              <h3 className="subtitle">Gyerekcsoportok hetente</h3>
              <p>Piros csoport · U12 · U14 · U16</p>
            </div>
            <div className="schedule__scroll">
              <table className="schedule__table">
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="sr-only">Időpont</span>
                    </th>
                    {TIMETABLE.days.map((d) => (
                      <th key={d} scope="col">
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TIMETABLE.rows.map((r) => (
                    <tr key={r.time}>
                      <th scope="row">{r.time}</th>
                      {r.cells.map((c, i) => (
                        <td key={i}>{c ? <span className={`slot slot--${c.startsWith("Piros") ? "piros" : c.startsWith("Meccs") ? "meccs" : "kor"}`}>{c}</span> : <span className="slot--empty">·</span>}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="schedule__days" aria-label="Edzések naponta">
              {DAYS.map((d, i) => {
                const slots = TIMETABLE.rows.filter((r) => r.cells[i]).map((r) => `${r.time} ${r.cells[i]}`);
                return (
                  <li key={d}>
                    <b>{d}</b>
                    <span>{slots.length ? slots.join(" · ") : "nincs edzés"}</span>
                  </li>
                );
              })}
            </ul>
            <p className="schedule__note">{TIMETABLE.note}</p>
          </div>

          <div className="camp reveal">
            <div className="camp__text">
              <p className="chapter chapter--left">Nyáron</p>
              <h3 className="subtitle">{CAMP.title}</h3>
              <p>{CAMP.lead}</p>
              <ul className="camp__facts">
                {CAMP.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <dl className="camp__prices">
                {CAMP.prices.map((p) => (
                  <div key={p.label}>
                    <dt>{p.label}</dt>
                    <dd>{p.price}</dd>
                  </div>
                ))}
              </dl>
              <p className="camp__note">{CAMP.note}</p>
            </div>
            <div className="camp__photos">
              <figure className="photo-mat">
                <div className="photo-mat__inner photo-mat__inner--tall">
                  <Image src="/img/gyerekek.jpg" alt="Táborozó gyerekek a salakpályán" fill sizes="(max-width: 860px) 50vw, 280px" />
                </div>
              </figure>
              <figure className="photo-mat">
                <div className="photo-mat__inner photo-mat__inner--tall">
                  <Image src="/img/edzes.jpg" alt="Edző és játékos beszélget a pálya mellett" fill sizes="(max-width: 860px) 50vw, 280px" />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ——— IV. versenyek ——— */}
      <section id="versenyek" className="band dark" aria-labelledby="versenyek-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="IV">Versenyek</Chapter>
            <h2 id="versenyek-title" className="title title--center">
              Négy nemzetközi torna, <em>egyetlen évben.</em>
            </h2>
            <p className="intro intro--center">
              2026-ban a Tennis Europe, az ITF és a UTR Pro Tennis Tour is Mogyoródon játszott: juniorok és profik, nyári salakon és a téli csarnokban.
            </p>
          </div>
          <div className="tourney">
            <ol className="programme reveal">
              {TOURNAMENTS.map((t) => (
                <li key={t.name}>
                  <p className="programme__when">{t.when}</p>
                  <div>
                    <p className="programme__tour">{t.tour}</p>
                    <h3>{t.name}</h3>
                    <p className="programme__facts">{t.facts.join(" · ")}</p>
                    <p>{t.text}</p>
                    <a className="link link--light" href={t.href} target="_blank" rel="noopener noreferrer">
                      Eredmények ↗
                    </a>
                  </div>
                </li>
              ))}
            </ol>
            <aside className="honours reveal" aria-labelledby="honours-title">
              <figure className="honours__photo">
                <Image src="/img/j60-bajnokok.jpg" alt="Az ITF J60 bajnokai az eredményhirdetésen" fill sizes="(max-width: 860px) 100vw, 420px" />
              </figure>
              <h3 id="honours-title">Bajnokok · 2026</h3>
              <p className="honours__event">ITF J60 · Open Tennis Valley Open</p>
              <ul>
                {CHAMPIONS.map((c) => (
                  <li key={c.event}>
                    <span>{c.event}</span>
                    <b>{c.names}</b>
                    <small>{c.nat}</small>
                  </li>
                ))}
              </ul>
              <p className="honours__event">Tennis Europe U14 · Open Tennis Valley Cup</p>
              <ul>
                {CHAMPIONS_U14.map((c) => (
                  <li key={c.event}>
                    <span>{c.event}</span>
                    <b>{c.names}</b>
                    {c.nat && <small>{c.nat}</small>}
                  </li>
                ))}
              </ul>
              <p className="honours__dir">Versenyigazgató: {TOURNAMENT_DIRECTOR}</p>
            </aside>
          </div>
          <div className="partners reveal">
            <p className="partners__title">Akik mellettünk állnak</p>
            <ul>
              {PARTNERS.map((p) => {
                // same visual weight for wide wordmarks and square badges: equal area, not equal height
                const h = Math.round(Math.sqrt(4400 / (p.w / p.h)));
                return (
                  <li key={p.name}>
                    <Image src={p.img} alt={p.name} width={p.w} height={p.h} style={{ height: h, width: Math.round(h * (p.w / p.h)) }} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— V. klubház ——— */}
      <section id="klubhaz" className="band" aria-labelledby="klubhaz-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="V">A klubház</Chapter>
            <h2 id="klubhaz-title" className="title title--center">
              Meccs előtt, <em>meccs után.</em>
            </h2>
            <p className="intro intro--center">Gyógytorna és masszázs a klubházban, termek jógához, workshophoz és családi eseményekhez.</p>
          </div>
          <div className="services">
            {SERVICES.map((s) => (
              <article key={s.id} className="service reveal">
                <h3>{s.name}</h3>
                <p className="service__who">{s.who}</p>
                <p className="service__text">{s.text}</p>
                <ul className="price-list">
                  {s.prices.map((p) => (
                    <li key={p.label}>
                      <span>{p.label}</span>
                      <b>{p.price}</b>
                    </li>
                  ))}
                </ul>
                <a className="btn btn--ghost" href={s.contact.href} {...(s.contact.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {s.contact.label}
                </a>
                <p className="service__note">{s.note}</p>
              </article>
            ))}
          </div>

          <div className="rooms reveal">
            <div className="rooms__head">
              <h3 className="subtitle">Terembérlés</h3>
              <p>{ROOMS.lead}</p>
            </div>
            <div className="gallery3">
              {[
                { src: "/img/kavezo.jpg", alt: "Megterített asztalok a Piopio Deli ’n Café vendégterében", cap: ROOMS.items[2] },
                { src: "/img/studio.jpg", alt: "A világos jóga- és mozgásstúdió tükörrel", cap: ROOMS.items[0] },
                { src: "/img/masszazsterem.jpg", alt: "A masszázsterem", cap: ROOMS.items[1] },
              ].map((g) => (
                <figure key={g.src} className="photo-mat">
                  <div className="photo-mat__inner">
                    <Image src={g.src} alt={g.alt} fill sizes="(max-width: 860px) 50vw, 380px" />
                  </div>
                  <figcaption>
                    <b>{g.cap.name}.</b> {g.cap.text}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="rooms__contact">
              Kapcsolat, foglalás és árazás: <a href={ROOMS.contact.href}>{ROOMS.contact.label}</a>
            </p>
          </div>
        </div>
      </section>

      {/* ——— VI. jelentkezés ——— */}
      <section id="jelentkezes" className="band band--paper2" aria-labelledby="jelentkezes-title">
        <div className="container">
          <div className="signup">
            <div className="signup__aside reveal">
              <Chapter n="VI" left>
                Jelentkezés
              </Chapter>
              <h2 id="jelentkezes-title" className="title">
                Mire <em>jelentkeznél?</em>
              </h2>
              <p>Válaszd ki, mi érdekel: megmutatjuk, hogyan tovább. A gyerekeknek az első edzés ingyenes.</p>
              <div className="contact-mini">
                <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                <a href={CLUB.emailHref}>{CLUB.email}</a>
              </div>
            </div>
            <div className="reveal">
              <JoinPicker />
            </div>
          </div>
        </div>
      </section>

      {/* ——— VII. kapcsolat ——— */}
      <section id="kapcsolat" className="band dark dark--deep" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="visit">
            <div className="reveal">
              <Chapter n="VII" left>
                Kapcsolat
              </Chapter>
              <h2 id="kapcsolat-title" className="title">
                Mandula utca 5. <em>Várunk a pályán.</em>
              </h2>
              <dl className="visit__list">
                <div>
                  <dt>Cím</dt>
                  <dd>
                    {CLUB.address}
                    <small>{CLUB.gettingThere}</small>
                  </dd>
                </div>
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                    <small>
                      Edzés, terembérlés: <a href={CLUB.coachPhoneHref}>{CLUB.coachPhone}</a>
                    </small>
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
                  <dd>
                    {HOURS.map((h) => (
                      <small key={h.days} className="visit__hour">
                        {h.days}: {h.time}
                      </small>
                    ))}
                  </dd>
                </div>
              </dl>
              <div className="btn-row">
                <a className="btn btn--accent" href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Útvonaltervezés <Arrow />
                </a>
                <a className="btn btn--ghost" href={CLUB.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a className="btn btn--ghost" href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </div>
            </div>
            <div className="map reveal">
              <iframe src={CLUB.mapsEmbed} title="Az Open Tennis Valley a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
