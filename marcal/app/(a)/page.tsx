import Image from "next/image";
import { EnquiryForm } from "@/components/shared/EnquiryForm";
import { BOOKING_WHY, CLUB, COACHES, COACHING, EVENTS, EXTRAS, FACTS, HOURS, REVIEWS, RULES, SEASONS, SPORTS, VENUE } from "@/lib/site";

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");

export default function ClassicHome() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero dark hero--photo" aria-labelledby="hero-title">
        <div className="container">
          <p className="hero__est">Győr · 2006 óta</p>
          <h1 id="hero-title">
            Marcal Teniszcentrum
            <em>Ha ütős sport, akkor Teniszcentrum.</em>
          </h1>
          <p className="hero__sports">Tenisz · Padel · Squash · Bowling</p>
          <p className="hero__lead">
            Modern pályák, színvonalas rendezvényterem és baráti légkör: edzésre, baráti játékra vagy céges eseményre. Több mint sportközpont,
            inkább közösség.
          </p>
          <div className="btn-row">
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
              Foglalj pályát
            </a>
            <a href="#jelentkezes" className="btn btn--ghost">
              Jelentkezz oktatásra
            </a>
          </div>
          <figure className="hero__mat">
            <div className="hero__mat-inner">
              <Image
                src="/img/padel-terasz.jpg"
                alt="A szabadtéri padelpálya, mögötte a terasz és a teniszpályák téli sátra"
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 1080px"
                style={{ objectPosition: "50% 60%" }}
              />
            </div>
            <figcaption>A padelpálya és a terasz, háttérben a téli teniszsátor.</figcaption>
          </figure>
          <ul className="pillars pillars--four" aria-label="Röviden">
            {FACTS.map((f) => (
              <li key={f.num}>
                <b>{f.num}</b>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— I. sports ——— */}
      <section id="sportagak" className="band" aria-labelledby="sportagak-title">
        <div className="container">
          <div className="head">
            <p className="chapter reveal">I. · Sportágak</p>
            <h2 id="sportagak-title" className="title title--center reveal">
              Több sportág, <em>egy helyszín</em>
            </h2>
            <p className="intro intro--center reveal">
              Nyári szezon: {SEASONS.summer} Téli szezon: {SEASONS.winter} Télen négy teniszpálya fűtött sátor alatt, a padelcsarnok fűtött.
            </p>
          </div>
          <div className="sports">
            {SPORTS.map((s) => (
              <article key={s.id} className="course-group reveal">
                <h3 className="course-group__title">{s.name}</h3>
                <span className="sport__courts">{s.courts}</span>
                <p className="sport__tagline">{s.tagline}</p>
                <p className="sport__text">{s.text}</p>
                <ul className="sport__features">
                  {s.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="extras container--narrow" style={{ marginInline: "auto" }}>
            <p className="chapter reveal">Amit még kínálunk</p>
            <ul className="menu-list">
              {EXTRAS.map((e) => (
                <li key={e.name} className="reveal">
                  <h3>{e.name}</h3>
                  <p>{e.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— II. booking ——— */}
      <section id="foglalas" className="band band--paper2" aria-labelledby="foglalas-title">
        <div className="container">
          <div className="booking">
            <div>
              <p className="chapter chapter--left reveal">II. · Pályafoglalás</p>
              <h2 id="foglalas-title" className="title reveal">
                Foglalj pályát, <em>kényelmesen, bármikor</em>
              </h2>
              <p className="intro reveal">Csak néhány kattintás: a pályákat a SportMate alkalmazásban foglalhatod, tenisztől a bowlingig.</p>
              <ul className="booking__why reveal">
                {BOOKING_WHY.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <div className="btn-row reveal">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Online foglalás
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  {CLUB.phone}
                </a>
              </div>
              <div className="hours-card reveal">
                <h3>Nyitvatartás</h3>
                {HOURS.map((h) => (
                  <p key={h.days}>
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </p>
                ))}
                <small>Egész évben nyitva, a karbantartási napok és egyes ünnepnapok kivételével.</small>
              </div>
            </div>
            <div className="reveal">
              <p className="chapter chapter--left">A pálya rendje</p>
              <dl className="rules-list">
                {RULES.map((r) => (
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

      {/* ——— III. coaching ——— */}
      <section id="oktatas" className="band" aria-labelledby="oktatas-title">
        <div className="container">
          <div className="coaching">
            <div>
              <p className="chapter chapter--left reveal">III. · Oktatás</p>
              <h2 id="oktatas-title" className="title reveal">
                Kezdd edzővel, <em>a tempód szerint</em>
              </h2>
              <p className="intro reveal">{COACHING.lead}</p>
              <p className="coaching__how reveal" style={{ marginTop: 26 }}>
                {COACHING.how}
              </p>
              <div className="coaching__notes reveal">
                <p>{COACHING.kids}</p>
                <p>{COACHING.camps}</p>
              </div>
              <div className="btn-row reveal" style={{ marginTop: 26 }}>
                <a href="#jelentkezes" className="btn btn--accent">
                  Jelentkezz oktatásra
                </a>
              </div>
            </div>
            <figure className="photo-mat reveal" style={{ margin: 0 }}>
              <div className="photo-mat__inner">
                <Image src="/img/gyerekek-salak.jpg" alt="Gyerekek ütőkkel a salakpályán, edzés közben" fill sizes="(max-width: 860px) 100vw, 45vw" />
              </div>
              <figcaption>Gyerekedzés a salakon.</figcaption>
            </figure>
          </div>
          <p className="chapter reveal">Edzőink</p>
          <div className="coaches coaches--five">
            {COACHES.map((c) => (
              <article className="coach reveal" key={c.name}>
                <div className="coach__frame">
                  {c.img ? (
                    <Image src={c.img} alt={`${c.name}, ${c.sports.toLowerCase()} edző`} fill sizes="(max-width: 640px) 45vw, (max-width: 1060px) 30vw, 210px" />
                  ) : (
                    <span className="coach__mono" aria-hidden="true">
                      {initials(c.name)}
                    </span>
                  )}
                </div>
                <h3>{c.name}</h3>
                <p className="coach__role" style={{ marginTop: 6 }}>
                  {c.sports}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— IV. events ——— */}
      <section id="esemenyek" className="band dark" aria-labelledby="esemenyek-title">
        <div className="container">
          <div className="head">
            <p className="chapter chapter--left reveal">IV. · Események</p>
            <h2 id="esemenyek-title" className="title reveal">
              Ahol a játék <em>élménnyé válik</em>
            </h2>
          </div>
          <div className="events">
            {EVENTS.map((e, i) => (
              <article key={e.title} className={`event reveal${i === 0 ? " event--next" : ""}`}>
                <p className="event__tag">{e.tag}</p>
                <h3>{e.title}</h3>
                {e.when && <p className="event__when">{e.when}</p>}
                <p>{e.text}</p>
              </article>
            ))}
          </div>
          <div className="btn-row reveal" style={{ marginTop: 32 }}>
            <a href={CLUB.events} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              Eseménynaptár a Facebookon
            </a>
          </div>
        </div>
      </section>

      {/* ——— V. venue ——— */}
      <section id="rendezvenyek" className="band" aria-labelledby="rendezvenyek-title">
        <div className="container">
          <div className="head">
            <p className="chapter reveal">V. · Rendezvények</p>
            <h2 id="rendezvenyek-title" className="title title--center reveal">
              Ünnepeljetek <em>nálunk</em>
            </h2>
            <p className="intro intro--center reveal">Bowling, büfé, különterem akár 50 főnek: családi ünnepre, születésnapra vagy céges eseményre.</p>
          </div>
          <div className="venue">
            <div className="venue__card reveal">
              <p className="chapter chapter--left">Családi események</p>
              <h3>Születésnap, névnap, évforduló</h3>
              <p>{VENUE.family}</p>
              <a href={`${CLUB.emailHref}?subject=${encodeURIComponent("Ajánlatkérés: családi rendezvény")}`} className="btn btn--ghost">
                Ajánlatot kérek
              </a>
            </div>
            <div className="venue__card reveal">
              <p className="chapter chapter--left">Cégeknek</p>
              <h3>Rendezvény, tréning, sportnap</h3>
              <p>{VENUE.corporate}</p>
              <a href={`${CLUB.emailHref}?subject=${encodeURIComponent("Ajánlatkérés: céges rendezvény")}`} className="btn btn--ghost">
                Ajánlatot kérek
              </a>
            </div>
          </div>
          <div className="gallery3">
            {[
              { src: "/img/bowling-uv.jpg", alt: "A bowlingpálya UV-fényben", cap: "Bowling, UV-fényben" },
              { src: "/img/bufe.jpg", alt: "A büfé pultja", cap: "A büfé" },
              { src: "/img/rendezveny.jpg", alt: "Vendéglátás egy rendezvényen: falatkák és italok", cap: "Rendezvény a különteremben" },
            ].map((p) => (
              <figure key={p.src} className="photo-mat reveal" style={{ margin: 0 }}>
                <div className="photo-mat__inner">
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 860px) 50vw, 33vw" />
                </div>
                <figcaption>{p.cap}</figcaption>
              </figure>
            ))}
          </div>
          <div className="reviews">
            {REVIEWS.map((r) => (
              <blockquote key={r} className="reveal">
                {r}
                <footer>Vendégünk véleménye</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ——— VI. enquiry ——— */}
      <section id="jelentkezes" className="band band--paper2" aria-labelledby="jelentkezes-title">
        <div className="container">
          <div className="signup">
            <div className="signup__aside">
              <p className="chapter chapter--left reveal">VI. · Jelentkezés</p>
              <h2 id="jelentkezes-title" className="title reveal">
                Találjuk meg <em>a neked való edzést</em>
              </h2>
              <p className="intro reveal">
                Jelentkezésedet továbbítjuk egy edzőnknek, aki felvázolja a lehetőségeket. Ha kell, bevon egy kollégát is, hogy a neked
                megfelelő szakembernél landolj. Játszótársat is kereshetsz.
              </p>
              <div className="contact-mini reveal">
                <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                <a href={CLUB.emailHref}>{CLUB.email}</a>
              </div>
            </div>
            <div className="reveal">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ——— VII. contact ——— */}
      <section id="kapcsolat" className="band dark dark--deep" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="head">
            <p className="chapter chapter--left reveal">VII. · Kapcsolat</p>
            <h2 id="kapcsolat-title" className="title reveal">
              Gulyás István utca 3. <em>Várunk a pályán.</em>
            </h2>
          </div>
          <div className="visit">
            <div className="reveal">
              <dl className="visit__list">
                <div>
                  <dt>Cím</dt>
                  <dd>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address}
                    </a>
                    <small>Ingyenes parkolás</small>
                  </dd>
                </div>
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                    <small>
                      vagy <a href={CLUB.phone2Href}>{CLUB.phone2}</a>
                    </small>
                  </dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a href={CLUB.emailHref}>{CLUB.email}</a>
                    <small>
                      {CLUB.manager.name}, {CLUB.manager.role}
                    </small>
                  </dd>
                </div>
                <div>
                  <dt>Nyitvatartás</dt>
                  <dd>
                    {HOURS.map((h) => (
                      <small key={h.days}>
                        {h.days}: {h.time}
                      </small>
                    ))}
                  </dd>
                </div>
              </dl>
              <div className="btn-row">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Foglalj pályát
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  Útvonal
                </a>
              </div>
            </div>
            <div className="map reveal">
              <iframe title="A Marcal Teniszcentrum a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
