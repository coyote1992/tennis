// Everything both versions show. Sources: treningcenter.hu (Főoldal with its counters, Rólunk,
// Szolgáltatások: salakos teniszpályák, oktatás, versenyek, klub, rendezvényszervezés, pub, beltéri
// sport, műfüves focipályák; Események, Galéria, Kapcsolat, the two GINOP pages) and Nemes Attila's
// email reply in 100web (adult groups, seasons, group fee, hourly court and coach rates, the two adult
// coaches). The coaches' own mobile numbers from that email are not published here.
// The site's slider images are stock photos, so only the centre's own photos are used.

export const CLUB = {
  name: "Tréning Center",
  full: "Tréning Center Sport- és Szabadidőközpont",
  city: "Békéscsaba",
  address: "Békéscsaba, Víztároló utca 2.",
  bookingPhone: "+36 66 452 392",
  bookingPhoneHref: "tel:+3666452392",
  officePhone: "+36 66 325 294",
  officePhoneHref: "tel:+3666325294",
  contact: { name: "Nemes Attila", phone: "+36 30 943 7373", phoneHref: "tel:+36309437373" },
  email: "treningcenter@t-online.hu",
  emailHref: "mailto:treningcenter@t-online.hu",
  booking: "https://foglalas.treningcenter.hu/",
  facebook: "https://www.facebook.com/treningsportkozpont/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tr%C3%A9ning%20Center%2C%20B%C3%A9k%C3%A9scsaba%2C%20V%C3%ADzt%C3%A1rol%C3%B3%20utca%202",
  mapsEmbed: "https://maps.google.com/maps?q=Tr%C3%A9ning%20Center%2C%20B%C3%A9k%C3%A9scsaba%2C%20V%C3%ADzt%C3%A1rol%C3%B3%20utca%202&z=16&output=embed",
  operator: "SIERRA-TRANSZ Vendéglátó és Szolgáltató Kft.",
  grants: [
    { label: "GINOP-1.2.16", href: "https://treningcenter.hu/palyazat/" },
    { label: "GINOP Plusz 3.2.4-23", href: "https://treningcenter.hu/ginop-plusz-324-23/" },
  ],
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "palyak", label: "Pályák" },
  { id: "foglalas", label: "Foglalás" },
  { id: "oktatas", label: "Oktatás" },
  { id: "klub", label: "Klub" },
  { id: "rendezvenyek", label: "Rendezvények" },
  { id: "jelentkezes", label: "Ajánlatkérés" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

/** The homepage counters, as the centre publishes them. */
export const FACTS = [
  { num: "15 000+", label: "m² sportterület" },
  { num: "23", label: "év tapasztalat" },
  { num: "754", label: "megszervezett rendezvény" },
  { num: "150 839", label: "résztvevő a programjainkon" },
];

export const STORY =
  "A Forgácsoló Vállalat egykori sporttelepe a '90-es évek végén került magánkézbe. A több mint 15 000 m²-es sportlétesítmény a folyamatos felújítások és fejlesztések nyomán mára barátságos környezetben várja a sportolni és kikapcsolódni vágyókat.";

export const MISSION = "Családi és baráti közösségépítés szabadtéri és beltéri programokkal, játékokkal, rendezvényekkel.";

export type Facility = { id: string; name: string; count: string; text: string; points: string[] };
export const FACILITIES: Facility[] = [
  {
    id: "tenisz",
    name: "Salakos teniszpályák",
    count: "3 pálya",
    text: "Kiváló minőségű salak, automata öntözőberendezéssel. Ősszel és télen modern technológiával fedett, fűtött sátor alatt játszhatsz, így egész évben teniszezhetsz.",
    points: ["Automata öntözés", "Fűtött sátor ősszel és télen", "Edzés egyénileg vagy csoportban"],
  },
  {
    id: "foci",
    name: "Műfüves focipályák",
    count: "2 pálya",
    text: "Két kivilágított, szabványos méretű kispályás focipálya egymás mellett: Békéscsabán ez az egyetlen ilyen helyszín, nagyobb kupákra és versenyekre is.",
    points: ["Kivilágítva", "Esőben és fagy után is játszható", "Baráti és családi körben"],
  },
  {
    id: "belter",
    name: "Beltéri sport",
    count: "5 játék",
    text: "Asztalitenisz, biliárd, csocsó, darts és rex a főépületben, meccs előtt vagy után.",
    points: ["Asztalitenisz", "Biliárd", "Csocsó, darts, rex"],
  },
];

/** From Nemes Attila's reply. */
export const SEASONS = [
  { name: "Nyári szezon", dates: "május 1. – szeptember 30.", court: "4 200 Ft / óra", where: "szabadtéri salak" },
  { name: "Téli szezon", dates: "október 15. – április 15.", court: "10 500 Ft / óra", where: "fűtött sátor" },
];
export const COACH_RATE = "5 500 Ft / óra";

export const BOOKING_STEPS = [
  { title: "Nyisd meg a foglalási naptárat", text: "A pályák szabad időpontjait online látod." },
  { title: "Jelentkezz be és foglalj", text: "Bejelentkezés után a naptárból választhatsz időpontot." },
  { title: "Vagy hívj minket", text: "Pályafoglalás telefonon is." },
];

export type Program = { id: string; name: string; age: string; text: string; points: string[] };
export const PROGRAMS: Program[] = [
  {
    id: "playstay",
    name: "Play & Stay",
    age: "5–11 éveseknek",
    text: "A legkisebbeknek: játékos teniszoktatás 4–6 fős csoportokban, szakképzett edzőkkel.",
    points: ["4–6 fős csoportok", "Heti 2–3 alkalom", "Szakképzett edzők"],
  },
  {
    id: "nagyobbak",
    name: "Gyerekek és felnőttek",
    age: "12–99 éveseknek",
    text: "Egyéni vagy csoportos edzések, kezdő és haladó csoportokban.",
    points: ["Egyéni vagy csoportos", "Kezdő és haladó csoportok", "Heti 2–3 alkalom"],
  },
  {
    id: "versenyzok",
    name: "Versenyzőknek",
    age: "Versenyre készülőknek",
    text: "Egyéni vagy csoportos edzések szakképzett edzőkkel, versenyeztetéssel.",
    points: ["Egyéni vagy csoportos", "Versenyeztetés"],
  },
];

/** The adult group course, from Nemes Attila's reply. */
export const ADULT_GROUPS = {
  price: "25 000 Ft",
  per: "/ hó / fő",
  points: [
    "4–5 fős csoportok, állandó időponttal és állandó edzővel",
    "Általában heti 2 × 1 óra",
    "Labdát, és ha kell, ütőt is adunk",
  ],
  start:
    "Új csoportok ideális esetben májustól indulnak, de legalább 4 fővel szezon közben is indítható csoport, és meglévő csoportba is be lehet kapcsolódni.",
  small: "2–3 fős családi vagy baráti csoportnál óradíjjal számolunk: pálya (nyáron 4 200 Ft, télen 10 500 Ft) és edző (5 500 Ft) óránként.",
  either: "Baráti társaságok együtt is jelentkeznek, és egyénileg érdeklődőkből is állítunk össze csoportot.",
  coaches: ["Belanka Ádám", "Varga Péter"],
};

export const CLUB_LIFE = {
  win: "A Tréning Center SE férfi csapata 2022-ben megyei csapatbajnokságot nyert.",
  team: [
    "Balog István (Csúcs)",
    "Kovács Zoltán",
    "Nemes Attila",
    "Szegedi Zsolt",
    "Varga Péter",
    "Czinege István",
    "Kossuth Tamás",
    "Bora Imre",
    "Schaffer Szilárd",
    "Balog Zalán",
    "Göcző Mátyás",
    "Nemes Gábor",
    "Jass Gyula",
    "Tóth Zsolt",
  ],
  family: "A Tréning Center SE családi napjain mindig remek a hangulat; a fénypontjuk a gyerek–szülő tenisz.",
  cup: { name: "Tréning Center Kupa", text: "férfi páros teniszverseny a teniszcsarnokban (2025. február 15.)." },
  tournaments: "Versenyeket is szervezünk: a teniszcsarnokban teniszkupát, a két egymás melletti műfüves pályán nagyobb létszámú focikupát is.",
};

export const EVENTS = {
  lead: "Családi és baráti rendezvényeket éppúgy vállalunk, mint akár több száz fős céges sportnapokat és családi napokat.",
  kinds: ["Születésnap", "Leány- és legénybúcsú", "Ballagás", "Céges sportnap", "Családi nap", "Kupa, verseny"],
  venue: [
    { num: "90", label: "fős söröző a főépületben" },
    { num: "30", label: "fős különterem" },
    { num: "~600", label: "m² rendezvénysátor" },
    { num: "80", label: "autós saját parkoló" },
  ],
  extras: "A sportpályák mellett színpadnak is alkalmas füves terület, szabadtéri főzőhelyek és játszótér. Igény szerint catering, és ha kell, a szervezésben is segítünk: a helyszínen túl mindenben, amitől egy buli felejthetetlen lesz.",
  attractions: ["Légvár", "Gokart", "Gladiátor", "E-roller", "Akadálypálya", "Íjászat"],
};

export const PUB = {
  lead: "A főépület sörözője: csapolt sör és frissen készült harapnivaló a meccs után.",
  menu: [
    "Pilsner Urquell csapolt sör",
    "Pepsi, Toma, Lipton üdítők",
    "Gatorade sportitalok",
    "Piazza D'oro kávé",
    "Rántott húsos szendvics, rántott sajt, sült burgonya",
  ],
};

export const VALUES = [
  { title: "Biztonság", text: "Mindig karbantartott pályák és megfelelő eszközök." },
  { title: "Profizmus", text: "Több mint 20 éve szervezünk sporteseményeket és szabadidős programokat." },
  { title: "Szórakozás", text: "Jó programok, jó hangulat, jó humorú emberek." },
];

/** Enquiry form options (sending opens an e-mail to the centre). */
export const FORM = {
  coaching: ["Play & Stay (5–11 év)", "Gyerek vagy felnőtt csoport (12+)", "Felnőtt kezdő csoport", "Családi / baráti csoport (2–3 fő)", "Egyéni edzés", "Versenyző"],
  levels: ["Kezdő", "Haladó", "Versenyző"],
  events: ["Születésnap", "Céges sportnap", "Családi nap", "Leány- / legénybúcsú", "Ballagás", "Kupa, verseny", "Egyéb"],
};
