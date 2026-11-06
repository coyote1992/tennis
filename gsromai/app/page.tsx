import Image from "next/image";
import { IconArrow, IconClock, IconMail, IconPhone, IconPin } from "@/components/icons";
import { CLUB, SUMMER_PADEL, WINTER } from "@/lib/site";

const PLACE = ["teniszezhetsz", "padelt játszhatsz", "szaunázhatsz", "masszázst kérhetsz", "edzhetsz", "ehetsz és ihatsz", "rendezvényt tarthatsz"];

const EXTRAS = [
  {
    key: "bisztro",
    title: "Bisztró",
    text: "Edzés előtt vagy után frissítő italok, kávé, szendvicsek és könnyű harapnivalók.",
    img: "/img/bisztro.jpg",
    alt: "A bisztró pultja és asztalai, nagy üvegfalakkal",
  },
  {
    key: "szauna",
    title: "Szauna és masszázs",
    text: "Sport után szauna és prémium masszázs a teljes regenerálódásért.",
    img: "/img/szauna.jpg",
    alt: "A szauna faajtaja",
  },
  {
    key: "konditerem",
    title: "Konditerem",
    text: "Edzés előtt vagy után, ugyanott, ahol játszol.",
    img: "/img/konditerem.jpg",
    alt: "A konditerem gépei",
  },
  {
    key: "labtengo",
    title: "Lábtengó és Teqball",
    text: "Egy műfüves lábtengópálya és Teqball az aktív kikapcsolódáshoz.",
    img: "/img/labtengo.jpg",
    alt: "A műfüves lábtengópálya felülről",
  },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Római-part · Budapest III.</p>
            <h1 id="hero-title" className="h1 reveal">
              Padel és tenisz <em>a Római-parton.</em>
            </h1>
            <div className="hero__row reveal">
              <div>
                <p className="lead">
                  Több mint {CLUB.area}-es sport- és szabadidőközpont: négy padelpálya, öt keményborítású teniszpálya, és télen is
                  fedett, fűtött pályák. Ez egy olyan hely, ahol
                </p>
                <ul className="place" aria-label="Amit nálunk csinálhatsz">
                  {PLACE.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="hero__ctas">
                <a href={CLUB.padel.href} className="btn btn--accent">
                  <IconPhone /> Padelpálya
                </a>
                <a href={CLUB.tennis.booking} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  Teniszpálya online <IconArrow />
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/komplexum.jpg"
              alt="Légifotó a komplexumról: a klubépület tetőterasszal, mögötte a kék keménypályák és a sátor, őszi fák között"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 45%" }}
            />
            <figcaption className="hero__caption">A klubépület és a pályák a Római-parton</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Röviden">
            <li className="fact">
              <span className="fact__num">4</span>
              <span className="fact__label">padelpálya, ebből 2 fedett és fűtött</span>
            </li>
            <li className="fact">
              <span className="fact__num">5</span>
              <span className="fact__label">keményborítású teniszpálya</span>
            </li>
            <li className="fact">
              <span className="fact__num">{CLUB.area}</span>
              <span className="fact__label">sport- és szabadidőközpont</span>
            </li>
            <li className="fact">
              <span className="fact__num">7–22</span>
              <span className="fact__label">nyitva a hét minden napján</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— Padel ——— */}
      <section id="padel" className="section padel" aria-labelledby="padel-title">
        <div className="container">
          <p className="eyebrow reveal">Padel</p>
          <h2 id="padel-title" className="h2 reveal">
            A világ leggyorsabban <em>növekvő sportága.</em>
          </h2>
          <p className="lead reveal">
            Négy padelpályánk közül kettő fedett és fűtött, így télen is játszhatsz. Ha még csak ismerkedsz a sportággal, a padelt
            neked is szívesen ajánljuk.
          </p>

          <div className="padel__grid">
            <figure className="padel__photo reveal reveal--img">
              <Image src="/img/padelpalya-felulrol.jpg" alt="Padelpálya üvegfalakkal, felülről" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
            </figure>
            <div className="padel__info">
              <p className="padel__tag reveal">Edzések · Pályafoglalás · Versenyek · Közösség</p>
              <div className="watch glass reveal">
                <p className="watch__title">Gyere, nézz meg egy jó padelmeccset.</p>
                <p className="watch__text">A legjobb első lépés: látogass el a klubba, és nézd meg élőben, miért szeretik ennyien.</p>
              </div>
              <a href={CLUB.padel.href} className="btn btn--accent reveal">
                <IconPhone /> Padelpálya foglalás: {CLUB.padel.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Tennis ——— */}
      <section id="tenisz" className="section tennis" aria-labelledby="tenisz-title">
        <div className="container">
          <p className="eyebrow reveal">Tenisz</p>
          <h2 id="tenisz-title" className="h2 reveal">
            Öt keménypálya, <em>kilátással a Dunára.</em>
          </h2>
          <p className="lead reveal">
            Egyéni játékra és edzésre is foglalható pályák, kezdőknek és haladóknak, télen és nyáron. Télen két teniszpálya fedett és
            fűtött. Teniszezni 21 óráig lehet.
          </p>

          <div className="tennis__grid">
            <figure className="tennis__photo tennis__photo--wide reveal reveal--img">
              <Image src="/img/kilatas-duna.jpg" alt="Kilátás a teniszpályákra és mögöttük a Dunára, egy erkélyről" fill sizes="(max-width: 900px) 100vw, 46vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="tennis__photo reveal reveal--img">
              <Image src="/img/teniszpalyak.jpg" alt="Kék keménypályák, a háttérben a sátor és őszi fák" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>

          <div className="smart glass reveal">
            <div>
              <p className="smart__kicker">A tenisz gazdája</p>
              <p className="smart__title">{CLUB.tennis.club}</p>
              <p className="smart__text">
                A pályák mellett a SmartTennis Sportegyesület tart gyerek- és felnőttedzéseket, egyéni és csoportos foglalkozásokat, és
                versenyzési lehetőséget is kínál.
              </p>
            </div>
            <div className="smart__actions">
              <a href={CLUB.tennis.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                Teniszpálya online <IconArrow />
              </a>
              <a href={CLUB.tennis.href} className="btn btn--ghost">
                <IconPhone /> {CLUB.tennis.phone}
              </a>
              <a href={CLUB.tennis.site} target="_blank" rel="noopener noreferrer" className="smart__link">
                Edzések és edzők a smarttennis.hu-n <IconArrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Prices ——— */}
      <section id="arak" className="section prices" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályabérleti díjak</p>
          <h2 id="arak-title" className="h2 reveal">
            Egy óra, <em>egy pálya.</em>
          </h2>
          <p className="lead reveal">Az árak pályánként, 60 perces játékidőre értendők.</p>

          <div className="winter reveal">
            <p className="winter__label">Téli szezon · 8:00 – 22:00</p>
            <ul className="winter__list">
              {WINTER.map((w) => (
                <li className="wcard glass" key={w.court}>
                  <span className="wcard__court">{w.court}</span>
                  <span className="wcard__note">{w.note}</span>
                  <strong className="wcard__price">
                    {w.price}
                    <small> / óra</small>
                  </strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="summer glass reveal">
            <p className="summer__label">Nyári szezon · padel</p>
            <table className="pricetable">
              <thead>
                <tr>
                  <th scope="col">Időpont</th>
                  <th scope="col">Kültéri padel</th>
                  <th scope="col">Fedett padel</th>
                </tr>
              </thead>
              <tbody>
                {SUMMER_PADEL.map((r) => (
                  <tr key={r.when} className={r.best ? "is-best" : undefined}>
                    <th scope="row">{r.when}</th>
                    <td>{r.outdoor}</td>
                    <td>{r.covered}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="summer__note">A nyári teniszárak hamarosan felkerülnek, addig a SmartTennis SE-nél érdeklődj.</p>
          </div>
        </div>
      </section>

      {/* ——— Club: bistro, wellness, extras ——— */}
      <section id="klub" className="section club" aria-labelledby="klub-title">
        <div className="container">
          <p className="eyebrow reveal">Több, mint pálya</p>
          <h2 id="klub-title" className="h2 h2--xl reveal">
            Sport után <em>a feltöltődés.</em>
          </h2>
          <p className="lead reveal">
            Pihenj meg a bisztróban, próbáld ki a szaunát és a masszázst, vagy egyszerűen élvezd a Római-part nyugodt hangulatát. A
            komplexum teljes területe akadálymentesített.
          </p>

          <ul className="extras">
            {EXTRAS.map((e) => (
              <li className="extra reveal" key={e.key}>
                <figure className="extra__photo">
                  <Image src={e.img} alt={e.alt} fill sizes="(max-width: 900px) 50vw, 18vw" style={{ objectFit: "cover" }} />
                </figure>
                <p className="extra__title">{e.title}</p>
                <p className="extra__text">{e.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Events ——— */}
      <section id="rendezveny" className="section events" aria-labelledby="rendezveny-title">
        <div className="container">
          <div className="events__grid">
            <figure className="events__photo reveal reveal--img">
              <Image src="/img/terasz-este.jpg" alt="A tetőterasz esti fényekben, lounge bútorokkal" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </figure>
            <div>
              <p className="eyebrow reveal">Rendezvények</p>
              <h2 id="rendezveny-title" className="h2 reveal">
                Rendezvény <em>a Római-parton.</em>
              </h2>
              <p className="lead reveal">
                Nálunk rendezvényt is tarthatsz. Terembérlésre és rendezvényre egyedi ajánlatot adunk: írj nekünk, és összeállítjuk.
              </p>
              <a href={CLUB.eventsHref} className="btn btn--accent reveal">
                <IconMail /> Ajánlatot kérek
              </a>
              <p className="events__mail reveal">{CLUB.email}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Királyok útja 321. <em>Várunk a parton.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Padel, komplexum</span>
                    <a href={CLUB.padel.href}>{CLUB.padel.phone}</a>
                    <a href={CLUB.emailHref} className="contact__sub">
                      {CLUB.email}
                    </a>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Tenisz · {CLUB.tennis.club}</span>
                    <a href={CLUB.tennis.href}>{CLUB.tennis.phone}</a>
                    <a href={`mailto:${CLUB.tennis.email}`} className="contact__sub">
                      {CLUB.tennis.email}
                    </a>
                  </div>
                </li>
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Cím</span>
                    <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {CLUB.address}
                    </a>
                    <span className="contact__line">Budapest III., Kossuth Lajos üdülőpart</span>
                  </div>
                </li>
                <li>
                  <IconClock />
                  <div>
                    <span className="contact__label">Nyitvatartás</span>
                    <span className="contact__line">{CLUB.hours}</span>
                    <span className="contact__line">{CLUB.tennisUntil}</span>
                  </div>
                </li>
              </ul>
              <div className="visit__actions">
                <a href={CLUB.padel.href} className="btn btn--accent">
                  <IconPhone /> Padel
                </a>
                <a href={CLUB.tennis.booking} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  Tenisz online <IconArrow />
                </a>
              </div>
            </div>

            <div className="visit__map glass reveal">
              <iframe title="A Római Padel Akadémia a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
