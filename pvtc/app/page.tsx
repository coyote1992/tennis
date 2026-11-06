import Image from "next/image";
import { IconArrow, IconClock, IconMail, IconPhone, IconPin } from "@/components/icons";
import { CLUB, COACHES, HOURS, OTHER_PRICES, PROGRAMS, RESULTS, SEASON_PASSES } from "@/lib/site";

const BOOKING = [
  { title: "Online, 0–24", text: "A klub foglalási rendszerében, bárhonnan és bármikor. Az első foglalás előtt regisztrálnod kell, vagy a klubirodában 3 perc alatt segítünk." },
  { title: "Telefonon", text: `A ${CLUB.bookingPhone} számon.` },
  { title: "Személyesen", text: "A klubirodában, a Dr. Veress Endre utcában. Ha elakadsz a regisztrációval, Horváth Rita segít." },
];

const RULES = [
  "A játék egész órakor kezdődik, és óra 55 percig tart. Utána húzd le a pályát, és tisztítsd meg a vonalakat.",
  "Csak teniszöltözetben és teniszcipőben lehet játszani. A klubházba salakmentes cipővel lépj be.",
  "A pályák játékra alkalmasságáról (például eső után) az üzemeltető dönt.",
  "A klubhelyiségben tilos dohányozni, a kutyákat pórázon kell tartani, a kerékpárokat a tárolóba tedd.",
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Pécs · Dr. Veress Endre utca, {CLUB.landmark}</p>
            <h1 id="hero-title" className="h1 reveal">
              A régió legnagyobb <em>teniszklubja.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                Nyáron 12 salakpálya, télen 4 fedett, fűtött pálya. Versenyzők, gyerekek és társasági játékosok klubja 1992 óta, diplomás
                edzőkkel, hangulatos klubházzal és büfével.
              </p>
              <div className="season glass">
                <p className="season__label">
                  <span className="season__dot" aria-hidden="true" /> Most: téli szezon
                </p>
                <p className="season__text">
                  A fedett, fűtött pályákat a nap 24 órájában foglalhatod online, a szaunával együtt.
                </p>
                <div className="hero__ctas">
                  <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                    Online pályafoglalás <IconArrow />
                  </a>
                  <a href={CLUB.bookingPhoneHref} className="btn btn--ghost">
                    <IconPhone /> {CLUB.bookingPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero__media">
            <figure className="hero__photo hero__photo--main reveal reveal--img">
              <Image
                src="/img/legifoto.jpg"
                alt="A PVTC teniszcentruma légifotón: salakpályák, középen a klubház"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 800px"
                style={{ objectFit: "cover", objectPosition: "50% 55%" }}
              />
            </figure>
            <figure className="hero__photo reveal reveal--img">
              <Image
                src="/img/teli-csarnok.jpg"
                alt="Játékosok a fedett, fűtött téli pályán"
                fill
                sizes="(max-width: 900px) 100vw, 400px"
                style={{ objectFit: "cover" }}
              />
              <figcaption className="hero__caption">Télen: fedett, fűtött pályák</figcaption>
            </figure>
          </div>

          <ul className="facts reveal" aria-label="Röviden">
            <li className="fact">
              <span className="fact__num">12</span>
              <span className="fact__label">salakpálya nyáron</span>
            </li>
            <li className="fact">
              <span className="fact__num">4</span>
              <span className="fact__label">fedett, fűtött pálya télen</span>
            </li>
            <li className="fact">
              <span className="fact__num">1992</span>
              <span className="fact__label">óta működik a klub</span>
            </li>
            <li className="fact">
              <span className="fact__num">I. osztály</span>
              <span className="fact__label">női és férfi csapatunk is</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— Courts ——— */}
      <section id="palyak" className="section courts" aria-labelledby="palyak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályák</p>
          <h2 id="palyak-title" className="h2 reveal">
            Nyáron 12 pálya, <em>télen 4 fedett.</em>
          </h2>
          <p className="lead reveal">
            Kiváló állapotú salakpályák, egy helyen. Télen négy pályát lefedünk és fűtünk, így egész évben játszhatsz. A pályát online, a nap
            24 órájában foglalod.
          </p>

          <div className="courts__photos">
            <figure className="courts__photo courts__photo--wide reveal reveal--img">
              <Image src="/img/legifoto-felulrol.jpg" alt="A tizenkét salakpálya felülről, középen a klubházzal" fill sizes="(max-width: 900px) 100vw, 46vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="courts__photo reveal reveal--img">
              <Image src="/img/palya-felulrol.jpg" alt="Egy salakpálya játékosokkal, felülről" fill sizes="(max-width: 900px) 50vw, 23vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="courts__photo reveal reveal--img">
              <Image src="/img/setany.jpg" alt="Sétány a klubház mellett, a kerítés mögött a pályák" fill sizes="(max-width: 900px) 50vw, 23vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>

          <div className="courts__info">
            <div className="hours glass reveal">
              <p className="hours__title">
                <IconClock /> Nyitvatartás
              </p>
              <ul>
                {HOURS.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <strong>{h.time}</strong>
                  </li>
                ))}
              </ul>
              <p className="hours__note">A szezonális nyitvatartást a bejáratnál is kiírjuk.</p>
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
              <div className="ways__ctas">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Online pályafoglalás <IconArrow />
                </a>
                <a href={CLUB.register} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  Regisztráció
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Prices ——— */}
      <section id="arak" className="section pricing" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Árak · 2026-os nyári szezon</p>
          <h2 id="arak-title" className="h2 reveal">
            Bérlet egész szezonra, <em>vagy óránként.</em>
          </h2>
          <p className="lead reveal">
            A szezonbérlet fix heti időpontra szól, átlagosan 25 hétre: így a legolcsóbb egy óra. A téli, fedett pályás időszak díjairól a
            klubirodában tájékoztatunk.
          </p>

          <ul className="passes">
            {SEASON_PASSES.map((p) => (
              <li className="pass glass reveal" key={p.name + (p.courts ?? "")}>
                <p className="pass__name">
                  {p.name}
                  {p.courts && <span> · {p.courts}</span>}
                </p>
                <p className="pass__price">
                  {p.price} <span>Ft / szezon</span>
                </p>
                <p className="pass__hour">
                  {p.hour} Ft / óra <span>(25 alkalommal)</span>
                </p>
                <p className="pass__when">{p.when}</p>
              </li>
            ))}
          </ul>

          <div className="pricecard glass reveal">
            <p className="pricecard__title">
              Egyéb csomagok <span>· előzetes foglalással, nem átruházható</span>
            </p>
            <table className="pricetable">
              <tbody>
                {OTHER_PRICES.map((o) => (
                  <tr key={o.name}>
                    <th scope="row">
                      {o.name}
                      <small>{o.when}</small>
                    </th>
                    <td>
                      {o.price}
                      <small>{o.unit}</small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="pricing__note reveal">
            Bérletről érdeklődj a klubirodában: {CLUB.officePhone} vagy {CLUB.email}.
          </p>
        </div>
      </section>

      {/* ——— Coaching ——— */}
      <section id="oktatas" className="section coaching" aria-labelledby="oktatas-title">
        <div className="container">
          <p className="eyebrow reveal">Oktatás</p>
          <h2 id="oktatas-title" className="h2 reveal">
            4 éves kortól <em>a felnőttekig.</em>
          </h2>
          <p className="lead reveal">
            Kezdők és haladók is jelentkeznek hozzánk, és minden tudásszintre találunk megfelelő edzőt. Az év bármely időszakában lehet
            csatlakozni, előzetes jelentkezés és tudásszint-felmérés után.
          </p>

          <ul className="programs">
            {PROGRAMS.map((p) => (
              <li className="program glass reveal" key={p.key}>
                <figure className="program__photo">
                  <Image src={p.img} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover" }} />
                  <span className="program__age">{p.age}</span>
                </figure>
                <div className="program__body">
                  <h3 className="h3">{p.name}</h3>
                  <p className="program__text">{p.text}</p>
                  <ul className="program__meta">
                    {p.meta.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          <div className="coach glass reveal">
            <div>
              <p className="rules__title">Jelentkezés oktatásra</p>
              <p className="coach__note">
                E-mailben az {CLUB.email} címen, vagy a klubirodában. Információ: {CLUB.manager}, {CLUB.officePhone}.
              </p>
            </div>
            <a href={CLUB.emailHref + "?subject=" + encodeURIComponent("Jelentkezés teniszoktatásra")} className="btn btn--accent">
              <IconMail /> Jelentkezem
            </a>
          </div>

          <h3 className="team__title reveal">Edzőink</h3>
          <ul className="coaches">
            {COACHES.map((c) => (
              <li className="coachcard reveal" key={c.name}>
                <figure className="coachcard__photo">
                  <Image src={c.img} alt={`${c.name}, ${c.role.toLowerCase()}`} fill sizes="(max-width: 640px) 50vw, 22vw" style={{ objectFit: "cover", objectPosition: "50% 20%" }} />
                </figure>
                <p className="coachcard__name">{c.name}</p>
                <p className="coachcard__role">{c.role}</p>
                <p className="coachcard__bio">{c.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— The club ——— */}
      <section id="klub" className="section about" aria-labelledby="klub-title">
        <div className="container">
          <p className="eyebrow reveal">A klub</p>
          <h2 id="klub-title" className="h2 h2--xl reveal">
            Pécsi tenisz, <em>1992 óta.</em>
          </h2>
          <p className="lead reveal">
            A PVTC 1992-ben alakult a Pécsi Spartacus tenisz szakosztályából, amely már az ötvenes évektől szervezte a város teniszéletét. A
            Balokány ligeti pályák helyén épült fel a Kodály Központ; 2009 óta a Dr. Veress Endre utcai teniszcentrum az otthonunk.
          </p>
          <ul className="built reveal">
            <li>
              <span className="built__num">Szuperliga</span>
              <span className="built__text">női és férfi felnőtt csapatbajnoki címek a kilencvenes években</span>
            </li>
            <li>
              <span className="built__num">Vidékbajnok</span>
              <span className="built__text">többszörös első hely az utánpótlás egyesületi pontversenyében</span>
            </li>
            <li>
              <span className="built__num">Fair play</span>
              <span className="built__text">
                a centrum névadója, a pécsi születésű Gulyás István 1967-ben UNESCO nemzetközi fair play díjat kapott; 1977 és 1987 között a
                Magyar Teniszszövetség elnöke volt
              </span>
            </li>
          </ul>

          <div className="about__photos">
            <figure className="about__photo about__photo--wide reveal reveal--img">
              <Image src="/img/klubhaz-legifoto.jpg" alt="A klubház és a pályák légifotón" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="about__photo reveal reveal--img">
              <Image src="/img/bufe.jpg" alt="A klubház büféje asztalokkal" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="about__photo reveal reveal--img">
              <Image src="/img/terasz.jpg" alt="Terasz a pályák mellett" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>

          <div className="wellness glass reveal">
            <figure className="wellness__photo">
              <Image src="/img/szauna.jpg" alt="A klub szaunája" fill sizes="(max-width: 900px) 100vw, 220px" style={{ objectFit: "cover" }} />
            </figure>
            <div>
              <p className="rules__title">Wellness</p>
              <h3 className="h3">Szauna és masszázs a pályák mellett</h3>
              <p className="wellness__text">
                Hatszemélyes szauna, vadonatúj kályhával; előzetes egyeztetéssel masszőrt is biztosítunk. A téli időszakban (október 15. –
                április 15.) a szaunát is az online foglalási rendszerben foglalhatod.
              </p>
              <p className="wellness__price">
                1 400 Ft <span>/ fő / alkalom (legfeljebb 2 óra) · egy fő esetén 2 000 Ft</span>
              </p>
            </div>
          </div>

          <blockquote className="quote reveal">
            <p>
              „Fontos számomra, hogy gyermekeim olyan helyen sportoljanak, ahol a sport szeretete mellett a teniszhez tartozó illemet is
              elsajátítják, és ahol egy nyitott, barátságos közegben lehetnek, ahol az edzők szeretettel fordulnak hozzájuk.”
            </p>
            <footer>Gömöry Péter</footer>
          </blockquote>
        </div>
      </section>

      {/* ——— Competitions ——— */}
      <section id="versenyek" className="section house" aria-labelledby="versenyek-title">
        <div className="container">
          <p className="eyebrow reveal">Versenyek</p>
          <h2 id="versenyek-title" className="h2 reveal">
            Első osztálytól <em>az amatőr kupákig.</em>
          </h2>
          <p className="lead reveal">
            Női és férfi csapatunk is a magyar csapatbajnokság első osztályában játszik, és számos korosztályos, köztük nemzetközi tornának
            vagyunk házigazdái. Amatőröknek két saját versenysorozatunk van.
          </p>

          <div className="cups">
            <article className="cup glass reveal">
              <p className="cup__kicker">Télen · 2015 óta</p>
              <h3 className="h3">Tüke Tenisz Kupa</h3>
              <p>
                Profi-amatőr csapatbajnokság a fedett szezonban, „Davis Kupa” hangulatban: kéthetente fordulók, profi és amatőr egyéni és
                páros, és egy páros, ahol a két játékos együtt legalább 110 éves.
              </p>
              <ul className="cup__stats">
                <li>
                  <strong>12</strong> csapat
                </li>
                <li>
                  <strong>220+</strong> versenyző
                </li>
              </ul>
            </article>
            <article className="cup glass reveal">
              <p className="cup__kicker">Nyáron · 2014 óta</p>
              <h3 className="h3">Brand Slam</h3>
              <p>
                Négyfordulós amatőr bajnoki sorozat férfi egyesben, 50 év felettieknek és párosban, fordulónként 100–120 résztvevővel. A végén a
                ranglistapontok döntenek. Nők is indulhatnak, egyelőre a férfiak között.
              </p>
              <ul className="cup__stats">
                <li>
                  <strong>4</strong> forduló
                </li>
                <li>
                  <strong>100–120</strong> fő / forduló
                </li>
              </ul>
            </article>
          </div>
          <div className="cups__cta reveal">
            <a href={CLUB.competitionEntry} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
              Verseny nevezés <IconArrow />
            </a>
          </div>

          <p className="rules__title results__title reveal">Legutóbbi eredményeink</p>
          <ul className="results">
            {RESULTS.map((r) => (
              <li className="result reveal" key={r.title}>
                <span className="result__year">{r.year}</span>
                <div>
                  <h3 className="result__title">{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="teams">
            <figure className="team reveal reveal--img">
              <Image src="/img/noi-csapat.jpg" alt="A PVTC női csapata a salakpályán" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
              <figcaption>Női csapatunk</figcaption>
            </figure>
            <figure className="team reveal reveal--img">
              <Image src="/img/ferfi-csapat.jpg" alt="A PVTC férfi csapata a füves területen" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
              <figcaption>Férfi csapatunk</figcaption>
            </figure>
          </div>

          <details className="fullrules glass reveal">
            <summary>
              Házirend röviden <span aria-hidden="true">+</span>
            </summary>
            <div className="fullrules__body fullrules__body--single">
              <ul>
                {RULES.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              A jégpálya mellett. <em>Várunk a pályán.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Pályafoglalás telefonon</span>
                    <a href={CLUB.bookingPhoneHref}>{CLUB.bookingPhone}</a>
                  </div>
                </li>
                <li>
                  <IconPhone />
                  <div>
                    <span className="contact__label">Klubiroda · {CLUB.manager}, klubvezető</span>
                    <a href={CLUB.officePhoneHref}>{CLUB.officePhone}</a>
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
                    <span className="contact__line">Gulyás István Teniszcentrum, {CLUB.landmark}</span>
                  </div>
                </li>
                <li>
                  <IconClock />
                  <div>
                    <span className="contact__label">Nyitvatartás</span>
                    {HOURS.map((h) => (
                      <span className="contact__line" key={h.days}>
                        {h.days}: <strong>{h.time}</strong>
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
              <div className="visit__actions">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Pályafoglalás <IconArrow />
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconPin /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__map glass reveal">
              <iframe title="A Pécs Városi Tenisz Club a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
