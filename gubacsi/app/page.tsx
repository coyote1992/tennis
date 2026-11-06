import Image from "next/image";
import Link from "next/link";
import { IconArrow, IconClock, IconPhone, IconPin } from "@/components/icons";
import { CLUB, RECEPTION } from "@/lib/site";

const SERVICES = [
  { title: "Nyáron hat, télen két fedett salakpálya", text: "Télen két sátras, fedett salakpályán játszunk, nyáron mind a hat pálya nyitva." },
  { title: "Falazó és minipálya, ingyen", text: "A falazó és a minipálya használata ingyenes, igény szerint felszerelést is adunk." },
  { title: "Ingyenes parkolás", text: "Ingyenes parkolási lehetőség, a Liszt Ferenc repülőtértől két percre." },
  { title: "Húrozás és sportszer", text: "Húrozási lehetőség és kedvezményes sportfelszerelés-vásárlás." },
  { title: "Házibajnokságok", text: "Házi teniszbajnokságok és sportrendezvények." },
  { title: "Rendezvények", text: "Születésnapok, családi összejövetelek, teniszfesztiválok lebonyolítása." },
];

const PRICES = [
  { what: "Alkalmi pályadíj, hétfőtől péntekig", price: "10 300 Ft" },
  { what: "Alkalmi pályadíj, szombat–vasárnap", price: "6 900 Ft" },
  { what: "10 alkalmas bérlet, hétköznap 10–14 óra", price: "75 000 Ft" },
  { what: "10 alkalmas bérlet, egyéb időpontokban", price: "95 000 Ft" },
];

const RESULTS = [
  { year: "1995", text: "Orange Bowl: döntő" },
  { year: "1998", text: "Európa-bajnokság: 2. hely párosban" },
  { year: "2001", text: "WTA Casablanca: bajnok", highlight: true },
  { year: "2001", text: "Roland Garros: a selejtezőből a legjobb 32 közé, ott Serena Williams állította meg" },
  { year: "2001", text: "WTA Budapest, páros: 2. hely" },
  { year: "2002", text: "WTA Estoril, páros: bajnok", highlight: true },
  { year: "2002", text: "WTA Budapest, páros: 2. hely" },
];

const COACHES = [
  { name: "Gubacsi Zsófi", role: "Klubtulajdonos, vezetőedző", img: "/img/edzo-gubacsi-zsofi.png" },
  { name: "Simara János", role: "Utánpótlásért felelős edző", img: "/img/edzo-simara-janos.png" },
  { name: "Sebestyén Kata", role: "Szakedző · Play & Stay és speciális tenisz", img: "/img/edzo-sebestyen-kata.png", phone: "+36 70 333 0126" },
  { name: "Pacaj Szvetlana", role: "Teniszedző", img: "/img/edzo-pacaj-szvetlana.png", phone: "+36 70 259 8888" },
  { name: "Jancsó Miklós", role: "Profi teniszedző", img: "/img/edzo-jancso-miklos.png", phone: "+36 70 610 0766" },
  { name: "Szendrői Szabina Kata", role: "Teniszedző", img: "/img/edzo-szendroi-szabina.png", phone: "+36 30 273 0746" },
];

const EVENTS = [
  { date: "2025. szept. 5–7.", title: "Kinder Kupa", text: "Teniszverseny, hobbi tenisz, gyerekprogramok és kulturális előadások az egész családnak." },
  { date: "2025. szept. 15–20.", title: "Tábor fogyatékkal élőknek", text: "Kulturális és sporttábor az elfogadás és az esélyegyenlőség jegyében, Valkusz Milán részvételével." },
  { date: "2025. dec. 13.", title: "Évzáró Gála", text: "Bábel Klára hárfaművész és Kőhalmi Ferenc bűvészmester estje, kézműves és családi programokkal." },
  { date: "2026. máj. 25–30.", title: "Kulturális napok és tábor", text: "Hat nap kultúra és sport, kiemelt figyelemmel a fogyatékossággal élők részvételére." },
  { date: "2026. jún. 22–26.", title: "Művészeti és kulturális hét", text: "Könyvbemutatók, sporttörténeti előadás, mesekönyv-bemutató és játékos sportprogram." },
];

