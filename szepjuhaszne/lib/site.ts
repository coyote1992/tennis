// Everything both versions show. Sources: szepjuhaszneteniszklub.hu (Főoldal, Rólunk, Kapcsolat,
// Pályafoglalás és áraink with the winter price list uploaded on 2 November 2026, Tenisziskola, Táborok,
// and the news posts 2019–2025, including the Totaltenisz article of December 2023 and the
// tenisz-palya.hu interview of October 2020 that the club republished) and the owner's email replies in
// 100web (3 November 2026: new members who want to join the community are welcome, call him;
// 5 November: the autumn art-history lecture series in the clubhouse).

export const CLUB = {
  name: "Szép Juhászné Teniszklub",
  short: "Szép Juhászné",
  address: "1021 Budapest, Szép Juhászné út 14.",
  area: "Hűvösvölgy, a Hárshegy lábánál",
  owner: "Gáspár Balázs",
  phone: "+36 30 397 8401",
  phoneHref: "tel:+36303978401",
  email: "gaspar.balazs.tenisz@gmail.com",
  emailHref: "mailto:gaspar.balazs.tenisz@gmail.com",
  school: { name: "Gáspár Benedek", phone: "+36 30 733 9769", phoneHref: "tel:+36307339769", email: "gaspar.benedek03@gmail.com" },
  facebook: "https://www.facebook.com/szepjuhaszneteniszklub",
  instagram: "https://www.instagram.com/szepjuhasznetenisz/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sz%C3%A9p%20Juh%C3%A1szn%C3%A9%20Teniszklub%2C%20Budapest%2C%20Sz%C3%A9p%20Juh%C3%A1szn%C3%A9%20%C3%BAt%2014",
  mapsEmbed: "https://maps.google.com/maps?q=Budapest%2C%20Sz%C3%A9p%20Juh%C3%A1szn%C3%A9%20%C3%BAt%2014&z=15&output=embed",
};

