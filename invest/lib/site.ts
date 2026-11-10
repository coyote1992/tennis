// Everything both versions show. Sources: investvendeghaz.hu (Kezdőlap, Invest Sport, Árlisták with the
// house rules, Házirend, Invest Vendégház, Szobaáraink, Akciós csomagajánlatok, Pályafoglalás,
// Kapcsolat, Galéria) and the club's reply in 100web (3 November 2026: court booking works by phone only).

/** 6800 -> "6 800" with a no-break space, the same on server and client. */
export function fmt(n: number) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const CLUB = {
  name: "Invest Sportcentrum és Vendégház",
  short: "Invest",
  tagline: "Az ütős sportok bázisa",
  address: "3300 Eger, Dr. Frank Mária u. 1.",
  phone: "+36 30 912 2116",
  phoneHref: "tel:+36309122116",
  email: "info@investvendeghaz.hu",
  emailHref: "mailto:info@investvendeghaz.hu",
  company: "Invest Sport Kft.",
  roomBooking: "https://investvendeghaz.hu/szobafoglalas/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Invest%20Sportcentrum%2C%203300%20Eger%2C%20Dr.%20Frank%20M%C3%A1ria%20u.%201",
  mapsEmbed: "https://maps.google.com/maps?q=3300%20Eger%2C%20Dr.%20Frank%20M%C3%A1ria%20utca%201&z=15&output=embed",
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "tenisz", label: "Tenisz" },
  { id: "fallabda", label: "Fallabda és szauna" },
  { id: "vendeghaz", label: "Vendégház" },
  { id: "csomagok", label: "Csomagok" },
  { id: "hazirend", label: "Házirend" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export const INTRO = {
  text: "Az Invest Sportcentrum és Vendégház Egerben, a volt kemping területén, zöldövezeti környezetben van: 7 szabadtéri salakos teniszpálya, fedett teniszcsarnok 2 pályával, 4 fallabdapálya, szauna, büfé és egy 6 szobás vendégház.",
  facts: [
    { value: "7", label: "salakos teniszpálya" },
    { value: "2", label: "fedett pálya a csarnokban" },
    { value: "4", label: "fallabdapálya" },
    { value: "6", label: "szoba a vendégházban" },
  ],
  reception: "A büfé egyben a vendégház recepciója is: minden nap 8:00–20:00.",
  services: ["Fedett teniszcsarnok", "Kültéri salakpályák", "4 fallabdapálya", "Szauna", "Nyitott teraszos büfé", "Vendégház", "Ingyenes parkolás"],
};

/** Court booking: the club's reply in 100web ("only by phone"); the house rules also allow booking in person. */
export const BOOKING = {
  how: "Pályát telefonon foglalhatsz.",
  note: "Fix pályát csak bérletes vendégeknek tudunk biztosítani.",
};

/** Árlisták page: the indoor hall prices. Outdoor clay court prices aren't published. */
export const HALL = {
  title: "Fedett teniszcsarnok",
  surface: "2 gumiborítású fedett pálya",
  listDate: "A legutóbb közzétett árlista: 2025. október 13-tól",
  winter: [
    { days: "Hétfő–péntek", time: "8:00–12:00", price: 6800, pass: 6500 },
    { days: "Hétfő–péntek", time: "12:00–16:00", price: 7300, pass: 7000 },
    { days: "Hétfő–péntek", time: "16:00–20:00", price: 7800, pass: 7500 },
    { days: "Szombat–vasárnap", time: "8:00–18:00", price: 7300, pass: 7000 },
  ],
  summer: { days: "Hétfő–vasárnap", time: "8:00–20:00", price: 5500, pass: "45 000 Ft / 10 óra" },
  passes: {
    note: "A 24 alkalmas téli bérletnél egy alkalom grátisz, és az óradíjból 300 Ft/óra kedvezmény jár. A téli bérletek 2026. május 31-ig voltak érvényesek.",
    rows: [
      { slot: "Hétfő–péntek 8:00–12:00", h1: 156000, h15: 234000, h2: 312000 },
      { slot: "Hétfő–péntek 12:00–16:00", h1: 168000, h15: 252000, h2: 336000 },
      { slot: "Hétfő–péntek 16:00–20:00", h1: 180000, h15: 270000, h2: 360000 },
      { slot: "Szombat–vasárnap 8:00–18:00", h1: 168000, h15: 252000, h2: 336000 },
    ],
  },
  extras: [
    { label: "Másik pálya világítása", price: "1 500 Ft/óra" },
    { label: "Fűtés 17 fok felett", price: "1 500 Ft/óra" },
  ],
  outdoor: "7 szabadtéri salakos pálya; a díjukról telefonon adunk tájékoztatást.",
};

export const SQUASH = {
  intro: "Ütőt és labdát a helyszínen is bérelhetsz, a szauna ugyanitt vár.",
  prices: [
    { days: "Hétfő–péntek", time: "8:00–17:00", price: 3200 },
    { days: "Hétfő–péntek", time: "17:00–20:00", price: 3900 },
    { days: "Szombat–vasárnap", time: "8:00–18:00", price: 3200 },
  ],
  passes: ["10 alkalom: 25 000 Ft, 1 hónapig", "10 alkalom: 30 000 Ft, 3 hónapig"],
  passTime: "Hétfő–vasárnap 8:00–20:00",
  sauna: { price: "600 Ft/fő/alkalom", min: "minimum 3 000 Ft" },
  rental: [
    { label: "Tenisz- vagy fallabdaütő", price: "1 500 Ft/db" },
    { label: "Tenisz- vagy fallabdalabda", price: "700 Ft/db" },
  ],
};

export const GUESTHOUSE = {
  intro: "Az Invest Vendégház 6 kétágyas, fürdőszobás szobával egész évben várja a vendégeket, ugyanott, ahol a pályák vannak.",
  room: "Minden szobában 2 összetolt (kérésre széthúzható) ágy, 1 vagy 2 pótágy, televízió, hűtő és internet; saját zuhanyzós, WC-s fürdőszoba.",
  lounge: "A 6 szobának közös társalgója van, ahol főzni és melegíteni is lehet.",
  prices: {
    from: "Szobaárak 2025. január 1-től",
    rows: [
      { who: "1 fő", night: 16000, two: 28000 },
      { who: "2 fő", night: 24000, two: 40000 },
      { who: "3 fő", night: 36000, two: 60000 },
    ],
    tax: "Az árak nem tartalmazzák az idegenforgalmi adót.",
  },
  kids: "4 éves korig ingyenes a szállás; 4 és 18 év között külön ágyon térítés ellenében.",
  perks: ["Ingyenes parkolás", "Ingyenes Wi-Fi", "SZÉP-kártya: OTP, MKB, K&H", "Beszélt nyelvek: magyar, orosz, angol"],
  nearby: [
    { place: "Dobó tér", km: "2 km" },
    { place: "Egri Road Beatles Múzeum", km: "2,2 km" },
    { place: "Érseki Pincerendszer", km: "2,2 km" },
    { place: "Varázstorony", km: "2,4 km" },
  ],
};

/** Akciós csomagajánlatok bookable until 20 December 2026 (the "3=4" offer ended on 11 June 2026, so it's left out). */
export const PACKAGES = {
  valid: "Foglalható 2026. december 20-ig; a kiemelt időszakok kivételt képeznek.",
  tax: "Az árak nem tartalmazzák az idegenforgalmi adót (750 Ft/fő/éj).",
  list: [
    { title: "Egri Románc", price: "45 000 Ft", unit: "2 fő / 2 éj", items: ["3 nap / 2 éjszaka szállás 2 főre", "1 üveg egri bor bekészítve", "Jacuzzi-használat", "Saját őrzött parkoló", "ÁFA"] },
    { title: "Kedvezményes hétköznapok", price: "80 000 Ft", unit: "2 fő / 4 éj", items: ["5 nap / 4 éjszaka szállás 2 főre", "Csak hétfői érkezéssel", "Saját őrzött parkoló", "ÁFA"] },
    { title: "Barátokkal együtt", price: "144 000 Ft", unit: "a vendégház / 1 éj / 12 fő", alt: "vagy 240 000 Ft / 2 éj", items: ["A 6 szobás vendégház kizárólag nektek, saját társalgóval", "Baráti társaságoknak, családi összejövetelekre, legény- és lánybúcsúkra", "Saját őrzött parkoló", "ÁFA"] },
  ],
};

export const RULES = [
  { title: "Játékidő", text: "A játék egész órakor kezdődik és az óra 58. percéig tart; a maradék 2 percben kérjük, hagyjátok el a pályát." },
  { title: "Érkezés", text: "A lefoglalt időpont előtt a pályán tartózkodni nem lehet; legkorábban 5 perccel a kezdés előtt lehet bemenni." },
  { title: "Cipő", text: "Csak teniszcipőben; futó- vagy stoplis cipővel tilos a pályára lépni. A szabályszegő a pályadíjon felül 4 000 Ft karbantartási díjat fizet." },
  { title: "Csarnok", text: "A hőmérsékletet 180 cm magasan mérjük; télen csak alaphőmérsékletet tudunk biztosítani, ezért öltözz rétegesen." },
  { title: "Lemondás", text: "Legalább 24 órával előre díjmentesen lemondható, átruházható vagy módosítható. 24 órán belül a bérletesek bérletéből levonjuk a díjat, a többiek a díj megtérítéséig nem játszhatnak." },
  { title: "Bérlet", text: "A bérletes árak a teljes szezon előre megvásárlásakor érvényesek; a bérlet árát legkésőbb a 2. alkalommal kell rendezni. Az időben lemondott bérletes órák egyeztetett időpontban pótolhatók." },
  { title: "Értékek", text: "Az öltözőben hagyott értékekért nem vállalunk felelősséget; értékeidet a recepción helyezd el." },
];

export const FORM = {
  topics: ["Szállás", "Csomagajánlat", "Tenisz", "Fallabda", "Egyéb"],
};
