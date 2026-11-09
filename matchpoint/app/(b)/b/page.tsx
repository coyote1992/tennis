import Image from "next/image";
import { IconArrow, IconCalendar, IconCheck, IconClock, IconExternal, IconMail, IconPhone, IconPin, IconUsers } from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import { CLUB, COACHING, COURTS, FACILITY, HOURS, SERVICE, SHOP, STORY, fmt } from "@/lib/site";

/** keep prices, times and phone numbers on one line */
const nb = (t: string) => t.replace(/ /g, " ");
const ft = (n: number) => `${fmt(n)} Ft`;

/** three court rules worth knowing before the first booking; the rest fold out */
const KEY_RULES = ["Játékidő", "Foglalás", "Lemondás"];

/** the stringing sequence from the old site's gallery (not mapped onto the steps one by one) */
const STRINGING = Array.from({ length: 15 }, (_, i) => `/img/hurozas-${String(i + 1).padStart(2, "0")}.jpg`);

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Tennis Club &amp; Shop · Marczibányi tér</p>
            <h1 id="hero-title" className="h1 reveal">
              Két salakpálya és egy teniszbolt <em>a Marczibányi téren.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                {FACILITY.intro} A klubházban Magyarország hivatalos Nike Tennis Shopja és a Match-Point Racket Service.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> {nb(CLUB.phone)}
                </a>
                <a href="#palyak" className="btn btn--ghost">
                  Pályaárak <IconArrow />
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image src="/img/klubhaz.jpg" alt="A Match-Point klubháza a kertben, napernyőkkel, mögötte a pályák szélfogó hálója" fill priority sizes="(max-width: 1296px) 100vw, 1200px" />
            <figcaption className="hero__caption">A klubház és a kert</figcaption>
          </figure>

          <ul className="facts reveal">
            {FACILITY.facts.map((f) => (
              <li key={f.label} className="fact">
                <span className="fact__num">{f.value}</span>
                <span className="fact__label">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Pályabérlés ——— */}
      <section id="palyak" className="section" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályabérlés</p>
          <h2 id="palyak-title" className="h2 reveal">
            Salakon nyáron, <em>sátor alatt télen.</em>
          </h2>
          <p className="lead reveal">{COURTS.booking}</p>

          <ul className="chips amenities reveal" aria-label="A klubban">
            {FACILITY.amenities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>

          <div className="notice glass reveal">
            <p className="notice__text">
              <IconCalendar /> <span>{COURTS.current} Alább a legutóbb közzétett szezonok díjai.</span>
            </p>
            <a href={CLUB.phoneHref} className="btn btn--accent btn--sm">
              <IconPhone /> {nb(CLUB.phone)}
            </a>
          </div>

          <div className="seasons">
            {COURTS.seasons.map((s) => (
              <article key={s.id} className={`season season--${s.id} glass reveal`}>
                <header className="season__head">
                  <h3 className="h3">{s.title}</h3>
                  <p className="season__dates">{s.dates}</p>
                  <p className="season__note">{s.note}</p>
                </header>
                <table className="rates">
                  <caption className="sr-only">
                    {s.title} pályadíjai, {s.dates}
                  </caption>
                  <tbody>
                    <tr className="rates__group">
                      <th colSpan={2} scope="colgroup">
                        Hétköznap <span>(hétfő–péntek)</span>
                      </th>
                    </tr>
                    {s.weekday.map((r) => (
                      <tr key={`wd-${r.time}`}>
                        <th scope="row">{nb(r.time)}</th>
                        <td>
                          <strong>{ft(r.price)}</strong>/óra
                        </td>
                      </tr>
                    ))}
                    <tr className="rates__group">
                      <th colSpan={2} scope="colgroup">
                        Hétvégén <span>(szombat–vasárnap)</span>
                      </th>
                    </tr>
                    {s.weekend.map((r) => (
                      <tr key={`we-${r.time}`}>
                        <th scope="row">{nb(r.time)}</th>
                        <td>
                          <strong>{ft(r.price)}</strong>/óra
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </article>
            ))}
          </div>

          <figure className="strip reveal reveal--img">
            <Image src="/img/palya-bejarat.jpg" alt="Kerti út a pályák felé, a szélfogó háló mögött a salakkal" fill sizes="(max-width: 900px) 100vw, 860px" />
            <figcaption className="hero__caption">A kertből a pályákra</figcaption>
          </figure>

          <ul className="keyrules">
            {COURTS.rules
              .filter((r) => KEY_RULES.includes(r.title))
              .map((r) => (
                <li key={r.title} className="keyrule glass reveal">
                  <strong>{r.title}</strong>
                  <span>{r.text}</span>
                </li>
              ))}
          </ul>

          <details className="rules glass reveal">
            <summary>
              <span className="rules__title">A pálya házirendje</span>
              <span className="rules__hint">{COURTS.rules.length} pont</span>
            </summary>
            <ol className="rulelist rulelist--numbered">
              {COURTS.rules.map((r) => (
                <li key={r.title}>
                  <strong>{r.title}</strong>
                  <span>{r.text}</span>
                </li>
              ))}
            </ol>
          </details>
        </div>
      </section>

      {/* ——— Oktatás ——— */}
      <section id="oktatas" className="section" aria-labelledby="oktatas-title">
        <div className="container">
          <p className="eyebrow reveal">Oktatás</p>
          <h2 id="oktatas-title" className="h2 reveal">
            Felnőttnek egyéni óra, <em>gyereknek csoport.</em>
          </h2>
          <p className="lead reveal">{COACHING.kids.text}</p>

          <div className="lessons">
            <article className="lesson glass reveal">
              <p className="label">
                <IconUsers /> Felnőtteknek
              </p>
              <h3 className="h3">{COACHING.adults.title}</h3>
              <p className="lesson__text">{COACHING.adults.text}</p>
              <p className="lesson__price">
                <strong>{nb(COACHING.adults.price.replace(" Ft/óra", ""))}</strong> Ft/óra
              </p>
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <IconPhone /> Regisztráció a recepción
              </a>
            </article>

            <article className="lesson lesson--kids glass reveal">
              <p className="label">
                <IconCalendar /> Gyerekeknek
              </p>
              <h3 className="h3">{COACHING.kids.title}</h3>
              <ul className="groups">
                {COACHING.kids.groups.map((g) => (
                  <li key={g.name} className="group">
                    <span className="group__name">{g.name}</span>
                    <span className="group__detail">{g.detail}</span>
                    <strong className="group__price">{ft(g.price)}</strong>
                  </li>
                ))}
              </ul>
              <p className="muted">{COACHING.kids.priceNote}</p>
              <p className="lesson__next">
                <IconClock /> <span>{COACHING.kids.next}</span>
              </p>
              <p className="muted lesson__terms">{COACHING.kids.terms}</p>
              <ul className="checks">
                {COACHING.kids.extras.map((x) => (
                  <li key={x}>
                    <IconCheck />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ——— Racket Service ——— */}
      <section id="racket-service" className="section" aria-labelledby="racket-service-title">
        <div className="container">
          <p className="eyebrow reveal">{SERVICE.name}</p>
          <h2 id="racket-service-title" className="h2 reveal">
            Húrozás, grip, diagnosztika: <em>egy kézben.</em>
          </h2>
          <p className="lead reveal">{SERVICE.lead}</p>

          <div className="stringer">
            <figure className="stringer__photo reveal reveal--img">
              <Image src="/img/velcz-zsolt.jpg" alt="Velcz Zsolt a húrozógépnél a Match-Point Racket Service-ben" fill sizes="(max-width: 900px) 100vw, 520px" />
              <figcaption className="hero__caption">Velcz Zsolt</figcaption>
            </figure>
            <article className="test glass reveal">
              <p className="label">Ütőteszt</p>
              <h3 className="h3">{SERVICE.test.title}</h3>
              <p>{SERVICE.test.text}</p>
              <p className="test__how">
                <IconPhone /> <span>{SERVICE.test.how}</span>
              </p>
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <IconPhone /> {nb(CLUB.phone)}
              </a>
            </article>
          </div>

          <p className="why reveal">{SERVICE.why}</p>

          <ul className="services">
            {SERVICE.services.map((s) => (
              <li key={s.title} className="service glass reveal">
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>

          <div className="svc-info">
            <article className="price-card glass reveal">
              <p className="label">
                <IconClock /> Árak és határidők
              </p>
              <ul className="svc-prices">
                {SERVICE.prices.map((p) => (
                  <li key={p.label}>
                    <span>{p.label}</span>
                    <strong>{nb(p.value)}</strong>
                  </li>
                ))}
              </ul>
              <ul className="checks">
                {SERVICE.terms.map((t) => (
                  <li key={t}>
                    <IconCheck />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="matching glass reveal">
              <p className="label">Ütő „matching”</p>
              <h3 className="h3">Head Diagnostic Centerrel</h3>
              <p className="muted">Súly, súlypont és lendítési súly alapján, két esetben:</p>
              <ol className="matching__list">
                {SERVICE.matching.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ol>
            </article>
          </div>

          <div className="craft glass reveal">
            <div className="craft__head">
              <p className="label">A pontos munka lépései</p>
              <p className="craft__motto">„{SERVICE.motto}”</p>
            </div>
            <figure className="craft__photo">
              <Image src="/img/shop-hurozogepek.jpg" alt="A Babolat húrozógépek a műhelyben, mögöttük húrok és gripek" fill sizes="(max-width: 900px) 100vw, 320px" />
            </figure>
            <ol className="craft__steps">
              {SERVICE.steps.map((s, i) => (
                <li key={s}>
                  <span className="craft__n">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="film reveal" role="region" aria-label="Húrozás a műhelyben, képsor" tabIndex={0}>
            <ul className="film__track">
              {STRINGING.map((src, i) => (
                <li key={src} className="film__frame">
                  <Image src={src} alt={`Húrozás a Match-Point Racket Service-ben, ${i + 1}. kép`} fill sizes="260px" />
                </li>
              ))}
            </ul>
          </div>

          <p className="film__hint">
            <IconArrow /> Húzd oldalra: {STRINGING.length} kép a műhelyből
          </p>

          <div className="finish">
            <p className="finish__title reveal">Stílust adunk az ütődnek</p>
            <ul className="finish__list">
              {SERVICE.finish.map((f) => (
                <li key={f.title} className={`finish__item glass reveal${f.title === "A PONT" ? " finish__item--dot" : ""}`}>
                  <strong>{f.title}</strong>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Shop ——— */}
      <section id="shop" className="section" aria-labelledby="shop-title">
        <div className="container">
          <p className="eyebrow reveal">{SHOP.claim}</p>
          <h2 id="shop-title" className="h2 reveal">
            Nike és Wilson <em>a klubházban.</em>
          </h2>
          <p className="lead reveal">{SHOP.intro}</p>

          <div className="shop">
            <figure className="shop__main reveal reveal--img">
              <Image src="/img/shop.jpg" alt="A Match-Point shop: Wilson ütők és táskák a falon, Nike ruhák az állványokon" fill sizes="(max-width: 900px) 100vw, 600px" />
              <figcaption className="hero__caption">A shop a klubházban</figcaption>
            </figure>
            <figure className="shop__side reveal reveal--img">
              <Image src="/img/shop-utok.jpg" alt="Wilson Blade ütők a shop polcán" fill sizes="(max-width: 900px) 50vw, 300px" />
            </figure>
            <figure className="shop__side reveal reveal--img">
              <Image src="/img/shop-gripek.jpg" alt="Ütők és gripek a shopban" fill sizes="(max-width: 900px) 50vw, 300px" />
            </figure>
          </div>

          <ul className="cats">
            {SHOP.categories.map((c) => (
              <li key={c.title} className="reveal">
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="cat glass">
                  <span>{c.title}</span>
                  <IconExternal />
                </a>
              </li>
            ))}
          </ul>

          <div className="shop__cta reveal">
            <a href={CLUB.webshop} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
              Irány a webshop <IconExternal />
            </a>
            <p className="muted">A webshop a matchpoint.hu-n, új lapon nyílik.</p>
          </div>
        </div>
      </section>

      {/* ——— A klub ——— */}
      <section id="klub" className="section" aria-labelledby="klub-title">
        <div className="container">
          <p className="eyebrow reveal">A klub</p>
          <h2 id="klub-title" className="h2 reveal">
            {CLUB.founded} óta <em>a Marczibányi téren.</em>
          </h2>
          <p className="lead reveal">{STORY.intro}</p>

          <blockquote className="motto reveal">
            <p>{CLUB.quote.text}</p>
            <cite>{CLUB.quote.by}</cite>
          </blockquote>

          <div className="story">
            <div className="founders">
              {STORY.founders.map((f) => (
                <article key={f.name} className="founder glass reveal">
                  <h3 className="h3">{f.name}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
              <p className="founders__both reveal">{STORY.both}</p>
            </div>
            <figure className="story__photo reveal reveal--img">
              <Image src="/img/kert.jpg" alt="A klub kertje napernyőkkel és pavilonnal" fill sizes="(max-width: 900px) 100vw, 480px" />
              <figcaption className="hero__caption">A kerthelyiség</figcaption>
            </figure>
          </div>

          <ol className="timeline glass reveal">
            {STORY.milestones.map((m) => (
              <li key={m.year}>
                <span className="timeline__year">{m.year}</span>
                <span className="timeline__text">{m.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Kapcsolat ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Pálya, edzés, húrozás: <em>hívd a recepciót.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Recepció</span>
                    <a href={CLUB.phoneHref}>{nb(CLUB.phone)}</a>
                    <span className="contact__name">Pályafoglalás, oktatás, húrozás, ütőteszt</span>
                  </div>
                </li>
                <li>
                  <IconMail />
                  <div>
                    <span className="contact__label">E-mail</span>
                    <a href={CLUB.emailHref}>{CLUB.email}</a>
                    <a href={`mailto:${CLUB.emailAlt}`} className="contact__alt">
                      {CLUB.emailAlt}
                    </a>
                  </div>
                </li>
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address.replace(/ (\d+\.)$/, " $1")}
                    </a>
                    <span className="contact__name">{CLUB.district}</span>
                  </div>
                </li>
                <li>
                  <IconClock />
                  <div>
                    <span className="contact__label">Nyitva (shop)</span>
                    {HOURS.map((h) => (
                      <span key={h.days} className="contact__line">
                        {h.days} <strong>{nb(h.time)}</strong>
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
                  <IconArrow /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__form glass reveal">
              <p className="label">
                <IconMail /> Írj nekünk
              </p>
              <ContactForm />
            </div>
          </div>

          <div className="visit__map glass reveal">
            <iframe title="A Match-Point Tennis Club a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
