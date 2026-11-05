import Image from "next/image";
import Link from "next/link";
import { IconArrow, IconMail, IconPhone, IconPin } from "@/components/icons";
import { CLUB } from "@/lib/site";

const FACTS = [
  { num: "4", label: "salakpálya, nyáron a szabad ég alatt" },
  { num: "4", label: "pálya télen is: mindet fűtött sátor fedi" },
  { num: "2×", label: "pályafelújítás évente" },
  { num: "300+", label: "regisztrált játékos és sok alkalmi vendég" },
];

const STEPS = [
  {
    title: "Válassz időpontot online",
    text: `A ${CLUB.bookingLabel} oldalon a hét bármely napján, a nap 24 órájában foglalhatsz, legfeljebb két hétre előre.`,
  },
  {
    title: "Fizess SimplePay-jel vagy kreditből",
    text: "Bankkártyával azonnal, vagy előre feltöltött kreditből. Kreditet készpénzzel a klubvezetőnél, vagy online SimplePay-jel tölthetsz fel.",
  },
  {
    title: "A visszaigazolás e-mailben jön",
    text: "A pályák kizárólag az online rendszerben szereplő foglalások alapján használhatók. A pályadíj technikai okokból nem osztható meg.",
  },
];

const PRICES = [
  { when: "8:00 – 16:00", single: "7 800 Ft", season: "7 200 Ft" },
  { when: "16:00 – 20:00", single: "8 800 Ft", season: "8 200 Ft" },
];

const HISTORY = [
  { year: "1900-as évek eleje", text: "Megalakul a klub, amely hosszú éveken át az ország tenisz- és közösségi életének egyik központja." },
  { year: "1915", text: "A lóversenypálya mellett megépül Siófok első teniszpályája. A klub ma is ugyanitt van." },
  { year: "Évtizedeken át", text: "Tavasszal a Pannónia Kupa, ősszel a Sió Kupa: az ország, sőt a világ élvonala jár ide." },
  { year: "2012", text: "A férfi csapat a Szuperligába kerül, és azóta is az élvonalban játszik." },
  { year: "2014", text: "Siófokon először itt rendeznek nemzetközi ITF-tornát: 15 000 dollár, 13 ország indulói." },
  { year: "2018", text: "Magyar bajnoki cím: a férfi Szuperliga-csapat a csúcson." },
];

const GUESTS = ["Benyik János", "Martina Navratilova", "Szabó Éva", "Szőke Péter", "Taróczy Balázs", "Taróczy Nóra"];
const LOCALS = [
  "Ács Júlia",
  "Balogh Bálint",
  "Balogh Zsolt",
  "a Bihari testvérek",
  "a Borsányi lányok",
  "Borsos Gábor",
  "Borsos László",
  "Csurgó Virág",
  "a Kopári lányok",
  "Kuti-Kis Rita",
  "Lassú Zsolt",
  "a Molnár lányok",
  "Székely Gábor",
];

const TEAMS = [
  { name: "Férfi Szuperliga", text: "2012 óta az élvonalban; az első kilenc évben hét dobogó, 2018-ban magyar bajnoki cím." },
  { name: "Férfi másodosztály", text: "Az országos csapatbajnokság férfi másodosztályában." },
  { name: "Női másodosztály", text: "Az országos csapatbajnokság női másodosztályában." },
];

