// Everything both versions show. Sources: wellnesskastely.hu (Tenisz with the court's house rules
// graphic, Kastély wellness, Kültéri medence, Rönkszaunák, Sószoba, Vasárnapi wellness a Kastélyban,
// Négycsillagos páros wellness nap, A Batthyány Kastély, A Batthyány Kastély története, Szobák és
// lakosztályok, Gasztronómia, Golf, Fitness terem, Kerékpár bérlés, Kapcsolat, the park map) and the
// hotel's email reply in 100web (3 November 2026, Horváth Fanny, reception: outside guests can book
// just the tennis court after registering in advance, but they often combine it with a wellness day).
// This is a tennis and wellness-day page for the castle hotel, not a full hotel site: rooms and stays
// link to the hotel's own booking.

export const HOTEL = {
  name: "Batthyány Kastélyszálló",
  stars: "****",
  town: "Zalacsány",
  address: "8782 Zalacsány, Csány László u. 24.",
  phone: "+36 83 537 000",
  phoneHref: "tel:+3683537000",
  mobile: "+36 20 472 8312",
  mobileHref: "tel:+36204728312",
  email: "info@wellnesskastely.hu",
  emailHref: "mailto:info@wellnesskastely.hu",
  booking: "https://wellnesskastely.hu/hu/booking/",
  offer: "https://wellnesskastely.hu/ajanlatkeres.html",
  packages: "https://wellnesskastely.hu/hu/packages/",
  facebook: "https://www.facebook.com/Batthyanywellnesskastelyszallo",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=46.810744%2C17.094871",
  mapsEmbed: "https://maps.google.com/maps?q=46.810744,17.094871&z=15&output=embed",
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "tenisz", label: "Tenisz" },
  { id: "wellness", label: "Wellness nap" },
  { id: "park", label: "A park" },
  { id: "kastely", label: "A kastély" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export const TENNIS = {
  intro: "Megújult salakos teniszpálya a kastély 10 hektáros parkjában, a kültéri termálmedence és a szaunák közelében.",
  prices: [
    { who: "Szállóvendégeknek", price: "5 000 Ft", unit: "/ óra" },
    { who: "Külsős vendégeknek", price: "6 000 Ft", unit: "/ óra" },
  ],
  gear: "Ütő és labda a recepción kérhető.",
  booking: "Időpontot a recepción egyeztethetsz, telefonon vagy e-mailben. Külsős vendégként előzetes bejelentkezéssel csak a pályát is igénybe veheted.",
  reply: "A külsős teniszezők gyakran wellness nappal kötik össze a játékot.",
};

export const HOUSE_RULES = [
  "A játékidő 55 perc; a maradék 5 perc a pálya lehúzásáé, erről a játékosok gondoskodnak.",
  "Csak teniszcipőben, stoplis cipővel tilos a salakra lépni.",
  "Fedetlen felsőtesttel tilos a pályán tartózkodni.",
  "A pályán hagyott értéktárgyakért nem vállalunk felelősséget.",
  "A pályára ételt és nem visszazárható italt bevinni tilos.",
  "Az üres flakonokat, zsebkendőket a kukákba kérjük.",
  "A pályát mindenki a saját felelősségére használja; a rongálással okozott kárt meg kell téríteni.",
  "A pálya területén alkohol és dohányzás tilos.",
];

export const WELLNESS_DAYS = [
  {
    id: "vasarnap",
    title: "Vasárnapi wellness nap",
    when: "Csak vasárnap, belépés 9 és 19 óra között",
    prices: [
      { who: "Felnőtt", price: "16 900 Ft" },
      { who: "12 év alatti gyermek", price: "10 410 Ft" },
      { who: "2 éves korig", price: "a kastély vendége" },
    ],
    includes: [
      "A wellness részleg korlátlan használata: beltéri és kültéri termálmedence, pezsgőfürdő, finn szauna, nyakzuhany, víz alatti élményelemek, vízi sakk, sószoba, aroma-só-finn szauna",
      "Májustól a strand, ingyenes napágyhasználattal",
      "Háromfogásos ebéd a kastély éttermében",
      "Részvétel az aktuális animátorprogramokon",
    ],
  },
  {
    id: "paros",
    title: "Négycsillagos páros wellness nap",
    when: "Előzetes bejelentkezéssel",
    prices: [{ who: "2 főre", price: "54 900 Ft" }],
    includes: [
      "60 perces páros aromafürdő koktéllal vagy pezsgővel",
      "A wellness részleg korlátlan használata",
      "Májustól a strand, ingyenes napágyhasználattal",
      "Szárazkefe-, arc-, hát- vagy talpmasszázs, választás szerint",
      "Háromfogásos ebéd a kastély éttermében",
      "Részvétel az aktuális animátorprogramokon",
    ],
  },
];

export const WELLNESS = {
  text: "A kastély épületében beltéri wellness részleg, a parkban kültéri termálmedence, rönkszaunák és masszázspavilon.",
  items: [
    { title: "Kültéri termálmedence", text: "A vizét 42 fokos fúrt termálkút adja; szezonálisan, az időjárástól függően tart nyitva." },
    { title: "Beltéri termálmedence és jacuzzi", text: "Víz alatti élményelemek, nyakzuhany és vízi sakk a kastély épületében." },
    { title: "Rönkszaunák", text: "Finn, só- és aromaszauna a kültéri medence mellett, szeánszokkal és légzőgyakorlatokkal." },
    { title: "Sószoba és masszázs", text: "Sószoba a kastélyban, masszázspavilon a parkban, páros aromafürdő a Kleopátra szalonban." },
  ],
};

/** The park map numbers (from the hotel's own map) used for the tennis-and-wellness route. */
export const PARK_ROUTE = [
  { n: 5, title: "Teniszpálya", text: "A salakpálya a park szélén, a Csány László utca mentén." },
  { n: 3, title: "Kültéri termálmedence", text: "A pálya után egy csobbanás; a vizét 42 fokos termálkút adja." },
  { n: 6, title: "Szaunavilág", text: "Só-, finn és gyógynövényszaunák a medence mellett." },
  { n: 7, title: "Masszázspavilon", text: "Masszázs a parkban, a szaunák mellett." },
  { n: 4, title: "Büfé", text: "Frissítő a medence partján." },
  { n: 1, title: "Batthyány Kastély", text: "Beltéri wellness, étterem, recepció." },
];

export const ACTIVITIES = [
  { title: "Minigolf és footgolf", text: "A parkban, a kúria felőli oldalon." },
  { title: "Strandröplabda, lengőteke", text: "A kastély 10 hektáros parkjában." },
  { title: "Fitnessterem", text: "Kardio- és erőfejlesztő gépek, minden nap 8:00–22:00." },
  { title: "Kerékpárbérlés", text: "900 Ft / 1 óra, 1 500 Ft / 2 óra, 2 500 Ft / nap." },
  { title: "Golf a szomszédban", text: "A 18 lyukú Zala Springs golfpályán a szálloda vendégei kedvezményes áron golfozhatnak." },
  { title: "Animátorprogramok", text: "Nordic walking, aquafitness, szaunaszeánszok; a vendégeknek díjtalanok." },
];

export const CASTLE = {
  intro:
    "A szálloda egy apró település, Zalacsány szélén, csendes, 10 hektáros parkban fekszik. A kastélyban 28 szoba, éttermek és beltéri wellness várja a vendégeket; délutáni sétára a 300 éves őspark csalogat.",
  history: [
    { year: "1490", text: "A késő gótikus stílusban lerakják a kastély alapjait." },
    { year: "1800-as évek", text: "Az épület a Batthyány család tulajdonába kerül, akik barokk stílusban bővítik." },
    { year: "1913", text: "Batthyány Pál, Zala megye főispánja és felesége, Inkei Karolina grófnő mai formájában építteti újjá; az építész Wassermann Samu." },
    { year: "1997–2000", text: "A szocializmus éveiben nevelőotthon volt; a felújítás megmenti a lepusztulástól." },
    { year: "2005", text: "Elkészülnek a mai szobák és a korszerű kényelem." },
  ],
  dining: "Elegáns éttermeiben házias ételek és ételkülönlegességek; nyári estéken grillestek a teraszon, svédasztal és étlap, vegetáriánus, gluténérzékeny és cukorbeteg vendégeknek is.",
  rooms: "28 különböző méretű szoba: standard, superior, családi szobák és lakosztályok.",
};

export const FORM = {
  topics: ["Teniszpálya", "Vasárnapi wellness nap", "Páros wellness nap", "Szállás", "Egyéb"],
};

/** The shared contact form reads CLUB (phone and e-mail); here that is the hotel's reception. */
export const CLUB = HOTEL;
