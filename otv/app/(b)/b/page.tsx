import Image from "next/image";
import {
  IconApple,
  IconArrow,
  IconCalendar,
  IconCheck,
  IconClock,
  IconFacebook,
  IconInstagram,
  IconMail,
  IconPhone,
  IconPin,
  IconPlay,
} from "@/components/b/icons";
import { JoinPicker } from "@/components/shared/JoinPicker";
import {
  APP_NOTE,
  APP_STEPS,
  CAMP,
  CHAMPIONS,
  CLUB,
  FACTS,
  FORMS,
  HOURS,
  MEMBERSHIP,
  PARTNERS,
  PLAY_STAY,
  PRICE_NOTES,
  PRICES,
  PROGRAMS,
  ROOMS,
  SEASON,
  SERVICES,
  TIMETABLE,
  TOURNAMENTS,
  TOURNAMENT_DIRECTOR,
} from "@/lib/site";

/** Where each programme's own button leads: the club's form, or a call to the coach. */
const PROGRAM_ACTION: Record<string, { label: string; href: string; external?: boolean }> = {
  ovis: { label: "Jelentkezési lap", href: FORMS.ovis, external: true },
  gyerek: { label: "Ingyenes próbaedzés", href: FORMS.gyerek, external: true },
  felnott: { label: `Hívás: ${CLUB.coachPhone}`, href: CLUB.coachPhoneHref },
};

const BALL_CLASS = ["ball--red", "ball--orange", "ball--green"];
const groupClass = (g: string) => (g ? `slot slot--${g.replace("*", "").toLowerCase()}` : "slot slot--empty");

/** Partner logos at a similar visual weight: equal area, capped height. */
const logoHeight = (w: number, h: number) => Math.round(Math.min(50, Math.sqrt((4200 * h) / w)));

