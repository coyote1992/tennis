import Image from "next/image";
import { IconArrow, IconCalendar, IconClock, IconMail, IconPhone, IconPin } from "@/components/icons";
import { CLUB, COACHES, COVERED } from "@/lib/site";

const KIDS_FEES = [
  { what: "Heti 1 alkalom", price: "32 000 Ft / hó" },
  { what: "Heti 2 alkalom", price: "49 500 Ft / hó" },
  { what: "Heti 3 alkalom", price: "71 500 Ft / hó" },
  { what: "Heti 4 alkalom", price: "91 000 Ft / hó" },
];

const COACH_FEES = [
  { what: "Professzionális edzővel", price: "11 700 Ft" },
  { what: "Prémium edzővel", price: "12 800 Ft" },
  { what: "Vezetőedzővel", price: "15 500 Ft" },
];

const ZUKUNFT = [
  "Csoportos óra kis létszámú egységekben",
  "Kondicionáló edzés: egyensúly, gyorsaság, reakcióidő, magas szintű lábmunka",
  "Magánóra a csomag részeként, külön szervezés és fizetés nélkül",
];

const CAMP_DAY = [
  { time: "8:30", text: "Érkezés (megbeszélés szerint korábban is)" },
  { time: "9:00", text: "Bemelegítés, mókás játékok, tízórai" },
  { time: "10:00", text: "Tenisz, játékos formában" },
  { time: "12:00", text: "Ebéd, ping-pong, foci, szabad tenisz" },
  { time: "13:00", text: "Úszás, lubickolás a sportpálya uszodájában*" },
  { time: "14:00", text: "Tenisz, játékos formában" },
  { time: "16:00", text: "Uzsonna, hazaindulás 16:30-ig" },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Budakeszi · a város sportpályáján</p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz. <em>Másképp.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                A Molnár Teniszakadémia {CLUB.founded} óta tanít teniszezni, {CLUB.budakesziSince} óta Budakeszin is: három salakpálya,
                télen fűtött, 11 méter magas sátorban. Amatőr csapatok, felnőtt- és gyerekoktatás, pályabérlés, kortól és tudástól
                függetlenül.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.reception.href} className="btn btn--accent">
                  <IconPhone /> Pályafoglalás
                </a>
                <a href="#felnott" className="btn btn--ghost">
                  Edzésre jönnék
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/palyak-nyar.jpg"
              alt="Salakpályák nyáron, előtérben a terasz piros napernyőivel"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 55%" }}
            />
            <figcaption className="hero__caption">Nyár a pályákon, a terasz felől</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Röviden">
            <li className="fact">
              <span className="fact__num">3</span>
              <span className="fact__label">salakpálya, télen-nyáron</span>
            </li>
            <li className="fact">
              <span className="fact__num">11 m</span>
              <span className="fact__label">magas, fűtött sátor télen</span>
            </li>
            <li className="fact">
              <span className="fact__num">3</span>
              <span className="fact__label">osztályban indulnak csapataink</span>
            </li>
            <li className="fact">
              <span className="fact__num">max. 6</span>
              <span className="fact__label">gyerek egy edzővel egy csoportban</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— Adults ——— */}
      <section id="felnott" className="section adults" aria-labelledby="felnott-title">
        <div className="container">
          <p className="eyebrow reveal">Felnőtteknek</p>
          <h2 id="felnott-title" className="h2 reveal">
            Csapat, amihez <em>csatlakozhatsz.</em>
          </h2>
          <p className="lead reveal">
            Szereted a teniszt, de nincs elég meccs, motiváció vagy hozzád illő partner? Az újak a meglévő közösséghez csatlakoznak:
            közös edzések, és csapatok a Magyar Tenisz Szövetség csapatbajnokságában, különböző erősségű osztályokban.
          </p>

          <div className="team glass reveal">
            <div className="team__info">
              <p className="team__kicker">Csapatedzés</p>
              <p className="team__when">
                Szerda és péntek <strong>19–21</strong>
              </p>
              <p className="team__text">Van, aki az egyikre jár, van, aki mindkettőre.</p>
              <ul className="team__leagues" aria-label="Csapataink osztályai">
                <li>OB II</li>
                <li>Budapest II</li>
                <li>Megyei I</li>
              </ul>
              <a href={CLUB.trialHref} className="btn btn--accent">
                Kipróbálnám az edzést <IconArrow />
              </a>
            </div>
            <figure className="team__photo">
              <Image src="/img/felnott-csapat.jpg" alt="Az akadémia felnőtt amatőr csapatának tagjai ütőkkel a pályán" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>

          <div className="adult-paths">
            <article className="path reveal">
              <p className="path__kicker">Kezdő és újrakezdő csoport</p>
              <h3 className="h3">Soha nem késő elkezdeni.</h3>
              <p className="path__text">
                Elakadtál, vagy túl drága lenne a magánóra? 15 éves kortól várunk: újrakezdők kedden, kezdők pénteken, 18 órától.
              </p>
              <p className="path__price">32 000 Ft / hó</p>
            </article>
            <article className="path reveal">
              <p className="path__kicker">Egyéni oktatás, magánóra</p>
              <h3 className="h3">A te célod, a mi figyelmünk.</h3>
              <p className="path__text">
                Előre megbeszéljük a célt: az alapok elsajátítását, a meglévő ütések csiszolását vagy az amatőr versenyzés előkészítését
                és végigkísérését.
              </p>
              <p className="path__feeslabel">Egyéni oktatás edzői díja</p>
              <ul className="path__fees">
                {COACH_FEES.map((f) => (
                  <li key={f.what}>
                    <span>{f.what}</span>
                    <strong>{f.price}</strong>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ——— Children ——— */}
      <section id="gyerekek" className="section kids" aria-labelledby="gyerekek-title">
        <div className="container">
          <p className="eyebrow reveal">Gyerekeknek</p>
          <h2 id="gyerekek-title" className="h2 reveal">
            Nálunk ők <em>az elsők.</em>
          </h2>
          <p className="lead reveal">
            Szeptembertől júniusig hétfőtől péntekig 14 és 19 óra között a gyerekeké a főszerep a pályán. Kis csoportokban, Play and Stay
            módszerrel és korosztálynak megfelelő labdákkal tanítunk, hogy a tanulás játék legyen.
          </p>

          <div className="kids__grid">
            <div className="kids__fees glass reveal">
              <p className="kids__kicker">Csoportos tanfolyam, havi díj</p>
              <ul>
                {KIDS_FEES.map((f) => (
                  <li key={f.what}>
                    <span>{f.what}</span>
                    <strong>{f.price}</strong>
                  </li>
                ))}
              </ul>
              <p className="kids__note">Egy csoportban egy edzővel legfeljebb 6 gyerek. Egyéni oktatás akár 3 éves kortól.</p>
            </div>
            <figure className="kids__photo reveal reveal--img">
              <Image src="/img/gyerekek.jpg" alt="Mosolygó kisgyerekek ütőkkel a salakpályán" fill sizes="(max-width: 900px) 100vw, 34vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>

          <div className="zukunft reveal">
            <div>
              <p className="zukunft__kicker">Versenytenisz 7 éves kortól</p>
              <h3 className="zukunft__title">„Die Zukunft”</h3>
              <p className="zukunft__text">
                A jövő bajnokainak: egyedi, német filozófiájú versenytenisz program, teljes csomagban. Az árakat egyéni igények alapján
                alakítjuk ki.
              </p>
            </div>
            <ul className="zukunft__list">
              {ZUKUNFT.map((z) => (
                <li key={z}>{z}</li>
              ))}
            </ul>
          </div>

          <a href={CLUB.coaching.href} className="link-arrow reveal">
            Jelentkezés, csoportbeosztás: {CLUB.coaching.phone} <IconArrow />
          </a>
        </div>
      </section>

      {/* ——— About & coaches ——— */}
      <section id="rolunk" className="section about" aria-labelledby="rolunk-title">
        <div className="container">
          <p className="eyebrow reveal">Rólunk</p>
          <h2 id="rolunk-title" className="h2 h2--xl reveal">
            Nyugat-európai módszer, <em>itthon.</em>
          </h2>
          <p className="lead reveal">
            Versenysportolói pályafutásom után Németországban dolgoztam, ott ismertem meg az oktatási módszereket és a filozófiát. 2008
            tavaszán hazaköltöztem, hogy létrehozzak egy profi, nyugat-európai színvonalú teniszakadémiát. Tíz évvel a budapesti telephely
            után megnyitottuk a budakeszi teniszcentrumot is.
          </p>
          <p className="signature reveal">Molnár Balázs, tulajdonos, vezetőedző</p>

          <ul className="coaches">
            {COACHES.map((c) => (
              <li className="coach glass reveal" key={c.name}>
                <div className="coach__photo">
                  <Image src={c.img} alt={c.name} fill sizes="96px" style={{ objectFit: "cover", objectPosition: "50% 20%" }} />
                </div>
                <div>
                  <p className="coach__name">{c.name}</p>
                  <p className="coach__role">{c.role}</p>
                  <ul className="coach__facts">
                    {c.facts.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Courts & prices ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Pályák és árak</p>
              <h2 id="palyak-title" className="h2 reveal">
                Télen-nyáron, <em>három salakpályán.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Hatalmas játéktér és kifutó. Télen 3 rétegű, modern, az átlagosnál magasabb, 11 méteres sátorral fedjük a pályákat, új
              kazánnal fűtjük és LED-del világítjuk.
            </p>
          </div>

          <div className="courts__photos">
            <figure className="courts__photo reveal reveal--img">
              <Image src="/img/sator-kivul.jpg" alt="A fehér teniszsátor kívülről, kék ég alatt" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="courts__photo reveal reveal--img">
              <Image src="/img/sator-belul.jpg" alt="Salakpályák a sátorban, LED-világítással" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>

          <div className="deal reveal">
            <p className="deal__big">
              Nálunk <span>1</span> az <span>2!</span>
            </p>
            <div>
              <p className="deal__title">Egy óra árán kettőt játszhatsz.</p>
              <p className="deal__text">
                Hétköznap 11 és 15, vasárnap 10 és 16 óra között. Az ajánlat alkalmi pályabérlésre, egy óra kifizetése esetén érvényes, és
                nem vonható össze más akcióval.
              </p>
            </div>
          </div>

          <div className="pricing glass reveal">
            <div className="pricing__head">
              <p className="pricing__title">Fedett szezon 2026/27</p>
              <p className="pricing__dates">2026. szeptember 21. – 2027. április 18., 30 hét</p>
            </div>
            <table className="pricetable">
              <thead>
                <tr>
                  <th scope="col">Idősáv</th>
                  <th scope="col">Alkalmi</th>
                  <th scope="col">10 alkalmas bérlettel</th>
                  <th scope="col">Szezonbérlettel</th>
                  <th scope="col">Szezonbérlet, 30 hét</th>
                </tr>
              </thead>
              <tbody>
                {COVERED.map((r) => (
                  <tr key={r.day + r.when} className={r.best ? "is-best" : undefined}>
                    <th scope="row">
                      <span className="pricetable__day">{r.day}</span> {r.when} óra
                    </th>
                    <td data-label="Alkalmi">{r.casual} Ft</td>
                    <td data-label="10 alkalmas bérlettel">{r.ten} Ft</td>
                    <td data-label="Szezonbérlettel" className="pricetable__season">
                      {r.season} Ft
                    </td>
                    <td data-label="Szezonbérlet, 30 hét">{r.total} Ft</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="pricing__note">Árak óránként, pályánként. Kiemelve a legkedvezőbb idősávok, szezonbérlettel már 7 900 Ft-tól.</p>
          </div>

          <div className="courts__info">
            <div className="cancel reveal">
              <p className="cancel__title">Lemondás</p>
              <p>
                A lefoglalt időpont (pályabérlés, oktatás, tanfolyami óra) 24 órával előtte díjmentesen lemondható: írásban (SMS, e-mail)
                vagy személyesen a recepción, az edzőknél nem. Később a teljes díjat felszámoljuk, a tanfolyami óra lejátszottnak számít.
              </p>
            </div>
            <ul className="amenities reveal">
              <li>
                <strong>Büfé és terasz</strong>
                <span>Üdítő, fagyi, friss szendvics, csapolt sör.</span>
              </li>
              <li>
                <strong>Ingyenes nagy parkoló</strong>
                <span>A Telki út mellett, a sportpályán.</span>
              </li>
              <li>
                <strong>Kék busz</strong>
                <span>A megálló közvetlenül előttünk.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Summer camp ——— */}
      <section id="tabor" className="section camp" aria-labelledby="tabor-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Nyári tábor</p>
              <h2 id="tabor-title" className="h2 reveal">
                Sok tenisz, <em>medencézéssel.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Húsz éve tartunk nyári táborokat: nem gyerekmegőrzés, hanem igazi élmény. A kezdők megtanulnak teniszezni, a haladók sokat
              fejlődnek, és sokan szeptembertől a teniszt választják állandó sportjuknak.
            </p>
          </div>

          <div className="camp__grid">
            <div className="camp__day glass reveal">
              <p className="camp__label">
                <IconClock /> Egy nap a táborban
              </p>
              <ol className="day">
                {CAMP_DAY.map((d) => (
                  <li key={d.time}>
                    <span className="day__time">{d.time}</span>
                    <span className="day__text">{d.text}</span>
                  </li>
                ))}
              </ol>
              <p className="camp__fine">
                *Az úszást diplomás testnevelő tanárok felügyelik, a program nem kötelező.
              </p>
            </div>
            <div className="camp__side">
              <figure className="camp__photo reveal reveal--img">
                <Image src="/img/tabor-csoport.jpg" alt="Táborozó gyerekek csoportképe a salakpályán, a háttérben a sátor" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              </figure>
              <div className="camp__price glass reveal">
                <p className="camp__label">
                  <IconCalendar /> 2026 nyarán
                </p>
                <p className="camp__big">
                  79 000 Ft <span>/ turnus</span>
                </p>
                <p className="camp__fine">
                  Turnusok: július 6–10., július 27–31., augusztus 24–28. Testvérkedvezmény 10%, foglalás 30 000 Ft előleggel.
                </p>
                <a href={CLUB.coaching.href} className="btn btn--ghost btn--block">
                  <IconPhone /> A 2027-es nyárról: {CLUB.coaching.phone}
                </a>
              </div>
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
              Márity László u. 17. <em>Várunk a pályán.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">{CLUB.reception.label}</span>
                    <a href={CLUB.reception.href}>{CLUB.reception.phone}</a>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">{CLUB.coaching.label}</span>
                    <a href={CLUB.coaching.href}>{CLUB.coaching.phone}</a>
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
                    <span className="contact__line">Budakeszi sportpálya, a Telki út mellett</span>
                  </div>
                </li>
                <li>
                  <IconClock />
                  <div>
                    <span className="contact__label">Nyitvatartás</span>
                    {CLUB.hours.map((h) => (
                      <span key={h.days} className="contact__line">
                        {h.days}: <strong>{h.time}</strong>
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
              <div className="visit__actions">
                <a href={CLUB.reception.href} className="btn btn--accent">
                  <IconPhone /> Hívás
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconPin /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__map glass reveal">
              <iframe title="A Molnár Teniszakadémia Budakeszin, a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
