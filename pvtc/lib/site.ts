// Facts used across the site. Sources: pvtc.hu (Főoldal, Bemutatkozás and club history, Edzők,
// Vezetőség, Áraink és csomagok for the 2026 summer season, Wellness, Play&Stay, Csoportos
// gyermektenisz, Felnőttoktatás, Nyári tenisz napközi, Eredményjelző, Brand Slam, Tüke Tenisz Kupa,
// Híreink, Házirend, Kapcsolat, Pályafoglalás) and Horváth Rita's email reply in 100web: beginners
// and advanced players both sign up for lessons, and the club finds a suitable coach for every level.

export const CLUB = {
  name: "Pécs Városi Tenisz Club",
  short: "PVTC",
  founded: "1992",
  address: "7633 Pécs, Dr. Veress Endre utca 4.",
  landmark: "a jégpálya mellett",
  bookingPhone: "+36 30 500 0083",
  bookingPhoneHref: "tel:+36305000083",
  officePhone: "+36 20 983 8593",
  officePhoneHref: "tel:+36209838593",
  otherPhone: "+36 20 525 5068",
  otherPhoneHref: "tel:+36205255068",
  email: "info@pvtc.hu",
  emailHref: "mailto:info@pvtc.hu",
  booking: "https://pvtc.hu/palyafoglalas",
  register: "https://pvtc.hu/register",
  competitionEntry: "https://pvtc.hu/eredmenyjelzo",
  facebook: "https://www.facebook.com/PvtcPecsVarosiTeniszClub",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=7633+P%C3%A9cs%2C+Dr.+Veress+Endre+utca+4.",
  mapsEmbed: "https://maps.google.com/maps?q=7633%20P%C3%A9cs%2C%20Dr.%20Veress%20Endre%20utca%204.&z=16&output=embed",
  manager: "Horváth Rita",
  president: "Simon István",
};

export const HOURS = [
  { days: "Hétfő – péntek", time: "7:00 – 21:00" },
  { days: "Szombat – vasárnap", time: "8:00 – 18:00" },
];

