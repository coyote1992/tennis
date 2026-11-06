import Image from "next/image";
import { IconArrow, IconClock, IconMail, IconPhone, IconPin } from "@/components/icons";
import { PriceExplorer } from "@/components/PriceExplorer";
import { CLUB } from "@/lib/site";

const SURFACES = [
  {
    key: "csarnok",
    count: "4",
    name: "Fedett keménypálya",
    text: "A vadonatúj, 2 800 m²-es teniszcsarnokban, télen-nyáron.",
    img: "/img/csarnok.jpg",
    alt: "A teniszcsarnok négy kék keménypályája, felülről világítva",
  },
  {
    key: "kemeny",
    count: "4",
    name: "Kültéri keménypálya",
    text: "A 2024-es megújulással érkezett négy új kültéri pálya.",
    img: "/img/kulteri-palyak.jpg",
    alt: "A kültéri kék keménypályák és a csarnok légifotón",
  },
  {
    key: "salak",
    count: "4",
    name: "Kültéri salakpálya",
    text: "A salak kedvelőinek továbbra is elérhető.",
    img: "/img/palyak-felulrol.jpg",
    alt: "Salakpályák és keménypályák egymás mellett, légifotón",
  },
  {
    key: "squash",
    count: "2",
    name: "Squash (fallabda)",
    text: "Beltéri pályák a csarnokban, ütő bérelhető a recepción.",
    img: "/img/squash-palya.jpg",
    alt: "Squash-pálya fapadlóval és üvegfallal",
  },
];

const BOOKING = [
  { title: "Online", text: "A palyafoglalas.uni-miskolc.hu oldalon. Kreditet SimplePayjel vagy a recepción, készpénzzel vagy kártyával tölthetsz fel." },
  { title: "Telefonon", text: "A +36 20 393 1795 számon." },
  { title: "Személyesen", text: "A klubház recepcióján." },
];

const RULES = [
  "Alkalmi pályát az adott naptól számított két héten belülre foglalhatsz.",
  "Lemondani legkésőbb 12 órával előtte lehet; ilyenkor a díjat jóváírjuk a foglalási rendszerben. Később a teljes díj levonásra kerül.",
  "Kültéri szezonban az eső miatt elmaradó órák díját jóváírjuk; ha az első 20 percben kezd esni, a teljes díjat.",
  "A feltöltött kreditet a szezon végéig kell felhasználni.",
  "Pályára csak tiszta sportcipőben, sportruházatban lehet lépni; a salakpályát használat után le kell húzni.",
];

