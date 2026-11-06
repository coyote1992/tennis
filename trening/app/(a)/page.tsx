import Image from "next/image";
import { EnquiryForm } from "@/components/shared/EnquiryForm";
import {
  ADULT_GROUPS,
  BOOKING_STEPS,
  CLUB,
  CLUB_LIFE,
  COACH_RATE,
  EVENTS,
  FACILITIES,
  FACTS,
  MISSION,
  PROGRAMS,
  PUB,
  SEASONS,
  STORY,
  VALUES,
} from "@/lib/site";

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

const MONTHS = ["jan", "feb", "már", "ápr", "máj", "jún", "júl", "aug", "szep", "okt", "nov", "dec"];
// day-of-year spans (non-leap) for the two seasons Nemes Attila gave: summer 05.01–09.30, winter 10.15–04.15
const pct = (d: number) => `${((d - 1) / 365) * 100}%`;
const RIBBON = [
  { from: 1, to: 105, kind: "tel" },
  { from: 121, to: 273, kind: "nyar" },
  { from: 288, to: 365, kind: "tel" },
];

const FACILITY_IMG: Record<string, { src: string; alt: string }> = {
  tenisz: { src: "/img/salakpalya.jpg", alt: "Adogató játékos a szabadtéri salakpályán" },
  foci: { src: "/img/focipalya.jpg", alt: "A kivilágított műfüves focipálya a háló mögül" },
  belter: { src: "/img/biliard.jpg", alt: "Biliárdasztal a főépületben" },
};