export const HOURS = [
  { days: "Hétfőtől péntekig", time: "7:00–22:00" },
  { days: "Szombat, vasárnap", time: "7:00–20:00" },
];

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "palyak", label: "Pályák és árak" },
  { id: "tenisziskola", label: "Tenisziskola" },
  { id: "kiallitas", label: "Kiállítás" },
  { id: "programok", label: "Programok" },
  { id: "rolunk", label: "Rólunk" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export const COURTS = {
  intro:
    "Két salakos pálya zöld környezetben, a Budai Tájvédelmi Körzet mellett. Télen sátor kerül a pályák fölé, mellettük a klubház és ingyenes parkoló.",
  points: ["Két salakos pálya", "Télen sátor alatt", "Klubház egész éves kiállítással", "Ingyenes parkolás a pályánál"],
  booking: "Pályát telefonon foglalhatsz Gáspár Balázsnál.",
};

/** Téli teniszpálya bérleti díjak, 2026. október 5. – 2027. április 11. (27 hét). */
export const WINTER = {
  season: "2026. október 5. – 2027. április 11.",
  weeks: 27,
  columns: ["Szezonbérlet", "10 alkalmas bérlet", "Alkalmi"],
  rows: [
    { period: "Hétköznap 7–11 óráig", season: "270 000 Ft", seasonHour: "10 000 Ft / óra", ten: "110 000 Ft", tenHour: "11 000 Ft / óra", single: "12 000 Ft / óra" },
    { period: "Hétköznap 11–15 óráig", season: "243 000 Ft", seasonHour: "9 000 Ft / óra", ten: "100 000 Ft", tenHour: "10 000 Ft / óra", single: "11 000 Ft / óra" },
    { period: "Hétköznap 15–22 óráig", season: "324 000 Ft", seasonHour: "12 000 Ft / óra", ten: "130 000 Ft", tenHour: "13 000 Ft / óra", single: "14 000 Ft / óra" },
    { period: "Hétvégén", season: "243 000 Ft", seasonHour: "9 000 Ft / óra", ten: "100 000 Ft", tenHour: "10 000 Ft / óra", single: "11 000 Ft / óra" },
  ],
  lastMinute: { title: "Last minute bérlet", price: "90 000 Ft", text: "10 alkalmas bérlet, csak a 24 órán belül üres pályák foglalására." },
  cancel: "Lemondani legalább 48 órával előbb lehet. Később lemondott időpont lejátszottnak számít.",
};

export const SCHOOL = {
  text: "Gyerekeknek szóló tenisziskolánk heti két alkalommal várja azokat, akik most ismerkednek a teniszezéssel. Játékosan szerettetjük meg a sportot, közben fejlődik a kondíciójuk és a koordinációjuk. Tapasztalt edzőink végig segítik a gyerekeket, így mindenki a neki megfelelő csoportban, a saját tempójában fejlődhet.",
  points: ["Heti két alkalom", "Csoportok tudásszint szerint", "Játékos oktatás"],
};

export const CAMP = {
  intro: "Nyári napközis tenisztábor a klubban, az erdei levegőn.",
  points: [
    "Naponta 2 × 1,5 óra teniszoktatás",
    "Az első órán felmérjük a tudást, utána csoportokba osztjuk a gyerekeket",
    "Szabadidőben társasjáték, kézműveskedés és szabadtéri játék animátorral",
    "Péntek a versenynap, amire a családot is várjuk",
    "Reggel 8-tól délután 4-ig, napi háromszori étkezéssel",
  ],
  lastPrice: "75 000 Ft",
  lastYear: "2024",
  pay: "A jelentkezés a díj 50%-ának befizetésével válik véglegessé (a klubházban), a többit a tábor első reggelén kell rendezni.",
  organizers: "Gáspár Balázs és Gáspár Benedek",
};

export const COLLECTION = {
  intro:
    "Gáspár Balázs több mint három évtizede gyűjti a tenisz relikviáit, és a klubházban minden évben új témájú kiállításon mutatja meg őket. Ötletét a wimbledoni múzeum adta.",
  permanent:
    "Állandó helyük van Körmöczy Zsuzsa, az 1958-as Roland Garros győztese, és Gulyás István, az 1966-os Roland Garros döntőse fotóinak és relikviáinak.",
  exhibitions: [
    { year: "2019", title: "Körmöczy Zsuzsa", text: "Az első kiállítás az 1958-as Roland Garros győztesének emlékét idézte." },
    { year: "2020", title: "A modern tenisz születése", text: "A viktoriánus kor tárgyi emlékei: korabeli fűnyírók, pályahengerek, labdatisztító kefék." },
    { year: "2023", title: "Art deco és tenisz", text: "Az art deco és a modern kori tenisz közös története. A megnyitóról az Index is beszámolt." },
    { year: "2025", title: "Tenisz és a nők", text: "A tárlatot Schmitt Petra, az MTSZ főtitkára nyitotta meg, a beszélgetésen Temesvári Andrea is részt vett." },
  ],
  objects: [
    { src: "/img/lawn-tennis-lada.jpg", w: 2200, h: 1731, title: "Lawn tennis készlet", text: "Korabeli ütők faládában, a gyűjtemény egyik darabja." },
    { src: "/img/viktorianus.jpg", w: 2200, h: 1642, title: "A viktoriánus kor", text: "Korabeli öltözet és pályahenger a 2020-as kiállításon." },
    { src: "/img/uto-kituzok.jpg", w: 1024, h: 768, title: "Ütő formájú apróságok", text: "A teniszütő formája szinte minden használati tárgyra rákerült." },
    { src: "/img/relikvia.jpg", w: 960, h: 720, title: "Relikviák a vitrinben", text: "Fotók, faütő és emléktárgyak a klubház tárlójában." },
  ],
  press: ["Index", "Nemzeti Sport", "MTI", "Kossuth Rádió", "Jazzy Rádió", "Totaltenisz"],
};

export const PROGRAMS = [
  {
    title: "Retro verseny",
    text: "Fehér ruha és faütő: hagyományteremtő nosztalgiatornánk a hetvenes évek teniszét idézi.",
    img: "/img/retro-verseny.jpg",
    w: 2200,
    h: 1650,
    alt: "A retro verseny résztvevői fehér ruhában, faütőkkel a klubház előtt",
  },
  {
    title: "Koncertek, előadások",
    text: "Adventi zenés est, tenisztörténeti és művészettörténeti előadások a klubházban. Nem csak teniszezőknek.",
    img: "/img/adventi-koncert.jpg",
    w: 2200,
    h: 1146,
    alt: "Adventi zenés est a klubházban, a falakon a kiállítás képei",
  },
  {
    title: "Amatőr páros versenyek",
    text: "Férfi, női és vegyes párosok csoportmérkőzésekkel. 2023 szeptemberében vegyes páros versennyel emlékeztünk Burde Péter barátunkra.",
    img: "/img/sator-paros.jpg",
    w: 640,
    h: 480,
    alt: "Páros versenyzők a sátor alatti salakpályán",
  },
  {
    title: "Születésnapok, összejövetelek",
    text: "Hétvégén szívesen rendezünk mások számára is sportos születésnapot, kisebb összejövetelt. Keress meg bátran!",
    img: "/img/szulinap.jpg",
    w: 2016,
    h: 1512,
    alt: "Gyerekek születésnapi zsúrja a feldíszített klubházban",
  },
];

export const ABOUT = {
  text: [
    "A klubot Gáspár Balázs és Ablonczy Ákos régi barátsága, a tenisz szeretete hívta életre. A pálya a II. kerületi Szép Juhászné úton, a Budai Tájvédelmi Körzet mellett, a város egyik legtisztább levegőjű részén van.",
    "Célunk, hogy helyszínt adjunk a sport hagyományos értékeinek, a természet közelségének és a baráti közösségnek. A tenisz az életünk, de a művészeteket is szeretjük, és a közösség legalább olyan fontos nekünk, mint a sport.",
  ],
  people: [
    { name: "Gáspár Balázs", role: "Tulajdonos, teniszedző, gyűjtő", text: "Pályafoglalás, edzés, a kiállítások." },
    { name: "Gáspár Benedek", role: "Edző", text: "Edzőként segíti a klub munkáját, a tenisziskola kapcsolattartója." },
  ],
  welcome: "Örömmel látunk új tagokat is, akik szívesen kapcsolódnak hozzánk.",
};

export const FORM = {
  topics: ["Pályafoglalás", "Bérlet", "Tenisziskola", "Tábor", "Programok", "Egyéb"],
};
