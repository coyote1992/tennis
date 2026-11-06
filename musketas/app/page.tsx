import Image from "next/image";
import { IconArrow, IconClock, IconMail, IconPhone, IconPin } from "@/components/icons";
import { PriceExplorer } from "@/components/PriceExplorer";
import { CLUB } from "@/lib/site";

const SURFACES = [
  {
    key: "csarnok",
    count: "8",
    name: "Fedett csarnok",
    surface: "Swiss Court® salak",
    img: "/img/csarnok.jpg",
    alt: "A nyolcpályás teniszcsarnok salakpályái belülről",
    points: [
      "Télen-nyáron fedett, az időjárás nem szól bele a játékba",
      "300 lux alapfény, igény szerint akár 500 lux",
      "Pihenő babzsákfotelekkel a folyosón",
    ],
  },
  {
    key: "kemeny",
    count: "4",
    name: "Keménypálya",
    surface: "Ízületkímélő borítás",
    img: "/img/kemenypalya.jpg",
    alt: "Kék keménypályák felülről",
    points: ["Ízületkímélő keménypályák, nem csak profiknak", "Télen sátorban játszható", "Téli sátras árak 10 és 20 óra között"],
  },
  {
    key: "szabadter",
    count: "3",
    name: "Szabadtér",
    surface: "Swiss Court® salak",
    img: "/img/salak.jpg",
    alt: "Teniszütők és labda a salakpálya vonalán",
    points: [
      "Vízáteresztő technológia: eső után 10–15 perccel már játszható",
      "Időjárástól függően akár egész évben",
      "Hétvégére is foglalható",
    ],
  },
];

const STEPS = [
  { title: "Regisztrálj a HELLA-ban", text: "Egyszeri, gyors regisztráció, akár Facebook- vagy Google-fiókkal is." },
  { title: "Válassz borítást és időpontot", text: "Sötéttel a foglalt, világossal a szabad időpontokat látod. Konkrét pályatípusra foglalsz." },
  { title: "Fizess, és kész", text: "A foglalás a pályadíj kifizetésével válik véglegessé; zöld színnel látod, és visszaigazolást is kapsz." },
];

const PERKS = [
  { title: "Élő sport a ledfalon", text: "Árnyékos pihenőnkben élőben közvetítjük a világ kiemelt sporteseményeit." },
  { title: "Pingpong, tollas, sakk, kártya", text: "Ingyenesen használhatod, az eszközöket a recepción kéred el." },
  { title: "Bemelegítő eszközök", text: "TRX, henger, ugrálókötél a csarnok közösségi terében." },
  { title: "Ingyenes saját parkoló", text: "Vagy busszal, villamossal: néhány perc séta a megállótól." },
];

