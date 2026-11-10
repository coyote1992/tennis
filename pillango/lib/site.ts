// Everything both versions show. Sources: pillangotenisz.hu (Kezdőoldal, Edzőink, Gyerek és Felnőtt
// teniszoktatás, Pályát foglalok with the summer and winter price lists, Versenyzés, KSI Tenisz, Nyári
// gyerektábor, Jelentkezés, Kapcsolat, Galériák), the club's reply in 100web (3 November 2026: a beginner
// who comes alone can join the adult beginner group, Mondays 19–20, 5000 Ft/óra, by phoning the coach),
// the 2023 club interview with Monostori Tamás on huntennis.hu (the winter tent; the national titles) and
// the club's GyereSportolni page (Monostori Tamás's direct number).

/** 29000 -> "29 000" with a no-break space, the same on server and client. */
export function fmt(n: number) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const CLUB = {
  name: "Pillangó Tenisz Klub",
  short: "Pillangó TK",
  place: "Budapest, Zugló",
  address: "1149 Budapest, Pillangó Park",
  founded: 2010,
  contact: "Recepció",
  phone: "+36 30 754 8010",
  phoneHref: "tel:+36307548010",
  email: "info@pillangotenisz.hu",
  emailHref: "mailto:info@pillangotenisz.hu",
  booking: "https://hella.pillangotenisz.hu/Customer/User",
  signup: "https://pillangotenisz.hu/hu/jelentkezes.html",
  facebook: "https://www.facebook.com/pillangotenisz",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pillang%C3%B3%20Tenisz%20Klub%20Budapest",
  mapsEmbed: "https://maps.google.com/maps?q=Pillang%C3%B3%20Tenisz%20Klub%2C%20Budapest&z=16&output=embed",
  headCoach: { name: "Monostori Tamás", role: "vezetőedző", phone: "+36 30 280 6179", phoneHref: "tel:+36302806179", email: "tamas@pillangotenisz.hu" },
  camp: { email: "tabor@pillangotenisz.hu", emailHref: "mailto:tabor@pillangotenisz.hu" },
  szep: "SZÉP-kártya (OTP, K&H, MKB)",
  company: "Adószám: 13784641242 · Cégjegyzékszám: 01-09-873042",
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "gyerekeknek", label: "Gyerekeknek", short: "Gyerekek" },
  { id: "felnotteknek", label: "Felnőtteknek", short: "Felnőttek" },
  { id: "palyak", label: "Pályák és árak", short: "Pályák" },
  { id: "verseny", label: "Versenyzés", short: "Verseny" },
  { id: "tabor", label: "Nyári tábor", short: "Tábor" },
  { id: "edzok", label: "Edzők", short: "Edzők" },
  { id: "kapcsolat", label: "Kapcsolat", short: "Kapcsolat" },
];

export const INTRO = {
  title: "Nálunk mindenki teniszezhet",
  lead: "Teniszklub Zuglóban, a Pillangó Parkban, 2010 óta: tenisziskola óvodás kortól, edzések kezdő és haladó felnőtteknek, négy salakpálya és egy keménypálya, és út a versenyzés felé a KSI teniszszakosztályaként.",
  community: "A Pillangó nem csak egy teniszpálya, hanem egy aktív közösség, ahol a sport, az együtt töltött idő és a fejlődés egyaránt fontos.",
};

/** The four ways in, from the club's home page. */
export const PATHS = [
  { id: "gyerekeknek", title: "A gyerekem teniszezne", text: "Play and Stay módszerrel, játékosan: a kezdő szinttől egészen a versenyzésig." },
  { id: "felnotteknek", title: "Teniszezni szeretnék", text: "Edzések kezdőknek és haladóknak, egyénileg, párban vagy 4–6 fős csoportban." },
  { id: "palyak", title: "Pályát bérelnék", text: "Négy salakpálya és egy keménypálya, online vagy telefonos foglalással." },
  { id: "verseny", title: "Versenyeznénk", text: "2026-tól a KSI teniszszakosztályaként: tudatosan felépített út a versenyzés felé." },
];

export const STATS = [
  { value: "15+", label: "év szakmai tapasztalat" },
  { value: "~300", label: "gyerek évente" },
  { value: "3", label: "országos bajnoki cím" },
  { value: "245", label: "pozitív Google-értékelés" },
];

