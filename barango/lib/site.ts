// Everything both versions show. Sources: barangotenisz.wordpress.com (barangotenisz.hu redirects
// there): Home, Klub, Árak, Edzések, Barango Tenisziskola (szabályzat, valid from 25 March 2026),
// Pályaépítés, Házirend, Letöltések (the parental consent PDF, v1.0, 2026-02-07, whose header gives the
// club's address) and Adatkezelési tájékoztató (operator details). Plus the club's reply in 100web
// (3 November 2026, Kelemen Dóra: the paperwork for children is done after the first session).

/** 3500 -> "3 500" with a no-break space, the same on server and client. */
export function fmt(n: number) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
}

export const CLUB = {
  name: "Barango Tenisz Club",
  short: "Barango",
  town: "Érd",
  street: "Porcsinrózsa utca 55.",
  address: "2030 Érd, Porcsinrózsa utca 55.",
  phone: "+36 20 267 3097",
  phoneHref: "tel:+36202673097",
  email: "dori0189@gmail.com",
  emailHref: "mailto:dori0189@gmail.com",
  contact: "Kelemen Dorottya",
  contactRole: "tenisziskola-vezető",
  operator: "Ma-Bruk Kft.",
  operatorAddress: "2030 Érd, Porcsinrózsa utca 55.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=2030%20%C3%89rd%2C%20Porcsinr%C3%B3zsa%20utca%2055",
  mapsEmbed: "https://maps.google.com/maps?q=2030%20%C3%89rd%2C%20Porcsinr%C3%B3zsa%20utca%2055&z=16&output=embed",
  consentPdf: "/docs/barango-szuloi-nyilatkozat.pdf",
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "palya", label: "Pálya és árak" },
  { id: "edzesek", label: "Edzések" },
  { id: "tenisziskola", label: "Tenisziskola" },
  { id: "palyaepites", label: "Pályaépítés" },
  { id: "hazirend", label: "Házirend" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export const OPEN = { days: "Minden nap", hours: "7:00–22:00" };

export const COURT = {
  intro: "Salakos teniszpálya Érden, óradíjas foglalással, kezdőknek és profiknak egyaránt. Sötétedés után világítással, a pálya mellett ingyenes parkolóval.",
  booking: "Pályát telefonon vagy e-mailben foglalhatsz.",
  play: "A játékidő 55 perc; a maradék 5 perc a pálya lehúzásáé, ezt a játékosok végzik.",
  pay: "Alkalmi játéknál a pályadíjat játék után rendezed, készpénzben vagy átutalással (a közleménybe: dátum, kezdési időpont, név).",
  features: ["Salakpálya", "Sötétedéstől világítás", "Ingyenes parkoló", "WC"],
  note: "Öltöző még nincs, a megoldáson dolgozunk.",
};

/** Árak page. The student discount is 500 Ft per hour off both hourly rates. */
export const PRICES = {
  studentOff: 500,
  hourly: [
    { id: "hetkoznap", title: "Hétköznap", price: 3500, when: "Munkanapokon 7:00–22:00" },
    { id: "hetvege", title: "Hétvégén", price: 4000, when: "Hétvégén 7:00–22:00" },
  ],
  pass: {
    title: "Barango bérlet",
    hours: 10,
    price: 36000,
    valid: "6 héten belül, a hét bármely napján, előzetes foglalással",
    change: "A bérletes vendégek foglalásukat az időpont előtt legfeljebb 24 órával ingyen módosíthatják.",
  },
};

export const EVENTS = ["Őszi Klubkupa", "Családi Tenisznap", "Éjszakai Tenisz"];

export const COACH = {
  name: "Pásztor Gergely",
  role: "teniszedző",
  quote: "Célom, hogy a játékosok jó alapokra építve, biztonságosan és örömmel fejlődjenek – kezdőtől haladó szintig.",
  focus: ["alapok", "technika", "lábmunka", "játékhelyzetek", "meccsszituációk"],
  formats: ["egyéni", "páros (igény szerint)", "kiscsoport", "gyerekcsoport"],
};

export const TRAINING = {
  intro: "Egyéni és csoportos edzések salakpályán; a csoportok tudásszint szerint alakulnak.",
  private: "Magánedzés előzetes egyeztetéssel.",
  prices: "Az edzésárakról telefonon adunk tájékoztatást.",
  scheduleNote: "Az edzésrend az időjárástól függően változhat.",
  /** Heti edzésrend from the Edzések page (newer than the school rules' 16–18 range, which the site doesn't use). */
  schedule: [
    { day: "Hétfő", time: "17:00–18:00", group: "Gyerekcsoport", level: "Vegyes" },
    { day: "Hétfő", time: "18:00–19:00", group: "Gyerekcsoport", level: "Suli felső" },
    { day: "Szerda", time: "17:00–18:00", group: "Gyerekcsoport", level: "Suli alsó" },
    { day: "Szerda", time: "18:00–19:00", group: "Gyerekcsoport", level: "Suli felső" },
    { day: "Csütörtök", time: "17:00–18:00", group: "Gyerekcsoport", level: "Suli alsó" },
  ],
  steps: [
    { title: "Hívj vagy írj", text: "Telefonon vagy e-mailben jelentkezhetsz." },
    { title: "Rövid egyeztetés", text: "Életkor, tudásszint és cél: hobbi, fejlődés vagy meccs." },
    { title: "Csoport és időpont", text: "Javaslatot adunk a megfelelő csoportra, és küldjük az időpontot." },
  ],
  tips: [
    "Az edzés előtt 5–10 perccel érkezz.",
    "Ha az időjárás miatt változik valami, telefonon értesítünk.",
    "A pályahasználatra a házirend vonatkozik.",
  ],
};

export const SCHOOL = {
  leader: "Kelemen Dorottya",
  intro: "A Barango Tenisziskolában a gyerekek a testméretükhöz illő ütővel és lassabban pattanó labdával, kisebb pályán kezdenek, és szintről szintre haladnak.",
  /** From the club's reply in 100web and the Edzések page. */
  firstSession:
    "Az első edzés után közösen átbeszéljük a részleteket, és akkor intézzük a papírokat is. A szülői nyilatkozat innen előre is letölthető, vagy edzés előtt kérhetsz egyet az edzőtől.",
  /** The red–orange–green groups; the site describes the progression as a whole, not each level. */
  levels: ["Piros", "Narancs", "Zöld"],
  levelsText: "A piros, narancs és zöld csoportok lépésről lépésre visznek: a következő szintre akkor lép a gyerek, ha az adott technikai és taktikai elemeket már készségszinten alkalmazza.",
  principles: [
    { title: "Méretre szabott eszközök", text: "Testmérethez illő ütő, alacsonyabbra és lassabban pattanó labda: több idő a helyes mozdulatra." },
    { title: "Igazi játék az elejétől", text: "Az első alkalmaktól adogatnak, labdamenetet játszanak és számolják az eredményt." },
    { title: "Rengeteg ütés", text: "Sorban állás helyett labdamenet: több mint kétszer annyi ütés, gyorsabb fejlődés." },
    { title: "Taktika kicsiben", text: "A kisebb pályán folyamatosan dönteniük kell, mikor mit kezdjenek a labdával." },
    { title: "Valódi teniszmozgás", text: "Helyes lábmunka, megállás és egyensúly, helyezkedés két ütés között." },
    { title: "Saját játékstílus", text: "Mindenkinek a személyiségéhez illő játékstílus alakul ki." },
  ],
  rules: [
    { title: "Edzés", text: "60 perces edzések, a beosztás szerint." },
    { title: "Díj", text: "Havi átalánydíj, minden hónap 10-ig előre, átutalással vagy készpénzben. Munkaszüneti nap vagy elutazás nem csökkenti; hosszabb betegségről vagy sérülésről a tenisziskola vezetője dönt." },
    { title: "Elmaradt edzés", text: "Az eső miatt elmaradt edzést ugyanazon a héten pénteken délután pótoljuk. Az előre látható hiányzást jelezd időben." },
    { title: "Kijelentkezés", text: "A kijelentkezést e-mailben kell jelezni; addig a havidíj fizetendő." },
    { title: "Szülőknek", text: "A szabadtéri időszakban a szülők csak a gyerek bekíséréséig tartózkodnak a pályán." },
    { title: "Öltözet", text: "Sportruha és lapos talpú tenisz- vagy sportcipő." },
  ],
};

export const BUILD = {
  intro: "Salakos teniszpályák építése, felújítása és karbantartása, valamint teniszsátrak felállítása és bontása.",
  lead: "A salakpálya akkor jó, ha egyenletes, stabil és jól vízelvezetett.",
  contact: { name: "Baranyi István", phone: "+36 20 923 4937", phoneHref: "tel:+36209234937", email: "barangotenisz@gmail.com" },
  services: [
    {
      title: "Építés és felújítás",
      items: ["Új salakos pálya kivitelezése", "Alapréteg, szegélyezés, vonalazás előkészítése", "Felületjavítás, szintkorrekció, tömörítés", "Szezon előtti felújítás, újrasalakolás"],
    },
    {
      title: "Karbantartás",
      items: ["Tavaszi szezonindítás, őszi téliesítés", "Rendszeres karbantartás, anyagpótlás", "Nyomvályú, felpúposodás, egyenetlenségek javítása", "Heti vagy havi karbantartási ütemterv"],
    },
    {
      title: "Sátrak",
      items: ["Szezonális sátorállítás és -bontás", "Helyszíni egyeztetés és kivitelezés", "Gyors, biztonságos, rendezett munka"],
    },
  ],
  steps: [
    { title: "Felmérés", text: "Helyszíni felmérés: a pálya állapota, a célok, a határidő." },
    { title: "Ajánlat", text: "Javaslat és árajánlat anyagigénnyel és munkafázisokkal." },
    { title: "Kivitelezés", text: "Ütemezett munka, átadás rendezett állapotban." },
  ],
  ask: ["A pálya helyszíne (település)", "Hány pályáról van szó", "Építés, felújítás, karbantartás vagy sátor", "Tervezett határidő"],
};

export const HOUSE_RULES = [
  { title: "Saját felelősség", text: "A szolgáltatásokat mindenki saját felelősségére veszi igénybe; edzés előtt jelezd az edzőnek, ha valami befolyásolja a terhelhetőségedet." },
  { title: "Rendeltetésszerű használat", text: "Óvd a pályát és a felszerelést; a nem rendeltetésszerű használatból eredő kárt a károkozó téríti." },
  { title: "Étel, ital", text: "Enni és inni szabad, ha nem okoz kárt és rendet hagysz; üveg nem vihető be, műanyag kulacs igen." },
  { title: "Öltözet", text: "Félmeztelenül sportolni nem lehet." },
  { title: "Cipő", text: "Csak salakpályára alkalmas sportcipőben; stoplis vagy pályát rongáló cipő tilos." },
  { title: "Alkohol, dohányzás", text: "A klub területén alkohol, tudatmódosító szer és dohányzás tilos." },
  { title: "Értéktárgyak", text: "Az elhagyott tárgyakért a klub nem vállal felelősséget; csak a játékhoz szükséges holmit vidd be." },
  { title: "Rend", text: "A palackokat, zsebkendőket és egyéb hulladékot tedd a kukába." },
  { title: "Magatartás", text: "Sportszerű viselkedés; a klub területén káromkodni nem lehet." },
  { title: "Lehúzás", text: "Játék után a pályát lehúzva, rendezett állapotban add át." },
  { title: "Érkezés", text: "A pályára legkorábban 5 perccel a kezdés előtt lehet bemenni." },
  { title: "Megközelítés", text: "Az utca felől vagy a gépkocsibeálló felőli közlekedőn; a pálya melletti úton óvatosan kelj át. A parkolót saját felelősségre használhatod." },
];

export const FORM = {
  topics: ["Pályafoglalás", "Bérlet", "Edzés", "Tenisziskola", "Egyéb"],
};
