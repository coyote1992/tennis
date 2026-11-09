import Image from "next/image";
import { IconArrow, IconCalendar, IconCheck, IconClock, IconExternal, IconFacebook, IconMail, IconPhone, IconPin } from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import { ACTIVITIES, CASTLE, HOTEL, HOUSE_RULES, PARK_ROUTE, TENNIS, WELLNESS, WELLNESS_DAYS } from "@/lib/site";

/** inside running text: keep "1 500 Ft" and "/ óra" together */
const keepNums = (t: string) => t.replace(/(\d) (?=\d{3}\b)/g, "$1 ").replace(/ (Ft|\/)/g, " $1");
/** keep prices and phone numbers on one line */
const nb = (t: string) => t.replace(/ /g, " ");

const HERO_FACTS = [
  { num: TENNIS.prices[0].price, label: "óránként a salakpálya szállóvendégeknek" },
  { num: "10 ha", label: "park a kastély körül" },
  { num: "42 °C", label: "termálkút adja a kültéri medence vizét" },
];

/** a photo for each wellness feature, in WELLNESS.items order */
const WELLNESS_PHOTOS = [
  { src: "/img/kulteri-medence.jpg", alt: "A kültéri termálmedence napágyakkal és virágokkal" },
  { src: "/img/belteri-medence.jpg", alt: "A beltéri termálmedence nyakzuhannyal" },
  { src: "/img/szauna.jpg", alt: "Szauna fapadokkal" },
  { src: "/img/masszazs.jpg", alt: "Masszázságy gyertyafénynél" },
];

