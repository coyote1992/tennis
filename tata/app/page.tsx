import Image from "next/image";
import Link from "next/link";
import { IconArrow, IconMail, IconPhone, IconPin } from "@/components/icons";
import { CLUB } from "@/lib/site";

const FACTS = [
  { num: "4", label: "salakos teniszpálya a Cseke-liget mellett" },
  { num: "0 Ft", label: "pályadíj klubtagoknak, egész szezonban" },
  { num: "1993", label: "óta működő egyesület, 2018-ban volt 25 éves" },
];

const STEPS = [
  { title: "Regisztrálj az e-foglalóban", text: "A klub online foglalási rendszerében látod a szabad pályákat, és ott is foglalhatsz." },
  { title: "Foglald le a pályát", text: "Válaszd ki a szabad időpontot. Rendezvények idején pályabérlés nem lehetséges." },
  { title: "Fizesd ki a pályadíjat", text: `Átutalással (${CLUB.bank}), vagy borítékban, névvel és időponttal, az üveges fali dobozba.` },
];

const GUEST_FEES = [
  { what: "Pálya délelőtt, 14 óráig", price: "4 000 Ft", unit: "/ óra / pálya" },
  { what: "Pálya 14 órától", price: "5 000 Ft", unit: "/ óra / pálya" },
  { what: "Egyéni játék klubtaggal", price: "2 500 Ft", unit: "/ óra / fő" },
  { what: "Páros játék klubtagokkal", price: "1 500 Ft", unit: "/ óra / fő" },
];

const MEMBERSHIPS = [
  { name: "Normál tagdíj", price: "85 000 Ft", who: "A rendszeres tagok ezt választják: teljes jogú tagság egész évre." },
  { name: "Nyári rész tagdíj", price: "50 000 Ft", who: "Június, július, augusztus. Főleg a nyáron itthon lévő diákoknak." },
  { name: "Hétvégi tagdíj", price: "30 000 Ft", who: "Szabad pályákon, hétvégén. Azoknak, akik hétköznap nem érnek ki." },
  { name: "Nyugdíjas tagdíj", price: "50 000 Ft", who: "Nyugdíjas tagjainknak." },
  { name: "Nagy diákok", price: "30 000 Ft", who: "Középiskolások és nappali tagozatos egyetemi hallgatók." },
  { name: "Kis diákok", price: "20 000 Ft", who: "Óvodások és általános iskolások." },
];

const EVENTS = [
  "Old Boys verseny",
  "Vegyespáros és női páros versenyek",
  "Idénynyitó sorsolásos páros",
  "Öregfiúk és szenior csapatbajnokság",
  "Megyei egyéni és páros versenyek",
  "Gyerek–szülő verseny, házi gyerekversenyek",
  "Ovis tenisz és Play & Stay",
  "Nyári tenisztábor",
];

