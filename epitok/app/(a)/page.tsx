import Image from "next/image";
import { MorningCalc } from "@/components/a/MorningCalc";
import { ContactForm } from "@/components/shared/ContactForm";
import { Icon } from "@/components/shared/Icon";
import { CLUB, EVENTS, HISTORY, MORNING, PRICES, VENUE, VISIT, fmt } from "@/lib/site";

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`label${light ? " label--light" : ""}`}>{children}</p>;
}

const ARCHIVE = [
  { src: "/img/tortenet-kepeslap.jpg", alt: "Régi képeslap a Tisztviselőtelep népligeti sporttelepéről, hosszú ruhás hölgyekkel", cap: "A sporttelep egy századfordulós képeslapon" },
  { src: "/img/tortenet-rajz.jpg", alt: "Korabeli rajz a Népligeti Sporttelepről", cap: "Népligeti Sporttelep, korabeli rajz" },
  { src: "/img/tortenet-noi-csapat.jpg", alt: "A Gyárépítők I. osztályú női csapata a pályán", cap: "A Gyárépítők I. osztályú női csapata" },
  { src: "/img/tortenet-1960.jpg", alt: "Gyárépítők–Dózsa csapatbajnoki mérkőzés a Népligetben, középen Szigeti Ottó edző", cap: "Gyárépítők–Dózsa, 1960-as évek" },
  { src: "/img/tortenet-merkozes.jpg", alt: "Csapatbajnoki mérkőzés a népligeti pályákon, bírói székkel", cap: "Csapatbajnoki mérkőzés a Népligetben" },
  { src: "/img/tortenet-nezok.jpg", alt: "Nézők a padokon egy csapatbajnoki mérkőzésen", cap: "Csapatbajnoki mérkőzés nézői" },
  { src: "/img/tortenet-palyaepites.jpg", alt: "A 9-es és 10-es pálya alapozása", cap: "A 9-es és 10-es pálya alapozása" },
  { src: "/img/tortenet-csapatkep.jpg", alt: "Csapatkép a klubház előtt", cap: "Csapatkép a klubház előtt" },
  { src: "/img/tortenet-szines.jpg", alt: "Az Építők SC csapata az első színes képen, a klubház előtt", cap: "Az első színes csapatkép, 1970-es évek" },
  { src: "/img/archiv-uj-klubhaz.jpg", alt: "Az új klubház egy fekete-fehér felvételen", cap: "Az új klubház" },
];

