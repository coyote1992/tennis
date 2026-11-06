import Image from "next/image";
import { IconArrow, IconMail, IconPhone, IconPin } from "@/components/icons";
import { CLUB, PRICES } from "@/lib/site";

const BOOKING = [
  { title: "Online foglalás", text: "Pályát csak online lehet foglalni, telefonon nem." },
  { title: "Online fizetés", text: "A foglalás az online fizetéssel válik véglegessé, ez biztosítja számodra az időpontot." },
  { title: "Módosítás telefonon", text: "A kifizetett foglalás nem mondható le; időpont-módosításért hívd a kollégákat." },
];

const RULES = [
  "A pályát mindenki saját felelősségére használja.",
  "Teniszcipő (sima talpú sportcipő) használata kötelező.",
  "Ha a pályán elhelyezett tárgyakban kár keletkezik, kérjük, jelezd a recepción.",
  "Üdítő és szeszes ital fogyasztható, ha a pályát rendezett állapotban hagyod el.",
  "Játék után a pályát az ott elhelyezett kefével húzd le.",
];

const PLAYTIME = [
  { booked: "1 óra", play: "55 perc" },
  { booked: "1,5 óra", play: "1 óra 25 perc" },
  { booked: "2 óra", play: "1 óra 55 perc" },
];

