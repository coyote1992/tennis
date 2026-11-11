// Everything both versions show. Sources: folyondar.hu (Teniszpálya/árak with the 2026/27 winter price
// list, Teniszoktatás with the coaches and their contacts, Rólunk, Nyitvatartás, Kapcsolat with
// directions, Vasas, Gyermeksport, Táborok, Edzőterem, Táncterem, Csarnok, Folyondár Café, Rendezvény,
// Házirend és parkolószabályzat) and the reception's reply in 100web (3 November 2026: for adult
// coaching it is best to contact the instructors directly, at the contacts on the website).

/** 10500 -> "10 500" with a no-break space, the same on server and client. */
export function fmt(n: number) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const CLUB = {
  name: "Folyondár Sportközpont",
  full: "Folyondár Vasas Sport- és Táncközpont",
  short: "Folyondár",
  place: "Budapest, III. kerület",
  address: "1037 Budapest, Folyondár utca 15.",
  contact: "Recepció",
  phone: "+36 70 967 1678",
  phoneHref: "tel:+36709671678",
  phone2: "+36 1 244 8850",
  phone2Href: "tel:+3612448850",
  email: "recepcio@folyondar.hu",
  emailHref: "mailto:recepcio@folyondar.hu",
  facebook: "https://www.facebook.com/folyondar",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Folyond%C3%A1r%20utca%2015%2C%201037%20Budapest",
  mapsEmbed: "https://maps.google.com/maps?q=Folyond%C3%A1r%20u.%2015%2C%201037%20Budapest&z=16&output=embed",
  events: { name: "Nagy Irén Mónika", role: "rendezvényszervező", phone: "+36 70 377 0955", phoneHref: "tel:+36703770955", email: "m.nagy@folyondar.hu", site: "http://rendezveny.folyondar.hu/" },
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "palyak", label: "Teniszpályák", short: "Pályák" },
  { id: "arak", label: "Árak", short: "Árak" },
  { id: "oktatok", label: "Oktatók", short: "Oktatók" },
  { id: "sportkozpont", label: "Sportközpont", short: "Sportközpont" },
  { id: "kapcsolat", label: "Kapcsolat", short: "Kapcsolat" },
];

export const INTRO = {
  lead: "Salakos teniszpályák egy ősfákkal övezett parkban, a Kiscelli parkerdő szomszédságában. Télen fedett sátrakban, nyáron a szabad ég alatt, és két rekortán pálya a csarnok tetején.",
  place: "A III. kerület egyik legszebb részén, mégis távol a város zajától; a városközponttól hét percre.",
};

export const HOURS = {
  center: [
    { days: "Hétfő–péntek", time: "7:00–22:00" },
    { days: "Szombat–vasárnap", time: "8:00–20:00" },
  ],
  cafe: [
    { days: "Hétfő–péntek", time: "7:00–21:00" },
    { days: "Szombat", time: "8:00–18:00" },
    { days: "Vasárnap", time: "zárva" },
  ],
  lunch: { days: "Hétfő–péntek", time: "11:30–15:30" },
};

/** Teniszpálya/árak and Sportolj pages. */
export const COURTS = {
  lead: "Salakos pályáink a sportközpont teljes nyitvatartási idejében foglalhatók. Jöhetsz partnerrel, vagy kérheted edző segítségét az alapoktól a haladó szintig.",
  seasons: [
    { id: "tel", label: "Tél", range: "2026. október 5. – 2027. április 2.", clay: 7, hard: 2, clayNote: "két fedett sátorban", hardNote: "a csarnok tetején" },
    { id: "nyar", label: "Nyár", range: "a téli szezon után", clay: 8, hard: 2, clayNote: "a szabad ég alatt, a park fái között", hardNote: "a csarnok tetején, festői kilátással" },
  ],
  weather: "Az időpontok az időjárás függvényében változhatnak.",
  perks: [
    { title: "Ütőbérlés", text: "Ha nincs nálad ütő, a recepción 500 Ft/óráért bérelhetsz; teniszlabdát is vehetsz." },
    { title: "Öltöző és szauna", text: "Igényes öltözők, közvetlenül elérhető szaunával. A szaunát kérésre kapcsolják be." },
    { title: "Lounge terasz", text: "Tavasztól őszig a kávézó teraszáról és lounge teraszáról a teniszpályákra látsz." },
  ],
  booking: "Információ és pályafoglalás a recepción, telefonon.",
};

