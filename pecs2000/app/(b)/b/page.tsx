import Image from "next/image";
import { IconArrow, IconInstagram, IconMail, IconPhone, IconPin, IconTiktok } from "@/components/b/icons";
import { EnquiryForm } from "@/components/shared/EnquiryForm";
import { ACHIEVEMENTS, CLUB, COACHES, COURSES, FAMILY, HISTORY, METHOD, SERVICES } from "@/lib/site";

const GROUPS = ["Gyerekeknek", "Felnőtteknek", "Egyénileg"] as const;

export default function BHome() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Pécs · a Koncz Tennis Team klubja</p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz 5 éves kortól, <em>1993 óta.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Gyermek és felnőtt teniszoktatás, egyéni foglalkozások és családi tenisz, az óvodásoktól a szenior korosztályig. A
                tenisztudásodhoz és az időbeosztásodhoz igazítva.
              </p>
              <div className="team glass">
                <ul className="team__faces" aria-hidden="true">
                  {COACHES.map((c) => (
                    <li key={c.name}>
                      <Image src={c.img} alt="" width={64} height={64} style={{ objectFit: "cover", objectPosition: "50% 18%" }} />
                    </li>
                  ))}
                </ul>
                <p className="team__text">
                  Edzőink: <strong>Koncz Zsolt</strong> vezetőedző, <strong>Koncz Liliána</strong> és <strong>Koncz Levente</strong>.
                </p>
                <div className="hero__ctas">
                  <a href="#jelentkezes" className="btn btn--accent">
                    Jelentkezés <IconArrow />
                  </a>
                  <a href={CLUB.phoneHref} className="btn btn--ghost">
                    <IconPhone /> {CLUB.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ul className="facts reveal" aria-label="Röviden">
            <li className="fact">
              <span className="fact__num">1993</span>
              <span className="fact__label">óta működik a klub</span>
            </li>
            <li className="fact">
              <span className="fact__num">5 éves</span>
              <span className="fact__label">kortól a szenior korosztályig</span>
            </li>
            <li className="fact">
              <span className="fact__num">3</span>
              <span className="fact__label">edző a Koncz családból</span>
            </li>
            <li className="fact">
              <span className="fact__num">„A”</span>
              <span className="fact__label">licenszes vezetőedző, PTR Professional edzők</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— Courses ——— */}
      <section id="tanfolyamok" className="section courses" aria-labelledby="tanfolyamok-title">
        <div className="container">
          <p className="eyebrow reveal">Tanfolyamok</p>
          <h2 id="tanfolyamok-title" className="h2 reveal">
            Minden korosztálynak, <em>kis csoportokban.</em>
          </h2>
          <p className="lead reveal">{METHOD}</p>

          <div className="groups">
            {GROUPS.map((g) => (
              <div className="group reveal" key={g}>
                <p className="group__title">{g}</p>
                <ul className="group__list">
                  {COURSES.filter((c) => c.group === g).map((c) => (
                    <li className="course glass" key={c.id}>
                      <div className="course__head">
                        <h3 className="h3">{c.name}</h3>
                        {c.age && <span className="course__age">{c.age}</span>}
                      </div>
                      <p>{c.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Family tennis ——— */}
      <section id="csaladi" className="section family" aria-labelledby="csaladi-title">
        <div className="container">
          <div className="family__card glass reveal">
            <div>
              <p className="eyebrow">Szülők és gyerekek együtt</p>
              <h2 id="csaladi-title" className="h2">
                {FAMILY.title}, <em>a ti időpontotokra.</em>
              </h2>
              <p className="lead">{FAMILY.text}</p>
            </div>
            <div className="family__cta">
              <p className="family__note">Részletekért vagy időpontért hívj minket:</p>
              <a href={CLUB.phoneHref} className="btn btn--accent btn--block">
                <IconPhone /> {CLUB.phone}
              </a>
              <a href="#jelentkezes" className="btn btn--ghost btn--block">
                Jelentkezés családi teniszre
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Coaches ——— */}
      <section id="edzok" className="section coaches-section" aria-labelledby="edzok-title">
        <div className="container">
          <p className="eyebrow reveal">Edzők</p>
          <h2 id="edzok-title" className="h2 reveal">
            Egy család, <em>három edző.</em>
          </h2>
          <p className="lead reveal">
            A Koncz Tennis Team edzői a már megszerzett képesítéseik mellett folyamatosan képzik magukat a Magyar Tenisz Szövetség
            programjában.
          </p>
          <ul className="coaches">
            {COACHES.map((c) => (
              <li className="coachcard reveal" key={c.name}>
                <figure className="coachcard__photo">
                  <Image src={c.img} alt={`${c.name}, ${c.role.toLowerCase()}`} fill sizes="(max-width: 900px) 100vw, 22vw" style={{ objectFit: "cover", objectPosition: "50% 15%" }} />
                </figure>
                <p className="coachcard__name">{c.name}</p>
                <p className="coachcard__role">{c.role}</p>
                <p className="coachcard__bio">{c.bio}</p>
                <p className="coachcard__results">
                  <strong>Sikerek</strong> {c.results}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— History ——— */}
      <section id="tortenet" className="section history" aria-labelledby="tortenet-title">
        <div className="container">
          <p className="eyebrow reveal">A klub</p>
          <h2 id="tortenet-title" className="h2 h2--xl reveal">
            Több mint három évtized <em>a pécsi teniszben.</em>
          </h2>
          <p className="lead reveal">
            1993 óta nemcsak Pécs, hanem a hazai és nemzetközi teniszélet meghatározó szereplője vagyunk: versenyeket rendezünk, oktatási
            rendszert építettünk, és bajnokokat neveltünk.
          </p>
          <ol className="timeline">
            {HISTORY.map((h) => (
              <li className="timeline__item reveal" key={h.year}>
                <span className="timeline__year">{h.year}</span>
                <p>{h.text}</p>
              </li>
            ))}
          </ol>
          <ul className="wins reveal">
            {ACHIEVEMENTS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Racket service ——— */}
      <section id="szerviz" className="section service" aria-labelledby="szerviz-title">
        <div className="container">
          <p className="eyebrow reveal">Ütőszerviz</p>
          <h2 id="szerviz-title" className="h2 reveal">
            Hozd be az ütődet, <em>rendbe tesszük.</em>
          </h2>
          <p className="lead reveal">Húrozástól a súlyozásig: az ütőd állapota legalább annyit számít, mint a technikád.</p>
          <ul className="services">
            {SERVICES.map((s, i) => (
              <li className="service-card glass reveal" key={s.name}>
                <span className="service-card__num">0{i + 1}</span>
                <h3 className="h3">{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
          <p className="service__note reveal">
            Árakért és időpontért hívj a{" "}
            <a href={CLUB.phoneHref} className="inline-link">
              {CLUB.phone}
            </a>{" "}
            számon.
          </p>
        </div>
      </section>

      {/* ——— Enquiry ——— */}
      <section id="jelentkezes" className="section signup" aria-labelledby="jelentkezes-title">
        <div className="container signup__grid">
          <div>
            <p className="eyebrow reveal">Jelentkezés</p>
            <h2 id="jelentkezes-title" className="h2 reveal">
              Ne várj tovább, <em>jelentkezz.</em>
            </h2>
            <p className="lead reveal">
              Jelöld be, melyik tanfolyam érdekel, és add meg, hogyan érünk el. Felkeresünk a részletekkel: csoport, időpont, első alkalom.
            </p>
            <ul className="signup__points reveal">
              <li>Kezdőket és haladókat is várunk, gyerekeket és felnőtteket.</li>
              <li>A csoportbeosztásnál a kort és a tudásszintet is figyelembe vesszük.</li>
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
              Tüzér utca 22. <em>Várunk a pályán.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Telefon · információ, időpont</span>
                    <a href={CLUB.phoneHref}>{CLUB.phone}</a>
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
                  </div>
                </li>
                <li>
                  <IconInstagram />
                  <div>
                    <span className="contact__label">Instagram</span>
                    <a href={CLUB.instagram.url} target="_blank" rel="noopener noreferrer">
                      @{CLUB.instagram.handle}
                    </a>
                  </div>
                </li>
                <li>
                  <IconTiktok />
                  <div>
                    <span className="contact__label">TikTok</span>
                    <a href={CLUB.tiktok.url} target="_blank" rel="noopener noreferrer">
                      @{CLUB.tiktok.handle}
                    </a>
                  </div>
                </li>
              </ul>
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
              <iframe title="A Pécs 2000 Tenisz Club a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
