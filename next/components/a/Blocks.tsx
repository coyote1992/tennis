import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  EVENTS,
  FAQ,
  type Faq,
  GOOD_MORNING_CLUB,
  HOURS,
  JUNIOR_LEVELS,
  JUNIOR_TERM,
  KOREDZES,
  PRICE_BANDS,
  SITE,
  TRAINER,
  WEEKDAYS,
  ft,
  num,
  scheduleRows,
} from "@/lib/site";
import { Icon } from "../shared/Icon";

/* ——— headings ——— */
export function Head({
  eyebrow,
  title,
  lead,
  center,
  aside,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  aside?: ReactNode;
  id?: string;
}) {
  const body = (
    <div className={aside ? "" : undefined}>
      {eyebrow && <p className="eyebrow reveal">{eyebrow}</p>}
      <h2 className="h2 reveal" id={id}>
        {title}
      </h2>
      {lead && <p className="lead reveal" style={{ marginTop: 18 }}>{lead}</p>}
    </div>
  );
  if (aside)
    return (
      <div className="head head--split">
        {body}
        <div className="reveal">{aside}</div>
      </div>
    );
  return <div className={`head${center ? " head--center" : ""}`}>{body}</div>;
}

/* ——— subpage hero ——— */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  children,
  short,
  position,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  image: string;
  imageAlt: string;
  children?: ReactNode;
  short?: boolean;
  position?: string;
}) {
  return (
    <section className={`phero${short ? " phero--short" : ""}`}>
      <div className="phero__media">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" style={{ objectPosition: position ?? "50% 50%" }} />
      </div>
      <div className="container phero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h1">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children && <div className="btn-row">{children}</div>}
      </div>
    </section>
  );
}

