import Image from "next/image";
import { IconArrow, IconClock, IconMail, IconPhone, IconPin } from "@/components/icons";
import { CLUB } from "@/lib/site";

const FOR_WHOM = ["amatőröknek", "haladóknak", "profiknak", "kicsiknek", "nagyoknak", "pároknak", "barátoknak"];

const STEPS = [
  { title: "Regisztrálj", text: "Hozz létre fiókot a KTU időpontfoglaló rendszerében." },
  {
    title: "Foglalj online",
    text: "A foglalási rendszerben előre tervezhetsz a partnereddel. Telefonon és e-mailben is foglalhatsz, de az online foglalás élvez elsőbbséget.",
  },
  { title: "Gyere és játssz", text: "Egy óra 55 perc játék és 5 perc lehúzás. Teniszcipő kötelező, más lábbeli a pályán nem használható." },
];

const SUMMER = [
  { group: "Hétköznap", rows: [
    { when: "6 – 10", base: "4 300", pass: "4 000" },
    { when: "10 – 15", base: "4 000", pass: "3 700" },
    { when: "15 – 19", base: "4 300", pass: "4 000" },
    { when: "19 – 22", base: "4 800", pass: "4 500" },
  ] },
  { group: "Hétvége", rows: [
    { when: "6 – 19", base: "3 500", pass: "3 200" },
    { when: "19 – 22", base: "4 800", pass: "4 500" },
  ] },
];

const WINTER = [
  { when: "6 – 11", weekday: "10 000", weekend: "8 500" },
  { when: "11 – 15", weekday: "9 500", weekend: "8 500" },
  { when: "15 – 22", weekday: "10 000", weekend: "8 500" },
];

const SERVICE = ["Húrozás", "Nyélcsere", "Nyél vastagítása, vékonyítása", "Alap- és fedőgrip csere", "Több ütő egységesítése („matchingelés”)"];

