// Everything both versions show. Sources: versenytenisz.budapestteniszcentrum.com (Rólunk,
// Munkatársaink, Pályáink, Áraink, Play & Stay, Kapcsolat, főoldal) and the club's email reply in
// 100web (4 November 2026): there is no separate academy any more; the groups, ages, times and
// coaches below are from that reply. Coach mobile numbers from the reply are not published here;
// enquiries go to the reception (and Play & Stay to Bodnár Bettina, whose number the club publishes).
// Court prices are left out: the last published ones were for the 2025/26 winter season.

export const CLUB = {
  name: "Budapest Tenisz Centrum",
  short: "BTC",
  place: "Városmajor",
  address: "1122 Budapest, Szamos utca 2/c",
  phone: "+36 30 226 1890",
  phoneHref: "tel:+36302261890",
  email: "btcrecepcio@gmail.com",
  emailHref: "mailto:btcrecepcio@gmail.com",
  facebook: "https://www.facebook.com/budapestteniszcentrum2017",
  instagram: "https://www.instagram.com/budapestteniszcentrum/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Budapest%20Tenisz%20Centrum%2C%201122%20Budapest%2C%20Szamos%20utca%202%2Fc",
  mapsEmbed: "https://maps.google.com/maps?q=1122%20Budapest%2C%20Szamos%20utca%202%2Fc&z=16&output=embed",
  hours: [
    { days: "Hétfő–péntek", time: "7:00–21:00" },
    { days: "Szombat–vasárnap", time: "8:00–20:00" },
  ],
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "edzesek", label: "Edzések" },
  { id: "palyak", label: "Pályák" },
  { id: "edzok", label: "Edzők" },
  { id: "klub", label: "A klub" },
  { id: "jelentkezes", label: "Foglalás" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export const FACTS = [
  { num: "7", label: "pálya: 5 salak, 2 Rebound Ace" },
  { num: "500+", label: "játékóra hetente" },
  { num: "200+", label: "rendszeres amatőr klubtag" },
  { num: "100+", label: "év tenisz a Városmajorban" },
];

export type Group = {
  id: string;
  name: string;
  ages: string;
  /** where the group sits on the age line, in years */
  from: number;
  to: number;
  text: string;
  times?: string[];
  details: string[];
  coaches: string[];
  free?: boolean;
  contact?: { name: string; phone: string; phoneHref: string; email: string };
  img: string;
  imgAlt: string;
};

export const GROUPS: Group[] = [
  {
    id: "ovodai",
    name: "Óvodai tenisz",
    ages: "3–5 év",
    from: 3,
    to: 5,
    text: "Az első ütő, az első labdák: játékos mozgás és labdaérzék a legkisebbeknek.",
    details: ["Időpontok egyeztetése a recepción"],
    coaches: ["Reisz Nikolett", "Varga Hunor"],
    img: "/img/ovodai-1.jpg",
    imgAlt: "Kisgyerekek edzése a keménypályán, a háló előtt sorakozva",
  },
  {
    id: "play-stay",
    name: "Play & Stay",
    ages: "5–10 év",
    from: 5,
    to: 10,
    text: "Az ITF gyerekprogramja: kisebb pálya, lassabb labda és a gyerek méretéhez illő ütő, így a tenisz a kezdőknek is könnyebb és élvezetesebb.",
    details: ["Piros, narancs és zöld szint", "Ütőt az edzésre kapnak a gyerekek", "1,5 órás edzések"],
    coaches: ["Bodnár Bettina"],
    free: true,
    contact: { name: "Bodnár Bettina", phone: "+36 70 250 0880", phoneHref: "tel:+36702500880", email: "bodnarbettina997@gmail.com" },
    img: "/img/play-stay-mosoly.jpg",
    imgAlt: "Nevető kislány ütővel a BTC-n",
  },
  {
    id: "u12-16",
    name: "U12–16",
    ages: "10–16 év",
    from: 10,
    to: 16,
    text: "A Centerpálya Egyesület csoportjai hobbi és versenyzői szinten, négy salakpályán, négy edzővel.",
    times: ["Hétfő–péntek 15:00–16:30", "Hétfő–péntek 16:30–18:00"],
    details: ["Hobbi és versenyzői szint", "4 salakpálya, 4 edző"],
    coaches: ["Tóth Barnabás", "Krafcsik Tamás", "Varga Hunor", "Czotter Balázs"],
    img: "/img/u12-16.jpg",
    imgAlt: "Fiatal játékosok edzése a fedett salakpályán",
  },
  {
    id: "felnott",
    name: "Felnőtt csoport",
    ages: "18+",
    from: 18,
    to: 20,
    text: "Esti és délelőtti csoportos edzés felnőtteknek. A kezdők és a haladók külön pályán játszanak.",
    times: ["Kedd, szerda 19:00–21:00", "Csütörtök 9:00–10:00", "Csütörtök 19:00–21:00"],
    details: ["Kezdő és haladó külön pályán"],
    coaches: ["Budai László", "Khin Dániel"],
    free: true,
    img: "/img/kemeny-edzes.jpg",
    imgAlt: "Edzés a Rebound Ace keménypályán",
  },
];

export const PRIVATE_LESSONS =
  "Egyéni edzés iránt is érdeklődhetsz: a recepció egyezteti az edzővel és a pályával.";

/** The ITF Play & Stay stages, as the club describes them. */
export const STAGES = [
  { color: "Piros", ages: "4–8 év", court: "11 m", ball: "szivacs vagy 25%-os nyomású", racket: "41–53 cm", tone: "#c8412e" },
  { color: "Narancs", ages: "7–11 év", court: "18 m", ball: "50%-os nyomású", racket: "53–63 cm", tone: "#e08a2c" },
  { color: "Zöld", ages: "8 évtől", court: "teljes pálya", ball: "75%-os nyomású", racket: "63–68 cm", tone: "#5c9a3a" },
];

export const COURTS = {
  clay: {
    count: 5,
    numbers: "1–5.",
    title: "Ízületkímélő salakpályák",
    text: "Teljesen felújított pályák, egyedi osztrák ízületkímélő technológiával. Öt fős technikai csapatunk minden nap rendben tartja őket.",
    img: "/img/salak-3.jpg",
    imgAlt: "Salakpályák a sátorszerkezet alatt, pályahúzás közben",
  },
  hard: {
    count: 2,
    numbers: "6–7.",
    title: "Rebound Ace keménypályák",
    text: "Magyarországon egyedülálló, rugalmas borítás: az elasztikus gumirétegnek köszönhetően kíméli az ízületeket, és nemzetközi versenyekre is alkalmas.",
    img: "/img/kemeny-1.jpg",
    imgAlt: "Rebound Ace keménypálya a légsátor alatt",
  },
  dome:
    "Télen légsátor alatt játszunk: a rendszer megfelel az Európai Unió 2020/2021-es irányelveinek, korszerű, egészségmegóvó és környezettudatos.",
};

export const RULES = {
  booking: [
    "Foglalni telefonon (+36\u00a030\u00a0226\u00a01890), személyesen a recepción vagy az oldalon lévő űrlappal lehet; a foglalást a recepció igazolja vissza.",
    "A foglalást vagy az edzésen való részvételt legalább 24 órával előtte díjmentesen lemondhatod.",
    "A pályára a foglalt időpont előtt legfeljebb 5 perccel léphetsz.",
    "A lefoglalt pályán a foglalás ideje alatt csak a játékosok és edzőik tartózkodhatnak.",
    "Edzést a BTC-n csak a klub edzői tarthatnak.",
  ],
  clay: [
    "A játékidő 55 perc: az utolsó 5 percben húzd le a pályát.",
    "Csak teniszcipőben és megfelelő öltözékben lehet játszani.",
    "A klubházba lépve cseréld a salakos cipőt váltócipőre.",
    "Esős, viharos napokon indulás előtt kérdezd meg a recepción, játszhatók-e a salakpályák.",
  ],
  hard: [
    "Csak nyomot nem hagyó cipőben lehet a pályára lépni; a fekete talpú cipőt kerüld.",
    "Váltócipőt a bejáratnál, a pályák mellett vehetsz.",
    "A pályára csak palackozott, ízesítetlen ásványvizet vihetsz; más italt, ételt, krémet nem.",
  ],
};

export type Coach = { name: string; role: string; img?: string; groups: string[]; bio?: string };
export const COACHES: Coach[] = [
  {
    name: "Bodnár Bettina",
    role: "Play & Stay",
    img: "/img/bodnar-bettina.jpg",
    groups: ["Play & Stay"],
    bio: "Teniszedzői diplomáját 2018-ban a Testnevelési Egyetemen szerezte, azóta a BTC edzője. „Azt szeretem legjobban a munkámban, hogy én adhatok először ütőt a gyerekek kezébe.”",
  },
  {
    name: "Varga Hunor",
    role: "Óvodai tenisz, U12–16",
    img: "/img/varga-hunor.jpg",
    groups: ["Óvodai tenisz", "U12–16"],
    bio: "Két évtizede tanít amatőr felnőtteket, és hatéves kortól képez gyerekeket. MTSZ B licensz és gyakorlati A licensz, PTR edzői végzettség.",
  },
  {
    name: "Tóth Barnabás",
    role: "U12–16",
    img: "/img/toth-barnabas.jpg",
    groups: ["U12–16"],
    bio: "2020 óta a BTC edzője. Több mint tíz éve edz, volt az amerikai McKendree Egyetem NCAA II-es csapatának kapitánya.",
  },
  {
    name: "Krafcsik Tamás",
    role: "U12–16",
    img: "/img/krafcsik-tamas.jpg",
    groups: ["U12–16"],
    bio: "2018 óta a BTC edzője, junior és amatőr játékosokkal is dolgozik. OKJ-s teniszedző, US PTR és MTSZ Play & Stay képesítés.",
  },
  {
    name: "Budai László",
    role: "Felnőtt csoport",
    img: "/img/budai-laszlo.jpg",
    groups: ["Felnőtt csoport"],
    bio: "„A tenisz olyan társasági élet építésének lehetőségét adja, amelyben találkozhatnak a barátok, ismerősök.”",
  },
  { name: "Reisz Nikolett", role: "Óvodai tenisz", groups: ["Óvodai tenisz"] },
  { name: "Czotter Balázs", role: "U12–16", groups: ["U12–16"] },
  { name: "Khin Dániel", role: "Felnőtt csoport", groups: ["Felnőtt csoport"] },
];

export const STORY = [
  "A Városmajori Park ősfái között több mint száz éve teniszeznek. Erre a hagyományra épül a Budapest Tenisz Centrum, amely 2017 óta modern klubházzal, felújított pályákkal és télen légsátorral várja a játékosokat.",
  "Versenyzőnek és hobbijátékosnak egyaránt: a gyerekcsoportoktól a felnőtt esti edzésekig, a saját rendezésű nemzetközi versenyektől a baráti párosig.",
];

export const AMENITIES = [
  {
    id: "etterem",
    title: "Étterem",
    text: "Nagy üvegfalú, napfényes étterem ételekkel, italokkal és kávékülönlegességekkel. Teniszezés után itt lehet lazítani, és itt várhatod meg a gyereked edzését is.",
    note: "Asztalfoglalás: +36 30 226 1890",
    img: "/img/etterem.jpg",
    imgAlt: "A BTC kávézópultja a klubházban",
  },
  {
    id: "bolt",
    title: "Teniszbolt és húrozás",
    text: "Ütők, táskák, labdák és kiegészítők, eladóink segítenek választani. Az ütőd húrozását Horváth Géza végzi, minden hétköznap.",
    note: "Húrozás: 2 500 Ft / ütő + a húr ára",
    img: "/img/bolt.jpg",
    imgAlt: "Ütők, táskák és ruhák a BTC teniszboltjában",
  },
  {
    id: "versenyek",
    title: "Versenyek",
    text: "A hazai és nemzetközi versenyek mellett saját rendezésű nemzetközi versenyeket is tartunk a pályáinkon.",
    img: "/img/itf-borsos.jpg",
    imgAlt: "Kézfogás egy nemzetközi verseny díjátadóján a BTC-n",
  },
];

export const CSR =
  "Minden évben gyűjtést szervezünk a Máltai Szeretetszolgálatnak, és ingyenes pályahasználatot adunk iskoláknak és a Testnevelési Egyetem hallgatóinak.";

export const QUOTE = {
  text: "A Budapest Tenisz Centrumba mindig örömmel érkezem, itt valóban minden adott a minőségi munkához és tartalmas időtöltéshez profiknak és amatőröknek egyaránt! Barátságos légkör, kivételes infrastruktúra, jó pályák, képzett szakemberek.",
  name: "Fucsovics Márton",
};

export const SUPPORTERS = [
  { name: "4iG", img: "/img/tamogatok/4ig.jpg", w: 387, h: 240 },
  { name: "Wallis Motor", img: "/img/tamogatok/wallis-motor.jpg", w: 1322, h: 240 },
  { name: "DRK", img: "/img/tamogatok/drk.jpg", w: 596, h: 240 },
  { name: "Digitalminds", img: "/img/tamogatok/digitalminds.jpg", w: 239, h: 240 },
  { name: "Magyar Tenisz Szövetség", img: "/img/tamogatok/mtsz.jpg", w: 305, h: 240 },
];

export const FORM = {
  groups: ["Óvodai tenisz (3–5)", "Play & Stay (5–10)", "U12–16 (10–16)", "Felnőtt csoport (18+)", "Egyéni edzés"],
  surfaces: ["Salak", "Rebound Ace (kemény)", "Mindegy"],
  levels: ["Kezdő", "Haladó", "Versenyző"],
};

/** The form's group label for a group id (used by the "Jelentkezem" links). */
export const GROUP_LABEL: Record<string, string> = {
  ovodai: FORM.groups[0],
  "play-stay": FORM.groups[1],
  "u12-16": FORM.groups[2],
  felnott: FORM.groups[3],
  egyeni: FORM.groups[4],
};