/** Gyerek teniszoktatás (tenisz suli). */
export const KIDS = {
  lead: "A Play and Stay módszerrel óvodás kortól a korosztályos válogatott szintig. A gyerekek a koruknak és képességeiknek megfelelő labdával, pályán és ütővel tanulnak teniszezni, fejlődésüket pontgyűjtő füzetben követik.",
  schedule: {
    perWeek: "Heti 2 × 1 óra, csoportban",
    days: ["Hétfő–szerda", "Kedd–csütörtök"],
    starts: ["15:00", "16:00", "17:00", "18:00"],
    note: "Az edzések idejére a gyerekek a koruknak megfelelő teniszütőt kapnak.",
  },
  price: { amount: 29000, per: "4 hét", includes: ["8 edzés", "edzői oktatás", "teniszütő és labda használata"], note: "Az edzések 4 hetes turnusokban zajlanak. Hiányzás esetén az edzések pótolhatók más csoportokban." },
  method: "Az oktatás a nemzetközileg elismert Play & Stay módszerre épül, így a gyerekeknek már az első edzésektől sikerélményük van. Ehhez a spanyol RPT metodika elemeit és a hazai szakmai képzések tapasztalatait is beépítik.",
  levels: [
    { name: "Piros", color: "#e2453c" },
    { name: "Narancs", color: "#f08a24" },
    { name: "Zöld", color: "#7bc043" },
    { name: "Kemény labda", color: "#e4ec4f" },
  ],
  levelsNote: "Négy tudásszinten, saját tempójukban fejlődnek, és ezt a pontgyűjtő füzetben követik.",
  steps: [
    { title: "Első lépések", text: "A kezdők játékos feladatokon keresztül ismerkednek a tenisz alapjaival és a pályán való mozgással." },
    { title: "Alapütések és játékszituációk", text: "A rendszeresen edzők megtanulják az alapütéseket és a pontjáték alapjait, és ki is próbálják a házi versenyeken." },
    { title: "A versenyzés lehetősége", text: "A tehetséges és szorgalmas gyerekeknek külön versenyzői csoport indul, több edzéssel." },
  ],
  year: { title: "Tenisz suli, 2026/27-es tanév", started: "A tanév 2026. szeptember 14-én indult.", signup: "Jelentkezni a klub online jelentkezési lapján lehet; kérdés esetén hívd a recepciót." },
  schools: "Iskolai programjuk révén minden évben több száz gyerek találkozik itt először a tenisszel, a mindennapos testnevelés keretében.",
};

/** Felnőtt teniszoktatás, plus the club's 100web reply about joining the beginner group alone. */
export const ADULTS = {
  lead: "Kezdőknek és haladóknak. Ha most ismerkedsz a sporttal, az alapokat tanulod meg; ha már játszol, az edzők a technikádon és a meccsjátékodon dolgoznak veled.",
  formats: [
    { title: "Egyéni edzés", text: "Az edző teljes figyelme rád irányul. Ideális, ha gyorsan fejlődnél, vagy egy technikai elemre koncentrálnál.", price: "Az árról az edzőknél érdeklődj." },
    { title: "Páros edzés", text: "Két hasonló szintű játékos közös edzése, játékosabb formában; az edző mindkettőtök fejlődését segíti.", price: "Az árról az edzőknél érdeklődj." },
    { title: "Csoportos edzés", text: "4–6 fős csoport, ahol technikát és játékszituációkat gyakoroltok. Jó hangulat, jó társaság, és kicsit mindenki újra gyerek lehet.", price: "5 000 Ft / fő / alkalom" },
  ],
  groupNote: "2026–27 téli ár. Benne van a pályadíj, az oktatás, az ütő és a labda. Ha egy csoportos edzésen csak 1 vagy 2 fő jelenik meg, az edzés egyéni vagy páros edzésnek minősül.",
  beginner: {
    title: "Egyedül, kezdőként is jöhetsz",
    text: "Nem kell kezdőcsoport indulására várnod: be tudsz kapcsolódni a felnőtt kezdő csoportba.",
    when: "Hétfőnként 19:00–20:00",
    price: "5 000 Ft / óra",
    how: "Jelentkezés telefonon, az edzőnél.",
  },
  team: "Szülők és hobbijátékosok a budapesti III. osztályú csapatbajnokságban is játszanak, a PILLANGÓS PROfesszorok csapatában.",
};

export type Season = "nyar" | "tel";
export type PriceKind = "alkalmi" | "tizes" | "szezon";