const STAY = ["Tüskevár Étterem és terasz", "Bíbic Hotel", "Bowling és biliárd", "Bérelhető filagóriák", "Horgásztó"];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Tüskevár · Nyíregyháza</p>
            <h1 id="hero-title" className="h1 reveal">
              Családias klub <em>a tóparton.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Két kültéri és egy fedett salakpálya, egész évben. Pályáinkon elsősorban gyerekeket tanítunk, a szabad időpontokban
                pedig bárkit szívesen látunk: a környékbelieket és a Bíbic Hotel vendégeit is.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Időpontfoglalás <IconArrow />
                </a>
                <a href="#gyerekek" className="btn btn--ghost">
                  Gyerekeknek
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/legifoto.jpg"
              alt="Légifotó a Tüskevár teniszpályájáról, fák és zöld növényzet között"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 45%" }}
            />
            <figcaption className="hero__caption">A Tüskevár teniszpályái felülről</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Röviden">
            <li className="fact">
              <span className="fact__num">3</span>
              <span className="fact__label">salakpálya: 2 kültéri, 1 fedett</span>
            </li>
            <li className="fact">
              <span className="fact__num">Egész évben</span>
              <span className="fact__label">játszhatsz, időjárástól függetlenül</span>
            </li>
            <li className="fact">
              <span className="fact__num">3 000 Ft</span>
              <span className="fact__label">óradíjtól, online foglalással</span>
            </li>
            <li className="fact">
              <span className="fact__num">7–22</span>
              <span className="fact__label">foglalható pályaidő</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— Children ——— */}
      <section id="gyerekek" className="section kids" aria-labelledby="gyerekek-title">
        <div className="container">
          <p className="eyebrow reveal">Gyerekeknek</p>
          <h2 id="gyerekek-title" className="h2 reveal">
            A klub szíve: <em>a gyerekek.</em>
          </h2>
          <p className="lead reveal">
            Kis létszámú, családias közösség vagyunk. Pályáinkat elsősorban gyerekek oktatására és edzéseire tartjuk fenn, és mindenkit
            várunk a kezdőktől a lelkes amatőrökig.
          </p>
          <a href={CLUB.contact.href} className="link-arrow reveal">
            Kérdésekkel: {CLUB.contact.name}, {CLUB.contact.phone} <IconArrow />
          </a>

          <div className="kids__grid">
            <figure className="kids__photo kids__photo--tall reveal reveal--img">
              <Image src="/img/gyerek-portre.jpg" alt="Kislány teniszütővel és sporttáskával a pálya mellett" fill sizes="(max-width: 900px) 50vw, 22vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="kids__photo reveal reveal--img">
              <Image src="/img/gyerek-jatek.jpg" alt="Kislány ütésre készül a salakpályán" fill sizes="(max-width: 900px) 50vw, 30vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="kids__photo reveal reveal--img">
              <Image src="/img/gyerekek-palyan.jpg" alt="Gyerekek játszanak a salakpályán" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Court rental ——— */}
      <section id="arak" className="section rental" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályabérlés</p>
          <h2 id="arak-title" className="h2 reveal">
            Foglalj online, <em>játssz egész évben.</em>
          </h2>
          <p className="lead reveal">
            A szabad időpontokban bárki bérelhet pályát. A fedett salakpálya télen is várja a játékosokat.
          </p>

          <div className="rates reveal">
            {PRICES.map((p) => (
              <div className="rate glass" key={p.court}>
                <p className="rate__court">{p.court}</p>
                <p className="rate__note">{p.note}</p>
                <ul className="rate__rows">
                  {p.rows.map((r) => (
                    <li key={r.when}>
                      <span>{r.when}</span>
                      <strong>{r.price}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <ol className="steps">
            {BOOKING.map((s, i) => (
              <li className="step reveal" key={s.title}>
                <span className="step__num">{i + 1}</span>
                <h3 className="h3">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="rental__actions reveal">
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
              Időpontfoglalás <IconArrow />
            </a>
            <p>
              Szabad időpontokról és további kérdésekről: {CLUB.contact.name},{" "}
              <a href={CLUB.contact.href} className="nobr">
                {CLUB.contact.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ——— The Tüskevár ——— */}
      <section id="tuskevar" className="section place" aria-labelledby="tuskevar-title">
        <div className="container">
          <p className="eyebrow reveal">A Tüskevár</p>
          <h2 id="tuskevar-title" className="h2 h2--xl reveal">
            Játék után <em>a teraszon.</em>
          </h2>
          <p className="lead reveal">
            A pályák a Tüskevár festői, tóparti környezetében vannak. Játék után a Tüskevár Étterem teraszán frissítő italokkal és
            finom ételekkel várunk, így a sportot egy jó vacsorával vagy baráti beszélgetéssel zárhatod.
          </p>

          <div className="stay reveal">
            <p className="stay__title">Ha maradnál, a Tüskevárban</p>
            <ul>
              {STAY.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="place__photos">
            <figure className="place__photo place__photo--wide reveal reveal--img">
              <Image src="/img/kulteri-palyak.jpg" alt="A két kültéri salakpálya napsütésben, nyárfákkal a háttérben" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="place__photo reveal reveal--img">
              <Image src="/img/fasor.jpg" alt="Fasor a Tüskevár területén" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="place__photo reveal reveal--img">
              <Image src="/img/hotel-bibic.jpg" alt="Hotel Bíbic felirat a pálya kerítésén, teniszütővel a salakon" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>
        </div>
      </section>

      {/* ——— House rules ——— */}
      <section id="hazirend" className="section rules" aria-labelledby="hazirend-title">
        <div className="container">
          <div className="rules__head">
            <p className="eyebrow reveal">Házirend</p>
            <h2 id="hazirend-title" className="h2 reveal">
              Úgy hagyd el a pályát, <em>ahogy átvetted.</em>
            </h2>
          </div>

          <div className="rules__grid">
            <div className="playtime glass reveal">
              <p className="playtime__title">Játékidő</p>
              <ul>
                {PLAYTIME.map((p) => (
                  <li key={p.booked}>
                    <span>{p.booked} foglalás</span>
                    <strong>{p.play} játék</strong>
                  </li>
                ))}
              </ul>
              <p className="playtime__note">Az utolsó 5 perc arra való, hogy a pályát úgy hagyd el, ahogy átvetted, az utánad következők miatt.</p>
            </div>
            <ul className="rules__list reveal">
              {RULES.map((r) => (
                <li key={r}>{r}</li>
              ))}
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
              Jázmin köz 26. <em>Várunk a pályán.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Teniszpályák, szabad időpontok</span>
                    <a href={CLUB.contact.href}>{CLUB.contact.phone}</a>
                    <span className="contact__line">{CLUB.contact.name}</span>
                  </div>
                </li>
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address}
                    </a>
                    <span className="contact__line">Tüskevár · Bíbic Hotel</span>
                  </div>
                </li>
                <li>
                  <IconMail />
                  <div>
                    <span className="contact__label">Tüskevár recepció</span>
                    <a href={CLUB.emailHref}>{CLUB.email}</a>
                    <span className="contact__line">
                      <a href={CLUB.hotelPhoneHref}>{CLUB.hotelPhone}</a> · <a href={CLUB.hotelMobileHref}>{CLUB.hotelMobile}</a>
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
              <iframe title="A Tüskevár teniszpályái a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
