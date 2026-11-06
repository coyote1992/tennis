import Image from "next/image";
import {
  IconArrow,
  IconCalendar,
  IconCheck,
  IconFacebook,
  IconMail,
  IconPhone,
  IconPin,
  IconTrophy,
  IconUsers,
} from "@/components/b/icons";
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
  PROGRAMS,
  PUB,
  SEASONS,
  STORY,
  VALUES,
} from "@/lib/site";

const FACILITY_PHOTO: Record<string, { src: string; alt: string; pos?: string }> = {
  tenisz: { src: "/img/salakpalya.jpg", alt: "Játékos a szabadtéri salakpályán", pos: "50% 45%" },
  foci: { src: "/img/focipalya.jpg", alt: "A műfüves focipálya a háló mögül", pos: "50% 55%" },
  belter: { src: "/img/biliard.jpg", alt: "Biliárdasztal a főépületben" },
};

const EVENT_PHOTOS = [
  { src: "/img/csaladi-nap.jpg", alt: "Családi nap a rendezvénysátorban, megterített asztaloknál" },
  { src: "/img/legvar.jpg", alt: "Felfújható akadálypálya egy családi napon" },
  { src: "/img/ijaszat.jpg", alt: "Íjászat egy családi napon" },
];

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Békéscsaba · Sport- és Szabadidőközpont</p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz, foci, közösség. <em>Egész évben, Békéscsabán.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Három salakos teniszpálya fűtött téli sátorral, két kivilágított műfüves focipálya, teniszoktatás gyerekeknek és felnőtteknek,
                és rendezvények a születésnaptól a több száz fős céges sportnapig.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Foglalj pályát <IconArrow />
                </a>
                <a href="#jelentkezes" className="btn btn--ghost">
                  Kérj ajánlatot
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/teli-sator.jpg"
              alt="A fűtött téli sátor belseje a salakos teniszpályák felett"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 55%" }}
            />
            <figcaption className="hero__caption">A téli sátor: ősszel és télen is salakon</figcaption>
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

      {/* ——— Courts (the dot court stands on the right) ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Salak, műfű, biliárdasztal. <em>Egy helyen.</em>
          </h2>
          <p className="lead reveal">{STORY}</p>

          <ul className="facilities">
            {FACILITIES.map((f) => {
              const ph = FACILITY_PHOTO[f.id];
              return (
                <li className="facility glass reveal" key={f.id}>
                  <figure className="facility__photo">
                    <Image src={ph.src} alt={ph.alt} fill sizes="(max-width: 900px) 100vw, 24vw" style={{ objectFit: "cover", objectPosition: ph.pos ?? "50% 50%" }} />
                  </figure>
                  <div className="facility__body">
                    <p className="tag">{f.count}</p>
                    <h3 className="h3">{f.name}</h3>
                    <p className="facility__text">{f.text}</p>
                    <ul className="checks">
                      {f.points.map((p) => (
                        <li key={p}>
                          <IconCheck /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <ul className="values glass reveal" aria-label="Miért válassz minket?">
            {VALUES.map((v) => (
              <li key={v.title}>
                <strong>{v.title}</strong>
                <span>{v.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Booking and court prices (the racket stands on the left) ——— */}
      <section id="foglalas" className="section booking" aria-labelledby="foglalas-title">
        <div className="container">
          <p className="eyebrow reveal">Foglalás</p>
          <h2 id="foglalas-title" className="h2 reveal">
            Pályát foglalnál? <em>Pár kattintás.</em>
          </h2>
          <p className="lead reveal">
            Az online foglalási naptárban látod a szabad időpontokat. Ha telefonon egyszerűbb, hívj minket: {CLUB.bookingPhone}.
          </p>

          <div className="booking__grid">
            <div className="bookcard glass reveal">
              <ol className="steps">
                {BOOKING_STEPS.map((s, i) => (
                  <li key={s.title}>
                    <span className="steps__num">0{i + 1}</span>
                    <p>
                      <strong>{s.title}.</strong> {s.text}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="bookcard__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  <IconCalendar /> Foglalási naptár
                </a>
                <a href={CLUB.bookingPhoneHref} className="btn btn--ghost">
                  <IconPhone /> {CLUB.bookingPhone}
                </a>
              </div>
            </div>

            <div className="pricecard glass reveal">
              <p className="label">
                <IconCalendar /> Teniszpálya · óradíj
              </p>
              <ul className="seasonprices">
                {SEASONS.map((s) => (
                  <li key={s.name}>
                    <div>
                      <strong>{s.name}</strong>
                      <span>
                        {s.dates} · {s.where}
                      </span>
                    </div>
                    <p className="seasonprices__price">{s.court}</p>
                  </li>
                ))}
                <li>
                  <div>
                    <strong>Edző</strong>
                    <span>2–3 fős családi vagy baráti csoportnál, a pályadíj mellé</span>
                  </div>
                  <p className="seasonprices__price">{COACH_RATE}</p>
                </li>
              </ul>
              <p className="muted">A focipályák bérléséről telefonon érdeklődj: {CLUB.bookingPhone}.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Coaching (the logo's player forms on the right) ——— */}
      <section id="oktatas" className="section coaching" aria-labelledby="oktatas-title">
        <div className="container">
          <p className="eyebrow reveal">Oktatás</p>
          <h2 id="oktatas-title" className="h2 h2--xl reveal">
            Az idő és a gyakorlás <em>egyenlő az eredménnyel.</em>
          </h2>
          <p className="lead reveal">
            Szakképzett edzők, egyéni vagy csoportos órák: a legkisebbek Play &amp; Stay programjától a kezdő és haladó csoportokon át a
            versenyzőkig.
          </p>

          <ul className="programs">
            {PROGRAMS.map((p) => (
              <li className="program glass reveal" key={p.id}>
                <p className="program__age">{p.age}</p>
                <h3 className="h3">{p.name}</h3>
                <p className="program__lead">{p.text}</p>
                <ul className="checks">
                  {p.points.map((x) => (
                    <li key={x}>
                      <IconCheck /> {x}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="adults glass reveal">
            <div className="adults__head">
              <p className="label">
                <IconUsers /> Felnőtt csoportos tanfolyam
              </p>
              <p className="adults__price">
                {ADULT_GROUPS.price} <span>{ADULT_GROUPS.per}</span>
              </p>
              <ul className="checks">
                {ADULT_GROUPS.points.map((x) => (
                  <li key={x}>
                    <IconCheck /> {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="adults__body">
              <p>{ADULT_GROUPS.either}</p>
              <p>{ADULT_GROUPS.start}</p>
              <p className="muted">{ADULT_GROUPS.small}</p>
              <p className="adults__coaches">
                Felnőtt csoportokkal foglalkozik: <strong>{ADULT_GROUPS.coaches.join(" és ")}</strong>
              </p>
              <a href="#jelentkezes" className="btn btn--accent btn--sm adults__cta">
                Jelentkezem <IconArrow />
              </a>
            </div>
          </div>

          <figure className="photo-strip glass reveal">
            <div className="photo-strip__img">
              <Image src="/img/gyerekverseny.jpg" alt="Gyerekek oklevéllel a téli teniszsátorban" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
            </div>
            <figcaption>
              <strong>Gyerekek a téli sátorban.</strong> A teniszpályákon igény szerint egyéni vagy csoportos formában, szakképzett edzők
              irányításával tanulhatják a tenisz alapjait gyerekek és felnőttek.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ——— Club (the big red ball spins behind it) ——— */}
      <section id="klub" className="section club" aria-labelledby="klub-title">
        <div className="container">
          <p className="eyebrow reveal">Klub</p>
          <h2 id="klub-title" className="h2 reveal">
            Megyei bajnok csapat. <em>Családias klub.</em>
          </h2>
          <p className="lead reveal">{CLUB_LIFE.win}</p>

          <div className="club__grid">
            <div className="team glass reveal">
              <p className="label">
                <IconTrophy /> A 2022-es bajnokcsapat
              </p>
              <ul className="team__list">
                {CLUB_LIFE.team.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="club__side">
              <div className="clubcard glass reveal">
                <p className="label">Családi napok</p>
                <p>{CLUB_LIFE.family}</p>
              </div>
              <div className="clubcard glass reveal">
                <p className="label">Versenyek</p>
                <p>
                  <strong>{CLUB_LIFE.cup.name}:</strong> {CLUB_LIFE.cup.text}
                </p>
                <p className="muted">{CLUB_LIFE.tournaments}</p>
              </div>
            </div>
          </div>

          <div className="club__photos">
            <figure className="snap reveal reveal--img">
              <Image src="/img/csoportkep.jpg" alt="Nagy csoportkép a teniszsátorban" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              <figcaption>Csoportkép a teniszsátorban</figcaption>
            </figure>
            <figure className="snap reveal reveal--img">
              <Image src="/img/dijatadas.jpg" alt="Díjátadó kupával a teniszsátorban" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover", objectPosition: "50% 35%" }} />
              <figcaption>Díjátadó a sátorban</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Events and the pub ——— */}
      <section id="rendezvenyek" className="section events" aria-labelledby="rendezvenyek-title">
        <div className="container">
          <p className="eyebrow reveal">Rendezvények</p>
          <h2 id="rendezvenyek-title" className="h2 reveal">
            Szülinaptól a céges sportnapig. <em>Segítünk megszervezni.</em>
          </h2>
          <p className="lead reveal">{EVENTS.lead}</p>
          <ul className="chips chips--lg reveal" aria-label="Rendezvénytípusok">
            {EVENTS.kinds.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>

          <ul className="venue reveal" aria-label="A helyszín">
            {EVENTS.venue.map((v) => (
              <li key={v.label} className="glass">
                <span className="venue__num">{v.num}</span>
                <span className="venue__label">{v.label}</span>
              </li>
            ))}
          </ul>

          <div className="events__grid">
            <div className="events__text glass reveal">
              <p className="label">A helyszínen</p>
              <p>{EVENTS.extras}</p>
              <p className="label events__label2">Családi- és sportnapjaink programjaiból</p>
              <ul className="chips">
                {EVENTS.attractions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <a href="#jelentkezes" className="btn btn--accent btn--sm events__cta">
                Kérj ajánlatot <IconArrow />
              </a>
            </div>
            <ul className="events__photos">
              {EVENT_PHOTOS.map((p) => (
                <li key={p.src}>
                  <figure className="snap reveal reveal--img">
                    <Image src={p.src} alt={p.alt} fill sizes="(max-width: 900px) 50vw, 22vw" style={{ objectFit: "cover" }} />
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <div className="pub glass reveal">
            <figure className="pub__photo">
              <Image src="/img/pub.jpg" alt="Vendégek a söröző pultjánál" fill sizes="(max-width: 900px) 100vw, 36vw" style={{ objectFit: "cover" }} />
            </figure>
            <div className="pub__body">
              <p className="label">Pub · 90 fős söröző</p>
              <h3 className="h3">{PUB.lead}</h3>
              <ul className="pub__menu">
                {PUB.menu.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <p className="muted">Beltéri játékok: asztalitenisz, biliárd, csocsó, darts, rex.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Offer request ——— */}
      <section id="jelentkezes" className="section signup" aria-labelledby="jelentkezes-title">
        <div className="container signup__grid">
          <div>
            <p className="eyebrow reveal">Ajánlatkérés</p>
            <h2 id="jelentkezes-title" className="h2 reveal">
              Kérj ajánlatot. <em>Oktatásra vagy rendezvényre.</em>
            </h2>
            <p className="lead reveal">
              Válaszd ki, mi érdekel, add meg a részleteket, és küldd el: a levél a {CLUB.email} címre megy, és felvesszük veled a kapcsolatot.
            </p>
            <ul className="signup__points reveal">
              <li>
                Pályafoglalás: <a href={CLUB.bookingPhoneHref}>{CLUB.bookingPhone}</a>
              </li>
              <li>
                Iroda: <a href={CLUB.officePhoneHref}>{CLUB.officePhone}</a>
              </li>
              <li>
                {CLUB.contact.name}: <a href={CLUB.contact.phoneHref}>{CLUB.contact.phone}</a>
              </li>
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
              Víztároló <span className="nobr">utca 2.</span> <em>Várunk a pályán.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Pályafoglalás</span>
                    <a href={CLUB.bookingPhoneHref}>{CLUB.bookingPhone}</a>
                    <span className="contact__line">
                      Iroda: <a href={CLUB.officePhoneHref}>{CLUB.officePhone}</a>
                    </span>
                  </div>
                </li>
                <li>
                  <IconUsers />
                  <div>
                    <span className="contact__label">Kapcsolattartó</span>
                    <span className="contact__name">{CLUB.contact.name}</span>
                    <a href={CLUB.contact.phoneHref}>{CLUB.contact.phone}</a>
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
                    <span className="contact__line">Saját parkoló 80 autónak.</span>
                  </div>
                </li>
              </ul>
              <div className="social">
                <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <IconFacebook />
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
              <iframe title="A Tréning Center a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
