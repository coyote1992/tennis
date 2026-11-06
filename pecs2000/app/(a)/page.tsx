import Image from "next/image";
import { EnquiryForm } from "@/components/shared/EnquiryForm";
import { ACHIEVEMENTS, CLUB, COACHES, COURSES, FAMILY, HISTORY, METHOD, SERVICES } from "@/lib/site";

const GROUPS = ["Gyerekeknek", "Felnőtteknek", "Egyénileg"] as const;

function Ornament() {
  return (
    <div className="ornament" aria-hidden="true">
      <Image src="/img/cimer.svg" alt="" width={46} height={46} />
    </div>
  );
}

export default function ClassicHome() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero dark" aria-labelledby="hero-title">
        <div className="container">
          <Image src="/img/cimer.svg" alt="A Pécs 2000 Tenisz Club címere: keresztbe tett teniszütők babérkoszorúban" width={210} height={210} className="hero__crest" priority />
          <p className="hero__est">Alapítva 1993</p>
          <h1 id="hero-title">
            Pécs 2000 Tenisz Club
            <em>Teniszoktatás öt éves kortól a szenior korosztályig</em>
          </h1>
          <p className="hero__lead">
            Gyerek- és felnőttcsoportok, egyéni foglalkozások, családi tenisz és ütőszerviz. A klubot a Koncz Tennis Team alapította, és ma
            is a Koncz család edzői vezetik.
          </p>
          <div className="btn-row">
            <a href="#jelentkezes" className="btn btn--accent">
              Jelentkezés tanfolyamra
            </a>
            <a href={CLUB.phoneHref} className="btn btn--ghost">
              {CLUB.phone}
            </a>
          </div>
          <ul className="pillars" aria-label="Röviden">
            <li>
              <b>„A” licensz</b>
              <span>vezetőedző, PTR Professional edzők</span>
            </li>
            <li>
              <b>Play&amp;Stay</b>
              <span>és a Koncz Tennis Team saját oktatási rendszere</span>
            </li>
            <li>
              <b>Iskolatenisz</b>
              <span>az országban elsők között indítottuk</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— I. courses ——— */}
      <section id="tanfolyamok" className="band" aria-labelledby="tanfolyamok-title">
        <div className="container">
          <div className="head">
            <p className="chapter reveal">I. · Tanfolyamok</p>
            <h2 id="tanfolyamok-title" className="title title--center reveal">
              Mit tanítunk <em>meg neked</em>
            </h2>
            <p className="intro intro--center reveal">{METHOD}</p>
          </div>
          <div className="courses">
            {GROUPS.map((g) => (
              <div className="course-group reveal" key={g}>
                <h3 className="course-group__title">{g}</h3>
                {COURSES.filter((c) => c.group === g).map((c) => (
                  <div className="course" key={c.id}>
                    <h3>{c.name}</h3>
                    {c.age && <span className="course__age">{c.age}</span>}
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="courses__note reveal">A csoportokat életkor és tudásszint szerint állítjuk össze; a felnőtt csoportok 3–6 fősek.</p>
        </div>
      </section>

      {/* ——— II. family ——— */}
      <section id="csaladi" className="band band--paper2" aria-labelledby="csaladi-title">
        <div className="container">
          <div className="family">
            <div>
              <p className="chapter chapter--left reveal">II. · {FAMILY.title}</p>
              <h2 id="csaladi-title" className="family__quote reveal">
                Szülő és gyerek, <em>egy pályán.</em>
              </h2>
            </div>
            <div className="family__text reveal">
              <p>{FAMILY.text}</p>
              <div className="btn-row">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  Időpont egyeztetése
                </a>
                <a href="#jelentkezes" className="btn btn--ghost">
                  Jelentkezés
                </a>
              </div>
              <p className="family__note">Bővebb információ és időpont: {CLUB.phone}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— III. coaches ——— */}
      <section id="edzok" className="band" aria-labelledby="edzok-title">
        <div className="container">
          <div className="head">
            <p className="chapter reveal">III. · Edzőink</p>
            <h2 id="edzok-title" className="title title--center reveal">
              A Koncz család, <em>a pálya mellett</em>
            </h2>
          </div>
          <div className="coaches">
            {COACHES.map((c) => (
              <article className="coach reveal" key={c.name}>
                <div className="coach__frame">
                  <Image src={c.img} alt={`${c.name} teniszütővel`} fill sizes="(max-width: 640px) 90vw, (max-width: 1060px) 45vw, 340px" />
                </div>
                <p className="coach__role">{c.role}</p>
                <h3>{c.name}</h3>
                <p className="coach__bio">{c.bio}</p>
                <p className="coach__results">{c.results}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— IV. history ——— */}
      <section id="tortenet" className="band dark" aria-labelledby="tortenet-title">
        <div className="container">
          <div className="head">
            <p className="chapter chapter--left reveal">IV. · A klub</p>
            <h2 id="tortenet-title" className="title reveal">
              1993 óta a hazai <em>és nemzetközi teniszéletben</em>
            </h2>
          </div>
          <div className="history">
            <ol className="timeline">
              {HISTORY.map((h) => (
                <li key={h.year} className="reveal">
                  <span className="timeline__year">{h.year}</span>
                  <p>{h.text}</p>
                </li>
              ))}
            </ol>
            <aside className="honours reveal" aria-labelledby="honours-title">
              <Image src="/img/cimer.svg" alt="" width={92} height={92} />
              <h3 id="honours-title">Eredményeink</h3>
              <ul>
                {ACHIEVEMENTS.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ——— V. racket service ——— */}
      <section id="szerviz" className="band" aria-labelledby="szerviz-title">
        <div className="container container--narrow">
          <div className="head">
            <p className="chapter reveal">V. · Ütőszerviz</p>
            <h2 id="szerviz-title" className="title title--center reveal">
              Az ütőd is <em>formában legyen</em>
            </h2>
            <p className="intro intro--center reveal">Húrozás automata géppel, grip, nyél és súlyozás: hozd be az ütődet, és megbeszéljük, mire van szüksége.</p>
          </div>
          <ul className="menu-list">
            {SERVICES.map((s) => (
              <li key={s.name} className="reveal">
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
          <p className="service-note reveal">
            Érdeklődni: <a href={CLUB.phoneHref}>{CLUB.phone}</a>
          </p>
        </div>
      </section>

      <Ornament />

      {/* ——— VI. enquiry ——— */}
      <section id="jelentkezes" className="band" aria-labelledby="jelentkezes-title">
        <div className="container">
          <div className="signup">
            <div className="signup__aside">
              <p className="chapter chapter--left reveal">VI. · Jelentkezés</p>
              <h2 id="jelentkezes-title" className="title reveal">
                Ne várj tovább, <em>jelentkezz.</em>
              </h2>
              <p className="intro reveal">Írd meg, melyik tanfolyam érdekel, és felkeresünk a részletekkel. Ha bizonytalan vagy a szinteddel, szintfelmérés után segítünk dönteni.</p>
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
              Tüzér utca 22. <em>Várunk a pályán.</em>
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
                  </dd>
                </div>
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                    <small>Tanfolyamok, családi tenisz, időpontok</small>
                  </dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a href={CLUB.emailHref}>{CLUB.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Kövess minket</dt>
                  <dd>
                    <a href={CLUB.instagram.url} target="_blank" rel="noopener noreferrer">
                      @{CLUB.instagram.handle}
                    </a>
                    <small>
                      TikTok:{" "}
                      <a href={CLUB.tiktok.url} target="_blank" rel="noopener noreferrer">
                        @{CLUB.tiktok.handle}
                      </a>
                    </small>
                  </dd>
                </div>
              </dl>
              <div className="btn-row">
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Útvonal
                </a>
                <a href="#jelentkezes" className="btn btn--ghost">
                  Jelentkezés
                </a>
              </div>
            </div>
            <div className="map reveal">
              <iframe title="A Pécs 2000 Tenisz Club a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
