// Everything both versions show. Sources: szoboszlotenisz.hu (Főoldal, Árak for 2 November 2026 –
// 31 March 2027, Pályarend, Edzőink, Rólunk, Kapcsolat, Versenyek with the Piramis 2026 rules,
// Csapataink, Hírességeink, Shop, and the news posts 2024–2026) and the club's email reply in 100web
// (3 November 2026: the Piramis gives match play to everyone, mainly to local players, once also to a
// player from Debrecen; this year was the 5th edition; usually 25–30 entrants, fewer this year).

export const CLUB = {
  name: "Szoboszlótenisz",
  venue: "Hungarospa Sportcentrum",
  town: "Hajdúszoboszló",
  address: "4200 Hajdúszoboszló, József Attila u. 25.",
  entrance: "Bejárat a Thermál Hotel mellett",
  phone: "+36 20 977 5773",
  phoneHref: "tel:+36209775773",
  email: "szoboszlotenisz@gmail.com",
  emailHref: "mailto:szoboszlotenisz@gmail.com",
  booking: "https://palyarafel.hu/hu/hungarospa-sportcentrum/",
  facebook: "https://www.facebook.com/groups/179312269983511",
  shop: "https://jsport.hu/",
  operator: "MAZSI Bt.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hungarospa%20Sportcentrum%2C%20Hajd%C3%BAszoboszl%C3%B3%2C%20J%C3%B3zsef%20Attila%20u.%2025",
  mapsEmbed: "https://maps.google.com/maps?q=Hajd%C3%BAszoboszl%C3%B3%2C%20J%C3%B3zsef%20Attila%20u.%2025&z=16&output=embed",
};

