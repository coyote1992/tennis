import Image from "next/image";
import { EnquiryForm, PickGroup } from "@/components/shared/EnquiryForm";
import { Icon } from "@/components/shared/Icon";
import {
  AMENITIES,
  CLUB,
  COACHES,
  COURTS,
  CSR,
  FACTS,
  GROUP_LABEL,
  GROUPS,
  PRIVATE_LESSONS,
  QUOTE,
  RULES,
  STAGES,
  STORY,
  SUPPORTERS,
} from "@/lib/site";

const withPhoto = COACHES.filter((c) => c.img);
const nameOnly = COACHES.filter((c) => !c.img);

/** One court seen from above (doubles court with run-off), x/y = top-left corner. */
function Court({ x, n, hard }: { x: number; n: number; hard?: boolean }) {
  // 1 m = 4 units; run-off 36.6 × 18.3 m, court 23.77 × 10.97 m, singles 8.23 m, service line 6.40 m from the net
  const W = 73.2;
  const H = 146.4;
  const cw = 43.9;
  const ch = 95.1;
  const cx = x + (W - cw) / 2;
  const cy = 26 + (H - ch) / 2;
  const sx = cx + (cw - 32.9) / 2;
  const mid = cy + ch / 2;
  return (
    <g className="plan__court" style={{ "--i": n } as React.CSSProperties}>
      <rect x={x} y={26} width={W} height={H} rx={2} className={hard ? "plan__runoff--hard" : "plan__runoff--clay"} />
      {hard && <rect x={cx} y={cy} width={cw} height={ch} className="plan__inner--hard" />}
      <g className="plan__lines">
        <rect x={cx} y={cy} width={cw} height={ch} />
        <line x1={sx} y1={cy} x2={sx} y2={cy + ch} />
        <line x1={sx + 32.9} y1={cy} x2={sx + 32.9} y2={cy + ch} />
        <line x1={sx} y1={mid - 25.6} x2={sx + 32.9} y2={mid - 25.6} />
        <line x1={sx} y1={mid + 25.6} x2={sx + 32.9} y2={mid + 25.6} />
        <line x1={cx + cw / 2} y1={mid - 25.6} x2={cx + cw / 2} y2={mid + 25.6} />
      </g>
      <line x1={x + 4} y1={mid} x2={x + W - 4} y2={mid} className="plan__net" />
      <circle cx={x + W / 2} cy={12} r={10} className="plan__num" />
      <text x={x + W / 2} y={16} textAnchor="middle" className="plan__numtext">
        {n}
      </text>
    </g>
  );
}

function CourtPlan() {
  const xs = [0, 1, 2, 3, 4, 5, 6].map((i) => i * 80 + (i > 4 ? 18 : 0));
  return (
    <figure className="plan reveal">
      <svg viewBox="-2 -2 574 214" role="img" aria-labelledby="plan-title">
        <title id="plan-title">Hét pálya: az 1–5. salakpálya és a 6–7. Rebound Ace keménypálya (vázlat)</title>
        {xs.map((x, i) => (
          <Court key={i} x={x} n={i + 1} hard={i > 4} />
        ))}
        <path d="M2 186v8h389v-8" className="plan__brace" />
        <path d="M418 186v8h152v-8" className="plan__brace" />
        <text x={196} y={209} textAnchor="middle" className="plan__label">
          Salak · 1–5.
        </text>
        <text x={494} y={209} textAnchor="middle" className="plan__label">
          Rebound Ace · 6–7.
        </text>
      </svg>
      <figcaption>Vázlat a pályák számozásáról, nem méretarányos térkép.</figcaption>
    </figure>
  );
}

/** The three Play & Stay court lengths to scale (11 m, 18 m, 23.77 m). */
function StageCourts() {
  const lengths = [11, 18, 23.77];
  return (
    <svg className="stages__svg" viewBox="0 0 250 96" aria-hidden="true">
      {lengths.map((l, i) => {
        const w = l * 10;
        return (
          <g key={l}>
            <rect x={(250 - w) / 2} y={8 + i * 30} width={w} height={20} rx={1} fill={STAGES[i].tone} opacity={0.9} />
            <line x1={125} y1={6 + i * 30} x2={125} y2={30 + i * 30} stroke="#fff" strokeWidth={1.5} />
          </g>
        );
      })}
    </svg>
  );
}

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`label${light ? " label--light" : ""}`}>{children}</p>;
}

