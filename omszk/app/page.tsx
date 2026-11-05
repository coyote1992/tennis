import Image from "next/image";
import Link from "next/link";
import { IconArrow, IconClock, IconMail, IconPhone, IconPin } from "@/components/icons";
import { TurnStrip } from "@/components/TurnStrip";
import { COURSE_PRICES } from "@/lib/course";
import { CLUB, HOURS } from "@/lib/site";

const STATS = [
  { num: "4", label: "salakos kültéri pálya" },
  { num: "2", label: "fedett pálya a téli szezonban" },
  { num: "5–18", label: "éveseknek gyerekcsoportok" },
  { num: "4–6", label: "fős felnőtt kiscsoportok" },
];

const PRICES = [
  { type: "Alkalmi óra", note: "egyszeri pályabérlés", peak: "10 500 Ft", off: "9 500 Ft", unit: "/ óra" },
  { type: "Szezonbérlet", note: "óradíj bérlettel", peak: "9 500 Ft", off: "8 500 Ft", unit: "/ óra" },
  { type: "Szezonbérlet", note: "27 hét, heti 1 fix óra", peak: "256 500 Ft", off: "229 500 Ft", unit: "/ szezon" },
  { type: "10 alkalmas bérlet", note: "10 alkalom előre fizetve", peak: "100 000 Ft", off: "90 000 Ft", unit: "/ 10 alkalom" },
];

const COMPLEX = [
  { name: "Squash pályák", text: "Ha változatosabb sportolásra vágysz." },
  { name: "Konditerem", text: "Fizikai felkészüléshez, erőnléti edzéshez." },
  { name: "Szauna", text: "Regenerálódás edzés után." },
  { name: "Játszótér és fitness park", text: "Kültéren, a sportcsarnok közvetlen közelében." },
  { name: "Wakeboard pálya", text: "Az Omszki-tavon, a nyári szezonban." },
];

const PILLARS = [
  { title: "Mentális fejlődés", text: "Az ITF képzési rendszerére épülő módszertan a fizikai fejlődés mellett a mentális felkészültségre is figyel." },
  { title: "Egyéni figyelem", text: "A személy mindig fontosabb, mint az eredmény. Mindenkit egyénileg kezelünk, és segítünk megtalálni a saját útját." },
  { title: "Közösség", text: "Játékos, mégis strukturált környezet, ahol egyszerre lehet komolyan dolgozni és felszabadultan játszani." },
];

