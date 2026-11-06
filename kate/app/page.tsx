import Image from "next/image";
import Link from "next/link";
import { IconArrow, IconCalendar, IconMail, IconPin } from "@/components/icons";
import { CLUB, FEES } from "@/lib/site";

const START = [
  {
    title: "Írj, vagy gyere ki a pályára",
    text: "Egy rövid levél is elég, de személyesen is megkereshetsz minket a pályán.",
  },
  {
    title: "Tisztázzuk a célt",
    text: "Versenyző szeretnél lenni, klubszintű játéktudásig fejlődnél, vagy csak a rendszeres mozgás érdekel?",
  },
  {
    title: "Kezdhetsz felszerelés nélkül",
    text: "Felmérés után pályaigazgatónk és edzőink egyeztetett időpontban várnak. Ha még nincs felszerelésed, ütőt és labdát adunk.",
  },
];

const LEAGUES = [
  {
    kicker: "Csapatban",
    title: "Kecskemét Városi Tenisz Bajnokság",
    text: "A városi csapatbajnokság nevezése és eredményei a KATE-nél futnak. 2020-ban öt osztályban játszottak a csapatok, az Extra Ligától a D osztályig.",
    facts: ["Nevezési díj: 16 000 Ft / csapat", "Csapattagok tagdíja: 13 000 Ft, 18 év alatt 8 000 Ft", "Sorsolás és eredmények online"],
  },
  {
    kicker: "Egyedül",
    title: "Aranyhomok Open",
    text: "Egyéni városi bajnokság, amelyre bárki nevezhet. Csoportokban, kéthetente egy meccs; az időpontot és a helyszínt a felek egyeztetik, a pályát a „hazai” játékos foglalja, a költséget megosztják.",
    facts: [
      "Részvételi díj: 12 000 Ft / fő",
      "Két 6 játékos szett, 6:6-nál tiebreak, 1:1-nél 10 pontos döntő tiebreak",
      "2026-ban: névre szóló serleg, az elsőnek két főre szóló szállodai hétvége",
    ],
  },
  {
    kicker: "Országosan",
    title: "OB III csapat",
    text: "2018-ban indultunk először a Magyar Tenisz Szövetség országos csapatbajnokságában, hogy fiatal tehetségeink és a városi bajnokság legjobbjai is kipróbálhassák magukat.",
    facts: ["Fordulónként 6 egyéni és 3 páros mérkőzés", "2021 tavaszán hat fordulóból ötöt megnyertünk"],
  },
];

