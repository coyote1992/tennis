import Image from "next/image";
import Link from "next/link";
import { IconArrow, IconClock, IconMail, IconPhone, IconPin } from "@/components/icons";
import { CLUB, HOURS } from "@/lib/site";

const FACTS = [
  { num: "12", label: "salakpálya, nyáron a szabad ég alatt" },
  { num: "2", label: "kemény borítású pálya" },
  { num: "28", label: "hetes téli szezon, sátor alatt" },
  { num: "1982", label: "óta szolgálja a sportot a Csömöri úti telep" },
];

const STEPS = [
  {
    title: "Hívj, vagy gyere be a recepcióra",
    text: `Pályát telefonon (${CLUB.phone}) vagy személyesen, a recepción foglalhatsz.`,
  },
  {
    title: "Alkalmi óra, tízes bérlet vagy fix időpont",
    text: "Játszhatsz egy-egy órát, vehetsz 10 alkalmas bérletet, vagy szezonbérlettel egész télre a tiéd ugyanaz a nap, időpont és pálya.",
  },
  {
    title: "Fizess a recepción, és irány a pálya",
    text: "Alkalmi bérlésnél a lefoglalt időt pályára lépés előtt kell kifizetni. A játékidő 55 perc: az utolsó 5 perc a pálya lehúzásáé és vonalazásáé.",
  },
];

const WINTER_PRICES = [
  { when: "Hétköznap 7–12", single: "7 700 Ft", season: "7 500 Ft", ten: "76 000 Ft" },
  { when: "Hétköznap 12–15", single: "6 800 Ft", season: "6 800 Ft", ten: "–" },
  { when: "Hétköznap 15–21", single: "9 000 Ft", season: "8 800 Ft", ten: "89 000 Ft", peak: true },
  { when: "Hétvégén 7–12 és 15–20", single: "7 700 Ft", season: "7 500 Ft", ten: "76 000 Ft" },
  { when: "Hétvégén 12–15", single: "6 300 Ft", season: "6 300 Ft", ten: "–" },
];

const GOOD_TO_KNOW = [
  "Salakon futócipő és stoplis cipő nem használható; kemény pályára csak tiszta cipővel lehet lépni.",
  "A pályára legfeljebb 5 perccel a kezdés előtt lehet bemenni.",
  "Eső miatt elmaradt játék pótolható, ha van szabad pálya.",
  "Póló nélkül nem lehet a pályán és a recepción tartózkodni.",
];

const HISTORY = [
  { year: "1950", text: "Megalakul a Metro Rákosszentmihályi Sport Club. Színei: kék és fehér." },
  { year: "1982", text: "Azóta szolgál sportcélt a Csömöri úti sporttelep, a XVI. kerületben." },
  { year: "2013", text: "Iskolai tenisz és Play & Stay a Magyar Tenisz Szövetség programjában." },
  { year: "2014", text: "A Kétyi András vezette férfi csapat dobogós az Országos Döntőben." },
  { year: "2017", text: "Veretlenül megnyert férfi 1. osztály az Országos Csapatbajnokságban, vissza a Szuperligába." },
  { year: "2022", text: "Kétyi András lesz az egyesület elnöke, Kétyi Zsolt után." },
];

const PATH = [
  {
    step: "Play & Stay",
    title: "Az iskolában kezdődik",
    text: "A Hermann Ottó, a Móra Ferenc és a Szent-Györgyi Albert iskola alsósai heti rendszerességgel járnak hozzánk. Puhább labda, kisebb ütő, és már az első órán játék.",
  },
  {
    step: "Kiscsoport",
    title: "Kor és tudás szerint",
    text: "6–8 éves kortól 12–14 éves korig kiscsoportos edzés. A legkisebbek játékos feladatokat kapnak, a haladók már versenyszintű gyakorlatokat.",
  },
  {
    step: "Verseny",
    title: "U12-től a Szuperligáig",
    text: "12–14 éves kortól intenzívebb képzés. Korosztályos csapatok U12-től U18-ig, a Budapest I. osztálytól egészen a Szuperligáig.",
  },
  {
    step: "Felnőtt",
    title: "18 felett is folytatható",
    text: "A felnőtt csapatokban, vagy amatőrként: edzőink felnőtteknek is tanítják a tenisz alapjait, egyéniben és csoportban.",
  },
];

