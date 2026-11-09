import Image from "next/image";
import { SeasonPrices } from "@/components/a/SeasonPrices";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
import { CLUB, COACHING, COURTS, FACILITY, HOURS, SERVICE, SHOP, STORY, fmt } from "@/lib/site";

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`label${light ? " label--light" : ""}`}>{children}</p>;
}

const STRIP = Array.from({ length: 15 }, (_, i) => `/img/hurozas-${String(i + 1).padStart(2, "0")}.jpg`);

export default function Page() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="hero__kicker">
              {CLUB.district} · {CLUB.founded} óta
            </p>
            <h1 id="hero-title" className="hero__title">
              Klub, húrozás, shop. <em>Egy helyen.</em>
            </h1>
            <p className="hero__lead">
              {FACILITY.intro} A klubházban a Racket Service és Magyarország hivatalos Nike Tennis Shopja.
            </p>
            <div className="btn-row">
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <Icon name="phone" size={17} /> {CLUB.phone}
              </a>
              <a href={CLUB.webshop} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                Webshop <Icon name="arrowUpRight" size={17} />
              </a>
            </div>
            <dl className="hero__facts">
              {FACILITY.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="hero__figure">
            <div className="hero__photo">
              <Image src="/img/palya-bejarat.jpg" alt="Kerti út a klubháztól a salakpályák felé, a fák között" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="hero__shop">
              <Image src="/img/shop.jpg" alt="A Nike Tennis Shop a klubházban: ütők, táskák, ruhák" fill sizes="(max-width: 900px) 40vw, 18vw" />
            </div>
            <span className="hero__dot" aria-hidden="true" />
          </figure>
        </div>
      </section>

      {/* ——— pályabérlés ——— */}
      <section id="palyak" className="band" aria-labelledby="palyak-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Pályabérlés</Label>
              <h2 id="palyak-title" className="title">
                Két salakpálya, <em>télen sátorban.</em>
              </h2>
            </div>
            <p className="intro">{COURTS.booking}</p>
          </div>
          <div className="reveal">
            <SeasonPrices />
          </div>
          <div className="courts">
            <div className="courts__photo reveal">
              <Image src="/img/kert.jpg" alt="A klub kertje napernyőkkel és pavilonnal" fill sizes="(max-width: 900px) 100vw, 40vw" />
              <ul className="courts__amen">
                {FACILITY.amenities.map((a) => (
                  <li key={a}>
                    <Icon name="check" size={16} /> {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="courts__rules reveal">
              <h3 className="subtitle">Házirend</h3>
              <dl className="rules">
                {COURTS.rules.map((r) => (
                  <div key={r.title}>
                    <dt>{r.title}</dt>
                    <dd>{r.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ——— oktatás ——— */}
      <section id="oktatas" className="band band--soft" aria-labelledby="oktatas-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Oktatás</Label>
              <h2 id="oktatas-title" className="title">
                Edző mellett, <em>kicsiknek és nagyoknak.</em>
              </h2>
            </div>
            <p className="intro">{COACHING.kids.text}</p>
          </div>
          <div className="lessons">
            <article className="lesson reveal">
              <p className="lesson__tag">Felnőtteknek</p>
              <h3>{COACHING.adults.title}</h3>
              <p>{COACHING.adults.text}</p>
              <p className="lesson__price">
                <b>{COACHING.adults.price}</b>
                <span>edzői díj</span>
              </p>
            </article>
            <article className="lesson lesson--kids reveal">
              <p className="lesson__tag">Gyerekeknek</p>
              <h3>{COACHING.kids.title}</h3>
              <ul className="lesson__groups">
                {COACHING.kids.groups.map((g) => (
                  <li key={g.name}>
                    <span>
                      <b>{g.name}</b>
                      <small>{g.detail}</small>
                    </span>
                    <strong>{fmt(g.price)} Ft</strong>
                  </li>
                ))}
              </ul>
              <p className="lesson__small">{COACHING.kids.priceNote}</p>
              <ul className="lesson__extras">
                {COACHING.kids.extras.map((x) => (
                  <li key={x}>
                    <Icon name="check" size={16} /> {x}
                  </li>
                ))}
              </ul>
              <p className="lesson__next">
                <Icon name="calendar" size={16} /> {COACHING.kids.next}
              </p>
              <p className="lesson__small">{COACHING.kids.terms}</p>
            </article>
          </div>
        </div>
      </section>

      {/* ——— racket service ——— */}
      <section id="racket-service" className="band dark" aria-labelledby="racket-service-title">
        <div className="container">
          <div className="svc reveal">
            <figure className="svc__photo">
              <Image src="/img/velcz-zsolt.jpg" alt="Velcz Zsolt a húrozógépnél" fill sizes="(max-width: 900px) 100vw, 46vw" />
            </figure>
            <div className="svc__text">
              <Label light>{SERVICE.name}</Label>
              <h2 id="racket-service-title" className="title">
                Húrozás, <em>ahogy a versenyeken.</em>
              </h2>
              <p className="intro">{SERVICE.lead}</p>
              <p className="svc__why">{SERVICE.why}</p>
              <dl className="svc__prices">
                {SERVICE.prices.map((p) => (
                  <div key={p.label}>
                    <dt>{p.label}</dt>
                    <dd>{p.value}</dd>
                  </div>
                ))}
              </dl>
              <ul className="svc__terms">
                {SERVICE.terms.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="svc__services reveal">
            {SERVICE.services.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>

          <div className="steps reveal">
            <div className="steps__head">
              <h3 className="subtitle">Tíz lépés a gépen</h3>
              <p>„{SERVICE.motto}”</p>
            </div>
            <ol className="steps__list">
              {SERVICE.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
          <div className="strip reveal" role="region" aria-label="Húrozás a Match-Point Racket Service-ben, fotósorozat" tabIndex={0}>
            {STRIP.map((src, i) => (
              <div key={src} className="strip__item">
                <Image src={src} alt={i === 0 ? "Húrozás a Babolat gépen, fotósorozat" : ""} fill sizes="260px" />
              </div>
            ))}
          </div>

          <div className="finish reveal">
            <div className="finish__intro">
              <h3 className="subtitle">Stílust is adunk az ütődnek</h3>
              <ul className="finish__list">
                {SERVICE.finish.map((f) => (
                  <li key={f.title} className={f.title === "A PONT" ? "finish__dot" : undefined}>
                    <b>{f.title}</b>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="test">
              <p className="test__label">{SERVICE.test.title}</p>
              <p className="test__text">{SERVICE.test.text}</p>
              <p className="test__how">{SERVICE.test.how}</p>
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <Icon name="phone" size={17} /> {CLUB.phone}
              </a>
            </aside>
          </div>

          <div className="matching reveal">
            <h3 className="subtitle">Ütő „matching” a Head Diagnostic Centerrel</h3>
            <ol>
              {SERVICE.matching.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ——— shop ——— */}
      <section id="shop" className="band" aria-labelledby="shop-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Shop</Label>
              <h2 id="shop-title" className="title">
                Nike és Wilson, <em>a pálya mellett.</em>
              </h2>
            </div>
            <p className="intro">{SHOP.intro}</p>
          </div>
          <div className="shop">
            <div className="shop__photos reveal">
              <div className="shop__photo shop__photo--big">
                <Image src="/img/shop-hurozogepek.jpg" alt="Babolat húrozógépek a Racket Service-ben, mögöttük húrok és gripek" fill sizes="(max-width: 900px) 100vw, 34vw" />
              </div>
              <div className="shop__photo">
                <Image src="/img/shop-utok.jpg" alt="Wilson Blade teniszütők a shopban" fill sizes="(max-width: 900px) 50vw, 17vw" />
              </div>
              <div className="shop__photo">
                <Image src="/img/shop-gripek.jpg" alt="Ütők és gripek a polcon" fill sizes="(max-width: 900px) 50vw, 17vw" />
              </div>
            </div>
            <div className="shop__side reveal">
              <p className="shop__claim">{SHOP.claim}</p>
              <ul className="shop__cats">
                {SHOP.categories.map((c) => (
                  <li key={c.title}>
                    <a href={c.href} target="_blank" rel="noopener noreferrer">
                      {c.title} <Icon name="arrowUpRight" size={16} />
                    </a>
                  </li>
                ))}
              </ul>
              <a href={CLUB.webshop} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
                A webshop megnyitása <Icon name="arrowUpRight" size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— a klub ——— */}
      <section id="klub" className="band band--soft" aria-labelledby="klub-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>A klub</Label>
              <h2 id="klub-title" className="title">
                1996 óta <em>a Marczibányi téren.</em>
              </h2>
            </div>
            <p className="intro">{STORY.intro}</p>
          </div>
          <div className="story">
            <div className="story__left reveal">
              <div className="founders">
                {STORY.founders.map((f) => (
                  <article key={f.name} className="founder">
                    <h3>{f.name}</h3>
                    <p>{f.text}</p>
                  </article>
                ))}
              </div>
              <p className="story__both">{STORY.both}</p>
              <blockquote className="story__quote">
                <p>„{CLUB.quote.text}”</p>
                <cite>{CLUB.quote.by}</cite>
              </blockquote>
              <div className="story__photo">
                <Image src="/img/klubhaz.jpg" alt="A klubház a kertből, napernyőkkel" fill sizes="(max-width: 900px) 100vw, 44vw" />
              </div>
            </div>
            <ol className="timeline reveal">
              {STORY.milestones.map((m) => (
                <li key={m.year}>
                  <b>{m.year}</b>
                  <p>{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <Label>Kapcsolat</Label>
            <h2 id="kapcsolat-title" className="title">
              Marczibányi tér 16., <em>II. kerület.</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Recepció: pálya, oktatás, ütőteszt</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={CLUB.emailHref}>{CLUB.email}</a>
                  <small>
                    vagy <a href={`mailto:${CLUB.emailAlt}`}>{CLUB.emailAlt}</a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Cím</dt>
                <dd>
                  {CLUB.address}
                  <small>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Útvonal a Google Térképen
                    </a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Nyitva (shop)</dt>
                <dd>
                  {HOURS.map((h) => (
                    <span key={h.days} className="visit__hours">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="map">
              <iframe src={CLUB.mapsEmbed} title="A Match-Point Tennis Club a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="visit__form reveal">
            <h3 className="subtitle">Írj nekünk</h3>
            <p>Pálya, oktatás, húrozás, ütőteszt vagy shop: a levél a klubhoz megy.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
