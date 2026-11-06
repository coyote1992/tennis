import Image from "next/image";
import { IconArrow, IconCalendar, IconCheck, IconFacebook, IconInstagram, IconMail, IconPhone, IconPin, IconTrophy, IconUsers } from "@/components/b/icons";
import { EnquiryForm } from "@/components/shared/EnquiryForm";
import { CLUB, COACHES, FACTS, GOALS, PROGRAMS, RESULTS, SQUADS, STORY, SUPPORTERS, TAX_ONE_PERCENT, TEAMS, TEAMS_NOTE } from "@/lib/site";

/** Team photos, captioned only as far as their file names on the club's site go. */
const TEAM_PHOTOS = [
  { src: "/img/szuperliga-2026.jpg", alt: "A PG Tenisz férfi Szuperliga-csapata 2026-ban", cap: "Férfi Szuperliga-csapat, 2026", wide: true },
  { src: "/img/noi-i-2026.jpg", alt: "A PG Tenisz női I. osztályú csapata 2026-ban", cap: "Női I. osztály, 2026" },
  { src: "/img/ferfi-ii-2026.jpg", alt: "A PG Tenisz férfi II. osztályú csapata 2026-ban", cap: "Férfi II. osztály, 2026" },
  { src: "/img/szuperliga-2024.jpg", alt: "A PG Tenisz Szuperliga-csapata kupával, 2024", cap: "Szuperliga, 2024: III. hely" },
];

const PODIUM = [
  { src: "/img/play-stay-2026.jpg", alt: "A PG Tenisz Play & Stay lánycsapata kupával", cap: "Play & Stay csapatbajnoki döntő, 2026: lánycsapat, I. hely" },
  { src: "/img/bp-l14-2026.jpg", alt: "A PG Tenisz L14-es csapata a dobogón", cap: "Budapest-bajnokság, 2026: L14 csapat, I. hely" },
  { src: "/img/ob-l14-2026.jpg", alt: "A PG Tenisz L14-es csapata érmekkel", cap: "Országos csapatbajnokság, 2026: L14, II. hely" },
];

const EVENT_PHOTOS = [
  { src: "/img/karacsony.jpg", alt: "Közös fotó a PG Karácsonyon", cap: "PG Karácsony, 2025" },
  { src: "/img/evzaro-foci.jpg", alt: "Évzáró focimeccs egy sátorcsarnokban", cap: "Évzáró foci, 2025" },
  { src: "/img/edzotabor-2025.jpg", alt: "Csoportkép a 2025-ös családi napon a salakpályán", cap: "Családi nap, 2025" },
];