/** Pályát foglalok page: both price lists, as published. */
export const COURTS = {
  lead: "Négy salakos és egy keménypálya, online vagy telefonos foglalással. A klubban öltöző és zuhanyzó van, a pályák mellett terasz és büfé, autóval érkezőknek parkoló.",
  facts: [
    { value: "4", label: "salakpálya" },
    { value: "1", label: "keménypálya (rekortán)" },
  ],
  winter: "Télen sátor alatt játszol: a téli árak október elejétől április közepéig érvényesek.",
  info: [
    { title: "Foglalás", text: "Online rendszerben vagy telefonon." },
    { title: "Felszerelés", text: "Ütőt és labdát is tudsz kölcsönözni." },
    { title: "Fizetés", text: "Készpénz, átutalás vagy SZÉP-kártya (OTP, K&H, MKB)." },
  ],
  kinds: [
    { id: "alkalmi" as PriceKind, label: "Alkalmi", unit: "Ft / óra", note: "Egy alkalomra." },
    { id: "tizes" as PriceKind, label: "10 alkalmas bérlet", unit: "Ft / 10 óra", note: "Tíz alkalom egy áron." },
    { id: "szezon" as PriceKind, label: "Szezonbérlet", unit: "Ft / óra", note: "Fix heti időpont az egész szezonra, óradíjjal." },
  ],
  seasons: {
    nyar: {
      label: "Nyár",
      range: "2026. április 20. – október 4.",
      slots: ["H–P 6:00–10:00", "H–P 10:00–15:00", "H–P 15:00–22:00", "Sz–V 6:00–22:00"],
      prices: { alkalmi: [4000, 4000, 5000, 4000], tizes: [36000, 30000, 45000, 30000], szezon: [3500, 2800, 4300, 2800] },
      extras: ["Világítás: 1 200 Ft/óra", "Ütő + labda: 1 000 Ft/óra", "Rekortán pálya: 5 000 Ft/óra, hétvégén 4 000 Ft/óra"],
    },
    tel: {
      label: "Tél",
      range: "2026. október 5. – 2027. április 17.",
      slots: ["H–P 7:00–10:00", "H–P 10:00–15:00", "H–P 15:00–22:00", "Sz–V 7:00–22:00"],
      prices: { alkalmi: [8000, 7500, 10000, 7500], tizes: [75000, 70000, 95000, 70000], szezon: [7000, 6500, 9000, 6500] },
      extras: [] as string[],
    },
  },
  current: "tel" as Season,
};