export default function Home() {
  const [area, years, events, people] = FACTS;
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero dark" aria-labelledby="hero-title">
        <div className="container">
          <p className="hero__est">Békéscsaba · Sport- és Szabadidőközpont</p>
          <h1 id="hero-title">
            Tréning Center
            <em>Tenisz, foci és közösség, több mint 20 éve.</em>
          </h1>
          <p className="hero__lead">
            Három salakos teniszpálya, télen fűtött sátorral; két kivilágított műfüves focipálya; söröző, beltéri sportok és rendezvényhelyszín egy
            15 000 m²-es sporttelepen.
          </p>
          <div className="btn-row">
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
              Foglalj pályát <Arrow />
            </a>
            <a href="#jelentkezes" className="btn btn--ghost">
              Kérj ajánlatot
            </a>
          </div>
          <figure className="hero__mat">
            <div className="hero__mat-inner">
              <Image src="/img/teli-sator.jpg" alt="A fűtött téli sátor a salakos teniszpályák felett" fill priority sizes="(max-width: 1100px) 100vw, 1060px" />
            </div>
            <figcaption>Télen fűtött sátor alatt a salakon · Tréning Center, Békéscsaba</figcaption>
          </figure>
          <ul className="pillars">
            <li>
              <b>3</b>
              <span>salakos teniszpálya</span>
            </li>
            <li>
              <b>2</b>
              <span>műfüves focipálya</span>
            </li>
            <li>
              <b>{area.num}</b>
              <span>{area.label}</span>
            </li>
            <li>
              <b>{years.num}</b>
              <span>{years.label}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— I. pályák ——— */}
      <section id="palyak" className="band" aria-labelledby="palyak-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="I">A sporttelep</Chapter>
            <h2 id="palyak-title" className="title title--center">
              Salak, műfű <em>és egy jó asztal.</em>
            </h2>
            <p className="intro intro--center">{STORY}</p>
          </div>
          <div className="facilities">
            {FACILITIES.map((f) => (
              <article key={f.id} className="facility reveal">
                <figure className="photo-mat">
                  <div className="photo-mat__inner">
                    <Image src={FACILITY_IMG[f.id].src} alt={FACILITY_IMG[f.id].alt} fill sizes="(max-width: 860px) 100vw, 380px" />
                  </div>
                </figure>
                <p className="season__tag">{f.count}</p>
                <h3>{f.name}</h3>
                <p className="facility__text">{f.text}</p>
                <ul className="facility__points">
                  {f.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="ribbon reveal" aria-labelledby="ribbon-title">
            <div className="ribbon__head">
              <h3 id="ribbon-title" className="subtitle">
                Egész évben teniszezhetsz.
              </h3>
              <p>Nyáron a szabadtéri salakon, ősztől tavaszig a fűtött sátor alatt.</p>
            </div>
            <div className="ribbon__bar" aria-hidden="true">
              {RIBBON.map((r) => (
                <span key={r.from} className={`ribbon__seg ribbon__seg--${r.kind}`} style={{ left: pct(r.from), width: `${((r.to - r.from + 1) / 365) * 100}%` }} />
              ))}
            </div>
            <ol className="ribbon__months" aria-hidden="true">
              {MONTHS.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ol>
            <dl className="ribbon__legend">
              {SEASONS.map((s) => (
                <div key={s.name}>
                  <dt>
                    <span className={`ribbon__dot ribbon__dot--${s.name.startsWith("Nyári") ? "nyar" : "tel"}`} aria-hidden="true" />
                    {s.name}
                  </dt>
                  <dd>
                    {s.dates} · {s.where}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="values reveal">
            {VALUES.map((v) => (
              <li key={v.title}>
                <b>{v.title}</b>
                <span>{v.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— II. foglalás ——— */}
      <section id="foglalas" className="band band--paper2" aria-labelledby="foglalas-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="II">Pályafoglalás</Chapter>
            <h2 id="foglalas-title" className="title title--center">
              Nézd meg, mikor szabad, <em>és foglald le.</em>
            </h2>
            <p className="intro intro--center">Pályát az online foglalási naptárban vagy telefonon foglalhatsz.</p>
          </div>
          <div className="booking">
            <div className="app reveal">
              <p className="app__kicker">Online foglalási naptár</p>
              <h3>Három lépés a pályáig.</h3>
              <ol className="steps">
                {BOOKING_STEPS.map((s, i) => (
                  <li key={s.title}>
                    <span className="steps__n">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <b>{s.title}</b>
                      <span>{s.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="stores">
                <a className="btn btn--accent" href={CLUB.booking} target="_blank" rel="noopener noreferrer">
                  Foglalási naptár <Arrow />
                </a>
                <a className="btn btn--ghost" href={CLUB.bookingPhoneHref}>
                  {CLUB.bookingPhone}
                </a>
              </div>
            </div>
            <div className="tariff reveal">
              <div className="tariff__head">
                <p className="tariff__kicker">Teniszpálya</p>
                <h3>Óradíjak</h3>
                <p className="tariff__sub">pálya / óra, szezon szerint</p>
              </div>
              <table className="tariff__table">
                <thead>
                  <tr>
                    <th scope="col">Szezon</th>
                    <th scope="col">Időszak</th>
                    <th scope="col">Pálya</th>
                  </tr>
                </thead>
                <tbody>
                  {SEASONS.map((s) => (
                    <tr key={s.name}>
                      <th scope="row">
                        {s.name.replace(" szezon", "")}
                        <small>{s.where}</small>
                      </th>
                      <td className="tariff__dates">{s.dates}</td>
                      <td>
                        {s.court.split(" / ")[0]}
                        <small>/ óra</small>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <th scope="row">
                      Edző
                      <small>a pálya mellé, óránként</small>
                    </th>
                    <td className="tariff__dates">egész évben</td>
                    <td>
                      {COACH_RATE.split(" / ")[0]}
                      <small>/ óra</small>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="tariff__note">2–3 fős családi vagy baráti csoportnál a pálya és az edző óradíja adódik össze.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— III. oktatás ——— */}
      <section id="oktatas" className="band" aria-labelledby="oktatas-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="III">Oktatás</Chapter>
            <h2 id="oktatas-title" className="title title--center">
              Az idő és a gyakorlás <em>egyenlő az eredménnyel.</em>
            </h2>
            <p className="intro intro--center">Szakképzett edzők, egyéni és csoportos órák ötéves kortól, kezdőknek, haladóknak és versenyzőknek.</p>
          </div>
          <div className="programs">
            {PROGRAMS.map((p) => (
              <article key={p.id} className="program reveal">
                <p className="program__age">{p.age}</p>
                <h3>{p.name}</h3>
                <p className="program__lead">{p.text}</p>
                <ul className="program__points">
                  {p.points.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="adult reveal">
            <figure className="photo-mat adult__photo">
              <div className="photo-mat__inner">
                <Image src="/img/adogatas.jpg" alt="Adogatás a szabadtéri salakpályán" fill sizes="(max-width: 960px) 100vw, 480px" />
              </div>
              <figcaption>Nyáron a szabadtéri salakon.</figcaption>
            </figure>
            <div className="adult__body">
              <p className="chapter chapter--left">Felnőtt csoportok</p>
              <h3 className="subtitle">Baráti társaságként vagy egyedül is jöhetsz.</h3>
              <p className="adult__either">{ADULT_GROUPS.either}</p>
              <div className="adult__price">
                <b>{ADULT_GROUPS.price}</b>
                <span>{ADULT_GROUPS.per}</span>
              </div>
              <ul className="program__points">
                {ADULT_GROUPS.points.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="adult__note">{ADULT_GROUPS.start}</p>
              <p className="adult__note">{ADULT_GROUPS.small}</p>
              <p className="adult__coaches">
                A felnőtt csoportok edzői: <b>{ADULT_GROUPS.coaches.join(" és ")}</b>
              </p>
              <div className="btn-row">
                <a className="btn btn--accent" href="#jelentkezes">
                  Jelentkezem <Arrow />
                </a>
                <a className="link" href={CLUB.contact.phoneHref}>
                  {CLUB.contact.name}: {CLUB.contact.phone}
                </a>
              </div>
            </div>
          </div>

          <figure className="wide-photo reveal">
            <div className="photo-mat">
              <div className="photo-mat__inner">
                <Image src="/img/gyerekverseny.jpg" alt="Gyerekek oklevéllel a téli sátorban" fill sizes="(max-width: 1100px) 100vw, 1060px" />
              </div>
              <figcaption>Oklevelek a téli sátorban.</figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* ——— IV. klub ——— */}
      <section id="klub" className="band dark" aria-labelledby="klub-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="IV">A klub</Chapter>
            <h2 id="klub-title" className="title title--center">
              Tréning Center SE: <em>bajnokok és családok.</em>
            </h2>
            <p className="intro intro--center">{MISSION}</p>
          </div>
          <div className="tourney">
            <div className="club-life reveal">
              <figure className="honours__photo club-life__photo">
                <Image src="/img/csoportkep.jpg" alt="Csoportkép a téli sátorban, a salakpálya hálója előtt" fill sizes="(max-width: 960px) 100vw, 600px" />
              </figure>
              <ol className="programme">
                <li>
                  <p className="programme__when">Családi napok</p>
                  <div>
                    <h3>Gyerek–szülő tenisz</h3>
                    <p>{CLUB_LIFE.family}</p>
                  </div>
                </li>
                <li>
                  <p className="programme__when">Teniszcsarnok</p>
                  <div>
                    <h3>{CLUB_LIFE.cup.name}</h3>
                    <p>{CLUB_LIFE.cup.text.charAt(0).toUpperCase() + CLUB_LIFE.cup.text.slice(1)}</p>
                  </div>
                </li>
                <li>
                  <p className="programme__when">Versenyek</p>
                  <div>
                    <h3>Kupák teniszben és fociban</h3>
                    <p>{CLUB_LIFE.tournaments}</p>
                  </div>
                </li>
              </ol>
            </div>
            <aside className="honours reveal" aria-labelledby="honours-title">
              <p className="honours__event">2022 · megyei csapatbajnokság</p>
              <h3 id="honours-title">Bajnokcsapat</h3>
              <p className="honours__lead">{CLUB_LIFE.win}</p>
              <ul className="roster">
                {CLUB_LIFE.team.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ——— V. rendezvények ——— */}
      <section id="rendezvenyek" className="band" aria-labelledby="rendezvenyek-title">
        <div className="container">
          <div className="head reveal">
            <Chapter n="V">Rendezvények</Chapter>
            <h2 id="rendezvenyek-title" className="title title--center">
              Születésnaptól <em>a több száz fős sportnapig.</em>
            </h2>
            <p className="intro intro--center">{EVENTS.lead}</p>
          </div>

          <div className="scoreboard reveal" aria-label="Eddig">
            <div>
              <b>{events.num}</b>
              <span>{events.label}</span>
            </div>
            <div>
              <b>{people.num}</b>
              <span>{people.label}</span>
            </div>
          </div>

          <div className="venue reveal">
            <div className="venue__text">
              <ul className="kinds">
                {EVENTS.kinds.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
              <dl className="venue__nums">
                {EVENTS.venue.map((v) => (
                  <div key={v.label}>
                    <dt>{v.num}</dt>
                    <dd>{v.label}</dd>
                  </div>
                ))}
              </dl>
              <p>{EVENTS.extras}</p>
              <p className="venue__attr">
                <b>Családi napok kedvencei:</b> {EVENTS.attractions.join(", ").toLowerCase()}.
              </p>
              <div className="btn-row">
                <a className="btn btn--accent" href="#jelentkezes">
                  Kérj ajánlatot <Arrow />
                </a>
              </div>
            </div>
            <div className="venue__photos">
              <figure className="photo-mat">
                <div className="photo-mat__inner">
                  <Image src="/img/csaladi-nap.jpg" alt="Családi nap a rendezvénysátorban, megterített asztaloknál" fill sizes="(max-width: 960px) 100vw, 520px" />
                </div>
              </figure>
              <div className="venue__pair">
                <figure className="photo-mat">
                  <div className="photo-mat__inner">
                    <Image src="/img/ijaszat.jpg" alt="Íjászat egy családi napon" fill sizes="(max-width: 960px) 50vw, 255px" />
                  </div>
                </figure>
                <figure className="photo-mat">
                  <div className="photo-mat__inner">
                    <Image src="/img/legvar.jpg" alt="Felfújható akadálypálya egy családi napon" fill sizes="(max-width: 960px) 50vw, 255px" />
                  </div>
                </figure>
              </div>
            </div>
          </div>

          <div className="pub reveal">
            <figure className="photo-mat pub__photo">
              <div className="photo-mat__inner">
                <Image src="/img/pub.jpg" alt="A főépület sörözője vendégekkel" fill sizes="(max-width: 960px) 100vw, 520px" />
              </div>
            </figure>
            <div className="pub__card">
              <p className="tariff__kicker">A söröző</p>
              <h3>Pub</h3>
              <p className="pub__lead">{PUB.lead}</p>
              <ul className="pub__menu">
                {PUB.menu.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ——— VI. ajánlatkérés ——— */}
      <section id="jelentkezes" className="band band--paper2" aria-labelledby="jelentkezes-title">
        <div className="container">
          <div className="signup">
            <div className="signup__aside reveal">
              <Chapter n="VI" left>
                Ajánlatkérés
              </Chapter>
              <h2 id="jelentkezes-title" className="title">
                Kérj <em>ajánlatot.</em>
              </h2>
              <p>Oktatásra vagy rendezvényre: írd meg, mit szeretnél, és felvesszük veled a kapcsolatot. Edzésnél az edzővel egyeztetjük a részleteket.</p>
              <div className="contact-mini">
                <a href={CLUB.contact.phoneHref}>
                  {CLUB.contact.phone} <small>{CLUB.contact.name}</small>
                </a>
                <a href={CLUB.bookingPhoneHref}>
                  {CLUB.bookingPhone} <small>pályafoglalás</small>
                </a>
                <a href={CLUB.emailHref}>{CLUB.email}</a>
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
                Víztároló utca 2. <em>Várunk a pályán.</em>
              </h2>
              <dl className="visit__list">
                <div>
                  <dt>Cím</dt>
                  <dd>
                    {CLUB.address}
                    <small>Saját parkoló 80 autónak.</small>
                  </dd>
                </div>
                <div>
                  <dt>Pályafoglalás</dt>
                  <dd>
                    <a href={CLUB.bookingPhoneHref}>{CLUB.bookingPhone}</a>
                    <small>
                      Iroda: <a href={CLUB.officePhoneHref}>{CLUB.officePhone}</a>
                    </small>
                  </dd>
                </div>
                <div>
                  <dt>Kapcsolattartó</dt>
                  <dd>
                    {CLUB.contact.name}
                    <small>
                      <a href={CLUB.contact.phoneHref}>{CLUB.contact.phone}</a>
                    </small>
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
              </div>
            </div>
            <div className="map reveal">
              <iframe src={CLUB.mapsEmbed} title="A Tréning Center a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