/* ——— junior levels ——— */
export function JuniorLevels() {
  return (
    <div className="levels">
      {JUNIOR_LEVELS.map((l) => (
        <article key={l.id} className="level reveal">
          <div className="level__img">
            <Image src={l.image} alt={l.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" />
          </div>
          <div className="level__body">
            <span className="level__tag">
              <span className="level__dot" style={{ ["--c" as string]: l.color }} />
              {l.court}
            </span>
            <h3>{l.name}</h3>
            <p className="level__who">{l.who}</p>
            {l.groups.map((g) => (
              <div key={g.id} className="level__group">
                {l.groups.length > 1 && <h4>{g.name}</h4>}
                <ul className="slotlist">
                  {g.slots.map((s) => {
                    const [day, ...t] = s.split(" ");
                    return (
                      <li key={s}>
                        <span>{day}</span>
                        <b>{t.join(" ")}</b>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            <div className="level__cta">
              <Link className="textlink" href={`/jelentkezes?program=junior&csoport=${l.groups[0].id}`}>
                Jelentkezés: {l.name} <Icon name="arrow" size={15} />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ——— weekly schedule (table on wide screens, cards on narrow) ——— */
export function Schedule() {
  const rows = scheduleRows();
  return (
    <>
      <div className="schedule reveal">
        <table>
          <caption className="visually-hidden">Junior csoportok heti órarendje, {JUNIOR_TERM}</caption>
          <thead>
            <tr>
              <th scope="col">Csoport</th>
              {WEEKDAYS.map((d) => (
                <th scope="col" key={d}>
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <th scope="row">
                  <span className="level__dot" style={{ ["--c" as string]: r.level.color }} />
                  {r.name}
                </th>
                {r.cells.map((c, i) => (
                  <td key={i}>{c || <span aria-label="nincs edzés" className="muted">—</span>}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="schedule-cards">
        {rows.map((r) => (
          <div key={r.id}>
            <h3>
              <span className="level__dot" style={{ ["--c" as string]: r.level.color }} />
              {r.name}
            </h3>
            <ul className="slotlist">
              {r.cells.map((c, i) =>
                c ? (
                  <li key={i}>
                    <span>{WEEKDAYS[i]}</span>
                    <b>{c}</b>
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

/* ——— adult programmes ——— */
export function AdultCards() {
  return (
    <div className="cards">
      <article className="card reveal">
        <div className="card__img">
          <Image src="/images/studio-kettlebells.jpg" alt="Kettlebellek sorban a mozgásstúdió padlóján" fill sizes="(max-width: 900px) 100vw, 33vw" />
        </div>
        <div className="card__body">
          <span className="card__kicker">Egyéni · {TRAINER.name}</span>
          <h3 className="h3">Személyi edzés</h3>
          <p>A saját állapotodhoz, céljaidhoz és tempódhoz igazítva: erő, mobilitás, állóképesség, fájdalommentesebb mozgás.</p>
          <dl className="card__meta">
            <div>
              <dt>Helyszín</dt>
              <dd>Mozgásstúdió</dd>
            </div>
            <div>
              <dt>Időpont</dt>
              <dd>Egyeztetés szerint</dd>
            </div>
          </dl>
          <div className="card__cta">
            <Link className="textlink" href="/szemelyi-edzes">
              A személyi edzésről <Icon name="arrow" size={15} />
            </Link>
          </div>
        </div>
      </article>
      <article className="card reveal">
        <div className="card__img">
          <Image src="/images/studio-corner.jpg" alt="Medicinlabdák, kettlebellek és gimnasztikai labda a stúdió sarkában" fill sizes="(max-width: 900px) 100vw, 33vw" />
        </div>
        <div className="card__body">
          <span className="card__kicker">Kiscsoport · {TRAINER.name}</span>
          <h3 className="h3">Köredzés</h3>
          <p>Funkcionális kiscsoportos edzés: mozgásminőség, erő, mobilitás és állóképesség, személyes odafigyeléssel.</p>
          <dl className="card__meta">
            <div>
              <dt>Mikor</dt>
              <dd>{KOREDZES.whenShort}</dd>
            </div>
            <div>
              <dt>Részvételi díj</dt>
              <dd>{ft(KOREDZES.fee)}</dd>
            </div>
          </dl>
          <div className="card__cta">
            <Link className="textlink" href="/csoportos-orak#koredzes">
              A Köredzésről <Icon name="arrow" size={15} />
            </Link>
          </div>
        </div>
      </article>
      <article className="card reveal">
        <div className="card__img">
          <Image src="/images/studio-house.jpg" alt="A mozgásstúdió faháza a fák alatt, előtte virágokkal" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectPosition: "50% 60%" }} />
        </div>
        <div className="card__body">
          <span className="card__kicker">Reggel · Mindenkinek</span>
          <h3 className="h3">Good Morning Club</h3>
          <p>Reggeli közös mozgás: mobilizálás, nyújtás, keringésfokozás. Frissen és energikusan indulsz neki a napnak.</p>
          <dl className="card__meta">
            <div>
              <dt>Mikor</dt>
              <dd>{GOOD_MORNING_CLUB.whenShort}</dd>
            </div>
            <div>
              <dt>Részvételi díj</dt>
              <dd>{ft(GOOD_MORNING_CLUB.fee)}</dd>
            </div>
          </dl>
          <div className="card__cta">
            <Link className="textlink" href="/csoportos-orak#good-morning-club">
              A Good Morning Clubról <Icon name="arrow" size={15} />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

/* ——— court fees ——— */
export function PriceTable() {
  return (
    <div className="pricetable reveal">
      <table>
        <caption className="visually-hidden">
          Pályabérleti díjak, {SITE.season.label.toLowerCase()}, forint / pálya / óra
        </caption>
        <thead>
          <tr>
            <th scope="col">Időszak</th>
            <th scope="col" className="col-price">
              Alkalmi
              <small>bérlet nélkül</small>
            </th>
            <th scope="col" className="col-price">
              Bérletes
              <small>rendszeres játékra</small>
            </th>
          </tr>
        </thead>
        <tbody>
          {PRICE_BANDS.map((b) => (
            <tr key={b.label}>
              <th scope="row">
                {b.label}
                <small>{b.time}</small>
              </th>
              <td>
                <b>{num(b.casual)}</b>
                <span>Ft / óra</span>
              </td>
              <td className="is-pass">
                <b>{num(b.pass)}</b>
                <span>Ft / óra</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="pricetable__foot">
        {SITE.season.label}, {SITE.season.untilIg}. Az óradíj pályánként értendő.
      </p>
    </div>
  );
}

export function HoursPanel({ withBank = true }: { withBank?: boolean }) {
  return (
    <div className="panel reveal">
      <h3>Nyitvatartás</h3>
      <dl className="dl">
        {HOURS.map((h) => (
          <div key={h.days}>
            <dt>{h.days}</dt>
            <dd>
              {h.time}
              {h.note && <small>{h.note}</small>}
            </dd>
          </div>
        ))}
      </dl>
      <p className="small muted" style={{ marginTop: 18 }}>
        Kedvezményes bérletárakért írj a{" "}
        <a className="inline-link" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>{" "}
        címre, vagy hívj:{" "}
        <a className="inline-link" href={SITE.phone.href}>
          {SITE.phone.display}
        </a>
        .
      </p>
      {withBank && (
        <p className="small muted" style={{ margin: 0 }}>
          Az egyesület bankszámlaszáma: {SITE.bank.name}, <span className="num">{SITE.bank.account}</span>
        </p>
      )}
    </div>
  );
}

/* ——— tournaments ——— */
export function Events() {
  return (
    <div className="events">
      {EVENTS.map((e) => (
        <article key={e.name} className="event reveal">
          <span className="badge">Lezajlott</span>
          <span className="event__date">{e.date}</span>
          <h3>{e.name}</h3>
          <p>Nevezési díj volt: {ft(e.fee)} / fő</p>
          {e.note && <p>{e.note}</p>}
        </article>
      ))}
    </div>
  );
}

/* ——— FAQ (no JavaScript: details/summary) ——— */
export function FaqList({ keys, links }: { keys: (keyof typeof FAQ)[]; links?: Partial<Record<keyof typeof FAQ, ReactNode>> }) {
  return (
    <div className="faq">
      {keys.map((k, i) => {
        const f: Faq = FAQ[k];
        return (
          <details key={k} open={i === 0}>
            <summary>
              {f.q}
              <Icon name="plus" size={22} />
            </summary>
            <div className="faq__a">
              {f.a.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {links?.[k]}
            </div>
          </details>
        );
      })}
    </div>
  );
}

/* ——— closing CTA ——— */
export function CtaBand({ title, primary = { href: "/jelentkezes", label: "Jelentkezés edzésre" } }: { title: ReactNode; primary?: { href: string; label: string } }) {
  return (
    <section className="ctaband">
      <div className="container">
        <h2 className="h2 reveal">{title}</h2>
        <div className="btn-row reveal">
          <Link href={primary.href} className="btn btn--primary">
            {primary.label}
          </Link>
          <a href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            Pályafoglalás <Icon name="arrowUpRight" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ——— three steps ——— */
export function Steps({ items, row }: { items: { title: string; text: ReactNode }[]; row?: boolean }) {
  return (
    <ol className={`steps${row ? " steps--row" : ""}`}>
      {items.map((s, i) => (
        <li key={s.title} className="step reveal">
          <span className="step__num">0{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
