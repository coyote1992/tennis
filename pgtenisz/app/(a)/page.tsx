import Image from "next/image";
import { EnquiryForm } from "@/components/shared/EnquiryForm";
import { CLUB, COACHES, FACTS, GOALS, PROGRAMS, RESULTS, SQUADS, STORY, SUPPORTERS, TAX_ONE_PERCENT, TEAMS, TEAMS_NOTE } from "@/lib/site";

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Chapter({ n, children, left = false }: { n: string; children: React.ReactNode; left?: boolean }) {
  return (
    <p className={`chapter${left ? " chapter--left" : ""}`}>
      <span className="chapter__n">{n}.</span> {children}
    </p>
  );
}

const TAG_LABEL: Record<string, string> = { nemzetközi: "Nemzetközi", országos: "Országos", Budapest: "Budapest", szenior: "Szenior" };

export default function Home() {
  const [motto1, motto2] = CLUB.motto.split(". ");
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero dark" aria-labelledby="hero-title">
        <div className="container">
          <Image src="/img/logo-vilagos.png" alt="" width={560} height={504} className="hero__crest" priority />
          <p className="hero__est">
            Budapest · {CLUB.venue}
            <span className="hero__est-more"> · {CLUB.founded} óta</span>
          </p>
          <h1 id="hero-title">
            {motto1}.
            <em>{motto2}</em>
          </h1>
          <p className="hero__lead">
            A PG Tenisz és Sport Club Egyesület edzést és versenylehetőséget ad gyerekeknek és felnőtteknek: a Play &amp; Stay első ütéseitől a Férfi
            Szuperligáig.
          </p>
          <div className="btn-row">
            <a href="#jelentkezes" className="btn btn--accent">
              Jelentkezés edzésre <Arrow />
            </a>
            <a href={CLUB.courtPhoneHref} className="btn btn--ghost">
              Pályabérlés: {CLUB.courtPhone}
            </a>
          </div>
          <figure className="hero__mat">
            <div className="hero__mat-inner">
              <Image src="/img/csoportkep.jpg" alt="Csoportkép a PG Tenisz játékosaival a salakpályán" fill priority sizes="(max-width: 1100px) 100vw, 1060px" />
            </div>
            <figcaption>Csoportkép a salakon, 2026 májusában.</figcaption>
          </figure>
          <ul className="pillars">
            {FACTS.map((f) => (
              <li key={f.label}>
                <b>{f.num}</b>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— I. egyesület ——— */}
      <section id="egyesulet" className="band" aria-labelledby="egyesulet-title">
        <div className="container">
          <div className="story">
            <div className="story__body reveal">
              <Chapter n="I" left>
                Az egyesület
              </Chapter>
              <h2 id="egyesulet-title" className="title">
                Sportolókat nevelünk, <em>és jó embereket.</em>
              </h2>
              {STORY.map((p) => (
                <p key={p.slice(0, 24)} className="story__p">
                  {p}
                </p>
              ))}
            </div>
            <figure className="photo-mat story__photo reveal">
              <div className="photo-mat__inner">
                <Image src="/img/pacsi.jpg" alt="Két fiatal PG-játékos pacsizik a salakpályán" fill sizes="(max-width: 960px) 100vw, 460px" />
              </div>
              <figcaption>Pacsi a salakon.</figcaption>
            </figure>
          </div>
          <ul className="goals reveal">
            {GOALS.map((g) => (
              <li key={g.title}>
                <b>{g.title}</b>
                <span>{g.text}</span>
              </li>
            ))}
          </ul>
          <div className="squads reveal" aria-label="Játékosaink korosztályonként">
            <p className="squads__title">Játékosaink</p>
            <ul>
              {SQUADS.map((s) => (
                <li key={s.name}>
                  <b>{s.count}</b>
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— II. edzők ——— */}
      <section id="edzok" className="band band--paper2" aria-labelledby="edzok-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="II">Edzőink</Chapter>
            <h2 id="edzok-title" className="title title--center">
              Öt szakember, <em>egy szemlélet.</em>
            </h2>
            <p className="intro intro--center">Teniszedzők és erőnléti edzők: válogatott múlttal, licencekkel, és évtizedes tapasztalattal az utánpótlás-nevelésben.</p>
          </div>
          <div className="coaches">
            {COACHES.map((c, i) => (
              <article key={c.name} className={`coach reveal${i === 0 ? " coach--lead" : ""}`}>
                <div className="coach__frame">
                  <Image src={c.img} alt={c.name} fill sizes="(max-width: 640px) 80vw, (max-width: 1100px) 40vw, 300px" />
                </div>
                <div className="coach__body">
                  <p className="coach__role">{c.role}</p>
                  <h3>{c.name}</h3>
                  <ul className="coach__quals">
                    {c.quals.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                  {i === 0 && (
                    <ul className="coach__career">
                      {c.career.map((q) => (
                        <li key={q}>{q}</li>
                      ))}
                    </ul>
                  )}
                  {i !== 0 && <p className="coach__career-line">{c.career.join(" · ")}</p>}
                  {c.note && <p className="coach__note">{c.note}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— III. csapatok ——— */}
      <section id="csapatok" className="band dark" aria-labelledby="csapatok-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="III">Csapataink</Chapter>
            <h2 id="csapatok-title" className="title title--center">
              Négy felnőtt csapat, <em>a Szuperligáig.</em>
            </h2>
            <p className="intro intro--center">{TEAMS_NOTE}</p>
          </div>
          <div className="league reveal">
            <p className="league__title">MTSZ csapatbajnokság</p>
            <table className="league__table">
              <thead>
                <tr>
                  <th scope="col">Csapat</th>
                  <th scope="col">2026</th>
                  <th scope="col">Korábban</th>
                </tr>
              </thead>
              <tbody>
                {TEAMS.map((t) => (
                  <tr key={t.name}>
                    <th scope="row">{t.name}</th>
                    <td className="league__now">{t.result}</td>
                    <td className="league__hist">
                      {t.history.map((h) => (
                        <span key={h}>{h}</span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="team-photos">
            {[
              { src: "/img/szuperliga-2024.jpg", alt: "A Férfi Szuperliga-csapat a 2024-es harmadik hellyel", cap: "Férfi Szuperliga, 2024: III. hely" },
              { src: "/img/noi-i-2026.jpg", alt: "A női I. osztályú csapat 2026-ban", cap: "Női I. osztály, 2026" },
              { src: "/img/ferfi-ii-2026.jpg", alt: "A férfi II. osztályú csapat 2026-ban", cap: "Férfi II. osztály, 2026" },
            ].map((p) => (
              <figure key={p.src} className="team-photo reveal">
                <div className="team-photo__inner">
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 860px) 100vw, 380px" />
                </div>
                <figcaption>{p.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ——— IV. eredmények ——— */}
      <section id="eredmenyek" className="band" aria-labelledby="eredmenyek-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="IV">Eredmények</Chapter>
            <h2 id="eredmenyek-title" className="title title--center">
              2026, <em>érmekben.</em>
            </h2>
            <p className="intro intro--center">
              Korosztályos versenyzőink a hazai élmezőnyhöz tartoznak: Budapest-bajnokság, országos bajnokság, Tennis Europe és ITF-tornák. Néhány kiemelt
              eredmény idénre.
            </p>
          </div>
          <div className="results">
            {RESULTS.map((r) => (
              <article key={r.event} className="result reveal">
                <p className="result__tag">{TAG_LABEL[r.tag]}</p>
                <h3>{r.event}</h3>
                <p className="result__when">{r.when}</p>
                <ul>
                  {r.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="podiums reveal">
            {[
              { src: "/img/unnepeles.jpg", alt: "Fiatal PG-játékos ünnepel a salakpályán" },
              { src: "/img/play-stay-2026.jpg", alt: "A Play & Stay lánycsapat a kupával" },
              { src: "/img/ob-l14-2026.jpg", alt: "Az L14-es lánycsapat az országos csapatbajnokság dobogóján" },
              { src: "/img/bp-l14-2026.jpg", alt: "Az L14-es csapat a Budapest-bajnokság kupájával" },
            ].map((p) => (
              <figure key={p.src} className="photo-mat">
                <div className="photo-mat__inner photo-mat__inner--tall">
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 860px) 50vw, 270px" />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ——— V. programok ——— */}
      <section id="programok" className="band band--paper2" aria-labelledby="programok-title">
        <div className="container">
          <div className="diary-wrap">
            <div className="reveal">
              <Chapter n="V" left>
                Programok
              </Chapter>
              <h2 id="programok-title" className="title">
                Edzőtábor, családi nap, <em>évzáró foci.</em>
              </h2>
              <p className="diary__intro">A PG nem csak edzés: nyári edzőtábor, családi napok, közös sportnapok más klubokkal, karácsony és évzáró.</p>
              <ol className="diary">
                {PROGRAMS.map((p) => (
                  <li key={p.date + p.title}>
                    <span className="diary__date">{p.date}</span>
                    <span className="diary__title">
                      {p.title}
                      {p.note && <small>{p.note}</small>}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="diary__photos reveal">
              <figure className="photo-mat">
                <div className="photo-mat__inner">
                  <Image src="/img/tabor.jpg" alt="Gyerekek és edzők csoportképe a salakpályán" fill sizes="(max-width: 960px) 100vw, 480px" />
                </div>
                <figcaption>Csoportkép, 2026 júliusában.</figcaption>
              </figure>
              <div className="diary__pair">
                <figure className="photo-mat">
                  <div className="photo-mat__inner">
                    <Image src="/img/karacsony.jpg" alt="PG karácsony, csoportkép" fill sizes="(max-width: 960px) 50vw, 235px" />
                  </div>
                </figure>
                <figure className="photo-mat">
                  <div className="photo-mat__inner">
                    <Image src="/img/evzaro-foci.jpg" alt="Évzáró foci a sátorban" fill sizes="(max-width: 960px) 50vw, 235px" />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— VI. jelentkezés ——— */}
      <section id="jelentkezes" className="band" aria-labelledby="jelentkezes-title">
        <div className="container">
          <div className="signup">
            <div className="signup__aside reveal">
              <Chapter n="VI" left>
                Jelentkezés
              </Chapter>
              <h2 id="jelentkezes-title" className="title">
                Csatlakozz <em>a csapatunkhoz.</em>
              </h2>
              <p>Gyereknek, versenyzőnek vagy felnőttnek: írd meg, kinek keresel edzést, és felvesszük veled a kapcsolatot.</p>
              <div className="phones">
                <a href={CLUB.coachPhoneHref}>
                  <small>Edzés · {CLUB.coachName}</small>
                  {CLUB.coachPhone}
                </a>
                <a href={CLUB.courtPhoneHref}>
                  <small>Pályabérlés · {CLUB.venue}</small>
                  {CLUB.courtPhone}
                </a>
                <a href={CLUB.emailHref}>
                  <small>E-mail</small>
                  {CLUB.email}
                </a>
              </div>
            </div>
            <div className="reveal">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ——— VII. kapcsolat ——— */}
      <section id="kapcsolat" className="band dark dark--deep" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="visit">
            <div className="reveal">
              <Chapter n="VII" left>
                Kapcsolat
              </Chapter>
              <h2 id="kapcsolat-title" className="title">
                Kőér utca 2/b. <em>Ott edzünk.</em>
              </h2>
              <dl className="visit__list">
                <div>
                  <dt>Edzések helyszíne</dt>
                  <dd>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.venue}
                    </a>
                    <small>{CLUB.venueAddress}</small>
                  </dd>
                </div>
                <div>
                  <dt>Edzés</dt>
                  <dd>
                    <a href={CLUB.coachPhoneHref}>{CLUB.coachPhone}</a>
                    <small>{CLUB.coachName}, vezetőedző</small>
                  </dd>
                </div>
                <div>
                  <dt>Pályabérlés</dt>
                  <dd>
                    <a href={CLUB.courtPhoneHref}>{CLUB.courtPhone}</a>
                    <small>{CLUB.venue}</small>
                  </dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a href={CLUB.emailHref}>{CLUB.email}</a>
                  </dd>
                </div>
              </dl>
              <div className="btn-row">
                <a className="btn btn--accent" href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Útvonaltervezés <Arrow />
                </a>
                <a className="btn btn--ghost" href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a className="btn btn--ghost" href={CLUB.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
            </div>
            <div className="map reveal">
              <iframe src={CLUB.mapsEmbed} title="A Kőér Tenisz Klub a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          <div className="support reveal">
            <div className="tax">
              <p className="tax__kicker">Támogasd adód 1%-ával</p>
              <p className="tax__num">{CLUB.taxNumber}</p>
              <p className="tax__text">{TAX_ONE_PERCENT}</p>
            </div>
            <dl className="assoc">
              <div>
                <dt>Egyesület</dt>
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

          <div className="supporters reveal">
            <p className="supporters__title">Támogatóink</p>
            <ul>
              {SUPPORTERS.map((s) => (
                <li key={s.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.name} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