const COACHES = [
  {
    name: "Kétyi András",
    role: "Vezetőedző, elnök",
    img: "/img/edzo-ketyi-andras.jpg",
    text: "2004 és 2011 között a magyar válogatott tagja, többszörös magyar bajnok. U.S.P.T.R. nemzetközi edzői oklevél, TF-es edzői végzettség, Play & Stay licenc. Ő segít megtalálni a hozzád illő edzőt.",
  },
  {
    name: "Dobó Csilla",
    role: "Teniszedző",
    img: "/img/edzo-dobo-csilla.jpg",
    text: "2002 óta edz gyerekeket és felnőtteket. Utánpótlás- és felnőtt magyar bajnok, 15 évesen a WTA-ranglista 600. helye körül állt. Sportedző (Semmelweis Egyetem).",
  },
  {
    name: "Szemes Bálint",
    role: "Teniszedző",
    img: "/img/edzo-szemes-balint.jpg",
    text: "Több mint 15 éve edz kezdőket és haladókat, gyerekeket és felnőtteket, egyéni és csoportos formában. TF-es edzői végzettség, U.S.P.T.R. licenc.",
  },
  {
    name: "Szíjj Béla",
    role: "Teniszedző",
    img: "/img/edzo-szijj-bela.jpg",
    text: "A Metro edzői csapatának tagja.",
  },
];