/** Versenyzés + KSI Tenisz pages, the Büszkeségeink list and the 2023 interview. */
export const COMPETE = {
  ksi: {
    title: "2026-tól a KSI teniszszakosztálya",
    text: "A Pillangó Tenisz a KSI részeként, annak teniszszakosztályaként folytatja működését. A sportiskolai háttér a versenyzői fejlődés több területét támogatja: sportorvosi háttér, sportpszichológiai szemlélet, sportlétesítmények és egyesületi infrastruktúra.",
    quote: "Ez nem azt jelenti, hogy minden gyermekből élsportolót szeretnénk nevelni. Azt viszont igen, hogy akikben ott van a versenyzői motiváció, azok számára világosabb utat, stabilabb hátteret és több fejlődési lehetőséget biztosítsunk.",
  },
  path: [
    { n: 1, title: "Háziversenyek", text: "Évente három, a tanfolyamokra járó gyerekeknek: a játék öröme, sikerélmény, versenyrutin ismerős környezetben.", items: ["Mikulás Kupa", "Nyuszi Kupa", "Évzáró Kupa"] },
    { n: 2, title: "Versenyzői képzés", text: "Tehetséges, motivált gyerekeknek: technika és taktika mellett erőnlét, mérkőzéshelyzetek és mentális felkészülés.", items: [] as string[] },
    { n: 3, title: "Amatőr gyermekversenyek", text: "Az első külső megmérettetések, más klubok játékosaival. Családias hangulat, rövid lebonyolítás; általában elég az előzetes regisztráció.", items: ["teniszvetelkedo.hu", "teniszkereso.hu"] },
    { n: 4, title: "MTSZ korosztályos versenyek", text: "A Magyar Tenisz Szövetség hivatalos versenyrendszere. Kell hozzá egyesületi igazolás, regisztráció az MTSZ versenyzői rendszerében és érvényes sportorvosi engedély.", items: [] as string[] },
  ],
  training: [
    { ages: "6–8 év", plan: ["Heti 2 × 1,5 óra csoportos edzés", "Egyéni edzési lehetőség"] },
    { ages: "9–16 év", plan: ["Heti 2 × 2 óra csoportos edzés", "Heti 2 × 1 óra tornatermi erőnléti edzés", "Heti 1 × 1,5 óra páros edzés", "Igény szerint egyéni edzések"] },
  ],
  /** MTSZ categories by age, as on the Versenyzés page. */
  categories: [
    { ages: "7–8 évesek", from: 7, to: 8, ball: "Piros labda", color: "#e2453c", cat: "L8, F8" },
    { ages: "9–10 évesek", from: 9, to: 10, ball: "Narancssárga labda", color: "#f08a24", cat: "L10, F10" },
    { ages: "10–11 évesek", from: 10, to: 11, ball: "Zöld labda", color: "#7bc043", cat: "L11, F11" },
    { ages: "12 éves kortól", from: 12, to: 18, ball: "Normál teniszlabda", color: "#e4ec4f", cat: "L12, F12 és további korosztályok" },
  ],
  contact: "Ha a gyereked motivált, és kipróbálná magát a versenyzésben, beszéljétek át Monostori Tamás vezetőedzővel, merre érdemes továbblépni.",
  pride: "A Pillangó 2010-es megalakulása óta 6 korosztályos és 2 speciális olimpiai válogatottat nevelt ki.",
  titles: [
    { year: "2018", text: "Országos bajnok F12-es csapat, Zsembery Andrással és Mező Marcellel" },
    { year: "2019", text: "Országos bajnok L14-es csapat, Eperjesi Katával és Kuti Alízzal" },
    { year: "2021", text: "Egyéni országos bajnokság F12-ben: Kiss Domonkos" },
  ],
  players: [
    { name: "Sárosi Balázs", img: "jatekos-sarosi-balazs.jpg", text: "Speciális olimpiai válogatott kerettag. 2016: Európa-bajnoki ezüst; 2019, Abu-Dzabi világjátékok: egyéni aranyérem." },
    { name: "Kelemen Zsombor", img: "jatekos-kelemen-zsombor.jpg", text: "Speciális olimpiai válogatott kerettag. 2019, Abu-Dzabi világjátékok: egyéni ezüstérem." },
    { name: "Makk Péter", img: "jatekos-makk-peter.jpg", text: "2010 és 2012 között a Pillangó versenyzője; többszörös országos korosztályos bajnok, a junior válogatott tagja. 2017-ben az ITF ETC Cup és a Zilina Open győztese (U18)." },
    { name: "Kiss Domonkos", img: "jatekos-kiss-domonkos.jpg", text: "F12-es országos és Budapest-bajnok." },
    { name: "Zsembery András", img: "jatekos-zsembery-andras.jpg", text: "F12-es válogatott kerettag. A 2018-as fedett pályás országos bajnokságon egyéniben 2., párosban 1. helyezett." },
    { name: "Eperjesi Kata", img: "jatekos-eperjesi-kata.jpg", text: "L12-es és L14-es válogatott kerettag. 2017-ben az országos bajnokságon L12-es csapatban 2., egyéniben 3. helyezett." },
    { name: "Kuti Alíz", img: "jatekos-kuti-aliz.jpg", text: "Országos 2. helyezett L12-es csapatban (2017), 2018-ban L14-es válogatott kerettag." },
    { name: "Győri Dorka", img: "jatekos-gyori-dorka.jpg", text: "2014 és 2017 között a Pillangó versenyzője, L12-es válogatott kerettag." },
    { name: "Kaminszka Gabriella", img: "jatekos-kaminszka-gabriella.jpg", text: "2020 és 2023 között a Pillangó versenyzője, korosztályos válogatott." },
  ],
};

/** Nyári gyerektábor page. */
export const CAMP = {
  lead: "Napközis tenisztábor sportos, élményekkel teli hetekkel, biztonságos és barátságos környezetben. Kezdőknek és haladóknak is.",
  facts: [
    { label: "Korosztály", value: "6–18 év" },
    { label: "Időpont", value: "Hétfőtől péntekig, 8:00–16:00" },
    { label: "Étkezés", value: "Napi kétszer; az ebéd az Éjjeli Bagoly étkezdéjében" },
  ],
  day: [
    "Naponta két, egyenként 1,5 órás teniszfoglalkozás",
    "Labdás ügyességfejlesztő és játékos kondicionáló feladatok, például a Pillangó Olimpia, öt versenyszámmal",
    "Kosárlabda, foci, csocsó, pingpong, számháború, vízi és más nyári programok",
    "A hét végén korosztályos teniszverseny; a kisebbeknek vizes ugrálóvár, igény esetén lézerharc",
  ],
  price: { week: 65000, day: 16000, includes: "Az ár tartalmazza a teniszoktatást, a sportprogramokat, a felszerelést, a napi két étkezést és a versenyek díjazását." },
};