export default function Page() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <Image
          src="/img/klubhaz.jpg"
          alt="A BTC klubháza és salakpályái a sátorszerkezet alatt, nyáron, a Városmajori Park fái között"
          fill
          priority
          sizes="100vw"
          className="hero__img"
        />
        <div className="hero__shade" />
        <div className="container hero__inner">
          <p className="hero__kicker">
            <span className="hero__kicker-long">Budapest Tenisz Centrum · </span>Városmajor, 1122 Budapest
          </p>
          <h1 id="hero-title" className="hero__title">
            Aktív teniszélet
            <em> a Városmajor szívében</em>
          </h1>
          <p className="hero__lead">
            Hét pálya a park ősfái között, télen légsátor alatt. Edzések három éves kortól felnőttig, pályafoglalás a recepción.
          </p>
          <div className="btn-row">
            <PickGroup mode="court" className="btn btn--accent">
              Pályát foglalok <Icon name="arrow" />
            </PickGroup>
            <a href="#edzesek" className="btn btn--ghost">
              Edzést keresek
            </a>
          </div>
          <p className="hero__phone">
            <a href={CLUB.phoneHref}>
              <Icon name="phone" size={16} /> Recepció: {CLUB.phone}
            </a>
            <span>{CLUB.hours.map((h) => `${h.days} ${h.time}`).join(" · ")}</span>
          </p>
        </div>
      </section>

      <div className="facts">
        <ul className="container facts__list">
          {FACTS.map((f) => (
            <li key={f.label}>
              <b>{f.num}</b>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ——— edzések ——— */}
      <section id="edzesek" className="band" aria-labelledby="edzesek-title">
        <div className="container">
          <div className="head reveal">
            <Label>Edzések</Label>
            <h2 id="edzesek-title" className="title">
              Óvodástól <em>a felnőtt esti csoportig</em>
            </h2>
            <p className="intro">
              Négy csoport, életkor szerint. A Play & Stay-ben és a felnőtt csoportban az első alkalom ingyenes, és egyéni edzés iránt is érdeklődhetsz.
            </p>
          </div>

          <div className="groups">
            {GROUPS.map((g) => (
              <article key={g.id} id={`csoport-${g.id}`} className="group reveal">
                <div className="group__photo">
                  <Image src={g.img} alt={g.imgAlt} fill sizes="(max-width: 760px) 100vw, 50vw" />
                  {g.free && <span className="group__free">Első alkalom ingyenes</span>}
                </div>
                <div className="group__body">
                  <p className="group__ages">{g.ages}</p>
                  <h3 className="group__name">{g.name}</h3>
                  <p className="group__text">{g.text}</p>
                  {g.times && (
                    <ul className="group__times" aria-label="Időpontok">
                      {g.times.map((t) => (
                        <li key={t}>
                          <Icon name="clock" size={16} />
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                  <ul className="group__details">
                    {g.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <p className="group__coaches">
                    <span>Edző{g.coaches.length > 1 ? "k" : ""}:</span> {g.coaches.join(", ")}
                  </p>
                  <div className="group__actions">
                    <PickGroup group={GROUP_LABEL[g.id]} className="btn btn--dark">
                      Jelentkezem <Icon name="arrow" />
                    </PickGroup>
                    {g.contact && (
                      <a href={g.contact.phoneHref} className="group__contact">
                        {g.contact.name}: {g.contact.phone}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="stages reveal">
            <div className="stages__head">
              <Label>Play & Stay</Label>
              <h3 className="subtitle">Három szín, három pályaméret</h3>
              <p>
                A gyerekek a koruknak és tudásuknak megfelelő pályán, labdával és ütővel játszanak. Az edzők minden játékosnál az egyéni képességekhez mérik az eszközöket és a feladatokat.
              </p>
              <StageCourts />
            </div>
            <ol className="stages__list">
              {STAGES.map((s) => (
                <li key={s.color} style={{ "--tone": s.tone } as React.CSSProperties}>
                  <p className="stages__name">
                    {s.color} <span>{s.ages}</span>
                  </p>
                  <dl>
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
            </ol>
          </div>

          <div className="private reveal">
            <p>
              <b>Egyéni edzés.</b> {PRIVATE_LESSONS}
            </p>
            <PickGroup group={GROUP_LABEL.egyeni} className="btn btn--ghost">
              Érdeklődöm
            </PickGroup>
          </div>
        </div>
      </section>

      {/* ——— pályák ——— */}
      <section id="palyak" className="band dark" aria-labelledby="palyak-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label light>Pályák</Label>
              <h2 id="palyak-title" className="title">
                Hét pálya, <em>két borítás</em>
              </h2>
            </div>
            <p className="intro">
              Öt salakpálya és két Rebound Ace keménypálya, hetente több mint ötszáz játékórával. {COURTS.dome}
            </p>
          </div>

          <CourtPlan />

          <div className="surfaces">
            {[COURTS.clay, COURTS.hard].map((c) => (
              <article key={c.title} className="surface reveal">
                <div className="surface__photo">
                  <Image src={c.img} alt={c.imgAlt} fill sizes="(max-width: 760px) 100vw, 50vw" />
                </div>
                <p className="surface__count">
                  {c.count} pálya <span>· {c.numbers}</span>
                </p>
                <h3 className="subtitle">{c.title}</h3>
                <p className="surface__text">{c.text}</p>
              </article>
            ))}
          </div>

          <div className="rules reveal">
            <div className="rules__head">
              <h3 className="subtitle">Mielőtt pályára lépsz</h3>
              <p>Pályadíjakról és bérletekről a recepció ad tájékoztatást.</p>
              <div className="btn-row">
                <PickGroup mode="court" className="btn btn--accent">
                  Pályát foglalok <Icon name="arrow" />
                </PickGroup>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  {CLUB.phone}
                </a>
              </div>
            </div>
            <div className="rules__cols">
              {(
                [
                  ["Foglalás és lemondás", RULES.booking],
                  ["Salakpályán", RULES.clay],
                  ["Keménypályán", RULES.hard],
                ] as const
              ).map(([t, list]) => (
                <div key={t} className="rules__col">
                  <h4>{t}</h4>
                  <ul>
                    {list.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— edzők ——— */}
      <section id="edzok" className="band" aria-labelledby="edzok-title">
        <div className="container">
          <div className="head reveal">
            <Label>Edzők</Label>
            <h2 id="edzok-title" className="title">
              Akik a pálya mellett <em>állnak</em>
            </h2>
          </div>
          <ul className="coaches">
            {withPhoto.map((c) => (
              <li key={c.name} className="coach reveal">
                <div className="coach__photo">
                  <Image src={c.img!} alt={c.name} fill sizes="(max-width: 760px) 70vw, 20vw" />
                </div>
                <p className="coach__role">{c.role}</p>
                <h3 className="coach__name">{c.name}</h3>
                {c.bio && <p className="coach__bio">{c.bio}</p>}
              </li>
            ))}
          </ul>
          <p className="coaches__more reveal">
            A csoportokban edz még:{" "}
            {nameOnly.map((c, i) => (
              <span key={c.name}>
                <b>{c.name}</b> ({c.role}){i < nameOnly.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* ——— a klub ——— */}
      <section id="klub" className="band band--paper2" aria-labelledby="klub-title">
        <div className="container">
          <div className="story">
            <div className="story__text reveal">
              <Label>A klub</Label>
              <h2 id="klub-title" className="title">
                Több mint száz év tenisz <em>a park fái alatt</em>
              </h2>
              {STORY.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <div className="story__photo reveal">
              <Image src="/img/salak-sator.jpg" alt="Salakpályák a sátorszerkezet alatt, nyáron, a park fái között" fill sizes="(max-width: 900px) 100vw, 55vw" />
            </div>
          </div>

          <div className="amenities">
            {AMENITIES.map((a) => (
              <article key={a.id} className="amenity reveal">
                <div className="amenity__photo">
                  <Image src={a.img} alt={a.imgAlt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                </div>
                <h3 className="amenity__title">{a.title}</h3>
                <p>{a.text}</p>
                {a.note && <p className="amenity__note">{a.note}</p>}
              </article>
            ))}
          </div>

          <figure className="quote reveal">
            <div className="quote__photo">
              <Image src="/img/fucsovics.png" alt="" width={394} height={433} sizes="220px" />
            </div>
            <blockquote>
              <p>„{QUOTE.text}”</p>
            </blockquote>
            <figcaption>{QUOTE.name}</figcaption>
          </figure>

          <div className="care reveal">
            <h3 className="subtitle">Odafigyelünk egymásra</h3>
            <p>{CSR}</p>
          </div>

          <div className="supporters reveal">
            <p className="supporters__title">Támogatóink</p>
            <ul>
              {SUPPORTERS.map((s) => {
                // equal visual area: width ∝ sqrt(aspect)
                const h = Math.round(Math.min(64, 56 / Math.sqrt(s.w / s.h / 1.6)));
                return (
                  <li key={s.name}>
                    <Image src={s.img} alt={s.name} width={s.w} height={s.h} style={{ height: h, width: "auto" }} sizes="240px" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— foglalás / jelentkezés ——— */}
      <section id="jelentkezes" className="band" aria-labelledby="jelentkezes-title">
        <div className="container signup">
          <div className="signup__aside reveal">
            <Label>Foglalás és jelentkezés</Label>
            <h2 id="jelentkezes-title" className="title">
              Pálya vagy edzés? <em>Írd meg, visszajelzünk.</em>
            </h2>
            <p>
              Az űrlap kitöltött levelet nyit a recepciónak címezve, a foglalást a recepció igazolja vissza. Gyorsabb, ha hívsz: a recepció nyitvatartási időben veszi fel.
            </p>
            <dl className="contact-mini">
              <div>
                <dt>Recepció</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={CLUB.emailHref}>{CLUB.email}</a>
                </dd>
              </div>
              {CLUB.hours.map((h) => (
                <div key={h.days}>
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="reveal">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band dark" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <Label light>Kapcsolat</Label>
            <h2 id="kapcsolat-title" className="title">
              Szamos utca 2/c, <em>a Városmajorban</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Cím</dt>
                <dd>
                  {CLUB.address}
                  <small>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Útvonal a Google Térképen
                    </a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Recepció, pályafoglalás, étterem</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                  <small>
                    <a href={CLUB.emailHref}>{CLUB.email}</a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Nyitvatartás</dt>
                {CLUB.hours.map((h) => (
                  <dd key={h.days} className="visit__hour">
                    {h.days}: {h.time}
                  </dd>
                ))}
              </div>
            </dl>
            <div className="btn-row">
              <a href={CLUB.facebook} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href={CLUB.instagram} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
          <div className="map reveal">
            <iframe src={CLUB.mapsEmbed} title="A Budapest Tenisz Centrum a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
