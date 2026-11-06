import Image from "next/image";
import { IconArrow, IconCalendar, IconCheck, IconClock, IconFacebook, IconInstagram, IconMail, IconPhone, IconPin, IconUsers } from "@/components/b/icons";
import { EnquiryForm, PickGroup } from "@/components/shared/EnquiryForm";
import { AMENITIES, CLUB, COACHES, COURTS, CSR, FACTS, GROUP_LABEL, GROUPS, PRIVATE_LESSONS, QUOTE, RULES, STAGES, STORY, SUPPORTERS } from "@/lib/site";

/** The age line runs from 3 to 20 years (the adult group is drawn as 18+). */
const AGE_MIN = 3;
const AGE_MAX = 20;
const pos = (v: number) => `${((v - AGE_MIN) / (AGE_MAX - AGE_MIN)) * 100}%`;
const TICKS = [3, 5, 10, 16, 18];

export default function BHome() {
  const withPhoto = COACHES.filter((c) => c.img);
  const nameOnly = COACHES.filter((c) => !c.img);
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">
              {CLUB.name} · {CLUB.place}
            </p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz a Városmajor <em>ősfái között.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Öt salak- és két Rebound Ace pálya, télen légsátor alatt. Csoportos edzés 3 éves kortól a felnőttekig, pályafoglalás a recepción.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> Pályafoglalás
                </a>
                <a href="#edzesek" className="btn btn--ghost">
                  Edzést keresek <IconArrow />
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/klubhaz.jpg"
              alt="A BTC klubháza és a salakpályák a sátorszerkezet alatt, körben a Városmajor fái"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 52%" }}
            />
            <figcaption className="hero__caption">{CLUB.address}</figcaption>
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

      {/* ——— Groups (the dot court stands on the right) ——— */}
      <section id="edzesek" className="section groups" aria-labelledby="edzesek-title">
        <div className="container">
          <p className="eyebrow reveal">Edzések</p>
          <h2 id="edzesek-title" className="h2 reveal">
            3 éves kortól <em>a felnőttekig.</em>
          </h2>
          <p className="lead reveal">Négy csoport, korosztály szerint. A Play &amp; Stay-ben és a felnőtt csoportban az első alkalom ingyenes.</p>

          <div className="ageline glass reveal" aria-label="A csoportok életkor szerint">
            <div className="ageline__track">
              {GROUPS.map((g, i) => (
                <a
                  key={g.id}
                  href={`#csoport-${g.id}`}
                  className={`ageline__bar ageline__bar--${i % 2 ? "low" : "high"}${g.to >= AGE_MAX ? " ageline__bar--open" : ""}`}
                  style={{ left: pos(g.from), width: `calc(${pos(g.to)} - ${pos(g.from)})` }}
                >
                  <span className="ageline__label">
                    <strong>{g.name}</strong> {g.ages}
                  </span>
                </a>
              ))}
              {TICKS.map((t) => (
                <span key={t} className="ageline__tick" style={{ left: pos(t) }} aria-hidden="true">
                  {t === 18 ? "18+" : t}
                </span>
              ))}
            </div>
            <ul className="ageline__legend" aria-hidden="true">
              {GROUPS.map((g) => (
                <li key={g.id}>
                  <span className="ageline__swatch" />
                  <strong>{g.name}</strong> {g.ages}
                </li>
              ))}
            </ul>
          </div>

          <ul className="group-grid">
            {GROUPS.map((g) => (
              <li key={g.id} id={`csoport-${g.id}`} className="groupcard glass reveal">
                <figure className="groupcard__photo">
                  <Image src={g.img} alt={g.imgAlt} fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: "cover" }} />
                </figure>
                <div className="groupcard__body">
                  <div className="groupcard__tags">
                    <span className="tag">{g.ages}</span>
                    {g.free && <span className="tag tag--accent">Első alkalom ingyenes</span>}
                  </div>
                  <h3 className="h3 groupcard__name">{g.name}</h3>
                  <p className="groupcard__text">{g.text}</p>
                  {g.times && (
                    <ul className="groupcard__times" aria-label="Időpontok">
                      {g.times.map((t) => (
                        <li key={t}>
                          <IconClock /> {t}
                        </li>
                      ))}
                    </ul>
                  )}
                  <ul className="checks">
                    {g.details.map((d) => (
                      <li key={d}>
                        <IconCheck /> {d}
                      </li>
                    ))}
                  </ul>
                  <p className="groupcard__coaches">
                    <IconUsers /> {g.coaches.length > 1 ? "Edzők" : "Edző"}: {g.coaches.join(", ")}
                  </p>
                  {g.contact && (
                    <p className="groupcard__contact">
                      Jelentkezés: <a href={g.contact.phoneHref}>{g.contact.phone}</a> ({g.contact.name})
                    </p>
                  )}
                  <PickGroup group={GROUP_LABEL[g.id]} className="btn btn--accent btn--sm groupcard__cta">
                    Jelentkezem <IconArrow />
                  </PickGroup>
                </div>
              </li>
            ))}
          </ul>

          <div className="private glass reveal">
            <p>
              <strong>Egyéni edzés.</strong> {PRIVATE_LESSONS}
            </p>
            <PickGroup group={GROUP_LABEL.egyeni} className="btn btn--ghost btn--sm">
              Egyéni edzést kérek <IconArrow />
            </PickGroup>
          </div>

          <div className="stages reveal">
            <p className="label">A Play &amp; Stay három szintje</p>
            <ul className="stages__list">
              {STAGES.map((s) => (
                <li key={s.color} className="stage glass" style={{ ["--tone" as string]: s.tone }}>
                  <p className="stage__name">
                    <span className="stage__dot" aria-hidden="true" /> {s.color}
                    <span className="stage__ages">{s.ages}</span>
                  </p>
                  <dl className="stage__data">
                    <div>
                      <dt>Pálya</dt>
                      <dd>{s.court}</dd>
                    </div>
                    <div>
                      <dt>Labda</dt>
                      <dd>{s.ball}</dd>
                    </div>
                    <div>
                      <dt>Ütő</dt>
                      <dd>{s.racket}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Courts (the racket stands on the left) ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Hét pálya. <em>Két borítás.</em>
          </h2>
          <p className="lead reveal">Öt ízületkímélő salakpálya és két Rebound Ace keménypálya. Télen légsátor alatt játszunk.</p>

          <ol className="courtstrip reveal" aria-label="A hét pálya">
            {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => (
              <li key={n} className={`courtstrip__court courtstrip__court--${n <= COURTS.clay.count ? "clay" : "hard"}`}>
                <span className="sr-only">{n <= COURTS.clay.count ? "salakpálya" : "Rebound Ace keménypálya"}</span>
                {n}.
              </li>
            ))}
          </ol>

          <ul className="court-grid">
            {[COURTS.clay, COURTS.hard].map((c) => (
              <li key={c.title} className="courtcard glass reveal">
                <figure className="courtcard__photo">
                  <Image src={c.img} alt={c.imgAlt} fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: "cover" }} />
                </figure>
                <div className="courtcard__body">
                  <p className="courtcard__count">
                    <span>{c.count}</span> pálya · {c.numbers}
                  </p>
                  <h3 className="h3">{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="dome glass reveal">
            <figure className="dome__photo">
              <Image src="/img/kemeny-sator.jpg" alt="A légsátor belseje a keménypályával" fill sizes="(max-width: 900px) 100vw, 24vw" style={{ objectFit: "cover" }} />
            </figure>
            <div className="dome__body">
              <p className="label">Légsátor</p>
              <p>{COURTS.dome}</p>
            </div>
          </div>

          <div className="booking glass reveal">
            <div className="booking__head">
              <p className="label">
                <IconCalendar /> Pályafoglalás
              </p>
              <h3 className="h3">
                Telefonon, a recepción <em>vagy az űrlappal.</em>
              </h3>
              <ul className="hours">
                {CLUB.hours.map((h) => (
                  <li key={h.days}>
                    {h.days} <strong>{h.time}</strong>
                  </li>
                ))}
              </ul>
              <div className="booking__ctas">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> {CLUB.phone}
                </a>
                <PickGroup mode="court" className="btn btn--ghost">
                  Foglalási kérés <IconArrow />
                </PickGroup>
              </div>
            </div>
            <div className="booking__rules">
              <p className="label">Mielőtt foglalsz</p>
              <ul className="rules">
                {RULES.booking.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rulecards reveal">
            <details className="rulecard glass">
              <summary>
                <span className="rulecard__swatch rulecard__swatch--clay" aria-hidden="true" /> Salakpályán
              </summary>
              <ul className="rules">
                {RULES.clay.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </details>
            <details className="rulecard glass">
              <summary>
                <span className="rulecard__swatch rulecard__swatch--hard" aria-hidden="true" /> Keménypályán
              </summary>
              <ul className="rules">
                {RULES.hard.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* ——— Coaches (the BTC mark forms on the right) ——— */}
      <section id="edzok" className="section coaches" aria-labelledby="edzok-title">
        <div className="container">
          <p className="eyebrow reveal">Edzők</p>
          <h2 id="edzok-title" className="h2 h2--xl reveal">
            Minden csoportnak <em>saját edzői.</em>
          </h2>
          <p className="lead reveal">Ők tartják az óvodai teniszt, a Play &amp; Stay-t, az U12–16-os csoportokat és a felnőtt edzéseket.</p>

          <ul className="coach-grid">
            {withPhoto.map((c) => (
              <li key={c.name} className="coach glass reveal">
                <figure className="coach__photo">
                  <Image src={c.img!} alt={`${c.name} portréja`} fill sizes="(max-width: 640px) 34vw, (max-width: 1300px) 40vw, 20vw" style={{ objectFit: "cover", objectPosition: "50% 18%" }} />
                </figure>
                <div className="coach__body">
                  <p className="tag">{c.role}</p>
                  <h3 className="h3 coach__name">{c.name}</h3>
                  {c.bio && <p className="coach__note coach__note--small">{c.bio}</p>}
                </div>
              </li>
            ))}
            <li className="team-more glass reveal">
              <p className="label">
                <IconUsers /> A csoportokban edz még
              </p>
              <ul className="team-more__list">
                {nameOnly.map((c) => (
                  <li key={c.name}>
                    <strong>{c.name}</strong>
                    <span>{c.role}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— The club (the big ball spins behind) ——— */}
      <section id="klub" className="section club" aria-labelledby="klub-title">
        <div className="container">
          <p className="eyebrow reveal">A klub</p>
          <h2 id="klub-title" className="h2 reveal">
            Több mint száz év <em>a Városmajorban.</em>
          </h2>
          {STORY.map((p) => (
            <p key={p.slice(0, 24)} className="lead reveal">
              {p}
            </p>
          ))}

          <ul className="amenity-grid">
            {AMENITIES.map((a) => (
              <li key={a.id} className="amenity glass reveal">
                <figure className="amenity__photo">
                  <Image src={a.img} alt={a.imgAlt} fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
                </figure>
                <div className="amenity__body">
                  <h3 className="h3">{a.title}</h3>
                  <p>{a.text}</p>
                  {a.note && <p className="amenity__note">{a.note}</p>}
                </div>
              </li>
            ))}
          </ul>

          <div className="club__pair">
            <figure className="quote glass reveal">
              <div className="quote__img">
                <Image src="/img/fucsovics.png" alt={`${QUOTE.name}`} width={394} height={433} sizes="200px" />
              </div>
              <div className="quote__body">
                <blockquote>
                  <p>„{QUOTE.text}”</p>
                </blockquote>
                <figcaption>{QUOTE.name}</figcaption>
              </div>
            </figure>
            <div className="csr glass reveal">
              <figure className="csr__photo">
                <Image src="/img/gyerekek.jpg" alt="Gyerekek ütővel a keménypályán" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
              </figure>
              <div className="csr__body">
                <p className="label">Odafigyelünk egymásra</p>
                <p>{CSR}</p>
              </div>
            </div>
          </div>

          <div className="partners-wrap reveal">
            <p className="label">Támogatóink</p>
            <ul className="partners">
              {SUPPORTERS.map((s) => (
                <li key={s.name}>
                  <Image src={s.img} alt={s.name} width={s.w} height={s.h} sizes="200px" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Booking & enquiry ——— */}
      <section id="jelentkezes" className="section signup" aria-labelledby="jelentkezes-title">
        <div className="container signup__grid">
          <div>
            <p className="eyebrow reveal">Foglalás, jelentkezés</p>
            <h2 id="jelentkezes-title" className="h2 reveal">
              Pálya vagy edzés? <em>Írd meg, és visszajelzünk.</em>
            </h2>
            <p className="lead reveal">A kéréseddel előre kitöltött e-mail nyílik meg a recepció címére. Ha sürgős, hívd a recepciót.</p>
            <ul className="signup__points reveal">
              <li>
                Recepció: <a href={CLUB.phoneHref}>{CLUB.phone}</a>
              </li>
              <li>
                E-mail: <a href={CLUB.emailHref}>{CLUB.email}</a>
              </li>
              {GROUPS.filter((g) => g.contact).map((g) => (
                <li key={g.id}>
                  {g.name}: <a href={g.contact!.phoneHref}>{g.contact!.phone}</a> ({g.contact!.name})
                </li>
              ))}
            </ul>
            <figure className="signup__photo snap reveal reveal--img">
              <Image src="/img/play-stay-labdak.jpg" alt="Kislány ütővel és labdákkal a háló előtt" fill sizes="(max-width: 900px) 100vw, 36vw" style={{ objectFit: "cover", objectPosition: "50% 40%" }} />
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
              Szamos <span className="nobr">utca 2/c.</span> <em>A Városmajorban.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
                    <span className="contact__name">{CLUB.name}</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address}
                    </a>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Recepció</span>
                    <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                    <span className="contact__line">Pályafoglalás, edzés, étterem</span>
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
                  <IconClock />
                  <div>
                    <span className="contact__label">Nyitvatartás</span>
                    {CLUB.hours.map((h) => (
                      <span key={h.days} className="contact__line">
                        {h.days}: <strong>{h.time}</strong>
                      </span>
                    ))}
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
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> Hívás
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconPin /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__map glass reveal">
              <iframe title="A Budapest Tenisz Centrum a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