const EVENTS = ["Házi versenyek és kupák", "Jótékonysági kupák", "Emlékversenyek", "Házi bajnokság", "Csapatbajnoki találkozók", "Nyílt napok", "Korosztályos versenyek", "Felnőtt és nemzetközi tornák"];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow reveal">Siófoki Spartacus SE · Jókai park</p>
            <h1 id="hero-title" className="h1 reveal">
              Több mint száz éve, <em>ugyanazon a salakon.</em>
            </h1>
            <p className="lead reveal">
              Négy salakpálya a siófoki Jókai parkban, télen fűtött sátor alatt. Itt játszott Navratilova és Taróczy, innen indult válogatottak
              sora, és ma több mint 300 regisztrált játékos klubja.
            </p>
            <div className="hero__ctas reveal">
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                Pályát foglalok <IconArrow />
              </a>
              <Link href="#foglalas" className="btn btn--ghost">
                Téli árak és szabályok
              </Link>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/klubhaz-terasz.jpg"
              alt="A Spartacus klubháza napernyős terasszal, a salakpályák mellett"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "45% 50%" }}
            />
            <figcaption className="hero__caption">A klubház és a terasz, nyáron</figcaption>
          </figure>
        </div>
      </section>

      {/* ——— Courts ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">A pályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Négy salakpálya, <em>télen sátor alatt.</em>
          </h2>
          <p className="lead reveal courts__lead">
            Nyaranta négy kiváló minőségű salakpálya, exkluzív, hangulatos környezetben. Télen mind a négyet lefedjük, a sátorban új, magas
            hatásfokú kazán tartja a sportoláshoz való hőmérsékletet a leghidegebb napokon is.
          </p>

          <dl className="facts">
            {FACTS.map((f) => (
              <div className="fact reveal" key={f.label}>
                <dt className="fact__num">{f.num}</dt>
                <dd className="fact__label">{f.label}</dd>
              </div>
            ))}
          </dl>

          <div className="duo">
            <figure className="duo__item reveal reveal--img">
              <div className="duo__img">
                <Image src="/img/salakpalyak.jpg" alt="A négy salakpálya nyáron, napernyőkkel" fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: "cover" }} />
              </div>
              <figcaption>
                <strong>Nyáron</strong> a szabad ég alatt, fák között.
              </figcaption>
            </figure>
            <figure className="duo__item reveal reveal--img">
              <div className="duo__img">
                <Image src="/img/sator.jpg" alt="A négypályás téli sátor belülről" fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: "cover" }} />
              </div>
              <figcaption>
                <strong>Télen</strong> négypályás, fűtött sátorban, október közepétől április közepéig.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Booking ——— */}
      <section id="foglalas" className="section booking" aria-labelledby="foglalas-title">
        <div className="container">
          <p className="eyebrow reveal">Pályafoglalás</p>
          <h2 id="foglalas-title" className="h2 reveal">
            Foglalás online, <em>éjjel-nappal.</em>
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
                <span className="step__num">24h</span>
                <div>
                  <h3 className="step__title">Ingyenes lemondás 24 órával előtte</h3>
                  <p className="step__text">Alkalmi foglalást és szezonbérletes órát is ingyen lemondhatsz vagy áttehetsz, ha a kezdés előtt legalább 24 órával jelzed.</p>
                </div>
              </li>
            </ol>

            <aside className="callcard glass reveal" aria-label="Online foglalás">
              <p className="callcard__kicker">Online foglalás</p>
              <p className="callcard__site">{CLUB.bookingLabel}</p>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent btn--block">
                Pályát foglalok <IconArrow />
              </a>
              <p className="callcard__lead">Kreditfeltöltés, technikai segítség, bármi kérdés:</p>
              <a href={CLUB.managerPhoneHref} className="btn btn--ghost btn--block">
                <IconPhone /> {CLUB.manager}
              </a>
              <p className="callcard__small">{CLUB.managerPhone} · klubvezető</p>
            </aside>
          </div>

          <div className="pricing reveal">
            <div className="pricing__head">
              <h3 className="h3">
                Téli árak <em>2026/27</em>
              </h3>
              <p className="pricing__note">2026. október 12. – 2027. április 11. (26 hét) · hétfőtől vasárnapig · óradíj, ÁFA-val</p>
            </div>
            <div className="pricetable glass">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Idősáv</th>
                    <th scope="col">Alkalmi</th>
                    <th scope="col">Szezonbérlet</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICES.map((p) => (
                    <tr key={p.when}>
                      <th scope="row">{p.when}</th>
                      <td data-label="Alkalmi">{p.single}</td>
                      <td data-label="Szezonbérlet">{p.season}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="season-note glass">
              <p className="season-note__title">Szezonbérlet</p>
              <p>
                A szezonbérletek foglalási időszaka október 5. és 18. között volt. Később érkeztél? Ha a szezon elején jelzed, hogy bérletet
                vennél, általában rugalmasak vagyunk: keresd {CLUB.manager}ot.
              </p>
            </div>
          </div>

          <p className="booking__more reveal">
            <Link href="/palyarend" className="link-arrow">
              Pályarend: húzás, érkezés, öltözék <IconArrow />
            </Link>
          </p>
        </div>
      </section>

      {/* ——— History ——— */}
      <section id="tortenet" className="section history" aria-labelledby="tortenet-title">
        <div className="container">
          <div className="history__head">
            <p className="eyebrow reveal">Történet</p>
            <h2 id="tortenet-title" className="h2 h2--xl reveal">
              Siófok első <em>teniszpályája.</em>
            </h2>
            <p className="lead reveal">
              A klub az 1900-as évek legelején alakult, és hosszú éveken át az ország tenisz- és közösségi életének egyik központja volt. Ma is
              az eredeti helyén van.
            </p>
          </div>

          <figure className="archive reveal">
            <Image src="/img/archiv-siofok-tenisz.jpg" alt="Régi fénykép: hosszú ruhás teniszezők Siófokon, a századelőn" width={500} height={300} />
            <figcaption>Tenisz Siófokon, a kezdetekkor</figcaption>
          </figure>

          <ol className="timeline">
            {HISTORY.map((h) => (
              <li className="timeline__item reveal" key={h.year}>
                <span className="timeline__year">{h.year}</span>
                <p className="timeline__text">{h.text}</p>
              </li>
            ))}
          </ol>

          <div className="honor reveal">
            <div className="honor__col">
              <p className="honor__title">A Pannónia és a Sió Kupán itt játszott</p>
              <p className="honor__names">
                {GUESTS.map((g, i) => (
                  <span key={g}>
                    {g}
                    {i < GUESTS.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            </div>
            <div className="honor__col">
              <p className="honor__title">Siófokról indult válogatottak, többek között</p>
              <p className="honor__names honor__names--small">{LOCALS.join(" · ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Coaching & teams ——— */}
      <section id="edzes" className="section coaching" aria-labelledby="edzes-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Edzés és csapatok</p>
              <h2 id="edzes-title" className="h2 reveal">
                Szabadidőből <em>a Szuperligáig.</em>
              </h2>
            </div>
            <p className="lead reveal">
              A klubtagság gerincét az amatőr, szabadidős játékosok adják, de a Spartacus mindig figyelt az utánpótlásra és a versenyteniszre is.
              Minél több fiatallal szeretnénk megszerettetni a teniszt, a legtehetségesebbeket pedig támogatjuk is.
            </p>
          </div>

          <div className="coaches">
            <article className="coach coach--lead glass reveal">
              <figure className="coach__photo">
                <Image src="/img/edzo-gyenis-szilard.jpg" alt="Gyenis Szilárd ütővel a salakpályán" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover", objectPosition: "50% 20%" }} />
              </figure>
              <div className="coach__body">
                <p className="coach__role">Klubvezető, vezetőedző</p>
                <h3 className="coach__name">Gyenis Szilárd</h3>
                <p className="coach__text">
                  1980-ban kezdett teniszezni, utánpótlásként végig a vidék válogatott tagja volt, és több mint 40 egyéni tornát nyert.
                  Játszott a német Junior Bundesligában, majd három évig német felnőtt csapatokban; csapatban többszörös magyar bajnok.
                  Edzői képesítését a Pécsi Tudományegyetemen szerezte, a Play &amp; Stay oktatói papírt elsőként a Magyar Tenisz Szövetségnél.
                  30 éve tanít, sok magyar bajnokot nevelt.
                </p>
                <p className="coach__plan">
                  <strong>Tervei a klubnál:</strong> Play &amp; Stay kiscsoportok gyerekeknek és felnőtteknek, nyílt napok, tenisz napközi és
                  hétvégi háziversenyek.
                </p>
                <a href={CLUB.managerPhoneHref} className="btn btn--accent">
                  <IconPhone /> {CLUB.managerPhone}
                </a>
              </div>
            </article>

            <article className="coach glass reveal">
              <div className="coach__body">
                <p className="coach__role">Edző</p>
                <h3 className="coach__name">Bihari Gábor</h3>
                <p className="coach__text">
                  Siófokon született, 13 évesen itt kezdett teniszezni, és 20 és 40 éves kora között a Spartacus színeiben játszott. Edzői
                  képesítését a Testnevelési Főiskolán szerezte; 25 éve tart edzéseket gyerekeknek és felnőtteknek.
                </p>
              </div>
            </article>
          </div>

          <div className="teams">
            <div className="teams__head">
              <h3 className="h3">
                Három csapat <em>az országos bajnokságban</em>
              </h3>
              <p className="teams__note">Lehetőség a fiatal helyi játékosoknak, szórakozás a klubtagoknak és a szurkolóknak. Utazz, drukkolj és szórakozz velünk!</p>
            </div>
            <ul className="teams__list">
              {TEAMS.map((t) => (
                <li className="team glass reveal" key={t.name}>
                  <p className="team__name">{t.name}</p>
                  <p className="team__text">{t.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="events reveal">
            <figure className="events__photo">
              <Image src="/img/meccs-utan.jpg" alt="Játékosok kezet fognak a háló felett meccs után" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover", objectPosition: "50% 35%" }} />
            </figure>
            <div>
              <h3 className="h3">
                Egész évben <em>történik valami</em>
              </h3>
              <ul className="events__list">
                {EVENTS.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Clubhouse ——— */}
      <section id="klubhaz" className="section clubhouse" aria-labelledby="klubhaz-title">
        <div className="container">
          <p className="eyebrow reveal">Klubház</p>
          <h2 id="klubhaz-title" className="h2 reveal">
            A meccs előtt <em>és utána.</em>
          </h2>
          <div className="rooms">
            <article className="room reveal">
              <figure className="room__photo">
                <Image src="/img/bufe.jpg" alt="A klub büféje faberendezéssel és bárpulttal" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </figure>
              <h3 className="room__title">Büfé</h3>
              <p className="room__text">
                Egy üdítő vagy egy sör játék előtt és után, rálátással a pályákra. Előzetes egyeztetéssel és rendezvényekre meleg étel is készül.
              </p>
            </article>
            <article className="room reveal">
              <figure className="room__photo">
                <Image src="/img/terasz.jpg" alt="A klubház napernyős terasza" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </figure>
              <h3 className="room__title">Terasz és kerti konyha</h3>
              <p className="room__text">Nyári szezonban a kerti konyhában grillezünk és bográcsban főzünk.</p>
            </article>
            <article className="room reveal">
              <figure className="room__photo">
                <Image src="/img/szauna.jpg" alt="A klubház szaunája" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </figure>
              <h3 className="room__title">Szauna és masszázs</h3>
              <p className="room__text">Az emeleten a férfi és a női öltöző, mindkettőből közvetlenül elérhető a szauna. Masszázsszoba is van.</p>
            </article>
          </div>
          <div className="shop glass reveal">
            <p className="shop__title">Tenisz shop és húrozás</p>
            <p className="shop__text">
              Ütők, gripek, húrok, rezgéscsillapítók, labdák és ruházat a klubházban. Professzionális elektromos húrozógép, és ha kell, ütőt is
              bérelhetsz. Felszereléssel kapcsolatos kérdésben a klubvezető segít.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Jókai park 1. <em>Szeretettel várunk.</em>
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
                      {CLUB.address}
                    </a>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Klubvezető · {CLUB.manager}</span>
                    <a href={CLUB.managerPhoneHref}>{CLUB.managerPhone}</a>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Büfé</span>
                    <a href={CLUB.clubPhoneHref}>{CLUB.clubPhone}</a>
                  </div>
                </li>
                <li>
                  <IconMail />
                  <div>
                    <span className="contact__label">E-mail</span>
                    <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
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
              <iframe title="A Siófoki Spartacus a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