const ROOM_PHOTOS: Record<string, { src: string; alt: string }> = {
  "Jóga- és mozgásstúdió": { src: "/img/studio.jpg", alt: "A világos, tükrös jóga- és mozgásstúdió" },
  Masszázsterem: { src: "/img/masszazsterem.jpg", alt: "A masszázsterem a klubházban" },
  "Piopio Deli ’n Café": { src: "/img/kavezo.jpg", alt: "Megterített asztalok a Piopio Deli ’n Café vendégterében" },
};

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Mogyoród · 6 salakpálya · egész évben</p>
            <h1 id="hero-title" className="h1 reveal">
              Teniszklub Mogyoródon. <em>Salakon, egész évben.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Nyáron szabadtéren, télen fedett pályákon. Pályafoglalás a saját OTV appból, oktatás ovisoktól a felnőttekig, nemzetközi tornák
                és klubélet.
              </p>
              <div className="hero__ctas">
                <a href="#foglalas" className="btn btn--accent">
                  Foglalj pályát <IconArrow />
                </a>
                <a href="#jelentkezes" className="btn btn--ghost">
                  Ingyenes próbaedzés
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/csuszas.jpg"
              alt="Teniszező csúszva éri el a labdát a háló előtt, salakpályán"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 12%" }}
            />
            <figcaption className="hero__caption">Csúszás a labdáért a salakon</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Röviden">
            {FACTS.map((f) => (
              <li className="fact" key={f.label}>
                <span className="fact__num">{f.num}</span>
                <span className="fact__label">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Courts and seasons (the dot court stands on the right) ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Hat salakpálya. <em>Nyáron kint, télen bent.</em>
          </h2>
          <p className="lead reveal">
            Nyáron a szabadtéri salakon játszol, télen fedett pályákon. {SEASON.name}: {SEASON.dates}, {SEASON.weeks} hét fedett tenisz mind a 6
            pályán.
          </p>

          <div className="seasons">
            <article className="season glass reveal">
              <figure className="season__photo">
                <Image src="/img/nyari-palyak.jpg" alt="A szabadtéri salakpályák egy nyári tornán" fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: "cover" }} />
              </figure>
              <div className="season__body">
                <p className="tag">Nyár · szabadtéri salak</p>
                <h3 className="h3">A nyári pályák</h3>
                <p>{SEASON.summer}</p>
              </div>
            </article>
            <article className="season glass reveal">
              <figure className="season__photo">
                <Image src="/img/teli-csarnok.jpg" alt="A fedett pályák a téli sátor alatt, egy versenynapon" fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: "cover" }} />
              </figure>
              <div className="season__body">
                <p className="tag tag--accent">{SEASON.name}</p>
                <h3 className="h3">{SEASON.courts}</h3>
                <p>{SEASON.winter}</p>
              </div>
            </article>
          </div>

          <div className="hoursbar glass reveal">
            <p className="label">
              <IconClock /> Nyitvatartás
            </p>
            <ul className="hours">
              {HOURS.map((h) => (
                <li key={h.days}>
                  <span>{h.days}</span>
                  <strong>{h.time}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Booking, prices, membership (the racket stands on the left) ——— */}
      <section id="foglalas" className="section booking" aria-labelledby="foglalas-title">
        <div className="container">
          <p className="eyebrow reveal">Foglalás és árak</p>
          <h2 id="foglalas-title" className="h2 reveal">
            Foglalj appból. <em>Bárhonnan, bármikor.</em>
          </h2>
          <p className="lead reveal">
            A saját Open Tennis Valley alkalmazásban pár kattintással foglalsz pályát, és egy helyen követed a foglalásaidat és a klubtagságodat,
            iOS-en és Androidon is.
          </p>

          <div className="booking__grid">
            <div className="appcard glass reveal">
              <ol className="appsteps">
                {APP_STEPS.map((s, i) => (
                  <li key={s.title}>
                    <span className="appsteps__num">0{i + 1}</span>
                    <p>
                      <strong>{s.title}.</strong> {s.text}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="stores">
                <a href={CLUB.appStore} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  <IconApple /> App Store
                </a>
                <a href={CLUB.googlePlay} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconPlay /> Google Play
                </a>
              </div>
              <p className="muted">{APP_NOTE}</p>
            </div>

            <div className="pricecard glass reveal">
              <p className="label">
                <IconCalendar /> {SEASON.name} · pálya / óra
              </p>
              <table className="prices">
                <thead>
                  <tr>
                    <th scope="col">Sáv</th>
                    <th scope="col">Alkalmi</th>
                    <th scope="col">10 alkalmas bérlet</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICES.map((p) => (
                    <tr key={p.band} className={p.best ? "is-best" : undefined}>
                      <th scope="row">
                        {p.band}
                        {p.best && <span className="best">Legjobb ár</span>}
                      </th>
                      <td>{p.price}</td>
                      <td>
                        {p.pass}
                        <small>{p.perPass} / alkalom</small>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="muted">
                {PRICE_NOTES.pass} {PRICE_NOTES.fine}
              </p>
            </div>
          </div>

          <div className="member glass reveal">
            <div className="member__head">
              <p className="label">Klubtagság · 2026/27</p>
              <p className="member__price">
                {MEMBERSHIP.price} <span>{MEMBERSHIP.per}</span>
              </p>
              <p className="member__status">
                <span className="dot" aria-hidden="true" /> {MEMBERSHIP.status}
              </p>
              <div className="member__ctas">
                <a href={MEMBERSHIP.notifyHref} className="btn btn--accent btn--sm">
                  <IconMail /> Értesítést kérek a nyitásról
                </a>
                <a href={CLUB.clubRules} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                  Klubszabályzat (PDF)
                </a>
              </div>
            </div>
            <ul className="perks">
              {MEMBERSHIP.perks.map((p) => (
                <li key={p.title}>
                  <IconCheck />
                  <div>
                    <strong>{p.title}</strong>
                    <span>{p.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Coaching (the OTV ball logo forms on the right) ——— */}
      <section id="oktatas" className="section coaching" aria-labelledby="oktatas-title">
        <div className="container">
          <p className="eyebrow reveal">Oktatás</p>
          <h2 id="oktatas-title" className="h2 h2--xl reveal">
            Szeresse meg a teniszt. <em>A többi majd jön magától.</em>
          </h2>
          <p className="lead reveal">
            Nálunk nem az a cél, hogy a gyerek minél előbb eredményeket hozzon, hanem hogy szívesen jöjjön edzésre, barátokat találjon, és
            megszeresse a játékot. Felnőtteknek egyéni edzés, bármilyen szinten.
          </p>

          <ul className="programs">
            {PROGRAMS.map((p) => {
              const a = PROGRAM_ACTION[p.id];
              return (
                <li className="program glass reveal" key={p.id}>
                  <div className="program__head">
                    <div>
                      <h3 className="h3">{p.name}</h3>
                      <p className="program__age">{p.age}</p>
                    </div>
                    <p className="program__price">
                      {p.price}
                      <span>{p.per}</span>
                    </p>
                  </div>
                  <p className="program__lead">{p.lead}</p>
                  {p.when && (
                    <p className="program__when">
                      <IconCalendar /> {p.when}
                    </p>
                  )}
                  <ul className="checks">
                    {p.points.map((x) => (
                      <li key={x}>
                        <IconCheck /> {x}
                      </li>
                    ))}
                  </ul>
                  {a && (
                    <a href={a.href} className="btn btn--ghost btn--sm program__cta" {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {a.label} {a.external && <IconArrow />}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="playstay reveal">
            <figure className="playstay__photo">
              <Image src="/img/piros-labda.jpg" alt="Puha piros labdák a háló mögött a salakon" fill sizes="(max-width: 900px) 100vw, 260px" style={{ objectFit: "cover" }} />
            </figure>
            <div>
              <p className="label">ITF Play & Stay</p>
              <h3 className="h3 playstay__title">
                Már az első edzésen <em>játszik.</em>
              </h3>
              <p className="muted">
                Lassabb labdával, a méretéhez igazított pályán tanul, így az első órától adogat, labdamenetet játszik és pontot számol.
              </p>
            </div>
          </div>
          <ol className="balls">
            {PLAY_STAY.map((b, i) => (
              <li key={b.ball} className="reveal">
                <span className={`ball ${BALL_CLASS[i]}`} aria-hidden="true" />
                <div>
                  <strong>
                    {i + 1}. {b.ball}
                  </strong>
                  <span className="balls__meta">
                    {b.speed} · {b.court}
                  </span>
                  <span>{b.text}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="timetable glass reveal">
            <p className="label">
              <IconClock /> Gyerekcsoportok · heti rend
            </p>
            <div className="timetable__scroll">
              <table>
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="sr-only">Időpont</span>
                    </th>
                    {TIMETABLE.days.map((d) => (
                      <th scope="col" key={d}>
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TIMETABLE.rows.map((r) => (
                    <tr key={r.time}>
                      <th scope="row">{r.time}</th>
                      {r.cells.map((c, i) => (
                        <td key={i}>{c ? <span className={groupClass(c)}>{c.replace("Meccsnap", "Meccs\u00ADnap")}</span> : <span className="slot slot--empty" aria-label="nincs edzés">·</span>}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="muted">{TIMETABLE.note}</p>
          </div>

          <div className="camp glass reveal">
            <figure className="camp__photo">
              <Image src="/img/gyerekek.jpg" alt="Táborozó gyerekek a salakpályán" fill sizes="(max-width: 900px) 100vw, 280px" style={{ objectFit: "cover", objectPosition: "50% 35%" }} />
            </figure>
            <div className="camp__body">
              <p className="label">{CAMP.title}</p>
              <p className="camp__lead">{CAMP.lead}</p>
              <ul className="chips">
                {CAMP.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <ul className="camp__prices">
                {CAMP.prices.map((p) => (
                  <li key={p.label}>
                    <span>{p.label}</span>
                    <strong>{p.price}</strong>
                  </li>
                ))}
              </ul>
              <p className="muted">{CAMP.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Tournaments (the spinning ball sits behind it) ——— */}
      <section id="versenyek" className="section events" aria-labelledby="versenyek-title">
        <div className="container">
          <p className="eyebrow reveal">Versenyek</p>
          <h2 id="versenyek-title" className="h2 reveal">
            Nemzetközi tenisz <em>Mogyoródon.</em>
          </h2>
          <p className="lead reveal">
            2026-ban négy nemzetközi tornának adtunk otthont: a Tennis Europe U14-es versenytől az ITF W15 női profi tornán és a UTR Pro Tennis
            Touron át az ITF J60-as junior tornáig.
          </p>

          <ul className="eventlist">
            {TOURNAMENTS.map((t, i) => (
              <li className={`event glass reveal${i === TOURNAMENTS.length - 1 ? " event--last" : ""}`} key={t.name}>
                <span className="event__tag">{t.tour}</span>
                <h3 className="h3">{t.name}</h3>
                <p className="event__when">
                  <IconCalendar /> {t.when}
                </p>
                <ul className="chips">
                  {t.facts.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p className="event__text">{t.text}</p>
                <a href={t.href} target="_blank" rel="noopener noreferrer" className="event__link">
                  Eredmények és sorsolás <IconArrow />
                </a>
              </li>
            ))}
          </ul>

          <div className="champs glass reveal">
            <figure className="champs__photo">
              <Image src="/img/j60-bajnokok.jpg" alt="A J60-as torna bajnokai az eredményhirdetésen, kupákkal" fill sizes="(max-width: 900px) 100vw, 46vw" style={{ objectFit: "cover", objectPosition: "50% 40%" }} />
            </figure>
            <div className="champs__body">
              <p className="label">Open Tennis Valley Open · ITF J60 · 2026</p>
              <h3 className="h3">A bajnokok</h3>
              <ul className="champs__list">
                {CHAMPIONS.map((c) => (
                  <li key={c.event}>
                    <span>{c.event}</span>
                    <strong>
                      {c.names} <em>{c.nat}</em>
                    </strong>
                  </li>
                ))}
              </ul>
              <p className="muted">Versenyigazgató: {TOURNAMENT_DIRECTOR}</p>
            </div>
          </div>

          <div className="partners reveal">
            <p className="label">Akik mellettünk állnak</p>
            <ul className="partners__logos">
              {PARTNERS.map((p) => (
                <li key={p.name} style={{ ["--lh" as string]: `${logoHeight(p.w, p.h)}px` }}>
                  <Image src={p.img} alt={p.name} width={p.w} height={p.h} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Clubhouse ——— */}
      <section id="klubhaz" className="section clubhouse" aria-labelledby="klubhaz-title">
        <div className="container">
          <p className="eyebrow reveal">Klubház</p>
          <h2 id="klubhaz-title" className="h2 reveal">
            Több mint <em>egy teniszpálya.</em>
          </h2>
          <p className="lead reveal">Gyógytorna, masszázs, mozgásstúdió és a Piopio Deli ’n Café: a klubházban a meccs előtt és után is.</p>

          <div className="services">
            {SERVICES.map((s) => (
              <article className="service glass reveal" key={s.id}>
                <p className="label">{s.name}</p>
                <h3 className="h3">{s.who}</h3>
                <p className="service__text">{s.text}</p>
                <ul className="pricelist">
                  {s.prices.map((p) => (
                    <li key={p.label}>
                      <span>{p.label}</span>
                      <strong>{p.price}</strong>
                    </li>
                  ))}
                </ul>
                <div className="service__foot">
                  <a
                    href={s.contact.href}
                    className="btn btn--ghost btn--sm"
                    {...(s.contact.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {s.contact.href.startsWith("tel:") ? <IconPhone /> : <IconCalendar />} {s.contact.label}
                  </a>
                  <p className="muted">{s.note}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="rooms">
            <div className="rooms__intro reveal">
              <p className="label">Terembérlés</p>
              <p className="rooms__lead">{ROOMS.lead}</p>
              <a href={ROOMS.contact.href} className="btn btn--ghost btn--sm">
                <IconPhone /> {ROOMS.contact.label}
              </a>
            </div>
            <ul className="rooms__list">
              {ROOMS.items.map((r) => {
                const ph = ROOM_PHOTOS[r.name];
                return (
                  <li className="room reveal" key={r.name}>
                    {ph && (
                      <figure className="room__photo reveal--img">
                        <Image src={ph.src} alt={ph.alt} fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
                      </figure>
                    )}
                    <h3 className="room__name">{r.name}</h3>
                    <p>{r.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Sign up ——— */}
      <section id="jelentkezes" className="section signup" aria-labelledby="jelentkezes-title">
        <div className="container signup__grid">
          <div>
            <p className="eyebrow reveal">Jelentkezés</p>
            <h2 id="jelentkezes-title" className="h2 reveal">
              Mire jelentkeznél? <em>Válassz.</em>
            </h2>
            <p className="lead reveal">
              Ovi-tenisz, gyerektenisz ingyenes próbaedzéssel, felnőtt edzés, nyári tábor, klubtagság vagy terembérlés: mindegyiknél oda jutsz,
              ahol a klub fogadja a jelentkezést.
            </p>
            <ul className="signup__points reveal">
              <li>Gyerekeknek az első edzés ingyenes és kötelezettség nélküli.</li>
              <li>Edzés és terembérlés: {CLUB.coachPhone}</li>
              <li>Minden más: {CLUB.phone} · {CLUB.email}</li>
            </ul>
          </div>
          <div className="signup__form glass reveal">
            <JoinPicker />
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Mandula <span className="nobr">utca 5.</span> <em>Várunk a pályán.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Telefon</span>
                    <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                    <span className="contact__line">
                      Edzés és terembérlés: <a href={CLUB.coachPhoneHref}>{CLUB.coachPhone}</a>
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
                      {CLUB.address}
                    </a>
                    <span className="contact__line">{CLUB.gettingThere}</span>
                  </div>
                </li>
                <li>
                  <IconClock />
                  <div>
                    <span className="contact__label">Nyitvatartás</span>
                    {HOURS.map((h) => (
                      <span className="contact__line" key={h.days}>
                        {h.days}: <strong>{h.time}</strong>
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
              <div className="social">
                <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <IconInstagram />
                </a>
                <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <IconFacebook />
                </a>
              </div>
              <div className="visit__actions">
                <a href="#foglalas" className="btn btn--accent">
                  Foglalj pályát <IconArrow />
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconPin /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__map glass reveal">
              <iframe title="Az Open Tennis Valley a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