const APARTMENT = [
  "Saját fürdőszoba minden szobához",
  "Igény szerint kis hűtő és mikrohullámú sütő",
  "Heti egyszeri takarítás, ha kéred",
  "Ingyenes, gyors wifi",
  "Kamerával őrzött parkolás az udvarban",
  "A rezsit a bérleti díj tartalmazza",
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Vecsés · 2 percre a Liszt Ferenc repülőtértől</p>
            <h1 id="hero-title" className="h1 reveal">
              Családias klub, <em>profi hozzáállás.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Nyáron hat, télen két fedett salakpálya, csendes környezetben. Gyerekeket és felnőtteket tanítunk kezdőtől haladóig, a klubot
                pedig a WTA-tornagyőztes Gubacsi Zsófi vezeti.
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
              src="/img/tabor-csoport.jpg"
              alt="Gyerekek és edzők a Gubacsi Zsófi Tenisz Klub salakpályáján, nyári táborban"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 40%" }}
            />
            <figcaption className="hero__caption">Nyári tábor a klubban</figcaption>
          </figure>
        </div>
      </section>

      {/* ——— Courts & services ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák és szolgáltatások</p>
          <h2 id="palyak-title" className="h2 reveal">
            Hat salakpálya, <em>télen kettő sátorban.</em>
          </h2>
          <p className="lead reveal courts__lead">
            Könnyen megközelíthető helyen, a repülőtér mellett, mégis csendes, családias környezetben. Minden, ami egy jó edzéshez vagy
            meccshez kell, egy helyen.
          </p>
          <ul className="services">
            {SERVICES.map((s, i) => (
              <li className="service reveal" key={s.title}>
                <span className="service__num">{String(i + 1).padStart(2, "0")}</span>
                <p className="service__title">{s.title}</p>
                <p className="service__text">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Booking & prices ——— */}
      <section id="arak" className="section booking" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Foglalás és árak</p>
          <h2 id="arak-title" className="h2 reveal">
            Szabad pálya <em>új vendégeknek is.</em>
          </h2>

          <div className="booking__grid">
            <div>
              <p className="lead reveal">
                Nyáron és télen is vannak szezonbérletes vendégeink, de a fennmaradó szabad időpontokat bárki foglalhatja: alkalmi vendég
                vagy új játékos is.
              </p>
              <div className="pricing reveal">
                <div className="pricing__head">
                  <h3 className="h3">
                    Téli árak <em>2026/27</em>
                  </h3>
                </div>
                <ul className="feelist glass">
                  {PRICES.map((p) => (
                    <li key={p.what}>
                      <span className="feelist__what">{p.what}</span>
                      <span className="feelist__price">{p.price}</span>
                    </li>
                  ))}
                </ul>
                <p className="pricing__foot">
                  Fizetés a helyszínen készpénzzel vagy kártyával, illetve átutalással. Az alkalmi bérlők a pályára menet előtt fizessék ki a
                  lefoglalt időt a recepción.
                </p>
              </div>
            </div>

            <aside className="callcard glass reveal" aria-label="Online foglalás">
              <p className="callcard__kicker">Online foglalás</p>
              <p className="callcard__site">e-foglaló</p>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent btn--block">
                Pályát foglalok <IconArrow />
              </a>
              <a href={CLUB.phoneHref} className="btn btn--ghost btn--block">
                <IconPhone /> {CLUB.phone}
              </a>
              <div className="callcard__hours">
                <p className="callcard__hours-title">Recepció</p>
                {RECEPTION.map((h) => (
                  <p key={h.days}>
                    <span>{h.days}</span>
                    <strong>{h.time}</strong>
                  </p>
                ))}
              </div>
            </aside>
          </div>

          <div className="know reveal">
            <h3 className="know__title">Szezonbérlet: jó tudni</h3>
            <ul className="know__list">
              <li>A szezonbérlet előre meghatározott napra, időpontra és pályára szól.</li>
              <li>A lemondott szezonbérletes időpont hétvégén, a szabad pályák függvényében, a nyári szezonig lejátszható.</li>
              <li>Jóváírásra nincs lehetőség.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Gubacsi Zsófi ——— */}
      <section id="gubacsi-zsofi" className="section legend" aria-labelledby="gubacsi-zsofi-title">
        <div className="container">
          <div className="legend__grid">
            <div className="legend__copy">
              <p className="eyebrow reveal">A klub vezetője</p>
              <h2 id="gubacsi-zsofi-title" className="h2 h2--xl reveal">
                Gubacsi Zsófi, <em className="nobr">WTA-tornagyőztes.</em>
              </h2>
              <p className="lead reveal">
                Budapesten született 1981-ben. Pályafutása során egy egyéni és egy páros WTA-tornát nyert, és hat ITF-tornán győzött. Ma a
                klubját és sportegyesületét vezeti, ahol gyerekekkel és felnőttekkel egyaránt foglalkozik.
              </p>
              <ol className="results reveal">
                {RESULTS.map((r, i) => (
                  <li key={i} className={r.highlight ? "is-win" : undefined}>
                    <span className="results__year">{r.year}</span>
                    <span className="results__text">{r.text}</span>
                  </li>
                ))}
              </ol>
              <p className="itf reveal">
                <strong>Hat ITF-tornagyőzelem:</strong> Edinburgh, Rimini, Bukarest, Montevideo, Los Mochis, Culiacán.
              </p>
            </div>
            <figure className="legend__photo reveal" aria-hidden="true">
              <Image src="/img/gubacsi-zsofi-jatekos.png" alt="" width={675} height={990} sizes="(max-width: 900px) 70vw, 24vw" />
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Coaching ——— */}
      <section id="edzes" className="section coaching" aria-labelledby="edzes-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Edzés</p>
              <h2 id="edzes-title" className="h2 reveal">
                Kezdőtől a haladóig, <em>minden szinten.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Tanfolyamok és csoportos foglalkozások, felnőttoktatás és magánórák. Gyerekeknek Play &amp; Stay, és speciális tenisz is, a
              fogyatékossággal élő játékosoknak.
            </p>
          </div>

          <ul className="coaches">
            {COACHES.map((c) => (
              <li className="coach reveal" key={c.name}>
                <Image src={c.img} alt={c.name} width={120} height={120} className="coach__img" />
                <p className="coach__name">{c.name}</p>
                <p className="coach__role">{c.role}</p>
                {c.phone && (
                  <a className="coach__phone" href={`tel:${c.phone.replace(/\s/g, "")}`}>
                    {c.phone}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="camp glass reveal">
            <div className="camp__body">
              <p className="camp__kicker">Nyári tenisztábor</p>
              <h3 className="camp__title">Napi négy óra tenisz, egy héten át.</h3>
              <p className="camp__text">
                Erőnléti edzések, versenyek, játékok és napi háromszori étkezés a klub pályáin, a Revolution Tennis Hungary szervezésében.
              </p>
              <p className="camp__note">2026 nyarán: három turnus júniusban és júliusban, 62 000 Ft / hét. A következő nyárról érdeklődj!</p>
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <IconPhone /> {CLUB.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Community ——— */}
      <section id="kozosseg" className="section community" aria-labelledby="kozosseg-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Közösség</p>
              <h2 id="kozosseg-title" className="h2 reveal">
                Tenisz, kultúra, <em>mindenkinek.</em>
              </h2>
            </div>
            <p className="lead reveal">
              A klubban a sport mellett kulturális és közösségi programok is vannak, és fogyatékossággal élő játékosoknak is szerveztünk tábort. 2025 márciusában edzői workshop is volt nálunk a fogyatékossággal élő teniszezők edzéséről.
            </p>
          </div>

          <ol className="events">
            {EVENTS.map((e) => (
              <li className="event glass reveal" key={e.title}>
                <p className="event__date">{e.date}</p>
                <p className="event__title">{e.title}</p>
                <p className="event__text">{e.text}</p>
              </li>
            ))}
          </ol>

          <div className="grant reveal">
            <p className="grant__title">Pályázati fejlesztés</p>
            <p className="grant__text">
              A Bethlen Gábor Alapkezelő 2024. évi támogatásából defibrillátort (Medtronic LIFEPAK 500) helyeztünk ki, új sporteszközöket
              vettünk, és 0,2 mm-es salakkal felújítottuk a pályákat.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Apartment ——— */}
      <section id="apartman" className="section apartment" aria-labelledby="apartman-title">
        <div className="container">
          <div className="apartment__grid">
            <div>
              <p className="eyebrow reveal">Tenisz apartman</p>
              <h2 id="apartman-title" className="h2 reveal">
                Apartmanszobák, <em>hosszú távra.</em>
              </h2>
              <p className="lead reveal">A Liszt Ferenc repülőtérhez közel apartmanszobák hosszú távra kiadók.</p>
              <ul className="ticks reveal">
                {APARTMENT.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <a href={CLUB.phoneHref} className="btn btn--ghost apartment__cta reveal">
                <IconPhone /> Érdeklődés: {CLUB.phone}
              </a>
            </div>
            <div className="apartment__photos">
              <figure className="apartment__photo apartment__photo--wide reveal reveal--img">
                <Image src="/img/apartman-haz.jpg" alt="Az apartmanház udvara virágokkal és fenyőkkel" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              </figure>
              <figure className="apartment__photo reveal reveal--img">
                <Image src="/img/apartman-szoba.jpg" alt="Apartmanszoba franciaággyal" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
              </figure>
              <figure className="apartment__photo reveal reveal--img">
                <Image src="/img/apartman-furdo.jpg" alt="Az apartmanszoba saját fürdőszobája" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
              </figure>
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
              Üllői út 841. <em>Várunk a pályán.</em>
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
                    <span className="contact__line">2 percre a Liszt Ferenc repülőtértől</span>
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
                  <IconClock />
                  <div>
                    <span className="contact__label">Recepció</span>
                    {RECEPTION.map((h) => (
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
              <iframe title="A Gubacsi Zsófi Tenisz Klub a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