const BUILT = [
  { num: "2 800 m²", text: "új teniszcsarnok 4 keménypályával és 2 squash-pályával" },
  { num: "4 + 4", text: "kültéri kemény- és salakpálya" },
  { num: "50 m²", text: "vendégtér a felújított klubházban, 2 öltözővel" },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Miskolc-Egyetemváros</p>
            <h1 id="hero-title" className="h1 reveal">
              Tenisz és squash <em>télen-nyáron.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                A Miskolci Egyetem 2024-ben megújult teniszcentruma: fedett csarnok, kültéri kemény- és salakpályák, squash és felújított
                klubház. A pályák minden érdeklődő számára nyitottak, az egyetem dolgozóinak és hallgatóinak kedvezménnyel.
              </p>
              <div className="hero__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Online pályafoglalás <IconArrow />
                </a>
                <a href={CLUB.phoneHref} className="btn btn--ghost">
                  <IconPhone /> {CLUB.phone}
                </a>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/eu-jatekok.jpg"
              alt="Játékosok a teniszcsarnok kék keménypályáin"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 60%" }}
            />
            <figcaption className="hero__caption">A négypályás teniszcsarnok</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Röviden">
            <li className="fact">
              <span className="fact__num">12</span>
              <span className="fact__label">teniszpálya: 4 fedett, 8 kültéri</span>
            </li>
            <li className="fact">
              <span className="fact__num">2</span>
              <span className="fact__label">beltéri squash-pálya</span>
            </li>
            <li className="fact">
              <span className="fact__num">−15%</span>
              <span className="fact__label">egyetemi dolgozóknak, hallgatóknak</span>
            </li>
            <li className="fact">
              <span className="fact__num">6–22</span>
              <span className="fact__label">nyitva a hét minden napján</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— Courts ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Válaszd a borítást <em>a játékodhoz.</em>
          </h2>
          <p className="lead reveal">
            Ki keménypályán, ki salakon szeret játszani: mindenki a saját igényeihez és tudásához mérten választ. Nálunk mindkettő
            megvan, télen pedig a csarnokban játszhatsz.
          </p>

          <ul className="surfaces">
            {SURFACES.map((s) => (
              <li className="surface glass reveal" key={s.key}>
                <figure className="surface__photo">
                  <Image src={s.img} alt={s.alt} fill sizes="(max-width: 900px) 100vw, 26vw" style={{ objectFit: "cover" }} />
                  <span className="surface__count">{s.count}</span>
                </figure>
                <div className="surface__body">
                  <h3 className="h3">{s.name}</h3>
                  <p className="surface__text">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Prices ——— */}
      <section id="arak" className="section pricing" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Árak · téli időszak</p>
          <h2 id="arak-title" className="h2 reveal">
            Árlista <em>április 4-ig.</em>
          </h2>
          <p className="lead reveal">
            Árak pályánként, óránként, {CLUB.season} Szezonbérlettel (a szezon végéig tartó foglalással) 10%, az egyetem
            dolgozóinak és hallgatóinak jogviszony-igazolással 15% kedvezmény.
          </p>
          <div className="reveal">
            <PriceExplorer />
          </div>
          <p className="pricing__note reveal">Squash-ütő a recepción bérelhető: 500 Ft / db / óra.</p>
        </div>
      </section>

      {/* ——— Booking ——— */}
      <section id="foglalas" className="section booking" aria-labelledby="foglalas-title">
        <div className="container">
          <p className="eyebrow reveal">Foglalás</p>
          <h2 id="foglalas-title" className="h2 reveal">
            Háromféleképpen <em>foglalhatsz.</em>
          </h2>
          <ol className="ways">
            {BOOKING.map((b, i) => (
              <li className="way reveal" key={b.title}>
                <span className="way__num">0{i + 1}</span>
                <h3 className="h3">{b.title}</h3>
                <p>{b.text}</p>
              </li>
            ))}
          </ol>
          <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent reveal">
            Online pályafoglalás <IconArrow />
          </a>
          <div className="rules reveal">
            <p className="rules__title">Jó tudni</p>
            <ul>
              {RULES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— About ——— */}
      <section id="rolunk" className="section about" aria-labelledby="rolunk-title">
        <div className="container">
          <p className="eyebrow reveal">Rólunk</p>
          <h2 id="rolunk-title" className="h2 h2--xl reveal">
            2024: új fejezet <em>az egyetemi teniszben.</em>
          </h2>
          <p className="lead reveal">
            Sportberuházásoknak köszönhetően az egyetemi és a miskolci teniszélet egy fedett csarnokkal, új kültéri keménypályákkal,
            squash-pályákkal és egy teljesen felújított klubházzal gazdagodott. A központ az Európai Egyetemi Játékok Debrecen–Miskolc 2024
            helyszíne is volt, így nemzetközi eseményen is megállta a helyét.
          </p>
          <ul className="built reveal">
            {BUILT.map((b) => (
              <li key={b.num}>
                <span className="built__num">{b.num}</span>
                <span className="built__text">{b.text}</span>
              </li>
            ))}
          </ul>
          <div className="about__photos">
            <figure className="about__photo about__photo--wide reveal reveal--img">
              <Image src="/img/csarnok-kivul.jpg" alt="A teniszcsarnok bejárata a Miskolci Egyetem feliratával" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="about__photo reveal reveal--img">
              <Image src="/img/klubhaz.jpg" alt="A felújított klubház terasza fák között" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="about__photo reveal reveal--img">
              <Image src="/img/squash.jpg" alt="A squash-pályák üvegfalai a csarnokban" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>
          <p className="aed reveal">Egészségügyi vészhelyzet esetén automata külső defibrillátor (AED) a recepción.</p>
        </div>
      </section>

      {/* ——— Sportcentrum ——— */}
      <section id="sportcentrum" className="section sportcentrum" aria-labelledby="sportcentrum-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Miskolci Egyetemi Sportcentrum</p>
              <h2 id="sportcentrum-title" className="h2 reveal">
                A tenisz mellett: <em>homok és műfű.</em>
              </h2>
            </div>
            <p className="lead reveal">
              A Sportcentrum területén strandsport-centrum és futballaréna is várja a csapatokat, táborokat és bajnokságokat. Hétköznap
              15 és 22, hétvégén 10 és 20 óra között.
            </p>
          </div>

          <div className="venues">
            <article className="venue glass reveal">
              <p className="venue__kicker">Strandsport Centrum</p>
              <h3 className="h3">4 strandröplabda- vagy 2 strandkézi-, illetve strandfocipálya</h3>
              <p className="venue__text">
                Homokos pályák, amelyeken akár tenisz- és tollaslabdapálya is kialakítható, kis lelátóval és zuhanyzós öltözőkkel. 2024-ben
                itt zajlott az országos egyetemi strandröplabda-bajnokság és az Európai Egyetemi Játékok strandröplabda-tornája.
              </p>
              <p className="venue__price">
                4 000 Ft <span>/ pálya / óra</span>
              </p>
            </article>
            <article className="venue glass reveal">
              <p className="venue__kicker">Futball aréna</p>
              <h3 className="h3">2 műfüves pálya, 20 × 40 méter</h3>
              <p className="venue__text">
                Körbepalánkozott pályák labdafogó hálóval, 4 zuhanyzós öltöző zárható szekrényekkel, kemence, 72 m²-es fedett és 150 m²-es
                nyitott terasz, egyszerre akár 300 fős vendégtér.
              </p>
              <p className="venue__price">
                13 000 Ft <span>/ pálya / óra, hétköznap</span>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Egyetemváros. <em>Várunk a pályán.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Pályafoglalás, recepció</span>
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
                    <span className="contact__line">Miskolci Egyetemi Sportcentrum</span>
                  </div>
                </li>
                <li>
                  <IconClock />
                  <div>
                    <span className="contact__label">Nyitvatartás</span>
                    <span className="contact__line">{CLUB.hours}</span>
                  </div>
                </li>
              </ul>
              <div className="visit__actions">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Foglalás <IconArrow />
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconPin /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__map glass reveal">
              <iframe title="A Miskolci Egyetem Teniszcentrum a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
