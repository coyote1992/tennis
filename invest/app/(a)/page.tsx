import Image from "next/image";
import { HallPrices } from "@/components/a/HallPrices";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
import { BOOKING, CLUB, GUESTHOUSE, HALL, INTRO, PACKAGES, RULES, SQUASH, fmt } from "@/lib/site";

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`label${light ? " label--light" : ""}`}>{children}</p>;
}

export default function Page() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="hero__kicker">{CLUB.tagline} · Eger</p>
            <h1 id="hero-title" className="hero__title">
              Tenisz, fallabda, szállás. <em>Egy helyen.</em>
            </h1>
            <p className="hero__lead">{INTRO.text}</p>
            <div className="btn-row">
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <Icon name="phone" size={17} /> Pályafoglalás: {CLUB.phone}
              </a>
              <a href="#vendeghaz" className="btn btn--ghost">
                Szállás a vendégházban
              </a>
            </div>
          </div>
          <figure className="hero__figure">
            <div className="hero__photo">
              <Image src="/img/csarnok.jpg" alt="A fedett teniszcsarnok két kék pályája az ívelt tető alatt" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
            </div>
            <div className="hero__clay">
              <Image src="/img/salakpalyak.jpg" alt="A szabadtéri salakos pályák a teraszról" fill sizes="(max-width: 900px) 46vw, 22vw" />
            </div>
            <Image src="/img/invest-logo.png" alt="" width={512} height={512} className="hero__logo" sizes="104px" />
          </figure>
        </div>
        <div className="container">
          <dl className="hero__facts">
            {INTRO.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ——— tenisz ——— */}
      <section id="tenisz" className="band" aria-labelledby="tenisz-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Tenisz</Label>
              <h2 id="tenisz-title" className="title">
                Hét salakpálya, <em>és egy csarnok télre.</em>
              </h2>
            </div>
            <p className="intro">
              {BOOKING.how} {BOOKING.note}
            </p>
          </div>
          <div className="courts">
            <article className="court reveal">
              <div className="court__photo">
                <Image src="/img/csarnok-2.jpg" alt="Játékosok a fedett csarnokban" fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className="court__text">
                <h3>{HALL.title}</h3>
                <p>{HALL.surface}, egész évben.</p>
              </div>
            </article>
            <article className="court court--clay reveal">
              <div className="court__photo">
                <Image src="/img/salakpalyak.jpg" alt="A hét szabadtéri salakos pálya a teraszról nézve" fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className="court__text">
                <h3>Salakos pályák</h3>
                <p>{HALL.outdoor}</p>
              </div>
            </article>
          </div>
          <div className="reveal">
            <HallPrices />
          </div>
          <div className="passes reveal">
            <div className="passes__head">
              <h3 className="subtitle">24 alkalmas téli bérletek</h3>
              <p>{HALL.passes.note}</p>
            </div>
            <div className="passes__table" role="table" aria-label="24 alkalmas bérletek ára">
              <div role="row" className="passes__row passes__row--head">
                <span role="columnheader">Sáv</span>
                <span role="columnheader">1 órás</span>
                <span role="columnheader">1,5 órás</span>
                <span role="columnheader">2 órás</span>
              </div>
              {HALL.passes.rows.map((r) => (
                <div role="row" key={r.slot} className="passes__row">
                  <span role="rowheader">{r.slot}</span>
                  <span role="cell">{fmt(r.h1)} Ft</span>
                  <span role="cell">{fmt(r.h15)} Ft</span>
                  <span role="cell">{fmt(r.h2)} Ft</span>
                </div>
              ))}
            </div>
            <ul className="passes__extras">
              {HALL.extras.map((x) => (
                <li key={x.label}>
                  {x.label}: <b>{x.price}</b>
                </li>
              ))}
            </ul>
          </div>
          <aside className="call reveal">
            <p>
              <b>Pályafoglalás csak telefonon.</b> A recepció minden nap 8:00 és 20:00 között vár.
            </p>
            <a href={CLUB.phoneHref} className="btn btn--dark">
              <Icon name="phone" size={17} /> {CLUB.phone}
            </a>
          </aside>
        </div>
      </section>

      {/* ——— fallabda ——— */}
      <section id="fallabda" className="band band--dark" aria-labelledby="fallabda-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label light>Fallabda és szauna</Label>
              <h2 id="fallabda-title" className="title">
                Négy fallabdapálya, <em>utána szauna.</em>
              </h2>
            </div>
            <p className="intro">{SQUASH.intro}</p>
          </div>
          <div className="squash">
            <div className="squash__photo reveal">
              <Image src="/img/fallabda.jpg" alt="Két játékos a fallabdapályán" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="squash__side reveal">
              <dl className="plist">
                {SQUASH.prices.map((p) => (
                  <div key={p.days + p.time}>
                    <dt>
                      {p.days} <small>{p.time}</small>
                    </dt>
                    <dd>{fmt(p.price)} Ft/óra</dd>
                  </div>
                ))}
              </dl>
              <p className="squash__label">Fallabdabérlet · {SQUASH.passTime}</p>
              <ul className="squash__passes">
                {SQUASH.passes.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="extras">
            <article className="extra reveal">
              <div className="extra__photo">
                <Image src="/img/szauna.jpg" alt="A szauna fapadjai" fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <h3>Szauna</h3>
              <p>
                {SQUASH.sauna.price}, {SQUASH.sauna.min}
              </p>
            </article>
            <article className="extra reveal">
              <div className="extra__photo">
                <Image src="/img/bufe.jpg" alt="A büfé pultja" fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <h3>Büfé és recepció</h3>
              <p>{INTRO.reception}</p>
            </article>
            <article className="extra reveal">
              <div className="extra__photo">
                <Image src="/img/oltozo.jpg" alt="Az öltöző" fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <h3>Eszközbérlés</h3>
              <ul>
                {SQUASH.rental.map((r) => (
                  <li key={r.label}>
                    {r.label}: <b>{r.price}</b>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ——— vendégház ——— */}
      <section id="vendeghaz" className="band" aria-labelledby="vendeghaz-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Vendégház</Label>
              <h2 id="vendeghaz-title" className="title">
                Hat szoba, <em>a pályák mellett.</em>
              </h2>
            </div>
            <p className="intro">{GUESTHOUSE.intro}</p>
          </div>
          <div className="rooms">
            <div className="rooms__photos reveal">
              <div className="rooms__photo rooms__photo--big">
                <Image src="/img/szoba-1.jpg" alt="Kétágyas szoba a vendégházban" fill sizes="(max-width: 900px) 100vw, 40vw" />
              </div>
              <div className="rooms__photo">
                <Image src="/img/tarsalgo.jpg" alt="A közös társalgó étkezővel" fill sizes="(max-width: 900px) 50vw, 20vw" />
              </div>
              <div className="rooms__photo">
                <Image src="/img/szoba-2.jpg" alt="Szoba összetolt ágyakkal" fill sizes="(max-width: 900px) 50vw, 20vw" />
              </div>
            </div>
            <div className="rooms__side reveal">
              <p>{GUESTHOUSE.room}</p>
              <p>{GUESTHOUSE.lounge}</p>
              <div className="rates">
                <p className="rates__label">{GUESTHOUSE.prices.from}</p>
                <div className="rates__table" role="table" aria-label="Szobaárak">
                  <div role="row" className="rates__row rates__row--head">
                    <span role="columnheader" />
                    <span role="columnheader">1 éj</span>
                    <span role="columnheader">2 éj</span>
                  </div>
                  {GUESTHOUSE.prices.rows.map((r) => (
                    <div role="row" key={r.who} className="rates__row">
                      <span role="rowheader">{r.who}</span>
                      <span role="cell">{fmt(r.night)} Ft</span>
                      <span role="cell">{fmt(r.two)} Ft</span>
                    </div>
                  ))}
                </div>
                <p className="rates__note">
                  {GUESTHOUSE.prices.tax} {GUESTHOUSE.kids}
                </p>
              </div>
            </div>
          </div>
          <div className="stay reveal">
            <ul className="stay__perks">
              {GUESTHOUSE.perks.map((p) => (
                <li key={p}>
                  <Icon name="check" size={16} /> {p}
                </li>
              ))}
            </ul>
            <ul className="stay__near">
              {GUESTHOUSE.nearby.map((n) => (
                <li key={n.place}>
                  <span>{n.place}</span>
                  <b>{n.km}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— csomagok ——— */}
      <section id="csomagok" className="band band--soft" aria-labelledby="csomagok-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Csomagok</Label>
              <h2 id="csomagok-title" className="title">
                Két éj, négy éj, <em>vagy az egész ház.</em>
              </h2>
            </div>
            <p className="intro">
              {PACKAGES.valid} {PACKAGES.tax}
            </p>
          </div>
          <div className="packs">
            {PACKAGES.list.map((p) => (
              <article key={p.title} className="pack reveal">
                <h3>{p.title}</h3>
                <p className="pack__price">
                  <b>{p.price}</b>
                  <span>{p.unit}</span>
                </p>
                {p.alt && <p className="pack__alt">{p.alt}</p>}
                <ul>
                  {p.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="packs__cta reveal">
            <a href={CLUB.emailHref} className="btn btn--accent">
              <Icon name="mail" size={17} /> Foglalás e-mailben
            </a>
            <a href={CLUB.roomBooking} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
              Szobafoglaló űrlap <Icon name="arrowUpRight" size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ——— házirend ——— */}
      <section id="hazirend" className="band" aria-labelledby="hazirend-title">
        <div className="container rules">
          <div className="rules__side reveal">
            <Label>Házirend</Label>
            <h2 id="hazirend-title" className="title">
              Amit a pályán <em>érdemes tudni.</em>
            </h2>
            <div className="rules__photo">
              <Image src="/img/csarnok-kivul.jpg" alt="A teniszcsarnok kívülről" fill sizes="(max-width: 900px) 100vw, 34vw" />
            </div>
          </div>
          <ol className="rules__list reveal">
            {RULES.map((r) => (
              <li key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band band--soft" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <Label>Kapcsolat</Label>
            <h2 id="kapcsolat-title" className="title">
              Dr. Frank Mária utca 1., <em>Eger.</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Pályafoglalás telefonon</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                  <small>{INTRO.reception}</small>
                </dd>
              </div>
              <div>
                <dt>E-mail, szállás</dt>
                <dd>
                  <a href={CLUB.emailHref}>{CLUB.email}</a>
                </dd>
              </div>
              <div>
                <dt>Cím</dt>
                <dd>
                  {CLUB.address}
                  <small>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Útvonal a Google Térképen
                    </a>{" "}
                    · ingyenes parkolás
                  </small>
                </dd>
              </div>
            </dl>
            <div className="map">
              <iframe src={CLUB.mapsEmbed} title="Az Invest Sportcentrum a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="visit__form reveal">
            <h3 className="subtitle">Írj nekünk</h3>
            <p>Szállás, csomag vagy kérdés a sportolásról. Pályát telefonon foglalhatsz.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
