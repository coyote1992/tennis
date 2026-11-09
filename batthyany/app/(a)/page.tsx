import Image from "next/image";
import { ParkMap } from "@/components/a/ParkMap";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
import { ACTIVITIES, CASTLE, HOTEL, HOUSE_RULES, TENNIS, WELLNESS, WELLNESS_DAYS } from "@/lib/site";

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`label${light ? " label--light" : ""}`}>{children}</p>;
}

function CallButton({ children = "Pályafoglalás a recepción" }: { children?: React.ReactNode }) {
  return (
    <a href={HOTEL.phoneHref} className="btn btn--accent">
      <Icon name="phone" size={17} /> {children}
    </a>
  );
}

const WELLNESS_PHOTOS = [
  { src: "/img/kulteri-medence.jpg", alt: "A kültéri termálmedence napágyakkal és virágokkal", w: 1024, h: 449 },
  { src: "/img/medence-sakk.jpg", alt: "A beltéri medence vízi sakkal", w: 1000, h: 667 },
  { src: "/img/szauna.jpg", alt: "Finn szauna fapadokkal", w: 1024, h: 682 },
  { src: "/img/masszazs.jpg", alt: "Masszázságy gyertyafényben", w: 1000, h: 667 },
];

export default function Page() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="hero__kicker">
              {HOTEL.name}
              {HOTEL.stars} · {HOTEL.town}
            </p>
            <h1 id="hero-title" className="hero__title">
              Tenisz a kastélyparkban, <em>utána termálvíz.</em>
            </h1>
            <p className="hero__lead">{TENNIS.intro} Szállóvendégként és külsős vendégként is foglalhatsz, előzetes bejelentkezéssel.</p>
            <div className="hero__prices">
              {TENNIS.prices.map((p) => (
                <p key={p.who}>
                  <span>{p.who}</span>
                  <b>
                    {p.price} <small>{p.unit}</small>
                  </b>
                </p>
              ))}
            </div>
            <div className="btn-row">
              <CallButton>{HOTEL.phone}</CallButton>
              <a href="#wellness" className="btn btn--ghost">
                Tenisz + wellness nap
              </a>
            </div>
          </div>
          <figure className="hero__figure">
            <div className="hero__photo">
              <Image src="/img/kastely-szokokut.jpg" alt="A Batthyány Kastély homlokzata a szökőkúttal és a parkkal" fill priority sizes="(max-width: 900px) 100vw, 56vw" />
            </div>
            <div className="hero__court">
              <Image src="/img/uto-salak.jpg" alt="Teniszütő és labda a salakon" fill sizes="(max-width: 900px) 34vw, 14vw" />
            </div>
          </figure>
        </div>
      </section>

      {/* ——— tenisz ——— */}
      <section id="tenisz" className="band" aria-labelledby="tenisz-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Tenisz</Label>
              <h2 id="tenisz-title" className="title">
                Megújult salakpálya <em>a parkban.</em>
              </h2>
            </div>
            <p className="intro">{TENNIS.booking}</p>
          </div>

          <div className="court">
            <div className="court__card reveal">
              <p className="court__label">Teniszpálya-bérlés</p>
              <dl className="court__prices">
                {TENNIS.prices.map((p) => (
                  <div key={p.who}>
                    <dt>{p.who}</dt>
                    <dd>
                      {p.price}
                      <span>{p.unit}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="court__gear">
                <Icon name="ball" size={18} /> {TENNIS.gear}
              </p>
              <div className="court__contact">
                <CallButton>{HOTEL.phone}</CallButton>
                <a href={HOTEL.emailHref} className="court__mail">
                  <Icon name="mail" size={16} /> {HOTEL.email}
                </a>
              </div>
            </div>
            <div className="court__rules reveal">
              <h3 className="subtitle">A pálya házirendje</h3>
              <ol className="rules">
                {HOUSE_RULES.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ——— wellness nap ——— */}
      <section id="wellness" className="band band--cream" aria-labelledby="wellness-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Wellness nap</Label>
              <h2 id="wellness-title" className="title">
                Egy óra tenisz, <em>egy nap a kastélyban.</em>
              </h2>
            </div>
            <div>
              <p className="quote">„{TENNIS.reply}”</p>
              <p className="intro">{WELLNESS.text}</p>
            </div>
          </div>

          <div className="days">
            {WELLNESS_DAYS.map((d) => (
              <article key={d.id} className="day reveal">
                <header className="day__head">
                  <h3>{d.title}</h3>
                  <p>{d.when}</p>
                </header>
                <dl className="day__prices">
                  {d.prices.map((p) => (
                    <div key={p.who}>
                      <dt>{p.who}</dt>
                      <dd className={/^\d/.test(p.price) ? undefined : "day__free"}>{p.price}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="day__list">
                  {d.includes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <p className="day__book">
                  Bejelentkezés: <a href={HOTEL.phoneHref}>{HOTEL.phone}</a> · <a href={HOTEL.emailHref}>{HOTEL.email}</a>
                </p>
              </article>
            ))}
          </div>

          <div className="spa">
            <div className="spa__photos reveal">
              {WELLNESS_PHOTOS.map((p, i) => (
                <div key={p.src} className={`spa__photo spa__photo--${i + 1}`}>
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 900px) 50vw, 26vw" />
                </div>
              ))}
            </div>
            <ul className="spa__list reveal">
              {WELLNESS.items.map((w) => (
                <li key={w.title}>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— park ——— */}
      <section id="park" className="band" aria-labelledby="park-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>A park</Label>
              <h2 id="park-title" className="title">
                A pályától <em>a medencéig.</em>
              </h2>
            </div>
            <p className="intro">
              A teniszpálya, a kültéri termálmedence, a szaunák és a masszázspavilon a kastély 10 hektáros parkjában vannak. A szálloda
              térképén követheted az utat.
            </p>
          </div>
          <div className="reveal">
            <ParkMap />
          </div>
          <ul className="acts reveal">
            {ACTIVITIES.map((a) => (
              <li key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— kastély ——— */}
      <section id="kastely" className="band dark" aria-labelledby="kastely-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label light>A kastély</Label>
              <h2 id="kastely-title" className="title">
                Öt évszázad, <em>28 szoba.</em>
              </h2>
            </div>
            <p className="intro">{CASTLE.intro}</p>
          </div>
          <div className="castle">
            <ol className="timeline reveal">
              {CASTLE.history.map((h) => (
                <li key={h.year}>
                  <b>{h.year}</b>
                  <p>{h.text}</p>
                </li>
              ))}
            </ol>
            <div className="castle__side reveal">
              <div className="castle__photos">
                <div className="castle__photo">
                  <Image src="/img/szoba.jpg" alt="Klasszikus berendezésű szoba a kastélyban" fill sizes="(max-width: 900px) 50vw, 20vw" />
                </div>
                <div className="castle__photo">
                  <Image src="/img/etterem-2.jpg" alt="Desszert erdei gyümölcsökkel a kastély éttermében" fill sizes="(max-width: 900px) 50vw, 20vw" />
                </div>
              </div>
              <p>{CASTLE.dining}</p>
              <p>{CASTLE.rooms}</p>
              <div className="btn-row">
                <a href={HOTEL.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
                  Szállásfoglalás <Icon name="arrowUpRight" size={17} />
                </a>
                <a href={HOTEL.offer} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                  Ajánlatkérés <Icon name="arrowUpRight" size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band band--cream" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <Label>Kapcsolat</Label>
            <h2 id="kapcsolat-title" className="title">
              Zalacsány, <em>Csány László u. 24.</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Recepció, pályafoglalás</dt>
                <dd>
                  <a href={HOTEL.phoneHref}>{HOTEL.phone}</a>
                  <small>
                    Mobil: <a href={HOTEL.mobileHref}>{HOTEL.mobile}</a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={HOTEL.emailHref}>{HOTEL.email}</a>
                </dd>
              </div>
              <div>
                <dt>Cím</dt>
                <dd>
                  {HOTEL.address}
                  <small>
                    <a href={HOTEL.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Útvonal a Google Térképen
                    </a>
                  </small>
                </dd>
              </div>
            </dl>
            <div className="map">
              <iframe src={HOTEL.mapsEmbed} title="A Batthyány Kastélyszálló a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="visit__form reveal">
            <h3 className="subtitle">Írj nekünk</h3>
            <p>Teniszpálya, wellness nap vagy szállás: a levél a recepcióra megy.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