const BOARD = [
  { name: "Szabó Barnabás", role: "elnök" },
  { name: "Rúzsa Tamás", role: "általános elnökhelyettes" },
  { name: "dr. Karlosák Edina", role: "elnökségi tag" },
  { name: "Schwarczenberger Tamás", role: "elnökségi tag" },
  { name: "Agócs István", role: "elnökségi tag" },
  { name: "Ipach Róbert", role: "Technikai Bizottság vezető" },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow reveal">Tata Városi Tenisz Klub · Cseke-liget</p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz Tata egyik <em>legszebb pontján.</em>
            </h1>
            <p className="lead reveal">
              Négy salakpálya a Cseke-tó mellett, a Kölcsey utcában. Egyesületi klub 1993 óta: tagként nincs pályadíj, vendégként óradíjjal
              játszhatsz. Ha utána belépsz, az első három alkalmat beszámítjuk a tagdíjba.
            </p>
            <div className="hero__ctas reveal">
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                Pályát foglalok <IconArrow />
              </a>
              <Link href="#probald-ki" className="btn btn--ghost">
                Hogyan próbálhatom ki?
              </Link>
            </div>
          </div>

          <div className="hero__visual reveal">
            <figure className="hero__media reveal--img">
              <Image
                src="/img/palyak-paros.jpg"
                alt="Páros mérkőzések a Cseke-ligeti salakpályákon, fák között"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
                style={{ objectFit: "cover", objectPosition: "50% 45%" }}
              />
            </figure>
            <div className="hero__note glass">
              <p className="hero__note-kicker">Első három alkalom</p>
              <p className="hero__note-text">Pályadíjat fizetsz, és ha utána tag leszel, mind a hármat beszámítjuk a tagdíjba.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Courts ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">A pályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Négy salakpálya, <em>a Cseke-tó mellett.</em>
          </h2>
          <p className="lead reveal courts__lead">
            A pályák Tata egyik legszebb pontján, a Cseke-liget szomszédságában vannak, fák között. Mellettük terasz, ahol két meccs között le
            lehet ülni.
          </p>

          <dl className="facts facts--three">
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
                <Image src="/img/palyak-viragok.jpg" alt="A salakpályák a terasz felől, virágládákkal" fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: "cover" }} />
              </div>
              <figcaption>
                <strong>A pályák</strong> a terasz felől nézve.
              </figcaption>
            </figure>
            <figure className="duo__item reveal reveal--img">
              <div className="duo__img">
                <Image src="/img/klubhaz-terasz.jpg" alt="Terasz napernyőkkel a pályák fölött" fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: "cover" }} />
              </div>
              <figcaption>
                <strong>A terasz</strong> egy nyári versenynapon.
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
            Vendégként is <em>játszhatsz.</em>
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
            </ol>

            <aside className="callcard glass reveal" aria-label="Pályafoglalás">
              <p className="callcard__kicker">Pályafoglalás</p>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent btn--block">
                Az e-foglaló megnyitása <IconArrow />
              </a>
              <p className="callcard__lead">Kérdésed van a foglalással kapcsolatban?</p>
              <a href={CLUB.bookingPhoneHref} className="btn btn--ghost btn--block">
                <IconPhone /> {CLUB.bookingContact}
              </a>
              <p className="callcard__small">{CLUB.bookingPhone}</p>
            </aside>
          </div>

          <div className="pricing reveal">
            <div className="pricing__head">
              <h3 className="h3">
                Pályadíjak <em>vendégeknek</em>
              </h3>
              <p className="pricing__note">Klubtagoknak nincs pályadíj.</p>
            </div>
            <ul className="feelist glass">
              {GUEST_FEES.map((f) => (
                <li key={f.what}>
                  <span className="feelist__what">{f.what}</span>
                  <span className="feelist__price">
                    {f.price} <small>{f.unit}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="booking__more reveal">
            <Link href="/palyarend" className="link-arrow">
              Pályahasználati rend: locsolás, húzás, csúcsidő <IconArrow />
            </Link>
          </p>
        </div>
      </section>

      {/* ——— Club ——— */}
      <section id="klub" className="section club" aria-labelledby="klub-title">
        <div className="container">
          <div className="club__head">
            <p className="eyebrow reveal">A klub</p>
            <h2 id="klub-title" className="h2 h2--xl reveal">
              Klub, <em>nem csak pálya.</em>
            </h2>
            <p className="lead reveal">
              A Tata Városi Tenisz Klub 1993-ban alakult. A 25. születésnapon, 2018-ban az alapító évek tagjai is visszajöttek: mind a négy
              pálya megtelt párosokkal.
            </p>
          </div>

          <div className="club__grid">
            <figure className="club__photo reveal reveal--img">
              <Image src="/img/old-boys-csoport.jpg" alt="A 2022-es Old Boys verseny résztvevői a terasz lépcsőjén" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              <figcaption className="hero__caption">Old Boys verseny, 2022</figcaption>
            </figure>
            <div className="club__events reveal">
              <h3 className="h3">
                Versenyek és programok <em>az elmúlt évekből</em>
              </h3>
              <ul className="events__list">
                {EVENTS.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="board reveal">
            <p className="board__title">Vezetőség</p>
            <ul className="board__list">
              {BOARD.map((b) => (
                <li key={b.name}>
                  <span className="board__name">{b.name}</span>
                  <span className="board__role">{b.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Membership ——— */}
      <section id="tagsag" className="section membership" aria-labelledby="tagsag-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Tagság 2026</p>
              <h2 id="tagsag-title" className="h2 reveal">
                Tagként <em>a pálya a tiéd.</em>
              </h2>
            </div>
            <p className="lead reveal">
              A klubtagoknak nincs pályadíj. Válaszd azt a tagságot, amelyik az életedhez illik: egész évre, csak nyárra vagy csak hétvégére.
            </p>
          </div>

          <ul className="plans">
            {MEMBERSHIPS.map((m, i) => (
              <li className={`plan glass reveal${i === 0 ? " plan--main" : ""}`} key={m.name}>
                <p className="plan__name">{m.name}</p>
                <p className="plan__price">
                  {m.price}
                  <small> / fő</small>
                </p>
                <p className="plan__who">{m.who}</p>
              </li>
            ))}
          </ul>
          <p className="plans__note reveal">
            Féléves (tavaszi vagy őszi) rész tagdíj is váltható, 50 000 Ft. A tagdíjat csak átutalással lehet fizetni: {CLUB.bank}. A
            közleménybe írd be a nevedet és a tagdíj fajtáját.
          </p>

          <div id="probald-ki" className="trial reveal">
            <div className="trial__num" aria-hidden="true">
              3×
            </div>
            <div className="trial__body">
              <p className="trial__kicker">Próbáld ki</p>
              <h3 className="trial__title">Az első három alkalom beszámít a tagdíjba.</h3>
              <p className="trial__text">
                Az első három alkalommal az aktuális pályadíjat fizeted. Ha utána tagságot váltasz, ezt a három alkalmat teljes egészében
                beszámítjuk a tagdíj árába.
              </p>
              <div className="trial__actions">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--dark">
                  Pályát foglalok <IconArrow />
                </a>
                <a href={CLUB.bookingPhoneHref} className="btn btn--line">
                  <IconPhone /> {CLUB.bookingContact}: {CLUB.bookingPhone}
                </a>
              </div>
            </div>
          </div>

          <div className="extras">
            <div className="extra glass reveal">
              <p className="extra__title">Edzés</p>
              <p className="extra__text">
                {CLUB.coach} utánpótláskorúakat és felnőtteket is edz. Keresd közvetlenül:{" "}
                <a href={CLUB.coachPhoneHref}>{CLUB.coachPhone}</a>.
              </p>
            </div>
            <div className="extra glass reveal">
              <p className="extra__title">Nyári tenisztábor</p>
              <p className="extra__text">Nyaranta tenisztábort rendezünk: hozd el a gyerekeket, unokákat, és szólj a barátaidnak is.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Kölcsey utca 2/a. <em>Gyere ki.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Pályák</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address}
                    </a>
                    <span className="contact__line">{CLUB.place}</span>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Pályafoglalás · {CLUB.bookingContact}</span>
                    <a href={CLUB.bookingPhoneHref}>{CLUB.bookingPhone}</a>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Edzés · {CLUB.coach}</span>
                    <a href={CLUB.coachPhoneHref}>{CLUB.coachPhone}</a>
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
              <iframe title="A Tata Városi Tenisz Klub pályái a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