const REVIEWS = [
  { text: "Hatalmas, jól karbantartott, fűtött teniszpályák, árban is elfogadható. Ajánlom!", who: "Zoltán Gyarmati" },
  { text: "Nagyon szépen kialakított tenisz centrum. Hatalmas területen fedett és nyitott pályák tömkelege.", who: "Zoltán Lancsák" },
  { text: "Modern pályák, kedves munkatársak.", who: "Emese John" },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Budapest XI. · a budai hegyek lábánál</p>
            <h1 id="hero-title" className="h1 reveal">
              Három borítás. <em>Egy klub.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Nyolc fedett és három szabadtéri Swiss Court® salakpálya, négy ízületkímélő keménypálya. Válaszd ki, min játszanál, és
                foglalj online pár kattintással.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Pályafoglalás <IconArrow />
                </a>
                <a href="#arak" className="btn btn--ghost">
                  Árak 2026/27
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/legifoto.jpg"
              alt="Légifotó a Muskétás salakpályáiról és kék keménypályáiról"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
            <figcaption className="hero__caption">Salak és keménypályák egymás mellett, Muskétás utca 1.</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Röviden">
            <li className="fact">
              <span className="fact__num">8</span>
              <span className="fact__label">fedett salakpálya</span>
            </li>
            <li className="fact">
              <span className="fact__num">3</span>
              <span className="fact__label">szabadtéri salakpálya</span>
            </li>
            <li className="fact">
              <span className="fact__num">4</span>
              <span className="fact__label">keménypálya</span>
            </li>
            <li className="fact">
              <span className="fact__num">{CLUB.rating}</span>
              <span className="fact__label">csillag a Google-értékeléseken</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— Courts ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Előbb a borítás, <em>aztán az időpont.</em>
          </h2>
          <p className="lead reveal">
            Online mindig konkrét pályatípusra foglalsz, és a helyszínen ezt általában már nem lehet módosítani. Nézd meg, melyik
            borításon játszanál a legszívesebben.
          </p>

          <div className="surfaces">
            {SURFACES.map((s) => (
              <article className="surface glass reveal" key={s.key}>
                <figure className="surface__photo">
                  <Image src={s.img} alt={s.alt} fill sizes="(max-width: 900px) 100vw, 22vw" style={{ objectFit: "cover" }} />
                  <span className="surface__count">{s.count}</span>
                </figure>
                <div className="surface__body">
                  <p className="surface__kicker">{s.surface}</p>
                  <h3 className="h3">{s.name}</h3>
                  <ul className="surface__points">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="swiss reveal">
            <Image src="/img/itf-jelvenyek.png" alt="ITF Recognised Court, Two Star és ITF Classified Court Pace 1, Slow jelvények" width={168} height={96} />
            <p>
              <strong>Svájcban találtuk meg.</strong> Az új generációs Swiss Court® salak a hagyományos salakpálya ideális alternatívája,
              kiváló csúszással és tapadással. A borítás megkapta a Nemzetközi Tenisz Szövetség (ITF) kétcsillagos minőségi tanúsítványát.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Prices ——— */}
      <section id="arak" className="section pricing" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Árak · 2026/27-es szezon</p>
          <h2 id="arak-title" className="h2 reveal">
            Alkalmanként, bérlettel <em>vagy klubtagként.</em>
          </h2>
          <p className="lead reveal">
            A klubtagság a 2026/27-es téli és nyári szezonra egyszerre vásárolt bérletet jelenti, ezzel a legkedvezőbb az óradíj.
          </p>

          <div className="reveal">
            <PriceExplorer />
          </div>

          <p className="pricing__help reveal">
            Kérdésed van? Hívd kollégáinkat a <a href={CLUB.landlineHref}>{CLUB.landline}</a> vezetékes számon 9 és 20 óra között.
          </p>
        </div>
      </section>

      {/* ——— Booking ——— */}
      <section id="foglalas" className="section booking" aria-labelledby="foglalas-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Pályafoglalás</p>
              <h2 id="foglalas-title" className="h2 reveal">
                Foglalás <em>pillanatok alatt.</em>
              </h2>
            </div>
            <p className="lead reveal">
              A gyors és hibátlan foglalásért a HELLA foglalórendszert használjuk. Ha már regisztráltál, csak jelentkezz be, és foglalj.
            </p>
          </div>

          <ol className="steps">
            {STEPS.map((s, i) => (
              <li className="step reveal" key={s.title}>
                <span className="step__num">{i + 1}</span>
                <h3 className="h3">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="booking__bar glass reveal">
            <p>
              <strong>Lemondás:</strong> foglalásodat az időpont előtt legkésőbb 24 órával módosíthatod vagy lemondhatod; ilyenkor a
              befizetett díj visszajár, vagy más időpontra használható. 24 órán belüli lemondást nem tudunk figyelembe venni.
            </p>
            <div className="booking__actions">
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                Pályafoglalás <IconArrow />
              </a>
              <a href={CLUB.signup} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                Regisztráció
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Club ——— */}
      <section id="klub" className="section club" aria-labelledby="klub-title">
        <div className="container">
          <p className="eyebrow reveal">Klub</p>
          <h2 id="klub-title" className="h2 h2--xl reveal">
            A klub, amilyenbe <em>mindig is járni akartunk.</em>
          </h2>
          <p className="lead reveal">
            Évtizedek óta szenvedélyünk a tenisz. Rengeteg klubban játszottunk, és egyre tisztábban láttuk, milyen pályák, szolgáltatások
            és hangulat kellenek ahhoz, hogy a vendégek igazán elégedettek legyenek. Ebből lett a Muskétás.
          </p>
          <p className="signature reveal">Csízy Dezső, tulajdonos</p>
          <blockquote className="creed reveal">
            <p>
              „Hisszük, hogy a tenisz nem egyszerűen egy sport, épp ezért a Muskétás is több mint egy teniszklub. A Muskétás a TE klubod.”
            </p>
            <footer>A Muskétás hitvallása</footer>
          </blockquote>

          <ul className="perks reveal">
            {PERKS.map((p) => (
              <li key={p.title}>
                <strong>{p.title}</strong>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>

          <div className="club__photos">
            <figure className="club__photo club__photo--wide reveal reveal--img">
              <Image src="/img/klubelet.jpg" alt="Árnyékolt kerti pihenő a pályák mellett, a budai hegyekkel a háttérben" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="club__photo reveal reveal--img">
              <Image src="/img/jatek-2.jpg" alt="Játékos tenyeres ütés közben a fedett csarnokban" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="club__photo reveal reveal--img">
              <Image src="/img/kozpont.jpg" alt="A teniszcentrum felülről, a csarnokokkal és a szabadtéri pályákkal" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>

          <p className="partners reveal">Pályáinkat a Sas Gardens és a Parktenisz-klub is szívesen ajánlja, ahogy mi is őket: sportszerűen, együtt a teniszért.</p>
        </div>
      </section>

      {/* ——— Tournaments ——— */}
      <section id="versenyek" className="section events" aria-labelledby="versenyek-title">
        <div className="container">
          <div className="events__grid">
            <div>
              <p className="eyebrow reveal">MATK és Muskétás versenyek</p>
              <h2 id="versenyek-title" className="h2 reveal">
                Verseny a <em>saját szinteden.</em>
              </h2>
              <p className="lead reveal">
                A Magyar Amatőr Tenisz Klubbal közösen dolgozunk az ország legnagyobb és legaktívabb amatőr teniszközösségén, más
                teniszcentrumokkal közös versenysorozattal. Nem kell aggódnod, hogy túl erős vagy túl gyenge ellenfelet kapsz.
              </p>
              <ul className="events__list reveal">
                <li>Szintrendszer (ATR), amely alapján könnyen találsz ideális teniszpartnert</li>
                <li>Ranglista és visszanézhető meccsvideók</li>
                <li>Head to head: évekre visszamenőleg látod, hogy állsz ellenfeleiddel</li>
                <li>Nevezés online, otthonról, a kiírt határidő előtt</li>
              </ul>
              <a href={CLUB.signup} target="_blank" rel="noopener noreferrer" className="btn btn--accent reveal">
                Regisztrálok a HELLA-ban <IconArrow />
              </a>
            </div>
            <figure className="events__card glass reveal">
              <Image src="/img/matk.jpg" alt="A Magyar Amatőr Tenisz Klub logója" width={200} height={200} />
              <figcaption>Magyar Amatőr Tenisz Klub</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Reviews ——— */}
      <section id="velemenyek" className="section reviews" aria-labelledby="velemenyek-title">
        <div className="container">
          <div className="reviews__head reveal">
            <p className="reviews__score">
              {CLUB.rating}
              <span>/ 5</span>
            </p>
            <h2 id="velemenyek-title" className="h3">
              Google-értékelések <em>vendégeinktől</em>
            </h2>
          </div>
          <div className="reviews__list">
            {REVIEWS.map((r) => (
              <figure className="review reveal" key={r.who}>
                <blockquote>„{r.text}”</blockquote>
                <figcaption>{r.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Muskétás utca 1. <em>Várunk a pályán.</em>
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
                    <span className="contact__line">Ingyenes saját parkoló, busz és villamos pár perc sétára</span>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Telefon</span>
                    <a href={CLUB.mobileHref}>{CLUB.mobile}</a>
                    <span className="contact__line">
                      Vezetékes, 9–20 óráig: <a href={CLUB.landlineHref}>{CLUB.landline}</a>
                    </span>
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
                    <span className="contact__line">{CLUB.cashier}</span>
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
              <iframe title="A Muskétás Teniszcentrum a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
