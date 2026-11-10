import Image from "next/image";
import { IconArrow, IconCalendar, IconCheck, IconClock, IconExternal, IconMail, IconPhone, IconPin, IconUsers } from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import { BOOKING, CLUB, GUESTHOUSE, HALL, INTRO, PACKAGES, RULES, SQUASH, fmt } from "@/lib/site";

/** keep times and phone numbers on one line */
const nb = (t: string) => t.replace(/ /g, " ");
/** keep "45 000 Ft" together without freezing the whole sentence */
const numnb = (t: string) => t.replace(/(\d) (\d{3})/g, "$1 $2").replace(/ Ft\b/g, " Ft");
const ft = (n: number) => `${fmt(n)} Ft`;
/** no line break right after a hyphen or a dash ("13-tól", "8:00–20:00", "e-mailben") */
const join = (t: string) => t.replace(/([-–])/g, "$1\u2060");

const KEY_RULES = RULES.slice(0, 3);

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">{CLUB.name} · Eger</p>
            <h1 id="hero-title" className="h1 reveal">
              Az ütős sportok bázisa, <em>Egerben.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">{INTRO.text}</p>
              <div className="hero__ctas">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> {nb(CLUB.phone)}
                </a>
                <a href="#vendeghaz" className="btn btn--ghost">
                  Szállás <IconArrow />
                </a>
              </div>
            </div>
            <p className="hero__note reveal">
              <IconPhone /> <span>Pályát telefonon foglalhatsz.</span>
            </p>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image src="/img/csarnok-szeles.jpg" alt="A fedett teniszcsarnok két kék pályája az ívelt tető alatt, játékosokkal" fill priority sizes="(max-width: 1296px) 100vw, 1200px" />
            <figcaption className="hero__caption">A fedett teniszcsarnok</figcaption>
          </figure>

          <ul className="facts reveal">
            {INTRO.facts.map((f) => (
              <li key={f.label} className="fact">
                <span className="fact__num">{f.value}</span>
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
            Hét salakpálya kint, <em>kettő a csarnokban.</em>
          </h2>
          <p className="lead reveal">
            {BOOKING.how} {BOOKING.note}
          </p>

          <div className="courts">
            <article className="court glass reveal">
              <figure className="court__photo">
                <Image src="/img/salakpalyak.jpg" alt="A szabadtéri salakos teniszpályák a terasz felől nézve" fill sizes="(max-width: 900px) 100vw, 420px" />
              </figure>
              <div className="court__body">
                <h3 className="h3 court__title court__title--clay">Kültéri salakpályák</h3>
                <p>{HALL.outdoor}</p>
              </div>
            </article>
            <article className="court glass reveal">
              <figure className="court__photo">
                <Image src="/img/csarnok.jpg" alt="A fedett teniszcsarnok kék, gumiborítású pályái" fill sizes="(max-width: 900px) 100vw, 420px" />
              </figure>
              <div className="court__body">
                <h3 className="h3 court__title court__title--hall">{HALL.title}</h3>
                <p>{HALL.surface}; óradíjak lent.</p>
              </div>
            </article>
          </div>

          <article className="hall glass reveal">
            <div className="hall__head">
              <p className="label">
                <IconClock /> {HALL.title} · óradíjak
              </p>
              <p className="muted">{join(HALL.listDate)}</p>
            </div>
            <div className="ptable" role="table" aria-label="A fedett teniszcsarnok óradíjai">
              <div className="ptable__row ptable__row--head" role="row">
                <span role="columnheader">Téli időszak</span>
                <span role="columnheader">Óradíj</span>
                <span role="columnheader">Bérlettel</span>
              </div>
              {HALL.winter.map((r) => (
                <div key={r.days + r.time} className="ptable__row" role="row">
                  <span role="cell">
                    {r.days} <span className="nobr">{r.time}</span>
                  </span>
                  <strong role="cell">{ft(r.price)}</strong>
                  <span role="cell" className="ptable__pass">
                    {ft(r.pass)}
                  </span>
                </div>
              ))}
              <div className="ptable__row ptable__row--summer" role="row">
                <span role="cell">
                  <span className="ptable__tag">Nyári időszak</span> {HALL.summer.days} <span className="nobr">{HALL.summer.time}</span>
                </span>
                <strong role="cell">{ft(HALL.summer.price)}</strong>
                <span role="cell" className="ptable__pass">
                  {numnb(HALL.summer.pass)}
                </span>
              </div>
            </div>
            <p className="muted hall__unit">Az óradíjak Ft/órában; a bérletes ár a téli időszakban óránként értendő.</p>
            <ul className="hall__extras">
              {HALL.extras.map((x) => (
                <li key={x.label}>
                  <span>{x.label}</span>
                  <strong>{numnb(x.price)}</strong>
                </li>
              ))}
            </ul>
          </article>

          <details className="rules glass reveal">
            <summary>
              <span className="rules__title">
                <IconCalendar /> 24 alkalmas téli bérletek
              </span>
              <span className="rules__hint">a legutóbb közzétett árlista szerint</span>
            </summary>
            <div className="passes">
              <div className="ptable ptable--passes" role="table" aria-label="24 alkalmas téli bérletek">
                <div className="ptable__row ptable__row--head" role="row">
                  <span role="columnheader">Idősáv</span>
                  <span role="columnheader">1 órás</span>
                  <span role="columnheader">1,5 órás</span>
                  <span role="columnheader">2 órás</span>
                </div>
                {HALL.passes.rows.map((r) => (
                  <div key={r.slot} className="ptable__row" role="row">
                    <span role="cell">{r.slot.replace(/ (\d)/, " $1")}</span>
                    <strong role="cell">{ft(r.h1)}</strong>
                    <strong role="cell">{ft(r.h15)}</strong>
                    <strong role="cell">{ft(r.h2)}</strong>
                  </div>
                ))}
              </div>
              <p className="muted">{HALL.passes.note}</p>
            </div>
          </details>

          <aside className="callcard glass reveal">
            <div>
              <p className="label">
                <IconPhone /> Pályafoglalás
              </p>
              <p className="callcard__text">
                {BOOKING.how} A díjakról és a szabad időpontokról is ott kapsz választ.
              </p>
            </div>
            <a href={CLUB.phoneHref} className="btn btn--accent">
              <IconPhone /> {nb(CLUB.phone)}
            </a>
          </aside>
        </div>
      </section>

      {/* ——— Fallabda és szauna ——— */}
      <section id="fallabda" className="section" aria-labelledby="fallabda-title">
        <div className="container">
          <p className="eyebrow reveal">Fallabda és szauna</p>
          <h2 id="fallabda-title" className="h2 reveal">
            Négy fallabdapálya, <em>utána szauna.</em>
          </h2>
          <p className="lead reveal">{SQUASH.intro}</p>

          <div className="squash">
            <figure className="squash__photo reveal reveal--img">
              <Image src="/img/fallabda.jpg" alt="Két játékos a fallabdapályán" fill sizes="(max-width: 900px) 100vw, 520px" />
              <figcaption className="hero__caption">Fallabda</figcaption>
            </figure>
            <article className="squash__prices glass reveal">
              <p className="label">
                <IconClock /> Fallabdapálya · óradíj
              </p>
              <ul className="hours">
                {SQUASH.prices.map((p) => (
                  <li key={p.days + p.time}>
                    <span>
                      {p.days} <span className="nobr">{p.time}</span>
                    </span>
                    <strong>{ft(p.price)}</strong>
                  </li>
                ))}
              </ul>
              <p className="label squash__sub">
                <IconCalendar /> Fallabdabérlet
              </p>
              <ul className="checks">
                {SQUASH.passes.map((x) => (
                  <li key={x}>
                    <IconCheck />
                    <span>{numnb(x)}</span>
                  </li>
                ))}
              </ul>
              <p className="muted">{SQUASH.passTime}</p>
            </article>
          </div>

          <div className="extras-row">
            <article className="sauna glass reveal">
              <figure className="sauna__photo">
                <Image src="/img/szauna.jpg" alt="A szauna fapadjai" fill sizes="(max-width: 900px) 100vw, 360px" />
              </figure>
              <div className="sauna__body">
                <h3 className="h3">Szauna</h3>
                <p className="sauna__price">{numnb(SQUASH.sauna.price)}</p>
                <p className="muted">{numnb(SQUASH.sauna.min)}</p>
              </div>
            </article>
            <article className="rental glass reveal">
              <p className="label">
                <IconCheck /> Eszközbérlés
              </p>
              <ul className="hours">
                {SQUASH.rental.map((r) => (
                  <li key={r.label}>
                    <span>{r.label}</span>
                    <strong>{numnb(r.price)}</strong>
                  </li>
                ))}
              </ul>
              <p className="muted">Teniszhez és fallabdához egyaránt.</p>
            </article>
            <figure className="snap reveal reveal--img">
              <Image src="/img/fallabda-terem.jpg" alt="A fallabdapályák előtti társalgó asztalokkal" fill sizes="(max-width: 900px) 100vw, 360px" />
              <figcaption>A fallabdapályák előtt</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Vendégház ——— */}
      <section id="vendeghaz" className="section" aria-labelledby="vendeghaz-title">
        <div className="container">
          <p className="eyebrow reveal">Vendégház</p>
          <h2 id="vendeghaz-title" className="h2 reveal">
            Hat szoba, <em>a pályák mellett.</em>
          </h2>
          <p className="lead reveal">{GUESTHOUSE.intro}</p>

          <div className="rooms">
            <figure className="rooms__main reveal reveal--img">
              <Image src="/img/szoba-1.jpg" alt="Kétágyas szoba a vendégházban, tetőtéri ablakkal" fill sizes="(max-width: 900px) 100vw, 620px" />
              <figcaption className="hero__caption">Kétágyas szoba</figcaption>
            </figure>
            <figure className="snap reveal reveal--img">
              <Image src="/img/szoba-2.jpg" alt="Szoba összetolt ágyakkal, íróasztallal és televízióval" fill sizes="(max-width: 900px) 50vw, 300px" />
            </figure>
            <figure className="snap reveal reveal--img">
              <Image src="/img/tarsalgo.jpg" alt="A közös társalgó étkezőasztallal és konyhasarokkal" fill sizes="(max-width: 900px) 50vw, 300px" />
              <figcaption>Közös társalgó</figcaption>
            </figure>
          </div>

          <div className="stay">
            <article className="stay__info glass reveal">
              <p className="label">
                <IconUsers /> A szobák
              </p>
              <p>{GUESTHOUSE.room}</p>
              <p>{GUESTHOUSE.lounge}</p>
              <p className="muted">{GUESTHOUSE.kids}</p>
              <ul className="chips stay__perks" aria-label="Szolgáltatások">
                {GUESTHOUSE.perks.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
            <article className="stay__prices glass reveal">
              <p className="label">
                <IconCalendar /> {GUESTHOUSE.prices.from}
              </p>
              <div className="ptable ptable--rooms" role="table" aria-label="Szobaárak">
                <div className="ptable__row ptable__row--head" role="row">
                  <span role="columnheader">Vendég</span>
                  <span role="columnheader">1 éj</span>
                  <span role="columnheader">2 éj</span>
                </div>
                {GUESTHOUSE.prices.rows.map((r) => (
                  <div key={r.who} className="ptable__row" role="row">
                    <span role="cell">{r.who}</span>
                    <strong role="cell">{ft(r.night)}</strong>
                    <strong role="cell">{ft(r.two)}</strong>
                  </div>
                ))}
              </div>
              <p className="muted">{GUESTHOUSE.prices.tax}</p>
              <div className="stay__ctas">
                <a href={CLUB.roomBooking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Szobafoglalás <IconExternal />
                </a>
                <a href="#urlap" className="btn btn--ghost">
                  <IconMail /> Írj nekünk
                </a>
              </div>
            </article>
          </div>

          <div className="nearby glass reveal">
            <p className="label">
              <IconPin /> A közelben
            </p>
            <ul className="nearby__list">
              {GUESTHOUSE.nearby.map((n) => (
                <li key={n.place}>
                  <strong>{n.km}</strong>
                  <span>{n.place}</span>
                </li>
              ))}
            </ul>
            <figure className="nearby__photo">
              <Image src="/img/vendeghaz-bejarat.jpg" alt="A vendégház bejárata" fill sizes="(max-width: 900px) 40vw, 180px" />
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Csomagok ——— */}
      <section id="csomagok" className="section" aria-labelledby="csomagok-title">
        <div className="container">
          <p className="eyebrow reveal">Csomagok</p>
          <h2 id="csomagok-title" className="h2 reveal">
            Pár éj Egerben, <em>csomagáron.</em>
          </h2>
          <p className="lead reveal">{PACKAGES.valid}</p>

          <div className="packs">
            {PACKAGES.list.map((p) => (
              <article key={p.title} className="pack glass reveal">
                <h3 className="h3">{p.title}</h3>
                <p className="pack__price">
                  <strong>{numnb(p.price)}</strong>
                  <span>{p.unit}</span>
                </p>
                {p.alt && <p className="pack__alt">{numnb(p.alt)}</p>}
                <ul className="checks">
                  {p.items.map((x) => (
                    <li key={x}>
                      <IconCheck />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`${CLUB.emailHref}?subject=${encodeURIComponent(`Csomagajánlat: ${p.title}`)}`}
                  className="btn btn--ghost btn--sm pack__cta"
                >
                  <IconMail /> Érdeklődés e-mailben
                </a>
              </article>
            ))}
          </div>
          <p className="muted packs__tax reveal">{PACKAGES.tax}</p>
        </div>
      </section>

      {/* ——— Házirend ——— */}
      <section id="hazirend" className="section" aria-labelledby="hazirend-title">
        <div className="container">
          <p className="eyebrow reveal">Házirend</p>
          <h2 id="hazirend-title" className="h2 reveal">
            A pályán, <em>röviden.</em>
          </h2>

          <ul className="keyrules keyrules--three">
            {KEY_RULES.map((r) => (
              <li key={r.title} className="keyrule glass reveal">
                <strong>{r.title}</strong>
                <span>{numnb(r.text)}</span>
              </li>
            ))}
          </ul>

          <details className="rules glass reveal">
            <summary>
              <span className="rules__title">
                <IconCheck /> A teljes házirend
              </span>
              <span className="rules__hint">{RULES.length} pont</span>
            </summary>
            <ol className="rulelist rulelist--numbered">
              {RULES.map((r) => (
                <li key={r.title}>
                  <strong>{r.title}</strong>
                  <span>{numnb(r.text)}</span>
                </li>
              ))}
            </ol>
          </details>

          <div className="desk">
            <figure className="snap desk__photo reveal reveal--img">
              <Image src="/img/bufe.jpg" alt="A büfé pultja, mögötte ütők a falon" fill sizes="(max-width: 900px) 100vw, 560px" />
              <figcaption>Büfé és recepció</figcaption>
            </figure>
            <article className="desk__text glass reveal">
              <p className="label">
                <IconClock /> Büfé és recepció
              </p>
              <p className="desk__lead">{join(INTRO.reception)}</p>
              <ul className="chips" aria-label="A sportcentrumban">
                {INTRO.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
            <figure className="snap desk__photo2 reveal reveal--img">
              <Image src="/img/oltozo.jpg" alt="Öltöző szekrényekkel és fogasokkal" fill sizes="(max-width: 900px) 100vw, 360px" />
              <figcaption>Öltöző</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Kapcsolat ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Pályát telefonon, <em>szobát {join("e-mailben")} is.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Pályafoglalás telefonon</span>
                    <a href={CLUB.phoneHref}>{nb(CLUB.phone)}</a>
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
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address.replace(/ (\d+\.)$/, " $1")}
                    </a>
                    <span className="contact__name">a volt kemping területén, zöldövezetben</span>
                  </div>
                </li>
                <li>
                  <IconClock />
                  <div>
                    <span className="contact__label">Büfé és recepció</span>
                    <span className="contact__line">{join(INTRO.reception)}</span>
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
              <p className="muted">Szállás, csomagajánlat vagy kérdés; pályát telefonon foglalhatsz.</p>
              <ContactForm />
            </div>
          </div>

          <div className="visit__map glass reveal">
            <iframe title="Az Invest Sportcentrum és Vendégház a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
