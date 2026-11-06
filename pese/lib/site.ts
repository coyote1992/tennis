// Everything both versions show. Sources: pecsielektromosse.hu (Főoldal: Rólunk, Történetünk,
// Szolgáltatásaink, Támogatóink, Nyitva tartás, Elérhetőségeink; Szolgáltatások; Csapatunk; Árlista:
// the 2026 summer court price list and the 2026 price list of the other services, both images;
// Pályafoglalás; Híreink: Teddy Tennis, 28 Sept 2023; the XL. Villamosenergia-ipari Tenisztalálkozó
// information booklet, 21–24 Aug 2025) and the club's email reply in 100web (4 November 2026: with
// the 15 000 Ft annual membership the sauna and the gym can also be used separately; not the pool).
// Where the Szolgáltatások page and the 2026 price list disagree, the 2026 price list is used.

export const CLUB = {
  name: "Pécsi Elektromos SE",
  full: "Pécsi Elektromos Sportegyesület",
  founded: "1968",
  address: "7622 Pécs, Diófa u. 6.",
  phone: "+36 30 709 8751",
  phoneHref: "tel:+36307098751",
  email: "info@pecsielektromosse.hu",
  emailHref: "mailto:info@pecsielektromosse.hu",
  facebook: "https://www.facebook.com/profile.php?id=100092973393561",
  booking: "https://pecsielektromosse.hu/palyafoglalas",
  register: "https://pecsielektromosse.hu/register",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=P%C3%A9csi%20Elektromos%20SE%2C%207622%20P%C3%A9cs%2C%20Di%C3%B3fa%20u.%206.",
  mapsEmbed: "https://maps.google.com/maps?q=7622%20P%C3%A9cs%2C%20Di%C3%B3fa%20u.%206.&z=16&output=embed",
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "tenisz", label: "Tenisz" },
  { id: "pihenes", label: "Medence, szauna, edzés" },
  { id: "arak", label: "Árak" },
  { id: "rendezveny", label: "Rendezvények" },
  { id: "klub", label: "A klub" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export const HOURS = [
  { day: "Hétfő", time: "7:00–20:00" },
  { day: "Kedd", time: "7:00–21:00" },
  { day: "Szerda", time: "7:00–22:00" },
  { day: "Csütörtök", time: "7:00–22:00" },
  { day: "Péntek", time: "7:00–21:00" },
  { day: "Szombat", time: "7:00–14:00" },
  { day: "Vasárnap", time: "7:00–13:00" },
];

export const FACTS = [
  { num: "1968", label: "óta működő sportegyesület" },
  { num: "13 + 1", label: "salakos és műfüves teniszpálya" },
  { num: "3", label: "fedett pálya télen" },
  { num: "50 fő", label: "fér el a klubházban és a teraszon" },
];

export const TENNIS = {
  title: "Tizennégy pálya, egész évben",
  text: "13 salakos és 1 műfüves teniszpálya a Diófa utcai sporttelepen. Télen három pálya fedett, az őszi korai sötétedésben két salakpályát ki tudunk világítani.",
  points: [
    "13 salakpálya, 1 műfüves pálya",
    "Télen 3 fedett pálya",
    "Az 1-es és 2-es pálya megvilágítható (előzetes egyeztetéssel)",
    "Online foglalás 14 nappal előre, regisztráció után",
  ],
  coaching: [
    {
      title: "Teniszoktatás",
      text: "Egyéni és csoportos képzés kezdőknek és haladóknak. Nyáron gyerekeknek tenisztáborokat és képzéseket szervezünk.",
      contact: { name: "Varga Tamás", phone: "+36 30 827 1587", phoneHref: "tel:+36308271587" },
      img: "/img/oktatas.jpg",
      imgAlt: "Gyerekek teniszedzése a műfüves pályán, kis hálókkal",
    },
    {
      title: "Teddy Tennis",
      text: "A nemzetközi gyerekprogram 3–10 éveseknek: mackófigurákkal, angol zenékre és kifejezésekkel, játszva tanulják meg a tenisz alapjait.",
      contact: { name: "Kiss-Tóth Dominik", phone: "+36 70 280 6087", phoneHref: "tel:+36702806087" },
      img: "/img/teddy.jpg",
      imgAlt: "Teddy Tennis foglalkozás gyerekeknek",
    },
  ],
};

export type Amenity = { id: string; title: string; text: string; price?: string; img: string; imgAlt: string };
export const AMENITIES: Amenity[] = [
  {
    id: "medence",
    title: "Kültéri medence",
    text: "Nyáron, a pályák mellett, pálmák és tuják között. Csak a nyári szezonban üzemel.",
    img: "/img/medence.jpg",
    imgAlt: "A kültéri medence a sporttelep kertjében",
  },
  {
    id: "szauna",
    title: "Szauna és jakuzzi",
    text: "Szauna bent, jakuzzi kint: meccs után vagy csak a pihenés kedvéért.",
    price: "3 500 Ft / alkalom",
    img: "/img/szauna.jpg",
    imgAlt: "A faburkolatú szauna",
  },
  {
    id: "konditerem",
    title: "Konditerem",
    text: "Erősítő gépek, szabadsúlyok és kardiógépek, a teniszezők felkészüléséhez is.",
    price: "2 500 Ft / alkalom",
    img: "/img/konditerem.jpg",
    imgAlt: "A konditerem gépekkel és kerékpárokkal",
  },
  {
    id: "pingpong",
    title: "Asztalitenisz",
    text: "Két fűtött, zárt asztalitenisz-terem, és kint, a medence mellett is van asztal.",
    price: "2 500 Ft / óra",
    img: "/img/pingpong-terem.jpg",
    imgAlt: "Asztalitenisz-terem kék padlóval",
  },
];

export const OTHER_SPORTS = "Focipálya, tollaslabda és kosárlabda: érvényes tagsággal díjmentesen.";

/** 2026 summer season court prices (the club's price list). */
export const COURT_PRICES = {
  season: "2026-os nyári szezon",
  seasonDates: "2026. április 13. – október 10.",
  rows: [
    { item: "Alkalmi pályabérlés", who: "nem szakosztályi tag, honlap-regisztráció után", price: "4 500 Ft", unit: "/ óra" },
    { item: "Szakosztályi tag, alkalomra szóló", who: "hétfő–péntek, szabad időpontra", price: "3 200 Ft", unit: "/ óra" },
    { item: "Szakosztályi tag, szezonra szóló", who: "hétfő–péntek, legalább heti 1 óra egész szezonra", price: "2 700 Ft", unit: "/ óra" },
  ],
  passes: [
    { item: "Egész napos", when: "hétfő–vasárnap, 7:00-tól zárásig", price: "90 000 Ft" },
    { item: "Délelőtti", when: "hétfő–vasárnap, 7:00–15:00", price: "60 000 Ft" },
    { item: "Délutáni", when: "hétfő–vasárnap, 15:00-tól zárásig", price: "50 000 Ft" },
    { item: "Hétvégi", when: "szombat–vasárnap, 7:00-tól zárásig", price: "30 000 Ft" },
  ],
  notes: [
    "A szakosztályi tagi árak rendezett éves szakosztályi tagdíjjal érvényesek.",
    "Szezonra szóló foglalással vagy bérlettel rendelkező tagjainknak a hétvégi pályahasználat (előzetes foglalással) díjmentes.",
    "Az E.ON által támogatott tagoknak 25%, nyugdíjas tagjainknak hétköznap 15:00-ig 15% kedvezmény.",
  ],
};

/** 2026 prices of the other services (the club's price list). */
export const OTHER_PRICES = [
  { item: "Szauna", price: "3 500 Ft", unit: "/ alkalom" },
  { item: "Konditerem", price: "2 500 Ft", unit: "/ alkalom" },
  { item: "Konditerem + szauna", price: "4 500 Ft", unit: "/ alkalom" },
  { item: "Asztalitenisz-terem", price: "2 500 Ft", unit: "/ óra" },
  { item: "Szaunabérlet", price: "22 500 Ft", unit: "/ negyedév" },
  { item: "Kondibérlet", price: "12 500 Ft", unit: "/ negyedév" },
  { item: "Kondi + szauna bérlet", price: "27 500 Ft", unit: "/ negyedév" },
];

export const MEMBERSHIP = {
  price: "15 000 Ft",
  text: "Éves tagdíj: tagként a szauna és a konditerem külön is igénybe vehető. A medence nem része.",
};

export const EVENTS = {
  title: "Klubház és terasz, 50 főig",
  text: "Céges rendezvény, családi esemény, születésnap: a klubház és a fedett terasz együtt legfeljebb 50 főt fogad, felszerelt konyhával és kültéri sütési, főzési lehetőséggel.",
  rows: [
    { item: "19:00-ig", price: "6 000 Ft", unit: "/ óra" },
    { item: "19:00 után", price: "9 000 Ft", unit: "/ óra" },
    { item: "Medencével és szaunával", price: "11 000 Ft", unit: "/ óra" },
  ],
  includes: "Az ár tartalmazza a kültéri főzési lehetőséget, a poharakat, tányérokat és a konyhai eszközöket.",
};

export const STORY = [
  "A Pécsi Elektromos Sportegyesület 1968. március 2-án alakult üzemi sportegyesületként, és több mint fél évszázada a Diófa utcai sporttelepen működik. 1986-ig Dédász SE néven szerepelt.",
  "A tenisz 1979-ben kapott saját szakosztályt, első elnöke Kisteleki Gusztáv volt. Ettől kezdve sorra épültek a pályák, a főként teniszre épülő sporttelep pedig mára medencével, szaunával, jakuzzival, konditeremmel és asztalitenisz-termekkel bővült.",
  "Az elmúlt évtizedekben Varga János vezette az egyesületet, aki 1968-ban titkárként kezdte, és akit ma is mindenki Jani bácsiként ismer. 2023 óta Varga Gábor az ügyvezető. A Dédász jogutódja, az E.ON ma is támogatja a klubot.",
];

export const TIMELINE = [
  { year: "1968", text: "Március 2-án megalakul az egyesület" },
  { year: "1979", text: "Megalakul a tenisz szakosztály" },
  { year: "1982–85", text: "Három, majd öt új teniszpálya" },
  { year: "1996", text: "Két újabb salakpálya; azóta önállóan működik az egyesület" },
  { year: "2023", text: "Elindul a Teddy Tennis program" },
  { year: "2025", text: "Itt rendezik a XL. Villamosenergia-ipari Tenisztalálkozót" },
];

export const ARCHIVE = [
  { src: "/img/archiv/archiv-0.jpg", alt: "A régi klubépület virágágyásokkal", w: 1400, h: 971 },
  { src: "/img/archiv/archiv-1.jpg", alt: "Vendégek napernyők alatt a kertben", w: 1400, h: 976 },
  { src: "/img/archiv/archiv-3.jpg", alt: "Salakpálya a drótkerítés mögött, háttérben a hegyek", w: 1400, h: 951 },
  { src: "/img/archiv/archiv-5.jpg", alt: "A sporttelep és a pályák magasból", w: 1400, h: 973 },
  { src: "/img/archiv/archiv-2.jpg", alt: "Földmunka a sporttelep kerítése mentén", w: 1400, h: 945 },
];

export const TEAM = [
  { name: "Gyimesi Gábor", role: "Elnök" },
  { name: "Varga Gábor", role: "Ügyvezető igazgató" },
  { name: "Varga János", role: "Elnökségi tag" },
  { name: "Varga Tamás", role: "Elnökségi tag" },
  { name: "Moharos Attila", role: "Elnökségi tag" },
  { name: "Theisz József", role: "Elnökségi tag" },
  { name: "Lajkó Ferenc", role: "Elnökségi tag" },
  { name: "Varjas József", role: "Elnökségi tag" },
];

export const SUPPORTERS = [
  { name: "E.ON", img: "/img/tamogatok/eon.png", w: 291, h: 86, main: true },
  { name: "Aranycipó", img: "/img/tamogatok/aranycipo.png", w: 185, h: 103 },
  { name: "Dorko", img: "/img/tamogatok/dorko.png", w: 299, h: 120 },
  { name: "Gasztro Terni", img: "/img/tamogatok/gasztro-terni.png", w: 256, h: 172 },
  { name: "Kurír-Trans", img: "/img/tamogatok/kurir-trans.png", w: 232, h: 124 },
];

export const FORM = {
  topics: ["Pályafoglalás", "Teniszoktatás", "Teddy Tennis", "Tagság, bérlet", "Rendezvény", "Egyéb"],
};
