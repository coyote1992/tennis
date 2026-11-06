import Image from "next/image";
import { IconArrow, IconCalendar, IconCheck, IconClock, IconFacebook, IconInstagram, IconMail, IconPhone, IconPin, IconTiktok } from "@/components/b/icons";
import { EnquiryForm } from "@/components/shared/EnquiryForm";
import { BOOKING_WHY, CLUB, COACHES, COACHING, EVENTS, EXTRAS, FACTS, HOURS, REVIEWS, RULES, SEASONS, SPORTS, VENUE } from "@/lib/site";

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("");

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Győr · tenisz, padel, squash, bowling</p>
            <h1 id="hero-title" className="h1 reveal">
              Ha ütős sport, <em>akkor Teniszcentrum.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Modern tenisz-, padel- és squashpályák, bowling, rendezvényterem és baráti légkör, 2006 óta. Stabil szakmai háttér,
                szakképzett edzők, és egy közösség, ahol mindig pattog a labda.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Foglalj pályát <IconArrow />
                </a>
                <a href="#jelentkezes" className="btn btn--ghost">
                  Jelentkezz oktatásra
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/padel-terasz.jpg"
              alt="A kék szabadtéri padelpálya, mögötte a terasz és a teniszpályák sátra"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 55%" }}
            />
            <figcaption className="hero__caption">Szabadtéri padelpálya, mögötte a terasz és a teniszsátor</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Röviden">
            {FACTS.map((f) => (
              <li className="fact" key={f.num}>
                <span className="fact__num">{f.num}</span>
                <span className="fact__label">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Sports ——— */}
      <section id="sportagak" className="section sports" aria-labelledby="sportagak-title">
        <div className="container">
          <p className="eyebrow reveal">Sportágak</p>
          <h2 id="sportagak-title" className="h2 reveal">
            Több sportág, <em>egy helyszín.</em>
          </h2>
          <p className="lead reveal">
            Télen is játszhatsz: a téli szezonban ({SEASONS.winter}) négy teniszpályát fűtött sátorral fedünk, a padelcsarnok télen fűtött,
            nyáron hűtött.
          </p>

          <ul className="sportlist">
            {SPORTS.map((s) => (
              <li className="sport glass reveal" key={s.id}>
                <div className="sport__head">
                  <h3 className="h3">{s.name}</h3>
                  <span className="sport__courts">{s.courts}</span>
                </div>
                <p className="sport__tagline">{s.tagline}</p>
                <p className="sport__text">{s.text}</p>
                <ul className="sport__features">
                  {s.features.map((f) => (
                    <li key={f}>
                      <IconCheck /> {f}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <ul className="extras reveal" aria-label="A pályákon túl">
            {EXTRAS.map((e) => (
              <li key={e.name}>
                <strong>{e.name}</strong>
                <span>{e.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Booking ——— */}
      <section id="foglalas" className="section booking" aria-labelledby="foglalas-title">
        <div className="container">
          <p className="eyebrow reveal">Pályafoglalás</p>
          <h2 id="foglalas-title" className="h2 reveal">
            Foglalj pályát <em>pár kattintással.</em>
          </h2>
          <p className="lead reveal">Teniszt, padelt, squasht és bowlingot is online foglalhatsz, a SportMate appban, bármikor.</p>

          <div className="booking__grid">
            <div className="booking__card glass reveal">
              <p className="rules__title">Miért jó online foglalni?</p>
              <ul className="checks">
                {BOOKING_WHY.map((w) => (
                  <li key={w}>
                    <IconCheck /> {w}
                  </li>
                ))}
              </ul>
              <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                Foglalok <IconArrow />
              </a>
            </div>
            <div className="booking__card glass reveal">
              <p className="rules__title">
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
              <p className="booking__season">
                <IconCalendar /> Nyári szezon: {SEASONS.summer} · Téli szezon: {SEASONS.winter}
              </p>
              <p className="booking__note">Egész évben nyitva, a karbantartási és egyes ünnepnapok kivételével.</p>
            </div>
          </div>

          <ul className="rules">
            {RULES.map((r) => (
              <li className="rule reveal" key={r.title}>
                <h3 className="rule__title">{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Coaching ——— */}
      <section id="oktatas" className="section coaching" aria-labelledby="oktatas-title">
        <div className="container">
          <p className="eyebrow reveal">Oktatás</p>
          <h2 id="oktatas-title" className="h2 h2--xl reveal">
            Kezdd edzővel, <em>fejlődj játékosan.</em>
          </h2>
          <p className="lead reveal">{COACHING.lead}</p>

          <ol className="steps reveal">
            <li>
              <span className="steps__num">01</span>
              <p>
                <strong>Jelentkezel.</strong> Megadod a sportágat, hogy egyéni vagy csoportos órát szeretnél, a tudásszinted és hogy mikor érsz
                rá.
              </p>
            </li>
            <li>
              <span className="steps__num">02</span>
              <p>
                <strong>Egy edzőnk keres meg.</strong> Felvázolja a lehetőségeket, és ha kell, bevon egy kollégát is, hogy a neked
                megfelelő szakembernél landolj.
              </p>
            </li>
          </ol>

          <div className="kids glass reveal">
            <figure className="kids__photo">
              <Image src="/img/gyerekek-salak.jpg" alt="Gyerekek ütőkkel a salakos teniszpályán, edzés közben" fill sizes="(max-width: 900px) 100vw, 240px" style={{ objectFit: "cover" }} />
            </figure>
            <div>
              <p className="rules__title">Gyerekeknek</p>
              <p className="kids__text">{COACHING.kids}</p>
              <p className="kids__text">{COACHING.camps}</p>
            </div>
          </div>

          <h3 className="team__title reveal">Edzőink</h3>
          <ul className="coaches">
            {COACHES.map((c) => (
              <li className="coachcard reveal" key={c.name}>
                <figure className="coachcard__photo">
                  {c.img ? (
                    <Image src={c.img} alt={`${c.name}, ${c.sports.toLowerCase()} edző`} fill sizes="(max-width: 640px) 50vw, 18vw" style={{ objectFit: "cover", objectPosition: "50% 20%" }} />
                  ) : (
                    <span className="coachcard__mono" aria-hidden="true">
                      {initials(c.name)}
                    </span>
                  )}
                </figure>
                <p className="coachcard__name">{c.name}</p>
                <p className="coachcard__role">{c.sports}</p>
              </li>
            ))}
          </ul>
          <p className="coaches__note reveal">A központban szakmailag önálló edzők tartanak egyéni és csoportos foglalkozásokat, saját módszereik szerint.</p>
        </div>
      </section>

      {/* ——— Events ——— */}
      <section id="esemenyek" className="section events" aria-labelledby="esemenyek-title">
        <div className="container">
          <p className="eyebrow reveal">Események</p>
          <h2 id="esemenyek-title" className="h2 reveal">
            Ahol a játék <em>élménnyé válik.</em>
          </h2>
          <ul className="eventlist">
            {EVENTS.map((e, i) => (
              <li className={`event glass reveal${i === 0 ? " event--next" : ""}`} key={e.title}>
                <span className="event__tag">{e.tag}</span>
                <h3 className="h3">{e.title}</h3>
                {e.when && (
                  <p className="event__when">
                    <IconCalendar /> {e.when}
                  </p>
                )}
                <p className="event__text">{e.text}</p>
              </li>
            ))}
          </ul>
          <a href={CLUB.events} target="_blank" rel="noopener noreferrer" className="btn btn--ghost reveal">
            Eseménynaptár a Facebookon <IconArrow />
          </a>
        </div>
      </section>

      {/* ——— Celebrations & corporate (the spinning ball sits behind it) ——— */}
      <section id="rendezvenyek" className="section venue" aria-labelledby="rendezvenyek-title">
        <div className="container">
          <p className="eyebrow reveal">Rendezvények</p>
          <h2 id="rendezvenyek-title" className="h2 reveal">
            Ünnepeljetek <em>nálunk.</em>
          </h2>

          <div className="venue__grid">
            <article className="venue__card glass reveal">
              <p className="rules__title">Családi események</p>
              <h3 className="h3">Születésnap, névnap, évforduló</h3>
              <p>{VENUE.family}</p>
            </article>
            <article className="venue__card glass reveal">
              <p className="rules__title">Céges rendezvények</p>
              <h3 className="h3">Csapatépítő, workshop, sportnap</h3>
              <p>{VENUE.corporate}</p>
            </article>
          </div>
          <div className="venue__cta reveal">
            <a href={CLUB.emailHref + "?subject=" + encodeURIComponent("Ajánlatkérés rendezvényre")} className="btn btn--accent">
              <IconMail /> Ajánlatot kérek
            </a>
            <a href={CLUB.phoneHref} className="btn btn--ghost">
              <IconPhone /> {CLUB.phone}
            </a>
          </div>

          <div className="venue__photos">
            <figure className="venue__photo venue__photo--tall reveal reveal--img">
              <Image src="/img/bowling-uv.jpg" alt="A bowlingpálya UV-fényben" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
              <figcaption>Bowling, UV-fényben</figcaption>
            </figure>
            <figure className="venue__photo reveal reveal--img">
              <Image src="/img/rendezveny.jpg" alt="Hidegtálas catering egy rendezvényen" fill sizes="(max-width: 900px) 100vw, 35vw" style={{ objectFit: "cover" }} />
              <figcaption>Catering</figcaption>
            </figure>
            <figure className="venue__photo reveal reveal--img">
              <Image src="/img/bufe.jpg" alt="A büfé pultja" fill sizes="(max-width: 900px) 100vw, 35vw" style={{ objectFit: "cover" }} />
              <figcaption>Büfé</figcaption>
            </figure>
            <figure className="venue__photo venue__photo--wide reveal reveal--img">
              <Image src="/img/bowling.jpg" alt="A két bowlingpálya" fill sizes="(max-width: 900px) 100vw, 70vw" style={{ objectFit: "cover" }} />
              <figcaption>2 bowlingpálya és klubhelyiség</figcaption>
            </figure>
          </div>

          <ul className="reviews">
            {REVIEWS.map((r) => (
              <li className="review glass reveal" key={r}>
                <p>„{r}”</p>
                <span>Vendégeink szavaival</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Enquiry ——— */}
      <section id="jelentkezes" className="section signup" aria-labelledby="jelentkezes-title">
        <div className="container signup__grid">
          <div>
            <p className="eyebrow reveal">Jelentkezés</p>
            <h2 id="jelentkezes-title" className="h2 reveal">
              Edzőt vagy <em>partnert keresel?</em>
            </h2>
            <p className="lead reveal">{COACHING.how}</p>
            <ul className="signup__points reveal">
              <li>Tenisz, padel és squash, kezdőknek és haladóknak.</li>
              <li>Ha kifejezetten egy edzőhöz jelentkeznél, írd meg az üzenetben.</li>
              <li>Játszótársat is kereshetsz: válaszd a „Partnert keresek” fület.</li>
              <li>Inkább telefonálnál? {CLUB.phone}</li>
            </ul>
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
              Gulyás István utca 3. <em>Várunk a pályán.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Telefon · recepció</span>
                    <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                    <a href={CLUB.phone2Href} className="contact__second">
                      {CLUB.phone2}
                    </a>
                  </div>
                </li>
                <li>
                  <IconMail />
                  <div>
                    <span className="contact__label">E-mail</span>
                    <a href={CLUB.emailHref}>{CLUB.email}</a>
                    <span className="contact__line">
                      {CLUB.manager.name}, {CLUB.manager.role}
                    </span>
                  </div>
                </li>
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address}
                    </a>
                    <span className="contact__line">Ingyenes parkolás</span>
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
                <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <IconFacebook />
                </a>
                <a href={CLUB.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <IconInstagram />
                </a>
                <a href={CLUB.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <IconTiktok />
                </a>
              </div>
              <div className="visit__actions">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Foglalj pályát <IconArrow />
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconPin /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__map glass reveal">
              <iframe title="A Marcal Teniszcentrum a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
