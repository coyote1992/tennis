// Everything both versions show comes from here. Sources: the club's own site (next-tenisz.hu:
// winter court fees until 2027-04-11, opening hours, the treatment pages, directions), its online
// booking calendar (next-tenisz.hu/foglalas: Good Morning Club and Köredzés dates and fees), and
// the previous demo (next.tenis.studio), which carried the 2026 autumn junior sign-up sheet, the
// trainer's texts and the 2026 tournaments. The postcode is 1121 (OpenStreetMap: Őzike út,
// Svábhegy, XII. kerület); the club's footer says 1125, which is a typo.

export const SITE = {
  name: "Next Tenisz Akadémia",
  shortName: "Next Tenisz",
  url: "https://next.tenis.studio",
  hellaUrl: "https://hella.next-tenisz.hu/",
  hellaLabel: "hella.next-tenisz.hu",
  bookingUrl: "https://next-tenisz.hu/foglalas/",
  facebookUrl: "https://www.facebook.com/NextTeniszAkademia/",
  email: "montvaigabor@gmail.com",
  phone: { display: "+36 30 439 6037", href: "tel:+36304396037" },
  address: {
    line: "1121 Budapest, Őzike út 30/A",
    short: "Őzike út 30/A",
    note: "Pár perc sétára a Normafától",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Budapest+%C5%90zike+%C3%BAt+30%2FA",
    embedUrl: "https://maps.google.com/maps?q=Budapest%2C%20%C5%90zike%20%C3%BAt%2030%2FA&z=15&output=embed",
  },
  bank: { name: "Raiffeisen Bank Zrt.", account: "12001008-01723861-00100005" },
  season: {
    label: "Téli szezon",
    until: "2027. április 11.",
    untilIg: "2027. április 11⁠-⁠ig",
  },
};

export const TRAINER = {
  name: "Juhász András",
  nameWith: "Juhász Andrással",
  role: "Személyi edző",
  phone: { display: "+36 30 618 9800", href: "tel:+36306189800" },
};

export const HOURS = [
  { days: "Hétfő – péntek", time: "7:00 – 21:00", note: "egyes napokon 22:00-ig" },
  { days: "Szombat – vasárnap", time: "8:00 – 19:00" },
];

export const DIRECTIONS = {
  car: "Az Istenhegyi úton, majd az Eötvös úton felfelé. A Víztornyot elhagyva az első utcán jobbra (Normafa út), majd rögtön az első utcán ismét jobbra, az Őzike útra.",
  parking: "A pályák mellett lehet parkolni.",
  transit: "A Széll Kálmán térről a 21-es busszal körülbelül húsz perc, vagy a Fogaskerekűvel a Városmajorból.",
};