export default function Page() {
  return (
    <>
      {/* ——— hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="hero__kicker">{CLUB.place} · 1896 óta sporttelep</p>
            <h1 id="hero-title" className="hero__title">
              Tizenkét salakpálya <em>a Népliget fái alatt.</em>
            </h1>
          </div>
          <div className="hero__side">
            <p className="hero__lead">{VENUE.intro}</p>
            <div className="btn-row">
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <Icon name="phone" size={17} /> {CLUB.phone}
              </a>
              <a href="#delelott" className="btn btn--ghost">
                Korlátlan délelőtti bérlet
              </a>
            </div>
          </div>
        </div>
        <figure className="hero__pano">
          <div className="hero__pano-img">
            <Image src="/img/klubhaz-szeles.jpg" alt="Az Építők Teniszklub klubháza a Népligetben" fill priority sizes="100vw" />
          </div>
          <Image src="/img/epitok-cimer.png" alt="" width={787} height={906} className="hero__crest" sizes="110px" />
        </figure>
      </section>

      {/* ——— pályák ——— */}
      <section id="palyak" className="band" aria-labelledby="palyak-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Pályák</Label>
              <h2 id="palyak-title" className="title">
                Áprilistól októberig, <em>minden nap.</em>
              </h2>
            </div>
            <p className="intro">
              {VENUE.season}, {VENUE.hours.toLowerCase()}. Pályát telefonon vagy e-mailben foglalhatsz Dundler Józsefnél.
            </p>
          </div>
          <dl className="facts reveal">
            {VENUE.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
          <div className="courts reveal">
            <div className="courts__photo courts__photo--big">
              <Image src="/img/palyak.jpg" alt="Salakos pályák, a háttérben a klubházzal" fill sizes="(max-width: 900px) 100vw, 58vw" />
            </div>
            <div className="courts__photo">
              <Image src="/img/palyak-fak.jpg" alt="Salakpályák a Népliget fái között" fill sizes="(max-width: 900px) 50vw, 40vw" />
            </div>
            <div className="courts__photo courts__photo--wide">
              <Image src="/img/klubhaz-osz.jpg" alt="A klubház és a pálya ősszel" fill sizes="(max-width: 900px) 100vw, 40vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ——— árak ——— */}
      <section id="arak" className="band band--paper" aria-labelledby="arak-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Árak</Label>
              <h2 id="arak-title" className="title">
                {PRICES.title}, <em>óradíjak.</em>
              </h2>
            </div>
            <p className="intro">Alkalmi pályabérlés óránként, vagy egész idényre egy állandó heti órával. A korlátlan délelőtti bérletről lejjebb.</p>
          </div>
          <div className="prices reveal">
            <div className="ptable">
              <p className="ptable__head">{PRICES.singleNote}</p>
              {PRICES.single.map((p) => (
                <div key={p.slot} className="ptable__row">
                  <span>{p.slot}</span>
                  <b>{fmt(p.price)} Ft</b>
                </div>
              ))}
            </div>
            <div className="ptable ptable--season">
              <p className="ptable__head">{PRICES.seasonNote}</p>
              {PRICES.season.map((p) => (
                <div key={p.slot} className="ptable__row">
                  <span>{p.slot}</span>
                  <b>{fmt(p.price)} Ft</b>
                </div>
              ))}
            </div>
            <a href="#delelott" className="pmorning">
              <span className="pmorning__label">Idénybérlet</span>
              <span className="pmorning__name">Hétköznap délelőtt, korlátlan</span>
              <b>{fmt(MORNING.price)} Ft</b>
              <span className="pmorning__more">
                Részletek <Icon name="arrowDown" size={15} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ——— délelőtti bérlet ——— */}
      <section id="delelott" className="band dark" aria-labelledby="delelott-title">
        <div className="container">
          <div className="morning">
            <div className="morning__text reveal">
              <Label light>Délelőtti bérlet</Label>
              <h2 id="delelott-title" className="title">
                Hétköznap délelőtt <em>korlátlanul.</em>
              </h2>
              <p className="morning__price">
                <b>{fmt(MORNING.price)} Ft</b>
                <span>egész idényre · {MORNING.when}</span>
              </p>
              <p className="intro">{MORNING.how}</p>
              <blockquote className="morning__quote">
                <p>„{MORNING.who} {MORNING.fit}”</p>
                <cite>{CLUB.contact}, Építők Teniszklub</cite>
              </blockquote>
            </div>
            <div className="reveal">
              <MorningCalc />
            </div>
          </div>
        </div>
      </section>

      {/* ——— klubtörténet ——— */}
      <section id="tortenet" className="band" aria-labelledby="tortenet-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Klubtörténet</Label>
              <h2 id="tortenet-title" className="title">
                Egyidős <em>a Népligettel.</em>
              </h2>
            </div>
            <p className="intro">{HISTORY.intro}</p>
          </div>
          <div className="history">
            <figure className="history__painting reveal">
              <div className="history__painting-img">
                <Image src="/img/tortenet-festmeny.jpg" alt="Festmény a klubházról és a pályákról" fill sizes="(max-width: 900px) 100vw, 1180px" />
              </div>
            </figure>
            <ol className="timeline reveal">
              {HISTORY.milestones.map((m) => (
                <li key={m.year}>
                  <b>{m.year}</b>
                  <p>{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="archive reveal" role="region" aria-label="Archív fotók" tabIndex={0}>
            {ARCHIVE.map((a) => (
              <figure key={a.src} className="archive__item">
                <div className="archive__img">
                  <Image src={a.src} alt={a.alt} fill sizes="320px" />
                </div>
                <figcaption>{a.cap}</figcaption>
              </figure>
            ))}
          </div>
          <div className="itf reveal">
            <div className="itf__text">
              <p className="itf__label">1994–2016</p>
              <h3 className="subtitle">{HISTORY.itf.title}</h3>
              <p>{HISTORY.itf.text}</p>
              <p className="itf__growth">{HISTORY.itf.growth}</p>
            </div>
            <div className="itf__players">
              <p className="itf__head">A Népligetben játszottak, később:</p>
              <div className="itf__cols">
                <ul>
                  {HISTORY.itf.men.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <ul>
                  {HISTORY.itf.women.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <p className="itf__hu">{HISTORY.itf.hungarians}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— események ——— */}
      <section id="esemenyek" className="band band--paper" aria-labelledby="esemenyek-title">
        <div className="container">
          <div className="head head--split reveal">
            <div>
              <Label>Események</Label>
              <h2 id="esemenyek-title" className="title">
                Versenyek, <em>klubélet.</em>
              </h2>
            </div>
            <p className="intro">{EVENTS.intro}</p>
          </div>
          <div className="events">
            <div className="events__photos reveal">
              <div className="events__photo">
                <Image src="/img/klubhaz-kozosseg.jpg" alt="Klubtagok és vendégek a klubház előtt egy verseny napján" fill sizes="(max-width: 900px) 100vw, 46vw" />
              </div>
              <div className="events__photo events__photo--strip">
                <Image src="/img/klubhaz-verseny.jpg" alt="Verseny a klubház előtt, szponzori molinókkal" fill sizes="(max-width: 900px) 100vw, 46vw" />
              </div>
            </div>
            <ul className="events__list reveal">
              {EVENTS.list.map((e) => (
                <li key={e.title}>
                  <span className="events__date">{e.date}</span>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </li>
              ))}
              <li className="events__fb">
                <a href={CLUB.facebook} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
                  Facebook-csoport <Icon name="arrowUpRight" size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ——— kapcsolat ——— */}
      <section id="kapcsolat" className="band" aria-labelledby="kapcsolat-title">
        <div className="container visit">
          <div className="reveal">
            <Label>Kapcsolat</Label>
            <h2 id="kapcsolat-title" className="title">
              Népliget, <em>X. kerület.</em>
            </h2>
            <dl className="visit__list">
              <div>
                <dt>Pályafoglalás, bérletek</dt>
                <dd>
                  <a href={CLUB.phoneHref}>{CLUB.phone}</a>
                  <small>
                    {CLUB.contact} · <a href={CLUB.emailHref}>{CLUB.email}</a>
                  </small>
                </dd>
              </div>
              <div>
                <dt>Tenisztelep</dt>
                <dd>
                  <a href={CLUB.site.phoneHref}>{CLUB.site.phone}</a>
                  <small>{CLUB.site.name}</small>
                </dd>
              </div>
              <div>
                <dt>Megközelítés</dt>
                <dd>
                  {CLUB.address}
                  <small>{VISIT.transit}</small>
                  <small>{VISIT.car}</small>
                </dd>
              </div>
            </dl>
            <div className="map">
              <iframe src={CLUB.mapsEmbed} title="Az Építők Teniszklub a Népligetben" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="visit__form reveal">
            <h3 className="subtitle">Írj nekünk</h3>
            <p>Pálya, bérlet vagy verseny: a levél Dundler Józsefhez megy.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