const TIMELINE = [
  { year: "1974–75", text: "A KSC férfi teniszcsapata az OB I/B-ben játszik. Kecskeméti teniszélet anno, amelynek neveire ma is emlékezünk." },
  { year: "2002", text: "Megalakul a KATE. Emblémáját Goór Imre festőművész és grafikus tervezte." },
  { year: "2018", text: "Először indulunk az MTSZ országos csapatbajnokságában, az OB III-ban." },
  { year: "2018–21", text: "A KATE által alapított Amatőr Tenisz Kft. üzemelteti a széktói, Olimpia utcai 11 teniszpályát." },
  { year: "Ma", text: "A GAMF-pályákon játszunk, a pályák online foglalhatók." },
];

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__top">
            <p className="eyebrow reveal">Kecskemét · amatőr tenisz {CLUB.founded} óta</p>
            <h1 id="hero-title" className="h1 reveal">
              Játszani öröm. <em>Kecskeméten, együtt.</em>
            </h1>
            <div className="hero__row reveal">
              <p className="lead">
                A KATE a kecskeméti amatőr teniszezők egyesülete. Városi csapatbajnokságot és egyéni bajnokságot rendezünk, az országos OB
                III-ban is szerepeltünk, és közösséget építünk a pályák körül, kezdőknek és rutinos játékosoknak egyaránt.
              </p>
              <div className="hero__ctas">
                <Link href="#tagsag" className="btn btn--accent">
                  Csatlakozom <IconArrow />
                </Link>
                <Link href="#kezdes" className="btn btn--ghost">
                  Hogyan kezdjek bele?
                </Link>
              </div>
            </div>
          </div>

          <figure className="hero__media reveal reveal--img">
            <Image
              src="/img/csapat.jpg"
              alt="Több tucat teniszező csoportképe egy salakpályán"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "50% 60%" }}
            />
            <figcaption className="hero__caption">Csapatkép a pályán · a klub fotóalbumából</figcaption>
          </figure>

          <ul className="facts reveal" aria-label="Röviden">
            <li className="fact">
              <span className="fact__num">{CLUB.founded}</span>
              <span className="fact__label">óta működő egyesület</span>
            </li>
            <li className="fact">
              <span className="fact__num">8 000 Ft</span>
              <span className="fact__label">éves tagdíj 18 év alatt</span>
            </li>
            <li className="fact">
              <span className="fact__num">13 000 Ft</span>
              <span className="fact__label">éves tagdíj felnőtteknek</span>
            </li>
            <li className="fact">
              <span className="fact__num">OB III</span>
              <span className="fact__label">országos csapat 2018 óta</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ——— How to start ——— */}
      <section id="kezdes" className="section start" aria-labelledby="kezdes-title">
        <div className="container">
          <p className="eyebrow reveal">Új vagy?</p>
          <h2 id="kezdes-title" className="h2 reveal">
            Teniszeznél? <em>Így kezdj bele.</em>
          </h2>
          <p className="lead reveal">
            Van, aki a bajnokság felől érkezik, és van, aki előbb csak játszani jár a közösségbe, és csak később nevez versenyre. Mindkettőre
            van példa, és arra is, hogy valaki egy időre kiszáll, aztán visszatér.
          </p>

          <ol className="steps">
            {START.map((s, i) => (
              <li className="step reveal" key={s.title}>
                <span className="step__num">0{i + 1}</span>
                <h3 className="h3">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="start__actions reveal">
            <a href={CLUB.emailHref} className="btn btn--accent">
              <IconMail /> Írj nekünk
            </a>
            <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              Online pályafoglalás <IconArrow />
            </a>
          </div>
        </div>
      </section>

      {/* ——— Championships ——— */}
      <section id="bajnoksag" className="section leagues" aria-labelledby="bajnoksag-title">
        <div className="container">
          <p className="eyebrow reveal">Bajnokságok</p>
          <h2 id="bajnoksag-title" className="h2 reveal">
            Csapatban, egyedül, <em>országosan.</em>
          </h2>

          <div className="league-list">
            {LEAGUES.map((l) => (
              <article className="league glass reveal" key={l.title}>
                <p className="league__kicker">{l.kicker}</p>
                <h3 className="h3">{l.title}</h3>
                <p className="league__text">{l.text}</p>
                <ul className="league__facts">
                  {l.facts.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <a href={CLUB.league} target="_blank" rel="noopener noreferrer" className="link-arrow reveal">
            Sorsolás, eredmények, nevezés <IconArrow />
          </a>
        </div>
      </section>

      {/* ——— The club ——— */}
      <section id="klub" className="section club" aria-labelledby="klub-title">
        <div className="container">
          <p className="eyebrow reveal">A klub</p>
          <h2 id="klub-title" className="h2 h2--xl reveal">
            Kecskeméti tenisz, <em>{CLUB.founded} óta.</em>
          </h2>
          <p className="lead reveal">
            Fő célunk a kecskeméti teniszsport megtartása és fejlesztése, a pályákon és a közösségben egyaránt: a klubélet alapjainak
            megteremtése, és a sport, a kultúra és az egészség hagyományainak őrzése.
          </p>

          <ol className="timeline">
            {TIMELINE.map((t) => (
              <li className="timeline__item reveal" key={t.year}>
                <span className="timeline__year">{t.year}</span>
                <p className="timeline__text">{t.text}</p>
              </li>
            ))}
          </ol>

          <figure className="anno reveal reveal--img">
            <Image
              src="/img/ksc-anno.jpg"
              alt="Fekete-fehér csapatfotó: teniszezők fehér öltözékben, ütőkkel a háló előtt"
              fill
              sizes="(max-width: 900px) 100vw, 56vw"
              style={{ objectFit: "cover", objectPosition: "50% 40%" }}
            />
            <figcaption className="anno__caption">Tenisz Kecskeméten, anno: a KSC férfi OB I/B-s csapata az 1970-es években</figcaption>
          </figure>

          <p className="volunteers reveal">
            A klubot a tagjai építik: pályaépítés, padok, sátor, virágládák, honlap. A köszönetlistánkon több mint húsz név szerepel, akik
            társadalmi munkával vagy felajánlással segítettek.
          </p>
        </div>
      </section>

      {/* ——— Membership ——— */}
      <section id="tagsag" className="section membership" aria-labelledby="tagsag-title">
        <div className="container">
          <div className="membership__head">
            <p className="eyebrow reveal">Tagság 2026</p>
            <h2 id="tagsag-title" className="h2 reveal">
              Egy év tagság, <em>nyártól a tél végéig.</em>
            </h2>
            <p className="lead reveal">
              A tagdíj a nyári szezon kezdetétől a következő téli szezon végéig érvényes. Jelentkezz a tagfelvételi űrlapon; a tagság a
              visszaigazolás után, a tagdíj befizetésével lesz teljes.
            </p>
          </div>

          <div className="fees">
            {FEES.map((f) => (
              <div className="fee glass reveal" key={f.who}>
                <p className="fee__who">{f.who}</p>
                <p className="fee__price">{f.price}</p>
                <p className="fee__note">{f.note}</p>
              </div>
            ))}
          </div>

          <ul className="membership__extra reveal">
            <li>
              <span>Városi csapatbajnokság, nevezés</span>
              <strong>16 000 Ft / csapat</strong>
            </li>
            <li>
              <span>Aranyhomok Open, részvétel</span>
              <strong>12 000 Ft / fő</strong>
            </li>
          </ul>

          <p className="membership__form reveal">
            Az űrlapon jelölheted, hogy csak egyesületi tag lennél, vagy a városi bajnokságban is indulnál, és hogy kezdő, haladó,
            versenyző amatőr vagy ranglistás játékos vagy.
          </p>

          <div className="membership__actions reveal">
            <a href={CLUB.joinForm} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
              Tagfelvételi űrlap <IconArrow />
            </a>
            <p className="membership__bank">
              Befizetés: {CLUB.bank.name}, <span className="nobr">{CLUB.bank.account}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ——— Club life ——— */}
      <section id="klubelet" className="section life" aria-labelledby="klubelet-title">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow reveal">Klubélet</p>
              <h2 id="klubelet-title" className="h2 reveal">
                Fair play, <em>a pálya mellett is.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Hisszük, hogy nem csak a helyes ütőfogás és a jól megütött tenyeres a lényeg, hanem a játék és a játszani tudás öröme, amely a
              mozgással együtt teljes kikapcsolódást ad.
            </p>
          </div>

          <div className="life__grid">
            <figure className="life__photo life__photo--tall reveal reveal--img">
              <Image src="/img/esti-meccs.jpg" alt="Esti játék villanyfényben a salakpályán" fill sizes="(max-width: 900px) 50vw, 24vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="life__photo reveal reveal--img">
              <Image src="/img/eremesek.jpg" alt="Érmes és okleveles játékosok csoportképe a pályán" fill sizes="(max-width: 900px) 50vw, 30vw" style={{ objectFit: "cover" }} />
            </figure>
            <figure className="life__photo reveal reveal--img">
              <Image src="/img/dontosok.jpg" alt="Két játékos ütővel és serleggel a mérkőzés után" fill sizes="(max-width: 900px) 50vw, 30vw" style={{ objectFit: "cover", objectPosition: "50% 35%" }} />
            </figure>
            <ul className="news">
              <li className="news__item glass reveal">
                <p className="news__date">
                  <IconCalendar /> 2026. szeptember 19.
                </p>
                <p className="news__title">KATE-nap</p>
                <p className="news__text">Egyesületi nap. I. Gerber Zsuzsa, megosztott II. hely: Poczonyi Zsolt és Tóth Gábor.</p>
              </li>
              <li className="news__item glass reveal">
                <p className="news__date">
                  <IconCalendar /> 2026. november 6.
                </p>
                <p className="news__title">Évzáró díjátadó vacsora</p>
                <p className="news__text">18 órától a Bajor Étteremben.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ——— Contact (final) ——— */}
      <section id="kapcsolat" className="section final" aria-labelledby="kapcsolat-title">
        <div className="container">
          <div className="final__head">
            <p className="eyebrow reveal">Kapcsolat</p>
            <h2 id="kapcsolat-title" className="h2 h2--xl reveal">
              Írj, vagy <em>gyere ki a pályára.</em>
            </h2>
          </div>

          <div className="visit">
            <div className="visit__info glass reveal">
              <ul className="contact">
                <li>
                  <IconMail />
                  <div>
                    <span className="contact__label">E-mail</span>
                    <a href={CLUB.emailHref}>{CLUB.email}</a>
                  </div>
                </li>
                <li>
                  <IconCalendar />
                  <div>
                    <span className="contact__label">Pályák</span>
                    <span className="contact__line">{CLUB.courts}, online foglalással</span>
                    <span className="contact__line">Téli szünet: {CLUB.winterClosed} óta</span>
                  </div>
                </li>
                <li>
                  <IconPin />
                  <div>
                    <span className="contact__label">Egyesület</span>
                    <span className="contact__line">{CLUB.fullName}</span>
                    <span className="contact__line">{CLUB.address}</span>
                  </div>
                </li>
              </ul>
              <div className="visit__actions">
                <a href={CLUB.booking} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Pályafoglalás <IconArrow />
                </a>
                <a href={CLUB.emailHref} className="btn btn--ghost">
                  <IconMail /> E-mail
                </a>
              </div>
            </div>

            <figure className="visit__photo glass reveal reveal--img">
              <Image src="/img/halo.jpg" alt="Salakpálya és háló közelről" fill sizes="(max-width: 900px) 100vw, 54vw" style={{ objectFit: "cover" }} />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
