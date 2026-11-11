import Image from "next/image";
import { PriceSwitch } from "@/components/b/PriceSwitch";
import {
  IconArrow,
  IconCheck,
  IconClock,
  IconExternal,
  IconFacebook,
  IconMail,
  IconPhone,
  IconPin,
  IconRacket,
  IconSnow,
  IconStar,
  IconSun,
  IconUsers,
} from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import { CENTER, CLUB, COACHES, COACHING, COURTS, HOURS, INTRO, KIDS, PRICES, VISIT, fmt } from "@/lib/site";

/** keep phone numbers and times on one line, and never break right after a dash */
const nb = (t: string) => t.replace(/ /g, " ").replace(/–/g, "–⁠");
const tel = (p: string) => `tel:${p.replace(/[^\d+]/g, "")}`;
const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;
const WINTER = COURTS.seasons[0];
const SUMMER = COURTS.seasons[1];
const CLAY_FROM = Math.min(...PRICES.clay.weekday.map((r) => r.alkalmi), ...PRICES.clay.weekend.map((r) => r.alkalmi));
const PERK_IMG = ["", "oltozo.jpg", "kavezo-terasz.jpg"];

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">{CLUB.name} · Budapest III. kerület</p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz a parkerdő <em>szélén.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">{INTRO.lead}</p>
              <div className="hero__ctas">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> Recepció: {nb(CLUB.phone)}
                </a>
                <a href={CLUB.phone2Href} className="btn btn--ghost">
                  <IconPhone /> {nb(CLUB.phone2)}
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/park-palyak.jpg"
              alt="Térkővel kirakott sétány a salakos teniszpályák között, magas fák és ápolt sövény mellett"
              fill
              priority
              sizes="(max-width: 1296px) 100vw, 1200px"
            />
            <figcaption className="hero__caption">Salakos pályák az ősfás parkban</figcaption>
          </figure>

          <ul className="facts reveal">
            <li className="fact">
              <span className="fact__num">{WINTER.clay}</span>
              <span className="fact__label">salakos pálya télen, {WINTER.clayNote}</span>
            </li>
            <li className="fact">
              <span className="fact__num">{SUMMER.clay}</span>
              <span className="fact__label">salakos pálya nyáron</span>
            </li>
            <li className="fact">
              <span className="fact__num">{WINTER.hard}</span>
              <span className="fact__label">rekortán pálya {WINTER.hardNote}</span>
            </li>
            <li className="fact">
              <span className="fact__num">{nb(HOURS.center[0].time)}</span>
              <span className="fact__label">hétköznap, hétvégén {nb(HOURS.center[1].time)}</span>
            </li>
          </ul>
          <p className="hero__place reveal">{INTRO.place}</p>
        </div>
      </section>

      {/* ——— Teniszpályák ——— */}
      <section id="palyak" className="section" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Teniszpályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Télen sátorban, <em>nyáron a fák alatt.</em>
          </h2>
          <p className="lead reveal">{COURTS.lead}</p>

          <div className="seasons">
            <article className="season glass reveal">
              <figure className="season__img">
                <Image src="/img/teli-sator.jpg" alt="Salakos pálya a fehér, fedett téli sátor alatt" fill sizes="(max-width: 900px) 100vw, 34vw" />
              </figure>
              <div className="season__body">
                <p className="label">
                  <IconSnow /> {WINTER.label} · {nb(WINTER.range)}
                </p>
                <p className="season__count">
                  <strong>{WINTER.clay}</strong> salakos pálya <span>{WINTER.clayNote}</span>
                </p>
                <p className="season__count">
                  <strong>{WINTER.hard}</strong> rekortán pálya <span>{WINTER.hardNote}</span>
                </p>
              </div>
            </article>
            <article className="season glass reveal">
              <figure className="season__img">
                <Image src="/img/palyak-lelato.jpg" alt="Nyári salakos pályák a fák alatt, előttük piros és kék ülések" fill sizes="(max-width: 900px) 100vw, 34vw" />
              </figure>
              <div className="season__body">
                <p className="label">
                  <IconSun /> {SUMMER.label} · {SUMMER.range}
                </p>
                <p className="season__count">
                  <strong>{SUMMER.clay}</strong> salakos pálya <span>{SUMMER.clayNote}</span>
                </p>
                <p className="season__count">
                  <strong>{SUMMER.hard}</strong> rekortán pálya <span>{SUMMER.hardNote}</span>
                </p>
              </div>
            </article>
          </div>
          <p className="muted weather reveal">{COURTS.weather}</p>

          <div className="roof">
            <figure className="snap roof__img reveal reveal--img">
              <Image src="/img/teto-rekortan.jpg" alt="Zöld-piros rekortán teniszpálya a csarnok tetején, a háttérben fák" fill sizes="(max-width: 900px) 100vw, 30vw" />
              <figcaption>Rekortán pálya a tetőn</figcaption>
            </figure>
            <figure className="snap roof__img reveal reveal--img">
              <Image src="/img/grecs-adogatas.jpg" alt="Grécs Attila edző sárga dzsekiben adogat a téli sátor salakpályáján" fill sizes="(max-width: 900px) 100vw, 30vw" />
              <figcaption>Edzés a téli sátorban</figcaption>
            </figure>
          </div>

          <ul className="perks">
            {COURTS.perks.map((p, i) => (
              <li key={p.title} className="perk glass reveal">
                {PERK_IMG[i] ? (
                  <figure className="perk__img">
                    <Image src={`/img/${PERK_IMG[i]}`} alt="" fill sizes="(max-width: 900px) 100vw, 22vw" />
                  </figure>
                ) : (
                  <span className="perk__icon" aria-hidden="true">
                    <IconRacket />
                  </span>
                )}
                <h3 className="h3">{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Árak ——— */}
      <section id="arak" className="section" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Árak</p>
          <h2 id="arak-title" className="h2 reveal">
            Téli árlista, <em>2026/27.</em>
          </h2>
          <p className="lead reveal">
            Salakon alkalmi óradíj {nb(`${fmt(CLAY_FROM)} Ft`)}-tól, a rekortán pályák a csarnok tetején. {COURTS.booking}
          </p>

          <PriceSwitch />

          <div className="callcard glass reveal">
            <div>
              <p className="label">
                <IconPhone /> Pályafoglalás
              </p>
              <p className="callcard__text">Időpontot a recepción foglalhatsz, mindkét számon. Ütőt is bérelhetsz a helyszínen.</p>
            </div>
            <div className="callcard__ctas">
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <IconPhone /> {nb(CLUB.phone)}
              </a>
              <a href={CLUB.phone2Href} className="btn btn--ghost">
                <IconPhone /> {nb(CLUB.phone2)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Oktatók ——— */}
      <section id="oktatok" className="section" aria-labelledby="oktatok-title">
        <div className="container">
          <p className="eyebrow reveal">Teniszoktatás</p>
          <h2 id="oktatok-title" className="h2 reveal">
            Edzőt keresel? <em>Hívd közvetlenül.</em>
          </h2>
          <p className="lead reveal">{COACHING.text}</p>

          <ul className="coaches">
            {COACHES.map((c) => (
              <li key={c.name} className={`coach glass reveal${c.img ? "" : " coach--plain"}`}>
                <div className="coach__img">
                  {c.img ? (
                    <Image src={`/img/${c.img}`} alt={c.name} fill sizes="(max-width: 640px) 110px, (max-width: 1100px) 33vw, 260px" />
                  ) : (
                    <span className="coach__initials" aria-hidden="true">
                      {initials(c.name)}
                    </span>
                  )}
                </div>
                <div className="coach__body">
                  <p className="coach__role">
                    Teniszoktató
                    {c.langs && <span className="coach__langs">{c.langs}</span>}
                  </p>
                  <h3 className="h3">{c.name}</h3>
                  {c.text && <p className="coach__text">{c.text}</p>}
                  <p className="coach__links">
                    <a href={tel(c.phone)} className="coach__call">
                      <IconPhone /> {nb(c.phone)}
                    </a>
                    {c.email && (
                      <a href={`mailto:${c.email}`}>
                        <IconMail /> <span>{c.email}</span>
                      </a>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="kids glass reveal">
            <figure className="kids__img">
              <Image src="/img/kovacs-gyerekekkel.jpg" alt="Edző magyaráz egy csoport gyereknek a salakpálya hálójánál" fill sizes="(max-width: 900px) 100vw, 30vw" />
            </figure>
            <div className="kids__body">
              <p className="label">
                <IconUsers /> Gyerekeknek
              </p>
              <h3 className="h3 kids__title">{KIDS.title}</h3>
              <p>{KIDS.text}</p>
              <p className="kids__camp">
                <IconSun /> {KIDS.camp}
              </p>
              <div className="kids__contact">
                <div>
                  <strong>{KIDS.contact.name}</strong>
                  <span className="muted">{KIDS.contact.role}</span>
                </div>
                <a href={KIDS.contact.phoneHref} className="btn btn--ghost btn--sm">
                  <IconPhone /> {nb(KIDS.contact.phone)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Sportközpont ——— */}
      <section id="sportkozpont" className="section" aria-labelledby="sportkozpont-title">
        <div className="container">
          <p className="eyebrow reveal">Sportközpont</p>
          <h2 id="sportkozpont-title" className="h2 reveal">
            A teniszen <em>túl.</em>
          </h2>
          <p className="lead reveal">{CENTER.lead}</p>

          <ul className="center">
            {CENTER.items.map((it) => (
              <li key={it.id} className="center__item glass reveal">
                <figure className="center__img">
                  <Image src={`/img/${it.img}`} alt="" fill sizes="(max-width: 900px) 100vw, 40vw" />
                </figure>
                <div className="center__body">
                  <h3 className="h3">{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="happy glass reveal">
            <IconClock /> {CENTER.happyHour}
          </p>

          <div className="trainers">
            <div className="trainers__head reveal">
              <p className="label">
                <IconStar /> Személyi edzők az edzőteremben
              </p>
              <p className="muted">{CENTER.sports}</p>
            </div>
            {CENTER.trainers.map((t) => (
              <article key={t.name} className="trainer glass reveal">
                <figure className="trainer__img">
                  <Image src={`/img/${t.img}`} alt={t.name} fill sizes="96px" />
                </figure>
                <div>
                  <h3 className="h3">{t.name}</h3>
                  <p className="trainer__role">{t.role}</p>
                  {(t.phone || t.email) && (
                    <p className="coach__links">
                      {t.phone && (
                        <a href={tel(t.phone)}>
                          <IconPhone /> {nb(t.phone)}
                        </a>
                      )}
                      {t.email && (
                        <a href={`mailto:${t.email}`}>
                          <IconMail /> <span>{t.email}</span>
                        </a>
                      )}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="events glass reveal">
            <figure className="events__img">
              <Image src="/img/rendezveny.jpg" alt="Rendezvény a csarnokban: kék és lila fények, magas asztalok" fill sizes="(max-width: 900px) 100vw, 45vw" />
            </figure>
            <div className="events__body">
              <p className="label">
                <IconStar /> Rendezvények
              </p>
              <h3 className="h3 events__title">{CENTER.events.title}</h3>
              <p>{CENTER.events.text}</p>
              <p className="muted events__k">Akik már itt rendeztek</p>
              <ul className="chips">
                {CENTER.events.refs.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <div className="events__contact">
                <div>
                  <strong>{CLUB.events.name}</strong>
                  <span className="muted">{CLUB.events.role}</span>
                </div>
                <div className="events__ctas">
                  <a href={CLUB.events.phoneHref} className="btn btn--ghost btn--sm">
                    <IconPhone /> {nb(CLUB.events.phone)}
                  </a>
                  <a href={`mailto:${CLUB.events.email}`} className="btn btn--ghost btn--sm">
                    <IconMail /> E-mail
                  </a>
                  <a href={CLUB.events.site} {...EXT} className="btn btn--ghost btn--sm">
                    <IconExternal /> Rendezvényoldal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Kapcsolat ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Gyere fel <em>a Folyondárhoz.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Recepció, pályafoglalás</span>
                    <a href={CLUB.phoneHref}>{nb(CLUB.phone)}</a>
                    <a href={CLUB.phone2Href} className="contact__second">
                      {nb(CLUB.phone2)}
                    </a>
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
                    <a href={CLUB.mapsUrl} {...EXT}>
                      {CLUB.address}
                    </a>
                  </div>
                </li>
                <li>
                  <IconClock />
                  <div>
                    <span className="contact__label">Nyitvatartás</span>
                    <ul className="hours">
                      {HOURS.center.map((h) => (
                        <li key={h.days}>
                          <span>{nb(h.days)}</span>
                          <strong>{nb(h.time)}</strong>
                        </li>
                      ))}
                    </ul>
                    <p className="hours__k">Folyondár Café</p>
                    <ul className="hours hours--small">
                      {HOURS.cafe.map((h) => (
                        <li key={h.days}>
                          <span>{nb(h.days)}</span>
                          <strong>{nb(h.time)}</strong>
                        </li>
                      ))}
                      <li>
                        <span>Ebéd, {nb(HOURS.lunch.days.toLowerCase())}</span>
                        <strong>{nb(HOURS.lunch.time)}</strong>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="social">
                <a href={CLUB.facebook} {...EXT} aria-label="A Folyondár Sportközpont a Facebookon">
                  <IconFacebook />
                </a>
              </div>
              <div className="visit__actions">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> Hívás
                </a>
                <a href={CLUB.mapsUrl} {...EXT} className="btn btn--ghost">
                  <IconArrow /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__side">
              <div className="visit__form glass reveal">
                <p className="label">
                  <IconMail /> Írj nekünk
                </p>
                <p className="muted">Pálya, bérlet, edzőterem vagy rendezvény: a levél a {CLUB.email} címre megy. Edzőt közvetlenül érdemes hívni.</p>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="getthere">
            <figure className="snap getthere__img reveal reveal--img">
              <Image src="/img/bejarat.jpg" alt="A sportközpont bejárata a Folyondár-felirattal, virágzó bokrok mellett" fill sizes="(max-width: 900px) 100vw, 40vw" />
              <figcaption>A bejárat</figcaption>
            </figure>
            <ul className="getthere__list glass reveal">
              <li>
                <span className="contact__label">Tömegközlekedéssel</span>
                <p>{VISIT.transit}</p>
              </li>
              <li>
                <span className="contact__label">Autóval</span>
                <p>{VISIT.car}</p>
              </li>
              <li>
                <span className="contact__label">Gyalog</span>
                <p>{VISIT.walk}</p>
              </li>
              <li>
                <span className="contact__label">Parkolás</span>
                <p>{VISIT.parking}</p>
              </li>
            </ul>
          </div>

          <div className="visit__map glass reveal">
            <iframe title="A Folyondár Sportközpont a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