export const NAV = [
  { href: "#palyak", label: "Pályák" },
  { href: "#arak", label: "Árak" },
  { href: "#oktatas", label: "Oktatás" },
  { href: "#klub", label: "A klub" },
  { href: "#versenyek", label: "Versenyek" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];

/** 2026 summer season. Season passes are for a fixed weekly hour, about 25 weeks. */
export const SEASON_PASSES = [
  { name: "Délelőtti és hétvégi bérlet", price: "83 000", hour: "3 320", when: "Hétköznap 7–16 óra között, hétvégén nyitvatartási időben" },
  { name: "Délutáni és esti bérlet", courts: "1–4. pálya", price: "89 000", hour: "3 560", when: "16–20 óra között" },
  { name: "Délutáni és esti bérlet", courts: "1–10. pálya", price: "99 000", hour: "3 960", when: "16–20 óra között" },
];

export const OTHER_PRICES = [
  { name: "1 óra, délelőtt", price: "4 800", unit: "Ft / óra", when: "Hétköznap 8–16 óra között" },
  { name: "1 óra, délután és hétvégén", price: "5 200", unit: "Ft / óra", when: "Hétköznap 16–20 óra között, hétvégén nyitvatartási időben" },
  { name: "10 órás bérlet", price: "44 000", unit: "Ft", when: "Egész nap, hétvégén is, szabadon felhasználható" },
  { name: "20 órás bérlet", price: "88 000", unit: "Ft", when: "Egész nap, hétvégén is, szabadon felhasználható" },
];

export const PROGRAMS = [
  {
    key: "playstay",
    age: "4–9 éves",
    name: "Play&Stay",
    text: "Kiscsoportos, játékos edzések a legkisebbeknek: mozgás, labdaérzék, koordináció, és minél több labdaérintés. Az ütőt, a labdát és a mini hálót mi adjuk.",
    meta: ["Hétköznap 14–18 óra között", "55 perces órák, heti 1–4 alkalom", "Egész évben"],
    img: "/img/csoportkep.jpg",
    alt: "Gyerekek csoportképe a salakpályán, ütőkkel a magasban",
  },
  {
    key: "csoportos",
    age: "9–18 éves",
    name: "Csoportos gyermektenisz",
    text: "Hasonló korú és tudású gyerekek egy csoportban, sok játékkal és jó hangulatban, hogy a tenisz felnőttkorig elkísérje őket.",
    meta: ["Hétköznap 14–18 óra között", "55 perces órák, heti 1–3 alkalom", "A tanév teljes időszakában"],
    img: "/img/edzes.jpg",
    alt: "Edző és két gyerek a salakpályán, mögöttük a klubház",
  },
  {
    key: "felnott",
    age: "Felnőtteknek",
    name: "Felnőttoktatás",
    text: "Kezdőknek, a technikájukat csiszoló haladóknak, és azoknak, akik jól kifáradnának, de unják a monoton mozgást. Minden tudásszintre van megfelelő edzőnk.",
    meta: ["Egyéni vagy 2–3 fős kiscsoport", "Előre egyeztetett időpontban", "Kezdőtől haladóig"],
    img: "/img/palya-halo.jpg",
    alt: "A háló és a salakpálya közelről",
  },
  {
    key: "napkozi",
    age: "Nyáron",
    name: "Nyári tenisz napközi",
    text: "Heti turnusok a nyári szünetben, kezdőknek és haladóknak: délelőtt és délután tenisz, közben meleg ebéd, vetélkedők, ping-pong, kosárpalánk, csocsó.",
    meta: ["7:30–16:30, hétfőtől péntekig", "2026-ban 48 000 Ft / hét, ebéddel", "Testvéreknek 10% kedvezmény"],
    img: "/img/napkozi.jpg",
    alt: "A tenisz napközi résztvevői csoportképen",
  },
];

export const COACHES = [
  {
    name: "Sáros Zoltán",
    role: "Vezetőedző",
    img: "/img/saros-zoltan.jpg",
    bio: "Testnevelő tanár, MTSZ B licenszes, USPTR professional teniszedző. Többszörös utánpótlás-válogatott, a PVTC első osztályú csapatának játékosa.",
  },
  {
    name: "Simon István",
    role: "Edző, a klub elnöke",
    img: "/img/simon-istvan.jpg",
    bio: "ITF B és C licenszes, USPTR professional teniszedző, Play&Stay licenszes oktató. Magyar bajnok, utánpótlás-válogatott; évek óta Bartha Panna edzője.",
  },
  {
    name: "Guoth Ambrus",
    role: "Edző",
    img: "/img/guoth-ambrus.jpg",
    bio: "Testnevelő tanár, USPTR professional, GPTCA level C, Play&Stay licenszes oktató, első osztályú játékos. Lukács Lívia és Bartha Panna magyar bajnoki címeinek felkészítője.",
  },
  {
    name: "Spitl Tamás",
    role: "Edző",
    img: "/img/spitl-tamas.jpg",
    bio: "USPTR professional teniszedző, Play&Stay licenszes oktató, az edzői csapat legtapasztaltabb tagja. Többszáz gyerekkel szerettette meg a játékot.",
  },
];

export const RESULTS = [
  { year: "2023", title: "Bartha Panna felnőtt magyar bajnok", text: "Megnyerte a fedettpályás felnőtt magyar bajnokság női egyesét, edzője Simon István." },
  { year: "2023", title: "Első profi tornagyőzelem", text: "Bartha Panna az antalyai 15 ezer dolláros ITF-tornán kezdte felnőtt pályafutását, győzelemmel." },
  { year: "2022", title: "Ungvári Nóri a Nadal Akadémián", text: "A Kinder Joy of Moving sorozat győzteseként a mallorcai döntőben a legjobb 8 közé jutott." },
  { year: "2022", title: "Vidékbajnok U14-es fiúcsapat", text: "A PVTC 14 éven aluli fiúcsapata nyerte a vidékbajnokságot." },
];

export const SPONSORS = ["Platina Bau Zrt.", "AutóCity Zrt.", "ANDA festékcentrum", "OTP Nyrt. Dél-Dunántúli Régió", "Profinfo Team Zrt."];
