import Image from "next/image";
import { IconCalendar, IconClock, IconMail, IconPhone, IconPin } from "@/components/icons";
import { PriceTable } from "@/components/PriceTable";
import { CLUB, COACH, HOURS, PASS_RULES, RULE_HIGHLIGHTS } from "@/lib/site";

const BOOKING = [
  { title: "Telefonon", text: `A ${CLUB.phone} számon, pályafoglalással és bérletekkel kapcsolatban is.` },
  { title: "E-mailben", text: `Az ${CLUB.email} címen.` },
  { title: "Személyesen", text: "A klubházban, a Gyergyóalfalu utcában. Pályára lépés előtt itt jelentkezel be." },
];

/** The full house rules from perfekttenisz.hu, lightly tidied; shown in a disclosure under the highlights. */
const FULL_RULES: { title: string; items: string[] }[] = [
  {
    title: "Nyitvatartás",
    items: [
      "A Teniszklub területén 4 salakos pályával várjuk a játszani vágyókat.",
      "A pályák az időjárás függvényében március/áprilistól egészen október/novemberig látogathatók. Télen a Teniszklub zárva tart.",
      "A teniszpályák hétköznap 8–20 óráig, szombaton 8–18 óráig, vasárnap 8–16 óráig állnak rendelkezésre.",
    ],
  },
  {
    title: "Pályafoglalás, lemondási feltételek",
    items: [
      "A pályák alkalmi vagy bérleti rendszerben vehetők igénybe, előzetes időpontfoglalással.",
      "Pályára lépés előtt minden esetben kötelező bejelentkezni a klubházban. A pálya az idősávra szóló bérlettel vagy a pályadíj megfizetése után vehető igénybe.",
      "A bérletes és alkalmi foglalások nem ruházhatók át, mindenki csak a saját foglalását veheti igénybe.",
      "Alkalmi foglalás legalább 24 órával előtte díjmentesen lemondható; a később lemondott foglalást a következő alkalommal ki kell fizetni (kivéve esőnap esetén). Alkalmi foglalásra legfeljebb 10 napra előre van lehetőség.",
      "Eső esetén a pálya állapotáról telefonon lehet érdeklődni. Ha az eső vagy az elázott pálya nem teszi lehetővé a játékot, szabad pálya függvényében egy egyeztetett időpontban pótolható az óra.",
      "Alkalmi foglalásnál minden megkezdett óra után az idősáv szerinti teljes óradíjat kell fizetni (fél óra hosszabbítás esetén is egy órát).",
      "Fizetni készpénzzel lehet, bankkártyát egyelőre nem tudunk elfogadni.",
      "A Teniszklub adatnyilvántartást vezet a vendégekről. Ha nem a klubbal szerződésben álló edzővel érkezel, a foglaláskor jelezd, és egyeztessünk előre.",
    ],
  },
  {
    title: "Bérletek",
    items: [
      "A 10 alkalmas bérlet az adott szezonban a bérlő szándéka szerinti időpontokban érvényes (fix vagy változó időpont).",
      "A szezonbérlet kizárólag a meghirdetett szezonban, fix időben: adott nap(ok) adott idősávjában érvényes.",
      "Az eső miatt elmaradt bérletes alkalmak a szezonon belül, egyeztetett időpontban pótolhatók.",
      "Bérletes alkalom legalább 24 órával előtte mondható le; a 24 órán belül lemondott vagy le nem mondott alkalom lejátszottnak számít. Az időben lemondott alkalom 30 napon belül, szabad pálya függvényében pótolható.",
      "Ha a pályák foglaltsága nem teszi lehetővé, a pótlásra garanciát nem tudunk vállalni. A fel nem használt alkalmak nem vihetők át a következő szezonba.",
    ],
  },
  {
    title: "A pályák használata",
    items: [
      "A pályákat mindenki saját felelősségére használja.",
      "Egy óra foglalása 55 perc játékidőt jelent (óra 00-tól 55-ig), két óra foglalása 1 óra 55 percet.",
      "Óra 55-kor kérjük befejezni a játékot, a pályát lehúzva, az eszközöket visszatéve átadni. A pályára legkorábban 5 perccel a foglalás előtt lehet felmenni.",
      "A pályára kerékpárt, babakocsit, botot, szúró- és vágóeszközt, üveget bevinni, szeszes italt fogyasztani tilos.",
      "Hosszabbítani akkor lehet, ha a klubházban jelzed, a következő órára nincs foglalás, és a díjat előre kifizetted.",
    ],
  },
  {
    title: "Öltözködés és viselkedés",
    items: [
      "A klub területén csak sportos öltözetben, teniszcipőben lehet tartózkodni; félmeztelenül tilos.",
      "Kérjük, hogy mindenki tisztelettel viselkedjen, kerülje a zavaró hangokat és telefonálást, és mutasson példát a gyerekeknek.",
      "A pálya és a berendezések rongálásáért a használók felelnek; minden kárt azonnal jelezni kell a klubházban.",
      "A klub teljes területén tilos a dohányzás és a nyílt láng használata.",
      "Az elhagyott, elveszett tárgyakért nem vállalunk felelősséget; a talált tárgyakat a klubházban lehet leadni.",
    ],
  },
  {
    title: "Biztonság, rendezvények, parkolás",
    items: [
      "A klub területén mindenki saját felelősségére sportol; a baleseteket haladéktalanul jelezni kell a vezetőségnek.",
      "A klub versenyeket és eseményeket szervez; ezek idején a pályák használata korlátozott lehet.",
      "A belső udvaron összesen 12 autó parkolhat ingyen, a klub előtti utcában további ingyenes megállási lehetőség van. Kérjük, ne várakozz járó motorral.",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">{CLUB.district}</p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz az óriás fenyők <em>árnyékában.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Négy salakpálya kora tavasztól késő őszig, a szezonban a hét minden napján. Felnőtteket, tiniket és gyerekeket is várunk,
                akár csak játszanál, akár most tanulnád a teniszt.
              </p>
              <div className="season glass">
                <p className="season__label">
                  <span className="season__dot" aria-hidden="true" /> Téli szünet
                </p>
                <p className="season__text">
                  A 2027-es szezon <strong>{CLUB.reopen}</strong> indul. A nyitás napját és az új árakat a nyitáshoz közeledve pontosítjuk.
                </p>
                <div className="hero__ctas">
                  <a href={CLUB.notifyHref} className="btn btn--accent">
                    <IconMail /> Szóljatok, ha nyitunk
                  </a>
                  <a href={CLUB.phoneHref} className="btn btn--ghost">
                    <IconPhone /> {CLUB.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero__media">
            <figure className="hero__photo hero__photo--main reveal reveal--img">
              <Image
                src="/img/palyak.jpg"
                alt="Két salakpálya a fenyők előtt, a hálók mögött padok"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 800px"
                style={{ objectFit: "cover", objectPosition: "50% 60%" }}
              />
            </figure>
            <figure className="hero__photo reveal reveal--img">
              <Image
                src="/img/pad.jpg"
                alt="Pad a salakpálya szélén, mögötte örökzöldek"
                fill
                sizes="(max-width: 900px) 100vw, 400px"
                style={{ objectFit: "cover", objectPosition: "60% 50%" }}
              />
            </figure>
          </div>

          <ul className="facts reveal" aria-label="Röviden">
            <li className="fact">
              <span className="fact__num">4</span>
              <span className="fact__label">salakos teniszpálya</span>
            </li>
            <li className="fact">
              <span className="fact__num">7 nap</span>
              <span className="fact__label">nyitva a szezonban, hétköznap 8–20</span>
            </li>
            <li className="fact">
              <span className="fact__num">28 hét</span>
              <span className="fact__label">szezonbérlet, fix időpontra</span>
            </li>
            <li className="fact">
              <span className="fact__num">12</span>
              <span className="fact__label">ingyenes parkolóhely az udvaron</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— Courts ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Négy salakpálya, <em>a fenyők alatt.</em>
          </h2>
          <p className="lead reveal">
            A 17. kerületi klubunk pályái minden nap nyitva állnak bárki előtt, akinek szenvedélye a tenisz, vagy aki még csak ízlelgeti.
            Az időjárástól függően március–áprilistól október–novemberig játszhatsz nálunk; télen zárva tartunk.
          </p>

          <div className="courts__photos">
            <figure className="courts__photo courts__photo--wide reveal reveal--img">
              <Image src="/img/palyak-2.jpg" alt="Salakpályák kék szélfogókkal, a háttérben fenyők" fill sizes="(max-width: 900px) 100vw, 46vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="courts__photo reveal reveal--img">
              <Image src="/img/halok.jpg" alt="Hálók sorban a salakpályákon" fill sizes="(max-width: 900px) 50vw, 23vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="courts__photo reveal reveal--img">
              <Image src="/img/arnyekolo.jpg" alt="Árnyékolók a pályák melletti pihenőnél, mögöttük a fenyősor" fill sizes="(max-width: 900px) 50vw, 23vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>

          <div className="courts__info">
            <div className="hours glass reveal">
              <p className="hours__title">
                <IconClock /> Nyitvatartás a szezonban
              </p>
              <ul>
                {HOURS.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <strong>{h.time}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="booking-ways reveal">
              <p className="rules__title">Így foglalhatsz pályát</p>
              <ol className="ways">
                {BOOKING.map((b, i) => (
                  <li className="way" key={b.title}>
                    <span className="way__num">0{i + 1}</span>
                    <h3 className="h3">{b.title}</h3>
                    <p>{b.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Prices ——— */}
      <section id="arak" className="section pricing" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Árak · 2026-os szezon</p>
          <h2 id="arak-title" className="h2 reveal">
            Alkalmi bérlés <em>vagy bérlet.</em>
          </h2>
          <p className="lead reveal">
            A 2026-os szezon díjai ({CLUB.season2026}). Hétvégén olcsóbb, bérlettel még kedvezőbb az óradíj. A 2027-es szezon díjait a
            nyitáshoz közeledve pontosítjuk.
          </p>
          <div className="reveal">
            <PriceTable />
          </div>
          <div className="paynotes">
            <div className="paynote glass reveal">
              <p className="rules__title">Fizetés</p>
              <p>
                A klubban <strong>csak készpénzzel</strong> lehet fizetni. A bérletek ára átutalással is rendezhető, legkésőbb az első
                játéknapon:
              </p>
              <p className="paynote__bank">
                {CLUB.association}
                <br />
                {CLUB.bank}
              </p>
            </div>
            <div className="paynote glass reveal">
              <p className="rules__title">A bérletekről</p>
              <ul className="rules__list">
                {PASS_RULES.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Coaching ——— */}
      <section id="oktatas" className="section coaching" aria-labelledby="oktatas-title">
        <div className="container">
          <p className="eyebrow reveal">Egyéni oktatás</p>
          <h2 id="oktatas-title" className="h2 reveal">
            Egy edző, egy pálya, <em>csak neked.</em>
          </h2>
          <p className="lead reveal">
            Életkortól függetlenül, gyerekeknek és felnőtteknek. Az egyéni óra a leghatékonyabb módja a tenisztanulásnak: a saját tempódban
            haladsz, az edző pedig nemcsak megtanítja a mozdulatokat, hanem ütőpartnered is, akivel gyakorolhatod a tanultakat.
          </p>

          <ul className="coach__facts reveal">
            <li>
              <span className="coach__num">{COACH.fee}</span>
              <span className="coach__text">az edző óradíja, plusz az időpont szerinti pályadíj</span>
            </li>
            <li>
              <span className="coach__num">1 : 1</span>
              <span className="coach__text">egy órán át egy tanítvány, egy pályán; igény esetén többen is jöhettek, változatlan áron</span>
            </li>
            <li>
              <span className="coach__num">Bérlettel</span>
              <span className="coach__text">ha a szezonra bérletet veszel, alkalmanként már csak az edző óradíját fizeted</span>
            </li>
          </ul>

          <div className="coach glass reveal">
            <div>
              <p className="rules__title">Edző</p>
              <p className="coach__name">{COACH.name}</p>
              <p className="coach__note">A tavaszi oktatás részleteit a nyitáshoz közeledve pontosítjuk. Érdeklődni nála lehet.</p>
            </div>
            <a href={COACH.phoneHref} className="btn btn--accent">
              <IconPhone /> {COACH.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ——— Clubhouse ——— */}
      <section id="klubhaz" className="section clubhouse" aria-labelledby="klubhaz-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Klubház</p>
              <h2 id="klubhaz-title" className="h2 reveal">
                Bejelentkezés, <em>pihenő, terasz.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Játék előtt a klubházban jelentkezel be és fizetsz, itt kérhetsz hosszabbítást, és itt érdeklődhetsz eső esetén. Utána ott a
              pergolás terasz a fák alatt. A belső udvaron 12 autó parkolhat ingyen, és az utcában is van hely.
            </p>
          </div>
          <div className="club__photos">
            <figure className="club__photo club__photo--tall reveal reveal--img">
              <Image src="/img/klubhaz.jpg" alt="A klubház kívülről, sövénnyel" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              <figcaption>A klubház</figcaption>
            </figure>
            <figure className="club__photo reveal reveal--img">
              <Image src="/img/klubhaz-pult.jpg" alt="A klubház belső tere a pulttal és asztalokkal" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
              <figcaption>Belül</figcaption>
            </figure>
            <figure className="club__photo reveal reveal--img">
              <Image src="/img/terasz.jpg" alt="Pergolás terasz asztalokkal a klubház mellett" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
              <figcaption>A terasz</figcaption>
            </figure>
            <figure className="club__photo reveal reveal--img">
              <Image src="/img/klubhaz-belso.jpg" alt="Asztalok és hűtő a klubház ablakos termében" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
              <figcaption>Asztalok, hűtő, ablakok a pályákra</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ——— House rules ——— */}
      <section id="hazirend" className="section house" aria-labelledby="hazirend-title">
        <div className="container">
          <p className="eyebrow reveal">Házirend</p>
          <h2 id="hazirend-title" className="h2 reveal">
            Hat dolog, <em>amit érdemes tudni.</em>
          </h2>
          <p className="lead reveal">
            A pályafoglalással a házirendet is elfogadod. A legfontosabbak röviden; a teljes szöveg alatta olvasható.
          </p>
          <ul className="highlights">
            {RULE_HIGHLIGHTS.map((r, i) => (
              <li className="highlight glass reveal" key={r.title}>
                <span className="highlight__num">0{i + 1}</span>
                <h3 className="h3">{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ul>
          <details className="fullrules glass reveal">
            <summary>
              A teljes házirend <span aria-hidden="true">+</span>
            </summary>
            <div className="fullrules__body">
              {FULL_RULES.map((s) => (
                <div key={s.title}>
                  <h3 className="fullrules__title">{s.title}</h3>
                  <ul>
                    {s.items.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* ——— 1% ——— */}
      <section id="tamogatas" className="section support" aria-labelledby="tamogatas-title">
        <div className="container">
          <div className="support__card glass reveal">
            <div>
              <p className="eyebrow">Adó 1%</p>
              <h2 id="tamogatas-title" className="h2">
                Adj esélyt <em>egy újabb adogatásnak.</em>
              </h2>
              <p className="lead">
                2025-ben új fejezetet nyitottunk. Az egyesület célja az amatőr játékosok versenyeztetése, fejlődésük támogatása, és hogy
                minél több korosztály teniszezhessen. Az szja 1%-ával neked semmibe sem kerül, nekünk sokat számít.
              </p>
            </div>
            <dl className="support__data">
              <div>
                <dt>Kedvezményezett</dt>
                <dd>{CLUB.association}</dd>
              </div>
              <div>
                <dt>Adószám</dt>
                <dd className="support__tax">{CLUB.taxNumber}</dd>
              </div>
              <div>
                <dt>Hogyan</dt>
                <dd>Az eszja.nav.gov.hu oldalon az „1+1%-os nyilatkozat” résznél, vagy papíron, az EGYSZA nyomtatványon.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Gyergyóalfalu utca. <em>Tavasszal találkozunk.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Pályafoglalás, bérletek</span>
                    <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Egyéni oktatás · {COACH.name}</span>
                    <a href={COACH.phoneHref}>{COACH.phone}</a>
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
                  <IconCalendar />
                  <div>
                    <span className="contact__label">Szezon</span>
                    <span className="contact__line">
                      Télen zárva. Tavaszi nyitás <strong>{CLUB.reopen}</strong>.
                    </span>
                  </div>
                </li>
              </ul>
              <div className="visit__actions">
                <a href={CLUB.notifyHref} className="btn btn--accent">
                  <IconMail /> Szóljatok, ha nyitunk
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconPin /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__map glass reveal">
              <iframe title="A Perfekt Teniszklub a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
