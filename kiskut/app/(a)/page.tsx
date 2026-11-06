import Image from "next/image";
import {
  CLUB,
  FACTS,
  GOOD_TO_KNOW,
  HALL_PRICES,
  HOURS,
  OPEN,
  PARKING,
  PASSES,
  PAYMENT,
  PROGRAMS,
  STAGES,
  STEPS,
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

/** Play & Stay courts drawn to scale (1 m = 6 px; a full court is 23.77 × 10.97 m). */
function MiniCourt({ len, wid, k }: { len: number; wid: number; k: string }) {
  const s = 6;
  const W = 23.77 * s + 8;
  const L = len * s;
  const H = wid * s;
  const x = (W - L) / 2;
  const y = (11 * s - H) / 2 + 4;
  return (
    <svg className={`court court--${k}`} viewBox={`0 0 ${W} ${11 * s + 8}`} aria-hidden="true">
      <rect x={4} y={4} width={23.77 * s} height={11 * s} className="court__ghost" />
      <rect x={x} y={y} width={L} height={H} className="court__lines" />
      <line x1={W / 2} y1={y - 5} x2={W / 2} y2={y + H + 5} className="court__net" />
      {k !== "red" && (
        <>
          <line x1={W / 2 - 6.4 * s} y1={y} x2={W / 2 - 6.4 * s} y2={y + H} className="court__lines" />
          <line x1={W / 2 + 6.4 * s} y1={y} x2={W / 2 + 6.4 * s} y2={y + H} className="court__lines" />
          <line x1={W / 2 - 6.4 * s} y1={y + H / 2} x2={W / 2 + 6.4 * s} y2={y + H / 2} className="court__lines" />
        </>
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero dark" aria-labelledby="hero-title">
        <div className="container">
          <Image src="/img/logo.png" alt="" width={256} height={256} className="hero__crest" priority />
          <p className="hero__est">Székesfehérvár · Kiskút útja 3.</p>
          <h1 id="hero-title">
            Kiskút Tenisz Klub
            <em>{CLUB.motto.replace("!", ".")}</em>
          </h1>
          <p className="hero__lead">
            Hat salakpálya a Kiskút útján, télen fedett csarnokkal. Itt tanulnak a gyerekek, itt játszanak az amatőrök, és 2017 óta itt
            rendezik a Kiskút Open profi tornáit is.
          </p>
          <div className="btn-row">
            <a href="#foglalas" className="btn btn--accent">
              Pályát foglalnék <Arrow />
            </a>
            <a href="#edzes" className="btn btn--ghost">
              Edzésre jönnék
            </a>
          </div>
          <ul className="pillars">
            {FACTS.map((f) => (
              <li key={f.num}>
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
          <div className="courts">
            <figure className="photo-mat courts__photo reveal">
              <div className="photo-mat__inner">
                <Image src="/img/csarnok.jpg" alt="Gyerekcsoport bemelegít a Kiskút fedett salakpályáján" fill sizes="(max-width: 960px) 100vw, 460px" />
              </div>
              <figcaption>Télen fedett csarnokban játszunk.</figcaption>
            </figure>
            <div className="courts__body reveal">
              <Chapter n="I" left>
                A pályák
              </Chapter>
              <h2 id="palyak-title" className="title">
                Salak, <em>nyáron és télen.</em>
              </h2>
              <p className="courts__lead">
                A megújult, tízezer négyzetméteres telken 2016 májusa óta hat kitűnő minőségű salakpálya várja a játékosokat. Nyáron a
                szabad ég alatt, télen fedett csarnokban játszunk, így az időjárás nem szól bele a heti meccsbe.
              </p>
              <div className="season-pair">
                <article>
                  <p className="season__tag">Nyári szezon</p>
                  <h3>Szabad ég alatt</h3>
                  <p>Mind a hat salakpálya nyitva, minden pályának saját bejárata van. Három pályán világítás is van, így munka után is jut idő egy szettre.</p>
                </article>
                <article>
                  <p className="season__tag">Téli szezon</p>
                  <h3>Fedett csarnokban</h3>
                  <p>Ősztől a nyári szezon kezdetéig fedett pályákon játszunk. A pálya akkor is foglalható, és téli bérlet is váltható.</p>
                </article>
              </div>
            </div>
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
            <Chapter n="II">Pályafoglalás</Chapter>
            <h2 id="foglalas-title" className="title title--center">
              Három lépés <em>a pályáig.</em>
            </h2>
            <p className="intro intro--center">Online, legfeljebb két hétre előre, a HELLA foglalási rendszerben. Az első alkalommal a recepción regisztrálunk.</p>
          </div>

          <div className="booking">
            <div className="app reveal">
              <p className="app__kicker">A foglalás menete</p>
              <h3>Regisztráció, foglalás, lemondás.</h3>
              <ol className="steps">
                {STEPS.map((s, i) => (
                  <li key={s.title}>
                    <span className="steps__n">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <b>{s.title}</b>
                      <span>{s.text}</span>
                    </div>
                  </li>
                ))}
                <li>
                  <span className="steps__n">+</span>
                  <div>
                    <b>Állandó időpontot szeretnél?</b>
                    <span>Bérlettel egész szezonra a tiéd ugyanaz a pálya, ugyanabban az órában. A bérelt időpontot 24 órával előtte a rendszerben módosíthatod vagy lemondhatod.</span>
                  </div>
                </li>
              </ol>
            </div>
            <aside className="callcard reveal" aria-label="Első foglalás">
              <p className="tariff__kicker">Először jössz?</p>
              <h3>Hívd a recepciót.</h3>
              <p>Segítünk a regisztrációban és az első foglalásban.</p>
              <a href={CLUB.phoneHref} className="btn btn--accent btn--block">
                {CLUB.phone}
              </a>
              <a href={`mailto:${CLUB.email}`} className="callcard__mail">
                {CLUB.email}
              </a>
              <dl className="callcard__hours">
                {HOURS.map((h) => (
                  <div key={h.days}>
                    <dt>{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="callcard__pay">{PAYMENT}</p>
            </aside>
          </div>

          <div className="pricing">
            <div className="tariff reveal">
              <div className="tariff__head">
                <p className="tariff__kicker">Csarnokpálya</p>
                <h3>Alkalmi óra</h3>
                <p className="tariff__sub">a legutóbb közzétett téli árlista, 2023. október 16-tól</p>
              </div>
              <table className="tariff__table">
                <tbody>
                  {HALL_PRICES.map((p) => (
                    <tr key={p.when} className={p.peak ? "is-best" : undefined}>
                      <th scope="row">{p.when}</th>
                      <td>
                        {p.price}
                        <small>/ óra</small>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="tariff reveal">
              <div className="tariff__head">
                <p className="tariff__kicker">Csarnokpálya</p>
                <h3>Bérletek</h3>
                <p className="tariff__sub">hétköznap, 1 alkalom = 1 pálya, 1 óra</p>
              </div>
              <table className="tariff__table">
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="sr-only">Bérlet</span>
                    </th>
                    <th scope="col">8–16</th>
                    <th scope="col">16–20</th>
                  </tr>
                </thead>
                <tbody>
                  {PASSES.map((p) => (
                    <tr key={p.name}>
                      <th scope="row">
                        {p.name}
                        <small>{p.detail}</small>
                      </th>
                      <td>{p.day}</td>
                      <td>{p.eve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="tariff__note">A bérlet egy összegben, előre fizetendő.</p>
            </div>
          </div>
          <p className="pricing__note reveal">Az árak óradíjak, ÁFA nélkül; az aktuális díjakat a recepció és a foglalási rendszer mutatja.</p>

          <div className="know reveal">
            <h3 className="subtitle">Jó tudni</h3>
            <ul>
              {GOOD_TO_KNOW.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <a href="/hazirend" className="link">
              A teljes házirend
            </a>
          </div>
        </div>
      </section>

      {/* ——— III. Kiskút Open ——— */}
      <section id="kiskut-open" className="band dark" aria-labelledby="kiskut-open-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="III">Kiskút Open</Chapter>
            <h2 id="kiskut-open-title" className="title title--center">
              Ahol a profik <em>is</em> játszanak.
            </h2>
            <p className="intro intro--center">
              2017 óta nemzetközi profi tornáknak ad otthont a klub: női ITF-versenyeknek, 2023-ban és 2024-ben pedig ATP Challengernek.
              Ugyanazon a salakon, ahol hétköznap este te is foglalhatsz.
            </p>
          </div>
          <div className="board reveal" aria-label="A Kiskút Open évkönyve">
            <p className="board__title">Kiskút Open · 2017–2025</p>
            <ol>
              {OPEN.map((o) => (
                <li key={o.year}>
                  <span className="board__year">{o.year}</span>
                  <span className="board__tag">{o.tag}</span>
                  <span className="board__text">{o.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ——— IV. edzés ——— */}
      <section id="edzes" className="band" aria-labelledby="edzes-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="IV">Edzés és tanfolyamok</Chapter>
            <h2 id="edzes-title" className="title title--center">
              Hatévesen kezdeni, <em>felnőttként sem késő.</em>
            </h2>
            <p className="intro intro--center">
              A klub tanulási és fejlődési programját Galgóczy Lajos edző állította össze, a Nemzetközi Teniszszövetség (ITF) ajánlásaira
              építve. A gyerekeknél a cél, hogy megszeressék a teniszt; a kezdő felnőtteknél, hogy öt hét alatt eljussanak az első meccsig.
            </p>
          </div>

          <div className="ladder reveal">
            <div className="ladder__intro">
              <p className="chapter chapter--left">Play &amp; Stay</p>
              <h3 className="subtitle">A pálya nő a gyerekkel.</h3>
              <p>A kezdők kisebb pályán, lassabb labdával játszanak, és a tudásukkal együtt lépnek a piros pályáról a narancsra, onnan a zöldre.</p>
            </div>
            <ol className="ladder__stages">
              {STAGES.map((s) => (
                <li key={s.key} className={`stage stage--${s.key}`}>
                  <MiniCourt len={s.court.len} wid={s.court.wid} k={s.key} />
                  <p className="stage__name">{s.name}</p>
                  <p className="stage__size">
                    {String(s.court.len).replace(".", ",")} × {String(s.court.wid).replace(".", ",")} m
                  </p>
                  <ul>
                    {s.goals.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="programs programs--four">
            {PROGRAMS.map((p) => (
              <article key={p.title} className="program reveal">
                <p className="program__age">{p.age}</p>
                <h3>{p.title}</h3>
                <p className="program__lead">{p.text}</p>
                <ul className="program__points">
                  {p.meta.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="cta-line reveal">
            <p>Csoportba, tanfolyamra vagy egyéni edzésre a recepción lehet jelentkezni.</p>
            <a href={CLUB.phoneHref} className="btn btn--accent">
              Jelentkezés: {CLUB.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ——— V. kapcsolat ——— */}
      <section id="kapcsolat" className="band dark dark--deep" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="visit">
            <div className="reveal">
              <Chapter n="V" left>
                Kapcsolat
              </Chapter>
              <h2 id="kapcsolat-title" className="title">
                Gyere ki <em>a Kiskútra.</em>
              </h2>
              <dl className="visit__list">
                <div>
                  <dt>Cím</dt>
                  <dd>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address}
                    </a>
                    <small>Parkolás: {PARKING}</small>
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
                    <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
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
                <a className="btn btn--accent" href={CLUB.phoneHref}>
                  Hívás <Arrow />
                </a>
                <a className="btn btn--ghost" href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Útvonaltervezés
                </a>
              </div>
            </div>
            <div className="visit__side reveal">
              <figure className="visit__photo">
                <Image src="/img/klubhaz.jpg" alt="A Kiskút Tenisz Klub épülete és bejárata" fill sizes="(max-width: 960px) 100vw, 520px" />
              </figure>
              <div className="map">
                <iframe src={CLUB.mapsEmbed} title="A Kiskút Tenisz Klub a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
