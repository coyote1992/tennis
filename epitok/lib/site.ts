// Everything both versions show. Sources: epitoktk.hu (Kezdőlap, Pályabérlet with the 2026 price list,
// Kapcsolat with directions and hours, Klubtörténet, the 1950s–80s team pages, ITF History, Best players,
// Hírek/események, WINK-Építők Kína 2025) and Dundler József's reply in 100web (3 November 2026: the
// unlimited weekday-morning season pass, 7–14, is chosen by old and new guests alike, especially people
// with flexible working hours and retirees; there is usually a free court, or one after a short wait).

/** 3800 -> "3 800" with a no-break space, the same on server and client. */
export function fmt(n: number) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const CLUB = {
  name: "Építők Teniszklub",
  short: "Építők TK",
  place: "Budapest, Népliget",
  address: "1101 Budapest, Népliget",
  founded: 1991,
  contact: "Dundler József",
  phone: "+36 30 932 6398",
  phoneHref: "tel:+36309326398",
  email: "jozsef.dundler@gmail.com",
  emailHref: "mailto:jozsef.dundler@gmail.com",
  site: { name: "Simon Anikó", role: "tenisztelep", phone: "+36 20 358 7897", phoneHref: "tel:+36203587897" },
  facebook: "https://www.facebook.com/groups/112091735497348",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=%C3%89p%C3%ADt%C5%91k%20Teniszklub%20N%C3%A9pliget%20Budapest",
  mapsEmbed: "https://maps.google.com/maps?q=%C3%89p%C3%ADt%C5%91k%20Teniszklub%2C%20N%C3%A9pliget%2C%20Budapest&z=15&output=embed",
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "palyak", label: "Pályák" },
  { id: "arak", label: "Árak" },
  { id: "delelott", label: "Délelőtti bérlet" },
  { id: "tortenet", label: "Klubtörténet" },
  { id: "esemenyek", label: "Események" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export const VENUE = {
  intro: "12 salakos teniszpálya a Népligetben, áprilistól októberig. A tenisztelep egyidős a parkkal: a klubház középső része a millenniumi kiállításról került ide.",
  season: "Áprilistól októberig",
  hours: "Minden nap 7:00–20:00",
  facts: [
    { value: "12", label: "salakos pálya" },
    { value: "1896", label: "óta sporttelep a Népligetben" },
    { value: "21", label: "ITF-ifjúsági torna 1994–2014" },
  ],
};

/** Árlista 2026 (Pályabérlet page). Hourly prices; the season ones are per weekly hour for the whole season. */
export const PRICES = {
  title: "Árlista 2026",
  single: [
    { slot: "Hétköznap 7–9", price: 3800 },
    { slot: "Hétköznap 9–14", price: 3500 },
    { slot: "Hétköznap 14–20", price: 4300 },
    { slot: "Hétvégén", price: 3600 },
  ],
  season: [
    { slot: "Hétköznap 7–9", price: 78000 },
    { slot: "Hétköznap 9–14", price: 64000 },
    { slot: "Hétköznap 14–20", price: 93000 },
  ],
  singleNote: "Egy alkalomra, Ft/óra",
  seasonNote: "Egész idényre, heti egy óra, Ft/szezon",
};

/** The unlimited weekday-morning season pass: price from the 2026 list, the rest from Dundler József's reply. */
export const MORNING = {
  price: 73000,
  when: "Hétköznap 7:00–14:00",
  how: "Korlátlanul játszhatsz vele, amikor van szabad pálya. Hétköznap délelőtt általában van, vagy rövid várakozás után lesz.",
  who: "Régi és új vendégek egyaránt választják, különösen népszerű a kötetlen munkaidőben dolgozók és a nyugdíjasok között.",
  fit: "Annak jó, aki nincs szoros időponthoz kötve, de hetente legalább kétszer, vagy inkább még többször játszana.",
};

export const HISTORY = {
  intro: "A tenisztelep tulajdonképpen egyidős a Népligettel. 1896-ban a Tisztviselőtelep Tornaegyesülete bérelte ki a Fővárostól; felállították a városligeti millenniumi kiállításon vásárolt csarnokot, amelynek középső része ma is áll.",
  milestones: [
    { year: "1896", text: "A Tisztviselőtelep Tornaegyesülete 10 évre kibérli a területet. Nyáron 3 teniszpálya, télen korcsolyapálya." },
    { year: "1949", text: "Megalakul a Budapesti Gyárépítők tenisz szakosztálya; a telep az övék lesz." },
    { year: "1960", text: "A Gyárépítők harmadik a magyar bajnokság I. osztályában; edzőjük a legendás Szigeti Ottó." },
    { year: "1966", text: "A Középületépítő SE szakosztályaként két új pályával bővül a telep." },
    { year: "1971", text: "A Budapesti Építők SC veszi át a népligeti tenisztelepet." },
    { year: "1982", text: "Az Építők SC a Középületépítő Vállalat segítségével új klubházat építtet." },
    { year: "1991", text: "A szakosztály tagjai megalakítják az Építők Teniszklubot; első elnöke dr. Markóczy Miklós." },
  ],
  itf: {
    title: "Építők Kupa, ITF-ifjúsági torna",
    text: "Az ITF ifjúsági világranglista-versenyét 1994-ben kapta meg a klub; 2002-ben a II. kategóriába sorolták. 1994 és 2014 között 21 alkalommal rendezték a Népligetben, 2016-ban pedig még egyszer, Hungarian Open néven.",
    growth: "Az első évben 35 induló, 2002-ben 28 ország közel 150 versenyzője.",
    men: ["Alexander Zverev (ATP 2.)", "Jack Draper (ATP 4.)", "Hubert Hurkacz (ATP 6.)", "Nicolas Massu (ATP 9., olimpiai bajnok)", "Borna Coric (ATP 12.)"],
    women: ["Elina Svitolina (WTA 3.)", "Johanna Konta (WTA 3.)", "Dominika Cibulková (WTA 4.)", "Lucie Šafářová (WTA 5.)", "Nicole Vaidisová (WTA 7.)"],
    hungarians: "A magyar élmezőny is itt játszott: Fucsovics Márton, Marozsán Fábián, Balázs Attila, Szávay Ágnes, Babos Tímea és mások.",
  },
};

export const EVENTS = {
  intro: "Klubversenyek, születésnapi tornák és nyílt páros versenyek a szezonban. A legfrissebb híreket a klub Facebook-csoportjában találod.",
  list: [
    { date: "2025. november", title: "WINK-Építők Kína", text: "A klub közel 30 fős csapata Pekingben és Xiamenben teniszezett; a pekingi verseny bajnokai: Szilágyi László, Pleszkács Péter, Batke Krisztina és Kaliszky András." },
    { date: "2023. július", title: "2023 perc tenisz", text: "Rekordkísérlet az Eleven percek rendezvényen; a Magyar Rekord Egyesülete hitelesítette." },
    { date: "2023. június", title: "Nyílt páros verseny", text: "54 résztvevővel; júliusban újabb nyílt páros, 13 párossal." },
    { date: "2023. július", title: "Budapest város szenior bajnoksága", text: "A Népligetben." },
  ],
};

export const VISIT = {
  transit: "A 3-as metróval, az 1-es villamossal vagy a 99-es busszal érhető el a legegyszerűbben.",
  car: "A Népliget szigorúan védett övezet: autóval csak behajtási engedéllyel lehet a pályákhoz menni. Biztonságosan megállhatsz az FTC 2. Utánpótlás Centrum előtt vagy a Könyves Kálmán körúti parkolóban, 200–300 méterre, 5 perc sétára.",
};

export const FORM = {
  topics: ["Pályabérlés", "Délelőtti bérlet", "Idénybérlet", "Verseny", "Egyéb"],
};
