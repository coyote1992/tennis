import type { Metadata } from "next";
import Link from "next/link";
import { CLUB, HOURS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Házirend",
  description: "A Metro Tenisz házirendje: játékidő, foglalás, lemondás, bérletek, cipő és öltözék, felelősség.",
};

const RULES = [
  {
    id: "jatekido",
    title: "Játékidő és foglalás",
    items: [
      <>
        <strong>A játékidő 55 perc.</strong> Az utolsó 5 percben a bérlő takarítja, lehúzza és vonalazza a pályát.
      </>,
      <>Pályát személyesen vagy telefonon lehet foglalni: {CLUB.phone}.</>,
      <>A pályára legfeljebb 5 perccel a lefoglalt időpont előtt lehet bemenni; előtte a pályán várakozni nem lehet.</>,
      <>A foglalt időn túl megkezdett órát egész óraként számoljuk el.</>,
      <>
        Rendezvény, verseny vagy villanyos pálya foglalása esetén az üzemeltető a bérlést ugyanabban az időpontban másik pályára
        helyezheti át.
      </>,
    ],
  },
  {
    id: "lemondas",
    title: "Lemondás",
    items: [
      <>
        <strong>A lefoglalt pálya lemondását legkésőbb 48 órával az időpont előtt fogadjuk el.</strong> Késői lemondás vagy
        lemondás nélkül az óra felszámolásra kerül, kivéve, ha a pályát közben ki tudjuk adni.
      </>,
      <>Eső miatt elmaradt játék pótolható, ha van szabad pálya.</>,
      <>A le nem mondott vagy későn lemondott órát a következő alkalommal kell rendezni.</>,
    ],
  },
  {
    id: "fizetes",
    title: "Fizetés és bérletek",
    items: [
      <>Alkalmi bérlésnél a lefoglalt időt a pályára lépés előtt a recepción kell kifizetni.</>,
      <>A szezonbérlet egy meghatározott napra, időpontra és pályára szól. Nem visszaváltható; átadható, de a lemondott időpontért jóváírás nem jár.</>,
      <>Az előre fizetett bérlet csak abban a szezonban érvényes, amelyre megváltották.</>,
    ],
  },
  {
    id: "oltozek",
    title: "Cipő és öltözék",
    items: [
      <>
        A pályán csak megfelelő sportcipő használható. <strong>Salakon futócipő, illetve szöges vagy stoplis cipő nem
        használható</strong>; kemény pályára csak tiszta cipővel lehet lépni.
      </>,
      <>A cipőszabály megszegése 3 000 Ft takarítási díjjal jár.</>,
      <>Fedetlen felsőtesttel a sporttelepen, a pályákon és a recepción tartózkodni nem lehet.</>,
    ],
  },
  {
    id: "felelosseg",
    title: "Felelősség és rend",
    items: [
      <>A pályák és a szolgáltatások használata mindenkinek saját felelősségére történik.</>,
      <>Az öltözőkben, szekrényekben és a klub területén hagyott értékekért a klub nem vállal felelősséget.</>,
      <>A parkoló nem őrzött; az autókban hagyott értékekért és az autókban keletkezett kárért az üzemeltető nem felel.</>,
      <>A pályákon, a recepción és az öltözőkben tilos a dohányzás.</>,
      <>A házirend súlyos vagy ismételt megszegése ideiglenes vagy végleges kitiltással járhat.</>,
      <>A házirend nem ismerete nem mentesít a felelősség alól.</>,
    ],
  },
];

export default function HouseRules() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Házirend</p>
          <h1 className="h2 h2--xl">
            Rend a pályán, <em>öröm a játékban.</em>
          </h1>
          <p className="lead">
            A Metro Tenisz házirendje röviden. Nyitvatartás: {HOURS[0].days.toLowerCase()} {HOURS[0].time},{" "}
            {HOURS[1].days.toLowerCase()} {HOURS[1].time}. Kérdés esetén: <a href={CLUB.phoneHref}>{CLUB.phone}</a>.
          </p>
        </div>
      </section>

      <div className="container rules">
        <nav className="rules__toc" aria-label="Házirend részei">
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
