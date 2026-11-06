// Everything both versions show. Sources: o10v.hu (Home, Online foglalás, Áraink, Klubtagság, Ovis
// tenisz, Gyerektenisz, Felnőtt tenisz, Gyerek tábor, Gyógytorna, Masszázs, Terembérlés, Contact and the
// 2026 tournament pages). Their own reply in 100web was only "mit szeretnél?", so nothing comes from it.
// Prices are the club's 2026/27 winter prices; the club reserves the right to change them.

export const CLUB = {
  name: "Open Tennis Valley",
  short: "OTV",
  place: "Mogyoród",
  legal: "Mogyoród Open Tennis Valley Egyesület",
  address: "2146 Mogyoród, Mandula u. 5.",
  phone: "+36 20 343 2624",
  phoneHref: "tel:+36203432624",
  coachPhone: "+36 30 999 11 97",
  coachPhoneHref: "tel:+36309991197",
  email: "info@o10v.hu",
  emailHref: "mailto:info@o10v.hu",
  appStore: "https://apps.apple.com/hu/app/open-tennis-valley/id6758016490",
  googlePlay: "https://play.google.com/store/apps/details?id=com.sportmate.opentennisvalley",
  instagram: "https://www.instagram.com/open.tennis/",
  facebook: "https://www.facebook.com/opentenisz/",
  mapsUrl: "https://maps.google.com?q=Open%20Tennis%20Valley,%20Mandula%20utca%205,%20Mogyor%C3%B3d,%202146",
  mapsEmbed: "https://maps.google.com/maps?q=Open%20Tennis%20Valley%2C%20Mandula%20utca%205%2C%202146%20Mogyor%C3%B3d&z=15&output=embed",
  clubRules: "https://cdn.shopify.com/s/files/1/0990/4767/0099/files/OTV_Klubszabalyzat.pdf?v=1784720357",
  /** from the W15 tournament page */
  gettingThere: "Kb. 25 km Budapest belvárosától és 30 km a Liszt Ferenc repülőtértől. Ingyenes parkolás a helyszínen.",
};