export const NAV = [
  { href: "/tenisz", label: "Tenisz" },
  { href: "/szemelyi-edzes", label: "Személyi edzés" },
  { href: "/csoportos-orak", label: "Csoportos órák" },
  { href: "/regeneracio", label: "Regeneráció" },
  { href: "/palyaberles", label: "Pályabérlés" },
  { href: "/galeria", label: "Galéria" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

/** Thousands with a no-break space, the Hungarian way: 12 000 Ft. */
export function ft(n: number) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " Ft";
}
export function num(n: number) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// ——— court fees, winter season (Ft / court / hour) ———
export type PriceBand = { label: string; time: string; casual: number; pass: number };
export const PRICE_BANDS: PriceBand[] = [
  { label: "Hétköznap reggel", time: "7 – 10 óra", casual: 11000, pass: 9500 },
  { label: "Hétköznap napközben", time: "10 – 14 óra", casual: 10000, pass: 8500 },
  { label: "Hétköznap délután, este", time: "14 – 21 óra", casual: 12000, pass: 11000 },
  { label: "Szombat", time: "egész nap", casual: 9500, pass: 8500 },
  { label: "Vasárnap", time: "egész nap", casual: 7500, pass: 7500 },
];
export const PRICE_FROM = Math.min(...PRICE_BANDS.map((b) => b.casual));

// ——— junior groups, 2026 autumn sign-up sheet ———
export type JuniorGroup = { id: string; name: string; slots: string[] };
export type JuniorLevel = {
  id: string;
  name: string;
  ball: string;
  court: string;
  color: string;
  who: string;
  image: string;
  imageAlt: string;
  groups: JuniorGroup[];
};
export const JUNIOR_LEVELS: JuniorLevel[] = [
  {
    id: "piros",
    name: "Piros",
    ball: "Piros labda",
    court: "Kis pálya",
    color: "#d9483b",
    who: "Az első ütőtől: lassú, puha labda, rövid pálya, sok labdaérintés.",
    image: "/images/junior-cones.jpg",
    imageAlt: "Két kisfiú ütővel, bóják között a salakpályán",
    groups: [
      { id: "piros", name: "Piros", slots: ["Hétfő 16–17", "Kedd 17–18", "Csütörtök 16–17", "Péntek 15–16"] },
      { id: "piros-plus", name: "Piros+", slots: ["Kedd 17–18", "Csütörtök 16–17", "Péntek 16–17"] },
    ],
  },
  {
    id: "narancs",
    name: "Narancs",
    ball: "Narancs labda",
    court: "Közepes pálya",
    color: "#e98a2f",
    who: "Aki már rendszeresen átüti a hálón: nagyobb pálya, gyorsabb labda.",
    image: "/images/junior-net.jpg",
    imageAlt: "Kislány a háló előtt, ütővel a kezében",
    groups: [
      { id: "narancs", name: "Narancs", slots: ["Hétfő 16–17", "Kedd 17–18", "Csütörtök 16–17", "Péntek 16–17"] },
      { id: "narancs-plus", name: "Narancs+", slots: ["Hétfő 16–17", "Kedd 16–17", "Csütörtök 16–17", "Péntek 16–17"] },
    ],
  },
  {
    id: "zold",
    name: "Zöld",
    ball: "Zöld labda",
    court: "Teljes pálya",
    color: "#8fbf3a",
    who: "Teljes pálya, kicsit lassabb labda: átmenet a felnőtt játékba.",
    image: "/images/junior-backhand.jpg",
    imageAlt: "Fiú kétkezes fonákot üt a salakon",
    groups: [{ id: "zold", name: "Zöld", slots: ["Hétfő 16–17", "Kedd 16–17", "Csütörtök 17–18", "Péntek 17–18"] }],
  },
  {
    id: "nagyok",
    name: "Nagyok",
    ball: "Sárga labda",
    court: "Teljes pálya",
    color: "#e2d64b",
    who: "Sárga labdás játékosoknak, két csoportban, tudásszint szerint.",
    image: "/images/forehand-dark.jpg",
    imageAlt: "Fiatal játékos tenyeres ütés után, sötét háttér előtt",
    groups: [
      { id: "nagyok-1", name: "Nagyok 1", slots: ["Hétfő 17–18", "Kedd 17:30–19", "Szerda 16–17", "Csütörtök 17–18"] },
      { id: "nagyok-2", name: "Nagyok 2", slots: ["Kedd 17:30–19", "Szerda 18–19", "Csütörtök 17–18", "Csütörtök 18–19"] },
    ],
  },
];
export const ALL_JUNIOR_GROUPS = JUNIOR_LEVELS.flatMap((l) => l.groups);
export const WEEKDAYS = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"];
export const JUNIOR_TERM = "2026 ősz";

/** One row per group, one cell per weekday ("" when the group does not train that day). */
export function scheduleRows() {
  return ALL_JUNIOR_GROUPS.map((g) => ({
    id: g.id,
    name: g.name,
    level: JUNIOR_LEVELS.find((l) => l.groups.includes(g))!,
    cells: WEEKDAYS.map((d) =>
      g.slots
        .filter((s) => s.startsWith(d + " "))
        .map((s) => s.slice(d.length + 1))
        .join(", "),
    ),
  }));
}

// ——— adults ———
export const GOOD_MORNING_CLUB = {
  name: "Good Morning Club",
  when: "Kedden és csütörtökön 7:30",
  whenShort: "K, Cs 7:30",
  fee: 3000,
  bring: "Saját matrac, víz és jókedv",
  text: "Reggeli közös mozgás mobilizáló, nyújtó és keringésfokozó gyakorlatokkal, amelyek segítenek felfrissülni, csökkenteni a stresszt és energikusan kezdeni a napot.",
};

export const KOREDZES = {
  name: "Köredzés",
  when: "Kedden 11:00 és pénteken 9:00",
  whenShort: "K 11:00, P 9:00",
  fee: 4000,
  text: "Funkcionális szemléletű, kiscsoportos edzés, amely a mozgásminőség, az erő, a mobilitás és az állóképesség harmonikus fejlesztésére épül.",
  more: "Minden gyakorlat azt szolgálja, hogy a hétköznapi mozgásaid hatékonyabbak és biztonságosabbak legyenek, támogató közösségben, személyes odafigyeléssel.",
};

export const PT_HELPS = [
  "Az egészség megőrzése",
  "Fájdalommentesebb mozgás",
  "Erőfejlesztés",
  "Robbanékonyság",
  "Állóképesség",
  "Koordinációs képességek",
  "Az ülő életmód ellensúlyozása",
  "Több tudatosság a testedben",
];
export const PT_TOOLS = ["Olimpiai súlyemelőrúd", "Kettlebell", "TRX", "Medicinlabda", "Szabadsúlyok", "Koordinációs eszközök"];
export const PT_QUOTE = "Minden ember egyedi, ezért hiszek abban, hogy a hatékony edzés személyre szabott.";
export const PT_QUOTE_2 = "Fontos számomra, hogy az edzések jó hangulatban teljenek, ahol edző és sportoló egyszerre van jelen a folyamatban.";

// ——— regeneration ———
export type Treatment = { id: string; name: string; status: "open" | "soon"; lead: string; text: string[]; image?: string; imageAlt?: string };
export const TREATMENTS: Treatment[] = [
  {
    id: "masszazs",
    name: "Masszázs, köpölyözés",
    status: "open",
    lead: "Figyelem a testednek, támogatás a regenerációnak.",
    text: [
      "A mindennapi terhelés, a sport és az ülő életmód egyaránt hatással lehet az izmaink állapotára és a mozgásunk minőségére. A masszázs és a köpölyözés célja, hogy támogassa a regenerációt, enyhítse az izomfeszültséget, és hozzájáruljon a könnyedebb, szabadabb mozgásérzethez.",
      "A kezeléseket az egyéni igényekhez és az aktuális fizikai állapotodhoz igazítjuk.",
    ],
    image: "/images/masszazs-szoba.jpg",
    imageAlt: "A masszázsszoba: kezelőágy, a falon anatómiai plakátok",
  },
  {
    id: "vagus",
    name: "Vagus terápia",
    status: "open",
    lead: "Egyensúly a testnek, nyugalom az idegrendszernek.",
    text: [
      "A mindennapi stressz, a folyamatos készenlét és a túlterheltség hatással lehet a testünk működésére és a közérzetünkre. A vagus terápia célja az idegrendszer szabályozásának támogatása, a relaxáció elősegítése és a testi-lelki egyensúly megteremtése.",
      "A kezelés során az idegrendszer paraszimpatikus tónusát fokozzuk természetes módon, masszázsfogásokkal és vibrációval.",
    ],
    image: "/images/vagus-terapia.jpg",
    imageAlt: "Ábra a bolygóidegről (nervus vagus) és fő hatásairól",
  },
  {
    id: "softlaser",
    name: "Softlaser",
    status: "soon",
    lead: "Lágylézeres kezelés, hamarosan.",
    text: ["Az időpontokról és a díjakról az indulás előtt értesítünk. Ha szeretnél elsőként értesülni, jelezd a jelentkezésnél."],
  },
];

// ——— tournaments ———
export const EVENTS = [
  { name: "Tavaszi Tenisz Tusa", date: "2026. május 16.", fee: 12000 },
  { name: "Nyárindító Tenisztorna", date: "2026. június 14.", fee: 12000 },
  { name: "Póker Páros", date: "2026. július 18.", fee: 12000, note: "A párokat tudásszint szerint sorsoltuk." },
];

// ——— sign-up programs (used by the booking flow) ———
export type StepId = "program" | "junior" | "level" | "goals" | "time" | "weekdays" | "interest" | "contact";
export type Program = {
  id: string;
  title: string;
  text: string;
  icon: "ball" | "users" | "sun" | "leaf";
  steps: StepId[];
  toTrainer?: boolean;
};
export const PROGRAMS: Program[] = [
  { id: "junior", title: "Junior tenisz", text: "Gyerekeknek, a Piros labdától a Nagyokig", icon: "ball", steps: ["program", "junior", "contact"] },
  { id: "felnott-tenisz", title: "Tenisz felnőtteknek", text: "Kezdőtől versenyzőig, egyénileg vagy társsal", icon: "ball", steps: ["program", "level", "time", "contact"] },
  { id: "szemelyi-edzes", title: "Személyi edzés", text: `${TRAINER.nameWith}, a céljaidhoz igazítva`, icon: "users", steps: ["program", "goals", "time", "contact"], toTrainer: true },
  { id: "koredzes", title: "Köredzés", text: `${KOREDZES.whenShort}, ${ft(KOREDZES.fee)} / alkalom`, icon: "users", steps: ["program", "time", "contact"], toTrainer: true },
  { id: "good-morning-club", title: "Good Morning Club", text: `${GOOD_MORNING_CLUB.whenShort}, ${ft(GOOD_MORNING_CLUB.fee)} / alkalom`, icon: "sun", steps: ["program", "weekdays", "contact"], toTrainer: true },
  { id: "regeneracio", title: "Regeneráció", text: "Masszázs, köpölyözés, vagus terápia", icon: "leaf", steps: ["program", "interest", "contact"] },
];

export const STEP_TITLES: Record<StepId, string> = {
  program: "Mire jelentkezel?",
  junior: "A gyerekről",
  level: "Hol tartasz most?",
  goals: "Mit szeretnél elérni?",
  time: "Mikor érsz rá?",
  weekdays: "Melyik reggeleken jönnél?",
  interest: "Mi érdekel?",
  contact: "Hogyan érünk el?",
};
export const STEP_HINTS: Record<StepId, string> = {
  program: "Válassz egyet. Ha pályát foglalnál, azt a Hellán teheted meg.",
  junior: "Ha nem tudod, melyik csoport illik hozzá, jelöld a „Még nem tudom” lehetőséget, és segítünk.",
  level: "Nincs rossz válasz: ebből tudjuk, melyik edző és milyen óra illik hozzád.",
  goals: "Jelölj be annyit, amennyi igaz. Az első alkalommal úgyis részletesen megbeszéljük.",
  time: "Jelölj be minden napot és napszakot, ami jó. Ebből ajánlunk időpontot.",
  weekdays: "Az alkalmak 7:30-kor kezdődnek. Nem kell minden alkalommal jönnöd.",
  interest: "Jelöld, mi érdekel. Visszahívunk, és egyeztetjük az időpontot.",
  contact: "Ezeken az elérhetőségeken keresünk, hogy egyeztessük a részleteket.",
};
export const LEVELS = [
  "Kezdő, most ismerkednék a teniszezéssel",
  "Újrakezdő, régebben játszottam",
  "Középhaladó, rendszeresen játszom",
  "Haladó vagy versenyző",
];
export const FORMATS = ["Egyéni óra", "Párban", "Kiscsoportban", "Még nem tudom"];
export const GOALS = [
  "Egészség megőrzése",
  "Fájdalommentesebb mozgás",
  "Erőfejlesztés",
  "Robbanékonyság",
  "Állóképesség",
  "Koordináció",
  "Ülő életmód ellensúlyozása",
  "Fogyás, jobb közérzet",
  "Felkészülés a teniszre",
];
export const ALL_DAYS = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
export const GMC_DAYS = ["Kedd", "Csütörtök"];
export const DAYPARTS = ["Reggel (7–10)", "Délelőtt (10–14)", "Délután (14–18)", "Este (18–21)"];
export const INTERESTS = ["Masszázs", "Köpölyözés", "Vagus terápia", "Softlaser (értesítést kérek)"];
export const CHILD_AGES = Array.from({ length: 15 }, (_, i) => String(i + 4));

// ——— FAQ ———
export type Faq = { q: string; a: string[]; links?: { href: string; label: string }[] };
const priceRange = `${num(Math.min(...PRICE_BANDS.map((b) => b.casual)))} és ${ft(Math.max(...PRICE_BANDS.map((b) => b.casual)))}`;
const passRange = `${num(Math.min(...PRICE_BANDS.map((b) => b.pass)))} és ${ft(Math.max(...PRICE_BANDS.map((b) => b.pass)))}`;
export const FAQ: Record<string, Faq> = {
  booking: {
    q: "Hogyan foglalhatok pályát?",
    a: [
      `Online, a Hella foglalási rendszerében: ${SITE.hellaLabel}. Első alkalommal regisztrálnod kell, utána néhány kattintással foglalhatsz.`,
      `Kedvezményes bérletről a ${SITE.email} címen vagy telefonon, a ${SITE.phone.display} számon érdeklődj.`,
    ],
  },
  price: {
    q: "Mennyibe kerül egy óra a pályán?",
    a: [
      `A téli szezonban (${SITE.season.untilIg}) alkalmi játékra ${priceRange} között, bérlettel ${passRange} között, a napszaktól függően. A legkedvezőbb a vasárnap. A pontos sávokat a pályabérlés oldalon találod.`,
    ],
  },
  group: {
    q: "Melyik csoportba való a gyerekem?",
    a: [
      "A csoportokat a labda színe jelöli. A Piros az első lépésekhez való, a Narancs és a Zöld a fokozatos átmenethez, a Nagyok pedig már sárga labdával, teljes pályán játszanak. A pluszos csoportok (Piros+, Narancs+) az adott szinten haladóbbaknak szólnak.",
      "Ha bizonytalan vagy, a jelentkezésnél jelöld a „Még nem tudom” lehetőséget, és segítünk dönteni.",
    ],
  },
  juniorTimes: {
    q: "Mikor vannak a junior edzések?",
    a: [
      "Hétköznap délutánonként, 15 és 19 óra között. Minden csoportnak több időpontja van, a jelentkezésnél bejelölheted mindet, amelyik jó. A teljes órarendet a tenisz oldalon találod.",
    ],
  },
  firstTraining: {
    q: "Mi kell az első edzésre?",
    a: ["Kényelmes sportruha, salakpályára való teniszcipő és egy kulacs víz. Ha még nincs saját ütő, jelezd a jelentkezésnél, és megbeszéljük."],
  },
  firstPt: {
    q: "Hogyan zajlik az első személyi edzés?",
    a: [
      "Megbeszéljük, mit szeretnél elérni, és megnézzük, honnan indulsz: milyen most a mozgásod, mi esik jól, és mire kell figyelni. Ebből épül fel a programod, amit a fejlődésedhez igazítunk.",
    ],
  },
  experience: {
    q: "Kell előzetes edzéstapasztalat?",
    a: [
      "Nem. Az edzés ahhoz igazodik, ahonnan indulsz, legyen szó az első edzésedről vagy egy hosszabb kihagyás utáni visszatérésről. Ha fájdalommal vagy sérüléssel érkezel, a jelentkezésnél jelezd.",
    ],
  },
  bringPt: { q: "Mit hozzak az edzésre?", a: ["Kényelmes sportruhát és vizet. A többit az első alkalommal megbeszéljük."] },
  gmc: {
    q: "Mit hozzak a Good Morning Clubra?",
    a: [
      `Saját matracot, vizet és jókedvet. Az alkalmak ${GOOD_MORNING_CLUB.when.toLowerCase()}-kor kezdődnek, a részvételi díj ${ft(GOOD_MORNING_CLUB.fee)}, és mindenkit szeretettel várunk. Helyet online is foglalhatsz.`,
    ],
  },
  noTennis: {
    q: "Teniszeznem kell ahhoz, hogy jöhessek?",
    a: ["Nem. A csoportos órák és a regeneráció bárkinek szólnak, aki szeretne jobban mozogni, teniszezőknek és nem teniszezőknek egyaránt."],
  },
  ptToo: { q: "Személyi edzés is lehetséges?", a: ["Igen. Ha egyéni figyelmet szeretnél, nézd meg a személyi edzést."] },
  treatments: {
    q: "Hogyan kérhetek időpontot masszázsra vagy vagus terápiára?",
    a: [`A jelentkezésnél válaszd a Regenerációt, vagy hívj a ${SITE.phone.display} számon, és egyeztetjük az időpontot.`],
  },
  access: {
    q: "Hogyan jutok fel a pályákhoz?",
    a: [`Autóval: ${DIRECTIONS.car} ${DIRECTIONS.parking}`, `Tömegközlekedéssel: ${DIRECTIONS.transit}`],
  },
};

// ——— gallery ———
export const GALLERY = [
  { src: "/images/aerial-tower.jpg", alt: "A pályák és az adótorony a Budai-hegységben", w: 1920, h: 1280 },
  { src: "/images/junior-group.jpg", alt: "A junior csoport közös fotója a salakpályán", w: 1417, h: 945 },
  { src: "/images/coach-feeding.jpg", alt: "Edző labdát adogat a kosárból", w: 1200, h: 800 },
  { src: "/images/aerial-courts.jpg", alt: "A négy salakpálya felülről", w: 1200, h: 803 },
  { src: "/images/junior-portrait.jpg", alt: "Kisfiú tenyeres ütésre készül", w: 800, h: 1200 },
  { src: "/images/forehand-pink.jpg", alt: "Játékos tenyeres ütés közben", w: 1200, h: 800 },
  { src: "/images/footwork-drill.jpg", alt: "Lábmunka-gyakorlat akadályokkal a füvön", w: 1200, h: 800 },
  { src: "/images/aerial-hills.jpg", alt: "A pályák az erdőben, a háttérben a hegyek", w: 1920, h: 1280 },
  { src: "/images/junior-net.jpg", alt: "Kislány a hálónál", w: 1200, h: 800 },
  { src: "/images/studio-kettlebells.jpg", alt: "Kettlebellek a mozgásstúdióban", w: 1500, h: 2000 },
  { src: "/images/coach-lesson.jpg", alt: "Edző és tanítvány a pályán", w: 1200, h: 800 },
  { src: "/images/junior-cones.jpg", alt: "Két kisfiú bóják között", w: 1200, h: 800 },
  { src: "/images/aerial-budapest.jpg", alt: "Kilátás a pályák fölül Budapestre", w: 1920, h: 1280 },
  { src: "/images/forehand-dark.jpg", alt: "Fiatal játékos tenyeres ütés után", w: 1200, h: 800 },
  { src: "/images/studio-wallbars.jpg", alt: "Bordásfal és TRX a stúdióban", w: 1500, h: 2000 },
  { src: "/images/junior-rally.jpg", alt: "Labdamenet a háló két oldalán", w: 1200, h: 800 },
  { src: "/images/masszazs-szoba.jpg", alt: "A masszázsszoba", w: 1050, h: 1400 },
  { src: "/images/aerial-club.jpg", alt: "A klub a parkolóval, felülről", w: 1920, h: 1280 },
  { src: "/images/junior-backhand.jpg", alt: "Kétkezes fonák", w: 1200, h: 800 },
  { src: "/images/studio-house.jpg", alt: "A stúdió faháza", w: 1500, h: 2000 },
  { src: "/images/aerial-courts-2.jpg", alt: "Játékosok a pályákon, felülről", w: 1200, h: 820 },
];
