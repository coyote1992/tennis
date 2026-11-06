import Image from "next/image";
import Link from "next/link";
import { IconArrow, IconCalendar, IconClock, IconMail, IconPhone, IconPin } from "@/components/icons";
import { CLUB, HOURS } from "@/lib/site";

const PROGRAMS = [
  {
    title: "Ovitenisz",
    who: "Óvodásoknak",
    text: "Heti két alkalommal, külön csoportban. Az eddigi ovis csoportunk mára iskolás lett, így új óvodás csoport indul, amint elég jelentkező lesz.",
  },
  {
    title: "Tenisziskola",
    who: "Iskolásoknak",
    text: "A teniszjáték alapjai és szabályai, sok mozgással, intenzív edzéseken. Kezdő szinttől a haladóig lehet jelentkezni.",
  },
  {
    title: "Versenytenisz",
    who: "Kiválasztott tehetségeknek",
    text: "Azok a gyerekek, akiket edzőink az óvodás és iskolás csoportokból tehetségük, hozzáállásuk és elkötelezettségük alapján választanak ki.",
  },
];

const SCHOOL_FEES = [
  { what: "Heti 3 alkalom", price: "35 000 Ft" },
  { what: "Heti 2 alkalom", price: "28 000 Ft" },
  { what: "Heti 1 alkalom", price: "17 000 Ft" },
  { what: "Alkalmi óra", price: "5 000 Ft / alkalom" },
];

const COURT_FEES = [
  { when: "Hétköznap", sub: "hétfő–péntek, 6–21 óra", what: "Idénybérlet", price: "8 500 Ft / óra", note: "229 500 Ft / 27 hét" },
  { when: "Hétköznap", sub: "hétfő–péntek, 6–21 óra", what: "Alkalmi", price: "10 000 Ft / óra" },
  { when: "Hétvégén", sub: "szombat–vasárnap, 6–21 óra", what: "Alkalmi", price: "9 000 Ft / óra" },
];

const EXTRAS = [
  { what: "Ütőbérlés", price: "500 Ft / db" },
  { what: "Labdabérlés", price: "500 Ft / kosár" },
  { what: "Edzői díj", price: "8 000 Ft / óra" },
];

const COACHES = [
  { name: "Kovács Beáta", role: "Teniszoktató · táborvezető" },
  { name: "Kovács István", role: "Teniszedző" },
  { name: "Lay Kinga", role: "Teniszedző" },
  { name: "Papp Nóra", role: "Teniszedző" },
  { name: "Varga Zoltán", role: "Teniszedző" },
];

const CAMP_DAY = [
  { time: "8:00", text: "Érkezés, gyülekező, felszerelés" },
  { time: "9:00", text: "Teniszoktatás, másfél óra" },
  { time: "11:00", text: "Képességfejlesztés, kondi, nyújtás" },
  { time: "12:00", text: "Ebéd, utána pihenő" },
  { time: "14:00", text: "Teniszedzés, másfél óra" },
  { time: "15:45", text: "Uzsonna, aztán haza" },
];

const CAMP_EXTRAS = [
  "Napi két étkezés: ebéd és uzsonna",
  "Labdás ügyességfejlesztés, jóga és nyújtás",
  "Csocsó- és pingpongasztal",
  "Hetente egy strandprogram",
  "Az utolsó napon verseny korosztályonként",
  "Eső esetén fedett teniszsátorban edzünk",
  "Ütőt, labdát, minden felszerelést adunk",
];