const SIGN_UP: Record<string, { cta: string; note: string }> = {
  vasarnap: { cta: "Érdeklődés", note: "Kérdezz a recepción, vagy írj nekünk." },
  paros: { cta: "Bejelentkezés", note: "Előzetes bejelentkezéssel: hívd a recepciót, vagy írj nekünk." },
};

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">
              {HOTEL.name} {HOTEL.stars} · {HOTEL.town}
            </p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz a kastélyparkban, <em>utána wellness.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Megújult salakos teniszpálya a kastély parkjában, a kültéri termálmedence és a szaunák közelében. Szállóvendégként és külsős vendégként is játszhatsz: időpontot a recepción egyeztethetsz.
              </p>
              <div className="hero__ctas">
                <a href={HOTEL.phoneHref} className="btn btn--accent">
                  <IconPhone /> Hívd a recepciót
                </a>
                <a href="#wellness" className="btn btn--ghost">
                  Wellness nap <IconArrow />
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image src="/img/kastely-szokokut.jpg" alt="A Batthyány Kastély homlokzata a szökőkúttal és a parkkal" fill priority sizes="(max-width: 1296px) 100vw, 1200px" />
            <figcaption className="hero__caption">
              {HOTEL.name}, {HOTEL.town}
            </figcaption>
          </figure>

          <ul className="facts reveal">
            {HERO_FACTS.map((f) => (
              <li key={f.num} className="fact">
                <span className="fact__num">{nb(f.num)}</span>
                <span className="fact__label">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Tenisz ——— */}
      <section id="tenisz" className="section" aria-labelledby="tenisz-title">
        <div className="container">
          <p className="eyebrow reveal">Tenisz</p>
          <h2 id="tenisz-title" className="h2 reveal">
            Salakpálya <em>a kastély parkjában.</em>
          </h2>
          <p className="lead reveal">{TENNIS.intro}</p>

          <div className="court">
            <figure className="court__photo reveal reveal--img">
              <Image src="/img/uto-salak.jpg" alt="Teniszütő és labda a salakpálya alapvonalánál" fill sizes="(max-width: 900px) 100vw, 320px" />
            </figure>

            <div className="court__body">
              <ul className="rates reveal">
                {TENNIS.prices.map((p, i) => (
                  <li key={p.who} className={`rate glass${i === 0 ? " rate--guest" : ""}`}>
                    <span className="rate__who">{p.who}</span>
                    <span className="rate__price">
                      <strong>{nb(p.price)}</strong> {p.unit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="book glass reveal">
                <p className="label">
                  <IconCalendar /> Időpontfoglalás
                </p>
                <p className="book__text">{TENNIS.booking}</p>
                <ul className="checks">
                  <li>
                    <IconCheck />
                    <span>{TENNIS.gear}</span>
                  </li>
                  <li>
                    <IconCheck />
                    <span>A játékidő 55 perc, a maradék 5 perc a pálya lehúzásáé.</span>
                  </li>
                </ul>
                <div className="book__ctas">
                  <a href={HOTEL.phoneHref} className="btn btn--accent">
                    <IconPhone /> {nb(HOTEL.phone)}
                  </a>
                  <a href="#urlap" className="btn btn--ghost">
                    <IconMail /> Írj nekünk
                  </a>
                </div>
                <p className="muted book__alt">
                  Mobil: <a href={HOTEL.mobileHref}>{nb(HOTEL.mobile)}</a> · <a href={HOTEL.emailHref}>{HOTEL.email}</a>
                </p>
              </div>
            </div>
          </div>

          <details className="rules glass reveal">
            <summary>
              <span className="rules__title">Házirend</span>
              <span className="rules__hint">Teniszcipő, 55 perc játék, a pálya lehúzása · {HOUSE_RULES.length} pont</span>
            </summary>
            <ul className="checks rules__list">
              {HOUSE_RULES.map((r) => (
                <li key={r}>
                  <IconCheck />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </details>

          <a href="#wellness" className="bridge glass reveal">
            <span>{TENNIS.reply}</span>
            <span className="bridge__go">
              Wellness napok <IconArrow />
            </span>
          </a>
        </div>
      </section>

      {/* ——— Wellness nap ——— */}
      <section id="wellness" className="section" aria-labelledby="wellness-title">
        <div className="container">
          <p className="eyebrow reveal">Wellness nap</p>
          <h2 id="wellness-title" className="h2 reveal">
            A meccs után <em>egy nap a kastélyban.</em>
          </h2>
          <p className="lead reveal">Vasárnap napijeggyel, vagy kettesben, előzetes bejelentkezéssel: termálmedencék, szaunák és háromfogásos ebéd a kastély éttermében.</p>

          <div className="offers">
            {WELLNESS_DAYS.map((d) => (
              <article key={d.id} className={`offer glass reveal offer--${d.id}`}>
                <h3 className="h3">{d.title}</h3>
                <p className="offer__when">
                  <IconClock /> {d.when}
                </p>
                <ul className="offer__prices">
                  {d.prices.map((p) => (
                    <li key={p.who}>
                      <span>{p.who}</span>
                      <strong>{nb(p.price)}</strong>
                    </li>
                  ))}
                </ul>
                <p className="offer__inc">Benne van</p>
                <ul className="checks">
                  {d.includes.map((x) => (
                    <li key={x}>
                      <IconCheck />
                      <span>{keepNums(x)}</span>
                    </li>
                  ))}
                </ul>
                <div className="offer__foot">
                  <a href={HOTEL.phoneHref} className={`btn ${d.id === "paros" ? "btn--accent" : "btn--ghost"}`}>
                    <IconPhone /> {SIGN_UP[d.id]?.cta ?? "Érdeklődés"}
                  </a>
                  <p className="muted">{SIGN_UP[d.id]?.note}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="spa">
            <div className="spa__head reveal">
              <h3 className="h3">A wellness részleg</h3>
              <p className="muted">{WELLNESS.text}</p>
            </div>
            <div className="spa__grid">
              {WELLNESS.items.map((it, i) => {
                const ph = WELLNESS_PHOTOS[i];
                return (
                  <article key={it.title} className="spa-card glass reveal">
                    {ph && (
                      <figure className="spa-card__img">
                        <Image src={ph.src} alt={ph.alt} fill sizes="(max-width: 900px) 100vw, (max-width: 1296px) 50vw, 600px" />
                      </figure>
                    )}
                    <div className="spa-card__body">
                      <h4 className="h3">{it.title}</h4>
                      <p>{it.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ——— A park ——— */}
      <section id="park" className="section" aria-labelledby="park-title">
        <div className="container">
          <p className="eyebrow reveal">A park</p>
          <h2 id="park-title" className="h2 reveal">
            A pálya után <em>egy csobbanás.</em>
          </h2>
          <p className="lead reveal">
            A teniszpálya, a kültéri termálmedence, a szaunák és a masszázspavilon mind a kastély 10 hektáros parkjában vannak. A számok a szálloda parktérképéről valók.
          </p>

          <div className="route">
            <figure className="route__map glass reveal">
              <a href="/img/park-terkep.jpg" target="_blank" rel="noopener noreferrer" aria-label="A szálloda parktérképe nagyban (új lapon)">
                <Image src="/img/park-terkep.jpg" alt="A szálloda illusztrált parktérképe számozott épületekkel és helyszínekkel" width={1671} height={1114} sizes="(max-width: 900px) 100vw, 640px" />
              </a>
              <figcaption>
                A szálloda parktérképe <IconExternal />
              </figcaption>
            </figure>

            <ol className="route__list reveal">
              {PARK_ROUTE.map((s) => (
                <li key={s.n}>
                  <span className="route__n" aria-label={`${s.n}. a térképen`}>
                    {s.n}
                  </span>
                  <div>
                    <strong>{s.title}</strong>
                    <span>{s.text}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <h3 className="h3 more__title reveal">A parkban és a közelben</h3>
          <ul className="more">
            {ACTIVITIES.map((a) => (
              <li key={a.title} className="more__item glass reveal">
                <strong>{a.title}</strong>
                <span>{keepNums(a.text)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— A kastély ——— */}
      <section id="kastely" className="section" aria-labelledby="kastely-title">
        <div className="container">
          <p className="eyebrow reveal">A kastély</p>
          <h2 id="kastely-title" className="h2 reveal">
            Gótikus alapokon, <em>ma négycsillagos.</em>
          </h2>
          <p className="lead reveal">{CASTLE.intro}</p>

          <div className="castle">
            <div className="history glass reveal">
              <p className="label">A kastély története</p>
              <ol className="history__list">
                {CASTLE.history.map((h) => (
                  <li key={h.year}>
                    <span className="history__year">{h.year}</span>
                    <span>{h.text}</span>
                  </li>
                ))}
              </ol>
            </div>

            <article className="stay glass reveal">
              <figure className="stay__img">
                <Image src="/img/szoba.jpg" alt="Kastélyszoba franciaággyal, csillárral és magas ablakokkal" fill sizes="(max-width: 900px) 100vw, 480px" />
              </figure>
              <div className="stay__body">
                <h3 className="h3">Szobák és lakosztályok</h3>
                <p>{CASTLE.rooms}</p>
                <div className="stay__ctas">
                  <a href={HOTEL.booking} className="btn btn--accent btn--sm" target="_blank" rel="noopener noreferrer">
                    <IconCalendar /> Szobafoglalás
                  </a>
                  <a href={HOTEL.offer} className="btn btn--ghost btn--sm" target="_blank" rel="noopener noreferrer">
                    Ajánlatkérés <IconExternal />
                  </a>
                </div>
                <a href={HOTEL.packages} className="stay__link" target="_blank" rel="noopener noreferrer">
                  Csomagajánlatok a szálloda oldalán <IconArrow />
                </a>
              </div>
            </article>
          </div>

          <article className="dining glass reveal">
            <div className="dining__imgs">
              <figure>
                <Image src="/img/etterem-1.jpg" alt="Előétel: sárgadinnye sonkával és bazsalikommal" fill sizes="(max-width: 900px) 50vw, 280px" />
              </figure>
              <figure>
                <Image src="/img/etterem-2.jpg" alt="Desszert: rétes erdei gyümölcsös öntettel" fill sizes="(max-width: 900px) 50vw, 280px" />
              </figure>
            </div>
            <div className="dining__body">
              <p className="label">Gasztronómia</p>
              <h3 className="h3">A kastély éttermei</h3>
              <p>{CASTLE.dining}</p>
            </div>
          </article>
        </div>
      </section>

      {/* ——— Kapcsolat ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Pálya, wellness nap: <em>a recepción foglalhatsz.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Recepció</span>
                    <a href={HOTEL.phoneHref}>{nb(HOTEL.phone)}</a>
                    <a href={HOTEL.mobileHref} className="contact__line">
                      {nb(HOTEL.mobile)} <span className="contact__hint">mobil</span>
                    </a>
                  </div>
                </li>
                <li>
                  <IconMail />
                  <div>
                    <span className="contact__label">E-mail</span>
                    <a href={HOTEL.emailHref}>{HOTEL.email}</a>
                  </div>
                </li>
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
                    <a href={HOTEL.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {HOTEL.address.replace("u. 24.", "u. 24.")}
                    </a>
                    <span className="contact__name">
                      {HOTEL.name} {HOTEL.stars}
                    </span>
                  </div>
                </li>
                <li>
                  <IconFacebook />
                  <div>
                    <span className="contact__label">Facebook</span>
                    <a href={HOTEL.facebook} target="_blank" rel="noopener noreferrer">
                      Batthyány Kastélyszálló
                    </a>
                  </div>
                </li>
              </ul>
              <div className="visit__actions">
                <a href={HOTEL.phoneHref} className="btn btn--accent">
                  <IconPhone /> Hívás
                </a>
                <a href={HOTEL.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconArrow /> Útvonal
                </a>
              </div>
              <p className="visit__note">
                Szállás:{" "}
                <a href={HOTEL.booking} target="_blank" rel="noopener noreferrer">
                  szobafoglalás
                </a>{" "}
                ·{" "}
                <a href={HOTEL.offer} target="_blank" rel="noopener noreferrer">
                  ajánlatkérés
                </a>
              </p>
            </div>

            <div className="visit__form glass reveal">
              <p className="label">
                <IconMail /> Írj nekünk
              </p>
              <ContactForm />
            </div>
          </div>

          <div className="visit__map glass reveal">
            <iframe title="A Batthyány Kastélyszálló a térképen" src={HOTEL.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
