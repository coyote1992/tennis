// The club's house rules (fehervartenisz.hu, Házirend), shared by both versions.

export const RULES_VALID = "Hatályos 2020. január 1-jétől visszavonásig.";

export const RULES = [
  {
    id: "foglalas",
    title: "Foglalás",
    items: [
      <>
        Pályát foglalni és lemondani <strong>csak az online pályafoglalási rendszerben (HELLA)</strong> lehet, saját
        felhasználói fiókkal. A belépési adatokat a regisztráció után a recepció küldi meg.
      </>,
      <>
        <strong>Bérlet:</strong> állandó időpont a teljes szezonra.
      </>,
      <>
        <strong>Alkalmi foglalás:</strong> a szabad pályákra legfeljebb 2 héttel előre lehet foglalni.
      </>,
      <>A bérelt és az alkalmi időpont nem adható tovább: mindenki csak a saját foglalását használhatja.</>,
    ],
  },
  {
    id: "lemondas",
    title: "Lemondás",
    items: [
      <>A bérelt időpont a játék kezdete előtt legalább 24 órával módosítható vagy mondható le a rendszerben.</>,
      <>
        Alkalmi foglalásnál a <strong>24 órával a kezdés előtt le nem mondott órát lejátszottnak tekintjük</strong>, és a díját
        a rendszer automatikusan felszámítja.
      </>,
    ],
  },
  {
    id: "oltozek",
    title: "Öltözék és öltöző",
    items: [
      <>A sporttelepen a tenisz írott és íratlan viselkedési és öltözködési szabályai érvényesek.</>,
      <>
        <strong>A váltócipő használata kötelező.</strong> Hiányos öltözékben a pályára lépni nem lehet.
      </>,
      <>
        Öltözőszekrény a recepción kérhető, <strong>500 Ft kaucióért</strong>; korlátozott számban állandó szekrény is bérelhető.
        A szekrényben hagyott tárgyakért az üzemeltető nem felel.
      </>,
    ],
  },
  {
    id: "palya",
    title: "A pálya rendje",
    items: [
      <>A pályára legfeljebb 5 perccel a játék kezdete előtt lehet bemenni, a pályán várakozni nem lehet.</>,
      <>
        <strong>Az óra utolsó 5 perce a pálya karbantartásáé:</strong> használat után a játékosok húzzák le a salakot, a
        vonalakon túl is, hogy ne maradjanak mélyedések, majd a pályahúzót visszateszik a kijelölt helyére.
      </>,
      <>Minden pályához saját asztal és pad tartozik, ezeket használd.</>,
      <>Télen a pályák között a hálónál lehet közlekedni; a nyitott szezonban minden pályának saját bejárata van.</>,
    ],
  },
  {
    id: "fizetes",
    title: "Fizetés",
    items: [
      <>A szolgáltatások rendezett számla mellett vehetők igénybe.</>,
      <>
        Készpénzzel a recepción <strong>hétköznap 8 és 22 óra között</strong> lehet fizetni; ezen kívül a foglalási rendszerben
        SimplePay-jel vagy átutalással.
      </>,
      <>A pályadíjakat, időpontokat és egyéb díjakat a mindenkori árlista tartalmazza.</>,
    ],
  },
  {
    id: "parkolas",
    title: "Parkolás",
    items: [
      <>Parkolni csak a kijelölt helyeken lehet: a régi klubház előtti parkolóban és a fehér murvás területen.</>,
      <>Egyes időszakokban a parkolás díjköteles: a díjat a parkolóőrnél kell fizetni, aki nyugtát ad. A sporttelepen kívül, a közúton a parkolás ingyenes.</>,
    ],
  },
  {
    id: "altalanos",
    title: "Általános szabályok",
    items: [
      <>Érkezéskor, a szolgáltatás igénybevétele előtt regisztrálj, vagy ha már regisztráltál, jelentkezz be a recepción.</>,
      <>A sportpályákon csak az üzemeltető írásos engedélyével rendelkező edzők dolgozhatnak.</>,
      <>A szolgáltatások igénybevétele saját felelősségre történik.</>,
      <>A talált tárgyakat a recepción kell leadni; legfeljebb egy hónapig őrizzük meg.</>,
      <>A létesítmény területén tilos a dohányzás, kivéve a kijelölt dohányzóhelyet.</>,
      <>
        A pályák melletti villanyszekrényekhez és a gázkazánhoz nyúlni szigorúan tilos és veszélyes. Ha hibát észlelsz, hívd a{" "}
        <a href="tel:+36309427000">+36 30 942 7000</a> számot.
      </>,
      <>A szolgáltatások igénybevételével a házirendet elfogadod.</>,
    ],
  },
];