/** Edzőink page, in the club's order. Phones and e-mails as published there. */
export const COACHES = [
  { name: "Monostori Tamás", role: "Vezetőedző", langs: "HU, EN", img: "edzo-monostori-tamas.jpg", phone: "+36 30 280 6179", email: "tamas@pillangotenisz.hu", text: "Célom egy olyan rendszer kiépítése, ahol a tehetséges gyerekek kitűnhetnek, szorgalmukkal továbbléphetnek, és akár nemzetközi sikereket érhetnek el ebben a sportágban." },
  { name: "Mogyorós Attila", role: "Edző", langs: "", img: "edzo-mogyoros-attila.jpg", phone: "+36 70 350 6004", email: "", text: "Célul tűztem ki, hogy megfelelő szakmai felkészültséggel a sportág iránti lelkesedésemet hitelesen és megalapozottan adjam át a belépő szintű játékosoknak." },
  { name: "Horváth Péter", role: "Edző", langs: "", img: "edzo-horvath-peter.jpg", phone: "+36 30 417 9895", email: "", text: "10 éves korom óta teniszezem. A TF-en tenisz edzői oklevelet szereztem, és jelenleg az MLTC OB II-es csapatában játszom." },
  { name: "Tanka Timon Bálint", role: "Edző", langs: "", img: "edzo-tanka-timon.jpg", phone: "+36 50 134 7343", email: "tankatimo@gmail.com", text: "Legfőbb célom, hogy az elmúlt évek során megszerzett sportági és versenyzői tapasztalataimat átadjam az embereknek, egészen pici kortól az idősebb korosztályig." },
  { name: "Kis Izabella", role: "Oktató", langs: "", img: "edzo-kis-izabella.jpg", phone: "", email: "", text: "Fontos számomra, hogy a gyerekek már az első pillanattól megszeressék a sportot, mert hiszem, hogy a sport szeretete hosszú távon elköteleződést és kitartást alakít ki bennük." },
  { name: "Kuti Alíz", role: "Oktató", langs: "", img: "edzo-kuti-aliz.jpg", phone: "+36 30 491 9866", email: "", text: "13 éve a tenisz az életem része, ebből 8 évet versenyzőként töltöttem. Most az a célom, hogy másokat is segítsek a saját céljaik elérésében." },
  { name: "Eperjesi Kata", role: "Oktató", langs: "HU, EN", img: "edzo-eperjesi-kata.jpg", phone: "+36 70 649 0821", email: "", text: "Gyerekként a Pillangón kezdtem el teniszezni, és itt alakult ki bennem a sport iránti szenvedély. Célom, hogy gyerekeknek és felnőtteknek egyaránt élménnyé tegyem a teniszt." },
  { name: "Tóth Csongor", role: "Oktató", langs: "", img: "edzo-toth-csongor.jpg", phone: "+36 70 288 7552", email: "tothcsongi07@gmail.com", text: "7 éves korom óta teniszezem. Edzőként célom, hogy támogató, fejlődésközpontú szemlélettel segítsem a gyerekek fejlődését." },
  { name: "Varga Nóra", role: "Oktató", langs: "HU, EN", img: "edzo-varga-nora.jpg", phone: "+36 30 596 6658", email: "varganori2001@gmail.com", text: "" },
  { name: "Zeisler Máté", role: "Oktató", langs: "HU, EN", img: "edzo-zeisler-mate.jpg", phone: "+36 30 389 2219", email: "mate.zeisler@gmail.com", text: "8 éves korom óta teniszezem. Edzőként célom, hogy a teniszt élvezetesen, mégis hatékonyan tanítsam, egészen kicsiktől a felnőttekig." },
  { name: "Galvin Nicholas", role: "Oktató", langs: "HU, EN, RU", img: "edzo-galvin-nicholas.jpg", phone: "+36 30 250 3060", email: "nicholasgalvin027@gmail.com", text: "" },
];

export const FORM = {
  topics: ["Tenisz suli", "Felnőtt edzés", "Pályafoglalás", "Versenyzés", "Nyári tábor", "Egyéb"],
};
