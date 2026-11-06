// Everything both versions show. Sources: pgtenisz.hu (Egyesület, Edzőink, Játékosaink, Csapataink,
// Programok, Eredmények: hazai, nemzetközi, csapatbajnokság; Támogatóink, Adó 1%, Kapcsolat) and
// Punyi Gábor's email reply in 100web: court rental at the Kőér Tenisz Klub on +36 70 313 1032,
// training enquiries on +36 30 977 4366. Nothing about the venue's courts is published, so the site
// doesn't describe them.

export const CLUB = {
  name: "PG Tenisz",
  full: "PG Tenisz és Sport Club Egyesület",
  founded: "2019",
  motto: "A sport maga az élet. Mindenre megtanít.",
  venue: "Kőér Tenisz Klub",
  venueAddress: "1103 Budapest, Kőér u. 2/b",
  coachPhone: "+36 30 977 4366",
  coachPhoneHref: "tel:+36309774366",
  coachName: "Punyi Gábor",
  courtPhone: "+36 70 313 1032",
  courtPhoneHref: "tel:+36703131032",
  email: "pgtenisz@gmail.com",
  emailHref: "mailto:pgtenisz@gmail.com",
  facebook: "https://www.facebook.com/PGTenisz",
  instagram: "https://www.instagram.com/pgtenisz/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=K%C5%91%C3%A9r%20Tenisz%20Klub%2C%201103%20Budapest%2C%20K%C5%91%C3%A9r%20u.%202%2Fb",
  mapsEmbed: "https://maps.google.com/maps?q=1103%20Budapest%2C%20K%C5%91%C3%A9r%20u.%202%2Fb&z=16&output=embed",
  seat: "1204 Budapest, Komárom utca 53.",
  taxNumber: "19181503-1-43",
  register: "01-02-0017265",
  bank: "CIB Bank Zrt. · 10700024-71753629-51100005",
  leaders: ["Punyi Gábor", "Punyiné Bácsics Krisztina", "Csendes Zsolt"],
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "egyesulet", label: "Egyesület" },
  { id: "edzok", label: "Edzők" },
  { id: "csapatok", label: "Csapatok" },
  { id: "eredmenyek", label: "Eredmények" },
  { id: "programok", label: "Programok" },
  { id: "jelentkezes", label: "Jelentkezés" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

/** Player numbers are counted from the club's own "Játékosaink" list. */
export const FACTS = [
  { num: "2019", label: "óta egyesület" },
  { num: "70", label: "játékos, Play & Stay-től a felnőttekig" },
  { num: "4", label: "felnőtt csapat a 2026-os csapatbajnokságban" },
  { num: "5", label: "edző és erőnléti edző" },
];

export const SQUADS = [
  { name: "Felnőttek", count: 22 },
  { name: "U18", count: 11 },
  { name: "U16", count: 3 },
  { name: "U14", count: 18 },
  { name: "U12", count: 9 },
  { name: "Play & Stay", count: 7 },
];

export const STORY = [
  "Egyesületünket 2019-ben alapítottuk, hogy minden hozzánk forduló, a teniszezéssel komolyabban foglalkozni kívánó gyereknek és felnőttnek megfelelő szintű edzést és versenylehetőséget biztosítsunk, és hogy a hazai teniszéletben is meghatározó klubbá váljunk.",
  "Fontos az eredményesség, de van, ami még ennél is többet nyom a latba: egy összetartó közösség, amelyben mindenki megtalálja a helyét. Nem csak sportolókat, hanem felelősen gondolkodó, kiegyensúlyozott és sikeres embereket is nevelünk.",
  "Az utánpótlás-nevelésben bármelyik életkorban bizalommal fordulhatnak hozzánk a szülők: akkor is, ha versenyzőt nevelnének a gyerekükből, és akkor is, ha „csak” az egészsége miatt döntenek a sport mellett.",
];

export const GOALS = [
  { title: "Fejlődés", text: "A legmagasabb hazai és nemzetközi elvárásoknak is megfelelő oktatás a játékosainknak." },
  { title: "Közösség", text: "Összetartó csapat, amelyben mindenki ki tudja bontakoztatni a benne rejlő értékeket." },
  { title: "Tenisz mindenkinek", text: "A tenisz népszerűsítése, elsősorban a magyar ifjúság körében." },
];

export type Coach = { name: string; role: string; img: string; quals: string[]; career: string[]; note?: string };
export const COACHES: Coach[] = [
  {
    name: "Punyi Gábor",
    role: "Elnök, vezetőedző",
    img: "/img/punyi-gabor.jpg",
    quals: ["Tenisz szakedző (SE TF, 2002)", "MTSZ „A” licensz (2006)", "GPTCA „C” licensz (2017)", "ITF Coaching „C” licensz (2019)"],
    career: [
      "Magyar Tenisz Szövetség női utánpótlás-válogatott, másodedző (1995–1997)",
      "Vezetőedző az IDOM Team 2000 és a Top Sport TSE csapatainál, saját team az Építők TK-ban és az Ábris 2010 TSE-ben",
      "Dunakeszi TK, utánpótlás-koordinátor (2017–2019)",
      "MTSZ Versenysport és Utánpótlás Bizottság (2019–2024), Edzőképző Bizottság (2024-től)",
    ],
    note: "Számos tanítványa nyert országos és Budapest-bajnoki címet, többen WTA-, illetve ATP-játékosok lettek.",
  },
  {
    name: "Punyiné Bácsics Krisztina",
    role: "Erőnléti edző",
    img: "/img/punyine-bacsics-krisztina.jpg",
    quals: ["Testnevelő tanár (TF, 1997)", "Úszóedző (TF)", "Gyógytornász (SE, 2007)"],
    career: ["Erőnléti edző 2005 óta: IDOM Team 2000, Top Sport TSE, Ábris 2010 TSE, Dunakeszi TK, 2019-től a PG Teniszben"],
    note: "Korosztályos és felnőtt válogatott, magyar bajnok vitorlázó; az 1992-es barcelonai olimpián 19. lett Europe jolle hajóosztályban.",
  },
  {
    name: "Csendes Zsolt",
    role: "Teniszedző",
    img: "/img/csendes-zsolt.jpg",
    quals: ["Teniszedző (OKJ, 2019)", "MTSZ „C” licensz (2024)"],
    career: ["2019 óta a PG Tenisz edzője"],
    note: "Serdülő kortól NB I-ig röplabdázott; teniszben csapatbajnoki címet nyert a Budapest I. osztályban és az OB III-ban.",
  },
  {
    name: "Punyi Patrik",
    role: "Erőnléti edző",
    img: "/img/punyi-patrik.jpg",
    quals: ["Testnevelő, gyógytestnevelő, egészségfejlesztő tanár (TF)", "Kézilabda szakedző (TF)", "Tenisz sportoktató (OKJ, 2024)"],
    career: ["2024 óta a PG Tenisz erőnléti edzője"],
  },
  {
    name: "Gráf Bence Mátyás",
    role: "Teniszedző",
    img: "/img/graf-bence.jpg",
    quals: ["Teniszedző (OKJ, 2024)", "MTSZ „D” licensz (2025)"],
    career: ["2025 óta a PG Tenisz edzője"],
  },
];

export type Team = { name: string; result: string; history: string[] };
/** MTSZ team championships (Csapataink, Csapatbajnokság). */
export const TEAMS: Team[] = [
  { name: "Férfi Szuperliga", result: "IV. hely", history: ["2023: IV. hely", "2024: III. hely", "2025: VI. hely"] },
  { name: "Női I. osztály", result: "A csoport, II. hely", history: ["2023: II. hely", "2024: I. hely", "2025: Női Szuperliga, VI. hely"] },
  { name: "Férfi II. osztály", result: "A csoport, II. hely", history: ["2024: II. hely", "2025: D csoport, II. hely"] },
  { name: "Férfi III. osztály", result: "I. hely", history: ["2023: I. hely"] },
];
export const TEAMS_NOTE =
  "A férfiak 2019 óta minden idényben megnyerték azt a bajnokságot, amelyben elindultak, így 2023-ban már a Szuperligában, a legjobb magyar teniszezők ellen játszottak.";

/** 2026 highlights, from the club's results pages. */
export type Result = { event: string; when: string; lines: string[]; tag: "nemzetközi" | "országos" | "Budapest" | "szenior" };
export const RESULTS: Result[] = [
  { event: "Champions Bowl World Finals", when: "2026. szept. 27 – okt. 4.", tag: "nemzetközi", lines: ["Desch Cole: fiú 18 egyéni, I. hely", "Chen Zixin: lány 10 egyéni, I. hely", "Erdei Helga: lány 11 egyéni, III. hely"] },
  { event: "Tecnifibre Open, Tennis Europe Cat. 2", when: "2026. június 7–14.", tag: "nemzetközi", lines: ["Simon Kende: fiú 12 egyéni, I. hely"] },
  { event: "Korosztályos Országos Bajnokság", when: "2026. augusztus 8–19.", tag: "országos", lines: ["Simon Boldizsár: F14 egyéni, II. hely", "L12 és L14 csapat: II. hely", "F18 csapat: III. hely"] },
  { event: "Budapest-bajnokság", when: "2026. június 20 – július 2.", tag: "Budapest", lines: ["Polgárdi Zita: L14 egyéni, I. hely", "L14 csapat: I. hely", "Tóth Ákos János / Andreas Monoyios: F18 páros, I. hely"] },
  { event: "Play & Stay Csapatbajnoki Döntő", when: "2026. szeptember 19.", tag: "országos", lines: ["Lánycsapat: I. hely (Erdei Helga, Juhász Betta, Szilágyi Mira)"] },
  { event: "MT 1000 Budapest Regional Championship", when: "2026. június 1–7.", tag: "szenior", lines: ["Balta Rózsa: +55 női páros és +60 vegyes páros, I. hely"] },
];

export type Program = { date: string; title: string; note?: string };
export const PROGRAMS: Program[] = [
  { date: "2026. 08. 29.", title: "Közös sportnap a Pasa TK játékosaival" },
  { date: "2026. 06. 13.", title: "Családi nap" },
  { date: "2025. 12. 29.", title: "Karácsonyi játék" },
  { date: "2025. 12. 27.", title: "Évzáró foci" },
  { date: "2025. 12. 18.", title: "PG Karácsony" },
  { date: "2025. 06. 30 – 07. 04.", title: "Edzőtábor" },
  { date: "2025. 06. 07.", title: "Családi nap" },
  { date: "2024. 11. 15.", title: "Ujszászi Máté versenybíró előadása", note: "a hazai és nemzetközi versenyekre való nevezésről és a versenyek alapvető szabályairól" },
  { date: "2024. 07. 08–12.", title: "Edzőtábor" },
  { date: "2024. 05. 01.", title: "Edzőmérkőzések a MESE Tenisz Klub játékosaival" },
];

export const SUPPORTERS = [
  { name: "Magyar Tenisz Szövetség", img: "/img/tamogatok/mtsz.png" },
  { name: "Sportegyesületek Országos Szövetsége", img: "/img/tamogatok/sosz.png" },
  { name: "Nemzeti Együttműködési Alap", img: "/img/tamogatok/nea.png" },
  { name: "Miniszterelnökség", img: "/img/tamogatok/me.png" },
  { name: "Bethlen Gábor Alapkezelő Zrt.", img: "/img/tamogatok/bga.png" },
  { name: "JSPORT.HU", img: "/img/tamogatok/jsport.png" },
];

export const TAX_ONE_PERCENT =
  "A felajánlott 1%-ot a kondicionális képességek fejlesztéséhez szükséges eszközökre és a sporttevékenységhez szükséges sportruházatra fordítjuk.";

/** Training enquiry form options (sending opens an e-mail to the club). */
export const FORM = {
  who: ["Gyerek, kezdő (Play & Stay)", "Gyerek vagy junior", "Versenyző", "Felnőtt"],
  levels: ["Kezdő", "Haladó", "Versenyző"],
};