export type ClayKind = "szezon" | "tizes" | "alkalmi";

/** Winter 2026/27 price list as published (clay), and the hard-court list (no season given there). */
export const PRICES = {
  title: "Téli szezon 2026/27",
  range: "2026. október 5. – 2027. április 2.",
  vat: "Az árak forintban értendők, és tartalmazzák az áfát.",
  clay: {
    weekday: [
      { from: 7, to: 8, szezon: 10000, tizes: 102500, alkalmi: 10500 },
      { from: 8, to: 11, szezon: 10500, tizes: 107500, alkalmi: 11000 },
      { from: 11, to: 15, szezon: 10000, tizes: 102500, alkalmi: 10500 },
      { from: 15, to: 21, szezon: 10500, tizes: 107500, alkalmi: 11000 },
      { from: 21, to: 22, szezon: 10000, tizes: 102500, alkalmi: 10500 },
    ],
    weekend: [{ from: 8, to: 20, szezon: 8500, tizes: 87500, alkalmi: 9000 }],
  },
  hard: {
    weekday: [
      { from: 6, to: 8, szezon: 3590, alkalmi: 3990 },
      { from: 8, to: 11, szezon: 3990, alkalmi: 4390 },
      { from: 11, to: 15, szezon: 3290, alkalmi: 3590 },
      { from: 15, to: 20, szezon: 5290, alkalmi: 5790 },
    ],
    weekend: [{ from: 8, to: 20, szezon: 2590, alkalmi: 2990 }],
  },
  kinds: [
    { id: "alkalmi" as ClayKind, label: "Alkalmi", unit: "Ft/óra" },
    { id: "tizes" as ClayKind, label: "10 alkalmas", unit: "Ft / 10 óra" },
    { id: "szezon" as ClayKind, label: "Szezonár", unit: "Ft/óra" },
  ],
};

/** Teniszoktatás page, in the club's order. Phones and e-mails as published there. */
export const COACHES = [
  { name: "Zsitva Zsolt", img: "edzo-zsitva-zsolt.jpg", phone: "+36 20 958 0036", email: "zsitvazsiti@gmail.com", langs: "", text: "Játékosként junior magyar bajnok, többszörös egyetemi bajnok, I. osztályú versenyző. Edzőként fővárosi klubokban későbbi magyar bajnokkal és jelentős nemzetközi eredményt elérő versenyzőkkel dolgozott." },
  { name: "Czotter Balázs", img: "", phone: "+36 20 777 9019", email: "", langs: "", text: "" },
  { name: "Grécs Attila", img: "edzo-grecs-attila.jpg", phone: "+36 30 274 1158", email: "", langs: "", text: "" },
  { name: "Kovács Dániel", img: "edzo-kovacs-daniel.jpg", phone: "+36 30 827 3262", email: "", langs: "", text: "A Testnevelési Egyetemen végzett testnevelő-gyógytestnevelőként; 2008 óta tenisz sportedző és síoktató. Évek óta tanít teniszt a Folyondárban, és az OTP teniszcsapatában versenyez. Célja, hogy a helyes technika mellett játékos formában a koordinációt és az erőnlétet is fejlessze." },
  { name: "Kisantal Fanni", img: "", phone: "+36 20 297 3626", email: "fanniharley@gmail.com", langs: "", text: "Közel három éve tanít a Vasasnál a Folyondár utcában, elsősorban kisgyerekeket, de felnőtt tanítványai is vannak. C és D tenisz képesítéssel, a Testnevelési Egyetem sportszervezői képzésével és ELTE-s pedagógiai diplomával; strandteniszben ma is versenyez." },
  { name: "Helmes Péter", img: "", phone: "+36 30 879 0320", email: "", langs: "", text: "" },
  { name: "Bene Miklós", img: "edzo-bene-miklos.jpg", phone: "+36 30 986 6404", email: "bmiq24@gmail.com", langs: "HU, DE, EN", text: "Több mint 20 éve dolgozik a nemzetközi gyermek- és junior teniszben, Magyarországon, Ausztriában, Németországban és Romániában. A technika mellett a mentális felkészítésre, a koncentrációra és a nyomás alatti magabiztosságra is figyel." },
];

/** The reception's reply in 100web. */
export const COACHING = {
  title: "Edzőt keresel? Hívd közvetlenül!",
  text: "Felnőtt teniszoktatásnál az a legjobb, ha közvetlenül az oktatókat keresed fel, az itt feltüntetett elérhetőségeiken.",
};

