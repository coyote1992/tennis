import Image from "next/image";
import Link from "next/link";
import { IconArrow, IconCalendar, IconMail, IconPhone, IconPin } from "@/components/icons";
import { CLUB, COACHES } from "@/lib/site";

const STEPS = [
  {
    title: "Regisztrálj",
    text: "Hozz létre fiókot a klub foglalási rendszerében. Tagdíj nincs, így bárki regisztrálhat.",
  },
  {
    title: "Foglalj pályát",
    text: "Bejelentkezés után online választasz pályát és időpontot. Játék előtt jelentkezz be a rendszerben vagy a gondnoknál.",
  },
  {
    title: "Fizess a játék után",
    text: "Készpénzzel rögtön a játék után, vagy bankkártyával a foglalási rendszerben, legfeljebb 7 nappal a játék után.",
  },
];

const RULES = [
  "A lefoglalt pálya reggel 9 óráig díjmentesen lemondható, vagy a játékjog átadható.",
  "15 perc a várakozási idő, nagyobb késésnél a pálya újra kiadható.",
  "A foglalt idő vége előtt 5 perccel fejezd be a játékot, és húzd le a pályát, a vonalakon kívül is.",
  "Csak teniszruhában és sima vagy recés talpú teniszcipőben lehet játszani.",
  "10 év alatti gyerekek csak felügyelettel látogathatják a létesítményt.",
];

const FEES = [
  { when: "6:00 – 11:00", what: "Hétköznap délelőtt", price: "3 200 Ft" },
  { when: "11:00 – 15:00", what: "Hétköznap délben", price: "2 400 Ft" },
  { when: "15:00 – 20:00", what: "Hétköznap délután, este", price: "4 400 Ft" },
  { when: "Hétvégén", what: "Szombat és vasárnap", price: "2 400 Ft" },
];

const BOARD = ["Kincse Norbert, elnök", "Kancsár Géza", "Pestuka Szilvia", "Almádi-Székely Éva", "Vizin Tamás"];
const SUPERVISORY = ["Tóth Gábor, elnök", "Traviczky Albert", "Hernády Dániel"];

const DOCS = [
  { label: "Alapszabály", href: "https://ewk.hu/_userfiles_/bajatenisz/BTK%20dokumentumok/Alapszab%C3%A1ly_Bajai%20Tenisz%20Klub_2024.pdf" },
  { label: "Házirend", href: "https://ewk.hu/_userfiles_/bajatenisz/BTK%20dokumentumok/H%C3%A1zirend.pdf" },
  {
    label: "Törvényszéki végzés",
    href: "https://ewk.hu/_userfiles_/bajatenisz/BTK%20dokumentumok/T%C3%B6rv%C3%A9nysz%C3%A9ki%20v%C3%A9gz%C3%A9s_Bajai%20Tenisz%20Klub.pdf",
  },
];