const COACHES = [
  {
    name: "Sári Botond",
    role: "Vezetőedző",
    creds: "ITF Level 1 & 2 · BME műszaki menedzser",
    img: "/img/edzo-sari-botond.jpg",
    text: "Hatéves kora óta teniszezik, 18 évesen már edzett. 2022 és 2024 között ATP- és WTA-játékosokat elemzett a Gotta Tennis Analyticsnél, és az Egyesült Államokban dolgozott egy elemző cégnél, amely akkoriban Novak Djokovic csapatát segítette. 2024 elején hazajött, hogy olyan edzésrendszert építsen, ami gondolkodásmódot is formál.",
  },
  {
    name: "Gyuri",
    role: "Edző",
    creds: "PTR képesítés · 15 év tapasztalat",
    img: "/img/edzo-gyuri.jpg",
    text: "Három évig a trieri Tennisschule-ban, egy évig a luxemburgi Estess Tennis Academyn edzett, majd a budapesti Smart Tennis SE-től érkezett. Fontos neki, hogy a tanítványok fejlődjenek, kikapcsolódjanak és önbizalmat szerezzenek.",
  },
  {
    name: "Ádám",
    role: "Edző",
    creds: "Versenyzői múlt · 10+ év",
    img: "/img/edzo-adam.jpg",
    text: "Tízévesen kezdett, és több mint egy évtizedig versenyzett: legjobb korosztályos ranglistahelyezése a 18., játszott országos bajnokságokon és első osztályú csapatbajnokságban. Technikai szakértő.",
  },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <div>
              <p className="eyebrow reveal">Budakalász · Omszki-tó</p>
              <h1 id="hero-title" className="h1 reveal">
                Tenisz <em>a tó partján.</em>
              </h1>
            </div>
            <div className="hero__side reveal">
              <p className="lead">
                Négy salakpálya Budapest határán, az M0-ról könnyen elérhető, télen két fedett pályával. Gyerekeknek 5 éves kortól, felnőtteknek
                kiscsoportban, versenyzőknek ITF-alapú képzéssel.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Pályát foglalok <IconArrow />
                </a>
                <Link href="#edzes" className="btn btn--ghost">
                  Edzésre jelentkeznék
                </Link>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/adogatas-to-partjan.jpg"
              alt="Adogatás az OMSZK Park salakpályáján, viharfelhők alatt, háttérben a fehér sátorcsarnok"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 40%" }}
            />
            <figcaption className="hero__caption">Salakon, az Omszki-tó mellett</figcaption>
          </figure>

          <dl className="stats">
            {STATS.map((s) => (
              <div className="stat reveal" key={s.label}>
                <dt className="stat__num">{s.num}</dt>
                <dd className="stat__label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ——— Courts ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <div className="courts__grid">
            <div>
              <p className="eyebrow reveal">A pályák</p>
              <h2 id="palyak-title" className="h2 reveal">
                Négy salakpálya, <em>télen kettő fedett.</em>
              </h2>
              <p className="lead reveal courts__lead">
                Tágas, zöld környezet az Omszki-tó partján, kiváló pályaminőség és rendszeres karbantartás. Akár egy baráti meccsre, akár
                rendszeres játékra keresel helyet, pár kattintással foglalhatsz.
              </p>
              <div className="season glass reveal">
                <p className="season__tag">Téli szezon 2026/27</p>
                <p className="season__dates">Október 5. – április 11.</p>
                <p className="season__text">Fedett, világított pályákon. Szezonbérlet: heti 1 fix időpont, 27 héten át.</p>
              </div>
            </div>
            <figure className="courts__photo reveal reveal--img">
              <Image src="/img/salakpalya.jpg" alt="Játékos adogat a salakpályán" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover", objectPosition: "50% 60%" }} />
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Prices & booking ——— */}
      <section id="arak" className="section prices-section" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályafoglalás és árak</p>
          <h2 id="arak-title" className="h2 reveal">
            Foglalj online, <em>pár kattintással.</em>
          </h2>

          <div className="booking__grid">
            <ol className="steps">
              <li className="step reveal">
                <span className="step__num">01</span>
                <div>
                  <h3 className="step__title">Nyisd meg a foglalási rendszert</h3>
                  <p className="step__text">A szabad pályákat és időpontokat online, a HELLA foglalási rendszerben látod.</p>
                </div>
              </li>
              <li className="step reveal">
                <span className="step__num">02</span>
                <div>
                  <h3 className="step__title">Válassz pályát és órát</h3>
                  <p className="step__text">Főidőben vagy mellékidőben, alkalmi órára vagy tízes bérlettel.</p>
                </div>
              </li>
              <li className="step reveal">
                <span className="step__num">03</span>
                <div>
                  <h3 className="step__title">Állandó időpont? Szezonbérlet.</h3>
                  <p className="step__text">
                    Heti egy fix óra a téli szezon 27 hetére. Bérletügyben {CLUB.coach} segít: {CLUB.phone}.
                  </p>
                </div>
              </li>
            </ol>

            <aside className="callcard glass reveal" aria-label="Online foglalás">
              <p className="callcard__kicker">Online foglalás</p>
              <p className="callcard__lead">A foglalási rendszer új lapon nyílik meg.</p>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent btn--block">
                Pályát foglalok <IconArrow />
              </a>
              <a href={CLUB.phoneHref} className="btn btn--ghost btn--block">
                <IconPhone /> Bérlet: {CLUB.phone}
              </a>
              <div className="callcard__hours">
                {HOURS.map((h) => (
                  <p key={h.days}>
                    <span>{h.days}</span>
                    <strong>{h.time}</strong>
                  </p>
                ))}
              </div>
            </aside>
          </div>

          <div className="pricing reveal">
            <div className="pricing__head">
              <h3 className="h3">Pályabérlési árak, téli szezon</h3>
              <p className="pricing__note">1 óra pályabérlés · bruttó árak</p>
            </div>
            <div className="pricetable glass">
              <table>
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="sr-only">Típus</span>
                    </th>
                    <th scope="col">
                      Főidő
                      <small>H–P 7–10 és 15–22 · hétvégén 8–12</small>
                    </th>
                    <th scope="col">
                      Mellékidő
                      <small>H–P 10–15 · hétvégén 12-től</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PRICES.map((p) => (
                    <tr key={p.note}>
                      <th scope="row">
                        {p.type}
                        <small>{p.note}</small>
                      </th>
                      <td data-label="Főidő">
                        {p.peak} <small>{p.unit}</small>
                      </td>
                      <td data-label="Mellékidő">
                        {p.off} <small>{p.unit}</small>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="pricing__foot">
              A szezonbérlet később kezdve is váltható, legkésőbb november első hetétől (23 hetes szezon): ilyenkor 218 500 Ft főidőben és
              195 500 Ft mellékidőben.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Location (the pin) ——— */}
      <section id="helyszin" className="section place" aria-labelledby="helyszin-title">
        <div className="container">
          <div className="place__head">
            <p className="eyebrow reveal">Helyszín</p>
            <h2 id="helyszin-title" className="h2 h2--xl reveal">
              Budapest határán, <em>mégis más világ.</em>
            </h2>
            <p className="lead reveal">
              Az M0-ról közvetlenül elérhető, zöld, levegős helyszín az Omszki-tó partján. A teniszpályák mellett az egész komplexum a
              tiéd:
            </p>
          </div>
          <ul className="complex">
            {COMPLEX.map((c) => (
              <li className="complex__item reveal" key={c.name}>
                <span className="complex__name">{c.name}</span>
                <span className="complex__text">{c.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Coaching ——— */}
      <section id="edzes" className="section coaching" aria-labelledby="edzes-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Edzés</p>
              <h2 id="edzes-title" className="h2 reveal">
                A személy fontosabb, <em>mint az eredmény.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Gyerektől felnőttig, kezdőtől versenyzőig. A cél nem csak az, hogy jobban teniszezz: az, hogy kiegyensúlyozottabb, tudatosabb
              játékos és ember legyél.
            </p>
          </div>

          <ul className="pillars">
            {PILLARS.map((p) => (
              <li className="pillar reveal" key={p.title}>
                <p className="pillar__title">{p.title}</p>
                <p className="pillar__text">{p.text}</p>
              </li>
            ))}
          </ul>

          <div className="programs">
            <article className="program program--kids glass reveal">
              <figure className="program__photo">
                <Image src="/img/gyerek-csoport.jpg" alt="Gyerekcsoport ünnepel a salakpályán" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </figure>
              <div className="program__body">
                <p className="program__age">5–18 év</p>
                <h3 className="program__title">Gyerek Tenisz Akadémia</h3>
                <p className="program__text">
                  Kis létszámú csoportok korosztályos bontásban: kezdő, haladó és versenyző. Iskola után, 15 és 20 óra között, négyhetes
                  turnusokban. Ütőt adunk, és a tanfolyamból versenyző csoportba is tovább lehet lépni.
                </p>
                <table className="miniprice">
                  <thead>
                    <tr>
                      <th scope="col">4 hetes turnus</th>
                      <th scope="col">Heti 1×</th>
                      <th scope="col">Heti 2×</th>
                      <th scope="col">Heti 3×</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COURSE_PRICES.map((c) => (
                      <tr key={c.name}>
                        <th scope="row">
                          {c.name}
                          <small>{c.note}</small>
                        </th>
                        {c.per.map((v, i) => (
                          <td key={i} data-label={`Heti ${i + 1}×`}>
                            {v}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link href="/gyerek-tanfolyam" className="link-arrow">
                  Turnusok, árak, mit hozzatok <IconArrow />
                </Link>
              </div>
            </article>

            <article className="program glass reveal">
              <figure className="program__photo">
                <Image src="/img/felnott-csoport.jpg" alt="Felnőtt csoport az edzőkkel a salakpályán" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </figure>
              <div className="program__body">
                <p className="program__age">Felnőtteknek</p>
                <h3 className="program__title">Kiscsoportos edzés</h3>
                <p className="program__text">
                  4–6 fős csoportok kezdőtől versenyző szintig, heti több időponttal, munka mellett is. Állandó, összeszokott csoportokkal
                  dolgozunk: megismeritek egymást, és ha jól működik a csapat, együtt folytatjátok. Beeső órák nincsenek, ezért jelentkezz,
                  és beosztunk egy hozzád illő csoportba.
                </p>
                <a href={`mailto:${CLUB.email}?subject=Feln%C5%91tt%20edz%C3%A9s`} className="link-arrow">
                  Jelentkezés felnőtt csoportba <IconArrow />
                </a>
              </div>
            </article>

            <article className="program program--wide glass reveal">
              <figure className="program__photo">
                <Image src="/img/versenyzok.jpg" alt="Három fiatal versenyző kupákkal" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover", objectPosition: "50% 30%" }} />
              </figure>
              <div className="program__body">
                <p className="program__age">Versenyzőknek</p>
                <h3 className="program__title">Technika, taktika, fizikum, fej</h3>
                <p className="program__text">
                  A versenyzőknek technikai, taktikai, fizikai és mentális képzést adunk, az ITF képzési rendszerére építve.
                </p>
              </div>
            </article>
          </div>

          <div className="course reveal">
            <div className="course__head">
              <h3 className="h3">
                Gyerek tanfolyam <em>2026/27</em>
              </h3>
              <p className="course__note">Tíz négyhetes turnus augusztus 31-től június 18-ig. A téli szünetben nincs edzés.</p>
            </div>
            <TurnStrip />
            <div className="course__cta">
              <p>Szeretnéd kipróbálni? Jelentkezz, és felvesszük veled a kapcsolatot a próbaedzéssel kapcsolatban.</p>
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <IconPhone /> {CLUB.coach}: {CLUB.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Coaches ——— */}
      <section id="edzok" className="section coaches-section" aria-labelledby="edzok-title">
        <div className="container">
          <p className="eyebrow reveal">Edzőink</p>
          <h2 id="edzok-title" className="h2 reveal">
            Akikkel <em>a pályán leszel.</em>
          </h2>
          <ul className="coachcards">
            {COACHES.map((c) => (
              <li className="coachcard reveal" key={c.name}>
                <figure className="coachcard__photo">
                  <Image src={c.img} alt={c.name} fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover", objectPosition: "50% 25%" }} />
                </figure>
                <p className="coachcard__role">{c.role}</p>
                <p className="coachcard__name">{c.name}</p>
                <p className="coachcard__creds">{c.creds}</p>
                <p className="coachcard__text">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Camp ——— */}
      <section id="tabor" className="section camp" aria-labelledby="tabor-title">
        <div className="container">
          <div className="camp__box glass reveal">
            <div className="camp__intro">
              <p className="eyebrow">Nyári tábor</p>
              <h2 id="tabor-title" className="h2">
                Egy aktív hét, <em>nyáron.</em>
              </h2>
              <p className="camp__text">
                5–16 éveseknek, kezdőtől haladóig. Napi két másfél órás teniszedzés, mozgásfejlesztés, közösségi programok és háromszori
                étkezés (tízórai, ebéd, uzsonna). Esőnapokon a program a fedett sportcsarnokban folytatódik.
              </p>
            </div>
            <ul className="camp__facts">
              <li>
                <strong>65 000 Ft</strong> / turnus
              </li>
              <li>
                <strong>55 000 Ft</strong> / turnus testvérkedvezménnyel
              </li>
              <li>
                <strong>15 000 Ft</strong> / nap
              </li>
              <li className="camp__muted">2026 nyarán öt turnus volt, június 22. és augusztus 14. között. A következő nyárról érdeklődj!</li>
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
              Gyere ki <em>a tóhoz.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Helyszín</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address}
                    </a>
                    <span className="contact__line">{CLUB.place}, {CLUB.placeNote}</span>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Telefon · {CLUB.phoneHours}</span>
                    <a href={CLUB.phoneHref}>
                      {CLUB.phone} <span className="contact__line contact__line--inline">({CLUB.coach})</span>
                    </a>
                  </div>
                </li>
                <li>
                  <IconMail />
                  <div>
                    <span className="contact__label">E-mail · {CLUB.emailNote}</span>
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
              <div className="visit__actions">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Foglalás <IconArrow />
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconPin /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__map glass reveal">
              <iframe title="Az OMSZK Park a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