const QUOTES = [
  { text: "Profi személyzet, nyugodt környezet. Kiváló a pálya minősége, még biztosan visszatérek!", who: "N. Dániel (31)" },
  {
    text: "Modern kialakítású helyszín, autóval könnyen megközelíthető. Visszatérő vendégként bérletet váltottam, meggyőztek a minőséggel!",
    who: "B. Ferenc (43)",
  },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Kecskemét · Ceglédi út 108.</p>
            <h1 id="hero-title" className="h1 reveal">
              KTU, ahol minden <em>a teniszről szól.</em>
            </h1>
            <div className="hero__row reveal">
              <div>
                <p className="rotator" aria-label={`Tökéletes választás ${FOR_WHOM.join(", ")}.`}>
                  <span aria-hidden="true">Tökéletes választás</span>
                  <span className="rotator__window" aria-hidden="true">
                    <span className="rotator__list">
                      {[...FOR_WHOM, FOR_WHOM[0]].map((w, i) => (
                        <span key={i}>{w}</span>
                      ))}
                    </span>
                  </span>
                </p>
                <p className="lead">
                  Salakpályák Kecskeméten, télen sátras borítás alatt, hogy az időjárás ne szóljon bele a játékba. Foglalj online,
                  bérelj alkalmanként vagy bérlettel, és hozd el az ütődet is szervizbe.
                </p>
              </div>
              <div className="hero__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Időpontot foglalok <IconArrow />
                </a>
                <a href={CLUB.signup} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  Regisztráció
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/fedett-palya.jpg"
              alt="Fedett salakpálya a KTU-ban, a hálóval középen"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 60%" }}
            />
            <figcaption className="hero__caption">Fedett salakpálya a KTU-ban</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Röviden">
            <li className="fact">
              <span className="fact__num">{CLUB.founded}</span>
              <span className="fact__label">óta a kecskeméti teniszért</span>
            </li>
            <li className="fact">
              <span className="fact__num">7–22</span>
              <span className="fact__label">nyitva, hétfőtől vasárnapig</span>
            </li>
            <li className="fact">
              <span className="fact__num">55+5</span>
              <span className="fact__label">perc játék és lehúzás óránként</span>
            </li>
            <li className="fact">
              <span className="fact__num">5–10</span>
              <span className="fact__label">perc autóval a belvárosból</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— Booking ——— */}
      <section id="foglalas" className="section booking" aria-labelledby="foglalas-title">
        <div className="container">
          <p className="eyebrow reveal">Időpontfoglalás</p>
          <h2 id="foglalas-title" className="h2 reveal">
            Három lépés, <em>és pályán vagy.</em>
          </h2>

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
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
              Időpontot foglalok <IconArrow />
            </a>
            <a href={CLUB.signup} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              Regisztráció
            </a>
          </div>

          <aside className="cancel glass reveal" aria-label="Téli pályalemondási szabályzat">
            <p className="cancel__title">Téli lemondási szabályzat</p>
            <ul className="cancel__list">
              <li>
                <strong>48 órán túl</strong>
                <span>díjmentesen módosítható</span>
              </li>
              <li>
                <strong>48–24 óra</strong>
                <span>a foglalás 50%-a</span>
              </li>
              <li>
                <strong>24 órán belül</strong>
                <span>a foglalás 100%-a</span>
              </li>
            </ul>
            <p className="cancel__note">
              48 órán belüli módosítást vagy lemondást csak telefonon fogadunk el: <a href={CLUB.phoneHref}>{CLUB.phone}</a>
            </p>
          </aside>
        </div>
      </section>

      {/* ——— Prices ——— */}
      <section id="arak" className="section prices" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Árak</p>
          <h2 id="arak-title" className="h2 reveal">
            Bérlettel <em>minden óra olcsóbb.</em>
          </h2>
          <p className="lead reveal">
            A nyári szezon árlistája, 2026. április 20-tól október 18-ig. Az árak forintban, óránként és pályánként értendők.
          </p>

          <div className="pricegrid reveal">
            {SUMMER.map((g) => (
              <table className="pricetable" key={g.group}>
                <caption>{g.group}</caption>
                <thead>
                  <tr>
                    <th scope="col">Idősáv</th>
                    <th scope="col">Bérlet nélkül</th>
                    <th scope="col">Bérlettel</th>
                  </tr>
                </thead>
                <tbody>
                  {g.rows.map((r) => (
                    <tr key={r.when}>
                      <th scope="row">{r.when} óra</th>
                      <td>{r.base}</td>
                      <td className="pricetable__pass">{r.pass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>

          <div className="passes reveal">
            <div className="pass glass">
              <p className="pass__name">10 alkalom</p>
              <p className="pass__price">90 000 Ft</p>
            </div>
            <div className="pass glass">
              <p className="pass__name">20 alkalom, szezon</p>
              <p className="pass__price">195 000 – 234 000 Ft</p>
            </div>
            <p className="passes__note">
              Este 19 és 22 óra között a villany 500 Ft/óra. Bérletet a helyszínen válthatsz; bérletről, kreditről és
              ajándékutalványról telefonon egyeztetünk.
            </p>
          </div>

          <div className="winter glass reveal">
            <div>
              <p className="winter__kicker">Téli szezon</p>
              <p className="winter__title">Sátras borítás alatt, egész télen.</p>
              <p className="winter__text">
                A tavalyi téli árak tájékoztatásul (2025. október 16. – 2026. április 15.). Az idei téli árakért hívj minket.
              </p>
              <a href={CLUB.phoneHref} className="winter__phone">
                <IconPhone /> {CLUB.phone}
              </a>
            </div>
            <table className="pricetable pricetable--winter">
              <caption className="sr-only">Téli árak, 2025/26</caption>
              <thead>
                <tr>
                  <th scope="col">Idősáv</th>
                  <th scope="col">Hétköznap</th>
                  <th scope="col">Hétvége</th>
                </tr>
              </thead>
              <tbody>
                {WINTER.map((r) => (
                  <tr key={r.when}>
                    <th scope="row">{r.when} óra</th>
                    <td>{r.weekday}</td>
                    <td>{r.weekend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ——— About ——— */}
      <section id="ktu" className="section about" aria-labelledby="ktu-title">
        <div className="container">
          <p className="eyebrow reveal">A KTU</p>
          <h2 id="ktu-title" className="h2 h2--xl reveal">
            Új élet a <em>kecskeméti teniszben.</em>
          </h2>
          <p className="lead reveal">
            A Kecskeméti Tenisz Udvar {CLUB.founded}-ben jött létre, hogy új életet leheljen a helyi teniszközösségbe és -kultúrába
            Kecskeméten és környékén. Vadonatúj salakpályával, eszközökkel és infrastruktúrával várunk, és a jövőben még több pályát
            szeretnénk építeni és modernizálni.
          </p>

          <ul className="amenities reveal">
            <li>
              <strong>Öltöző és zuhany</strong>
              <span>Az öltözőben papucsban közlekedj.</span>
            </li>
            <li>
              <strong>Parkolás</strong>
              <span>Az épület előtt és az udvarban is.</span>
            </li>
            <li>
              <strong>Könnyen elérhető</strong>
              <span>Autóval 5–10 perc a központból, biciklivel és tömegközlekedéssel is.</span>
            </li>
            <li>
              <strong>Kiszámítható</strong>
              <span>A foglalási rendszerben előre tervezheted az időpontjaidat.</span>
            </li>
          </ul>

          <div className="about__photos">
            <figure className="about__photo about__photo--wide reveal reveal--img">
              <Image src="/img/terasz.jpg" alt="A KTU terasza magas asztalokkal a klubépület előtt" fill sizes="(max-width: 900px) 100vw, 46vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="about__photo reveal reveal--img">
              <Image src="/img/zuhany.jpg" alt="Zuhanyzó az öltözőben" fill sizes="(max-width: 900px) 50vw, 22vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="about__photo reveal reveal--img">
              <Image src="/img/mosdo.jpg" alt="Mosdó az öltözőben" fill sizes="(max-width: 900px) 50vw, 22vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Coaching ——— */}
      <section id="edzes" className="section coaching" aria-labelledby="edzes-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Oktatás</p>
              <h2 id="edzes-title" className="h2 reveal">
                Kicsiknek és nagyoknak, <em>a te szinteden.</em>
              </h2>
            </div>
            <div>
              <p className="lead reveal">
                Teniszoktatóink egyéni igényeknek megfelelő szinten és gyakorisággal állnak rendelkezésre. Oktatási célra a
                pályafoglalás egyéni egyeztetéssel lehetséges.
              </p>
              <a href={CLUB.phoneHref} className="link-arrow reveal">
                Érdeklődj: {CLUB.phone} <IconArrow />
              </a>
            </div>
          </div>

          <div className="kids">
            <figure className="kids__photo kids__photo--wide reveal reveal--img">
              <Image src="/img/gyerekek-ktu.jpg" alt="Gyerekek ütőkkel körben, a pályán teniszlabdákból kirakva a KTU felirat" fill sizes="(max-width: 900px) 100vw, 58vw" style={{ objectFit: "cover" }} />
              <figcaption className="kids__caption">Gyerekedzés a KTU-ban</figcaption>
            </figure>
            <figure className="kids__photo kids__photo--tall reveal reveal--img">
              <Image src="/img/gyerekedzes-edzo.jpg" alt="Edző labdakosárral és egy kisfiú ütővel a fedett pályán" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="kids__photo reveal reveal--img">
              <Image src="/img/gyerekedzes.jpg" alt="Gyerekek gyakorlatot végeznek a salakpályán" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Racket service ——— */}
      <section id="szerviz" className="section service" aria-labelledby="szerviz-title">
        <div className="container">
          <div className="service__grid">
            <div>
              <p className="eyebrow reveal">Ütőszerviz</p>
              <h2 id="szerviz-title" className="h2 reveal">
                Bárki ütőjét <em>rendbe tesszük.</em>
              </h2>
              <p className="lead reveal">
                Akkor is, ha máshol játszol. Hozd el a megfáradt vagy tökéletesítésre váró ütődet, és segítünk, hogy a legtöbbet
                hozd ki belőle.
              </p>
              <ul className="service__list reveal">
                {SERVICE.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <aside className="service__card glass reveal" aria-label="Ütőszerviz elérhetőségei">
              <p className="service__kicker">Ütőszerviz</p>
              {CLUB.service.people.map((p) => (
                <a href={p.href} className="service__person" key={p.name}>
                  <span>{p.name}</span>
                  <strong>
                    <IconPhone /> {p.phone}
                  </strong>
                </a>
              ))}
              <a href={`mailto:${CLUB.service.email}`} className="btn btn--ghost btn--block">
                <IconMail /> {CLUB.service.email}
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ——— Proof ——— */}
      <section id="velemenyek" className="section quotes-sec" aria-labelledby="velemenyek-title">
        <div className="container">
          <p className="eyebrow reveal">Vendégeink mondták</p>
          <h2 id="velemenyek-title" className="sr-only">
            Vélemények
          </h2>
          <div className="quotes">
            {QUOTES.map((q) => (
              <figure className="quote reveal" key={q.who}>
                <blockquote>„{q.text}”</blockquote>
                <figcaption>{q.who}</figcaption>
              </figure>
            ))}
          </div>
          <div className="cup glass reveal">
            <div>
              <p className="cup__kicker">KTU Kupa</p>
              <p className="cup__text">
                2023-ban indítottuk hagyományteremtő amatőr páros versenyünket: egy nap, négyes csoportok, aztán egyenes kiesés, bográcsos
                ebéddel. Az aktuális versenyekről a Facebook-oldalunkon szólunk.
              </p>
            </div>
            <div className="cup__links">
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                Facebook
              </a>
              <a href={CLUB.review} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                Értékelj a Google-n
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
              Ceglédi út 108. <em>Várunk a pályán.</em>
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
                    <span className="contact__label">Telefon</span>
                    <a href={CLUB.phoneHref}>{CLUB.phone}</a>
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
                    <span className="contact__line">{CLUB.hours}</span>
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
              <iframe title="A Kecskeméti Tenisz Udvar a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
