import Image from "next/image";
import { PriceDay } from "@/components/a/PriceDay";
import { SeasonCourts } from "@/components/a/SeasonCourts";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
import { CENTER, CLUB, COACHES, COACHING, COURTS, HOURS, INTRO, KIDS, PRICES, VISIT, fmt } from "@/lib/site";

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");

const tel = (p: string) => `tel:${p.replace(/\s/g, "")}`;

const span = (b: { from: number; to: number }) => `${b.from}:00–${b.to}:00`;

export default function Page() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <Image src="/img/park-palyak.jpg" alt="Sétány a salakos teniszpályák és a park öreg fái között" fill priority sizes="100vw" />
        </div>
        <div className="container hero__inner">
          <p className="label label--light">Folyondár Sportközpont · Óbuda</p>
          <h1 id="hero-title" className="hero__title">
            Tenisz a Kiscelli <em>parkerdő szélén.</em>
          </h1>
          <p className="hero__lead">{INTRO.lead}</p>
          <div className="btn-row">
            <a href={CLUB.phoneHref} className="btn btn--accent">
              <Icon name="phone" size={16} /> Pályafoglalás: {CLUB.phone}
            </a>
            <a href="#arak" className="btn btn--light">
              Árak <Icon name="arrowDown" size={16} />
            </a>
          </div>
        </div>
      </section>
      <div className="strip">
        <div className="container strip__inner">
          <div>
            <b>7</b>
            <span>salakpálya télen, két fedett sátorban</span>
          </div>
          <div>
            <b>8</b>
            <span>salakpálya nyáron, a szabad ég alatt</span>
          </div>
          <div>
            <b>2</b>
            <span>rekortán pálya a csarnok tetején</span>
          </div>
          <div>
            <b className="strip__time">7–22</b>
            <span>hétköznap, hétvégén 8–20 óráig</span>
          </div>
        </div>
      </div>

      {/* ——— pályák ——— */}
      <section id="palyak" className="band" aria-labelledby="palyak-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <p className="label">Teniszpályák</p>
              <h2 id="palyak-title" className="title">
                Két évszak, <em>egy park.</em>
              </h2>
            </div>
            <div>
              <p className="intro">{COURTS.lead}</p>
              <p className="intro intro--small">{INTRO.place}</p>
            </div>
          </div>
          <div className="reveal">
            <SeasonCourts />
          </div>
          <p className="note reveal">{COURTS.weather}</p>
          <ul className="perks">
            {COURTS.perks.map((p) => (
              <li key={p.title} className="reveal">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
          <div className="gallery reveal">
            <figure className="gallery__big">
              <Image src="/img/palyak-lelato.jpg" alt="Salakpályák, előtérben piros és kék nézőtéri székek" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </figure>
            <figure>
              <Image src="/img/jatek-salakon.jpg" alt="Játékos ütés közben a salakon" fill sizes="(max-width: 900px) 50vw, 25vw" />
            </figure>
            <figure>
              <Image src="/img/teto-rekortan.jpg" alt="Rekortán pálya a csarnok tetején" fill sizes="(max-width: 900px) 50vw, 25vw" />
              <figcaption>A tetőn</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ——— árak ——— */}
      <section id="arak" className="band band--paper" aria-labelledby="arak-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <p className="label">Pályabérlés · {PRICES.title}</p>
              <h2 id="arak-title" className="title">
                Egy nap, <em>órára bontva.</em>
              </h2>
            </div>
            <p className="intro">
              A salakos árak a téli szezonra szólnak ({PRICES.range}). Hétvégén olcsóbb, hétköznap 8–11 és 15–21 óra között drágább. Foglalni a recepción lehet, telefonon.
            </p>
          </div>

          <div className="reveal">
            <PriceDay />
          </div>

          <div className="tables">
            <div className="ptable reveal">
              <h3 className="subtitle">Salakos pályák</h3>
              <p className="ptable__sub">{PRICES.title}</p>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Idősáv</th>
                    <th scope="col">Alkalmi</th>
                    <th scope="col">10 alkalmas</th>
                    <th scope="col">Szezonár</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ptable__group">
                    <th colSpan={4} scope="colgroup">
                      Hétköznap
                    </th>
                  </tr>
                  {PRICES.clay.weekday.map((b) => (
                    <tr key={b.from}>
                      <th scope="row">{span(b)}</th>
                      <td>{fmt(b.alkalmi)}</td>
                      <td>{fmt(b.tizes)}</td>
                      <td>{fmt(b.szezon)}</td>
                    </tr>
                  ))}
                  <tr className="ptable__group">
                    <th colSpan={4} scope="colgroup">
                      Hétvégén
                    </th>
                  </tr>
                  {PRICES.clay.weekend.map((b) => (
                    <tr key={b.from}>
                      <th scope="row">{span(b)}</th>
                      <td>{fmt(b.alkalmi)}</td>
                      <td>{fmt(b.tizes)}</td>
                      <td>{fmt(b.szezon)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="ptable__note">Alkalmi és szezonár Ft/óra, a 10 alkalmas ár Ft/10 óra.</p>
            </div>
            <div className="ptable reveal">
              <h3 className="subtitle">Rekortán pályák</h3>
              <p className="ptable__sub">A csarnok tetején</p>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Idősáv</th>
                    <th scope="col">Alkalmi</th>
                    <th scope="col">Szezonár</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ptable__group">
                    <th colSpan={3} scope="colgroup">
                      Hétköznap
                    </th>
                  </tr>
                  {PRICES.hard.weekday.map((b) => (
                    <tr key={b.from}>
                      <th scope="row">{span(b)}</th>
                      <td>{fmt(b.alkalmi)}</td>
                      <td>{fmt(b.szezon)}</td>
                    </tr>
                  ))}
                  <tr className="ptable__group">
                    <th colSpan={3} scope="colgroup">
                      Hétvégén
                    </th>
                  </tr>
                  {PRICES.hard.weekend.map((b) => (
                    <tr key={b.from}>
                      <th scope="row">{span(b)}</th>
                      <td>{fmt(b.alkalmi)}</td>
                      <td>{fmt(b.szezon)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="ptable__note">Ft/óra. {PRICES.vat}</p>
              <div className="ptable__cta">
                <p>{COURTS.booking}</p>
                <div className="btn-row">
                  <a href={CLUB.phoneHref} className="btn btn--accent">
                    <Icon name="phone" size={16} /> {CLUB.phone}
                  </a>
                  <a href={CLUB.phone2Href} className="btn btn--ghost">
                    <Icon name="phone" size={16} /> {CLUB.phone2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— oktatók ——— */}
      <section id="oktatok" className="band" aria-labelledby="oktatok-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <p className="label">Teniszoktatás</p>
              <h2 id="oktatok-title" className="title">
                Edzőt keresel? <em>Hívd közvetlenül.</em>
              </h2>
            </div>
            <p className="intro">{COACHING.text}</p>
          </div>
          <ul className="coaches">
            {COACHES.map((c) => (
              <li key={c.name} className={`coach reveal${c.text ? " coach--bio" : ""}`}>
                <div className="coach__img">
                  {c.img ? <Image src={`/img/${c.img}`} alt={c.name} fill sizes="(max-width: 640px) 88px, (max-width: 1100px) 30vw, 270px" /> : <span aria-hidden="true">{initials(c.name)}</span>}
                </div>
                <div className="coach__body">
                  <h3>
                    {c.name}
                    {c.langs && <small>{c.langs}</small>}
                  </h3>
                  {c.text && <p className="coach__text">{c.text}</p>}
                  <p className="coach__links">
                    <a href={tel(c.phone)} className="coach__call">
                      <Icon name="phone" size={15} /> {c.phone}
                    </a>
                    {c.email && (
                      <a href={`mailto:${c.email}`} className="coach__mail">
                        {c.email}
                      </a>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="kids reveal">
            <div className="kids__photos">
              <figure>
                <Image src="/img/kovacs-gyerekekkel.jpg" alt="Edző gyerekekkel a háló mellett" fill sizes="(max-width: 900px) 50vw, 22vw" />
              </figure>
              <figure>
                <Image src="/img/locsolas-gyerekek.jpg" alt="Gyerekek nevetve futnak a pályalocsoló vízsugara elől" fill sizes="(max-width: 900px) 50vw, 22vw" />
              </figure>
            </div>
            <div className="kids__text">
              <p className="label label--light">Gyerekeknek</p>
              <h3>{KIDS.title}</h3>
              <p>{KIDS.text}</p>
              <p>{KIDS.camp}</p>
              <p className="kids__contact">
                <b>{KIDS.contact.name}</b>, {KIDS.contact.role}
              </p>
              <a href={KIDS.contact.phoneHref} className="btn btn--accent">
                <Icon name="phone" size={16} /> {KIDS.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— sportközpont ——— */}
      <section id="sportkozpont" className="band band--paper" aria-labelledby="sk-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <p className="label">A sportközpont</p>
              <h2 id="sk-title" className="title">
                Tenisz után <em>is maradj.</em>
              </h2>
            </div>
            <p className="intro">{CENTER.lead}</p>
          </div>
          <ul className="center">
            {CENTER.items.map((c) => (
              <li key={c.id} className="reveal">
                <figure>
                  <Image src={`/img/${c.img}`} alt={c.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                </figure>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
          <p className="center__hh reveal">
            <Icon name="clock" size={16} /> {CENTER.happyHour}
          </p>

          <div className="trainers reveal">
            <p className="trainers__title">Személyi edzők az edzőteremben</p>
            <ul>
              {CENTER.trainers.map((t) => (
                <li key={t.name}>
                  <div className="trainers__img">
                    <Image src={`/img/${t.img}`} alt={t.name} fill sizes="72px" />
                  </div>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.role}</span>
                    {t.phone && <a href={tel(t.phone)}>{t.phone}</a>}
                    {t.email && <a href={`mailto:${t.email}`}>{t.email}</a>}
                  </div>
                </li>
              ))}
            </ul>
            <p className="trainers__sports">{CENTER.sports}</p>
          </div>

          <div className="events reveal">
            <figure>
              <Image src="/img/rendezveny.jpg" alt="Rendezvény a csarnokban, színes fényekkel" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </figure>
            <div className="events__text">
              <h3 className="subtitle">{CENTER.events.title}</h3>
              <p>{CENTER.events.text}</p>
              <p className="events__k">Akik már itt rendeztek</p>
              <ul>
                {CENTER.events.refs.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p className="events__who">
                <b>{CLUB.events.name}</b>, {CLUB.events.role}
              </p>
              <div className="btn-row">
                <a href={CLUB.events.phoneHref} className="btn btn--accent">
                  <Icon name="phone" size={16} /> {CLUB.events.phone}
                </a>
                <a href={`mailto:${CLUB.events.email}`} className="btn btn--ghost">
                  <Icon name="mail" size={16} /> {CLUB.events.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <p className="label">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="title">
              Fent a dombon, <em>a park fái között.</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Recepció, pályafoglalás</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a> · <a href={CLUB.phone2Href}>{CLUB.phone2}</a>
                  <small>
                    <a href={CLUB.emailHref}>{CLUB.email}</a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Cím</dt>
                <dd>
                  {CLUB.address}
                  <small>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Útvonal a Google Térképen
                    </a>{" "}
                    ·{" "}
                    <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </small>
                </dd>
              </div>
            </dl>
            <div className="hours">
              <div>
                <p className="hours__k">Sportközpont</p>
                {HOURS.center.map((h) => (
                  <p key={h.days}>
                    <span>{h.days}</span> <b>{h.time}</b>
                  </p>
                ))}
              </div>
              <div>
                <p className="hours__k">Kávézó</p>
                {HOURS.cafe.map((h) => (
                  <p key={h.days}>
                    <span>{h.days}</span> <b>{h.time}</b>
                  </p>
                ))}
                <p>
                  <span>Ebéd: {HOURS.lunch.days.toLowerCase()}</span> <b>{HOURS.lunch.time}</b>
                </p>
              </div>
            </div>
            <ul className="ways">
              <li>
                <b>Tömegközlekedéssel</b> {VISIT.transit}
              </li>
              <li>
                <b>Autóval</b> {VISIT.car} {VISIT.parking}
              </li>
              <li>
                <b>Gyalog</b> {VISIT.walk}
              </li>
            </ul>
          </div>
          <div className="visit__side">
            <figure className="visit__photo reveal">
              <Image src="/img/bejarat.jpg" alt="A Folyondár bejárata virágzó bokrokkal" fill sizes="(max-width: 900px) 100vw, 46vw" />
            </figure>
            <div className="visit__form reveal">
              <h3 className="subtitle">Írj a recepciónak</h3>
              <p>Pálya, bérlet, edzőterem vagy rendezvény: a levél a {CLUB.email} címre megy.</p>
              <ContactForm />
            </div>
            <div className="map reveal">
              <iframe src={CLUB.mapsEmbed} title="A Folyondár Sportközpont a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
