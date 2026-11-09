import Image from "next/image";
import { Levels } from "@/components/a/Levels";
import { PriceBoard } from "@/components/a/PriceBoard";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
import { BUILD, CLUB, COACH, COURT, EVENTS, HOUSE_RULES, OPEN, PRICES, SCHOOL, TRAINING, fmt } from "@/lib/site";

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`label${light ? " label--light" : ""}`}>{children}</p>;
}

const DAYS = ["Hétfő", "Szerda", "Csütörtök"];
const SLOTS = ["17:00–18:00", "18:00–19:00"];
const LEVEL_CLASS: Record<string, string> = { Vegyes: "mix", "Suli alsó": "low", "Suli felső": "high" };

const buildMail = `mailto:${BUILD.contact.email}?subject=${encodeURIComponent("Ajánlatkérés: salakpálya")}&body=${encodeURIComponent(
  BUILD.ask.map((a) => `${a}: `).join("\n"),
)}`;

export default function Page() {
  const [weekday, weekend] = PRICES.hourly;
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__head">
            <div>
              <p className="hero__kicker">
                <Icon name="pin" size={16} /> {CLUB.town}, {CLUB.street}
              </p>
              <h1 id="hero-title" className="hero__title">
                Salakpálya Érden, <em>este is lámpafénynél.</em>
              </h1>
            </div>
            <div className="hero__side">
              <p className="hero__lead">{COURT.intro}</p>
              <div className="btn-row">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <Icon name="phone" size={17} /> {CLUB.phone}
                </a>
                <a href="#edzesek" className="btn btn--ghost">
                  Edzés és tenisziskola
                </a>
              </div>
            </div>
          </div>
          <figure className="hero__figure">
            <div className="hero__photo">
              <Image src="/img/ejszakai-palya.jpg" alt="A Barango salakpályája alkonyatkor, égő reflektorokkal" fill priority sizes="(max-width: 1240px) 100vw, 1180px" />
            </div>
            <dl className="hero__facts">
              <div>
                <dt>Nyitva</dt>
                <dd>
                  {OPEN.days.toLowerCase()} {OPEN.hours}
                </dd>
              </div>
              <div>
                <dt>Hétköznap</dt>
                <dd>{fmt(weekday.price)} Ft/óra</dd>
              </div>
              <div>
                <dt>Hétvégén</dt>
                <dd>{fmt(weekend.price)} Ft/óra</dd>
              </div>
              <div>
                <dt>Bérlet</dt>
                <dd>
                  {fmt(PRICES.pass.price)} Ft/{PRICES.pass.hours} óra
                </dd>
              </div>
            </dl>
          </figure>
        </div>
      </section>

      {/* ——— pálya és árak ——— */}
      <section id="palya" className="band" aria-labelledby="palya-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Pálya és árak</Label>
              <h2 id="palya-title" className="title">
                Hétköznap, hétvégén, <em>bérlettel.</em>
              </h2>
            </div>
            <p className="intro">
              {COURT.booking} Minden nap <span className="nowrap">{OPEN.hours}</span> között, hétköznap és hétvégén is.
            </p>
          </div>
          <div className="reveal">
            <PriceBoard />
          </div>
          <div className="court reveal">
            <ul className="court__features">
              {COURT.features.map((f) => (
                <li key={f}>
                  <Icon name="check" size={18} /> {f}
                </li>
              ))}
            </ul>
            <div className="court__rules">
              <p>{COURT.play}</p>
              <p>{COURT.pay}</p>
              <p className="court__note">{COURT.note}</p>
            </div>
            <div className="court__events">
              <p className="court__events-label">Klubesemények</p>
              <p>{EVENTS.join(" · ")}</p>
              <small>Jelentkezés telefonon vagy e-mailben.</small>
            </div>
          </div>
        </div>
      </section>

      {/* ——— edzések ——— */}
      <section id="edzesek" className="band band--chalk" aria-labelledby="edzesek-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Edzések</Label>
              <h2 id="edzesek-title" className="title">
                Alapoktól <em>a meccshelyzetig.</em>
              </h2>
            </div>
            <p className="intro">
              {TRAINING.intro} {TRAINING.private}
            </p>
          </div>
          <div className="train">
            <article className="coach reveal">
              <div className="coach__top">
                <span className="coach__mono" aria-hidden="true">
                  PG
                </span>
                <div>
                  <h3>{COACH.name}</h3>
                  <p>{COACH.role}</p>
                </div>
              </div>
              <blockquote className="coach__quote">„{COACH.quote}”</blockquote>
              <dl className="coach__list">
                <div>
                  <dt>Fókusz</dt>
                  <dd>{COACH.focus.join(" · ")}</dd>
                </div>
                <div>
                  <dt>Edzésformák</dt>
                  <dd>{COACH.formats.join(" · ")}</dd>
                </div>
              </dl>
              <p className="coach__price">
                <Icon name="info" size={17} /> {TRAINING.prices}
              </p>
            </article>
            <div className="week reveal">
              <div className="week__head">
                <h3 className="subtitle">Heti edzésrend</h3>
                <p>{TRAINING.scheduleNote}</p>
              </div>
              <div className="week__grid" role="table" aria-label="Gyerekcsoportok heti beosztása">
                <div role="row" className="week__row week__row--head">
                  <span role="columnheader" className="week__corner" />
                  {DAYS.map((d) => (
                    <span role="columnheader" key={d}>
                      {d}
                    </span>
                  ))}
                </div>
                {SLOTS.map((slot) => (
                  <div role="row" key={slot} className="week__row">
                    <span role="rowheader" className="week__time">
                      {slot}
                    </span>
                    {DAYS.map((d) => {
                      const s = TRAINING.schedule.find((x) => x.day === d && x.time === slot);
                      return (
                        <span role="cell" key={d} className={`week__cell${s ? ` week__cell--${LEVEL_CLASS[s.level]}` : " week__cell--empty"}`}>
                          {s ? (
                            <>
                              <b>{s.level}</b>
                              <small>{s.group}</small>
                            </>
                          ) : (
                            <small>–</small>
                          )}
                        </span>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="join reveal">
            <h3 className="subtitle">Így jelentkezhetsz</h3>
            <ol className="steps">
              {TRAINING.steps.map((s) => (
                <li key={s.title}>
                  <b>{s.title}</b>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <ul className="tips">
              {TRAINING.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— tenisziskola ——— */}
      <section id="tenisziskola" className="band" aria-labelledby="tenisziskola-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Tenisziskola</Label>
              <h2 id="tenisziskola-title" className="title">
                Kis pályán kezdik, <em>nagyban folytatják.</em>
              </h2>
            </div>
            <p className="intro">{SCHOOL.intro}</p>
          </div>
          <div className="school">
            <div className="school__levels reveal">
              <Levels />
              <p>{SCHOOL.levelsText}</p>
            </div>
            <ul className="school__principles reveal">
              {SCHOOL.principles.map((p) => (
                <li key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="first reveal">
            <div className="first__text">
              <p className="first__label">Az első edzés</p>
              <p className="first__lead">{SCHOOL.firstSession}</p>
              <div className="btn-row">
                <a href={CLUB.consentPdf} className="btn btn--accent" download>
                  <Icon name="download" size={17} /> Szülői nyilatkozat (PDF)
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  <Icon name="phone" size={17} /> {SCHOOL.leader}
                </a>
              </div>
            </div>
            <dl className="first__rules">
              {SCHOOL.rules.map((r) => (
                <div key={r.title}>
                  <dt>{r.title}</dt>
                  <dd>{r.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ——— pályaépítés ——— */}
      <section id="palyaepites" className="band dark" aria-labelledby="palyaepites-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label light>Pályaépítés</Label>
              <h2 id="palyaepites-title" className="title">
                Salakpályát <em>építünk is.</em>
              </h2>
            </div>
            <p className="intro">{BUILD.intro}</p>
          </div>
          <div className="build">
            <figure className="build__figure reveal">
              <div className="build__photo">
                <Image src="/img/palyafelujitas.jpg" alt="Salakos pálya felújítás közben, friss salakkupacokkal és vonalakkal" fill sizes="(max-width: 900px) 100vw, 46vw" />
              </div>
              <figcaption>„{BUILD.lead}”</figcaption>
            </figure>
            <div className="build__side reveal">
              <div className="build__services">
                {BUILD.services.map((s, i) => (
                  <div key={s.title}>
                    <h3>
                      <span>{String(i + 1).padStart(2, "0")}</span> {s.title}
                    </h3>
                    <ul>
                      {s.items.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="offer reveal">
            <ol className="offer__steps">
              {BUILD.steps.map((s) => (
                <li key={s.title}>
                  <b>{s.title}</b>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="offer__ask">
              <p className="offer__label">Ajánlatkéréshez írd meg</p>
              <ul>
                {BUILD.ask.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p className="offer__who">{BUILD.contact.name}</p>
              <div className="btn-row">
                <a href={BUILD.contact.phoneHref} className="btn btn--accent">
                  <Icon name="phone" size={17} /> {BUILD.contact.phone}
                </a>
                <a href={buildMail} className="btn btn--ghost">
                  <Icon name="mail" size={17} /> Ajánlatkérés e-mailben
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— házirend ——— */}
      <section id="hazirend" className="band" aria-labelledby="hazirend-title">
        <div className="container rules">
          <div className="rules__side reveal">
            <Label>Házirend</Label>
            <h2 id="hazirend-title" className="title">
              A házirend <em>röviden.</em>
            </h2>
            <p className="intro">A pálya használatával, alkalmi díjjal vagy bérlettel, a házirendet is elfogadod.</p>
            <div className="rules__photo">
              <Image src="/img/labda-vonal.jpg" alt="Teniszlabda a salakpálya vonalán, a salakba nyomott Barango felirattal" fill sizes="(max-width: 900px) 60vw, 26vw" />
            </div>
          </div>
          <ol className="rules__list reveal">
            {HOUSE_RULES.map((r) => (
              <li key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band band--chalk" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <Label>Kapcsolat</Label>
            <h2 id="kapcsolat-title" className="title">
              Porcsinrózsa utca, <em>Érd.</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Pályafoglalás, edzés, tenisziskola</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                  <small>
                    {CLUB.contact}, {CLUB.contactRole}
                  </small>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
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
                    </a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Nyitva</dt>
                <dd>
                  {OPEN.days} {OPEN.hours}
                  <small>Parkoló a pálya mellett, ingyenesen.</small>
                </dd>
              </div>
            </dl>
            <div className="map">
              <iframe src={CLUB.mapsEmbed} title="A Barango Tenisz Club a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="visit__form reveal">
            <h3 className="subtitle">Írj nekünk</h3>
            <p>Pálya, bérlet, edzés vagy tenisziskola: {CLUB.contact} válaszol.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