export const HOURS = [
  { days: "Hétfő – péntek", time: "7:00 – 21:00" },
  { days: "Szombat", time: "8:00 – 20:00" },
  { days: "Vasárnap", time: "8:00 – 18:00" },
];

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "palyak", label: "Pályák" },
  { id: "foglalas", label: "Foglalás" },
  { id: "oktatas", label: "Oktatás" },
  { id: "versenyek", label: "Versenyek" },
  { id: "klubhaz", label: "Klubház" },
  { id: "jelentkezes", label: "Jelentkezés" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export const FACTS = [
  { num: "6", label: "salakpálya" },
  { num: "30", label: "hét fedett tenisz télen" },
  { num: "4", label: "nemzetközi torna 2026-ban" },
  { num: "7", label: "nap a héten nyitva" },
];

export const SEASON = {
  name: "Téli szezon 2026/27",
  dates: "2026. szeptember 28. – 2027. április 25.",
  weeks: 30,
  courts: "6 fedett pálya",
  summer: "Nyáron szabadtéri salakpályák: 2026-ban itt zajlott az ITF W15 és a UTR Pro Tennis Tour is.",
  winter: "Télen mind a 6 pálya fedett: a szeptember végétől április végéig tartó szezon 30 hét fedett tenisz.",
};

/** Single bookings, per court per hour, winter 2026/27. */
export const PRICES = [
  { band: "07:00 – 11:00", price: "9 000 Ft", pass: "85 500 Ft", perPass: "8 550 Ft" },
  { band: "11:00 – 15:00", price: "8 000 Ft", pass: "76 000 Ft", perPass: "7 600 Ft", best: true },
  { band: "15:00 – 21:00", price: "10 000 Ft", pass: "95 000 Ft", perPass: "9 500 Ft" },
];
export const PRICE_NOTES = {
  single: "Alkalmankénti foglalás, pálya / óra.",
  pass: "10 alkalmas bérlet: foglald le előre a 10 alkalmat a neked megfelelő sávban, és fizess kedvezményes csomagárat. A téli szezonban használható fel.",
  fine: "Az árváltozás jogát fenntartjuk.",
};

export const APP_STEPS = [
  { title: "Lépj be az appba", text: "Belépés e-mail-címmel és jelszóval." },
  { title: "Válassz időpontot", text: "Látod, melyik sávban hány pálya foglalható." },
  { title: "Fizess online", text: "Apple Pay, Google Pay vagy bankkártya." },
];
export const APP_NOTE = "Ingyenesen letölthető, klubtagság nélkül is használható.";

export const MEMBERSHIP = {
  price: "20 000 Ft",
  per: "/ fő / év",
  status: "A 2026/27-es jelentkezés lezárult (szeptember 28.). A következő időszak 2027 szeptemberében nyílik, a 2027/28-as szezonra.",
  perks: [
    { title: "−10% egész szezonban", text: "Minden pályafoglalás árából és az OTV Shopban vásárolt termékekből." },
    { title: "Díjtalan nyári pályahasználat", text: "Téli szezonbérlettel rendelkező klubtagként nyáron díjtalanul játszhatsz egy másik klubtaggal." },
    { title: "Hűtött, szűrt víz", text: "Korlátlanul a klubház szűrtvíz-rendszeréből, saját OTV kulaccsal." },
    { title: "Klubélet", text: "Klubversenyek, közösségi programok és különleges események egész évben." },
  ],
  notifyHref: "mailto:info@o10v.hu?subject=OTV%20Klubtags%C3%A1g%20%E2%80%93%20%C3%89rtes%C3%ADt%C3%A9st%20k%C3%A9rek",
};

export const FORMS = {
  ovis: "https://docs.google.com/forms/d/e/1FAIpQLScF74F-GH2wRLYwRl8-it0OnL8e9ed9jf43I2M2eDi_pT7oPA/viewform",
  gyerek: "https://docs.google.com/forms/d/e/1FAIpQLSeLpBRMFZzs4V5cNwGngDlJwwBxUlWGaNLfXfQKSyZ2NDQRvA/viewform",
};

export type Program = {
  id: string;
  name: string;
  age: string;
  price: string;
  per: string;
  lead: string;
  points: string[];
  when?: string;
};
export const PROGRAMS: Program[] = [
  {
    id: "ovis",
    name: "Ovi-tenisz",
    age: "4–6 éveseknek",
    price: "18 000 Ft",
    per: "/ hó · heti 1 óra",
    lead: "Kis pályán, puha piros labdával, kiscsoportban: mozgás, nevetés és sikerélmény már az első órán.",
    points: ["Pálya, edző, ütő és labda benne van", "Kimaradt alkalom pótolható", "Elég kényelmes ruha, sportcipő és egy kulacs"],
    when: "Csütörtök 16:00–17:00 · Vasárnap 9:00–10:00",
  },
  {
    id: "gyerek",
    name: "Gyerektenisz",
    age: "6–18 éveseknek",
    price: "18 000 Ft",
    per: "/ hó · heti 1 alkalom",
    lead: "Családias klubtenisz, lassabb labdákkal és kiscsoportban, hogy a gyerek már az első edzésen játsszon, és szívesen jöjjön vissza.",
    points: ["Az első edzés ingyenes, kötelezettség nélkül", "ITF Play & Stay: piros, narancs, zöld labda", "Havonta meccsnap vasárnap, házi kupák"],
  },
  {
    id: "felnott",
    name: "Felnőtt edzés",
    age: "Bármilyen szinten",
    price: "16 000 Ft",
    per: "/ óra · edzés + pálya",
    lead: "Egyéni edzés profi edzővel, személyre szabott órákon. Télen a fedett pályákon.",
    points: ["Az óradíj a pályabérletet is tartalmazza", "Időpont telefonos egyeztetéssel"],
  },
];

/** Play & Stay steps, as the club's kids page explains them (speeds relative to the yellow ball, ITF). */
export const PLAY_STAY = [
  { ball: "Piros labda", court: "kb. 11–13 m-es pálya", speed: "75%-kal lassabb", text: "Itt indul mindenki: az első ütések, labdamenetek, sikerek." },
  { ball: "Narancs labda", court: "kb. 18 m-es pálya", speed: "50%-kal lassabb", text: "Hosszabb labdamenetek, egyre több ötlet a játékban." },
  { ball: "Zöld labda", court: "teljes pálya (23,77 m)", speed: "25%-kal lassabb", text: "Innen már csak egy lépés a sárga labda." },
];

/** Kids' weekly groups (Saturday: no training; match day once a month on Sunday). */
export const TIMETABLE = {
  days: ["H", "K", "Sze", "Cs", "P", "Szo", "V"],
  rows: [
    { time: "15:00", cells: ["Piros", "Piros", "Piros", "", "", "", "Meccsnap*"] },
    { time: "16:00", cells: ["U14", "U12", "U14", "U12", "U14", "", ""] },
    { time: "17:00", cells: ["U16", "", "U16", "", "U16", "", ""] },
    { time: "18:00", cells: ["", "", "", "", "U12", "", ""] },
  ],
  note: "Szombaton nincs edzés · *Meccsnap: havonta egyszer, vasárnap. Mindenki a Piros csoportban kezd, a továbblépésről az edző javaslatára döntünk.",
};

export const CAMP = {
  title: "Nyári tenisztábor",
  lead: "8–16 éveseknek, egész nyáron: napi két teniszedzés, játékok és kreatív feladatok, pénteken pizza workshop és mini bajnokság.",
  facts: ["5+ tábori hét", "8–16 év", "8:00–16:30", "Napi 2 edzés"],
  prices: [
    { label: "Normál ár", price: "55 000 Ft / hét" },
    { label: "MOTV-sportolóknak", price: "50 000 Ft / hét" },
    { label: "Testvérkedvezmény", price: "50 000 Ft / hét" },
  ],
  note: "A 2026-os nyár díjai; a kedvezmények nem vonhatók össze.",
};

export type Tournament = { tour: string; name: string; when: string; facts: string[]; text: string; href: string };
export const TOURNAMENTS: Tournament[] = [
  {
    tour: "Tennis Europe Junior Tour · U14",
    name: "Open Tennis Valley Cup",
    when: "2026. május 10–17.",
    facts: ["16 nemzet", "6 pálya", "8 versenynap"],
    text: "Egyesben Zoltan Rekedt-Nagy és Victoire Koko nyert; a fiú párost Levente Czobel és Zoltan Rekedt-Nagy vitte el.",
    href: "https://te.tournamentsoftware.com/tournament/11031FBE-A595-4818-B117-7F2EB6F49C10",
  },
  {
    tour: "ITF Women's World Tennis Tour · W15",
    name: "ITF W15 Mogyoród",
    when: "2026. június 29. – július 5.",
    facts: ["$15 000 pénzdíj", "32-es főtábla", "Szabadtéri salak"],
    text: "Női profi torna 64 fős selejtezővel, a nyári szabadtéri pályákon.",
    href: "https://www.itftennis.com/en/tournament/w15-mogyorod/hun/2026/w-itf-hun-2026-002/",
  },
  {
    tour: "UTR Pro Tennis Tour",
    name: "UTR PTT Budapest",
    when: "2026. szeptember 14–20.",
    facts: ["Férfi és női torna", "$20 000 tornánként", "40 játékos"],
    text: "Egy hét profi tenisz: csoportkör, majd helyosztó rájátszás. A meccseket a UTRProTennis.TV élőben közvetítette.",
    href: "https://app.utrsports.net/events/368537",
  },
  {
    tour: "ITF World Tennis Tour Juniors · J60",
    name: "Open Tennis Valley Open",
    when: "2026. október 13–18.",
    facts: ["48 fiú és 48 lány", "13 nemzet", "Fedett salak"],
    text: "Európa ígéretes 18 év alatti játékosai ITF junior világranglistapontokért, fedett salakpályán.",
    href: "https://www.itftennis.com/en/tournament/j60-mogyorod/hun/2026/j-j60-hun-2026-002/draws-and-results/",
  },
];

/** ITF J60, October 2026: the most recent champions (source: the club's tournament page, from the ITF draw). */
export const CHAMPIONS = [
  { event: "Fiú egyes", names: "Miko Koeppen", nat: "GER" },
  { event: "Lány egyes", names: "Aurelia von Brueck", nat: "GER" },
  { event: "Fiú páros", names: "Miko Koeppen / Vincent Selmeczi", nat: "GER / HUN" },
  { event: "Lány páros", names: "Natalie Irahola / Nela Padrnosova", nat: "CZE" },
];
/** Tennis Europe U14, May 2026 (source: the club's tournament page). Nationality only where it gives one. */
export const CHAMPIONS_U14 = [
  { event: "Fiú egyes", names: "Zoltan Rekedt-Nagy", nat: "" },
  { event: "Lány egyes", names: "Victoire Koko", nat: "" },
  { event: "Fiú páros", names: "Levente Czobel / Zoltan Rekedt-Nagy", nat: "HUN" },
  { event: "Lány páros", names: "Nina Dantan / Chloe Myers", nat: "FRA / AUS" },
];
export const TOURNAMENT_DIRECTOR = "Hoffmann Károly";

export type Service = { id: string; name: string; who: string; text: string; prices: { label: string; price: string }[]; contact: { label: string; href: string }; note: string };
export const SERVICES: Service[] = [
  {
    id: "gyogytorna",
    name: "Gyógytorna",
    who: "HV Physio · Hoffmann Viktória gyógytornász-fizioterapeuta",
    text: "Nyak- és derékfájás, ízületi panaszok, sportsérülések rehabilitációja, csontritkulás és esésmegelőzés, szülés utáni felépülés. A klubház alsó szintjén, 2021 óta Mogyoródon.",
    prices: [
      { label: "Gyógytorna · 45 perc", price: "12 500 Ft" },
      { label: "Állapotfelmérés · 55 perc", price: "15 000 Ft" },
      { label: "FitMummy® posztnatális tréning · 45 perc", price: "12 500 Ft" },
      { label: "Kinesiotape · 15 perc", price: "4 000 Ft" },
      { label: "Csoportos gerinctorna · 55 perc", price: "3 500 Ft" },
    ],
    contact: { label: "+36 20 366 2792", href: "tel:+36203662792" },
    note: "Önálló vállalkozóként, a klubházban bérelt helyiségben.",
  },
  {
    id: "masszazs",
    name: "Masszázs",
    who: "Pihenő · Kővári Gergő masszőr",
    text: "Sport-, relaxációs és regenerációs kezelések a klubházban: meccs előtt bemelegítés, utána levezetés.",
    prices: [
      { label: "Teljes test · 60 perc", price: "12 000 Ft" },
      { label: "Felső- vagy alsótest · 30 perc", price: "7 000 Ft" },
      { label: "Felső- vagy alsótest · 45 perc", price: "10 500 Ft" },
      { label: "Bemelegítés / levezetés · 30 perc", price: "8 000 Ft" },
      { label: "Tapelés · 10 perc", price: "4 000 Ft" },
    ],
    contact: { label: "Online időpontfoglalás", href: "https://piheno.salonic.hu" },
    note: "Önálló vállalkozóként, a klubházban bérelt helyiségben.",
  },
];

export const ROOMS = {
  lead: "Masszázs, jóga, Pilates, gyógytorna, coaching vagy workshop: csendes, világos terek vállalkozóknak, szakembereknek és privát eseményekhez.",
  items: [
    { name: "Jóga- és mozgásstúdió", text: "Természetes fény, tükrök, Bluetooth-hangrendszer, öltöző. 12–16 szőnyeg kényelmesen, legfeljebb 18." },
    { name: "Masszázsterem", text: "Állítható masszázságy, mosdó, fényerő-szabályzás, sötétítő függöny." },
    { name: "Piopio Deli ’n Café", text: "Bent 28 ülőhely, a teraszon további 12 (időjárásfüggő): kb. 40 fős eseményekre." },
  ],
  contact: { label: "+36 30 999 1197 (telefon / Viber)", href: "tel:+36309991197" },
};

export const PARTNERS = [
  { name: "Magyar Tenisz Szövetség", img: "/img/partnerek/mtsz.png", w: 152, h: 120 },
  { name: "HM Sportért Felelős Államtitkárság", img: "/img/partnerek/hm-sportert.png", w: 360, h: 102 },
  { name: "Nemzeti Sportfejlesztési és Módszertani Intézet", img: "/img/partnerek/nsfmi.png", w: 332, h: 117 },
  { name: "Porsche Buda", img: "/img/partnerek/porsche-buda.png", w: 316, h: 120 },
  { name: "Volkswagen Haszonjárművek", img: "/img/partnerek/vw-haszonjarmuvek.png", w: 170, h: 120 },
  { name: "Multivan", img: "/img/partnerek/multivan.png", w: 327, h: 62 },
  { name: "Tensi Holiday", img: "/img/partnerek/tensi.png", w: 244, h: 120 },
  { name: "Joma", img: "/img/partnerek/joma.png", w: 293, h: 70 },
  { name: "Bitburger", img: "/img/partnerek/bitburger.png", w: 189, h: 120 },
  { name: "Manna Ice", img: "/img/partnerek/manna-ice.png", w: 140, h: 120 },
];
