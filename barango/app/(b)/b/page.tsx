import Image from "next/image";
import { Prices } from "@/components/b/Prices";
import { IconArrow, IconCalendar, IconCard, IconCheck, IconClock, IconDownload, IconMail, IconPhone, IconPin, IconRain, IconUsers } from "@/components/b/icons";
import { ContactForm } from "@/components/shared/ContactForm";
import { BUILD, CLUB, COACH, COURT, EVENTS, HOUSE_RULES, OPEN, PRICES, SCHOOL, TRAINING } from "@/lib/site";

/** keep prices and phone numbers on one line */
const nb = (t: string) => t.replace(/ /g, " ");
const ft = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Ft`;

const HERO_FACTS = [
  { num: ft(PRICES.hourly[0].price), label: "óradíj hétköznap, diákoknak 500 Ft-tal kevesebb" },
  { num: "7–22", label: "minden nap nyitva, sötétedéstől világítással" },
  { num: `${PRICES.pass.hours} óra`, label: `bérlet ${ft(PRICES.pass.price)}, 6 hétre` },
];

/** the weekly schedule, grouped by day */
const DAYS = TRAINING.schedule.reduce<{ day: string; slots: typeof TRAINING.schedule }[]>((acc, s) => {
  const last = acc[acc.length - 1];
  if (last && last.day === s.day) last.slots.push(s);
  else acc.push({ day: s.day, slots: [s] });
  return acc;
}, []);

/** every slot is a children's group, so the group name goes in the card's header once */
const GROUPS = [...new Set(TRAINING.schedule.map((s) => s.group))];
const ONE_GROUP = GROUPS.length === 1;
/** keep "tenisziskola-vezető" together */
const nbh = (t: string) => t.replace(/-/g, "\u2011");

/** three house rules worth knowing before the first booking; the rest fold out */
const KEY_RULES = ["Cipő", "Lehúzás", "Érkezés"];

const buildMail = `mailto:${BUILD.contact.email}?subject=${encodeURIComponent("Ajánlatkérés: salakpálya")}&body=${encodeURIComponent(
  ["Helyszín (település): ", "Hány pálya: ", "Építés / felújítás / karbantartás / sátor: ", "Tervezett határidő: "].join("\n"),
)}`;

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">
              {CLUB.name} · {CLUB.town}
            </p>
            <h1 id="hero-title" className="h1 reveal">
              Salakpálya Érden, <em>reggel héttől este tízig.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                {COURT.intro} {COURT.booking}
              </p>
              <div className="hero__ctas">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> {nb(CLUB.phone)}
                </a>
                <a href="#palya" className="btn btn--ghost">
                  Árak <IconArrow />
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image src="/img/ejszakai-palya.jpg" alt="A Barango salakpályája alkonyatkor, égő reflektorokkal és zöld szélfogó hálóval" fill priority sizes="(max-width: 1296px) 100vw, 1200px" />
            <figcaption className="hero__caption">Esti játék világításban</figcaption>
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

      {/* ——— Pálya és árak ——— */}
      <section id="palya" className="section" aria-labelledby="palya-title">
        <div className="container">
          <p className="eyebrow reveal">Pálya és árak</p>
          <h2 id="palya-title" className="h2 reveal">
            Óradíj vagy bérlet, <em>előre foglalva.</em>
          </h2>
          <p className="lead reveal">
            {COURT.booking} Hétköznap és hétvégén is {OPEN.hours} között játszhatsz; a bérlet a hét bármely napján jó.
          </p>

          <div className="court">
            <figure className="court__photo reveal reveal--img">
              <Image src="/img/labda-vonal.jpg" alt="Teniszlabda a salakpálya vonalán, mellette a salakba nyomott BARANGO felirat" fill sizes="(max-width: 900px) 100vw, 320px" />
            </figure>

            <div className="court__body">
              <div className="reveal">
                <Prices />
              </div>

              <article className="pass glass reveal">
                <div className="pass__top">
                  <p className="label">
                    <IconCard /> {PRICES.pass.title}
                  </p>
                  <p className="pass__price">
                    <strong>{nb(ft(PRICES.pass.price))}</strong> / {PRICES.pass.hours} óra
                  </p>
                </div>
                <p className="pass__text">
                  {PRICES.pass.hours} órás pályabérlet, {PRICES.pass.valid}.
                </p>
                <p className="pass__note">
                  <IconClock /> {PRICES.pass.change}
                </p>
              </article>
            </div>
          </div>

          <div className="court-info">
            <div className="court-info__card glass reveal">
              <p className="label">A pálya</p>
              <ul className="chips court-info__chips">
                {COURT.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <ul className="checks">
                <li>
                  <IconCheck />
                  <span>{COURT.play}</span>
                </li>
                <li>
                  <IconCheck />
                  <span>{COURT.pay}</span>
                </li>
                <li>
                  <IconCheck />
                  <span>{COURT.note}</span>
                </li>
              </ul>
            </div>

            <div className="court-info__card glass reveal">
              <p className="label">
                <IconCalendar /> Foglalás
              </p>
              <p className="court-info__big">
                <a href={CLUB.phoneHref}>{nb(CLUB.phone)}</a>
              </p>
              <p className="muted">
                {CLUB.contact} · <a href={CLUB.emailHref}>{CLUB.email}</a>
              </p>
              <div className="book__ctas">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> Hívás
                </a>
                <a href="#urlap" className="btn btn--ghost">
                  <IconMail /> Írj nekünk
                </a>
              </div>
              <p className="events">
                <span className="events__label">Klubesemények</span>
                <span className="events__list">
                  {EVENTS.map((e) => (
                    <span key={e} className="nobr">
                      {e}
                    </span>
                  ))}
                </span>
                <span className="events__hint">Az időpontokról telefonon érdeklődj.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Edzések ——— */}
      <section id="edzesek" className="section" aria-labelledby="edzesek-title">
        <div className="container">
          <p className="eyebrow reveal">Edzések</p>
          <h2 id="edzesek-title" className="h2 reveal">
            Kezdőtől <em>a meccshelyzetig.</em>
          </h2>
          <p className="lead reveal">{TRAINING.intro}</p>

          <div className="training">
            <article className="coach glass reveal">
              <div className="coach__head">
                <span className="coach__mono" aria-hidden="true">
                  {COACH.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
                <div>
                  <h3 className="h3">{COACH.name}</h3>
                  <p className="coach__role">{COACH.role}</p>
                </div>
              </div>
              <blockquote className="coach__quote">„{COACH.quote}”</blockquote>
              <div className="coach__tags">
                <p className="coach__tag-label">Fókusz</p>
                <ul className="chips">
                  {COACH.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p className="coach__tag-label">Edzésformák</p>
                <ul className="chips">
                  {COACH.formats.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="week glass reveal">
              <div className="week__head">
                <p className="label">
                  <IconCalendar /> Heti edzésrend{ONE_GROUP ? ` · ${GROUPS[0]}ok` : ""}
                </p>
                <p className="week__note">
                  <IconRain /> {TRAINING.scheduleNote}
                </p>
              </div>
              <ol className="week__days">
                {DAYS.map((d) => (
                  <li key={d.day} className="week__day">
                    <span className="week__name">{d.day}</span>
                    <ul className="week__slots">
                      {d.slots.map((s) => (
                        <li key={s.time} className="slot">
                          <span className="slot__time">{nb(s.time)}</span>
                          {!ONE_GROUP && <span className="slot__group">{s.group}</span>}
                          <span className="slot__level">{s.level}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
              <p className="week__foot">
                {TRAINING.private} {TRAINING.prices}
              </p>
            </article>
          </div>

          <div className="signup glass reveal">
            <div className="signup__head">
              <p className="label">
                <IconUsers /> Jelentkezés
              </p>
              <a href={CLUB.phoneHref} className="btn btn--accent btn--sm">
                <IconPhone /> {nb(CLUB.phone)}
              </a>
            </div>
            <ol className="steps">
              {TRAINING.steps.map((s, i) => (
                <li key={s.title} className="step">
                  <span className="step__n">{i + 1}</span>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </li>
              ))}
            </ol>
            <ul className="checks signup__tips">
              {TRAINING.tips.map((t) => (
                <li key={t}>
                  <IconCheck />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Tenisziskola ——— */}
      <section id="tenisziskola" className="section" aria-labelledby="tenisziskola-title">
        <div className="container">
          <p className="eyebrow reveal">Tenisziskola</p>
          <h2 id="tenisziskola-title" className="h2 reveal">
            Piros, narancs, zöld: <em>lépésről lépésre.</em>
          </h2>
          <p className="lead reveal">{SCHOOL.intro}</p>

          <div className="levels glass reveal">
            <ol className="levels__row" aria-label="Szintek">
              {SCHOOL.levels.map((l, i) => (
                <li key={l} className={`level level--${i + 1}`}>
                  <span className="level__dot" aria-hidden="true" />
                  {l}
                </li>
              ))}
            </ol>
            <p className="levels__text">{SCHOOL.levelsText}</p>
          </div>

          <ul className="principles">
            {SCHOOL.principles.map((p) => (
              <li key={p.title} className="principle glass reveal">
                <strong>{p.title}</strong>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>

          <div className="school">
            <article className="first glass reveal">
              <p className="label">Az első edzés</p>
              <p className="first__text">{SCHOOL.firstSession}</p>
              <div className="book__ctas">
                <a href={CLUB.consentPdf} className="btn btn--accent" download>
                  <IconDownload /> Szülői nyilatkozat (PDF)
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  <IconPhone /> Jelentkezés
                </a>
              </div>
              <p className="muted first__who">
                {SCHOOL.leader}, {nbh(CLUB.contactRole)} · <a href={CLUB.phoneHref}>{nb(CLUB.phone)}</a> · <a href={CLUB.emailHref}>{CLUB.email}</a>
              </p>
            </article>

            <details className="rules glass reveal">
              <summary>
                <span className="rules__title">A tenisziskola szabályai</span>
                <span className="rules__hint">Díj, pótlás, kijelentkezés · {SCHOOL.rules.length} pont</span>
              </summary>
              <dl className="rulelist">
                {SCHOOL.rules.map((r) => (
                  <div key={r.title}>
                    <dt>{r.title}</dt>
                    <dd>{r.text}</dd>
                  </div>
                ))}
              </dl>
            </details>
          </div>
        </div>
      </section>

      {/* ——— Pályaépítés ——— */}
      <section id="palyaepites" className="section" aria-labelledby="palyaepites-title">
        <div className="container">
          <p className="eyebrow reveal">Pályaépítés</p>
          <h2 id="palyaepites-title" className="h2 reveal">
            Salakpályát építünk, <em>felújítunk, gondozunk.</em>
          </h2>
          <p className="lead reveal">
            {BUILD.lead} {BUILD.intro}
          </p>

          <div className="build">
            <figure className="build__photo reveal reveal--img">
              <Image src="/img/palyafelujitas.jpg" alt="Salakpálya felújítás közben: friss salakkupacok és kifeszített vonalak" fill sizes="(max-width: 900px) 100vw, 560px" />
              <figcaption className="hero__caption">Pályafelújítás</figcaption>
            </figure>
            <div className="build__contact glass reveal">
              <p className="label">Ajánlatkérés</p>
              <p className="build__name">{BUILD.contact.name}</p>
              <p className="muted">Ajánlatkéréshez írd meg:</p>
              <ul className="checks">
                {BUILD.ask.map((a) => (
                  <li key={a}>
                    <IconCheck />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <div className="book__ctas">
                <a href={BUILD.contact.phoneHref} className="btn btn--accent">
                  <IconPhone /> {nb(BUILD.contact.phone)}
                </a>
                <a href={buildMail} className="btn btn--ghost">
                  <IconMail /> E-mail
                </a>
              </div>
              <p className="muted build__mail">{BUILD.contact.email}</p>
            </div>
          </div>

          <ul className="services">
            {BUILD.services.map((s) => (
              <li key={s.title} className="service glass reveal">
                <h3 className="h3">{s.title}</h3>
                <ul className="checks">
                  {s.items.map((it) => (
                    <li key={it}>
                      <IconCheck />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <ol className="steps steps--build reveal">
            {BUILD.steps.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step__n">{i + 1}</span>
                <strong>{s.title}</strong>
                <span>{s.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Házirend ——— */}
      <section id="hazirend" className="section" aria-labelledby="hazirend-title">
        <div className="container">
          <p className="eyebrow reveal">Házirend</p>
          <h2 id="hazirend-title" className="h2 reveal">
            Hogy a salak <em>sokáig jó maradjon.</em>
          </h2>
          <p className="lead reveal">A pálya használatával (alkalmi díjjal vagy bérlettel) a házirendet is elfogadod. A legfontosabbak:</p>

          <ul className="keyrules">
            {HOUSE_RULES.filter((r) => KEY_RULES.includes(r.title)).map((r) => (
              <li key={r.title} className="keyrule glass reveal">
                <strong>{r.title}</strong>
                <span>{r.text}</span>
              </li>
            ))}
          </ul>

          <details className="rules glass reveal">
            <summary>
              <span className="rules__title">A teljes házirend</span>
              <span className="rules__hint">{HOUSE_RULES.length} pont</span>
            </summary>
            <ol className="rulelist rulelist--numbered">
              {HOUSE_RULES.map((r) => (
                <li key={r.title}>
                  <strong>{r.title}</strong>
                  <span>{r.text}</span>
                </li>
              ))}
            </ol>
          </details>
        </div>
      </section>

      {/* ——— Kapcsolat ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Foglalj időpontot: <em>hívj vagy írj.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Pálya, edzés, tenisziskola</span>
                    <a href={CLUB.phoneHref}>{nb(CLUB.phone)}</a>
                    <span className="contact__name">
                      {CLUB.contact}, {nbh(CLUB.contactRole)}
                    </span>
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
                      {CLUB.address.replace(/ (\d+\.)$/, " $1")}
                    </a>
                    <span className="contact__name">Az utca felől vagy a gépkocsibeálló felőli közlekedőn; parkoló a pálya mellett.</span>
                  </div>
                </li>
                <li>
                  <IconClock />
                  <div>
                    <span className="contact__label">Nyitva</span>
                    <span className="contact__strong">
                      {OPEN.days} {nb(OPEN.hours)}
                    </span>
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
              <p className="visit__note">
                Pályaépítés: {BUILD.contact.name}, <a href={BUILD.contact.phoneHref}>{nb(BUILD.contact.phone)}</a>
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
            <iframe title="A Barango Tenisz Club a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
