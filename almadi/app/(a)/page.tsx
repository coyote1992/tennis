import Image from "next/image";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
import { SeasonStrip } from "@/components/shared/SeasonStrip";
import { Weather } from "@/components/shared/Weather";
import { BOOKING_STEPS, CLUB, COURTS, FACTS, MILESTONES, PRICES, SEASON, STORY } from "@/lib/site";

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`label${light ? " label--light" : ""}`}>{children}</p>;
}

function BookingButton({ children = "Pályafoglalás a Foggóban" }: { children?: React.ReactNode }) {
  return (
    <a href={CLUB.booking} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
      {children} <Icon name="arrowUpRight" size={17} />
    </a>
  );
}

export default function Page() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="hero__kicker">Balatonalmádi · {CLUB.place}</p>
            <h1 id="hero-title" className="hero__title">
              Tenisz a liget fái alatt, <span>1925 óta.</span>
            </h1>
            <p className="hero__lead">
              Hat salakpálya esti világítással, a Wesselényi strand szomszédságában, pár lépésre a Balatontól. Szabadtéri szezon tavasztól október végéig.
            </p>
            <div className="btn-row">
              <BookingButton />
              <a href={CLUB.phoneHref} className="btn btn--ghost">
                <Icon name="phone" size={17} /> {CLUB.phone}
              </a>
            </div>
          </div>
          <figure className="hero__figure">
            <div className="hero__photo">
              <Image
                src="/img/liget-dron.jpg"
                alt="A Szent Erzsébet liget felülről ősszel: a hat salakpálya a park fái között, mögötte a Balaton"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
              />
            </div>
            <Weather className="hero__wx" />
          </figure>
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

      {/* ——— szezon ——— */}
      <section id="szezon" className="band" aria-labelledby="szezon-title">
        <div className="container">
          <div className="head reveal">
            <Label>Szezon</Label>
            <h2 id="szezon-title" className="title">
              Tavasztól október végéig, <span>a szabadban.</span>
            </h2>
          </div>
          <div className="seasonwrap">
            <SeasonStrip className="reveal" />
            <div className="status reveal">
              <p className="status__now">
                <span className={`status__dot${SEASON.closed ? " is-closed" : ""}`} aria-hidden="true" />
                Most: {SEASON.closed ? SEASON.status.toLowerCase() : "nyitva"}
              </p>
              {SEASON.closed && <p className="status__note">{SEASON.note}</p>}
              <dl className="status__list">
                <div>
                  <dt>Nyitás</dt>
                  <dd>{SEASON.reopen}</dd>
                </div>
                <div>
                  <dt>A szezonban</dt>
                  <dd>minden nap {CLUB.hours}</dd>
                </div>
                <div>
                  <dt>Esős időben</dt>
                  <dd>
                    előtte hívj: <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ——— pályák és árak ——— */}
      <section id="palyak" className="band dark" aria-labelledby="palyak-title">
        <div className="container courts">
          <figure className="courts__figure reveal">
            <div className="courts__photo">
              <Image src="/img/palyak-felulrol.jpg" alt="A hat salakpálya felülről, két sorban, egy esős őszi nap után" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <figcaption>A hat pálya felülről, két sorban, egy esős őszi nap után.</figcaption>
          </figure>
          <div className="courts__text reveal">
            <Label light>Pályák és árak</Label>
            <h2 id="palyak-title" className="title">{COURTS.title}</h2>
            <p className="intro">{COURTS.text}</p>
            <ul className="courts__points">
              {COURTS.points.map((p) => (
                <li key={p}>
                  <Icon name="check" size={16} />
                  {p}
                </li>
              ))}
            </ul>
            <div className="prices">
              <p className="prices__season">Árak · {PRICES.season}-es szezon</p>
              <table>
                <tbody>
                  {PRICES.rows.map((r) => (
                    <tr key={r.item}>
                      <th scope="row">
                        {r.item}
                        <small>{r.note}</small>
                      </th>
                      <td>
                        <b>{r.price}</b> <span>{r.unit}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="prices__note">{PRICES.note}</p>
              <a className="prices__link" href={CLUB.bookingPrices} target="_blank" rel="noopener noreferrer">
                Bérletek a Foggóban <Icon name="arrowUpRight" size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— foglalás ——— */}
      <section id="foglalas" className="band" aria-labelledby="foglalas-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Foglalás</Label>
              <h2 id="foglalas-title" className="title">
                Foglalj online, <span>vagy hívj.</span>
              </h2>
            </div>
            <p className="intro">
              A szabad időpontokat a Foggo naptárában látod. Teniszoktatásról és bérletről telefonon kapsz választ.
            </p>
          </div>
          <ol className="steps">
            {BOOKING_STEPS.map((s, i) => (
              <li key={s.title} className="step reveal">
                <span className="step__n">{i + 1}</span>
                <h3 className="step__title">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="btn-row btn-row--center reveal">
            <BookingButton />
            <a href={CLUB.phoneHref} className="btn btn--ghost">
              <Icon name="phone" size={17} /> {CLUB.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ——— a klub ——— */}
      <section id="klub" className="band band--lake" aria-labelledby="klub-title">
        <div className="container">
          <div className="story">
            <div className="story__text reveal">
              <Label>A klub</Label>
              <h2 id="klub-title" className="title">
                Almádi tenisz, <span>1925 óta.</span>
              </h2>
              {STORY.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <ol className="timeline reveal">
              {MILESTONES.map((m) => (
                <li key={m.year}>
                  <b>{m.year}</b>
                  <span>{m.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <figure className="panorama reveal">
          <Image src="/img/liget-panorama.jpg" alt="A Szent Erzsébet liget és a Balaton-part felülről, ősszel" fill sizes="100vw" />
        </figure>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band dark" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <Label light>Kapcsolat</Label>
            <h2 id="kapcsolat-title" className="title">
              Szent Erzsébet liget, <span>Balatonalmádi.</span>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Cím</dt>
                <dd>
                  {CLUB.address}
                  <small>
                    a Wesselényi strand mellett ·{" "}
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Útvonal
                    </a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Telefon (foglalás, pályaállapot)</dt>
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
              <div>
                <dt>Elnök</dt>
                <dd>{CLUB.president}</dd>
              </div>
            </dl>
            <div className="map">
              <iframe src={CLUB.mapsEmbed} title="A Balatonalmádi Tenisz Club a térképen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="visit__form reveal">
            <h3 className="subtitle">Írj nekünk</h3>
            <p>Oktatás, bérlet, csoportos foglalás vagy bármi más: a levél a klubhoz megy, és válaszolunk.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
