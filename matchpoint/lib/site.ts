// Everything both versions show. Sources: matchpoint.hu (Főoldal, Bemutatkozás, Pályabérlés with the
// house rules, Oktatás, Racket Service and Húrozás, Kapcsolat, ÁSZF for the company details, the
// webshop menu) and the club's reply in 100web (3 November 2026: for a racket test Velcz Zsolt calls
// back to agree the racket type and the time).

/** 6500 -> "6 500" with a no-break space, the same on server and client. */
export function fmt(n: number) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const CLUB = {
  name: "Match-Point Tennis Club & Shop",
  short: "Match-Point",
  address: "1022 Budapest, Marczibányi tér 16.",
  district: "Budapest II. kerület, Marczibányi tér",
  phone: "+36 30 581 5030",
  phoneHref: "tel:+36305815030",
  email: "matchpoint@t-online.hu",
  emailHref: "mailto:matchpoint@t-online.hu",
  emailAlt: "info@matchpoint.hu",
  company: "Match-Point Kft.",
  founded: 1996,
  founders: "Velcz Zsolt és Szabadíts Eszter",
  quote: { text: "A teniszező igényeinek metszéspontja…", by: "Maros András" },
  webshop: "https://matchpoint.hu/shop/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Match-Point%20Tennis%20Club%2C%201022%20Budapest%2C%20Marczib%C3%A1nyi%20t%C3%A9r%2016",
  mapsEmbed: "https://maps.google.com/maps?q=1022%20Budapest%2C%20Marczib%C3%A1nyi%20t%C3%A9r%2016&z=16&output=embed",
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "palyak", label: "Pályabérlés" },
  { id: "oktatas", label: "Oktatás" },
  { id: "racket-service", label: "Racket Service" },
  { id: "shop", label: "Shop" },
  { id: "klub", label: "A klub" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

/** The shop's opening hours from the Kapcsolat page (also when rackets can be dropped off and collected). */
export const HOURS = [
  { days: "Hétfő–péntek", time: "8:00–20:00" },
  { days: "Szombat–vasárnap", time: "8:00–19:00" },
];

export const FACILITY = {
  intro: "Két salakpálya, télen sátorral fedve, öltözőkkel és büfével berendezett klubház, kerthelyiség.",
  facts: [
    { value: "2", label: "salakpálya" },
    { value: "télen", label: "sátorral fedve" },
    { value: "1996", label: "óta a Marczibányi téren" },
  ],
  amenities: ["Öltözők", "Büfé", "Kerthelyiség", "Racket Service és shop a klubházban"],
};

/** Pályabérlés page. The latest published seasons; prices for the 2026/27 indoor season aren't published. */
export const COURTS = {
  booking: "Pályát a recepción foglalhatsz telefonon; 5, 10 vagy tetszőleges számú pályabérlés is vásárolható.",
  current: "A 2026/27-es fedett szezon árairól a recepción adnak tájékoztatást.",
  seasons: [
    {
      id: "fedett",
      title: "Fedett szezon",
      dates: "2025. október 6. – 2026. április 12. (27 hét)",
      note: "Sátorral fedett pályák",
      weekday: [
        { time: "6:00–11:00", price: 13000 },
        { time: "11:00–14:00", price: 10000 },
        { time: "14:00–22:00", price: 13000 },
      ],
      weekend: [{ time: "7:00–20:00", price: 10000 }],
    },
    {
      id: "nyitott",
      title: "Nyitott szezon",
      dates: "2026. április 20. – szeptember 27. (23 hét)",
      note: "Szabadtéri salakpályák",
      weekday: [
        { time: "6:00–11:00", price: 6000 },
        { time: "11:00–14:00", price: 5000 },
        { time: "14:00–17:00", price: 6000 },
        { time: "17:00–22:00", price: 6500 },
      ],
      weekend: [{ time: "7:00–20:00", price: 5000 }],
    },
  ],
  rules: [
    { title: "Öltözet", text: "A pályán teniszöltözet (felső és alsó) és teniszcipő (sima talpú) kötelező." },
    { title: "Játékidő", text: "Egy óra foglalásakor 55 perc (az óra 00. percétől 55. percéig), két óránál 1 óra 50 perc, a pálya locsolása miatt." },
    { title: "Lehúzás", text: "Játék után a pályát az ott elhelyezett szőnyeggel vagy kefével kell lehúzni." },
    { title: "Foglalás", text: "Alkalmi foglalást 3 napra előre fogadunk el; ennél korábbra csak előre fizetéssel." },
    { title: "Lemondás", text: "Alkalmi foglalás a játékidő előtt 24 óráig mondható le; később a pálya díját ki kell fizetni. Edzői óránál ugyanez vonatkozik az edzői díjra." },
    { title: "Szezonbérlet", text: "Szezonra bérelt pályánál a 24 órával előre lemondott (szabadtéren az eső miatt elmaradt) órák a szezon végéig pótolhatók; a következő szezonra nem vihetők át." },
    { title: "Fűtés", text: "Fedett szezonban a sátrakat fűtjük, a kazánok legfeljebb 14–16 fokkal tudnak melegebbet tartani a kinti hőmérsékletnél." },
    { title: "Ital, kár", text: "A pályán szeszesital nem fogyasztható; a pályán okozott kárt a recepción jelezni kell." },
  ],
};

export const COACHING = {
  adults: {
    title: "Egyéni oktatás felnőtteknek",
    text: "Egyéni és csoportos oktatás, legfeljebb 2 fővel, képzett edzőkkel. Regisztráció a recepción.",
    price: "12 000–14 000 Ft/óra",
  },
  kids: {
    title: "Gyerek tenisztanfolyamok",
    text: "A tenisziskolában délutánonként 40–50 gyerek ismerkedik a tenisszel, korosztályonként a nekik legmegfelelőbb labdával, ütővel és méretű pályán.",
    groups: [
      { name: "4–6 fős csoport", detail: "heti 1 alkalom", price: 84000 },
      { name: "6–8 fős csoport (minitenisz)", detail: "heti 1 alkalom", price: 84000 },
    ],
    priceNote: "A díj csoportonként 12 edzést tartalmaz.",
    terms: "2026-ban: április 20. – június 12. és augusztus 31. – szeptember 25. (nyári szünet: június 13. – augusztus 30.)",
    next: "A 2026-os tanfolyamok véget értek; az új időpontokról a recepción érdeklődj.",
    extras: ["Teniszütőt igény szerint ingyen biztosítunk.", "Hiányzás esetén csoportonként 4 pótlás, az edzőkkel egyeztetve."],
  },
};

export const SERVICE = {
  name: "Match-Point Racket Service",
  lead: "Velcz Zsolt kezei között készülnek a húrozások, Babolat Sensor Expert Dual gépeken; három gép áll rendelkezésre, így a szerviz bármilyen szintű hazai versenyen el tudja látni az ütőket.",
  why: "A húr a játékkal folyamatosan veszít a tulajdonságaiból, ezért akkor is érdemes időnként cserélni, ha nem szakadt el. A rendszeres szerviz a jobb játékért és az ízületek kíméléséért is fontos.",
  motto: "A munka alapja a precizitás és a pontosság.",
  services: [
    { title: "Húrozás", text: "Tenisz, squash és tollas ütők." },
    { title: "Grip", text: "Alap- és fedőgrip csere." },
    { title: "Nyél átalakítás", text: "Vastagítás ½ vagy 1 mérettel, vékonyítás legfeljebb 1 mérettel." },
    { title: "Persely csere", text: "Sérült persely cseréje egyenként, vagy az egész garnitúra, ha megrendelhető." },
    { title: "Ütő diagnosztika", text: "Súlyozás (2–3 grammos súllyal vagy ólomszalaggal), súlypont-módosítás, ütők összehangolása a Head Diagnostic Centerrel." },
  ],
  matching: [
    "Két vagy több ütő egymáshoz igazítása: a gyárból kikerült azonos típusú ütők súlya grammokkal, súlypontja is eltérhet.",
    "Az ütő testreszabása: súly és súlypont a játékstílushoz igazítva.",
  ],
  prices: [
    { label: "Húrozás hozott húrral", value: "3 500 Ft" },
    { label: "24 órán belüli határidő", value: "+1 000 Ft" },
    { label: "Szombatról vasárnapra", value: "+1 000 Ft" },
  ],
  terms: [
    "Hétköznap 24 órás határidővel vállaljuk.",
    "Húrozás 8:00–18:00 között; rendkívüli esetben a húrozóval egyeztetve.",
    "Leadás és átvétel a klub nyitvatartása alatt; kérjük, jelezd a pontos átvétel idejét.",
  ],
  steps: [
    "Az ütő 6 pontos kitámasztással kerül a gépre, hogy a feje ne deformálódjon.",
    "A fogókat a húr vastagságához állítjuk, hogy a húr ne csússzon és ne sérüljön.",
    "A hosszanti szálakat középről kifelé, felváltva jobbra és balra húzzuk: a keret szimmetrikus terhelést kap.",
    "Az utolsó szélső szál két kilóval keményebb, hogy a csomózás után se lazuljon vissza.",
    "A csomók a gyárilag megadott, kiszélesített lyukakba kerülnek.",
    "A keresztszálakat mindig fentről kezdjük, a gyári start lyuknál.",
    "A keresztszálak egyesével, általában 1 kilóval puhábbak a hosszantiaknál.",
    "A kereszthúrokat lassan húzzuk át, hogy a szálak ne sértsék egymást.",
    "Meghúzás előtt a húrokat egyenesbe igazítjuk, így pontos a beállított keménység.",
    "Kivétel előtt árral párhuzamosra igazítjuk a húrokat.",
  ],
  finish: [
    { title: "Matrica", text: "A húr fajtája, a keménység és a húrozás ideje az ütőn és az adatbázisunkban is." },
    { title: "Fejvédő szalag", text: "Hogy a salak ne kerüljön a gyári műanyag alá." },
    { title: "Új fedőgrip", text: "A szerviz a fedőgrip cseréjével lesz teljes." },
    { title: "A PONT", text: "Zárásként a húrra festjük a logónkat, a pontot." },
    { title: "Saját zacskó", text: "Az ütő a Racket Service logós zacskójában kerül vissza hozzád." },
  ],
  test: {
    title: "Ütőteszt a pályán",
    text: "A leendő ütődet helyben, a pályán is kipróbálhatod Velcz Zsolt segítségével: tenisz szakértelem, ütőismeret és húrozás egy kézben.",
    how: "Hívd a recepciót; Zsolt visszahív, és egyeztetitek az ütő fajtáját és az időpontot.",
  },
};

export const SHOP = {
  intro: "A klubházban működik Magyarország hivatalos Nike Tennis Shopja és a Wilson teniszütő-márkaképviselet: felnőtt- és gyerekütők, táskák, Nike teniszruházat és -cipők.",
  claim: "The Official Nike Tennis Shop of Hungary",
  categories: [
    { title: "Nike férfi kollekció", href: "https://matchpoint.hu/termekkategoria/nike-tenisz-kollekcio/ferfi-kollekcio/" },
    { title: "Nike női kollekció", href: "https://matchpoint.hu/termekkategoria/nike-tenisz-kollekcio/noi-kollekcio/" },
    { title: "Nike gyerek kollekció", href: "https://matchpoint.hu/termekkategoria/nike-tenisz-kollekcio/fiu-gyermek-kollekcio/" },
    { title: "Wilson teniszütők", href: "https://matchpoint.hu/wilson-felnott-teniszutok/" },
    { title: "Junior teniszütők", href: "https://matchpoint.hu/wilson-junior-teniszutok/" },
    { title: "Táskák, tokok", href: "https://matchpoint.hu/wilson-taskak-tokok/" },
    { title: "Húrok, gripek", href: "https://matchpoint.hu/tenisz-kiegeszitok/" },
    { title: "Akciós termékek", href: "https://matchpoint.hu/termekkategoria/akcios-termekek/" },
  ],
};

export const STORY = {
  intro: "A Match-Point Tennis Club 1996-ban nyitott a II. kerületi Marczibányi téren. Alapítói, Velcz Zsolt és felesége, Szabadíts Eszter, versenyzőként kezdték, és célul tűzték ki az utánpótlás és a felnőtt hobbijátékosok oktatását.",
  founders: [
    { name: "Velcz Zsolt", text: "Utánpótlás-válogatott játékos volt; a BSE-ben kezdett, évekig a klub I. osztályú csapatában játszott, külföldön csapatbajnokságokon szerepelt és edzősködött." },
    { name: "Szabadíts Eszter", text: "A Vasasban kezdett, korosztálya legjobbjai közé tartozott; a Testnevelési Egyetemen testnevelő tanári, majd MTSZ „B” licences edzői képesítést szerzett." },
  ],
  both: "Mindketten az USPTR (amerikai profi edzőképzés) legmagasabb diplomáját szerezték meg.",
  milestones: [
    { year: "1996", text: "Megnyílik a klub, és megalakul a Match-Point Tennis Club Sportegyesület; a férfi csapat ettől az évtől játszik." },
    { year: "2012", text: "Play and Stay sportegyesület cím, Play and Stay csapatbajnoki győzelem, és az Év Játékosa is a klub versenyzője." },
    { year: "2013", text: "Papp Sándor irányításával megalakul a Match-Point utánpótlás-nevelő központ a Hill-Point teniszklubban; több magyar bajnokkal és válogatott kerettaggal." },
    { year: "2017", text: "Elindul a Match-Point Next Team, Varga Hunorral kiegészülve; a két edző később a klubtól függetlenül folytatta." },
    { year: "Ma", text: "A férfi csapat sok éve stabil tagja az OB II-es bajnokságnak; játszott benne Markovits László, és ma is játszik Lányi András és Nándori Levente." },
  ],
};

export const FORM = {
  topics: ["Pályabérlés", "Oktatás", "Húrozás", "Ütőteszt", "Shop", "Egyéb"],
};