const EVENTS = [
  { date: "2024. december", title: "Mikulás kupa", text: "A Gyökér utcai pályákon." },
  { date: "2025. február 15.", title: "Teniszvetélkedő", text: "A klub pályáin, Gyökér utca 18." },
  {
    date: "2025. február 23.",
    title: "Farsangi teniszvetélkedő",
    text: "Piros, narancs, zöld és 10+ kategória. Meleg tea, sütemény, oklevél és jutalom minden résztvevőnek.",
  },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow reveal">Budapest XVII. · Gyökér utca 18.</p>
            <h1 id="hero-title" className="h1 reveal">
              A jó tenisz <em>nem szerencse kérdése.</em>
            </h1>
            <p className="lead reveal">
              A Fortuna Sportegyesület tenisz szakosztálya több mint két évtizede tanít teniszezni a kerület gyerekeit, ovistól a
              versenyzőig. Télen négy fedett pálya bérelhető, alkalmanként vagy idénybérlettel.
            </p>
            <div className="hero__ctas reveal">
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <IconPhone /> Hívom Beát
              </a>
              <Link href="#teniszsuli" className="btn btn--ghost">
                Teniszsuli <IconArrow />
              </Link>
            </div>
            <p className="hero__note reveal">
              <span className="clover" aria-hidden="true" /> Új gyerekeket is várunk, kezdőket is.
            </p>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/dobogo.jpg"
              alt="Kupákkal és oklevelekkel a dobogón álló fiatal teniszezőlányok"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
              style={{ objectFit: "cover", objectPosition: "50% 30%" }}
            />
            <figcaption className="hero__caption">Díjátadó · a klub fotóalbumából</figcaption>
          </figure>
        </div>

        <div className="container">
          <ul className="facts reveal" aria-label="Röviden">
            <li className="fact">
              <span className="fact__num">4</span>
              <span className="fact__label">fedett pálya télen</span>
            </li>
            <li className="fact">
              <span className="fact__num">5</span>
              <span className="fact__label">edző és oktató</span>
            </li>
            <li className="fact">
              <span className="fact__num">6–21</span>
              <span className="fact__label">minden nap, a téli szezonban</span>
            </li>
            <li className="fact">
              <span className="fact__num">10</span>
              <span className="fact__label">hét nyári tábor 2026-ban</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— Tennis school ——— */}
      <section id="teniszsuli" className="section school" aria-labelledby="teniszsuli-title">
        <div className="container">
          <p className="eyebrow reveal">Teniszsuli gyerekeknek</p>
          <h2 id="teniszsuli-title" className="h2 reveal">
            Ovistól <em>a versenypályáig.</em>
          </h2>
          <p className="lead reveal school__lead">
            Az edzések hétfőtől csütörtökig 16 és 17 órától kezdődnek, a csoportbeosztástól függően. Teniszütőt igény szerint mindenkinek
            biztosítunk.
          </p>

          <ol className="programs">
            {PROGRAMS.map((p, i) => (
              <li className="program glass reveal" key={p.title}>
                <span className="program__num">{String(i + 1).padStart(2, "0")}</span>
                <p className="program__who">{p.who}</p>
                <h3 className="h3">{p.title}</h3>
                <p className="program__text">{p.text}</p>
              </li>
            ))}
          </ol>

          <div className="fees reveal">
            <h3 className="h3">
              Teniszsuli díjak <em>hétfő–csütörtök</em>
            </h3>
            <ul className="feelist">
              {SCHOOL_FEES.map((f) => (
                <li key={f.what}>
                  <span className="feelist__what">{f.what}</span>
                  <span className="feelist__price">{f.price}</span>
                </li>
              ))}
            </ul>
            <p className="fees__foot">
              Jelentkezés és csoportbeosztás: <a href={CLUB.phoneHref}>
                {CLUB.phoneName}, <span className="nobr">{CLUB.phone}</span>
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ——— Court rental ——— */}
      <section id="arak" className="section courts" aria-labelledby="arak-title">
        <div className="container">
          <p className="eyebrow reveal">Pályabérlés · téli szezon</p>
          <h2 id="arak-title" className="h2 reveal">
            Négy fedett pálya, <em>egész télen.</em>
          </h2>
          <p className="lead reveal">
            2026. október 12-től 2027. április 18-ig, minden nap reggel 6-tól este 9-ig. Pályát telefonon vagy e-mailben foglalhatsz.
          </p>

          <div className="courts__grid">
            <div className="rates reveal">
              {COURT_FEES.map((f) => (
                <div className="rate glass" key={f.when + f.what}>
                  <p className="rate__when">
                    {f.when} <span>{f.sub}</span>
                  </p>
                  <p className="rate__what">{f.what}</p>
                  <p className="rate__price">{f.price}</p>
                  {f.note && <p className="rate__note">{f.note}</p>}
                </div>
              ))}
              <ul className="feelist feelist--small">
                {EXTRAS.map((f) => (
                  <li key={f.what}>
                    <span className="feelist__what">{f.what}</span>
                    <span className="feelist__price">{f.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="callcard glass reveal" aria-label="Pályafoglalás">
              <p className="callcard__kicker">Pályafoglalás</p>
              <p className="callcard__title">Telefonon vagy e-mailben</p>
              <a href={CLUB.phoneHref} className="btn btn--accent btn--block">
                <IconPhone /> {CLUB.phone}
              </a>
              <p className="callcard__who">{CLUB.phoneName}</p>
              <a href={CLUB.phone2Href} className="btn btn--ghost btn--block">
                <IconPhone /> {CLUB.phone2}
              </a>
              <p className="callcard__who">{CLUB.phone2Name}</p>
              <a href={CLUB.emailHref} className="callcard__mail">
                <IconMail /> {CLUB.email}
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ——— About ——— */}
      <section id="rolunk" className="section about" aria-labelledby="rolunk-title">
        <div className="container">
          <p className="eyebrow reveal">Rólunk</p>
          <h2 id="rolunk-title" className="h2 h2--xl reveal">
            Szinte a nulláról, <em>több száz gyerekig.</em>
          </h2>
          <p className="lead reveal">
            Az elmúlt évtizedekben több száz gyereket szoktattunk rá a sportra és a rendszeres mozgásra, és megtanítottuk nekik az
            egészséges életmód fontosságát. Kedvező árú nyári táborainkban számtalan kerületi gyerek sportolhatott, jó helyen.
          </p>
          <ul className="pillars reveal" aria-label="Amivel foglalkozunk">
            <li>Egészséges életmódra nevelés</li>
            <li>Lakossági tömegsport</li>
            <li>Versenysport</li>
            <li>Szabadidősport</li>
          </ul>
          <blockquote className="aim reveal">
            <p>
              „Célunk, hogy a gyerekek elsajátítsák a tenisz alapjait, megtanulják a játék szabályait, és magas szintű
              mozgástapasztalatra tegyenek szert.”
            </p>
          </blockquote>

          <div className="album">
            <figure className="album__photo album__photo--wide reveal reveal--img">
              <Image
                src="/img/csapat-ermekkel.jpg"
                alt="Érmes fiatal teniszezők csoportképe egy fedett teraszon"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </figure>
            <figure className="album__photo reveal reveal--img">
              <Image
                src="/img/ovis-edzes.jpg"
                alt="Kisgyerekek edzése a salakpályán, edzővel"
                fill
                sizes="(max-width: 900px) 50vw, 20vw"
                style={{ objectFit: "cover" }}
              />
            </figure>
            <figure className="album__photo reveal reveal--img">
              <Image
                src="/img/paros-2.jpg"
                alt="Páros mérkőzés fedett pályán"
                fill
                sizes="(max-width: 900px) 50vw, 20vw"
                style={{ objectFit: "cover", objectPosition: "60% 50%" }}
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ——— Coaches ——— */}
      <section id="edzok" className="section coaches-sec" aria-labelledby="edzok-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Edzőink</p>
              <h2 id="edzok-title" className="h2 reveal">
                Öt edző, <em>minden szintre.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Felkészült szakemberekkel várjuk a sportolni vágyókat, gyerekeket és felnőtteket is. Személyre szabott edzésprogramot is
              összeállítunk; az edzői díj 8 000 Ft / óra.
            </p>
          </div>

          <ul className="coaches">
            {COACHES.map((c) => (
              <li className="coach glass reveal" key={c.name}>
                <span className="coach__mono" aria-hidden="true">
                  {c.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
                <p className="coach__name">{c.name}</p>
                <p className="coach__role">{c.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Summer camp ——— */}
      <section id="tabor" className="section camp" aria-labelledby="tabor-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Nyári napközis tábor</p>
              <h2 id="tabor-title" className="h2 reveal">
                Egész nyáron tenisz, <em>heti turnusokban.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Kezdőknek, haladóknak és versenyzőknek, 5 és 18 év között. Hétfőtől péntekig 7:30 és 16:30 között, az érkezés és a távozás
              rugalmas.
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
              <p className="camp__fine">Reggelit nem adunk; a hozott reggelit az első edzés előtt nyugodtan megehetik.</p>
            </div>

            <div className="camp__side">
              <ul className="ticks reveal">
                {CAMP_EXTRAS.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="camp__price glass reveal">
                <p className="camp__label">
                  <IconCalendar /> 2026 nyarán
                </p>
                <p className="camp__big">
                  59 000 Ft <span>/ hét (5 nap)</span>
                </p>
                <p className="camp__fine">
                  Június 22. és augusztus 28. között, 10 héten át. Testvérkedvezmény 10%, napi díj 12 000 Ft. Táborvezető: Kovács Beáta.
                </p>
                <p className="camp__fine">A 2027-es nyárról érdeklődj nála:</p>
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> {CLUB.phone}
                </a>
              </div>
            </div>
          </div>
          <p className="camp__shoes reveal">
            Sima talpú sportcipőben gyertek: ne stoplis, ne futócipő, és ne „hernyótalpas” talpú legyen.
          </p>
        </div>
      </section>

      {/* ——— House tournaments ——— */}
      <section id="versenyek" className="section events-sec" aria-labelledby="versenyek-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Házi versenyek</p>
              <h2 id="versenyek-title" className="h2 reveal">
                Kupák, vetélkedők, <em>oklevelek.</em>
              </h2>
            </div>
            <p className="lead reveal">
              A gyerekeknek házi bajnokságokat és vetélkedőket rendezünk, hogy egy délutánon át egymással is összemérhessék a tudásukat.
              A következő időpontokról érdeklődj telefonon.
            </p>
          </div>
          <ol className="events">
            {EVENTS.map((e) => (
              <li className="event reveal" key={e.title}>
                <p className="event__date">{e.date}</p>
                <p className="event__title">{e.title}</p>
                <p className="event__text">{e.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Gyökér utca 18. <em>Hívj, és megbeszéljük.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
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
                  <IconPhone />
                  <div>
                    <span className="contact__label">Telefon</span>
                    <span className="contact__line">
                      <a href={CLUB.phoneHref}>{CLUB.phone}</a> · {CLUB.phoneName}
                    </span>
                    <span className="contact__line">
                      <a href={CLUB.phone2Href}>{CLUB.phone2}</a> · {CLUB.phone2Name}
                    </span>
                    <span className="contact__line">
                      <a href={CLUB.landlineHref}>{CLUB.landline}</a> · vezetékes
                    </span>
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
                  <IconClock />
                  <div>
                    <span className="contact__label">Fedett pályák, 2026/27 tél</span>
                    {HOURS.map((h) => (
                      <span key={h.days} className="contact__line">
                        {h.days}: <strong>{h.time}</strong>
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
              <p className="bank">
                <span className="contact__label">Bankszámla ({CLUB.bank.name})</span>
                {CLUB.bank.account} · {CLUB.bank.holder}
                <br />
                <span className="bank__iban">IBAN: {CLUB.bank.iban}</span>
              </p>
              <div className="visit__actions">
                <a href={CLUB.phoneHref} className="btn btn--accent">
                  <IconPhone /> Hívás
                </a>
                <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <IconPin /> Útvonal
                </a>
              </div>
            </div>

            <div className="visit__map glass reveal">
              <iframe title="A Fortuna SE teniszpályái a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