export const HOURS = [
  { days: "Hétfőtől péntekig", time: "7:00–22:00" },
  { days: "Szombat, vasárnap", time: "7:00–12:00 és 15:00–20:00" },
];

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "palyak", label: "Pályák" },
  { id: "arak", label: "Árak" },
  { id: "edzes", label: "Edzés" },
  { id: "piramis", label: "Piramis" },
  { id: "klubelet", label: "Klubélet" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export const FACILITIES = [
  { title: "4 salakos teniszpálya", text: "Kettő közülük világítással. Október végén téliesítjük őket." },
  { title: "Fedett sportsátor", text: "Műfüves pálya teniszre és focira, télen-nyáron. Kézilabda, asztalitenisz és tollaslabda is." },
  { title: "Öltöző és társalgó", text: "Öltöző a játékosoknak; a sportcentrumban futópad, spinning kerékpár és súlyzók is vannak." },
  { title: "Shop és húrozás", text: "Teniszruha, cipő, ütő, húr, grip és labda a pálya melletti boltban; tenisz- és squashütő-húrozás." },
];

export const SEASON_NOW =
  "Október utolsó napján téliesítettük a salakpályákat: novembertől a sátorban játszunk.";

export const BOOKING_STEPS = [
  { title: "Válassz szabad időpontot", text: "A pályarafel.hu foglalási oldalán, regisztráció után." },
  { title: "Fizetésnél a helyszínt válaszd", text: "A pályadíjat a sportcentrumban fizeted." },
  { title: "Foglalj!", text: "Telefonon és személyesen is foglalhatsz: +36 20 977 5773." },
];

export const COURT_RULES = [
  "Alkalmi foglalást legfeljebb 24 óráig tartunk fenn; a pályadíj kifizetésével rögzül.",
  "Rendszeres salakpályás foglalást legalább 24 órával előbb lehet lemondani.",
  "A sátorba egész szezonra foglalt időpontot legalább 7 nappal előbb lehet lemondani.",
  "Egyéni edzést legalább 48 órával előbb lehet lemondani.",
  "A lefoglalt pályát a kezdés után 5 percig tartjuk fenn.",
  "Salakon a játékidő a foglalt idő mínusz 10 perc, ebbe a pálya lehúzása is beletartozik; a sátorban mínusz 5 perc.",
  "Ha az eső fél órán belül félbeszakítja a játékot, az nem számít pályahasználatnak.",
  "Salakon csak teniszcipőben, a sátorban tenisz- vagy teremcipőben lehet játszani (stoplis cipő tilos).",
];

/** Aktuális árak, 2026. november 2. – 2027. március 31. (a sátorban). */
export const PRICES = {
  period: "2026. november 2. – 2027. március 31.",
  court: [
    { label: "Műfüves teniszpálya", price: "7 000 Ft / óra" },
    { label: "Műfüves focipálya", price: "10 000 Ft / óra" },
    { label: "Teniszütő-bérlés", price: "500 Ft / db" },
  ],
  coaching: [
    { label: "Magán teniszedzés (edzői díj + pályadíj)", price: "12 000 Ft / óra" },
    { label: "Magán teniszedzés szezonkártyával*", price: "10 500 Ft / óra" },
    { label: "Csoportos teniszedzés, 3 főtől (edzői díj + pályadíj)", price: "13 000 Ft / óra" },
    { label: "Edzői díj, magán (max. 2 fő)", price: "5 000 Ft / óra" },
    { label: "Edzői díj, csoportos (3 főtől)", price: "6 000 Ft / óra" },
  ],
  coachingNote: "* edzői díj + 4 egység a 80 egységes kártyán",
  cards: [
    { units: 20, price: "33 000 Ft", hour: "6 600 Ft", half: "3 300 Ft", single: 1650 },
    { units: 40, price: "61 000 Ft", hour: "6 100 Ft", half: "3 050 Ft", single: 1525 },
    { units: 80, price: "110 000 Ft", hour: "5 500 Ft", half: "2 750 Ft", single: 1375 },
  ],
  cardRules: [
    "1 óra játék a pályán 4 egység.",
    "Egy játékos 1 óra egyéni játék után 2 egységet, 1 óra páros után 1 egységet használ el.",
    "Másfél óra páros játék egy játékosnak 2 egység.",
    "Magánedzésen a játékos óránként 4 egységet használ el.",
  ],
  cardsValid: "A szezonkártyák 2027. március 31-ig érvényesek.",
};

export const COACHES = [
  {
    name: "Erdei László",
    img: "/img/erdei-laszlo.jpg",
    facts: ["Teniszedzői képesítés: 2008", "180+ mérkőzés a hajdúszoboszlói csapatban", "A Piramis verseny versenybírója"],
    text: "Gyerekként végigjárta a korosztályos ranglétrát, később az országos amatőr versenyrendszerben játszott, megyei és OB-s csapatmeccseken, Fehérgyarmaton és a német SV Buchonia Flieden csapatában is.",
    partner:
      "Ha nincs teniszpartnered, de szívesen játszanál vagy edzenél, akár helyiként, akár a városban töltött üdülésed alatt, hívj vagy írj.",
    phone: "+36 20 977 5773",
    phoneHref: "tel:+36209775773",
    email: "lacoerdei@gmail.com",
  },
  {
    name: "Csapó Andrea",
    img: "/img/csapo-andrea.jpg",
    facts: ["Több mint 20 éve teniszezik", "Első osztályú női csapatbajnokság", "Gyerekek, felnőtt kezdők, hölgyek"],
    text: "Gyerekeknek, felnőtt kezdőknek és hölgyeknek tart edzést, barátságos légkörben, mindenkinek a saját tempójában. Koronglövészetben országos bajnok és Európa-bajnoki csapatezüstérmes.",
    partner: "",
    phone: "+36 70 415 4210",
    phoneHref: "tel:+36704154210",
    email: "csap.andika@gmail.com",
  },
];

export const KIDS =
  "Csoportos gyerekedzés folyamatosan indul, legalább 4 jelentkező esetén. Állj össze a barátaiddal, osztálytársaiddal, és kérjetek tőlünk időpontot!";

export const CAMP =
  "Nyaranta tenisztábort is tartunk: 2026-ban augusztus első hetében, sok teniszezéssel, fürdőzéssel, kerékpártúrával és szabadidőparkkal.";

export const PIRAMIS = {
  intro:
    "A Piramis mindenkinek játéklehetőséget kínál: elsősorban a helyi játékosoknak ad rendszeres meccsjátékot, de volt már debreceni nevezőnk is.",
  stats: [
    { value: "5", label: "kiírás, 2026-tal együtt" },
    { value: "25–30", label: "versenyző egy átlagos szezonban" },
    { value: "110", label: "mérkőzés 2024-ben" },
    { value: "2126", label: "game 2024-ben" },
  ],
  how: "Mindenki egy piramison kezd, a nevezés sorrendjében. A játékosok kihívhatják egymást: ha a hátrébb álló nyer, helyet cserélnek, ha a magasabban rangsorolt, a sorrend marad.",
  rules: [
    "Azonos sorban vagy legfeljebb egy szinttel feljebb lévő játékost lehet kihívni.",
    "Ugyanazt a játékost két héten belül nem lehet újra kihívni.",
    "A kihívást 24 órán belül el kell fogadni, különben automatikus helycsere jön.",
    "Elfogadás után legfeljebb 7 nap van a mérkőzésre.",
    "Két nyert szettig, 6:6-nál tie-break. Az eredményt aznap 22 óráig kell rögzíteni.",
    "A labdát a kihívó hozza, a pályát a kihívott foglalja, online vagy telefonon.",
  ],
  last: {
    year: "2026",
    schedule: "Előnevezés május 17-ig, kezdés május 18-án, nevezés június 7-ig, verseny szeptember 30-ig, döntők október 10-én.",
    costs: "Nevezési díj 4 000 Ft/fő, a pályadíjat a felek 50–50%-ban fizetik. Díjazás: kupa és shop-utalvány. Versenybíró: Erdei László.",
  },
  final2025: ["Walter Péter", "Cseke Csaba", "Gyöngyösi Miklós", "Kiss Benedek"],
  mini2025: ["Fábián Béla", "Gém Péter", "Bogádi Krisztián", "Czeglédi László"],
};

export const EVENTS = [
  { title: "Szoboszló Open", text: "Baráti, meghívásos teniszverseny két napon át, a Tarr házaspár szervezésében. 2026-ban augusztus 29–30-án már a 23. volt.", img: "/img/szoboszlo-open-2026.jpg", w: 924, h: 693, alt: "A 23. Szoboszló Open résztvevői a salakpályán" },
  { title: "ATLAS kupa", text: "Pünkösdi párosverseny. 2026-ban a Bernáth László, Juhász Attila páros nyert.", img: "/img/atlas-kupa.jpg", w: 1500, h: 1125, alt: "Az ATLAS kupa győztes párosa a serlegekkel" },
  { title: "MAZSI kupa", text: "A 100 kg feletti teniszezők hagyományos párosversenye. 2025 októberében már a 41. volt.", img: "/img/mazsi-kupa.jpg", w: 736, h: 1000, alt: "A MAZSI kupa résztvevői a díjakkal" },
];

export const TEAMS = {
  text: "Két csapattal játszunk a megyei csapatbajnokságokban; az első csapat, az ATLAS a megye I. osztályban.",
};

export const FAMOUS = [
  { name: "Kiss Zoltán", text: "Ötszörös magyar bajnok, válogatott labdarúgó; 2014 óta teniszezik nálunk rendszeresen." },
  { name: "Tumbász József", text: "Profi kick-box világ- és Európa-bajnok; 2014-ben kezdett teniszezni." },
  { name: "Madai Zoltán (1940–2007)", text: "A háború utáni hajdúsági tenisz egyik legnagyobb alakja, a klub szeretett vendége." },
  { name: "Mayer László „Pofi” (1946–2022)", text: "Versenyző és edző, Debrecenben és Hajdúszoboszlón is játszott és edzősködött." },
];

export const HISTORY = [
  { year: "1980", text: "Megépülnek az első salakos teniszpályák a városban; a városi csapat később az OB II-ig jut." },
  { year: "2005", text: "A Hungarospa Hajdúszoboszlói Gyógyfürdő Zrt. jóvoltából elkészül a Hungarospa Sportcentrum, négy salakpályával." },
  { year: "2008", text: "Átadják a fedett, műfüves sportsátrat, társalgót és öltözőt: azóta télen-nyáron lehet teniszezni." },
];

export const SHOP = {
  text: "Joma teniszcipők és ruhák, Yonex ütők és kiegészítők, MSV és Völkl húrok, gripek és labdák a pálya melletti boltban. Tenisz- és squashütőket is húrozunk, csapatoknak egységes ruházatot szerzünk be kedvezménnyel.",
};

export const FORM = {
  topics: ["Pályafoglalás", "Szezonkártya", "Edzés", "Gyerekcsoport", "Piramis", "Egyéb"],
};