/** Vasas, Gyermeksport and Táborok pages. */
export const KIDS = {
  title: "Gyerekeknek: a Vasas teniszakadémiája",
  text: "A gyerekek teniszoktatása a Vasas SC-n keresztül zajlik: a Vasas Körmöczy Zsuzsa Teniszakadémia edzői 4 éves kortól a haladó szintig várják őket, hétköznap 15:00 és 18:00 között. A pályák beosztását az edzők végzik, a tanfolyamdíjat a Vasasnál kell befizetni.",
  camp: "Nyáron Vasas Tenisz Tábor a salakos pályákon, az egész nyár folyamán.",
  contact: { name: "Bocskay József", role: "tenisz szakosztályvezető, táborvezető", phone: "+36 30 992 3799", phoneHref: "tel:+36309923799" },
};

/** Edzőterem, Táncterem, Csarnok, Folyondár Café, Rendezvény and Gyermeksport pages. */
export const CENTER = {
  lead: "A teniszen túl: edzőterem, táncterem, csarnok, kávézó és rendezvényhelyszín egy helyen.",
  items: [
    { id: "fitnesz", title: "Edzőterem", img: "fitnesz.jpg", text: "Life Fitness gépcsalád és Cybex Trainer, falra szerelt tévékkel. A személyi edzők funkcionális eszközökkel dolgoznak, jó időben a parkban is. Az első alkalom ingyenes, diákigazolvánnyal kedvezmény jár." },
    { id: "tanc", title: "Táncterem", img: "tancterem.jpg", text: "100 m²-es, napos terem csoportos órákhoz. Gyerekeknek balett és hip-hop, felnőtteknek NIA, jóga, hip-hop és társastánc." },
    { id: "csarnok", title: "Csarnok", img: "csarnok.jpg", text: "1672 m², parkettás csarnok, egyik oldalán 1200 ülőhelyes lelátóval. Hétköznap a Vasas női röplabdacsapatai edzenek itt." },
    { id: "kavezo", title: "Folyondár Café", img: "kavezo.jpg", text: "Helyben készített szendvicsek, ebédmenü, fehérjeturmixok, energiaszeletek és sportitalok. Ingyenes wifi; tavasztól őszig terasz, és lounge terasz a teniszpályákra nézve." },
  ],
  happyHour: "Happy hour a kávézóban: az ebédmenü 18 órától, a szendvicsek 20 órától féláron, a készlet erejéig.",
  trainers: [
    { name: "Kiss Dániel", img: "edzo-kiss-daniel.jpg", role: "Személyi edző · Európa-bajnoki bronzérmes gátfutó, kétszeres olimpikon", phone: "+36 30 864 6510", email: "kissdaniel1982@gmail.com" },
    { name: "Borda-Kerekes Kinga", img: "edzo-borda-kerekes-kinga.jpg", role: "Személyi edző", phone: "", email: "" },
  ],
  sports: "A Vasas tenisz-, aerobik- és röplabda-szakosztálya is itt edz, a Folyondár saját tanfolyamain hip-hop és balett van.",
  events: {
    title: "Rendezvények 10-től 1500 főig",
    text: "Koncertek, versenyek, céges események, szalagavatók és családi napok kül- és beltéri helyszíneken, fény- és hangtechnikával, így a rendezvény nem az időjáráson múlik.",
    refs: ["Porsche Hungária Családi Nap", "Uniqa Karácsony", "Magyar Táncszövetség – Magyar Bajnokság", "Aerobik Magyar Kupa", "Móricz Zsigmond Gimnázium szalagavató", "Ászok a pályán teniszverseny"],
  },
};

export const VISIT = {
  transit: "A Kolosy térig a 86-os, 109-es, 111-es, 160-as, 206-os, 260-as busszal, a 17-es villamossal vagy a szentendrei HÉV-vel; onnan a 165-ös busz visz fel a Folyondárhoz.",
  car: "A Kolosy tér felől a Szépvölgyi úton, az Árpád híd felől a Kiscelli utcán érdemes jönni.",
  walk: "Gyalog 15 perces domboldali séta.",
  parking: "Saját, sorompós parkoló: az első óra 300 Ft, minden további megkezdett 30 perc 140 Ft; 20 percen belül a kihajtás ingyenes.",
};

export const FORM = {
  topics: ["Pályafoglalás", "Bérlet", "Edzőterem", "Rendezvény", "Egyéb"],
};
