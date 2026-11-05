import type { Metadata } from "next";
import Link from "next/link";
import { CLUB } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pályahasználati rend",
  description: "A Tata Városi Tenisz Klub pályahasználati rendje: elsőbbség, csúcsidő, pályaápolás, viselkedés a pályán.",
};

const RULES = [
  {
    id: "elsobbseg",
    title: "Foglalás és elsőbbség",
    items: [
      <>Pályafoglalásnál elsőbbsége van a klub saját rendezvényeinek, a megyei bajnokságoknak és a gyerekedzéseknek.</>,
      <>Edzők, csapatkapitányok, rendezők: az elsőbbséget úgy tudjátok érvényesíteni, ha a pályaigényt legalább egy héttel előbb jelzitek.</>,
      <>Páros játéknál a csoport csúcsidőben egyelőre heti egy alkalmat foglaljon (a csoport tagjai ettől még többször is játszhatnak).</>,
      <>Egyéni játéknál csúcsidőben heti egy alkalom, lehetőleg a 3-as pályán.</>,
      <>Rendezvények idején pályabérlés nem lehetséges.</>,
    ],
  },
  {
    id: "csucsido",
    title: "Csúcsidő",
    items: [
      <>
        <strong>Április, május, szeptember, október:</strong> hétköznap 16:00 és 19:00 között.
      </>,
      <>
        <strong>Június, július, augusztus:</strong> hétköznap 17:00 és 19:30 között.
      </>,
      <>Csúcsidőbe nyúló játéknál írd fel a fali táblára, mikor léptetek pályára, és tartsátok a legfeljebb 2 óra játékidőt.</>,
      <>Telt pályák és várakozók esetén az egyénit játszók ajánlják fel a párost, vagy a szett végén (legalább 1 óra játék után) adják át a pályát.</>,
      <>Akinek hetente többször van lehetősége játszani, a szett után adja át a pályát a ritkábban teniszező, várakozó klubtagnak.</>,
    ],
  },
  {
    id: "palyaapolas",
    title: "A pálya ápolása",
    items: [
      <>Játék előtt locsoljátok meg a pályát (ez nem számít bele a bérleti időbe), utána húzzátok le.</>,
      <>Eső után a lágy pályát (ha a cipő besüllyed a salakba) ne használjátok. Ha mégis mély nyomok maradnak, a fa horolóval tüntessétek el, lehúzás előtt.</>,
      <>Ha játék után üresek maradnak a pályák, kérjük, zárjátok be a kaput.</>,
      <>Nagyon rossz idő után kérünk mindenkit, hogy egy kis közös munkától ne zárkózzon el, hogy a pályák mielőbb játszhatók legyenek.</>,
    ],
  },
  {
    id: "viselkedes",
    title: "A pályán",
    items: [
      <>Várakozás a féltető alatt: ott tájékozódhatsz a pályák foglaltságáról és a versenyekről.</>,
      <>Kerüljük a hangos megjegyzéseket, a mobiltelefon indokolatlan használatát és a dohányzást.</>,
      <>
        Ha a labda átmegy a szomszéd pályára, az ottani játékot „idegen” bekiáltással állítsuk meg; ilyenkor megismételt első adogatás jön.
      </>,
    ],
  },
];

export default function CourtRules() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Pályahasználati rend</p>
          <h1 className="h2 h2--xl">
            Hogy mindenki <em>jól játszhasson.</em>
          </h1>
          <p className="lead">
            A Tata Városi Tenisz Klub pályahasználati rendjéből (2019) a játékra vonatkozó szabályok, röviden. A díjakat a{" "}
            <Link href="/#foglalas">foglalásnál</Link> és a <Link href="/#tagsag">tagságnál</Link> találod. Javaslataitokat írásban várjuk:{" "}
            <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>.
          </p>
        </div>
      </section>

      <div className="container rules">
        <nav className="rules__toc" aria-label="A pályarend részei">
          {RULES.map((r) => (
            <a key={r.id} href={`#${r.id}`}>
              {r.title}
            </a>
          ))}
        </nav>
        <div className="rules__body">
          {RULES.map((r) => (
            <section key={r.id} id={r.id} className="rule glass" aria-labelledby={`${r.id}-t`}>
              <h2 id={`${r.id}-t`}>{r.title}</h2>
              <ul>
                {r.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </section>
          ))}
          <p className="rules__valid">
            <Link href="/#foglalas" className="link-arrow">
              Vissza a foglaláshoz
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