export default function BHome() {
  const [head, ...coaches] = COACHES;
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">
              PG Tenisz · {CLUB.venue}, Budapest X.
            </p>
            <h1 id="hero-title" className="h1 reveal">
              A sport maga az élet. <em>Mindenre megtanít.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Versenytenisz és utánpótlás-nevelés {CLUB.founded} óta, a Play &amp; Stay-től a Szuperligáig. Edzéseink helyszíne a {CLUB.venue}.
              </p>
              <div className="hero__ctas">
                <a href="#jelentkezes" className="btn btn--accent">
                  Jelentkezés edzésre <IconArrow />
                </a>
                <a href={CLUB.courtPhoneHref} className="btn btn--ghost">
                  <IconPhone /> Pályabérlés
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/csaladi-nap.jpg"
              alt="Csoportkép a PG Tenisz játékosaival a salakpályán"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 60%" }}
            />
            <figcaption className="hero__caption">Családi nap, 2026. június 13.</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Számokban">
            {FACTS.map((f) => (
              <li className="fact" key={f.label}>
                <span className="fact__num">{f.num}</span>
                <span className="fact__label">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— The club (the dot court stands on the right) ——— */}
      <section id="egyesulet" className="section club" aria-labelledby="egyesulet-title">
        <div className="container">
          <p className="eyebrow reveal">Egyesület</p>
          <h2 id="egyesulet-title" className="h2 reveal">
            {CLUB.founded} óta. <em>Eredmény és közösség.</em>
          </h2>
          <p className="lead reveal">{STORY[0]}</p>

          <div className="story">
            <div className="story__text glass reveal">
              {STORY.slice(1).map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <figure className="story__photo snap reveal reveal--img">
              <Image src="/img/unnepeles.jpg" alt="Fiatal játékos ünnepel a salakpályán" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover", objectPosition: "50% 35%" }} />
            </figure>
          </div>

          <ul className="values glass reveal" aria-label="Céljaink">
            {GOALS.map((g) => (
              <li key={g.title}>
                <strong>{g.title}</strong>
                <span>{g.text}</span>
              </li>
            ))}
          </ul>

          <div className="squads reveal">
            <p className="label">
              <IconUsers /> Játékosaink korosztályonként
            </p>
            <ul className="squads__list">
              {SQUADS.map((s) => (
                <li key={s.name} className="glass">
                  <span className="squads__num">{s.count}</span>
                  <span className="squads__name">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Coaches (the racket stands on the left) ——— */}
      <section id="edzok" className="section coaches" aria-labelledby="edzok-title">
        <div className="container">
          <p className="eyebrow reveal">Edzőink</p>
          <h2 id="edzok-title" className="h2 reveal">
            Öt szakember. <em>Egy csapat.</em>
          </h2>
          <p className="lead reveal">Három teniszedző és két erőnléti edző. A vezetőedző 1994 óta edz, tanítványai közül többen WTA-, illetve ATP-játékosok lettek.</p>

          <article className="coach coach--head glass reveal">
            <figure className="coach__photo">
              <Image src={head.img} alt={`${head.name} portréja`} fill sizes="(max-width: 900px) 100vw, 26vw" style={{ objectFit: "cover", objectPosition: "50% 20%" }} />
            </figure>
            <div className="coach__body">
              <p className="tag tag--accent">{head.role}</p>
              <h3 className="h3 coach__name">{head.name}</h3>
              {head.note && <p className="coach__note">{head.note}</p>}
              <div className="coach__cols">
                <div>
                  <p className="label">Képesítések</p>
                  <ul className="checks">
                    {head.quals.map((q) => (
                      <li key={q}>
                        <IconCheck /> {q}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label">Pályafutás</p>
                  <ul className="career">
                    {head.career.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <ul className="coach-grid">
            {coaches.map((c) => (
              <li key={c.name} className="coach glass reveal">
                <figure className="coach__photo">
                  <Image src={c.img} alt={`${c.name} portréja`} fill sizes="(max-width: 900px) 40vw, 12vw" style={{ objectFit: "cover", objectPosition: "50% 20%" }} />
                </figure>
                <div className="coach__body">
                  <p className="tag">{c.role}</p>
                  <h3 className="h3 coach__name">{c.name}</h3>
                  <ul className="checks">
                    {c.quals.map((q) => (
                      <li key={q}>
                        <IconCheck /> {q}
                      </li>
                    ))}
                  </ul>
                  <p className="coach__career">{c.career.join(" · ")}</p>
                  {c.note && <p className="coach__note coach__note--small">{c.note}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Teams ——— */}
      <section id="csapatok" className="section teams" aria-labelledby="csapatok-title">
        <div className="container">
          <p className="eyebrow reveal">Csapataink</p>
          <h2 id="csapatok-title" className="h2 reveal">
            A Szuperligától <em>a III. osztályig.</em>
          </h2>
          <p className="lead reveal">{TEAMS_NOTE}</p>

          <ul className="team-grid">
            {TEAMS.map((t) => (
              <li key={t.name} className="teamcard glass reveal">
                <p className="label">
                  <IconTrophy /> MTSZ csapatbajnokság
                </p>
                <h3 className="h3">{t.name}</h3>
                <p className="teamcard__result">
                  <span>2026</span> {t.result}
                </p>
                <ul className="teamcard__history">
                  {t.history.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <ul className="team-photos">
            {TEAM_PHOTOS.map((p) => (
              <li key={p.src} className={p.wide ? "team-photos__wide" : undefined}>
                <figure className="snap reveal reveal--img">
                  <Image src={p.src} alt={p.alt} fill sizes={p.wide ? "(max-width: 900px) 100vw, 1200px" : "(max-width: 900px) 100vw, 33vw"} style={{ objectFit: "cover" }} />
                  <figcaption>{p.cap}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Results (the PG mark forms on the right) ——— */}
      <section id="eredmenyek" className="section results" aria-labelledby="eredmenyek-title">
        <div className="container">
          <p className="eyebrow reveal">Eredmények</p>
          <h2 id="eredmenyek-title" className="h2 h2--xl reveal">
            2026: <em>érmek itthon és külföldön.</em>
          </h2>
          <p className="lead reveal">Néhány a szezon eredményei közül: világdöntő, Tennis Europe-torna, országos és Budapest-bajnokság, szenior verseny.</p>

          <ul className="result-grid">
            {RESULTS.map((r) => (
              <li key={r.event} className="resultcard glass reveal">
                <div className="resultcard__top">
                  <span className={`tag${r.tag === "nemzetközi" ? " tag--accent" : ""}`}>{r.tag}</span>
                  <span className="resultcard__when">
                    <IconCalendar /> {r.when}
                  </span>
                </div>
                <h3 className="h3">{r.event}</h3>
                <ul className="resultcard__lines">
                  {r.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <ul className="podium">
            {PODIUM.map((p) => (
              <li key={p.src}>
                <figure className="snap snap--tall reveal reveal--img">
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 20vw" style={{ objectFit: "cover", objectPosition: "50% 35%" }} />
                  <figcaption>{p.cap}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Programmes (the big ball spins behind) ——— */}
      <section id="programok" className="section programs" aria-labelledby="programok-title">
        <div className="container">
          <p className="eyebrow reveal">Programok</p>
          <h2 id="programok-title" className="h2 reveal">
            Edzőtábor, családi nap, <em>PG Karácsony.</em>
          </h2>
          <p className="lead reveal">Az edzéseken túl: közös programok a játékosoknak és a családoknak.</p>

          <div className="programs__grid">
            <ol className="timeline glass reveal">
              {PROGRAMS.map((p) => (
                <li key={p.date + p.title}>
                  <span className="timeline__date">{p.date}</span>
                  <span className="timeline__title">
                    {p.title}
                    {p.note && <small>{p.note}</small>}
                  </span>
                </li>
              ))}
            </ol>
            <ul className="programs__photos">
              {EVENT_PHOTOS.map((p) => (
                <li key={p.src}>
                  <figure className="snap reveal reveal--img">
                    <Image src={p.src} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
                    <figcaption>{p.cap}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Training enquiry ——— */}
      <section id="jelentkezes" className="section signup" aria-labelledby="jelentkezes-title">
        <div className="container signup__grid">
          <div>
            <p className="eyebrow reveal">Jelentkezés</p>
            <h2 id="jelentkezes-title" className="h2 reveal">
              Csatlakozz <em>a PG-közösséghez.</em>
            </h2>
            <p className="lead reveal">
              Gyereknek, versenyzőnek vagy felnőttként: írd meg, kinek keresel edzést, és felvesszük veled a kapcsolatot.
            </p>
            <ul className="signup__points reveal">
              <li>
                Edzés, jelentkezés: <a href={CLUB.coachPhoneHref}>{CLUB.coachPhone}</a> ({CLUB.coachName})
              </li>
              <li>
                Pályabérlés a {CLUB.venue}ban: <a href={CLUB.courtPhoneHref}>{CLUB.courtPhone}</a>
              </li>
              <li>
                E-mail: <a href={CLUB.emailHref}>{CLUB.email}</a>
              </li>
            </ul>
            <figure className="signup__photo snap reveal reveal--img">
              <Image src="/img/pacsi.jpg" alt="Két fiatal játékos pacsizik a salakpályán" fill sizes="(max-width: 900px) 100vw, 36vw" style={{ objectFit: "cover", objectPosition: "50% 30%" }} />
            </figure>
          </div>
          <div className="signup__form glass reveal">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Kőér <span className="nobr">utca 2/b.</span> <em>Itt edzünk.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Edzések helyszíne</span>
                    <span className="contact__name">{CLUB.venue}</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.venueAddress}
                    </a>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Edzés, jelentkezés</span>
                    <a href={CLUB.coachPhoneHref}>{CLUB.coachPhone}</a>
                    <span className="contact__line">{CLUB.coachName}, vezetőedző</span>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Pályabérlés</span>
                    <a href={CLUB.courtPhoneHref}>{CLUB.courtPhone}</a>
                    <span className="contact__line">{CLUB.venue}</span>
                  </div>
                </li>
                <li>
                  <IconMail />
                  <div>
                    <span className="contact__label">E-mail</span>
                    <a href={CLUB.emailHref}>{CLUB.email}</a>
                  </div>
                </li>
              </ul>
              <div className="social">
                <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <IconFacebook />
                </a>
                <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <IconInstagram />
                </a>
              </div>
              <div className="visit__actions">
                <a href="#jelentkezes" className="btn btn--accent">
                  Jelentkezés <IconArrow />
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconPin /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__map glass reveal">
              <iframe title="A Kőér Tenisz Klub a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          <div className="support">
            <div className="support__tax glass reveal">
              <p className="label">Adó 1%</p>
              <h3 className="h3">
                Támogasd az egyesületet <em>adód 1%-ával.</em>
              </h3>
              <p className="support__number">
                <span>Adószám</span> {CLUB.taxNumber}
              </p>
              <p className="muted">{TAX_ONE_PERCENT}</p>
              <dl className="support__data">
                <div>
                  <dt>Név</dt>
                  <dd>{CLUB.full}</dd>
                </div>
                <div>
                  <dt>Székhely</dt>
                  <dd>{CLUB.seat}</dd>
                </div>
                <div>
                  <dt>Nyilvántartási szám</dt>
                  <dd>{CLUB.register}</dd>
                </div>
                <div>
                  <dt>Bankszámla</dt>
                  <dd>{CLUB.bank}</dd>
                </div>
                <div>
                  <dt>Elnökség</dt>
                  <dd>{CLUB.leaders.join(", ")}</dd>
                </div>
              </dl>
            </div>
            <div className="support__partners reveal">
              <p className="label">Támogatóink</p>
              <ul className="partners">
                {SUPPORTERS.map((s) => (
                  <li key={s.name}>
                    <Image src={s.img} alt={s.name} width={210} height={90} style={{ objectFit: "contain" }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