const EVENTS = [
  { date: "május 10.", title: "Bajai Amatőr Kupa", note: "Egyéni amatőr verseny" },
  { date: "május 17.", title: "Head Teniszvetélkedő", note: "Gyerekeknek" },
  { date: "május 31.", title: "Baja–Zombor", note: "Baráti találkozó, Baján" },
  { date: "július 5–6.", title: "Pedagógus verseny", note: "Kétnapos verseny" },
  { date: "augusztus 2–3.", title: "Dr. Csátaljay István Emlékverseny", note: "A tenisz centrum névadójának emlékére" },
  { date: "szeptember 19–20.", title: "Közút Verseny", note: "Kétnapos verseny" },
  { date: "szeptember 27–28.", title: "MATTenisz bajai állomás", note: "Országos amatőr sorozat, felnőtt ATR szintes verseny" },
  { date: "október 4.", title: "Emese Emlékverseny", note: "A 2025-ös szezon utolsó versenye" },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Baja · Petőfi-sziget</p>
            <h1 id="hero-title" className="h1 reveal">
              Salakpályák a szigeten, <em>{CLUB.founded} óta.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                A Bajai Tenisz Klub otthona a {CLUB.centre}. Tagdíj nincs: regisztrálj a foglalási rendszerben, válassz időpontot, és
                csak a pályáért fizetsz.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Online foglalás <IconArrow />
                </a>
                <Link href="#arak" className="btn btn--ghost">
                  Pályadíjak
                </Link>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/klubhaz.jpg"
              alt="A klubház és a salakpályák a Petőfi-szigeten, kék ég alatt"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 55%" }}
            />
            <figcaption className="hero__caption">A klubház és a pályák a Petőfi-szigeten</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Röviden">
            <li className="fact">
              <span className="fact__num">{CLUB.founded}</span>
              <span className="fact__label">óta működik a klub</span>
            </li>
            <li className="fact">
              <span className="fact__num">0 Ft</span>
              <span className="fact__label">tagdíj, csak pályadíj</span>
            </li>
            <li className="fact">
              <span className="fact__num">2 400 Ft</span>
              <span className="fact__label">a legkedvezőbb pályadíj</span>
            </li>
            <li className="fact">
              <span className="fact__num">8</span>
              <span className="fact__label">verseny a 2025-ös naptárban</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— Booking ——— */}
      <section id="foglalas" className="section booking" aria-labelledby="foglalas-title">
        <div className="container">
          <p className="eyebrow reveal">Pályafoglalás</p>
          <h2 id="foglalas-title" className="h2 reveal">
            Regisztrálj, <em>és már foglalhatsz is.</em>
          </h2>
          <p className="lead reveal">
            Klubtagság nem kell hozzá: tagdíj már nincs, csak pályahasználati díj, ezért a foglalási rendszerbe bárki regisztrálhat. Ha
            inkább telefonálnál, a gondnoknál vagy személyesen is foglalhatsz.
          </p>

          <ol className="steps">
            {STEPS.map((s, i) => (
              <li className="step reveal" key={s.title}>
                <span className="step__num">{i + 1}</span>
                <h3 className="h3">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="booking__actions reveal">
            <a href={CLUB.register} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
              Regisztráció <IconArrow />
            </a>
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              Belépés a foglaláshoz
            </a>
            <a href={CLUB.caretakerHref} className="booking__phone">
              <IconPhone /> Gondnok: {CLUB.caretakerPhone}
            </a>
          </div>

          <div className="know reveal">
            <h3 className="know__title">Jó tudni, mielőtt pályára lépsz</h3>
            <ul className="know__list">
              {RULES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Court fees ——— */}
      <section id="arak" className="section fees" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályadíjak</p>
          <h2 id="arak-title" className="h2 reveal">
            Délben és hétvégén <em>a legkedvezőbb.</em>
          </h2>

          <div className="fees__grid">
            <div className="reveal">
              <table className="feetable">
                <caption className="sr-only">Pályadíjak, 2024-es díjszabás</caption>
                <thead>
                  <tr>
                    <th scope="col">Idősáv</th>
                    <th scope="col">Pályadíj</th>
                  </tr>
                </thead>
                <tbody>
                  {FEES.map((f) => (
                    <tr key={f.when}>
                      <th scope="row">
                        <span className="feetable__when">{f.when}</span>
                        <span className="feetable__what">{f.what}</span>
                      </th>
                      <td>{f.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="fees__note">
                A klub 2024-ben közzétett díjszabása. 80 év felett ingyen játszhatsz; ha jogosult vagy rá, jelezd a klubnak.
              </p>
            </div>

            <div className="fees__side">
              <figure className="fees__photo reveal reveal--img">
                <Image src="/img/labda-salakon.jpg" alt="Teniszlabda a salakon" fill sizes="(max-width: 900px) 100vw, 26vw" style={{ objectFit: "cover" }} />
              </figure>
              <aside className="winter glass reveal" aria-label="Téli pályabérlés">
                <p className="winter__kicker">Télen</p>
                <p className="winter__text">
                  A téli időszakban a pályákat külső vállalkozó üzemelteti, fix pályabérlőkkel. Téli pályabérlésért keresd őt:
                </p>
                <a href={CLUB.winter.href} className="winter__phone">
                  <IconPhone /> {CLUB.winter.name}, {CLUB.winter.phone}
                </a>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* ——— The club ——— */}
      <section id="klub" className="section club" aria-labelledby="klub-title">
        <div className="container">
          <p className="eyebrow reveal">A klub</p>
          <h2 id="klub-title" className="h2 h2--xl reveal">
            Sport, verseny <em>és közösség.</em>
          </h2>
          <p className="lead reveal">
            A Bajai Tenisz Klub célja a rendszeres sportolás, a versenyzés és a szabadidős tenisz, és hogy közösség épüljön a pályák
            körül. A tagokon túl a környék iskoláinak diákjait és mindenkit vár, aki teniszezne.
          </p>

          <dl className="facts-list reveal">
            <div>
              <dt>Alapítva</dt>
              <dd>{CLUB.founded}</dd>
            </div>
            <div>
              <dt>Színei</dt>
              <dd>
                <span className="swatch swatch--blue" aria-hidden="true" />
                <span className="swatch swatch--yellow" aria-hidden="true" /> kék-sárga
              </dd>
            </div>
            <div>
              <dt>Otthona</dt>
              <dd>
                {CLUB.centre}, <span className="nobr">Petőfi-sziget</span>
              </dd>
            </div>
            <div>
              <dt>Klubház</dt>
              <dd>Büfével; rendezvényre is kibérelhető</dd>
            </div>
          </dl>

          <div className="board reveal">
            <div>
              <h3 className="board__title">Elnökség</h3>
              <ul>
                {BOARD.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="board__title">Felügyelő Bizottság</h3>
              <ul>
                {SUPERVISORY.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="board__title">Dokumentumok</h3>
              <ul>
                {DOCS.map((d) => (
                  <li key={d.label}>
                    <a href={d.href} target="_blank" rel="noopener noreferrer">
                      {d.label} <span className="board__pdf">PDF</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Coaches ——— */}
      <section id="edzok" className="section coaches-sec" aria-labelledby="edzok-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Edzés és oktatás</p>
              <h2 id="edzok-title" className="h2 reveal">
                Edzésért <em>hívd az edzőt.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Oktatást a klubban a vezetőség engedélyével tartanak, ezért az edzéseket előre egyeztesd közvetlenül az edzővel. Fiúkat és
              lányokat is várunk; a gyerekcsoportok edző kíséretében használják a pályát.
            </p>
          </div>

          <ul className="coaches">
            {COACHES.map((c) => (
              <li className="coach glass reveal" key={c.name}>
                <span className="coach__mono" aria-hidden="true">
                  {c.name
                    .split(/[\s-]+/)
                    .filter((w) => w.length > 1)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </span>
                <p className="coach__name">{c.name}</p>
                <a className="coach__phone" href={c.href}>
                  <IconPhone /> {c.phone}
                </a>
              </li>
            ))}
          </ul>

          <p className="camp-note reveal">
            <IconCalendar /> Gyerekeknek: tavasszal Head Teniszvetélkedő, 2024 nyarán pedig két tenisztábor volt a klubban. Az idei
            lehetőségekről az edzőknél érdeklődj.
          </p>
        </div>
      </section>

      {/* ——— Tournaments ——— */}
      <section id="versenyek" className="section events-sec" aria-labelledby="versenyek-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Versenynaptár</p>
              <h2 id="versenyek-title" className="h2 reveal">
                Versenyek <em>tavasztól őszig.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Amatőröknek, gyerekeknek és pedagógusoknak is: a klub minden szezonban versenyeket rendez a szigeten. Így nézett ki a
              2025-ös naptár.
            </p>
          </div>

          <ol className="events">
            {EVENTS.map((e) => (
              <li className="event reveal" key={e.title}>
                <p className="event__date">2025. {e.date}</p>
                <p className="event__title">{e.title}</p>
                <p className="event__note">{e.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Petőfi-sziget, <em>Március 15. sétány.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.centre}
                    </a>
                    <span className="contact__line">{CLUB.address}</span>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Gondnok, pályafoglalás</span>
                    <a href={CLUB.caretakerHref}>{CLUB.caretakerPhone}</a>
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
                  <IconCalendar />
                  <div>
                    <span className="contact__label">Téli pályabérlés</span>
                    <span className="contact__line">
                      {CLUB.winter.name}: <a href={CLUB.winter.href}>{CLUB.winter.phone}</a>
                    </span>
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
              <iframe title="A Bajai Tenisz Klub a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