const CAMP_DAY = [
  { time: "8:00", what: "Érkezés, reggeli" },
  { time: "9:00", what: "Teniszedzés" },
  { time: "11:00", what: "Úszás a Konrád Ferenc uszodában" },
  { time: "12:30", what: "Ebéd, pihenő, szabad játék" },
  { time: "13:30", what: "Tenisz vagy foci" },
  { time: "14:30", what: "Teniszedzés" },
  { time: "15:30", what: "Uzsonna, hazaindulás" },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow reveal">Metro Tenisz · Rákosszentmihály, XVI. kerület</p>
            <h1 id="hero-title" className="h1 reveal">
              Mindenünk <em>a tenisz.</em>
            </h1>
            <p className="lead reveal">
              12 salak- és 2 kemény pálya a Csömöri úton, télen sátor alatt. Gyerekeknek 5–6 éves kortól, versenyzőknek a
              Szuperligáig, és mindenkinek, aki csak egy jó órát szeretne játszani.
            </p>

            <div className="paths reveal">
              <Link href="#probaora" className="path path--primary">
                <span className="path__title">
                  Ingyenes próbaóra <IconArrow />
                </span>
                <span className="path__text">Csoportos edzésre próbaórával lehet kezdeni, utána egyeztetjük a csoportot és az időpontot.</span>
                <span className="path__meta">Gyerekeknek 5–6 éves kortól</span>
              </Link>
              <Link href="#foglalas" className="path">
                <span className="path__title">
                  Pályát foglalnék <IconArrow />
                </span>
                <span className="path__text">Telefonon vagy személyesen. Alkalmi óra, tízes bérlet, szezonbérlet.</span>
                <span className="path__meta">{CLUB.phone}</span>
              </Link>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/metro-tabor.jpg"
              alt="Gyerekek ütőkkel a salakpályán, előttük teniszlabdákból kirakva: METRO"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              style={{ objectFit: "cover", objectPosition: "50% 70%" }}
            />
            <figcaption className="hero__caption">Nyári tábor a Csömöri úton</figcaption>
          </figure>
        </div>
      </section>

      {/* ——— Courts ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">A pályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Tizennégy pálya, <em>egész évben.</em>
          </h2>
          <p className="lead reveal courts__lead">
            Salakos és kemény teniszpályák, műfüves focipálya, kondicionáló terem és büfé. A sporttelep a XVI. kerületben van, de nem
            csak kerületieknek: mindenkit várunk.
          </p>

          <dl className="facts">
            {FACTS.map((f) => (
              <div className="fact reveal" key={f.num}>
                <dt className="fact__num">{f.num}</dt>
                <dd className="fact__label">{f.label}</dd>
              </div>
            ))}
          </dl>

          <div className="duo">
            <figure className="duo__item reveal reveal--img">
              <div className="duo__img">
                <Image
                  src="/img/palyak-legifoto.jpg"
                  alt="A Metro Tenisz salak- és kemény pályái felülről"
                  fill
                  sizes="(max-width: 900px) 100vw, 34vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <figcaption>
                <strong>Nyáron</strong> a szabad ég alatt: tizenkét salakpálya és két kemény pálya, fák között.
              </figcaption>
            </figure>
            <figure className="duo__item reveal reveal--img">
              <div className="duo__img">
                <Image
                  src="/img/sator-salak.jpg"
                  alt="Salakpálya a téli sátor alatt"
                  fill
                  sizes="(max-width: 900px) 100vw, 34vw"
                  style={{ objectFit: "cover", objectPosition: "50% 60%" }}
                />
              </div>
              <figcaption>
                <strong>Télen</strong> sátor alatt, szeptember végétől áprilisig. A salakpályák és az AO pálya ugyanannyiba kerül.
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
            Egy telefon, <em>és tiéd a pálya.</em>
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
                <span className="step__num">!</span>
                <div>
                  <h3 className="step__title">Lemondás legkésőbb 48 órával előtte</h3>
                  <p className="step__text">
                    A később lemondott vagy le sem mondott órát felszámoljuk, kivéve, ha a pályát közben ki tudjuk adni. A klub
                    mindent megtesz érte.
                  </p>
                </div>
              </li>
            </ol>

            <aside className="callcard glass reveal" aria-label="Pályafoglalás telefonon">
              <p className="callcard__kicker">Pályafoglalás</p>
              <a href={CLUB.phoneHref} className="callcard__phone">
                {CLUB.phone}
              </a>
              <a href={CLUB.phoneHref} className="btn btn--accent btn--block">
                <IconPhone /> Hívás
              </a>
              <div className="callcard__hours">
                {HOURS.map((h) => (
                  <p key={h.days}>
                    <span>{h.days}</span>
                    <strong>{h.time}</strong>
                  </p>
                ))}
              </div>
              <a href={`mailto:${CLUB.email}`} className="callcard__mail">
                {CLUB.email}
              </a>
            </aside>
          </div>

          <div className="prices">
            <div className="prices__head reveal">
              <h3 className="h3">
                Téli pályaárak <em>2026/27</em>
              </h3>
              <p className="prices__note">2026. szeptember 28. – 2027. április 11., 28 hét · sátor, salakpályák · óradíjak</p>
            </div>
            <div className="pricetable glass reveal">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Idősáv</th>
                    <th scope="col">Alkalmi óra</th>
                    <th scope="col">Szezonbérlet / fix</th>
                    <th scope="col">10 alkalmas bérlet</th>
                  </tr>
                </thead>
                <tbody>
                  {WINTER_PRICES.map((p) => (
                    <tr key={p.when} className={p.peak ? "is-peak" : undefined}>
                      <th scope="row">{p.when}</th>
                      <td data-label="Alkalmi óra">{p.single}</td>
                      <td data-label="Szezonbérlet / fix">{p.season}</td>
                      <td data-label="10 alkalmas bérlet">{p.ten}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="pricetable__foot">Az AO pálya ára megegyezik a salakos teniszpályák árával.</p>
            </div>
            <div className="football glass reveal">
              <div>
                <p className="football__title">Műfüves focipálya</p>
                <p className="football__text">Baráti társaságoknak és amatőr csapatoknak, egész nyitvatartási időben.</p>
              </div>
              <p className="football__price">
                <span>
                  <strong>25 000 Ft</strong> / óra
                </span>
                <span className="football__muted">
                  <strong>22 500 Ft</strong> / óra egész szezonra
                </span>
              </p>
            </div>
          </div>

          <div className="know reveal">
            <h3 className="know__title">Jó tudni</h3>
            <ul className="know__list">
              {GOOD_TO_KNOW.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <Link href="/hazirend" className="link-arrow">
              A teljes házirend <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ——— Club ——— */}
      <section id="klub" className="section club" aria-labelledby="klub-title">
        <div className="container">
          <div className="club__head">
            <p className="eyebrow reveal">A klub</p>
            <h2 id="klub-title" className="h2 h2--xl reveal">
              Kék-fehér klub, <em>Rákosszentmihályon.</em>
            </h2>
            <p className="lead reveal">
              A Metro Rákosszentmihályi Sport Clubot 1950-ben alapították. Abban hiszünk, hogy a sport szeretete gyerekkorban alakul
              ki, és egy életen át megmaradhat: szakmai igényesség, családias hangulat.
            </p>
          </div>

          <ol className="timeline">
            {HISTORY.map((h) => (
              <li className="timeline__item reveal" key={h.year}>
                <span className="timeline__year">{h.year}</span>
                <p className="timeline__text">{h.text}</p>
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
              <p className="eyebrow reveal">Edzés</p>
              <h2 id="edzes-title" className="h2 reveal">
                Az első labdától <em>a Szuperligáig.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Már 5–6 éves kortól várjuk a gyerekeket, akik játékosan tanulhatják meg a teniszt. A Kétyi Tenisziskola kezdőkkel és
              haladókkal is foglalkozik, és felnőtteknek is tart edzést.
            </p>
          </div>

          <ol className="pathway">
            {PATH.map((p, i) => (
              <li className="pathway__step glass reveal" key={p.step}>
                <span className="pathway__num">{i + 1}</span>
                <p className="pathway__tag">{p.step}</p>
                <h3 className="pathway__title">{p.title}</h3>
                <p className="pathway__text">{p.text}</p>
              </li>
            ))}
          </ol>

          <div id="probaora" className="trial reveal">
            <figure className="trial__photo">
              <Image
                src="/img/play-and-stay.jpg"
                alt="Két kislány a salakpályán, előttük piros és narancs Play & Stay labdák"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "50% 55%" }}
              />
            </figure>
            <div className="trial__body">
              <p className="trial__kicker">Ingyenes próbaóra</p>
              <h3 className="trial__title">Kezdd egy ingyenes próbaórával.</h3>
              <p className="trial__text">
                Csoportos edzésre egy ingyenes próbaórával lehet kezdeni. Utána közösen megbeszéljük a lehetőségeket és az
                időpontokat. Iskolai Play & Stay után is így lehet továbblépni: a szülők jelezzenek nekünk.
              </p>
              <div className="trial__actions">
                <a href={CLUB.coachPhoneHref} className="btn btn--accent">
                  <IconPhone /> {CLUB.coachName}: {CLUB.coachPhone}
                </a>
                <a href={`mailto:${CLUB.coachEmail}?subject=Pr%C3%B3ba%C3%B3ra`} className="btn btn--ghost">
                  <IconMail /> E-mail
                </a>
              </div>
              <p className="trial__note">Az edzők MTSZ Play & Stay képesítéssel rendelkeznek.</p>
            </div>
          </div>

          <div className="coaches">
            <h3 className="coaches__title">Edzőink</h3>
            <ul className="coaches__list">
              {COACHES.map((c) => (
                <li className="coach reveal" key={c.name}>
                  <Image src={c.img} alt={c.name} width={88} height={88} className="coach__img" />
                  <div>
                    <p className="coach__name">{c.name}</p>
                    <p className="coach__role">{c.role}</p>
                    <p className="coach__text">{c.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Camp ——— */}
      <section id="tabor" className="section camp" aria-labelledby="tabor-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Nyári tábor</p>
              <h2 id="tabor-title" className="h2 reveal">
                Tizenhárom nyár <em>a Metrón.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Hétfőtől péntekig, 8 és 16 óra között, első osztályostól gimnazistáig, tenisztudás nélkül is. Napi két tenisz, úszás,
              háromszori étkezés, pénteken házibajnokság, ahol mindenki érmet kap.
            </p>
          </div>

          <div className="camp__grid">
            <div className="campday glass reveal">
              <p className="campday__title">Egy tábori nap</p>
              <ol className="campday__list">
                {CAMP_DAY.map((d) => (
                  <li key={d.time}>
                    <span>{d.time}</span>
                    {d.what}
                  </li>
                ))}
              </ol>
              <p className="campday__note">Rossz időben is: a tábor fedett pályán folytatódik.</p>
            </div>

            <div className="camp__photos">
              <figure className="camp__photo reveal reveal--img">
                <Image src="/img/tabor-uszas.jpg" alt="Táborozók a Konrád Ferenc uszoda medencéjében" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
              </figure>
              <figure className="camp__photo reveal reveal--img">
                <Image src="/img/tabor-kartya.jpg" alt="Gyerekek kártyáznak a szabad játékidőben" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
              </figure>
            </div>

            <div className="campinfo glass reveal">
              <p className="campinfo__title">A 2026-os tábor</p>
              <ul className="campinfo__list">
                <li>
                  <strong>66 000 Ft</strong> / hét
                </li>
                <li>
                  <strong>63 000 Ft</strong> / hét testvér- és klubkedvezménnyel
                </li>
                <li>
                  <strong>16 000 Ft</strong> / nap
                </li>
              </ul>
              <p className="campinfo__text">
                Minden sportfelszerelést biztosítunk. Aki legalább két hetet befizet, ajándék klubpólót kap. Jelentkezés és a következő
                nyár turnusai: {CLUB.coachName}.
              </p>
              <a href={CLUB.coachPhoneHref} className="btn btn--accent btn--block">
                <IconPhone /> {CLUB.coachPhone}
              </a>
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
              Csömöri út 158. <em>Várunk.</em>
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
                    <span className="contact__label">Pályafoglalás, recepció</span>
                    <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Edzés, próbaóra, tábor</span>
                    <a href={CLUB.coachPhoneHref}>
                      {CLUB.coachName}, {CLUB.coachPhone}
                    </a>
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
              <iframe title="A Metro Tenisz a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
