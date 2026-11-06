import Image from "next/image";
import Link from "next/link";
import { IconArrow, IconClock, IconMail, IconPhone, IconPin } from "@/components/b/icons";
import { CLUB, HOURS, FACTS, STEPS, HALL_PRICES, PASSES, GOOD_TO_KNOW, OPEN, STAGES, PROGRAMS } from "@/lib/site";

function MiniCourt({ len, wid, k }: { len: number; wid: number; k: string }) {
  // drawn to scale: 1 m = 6 px, full court length 23.77 m
  const s = 6;
  const W = 23.77 * s + 8;
  const L = len * s;
  const H = wid * s;
  const x = (W - L) / 2;
  const y = (11 * s - H) / 2 + 4;
  return (
    <svg className={`mini-court mini-court--${k}`} viewBox={`0 0 ${W} ${11 * s + 8}`} aria-hidden="true">
      <rect x={4} y={4} width={23.77 * s} height={11 * s} className="mini-court__ghost" />
      <rect x={x} y={y} width={L} height={H} className="mini-court__lines" />
      <line x1={W / 2} y1={y - 5} x2={W / 2} y2={y + H + 5} className="mini-court__net" />
      {k !== "red" && (
        <>
          <line x1={W / 2 - 6.4 * s} y1={y} x2={W / 2 - 6.4 * s} y2={y + H} className="mini-court__lines" />
          <line x1={W / 2 + 6.4 * s} y1={y} x2={W / 2 + 6.4 * s} y2={y + H} className="mini-court__lines" />
          <line x1={W / 2 - 6.4 * s} y1={y + H / 2} x2={W / 2 + 6.4 * s} y2={y + H / 2} className="mini-court__lines" />
        </>
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/csarnok.jpg"
              alt="Gyerekcsoport bemelegít a Kiskút fedett salakpályáján"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
              style={{ objectFit: "cover", objectPosition: "50% 45%" }}
            />
            <figcaption className="hero__caption">Télen fedett csarnokban játszunk</figcaption>
          </figure>

          <div className="hero__copy">
            <p className="eyebrow reveal">Kiskút Tenisz Klub · Székesfehérvár</p>
            <h1 id="hero-title" className="h1 reveal">
              Több mint <em>tenisz.</em>
            </h1>
            <p className="lead reveal">
              Hat salakpálya a Kiskút útján, télen fedett csarnokkal. Itt tanulnak a gyerekek, itt játszanak az amatőrök, és 2017 óta
              itt rendezik a Kiskút Open profi tornáit is.
            </p>

            <div className="paths reveal">
              <Link href="#foglalas" className="path path--primary">
                <span className="path__title">
                  Pályát foglalnék <IconArrow />
                </span>
                <span className="path__text">Online, két hétre előre. Az első alkalommal a recepción regisztrálunk.</span>
                <span className="path__meta">A foglalás menete és az árak</span>
              </Link>
              <Link href="#edzes" className="path">
                <span className="path__title">
                  Edzésre jönnék <IconArrow />
                </span>
                <span className="path__text">Gyerektenisz 6 éves kortól, és tanfolyam felnőtt kezdőknek.</span>
                <span className="path__meta">Edzés és tanfolyamok</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Courts ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">A pályák</p>
              <h2 id="palyak-title" className="h2 reveal">
                Salak, <em>nyáron és télen.</em>
              </h2>
            </div>
            <p className="lead reveal">
              A megújult, tízezer négyzetméteres telken 2016 májusa óta hat kitűnő minőségű salakpálya várja a játékosokat. Nyáron a
              szabad ég alatt, télen fedett csarnokban játszunk, így az időjárás nem szól bele a heti meccsbe.
            </p>
          </div>

          <dl className="facts">
            {FACTS.map((f) => (
              <div className="fact reveal" key={f.num}>
                <dt className="fact__num">{f.num}</dt>
                <dd className="fact__label">{f.label}</dd>
              </div>
            ))}
          </dl>

          <div className="seasons">
            <article className="season glass reveal">
              <p className="season__tag">Nyári szezon</p>
              <h3 className="h3">Szabad ég alatt</h3>
              <p>
                Mind a hat salakpálya nyitva, minden pályának saját bejárata van. Három pályán világítás is van, így munka után is jut
                idő egy szettre.
              </p>
            </article>
            <article className="season glass reveal">
              <p className="season__tag">Téli szezon</p>
              <h3 className="h3">Fedett csarnokban</h3>
              <p>
                Ősztől a nyári szezon kezdetéig fedett pályákon játszunk. Eső, szél, hideg: a pálya akkor is foglalható, és téli
                bérlet is váltható.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ——— Booking ——— */}
      <section id="foglalas" className="section booking" aria-labelledby="foglalas-title">
        <div className="container">
          <p className="eyebrow reveal">Pályafoglalás</p>
          <h2 id="foglalas-title" className="h2 reveal">
            Három lépés <em>a pályáig.</em>
          </h2>

          <div className="booking__grid">
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li className="step reveal" key={s.title}>
                  <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="step__title">{s.title}</h3>
                    <p className="step__text">{s.text}</p>
                  </div>
                </li>
              ))}
              <li className="step step--note reveal">
                <span className="step__num">+</span>
                <div>
                  <h3 className="step__title">Állandó időpontot szeretnél?</h3>
                  <p className="step__text">
                    Bérlettel egész szezonra a tiéd ugyanaz a pálya, ugyanabban az órában. A bérelt időpontot 24 órával előtte a
                    rendszerben módosíthatod vagy lemondhatod.
                  </p>
                </div>
              </li>
            </ol>

            <aside className="callcard glass reveal" aria-label="Első foglalás">
              <p className="callcard__kicker">Először jössz?</p>
              <p className="callcard__lead">Hívd a recepciót, és segítünk a regisztrációban meg az első foglalásban.</p>
              <a href={CLUB.phoneHref} className="btn btn--accent btn--block">
                <IconPhone /> {CLUB.phone}
              </a>
              <a href={`mailto:${CLUB.email}`} className="callcard__mail">
                {CLUB.email}
              </a>
              <div className="callcard__hours">
                {HOURS.map((h) => (
                  <p key={h.days}>
                    <span>{h.days}</span>
                    <strong>{h.time}</strong>
                  </p>
                ))}
              </div>
              <p className="callcard__pay">
                Fizetés készpénzzel a recepción (hétköznap 8–22), online SimplePay-jel vagy átutalással.
              </p>
            </aside>
          </div>

          <div className="prices">
            <div className="prices__head reveal">
              <h3 className="h3">Csarnokpálya-díjak</h3>
              <p className="prices__note">
                A legutóbb közzétett téli árlista, 2023. október 16-tól. Az árak óradíjak, ÁFA nélkül; az aktuális díjakat a recepció
                és a foglalási rendszer mutatja.
              </p>
            </div>
            <div className="prices__grid">
              <div className="pricecard glass reveal">
                <p className="pricecard__title">Alkalmi óra</p>
                <ul className="pricelist">
                  {HALL_PRICES.map((p) => (
                    <li key={p.when} className={p.peak ? "is-peak" : undefined}>
                      <span>{p.when}</span>
                      <strong>
                        {p.price}
                        <small> / óra</small>
                      </strong>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pricecard glass reveal">
                <p className="pricecard__title">Bérletek</p>
                <table className="passes">
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
                <p className="pricecard__foot">1 alkalom = 1 pálya, 1 óra. A bérlet egy összegben, előre fizetendő.</p>
              </div>
            </div>
          </div>

          <div className="know reveal">
            <h3 className="know__title">Jó tudni</h3>
            <ul className="know__list">
              {GOOD_TO_KNOW.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <Link href="/b/hazirend" className="link-arrow">
              A teljes házirend <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ——— Kiskút Open ——— */}
      <section id="kiskut-open" className="section open" aria-labelledby="kiskut-open-title">
        <div className="container">
          <div className="open__head">
            <p className="eyebrow reveal">Kiskút Open</p>
            <h2 id="kiskut-open-title" className="h2 h2--xl reveal">
              Ahol a profik <em>is</em> játszanak.
            </h2>
            <p className="lead reveal">
              2017 óta nemzetközi profi tornáknak ad otthont a klub: női ITF-versenyeknek, 2023-ban és 2024-ben pedig ATP
              Challengernek. Ugyanazon a salakon, ahol hétköznap este te is foglalhatsz.
            </p>
          </div>

          <ol className="timeline">
            {OPEN.map((o) => (
              <li className="timeline__item reveal" key={o.year}>
                <span className="timeline__year">{o.year}</span>
                <span className="timeline__tag">{o.tag}</span>
                <p className="timeline__text">{o.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Coaching ——— */}
      <section id="edzes" className="section coaching" aria-labelledby="edzes-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Edzés és tanfolyamok</p>
              <h2 id="edzes-title" className="h2 reveal">
                Hatévesen kezdeni, <em>felnőttként sem késő.</em>
              </h2>
            </div>
            <p className="lead reveal">
              A klub tanulási és fejlődési programját Galgóczy Lajos edző állította össze, a Nemzetközi Teniszszövetség (ITF)
              ajánlásaira építve. A gyerekeknél a cél, hogy megszeressék a teniszt; a kezdő felnőtteknél, hogy öt hét alatt eljussanak az első meccsig.
            </p>
          </div>

          <div className="ladder glass reveal" aria-labelledby="ladder-title">
            <div className="ladder__intro">
              <h3 id="ladder-title" className="h3">
                Play &amp; Stay: <em>a pálya nő a gyerekkel</em>
              </h3>
              <p>
                A kezdők kisebb pályán, lassabb labdával játszanak, és a tudásukkal együtt lépnek a piros pályáról a narancsra, onnan
                a zöldre.
              </p>
            </div>
            <ol className="ladder__stages">
              {STAGES.map((s) => (
                <li key={s.key} className={`stage stage--${s.key}`}>
                  <MiniCourt len={s.court.len} wid={s.court.wid} k={s.key} />
                  <p className="stage__name">{s.name}</p>
                  <ul className="stage__goals">
                    {s.goals.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="programs">
            {PROGRAMS.map((p) => (
              <article className="program glass reveal" key={p.title}>
                <p className="program__age">{p.age}</p>
                <h3 className="program__title">{p.title}</h3>
                <p className="program__text">{p.text}</p>
                <ul className="program__meta">
                  {p.meta.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="coaching__cta reveal">
            <p>Csoportba, tanfolyamra vagy egyéni edzésre a recepción lehet jelentkezni.</p>
            <a href={CLUB.phoneHref} className="btn btn--accent">
              <IconPhone /> Jelentkezés: {CLUB.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ——— Visit ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Gyere ki <em>a Kiskútra.</em>
            </h2>
          </div>

          <div className="visit">
            <figure className="visit__photo reveal reveal--img">
              <Image
                src="/img/klubhaz.jpg"
                alt="A Kiskút Tenisz Klub épülete és bejárata"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "50% 55%" }}
              />
            </figure>

            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
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
                    <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
                  </div>
                </li>
                <li>
                  <IconClock />
                  <div>
                    <span className="contact__label">Nyitvatartás</span>
                    {HOURS.map((h) => (
                      <span key={h.days} className="contact__line">
                        {h.days}: <strong>{h.time}</strong>
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
              <p className="visit__parking">
                <strong>Parkolás:</strong> a régi klubház előtti parkolóban és a fehér murvás területen. A sporttelepen kívül, a
                közúton ingyenes.
              </p>
              <div className="visit__actions">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> Hívás
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconPin /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__map glass reveal">
              <iframe
                title="A Kiskút Tenisz Klub a térképen"
                src={CLUB.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
