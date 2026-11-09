// Everything both versions show. Sources: teniszveszprem.hu (Teniszpálya, Pályafoglalás – Téli
// szezon, Oktatás, Tenisztábor, Téli házibajnokság and its 2026/27 page, Kiemelt versenyek, Egyéb
// versenyek, the 2019 Balluff Kupa and Miklós Gyula Emlékverseny reports, the 2022/23 Piramis post,
// Kapcsolat). The club's reply in 100web only asked when we'd like to come, so it adds no facts.

export const CLUB = {
  name: "Tenisziskola Veszprém Sportegyesület",
  short: "TVSE",
  venue: "Jutasi úti Sportcentrum",
  address: "8200 Veszprém, Jutasi út 18.",
  email: "teniszveszprem@gmail.com",
  emailHref: "mailto:teniszveszprem@gmail.com",
  /** Court booking (Kapcsolat: "Lázár Ottó (teniszpálya foglalás)"); the shared form and the main CTA use this. */
  phone: "+36 20 410 4910",
  phoneHref: "tel:+36204104910",
  phone2: "+36 70 365 0609",
  phone2Href: "tel:+36703650609",
  booking: "https://teniszveszprem.hu/palyafoglalas/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jutasi%20%C3%BAti%20Sportcentrum%2C%208200%20Veszpr%C3%A9m%2C%20Jutasi%20%C3%BAt%2018",
  mapsEmbed: "https://maps.google.com/maps?q=8200%20Veszpr%C3%A9m%2C%20Jutasi%20%C3%BAt%2018&z=16&output=embed",
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "palyak", label: "Pályák" },
  { id: "foglalas", label: "Foglalás" },
  { id: "edzok", label: "Edzők" },
  { id: "tabor", label: "Tenisztábor" },
  { id: "versenyek", label: "Versenyek" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export const VENUE = {
  intro:
    "A TVSE a veszprémi Jutasi úti Sportcentrum teniszpályáin tartja a versenyeket, a házibajnokságot és a tenisztábort, és itt van lehetőség egyéni és csoportos edzésre is, minden korosztálynak.",
  facts: [
    { value: "7", label: "salakos pálya" },
    { value: "3", label: "sátras pálya télen" },
    { value: "7–21", label: "órás nyitvatartás" },
  ],
  seasons: [
    { name: "Nyári szezon", when: "Április – október", text: "Hét szabadtéri salakpálya." },
    { name: "Téli szezon", when: "Október – április, időjárás függvényében", text: "Három salakpálya sátorral fedve." },
  ],
  hours: "Nyitvatartás: 7:00–21:00 (a pontos nyitvatartásért érdeklődj telefonon).",
  extras: ["Ingyenes parkolás a pálya melletti murvás parkolókban", "A klubház használata"],
};

/** Pályafoglalás – Téli szezon page. Prices aren't published; payment is on site. */
export const BOOKING = {
  online:
    "Válaszd ki a napot, kattints egy szabad pályán a kezdési időpontra, add meg a befejezést és az adataidat, majd foglalj. A foglalásról visszaigazoló e-mailt küldünk; fizetés a helyszínen.",
  phone: "Telefonon is foglalhatsz.",
  rules: [
    { title: "Legalább 1 órával előre", text: "A foglalási igényt legkésőbb 1 órával korábban kell jelezni; a rendszerben is csak ezek az időpontok érhetők el." },
    { title: "1, 1,5 vagy 2 óra", text: "A választható játékidő 1, 1,5 (főleg a napszak elején és végén) vagy 2 óra." },
    { title: "Kapcsolódó időpont", text: "A sátor nyitvatartása a foglalásokhoz igazodik, ezért olyan időpontot válassz, amikor már foglalt egy másik pálya, vagy közvetlenül előtte vagy utána van foglalás." },
    { title: "Csak valós foglalást", text: "Online foglalásnál a pálya azonnal foglalttá válik; kérjük, csak valós igényt rögzíts, és add meg a telefonszámod a változások miatt." },
  ],
  outdoor: "Az átmeneti őszi időszakban, amíg az időjárás engedi, a kinti salakos pályák is foglalhatók, a nyári díjszabás szerint.",
  discount: {
    title: "Kedvezményes sátras ár, fűtés nélkül",
    slots: [
      { days: "Kedd, csütörtök, péntek", time: "délután 14:00-ig" },
      { days: "Szombat", time: "16:00-tól" },
      { days: "Vasárnap", time: "13:00-tól" },
    ],
  },
  prices: "A pályadíjakról telefonon adunk tájékoztatást.",
};

export const COACHES = {
  intro: "A TVSE edzői a Jutasi úti pályákon tartják edzéseiket nyáron és télen is.",
  list: [
    {
      name: "Lázár Ottó",
      bio: "A Magyar Tenisz Szövetség „B” licences edzője. Többszörös korosztályos magyar bajnok, Európa-bajnok, felnőtt magyar bajnok csapattag.",
      phone: "+36 20 410 4910",
      phoneHref: "tel:+36204104910",
      web: "https://www.tenisz-oktatas.hu",
      webLabel: "tenisz-oktatas.hu",
      photo: "/img/lazar-otto.jpg",
    },
    { name: "Mészáros Csaba", bio: "", phone: "+36 70 365 0609", phoneHref: "tel:+36703650609", web: "", webLabel: "", photo: "" },
    { name: "Miskolczi Norbert", bio: "", phone: "+36 20 502 5828", phoneHref: "tel:+36205025828", web: "", webLabel: "", photo: "/img/miskolczi-norbert.jpg" },
  ],
};

export const CAMP = {
  intro: "A Tenisziskola Veszprém SE minden nyáron tenisztábort szervez; a hagyományosan augusztusi főturnust úgy alakítottuk ki, hogy kicsik és nagyok is jól érezzék magukat.",
  beginners: "A kezdők megismerik a tenisz alapjait, megszeretik a sportot, és aktívan töltik a nyári szünetet.",
  advanced: "A haladók teniszpartnereket ismernek meg, stabilizálják tudásukat, és hosszabban lehetnek együtt a társaikkal.",
  day: "Naponta 2–3 óra tenisz délelőtt és ebéd után; a szabadidőben társasjátékok, foci, lengőteke.",
  included: ["Labda", "Ütő", "Ebéd"],
  contact: "+36 20 410 4910",
  contactHref: "tel:+36204104910",
};

export const EVENTS = {
  league: {
    title: "Téli házibajnokság",
    text: "Télen hétvégente a 3 fedett pályán: a Veszprém környéki teniszezők barátságos bajnokságban, a játékerejükhöz illő csoportokban mérhetik össze magukat.",
    next: "A 2026/2027-es szezonról hamarosan bővebb információ.",
    contacts: [
      { name: "Mészáros Csaba", phone: "+36 70 365 0609", phoneHref: "tel:+36703650609" },
      { name: "Göndör József", phone: "+36 30 989 9291", phoneHref: "tel:+36309899291" },
    ],
  },
  piramis: "A 2022/23-as télen a házibajnokság helyett „Piramis” teniszversenyt rendeztünk, több mint 70 nevezéssel.",
  highlights: [
    {
      year: "2019",
      title: "Balluff Kupa",
      text: "A 14 éves múltú verseny augusztusban, 48 nevezéssel, F1 (400 000 Ft) és F2 (100 000 Ft) kategóriában. F1 győztes: Hornung Iván (BBTC).",
    },
    {
      year: "2019",
      title: "Miklós Gyula Emlékverseny",
      text: "Első alkalommal, júniusban; F1-ben 36, F2-ben 22 induló, az év egyik legnagyobb összdíjazású hazai versenye. A győztesek herendi kupákat is kaptak.",
    },
  ],
  amateur: [
    "Egyéni és páros férfi/női nyílt teniszversenyek (2021)",
    "Idényzáró amatőr páros teniszverseny (2019)",
    "Téli idényzáró amatőr egyéni és páros kupa (2019)",
  ],
};

export const FORM = {
  topics: ["Pályafoglalás", "Edzés", "Tenisztábor", "Házibajnokság", "Egyéb"],
};
