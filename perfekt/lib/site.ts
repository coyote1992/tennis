// Facts used across the site. Sources: perfekttenisz.hu (the one-page site: intro, Áraink valid
// 2026-04-06 – 2026-10-18, Egyéni oktatás, Házirend, ADÓ 1%, Foglalás/Kapcsolat) and Czene
// Krisztina's email reply in 100web: the club is closed for the winter, and they hope to reopen in
// early-to-mid March; spring-season and coaching details will be set closer to opening.

export const CLUB = {
  name: "Perfekt Teniszklub",
  association: "Perfekt Tenisz Sportegyesület",
  address: "1173 Budapest, Gyergyóalfalu utca 8.",
  district: "Budapest XVII. kerület",
  phone: "+36 70 389 9682",
  phoneHref: "tel:+36703899682",
  email: "info@perfekttenisz.hu",
  emailHref: "mailto:info@perfekttenisz.hu",
  notifyHref:
    "mailto:info@perfekttenisz.hu?subject=" +
    encodeURIComponent("Értesítést kérek a tavaszi nyitásról") +
    "&body=" +
    encodeURIComponent("Sziasztok!\n\nKérlek, szóljatok, ha kiderül, mikor nyit a klub tavasszal.\n\nKöszönöm!"),
  facebook: "https://www.facebook.com/PerfektTeniszklub",
  instagram: "https://www.instagram.com/perfekttenisz/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=1173+Budapest%2C+Gyergy%C3%B3alfalu+utca+8.",
  mapsEmbed: "https://maps.google.com/maps?q=1173%20Budapest%2C%20Gyergy%C3%B3alfalu%20utca%208.&z=16&output=embed",
  bank: "OTP Bank, 11717009-22496618",
  taxNumber: "18655997-1-42",
  season2026: "2026. április 6. – október 18.",
  reopen: "várhatóan március elején–közepén",
};

export const COACH = {
  name: "Papp-Szilágyi Attila",
  phone: "+36 70 670 1238",
  phoneHref: "tel:+36706701238",
  fee: "7 000 Ft",
};

export const HOURS = [
  { days: "Hétfő – péntek", time: "8:00 – 20:00" },
  { days: "Szombat", time: "8:00 – 18:00" },
  { days: "Vasárnap", time: "8:00 – 16:00" },
];

export const NAV = [
  { href: "#palyak", label: "Pályák" },
  { href: "#arak", label: "Árak" },
  { href: "#oktatas", label: "Oktatás" },
  { href: "#klubhaz", label: "Klubház" },
  { href: "#hazirend", label: "Házirend" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];

/** 2026 season (6 April – 18 October), Ft per court. */
export const PRICES = [
  { type: "Alkalmi bérlés", note: "óradíj", weekday: "3 900", weekend: "3 200", weekdayHour: null, weekendHour: null },
  { type: "10 alkalmas bérlet", note: "10 óra, szabadon választott időpontokra", weekday: "37 000", weekend: "30 000", weekdayHour: "3 700", weekendHour: "3 000" },
  { type: "Szezonbérlet", note: "28 hétre, fix napon és idősávban", weekday: "98 000", weekend: "78 400", weekdayHour: "3 500", weekendHour: "2 800" },
];

/** The house rules, shortened to what a first-time guest needs; the full text stays below in a disclosure. */
export const RULE_HIGHLIGHTS = [
  { title: "Egy óra = 55 perc", text: "A játék minden óra 00 percétől 55 percéig tart. Óra 55-kor húzd le a pályát, és add át a következő játékosnak." },
  { title: "Lemondás 24 órával előtte", text: "Az alkalmi foglalás 24 órával előtte díjmentesen lemondható; a később lemondott órát a következő alkalommal ki kell fizetni, kivéve esőnap esetén." },
  { title: "Foglalás 10 napra előre", text: "Alkalmi pályát legfeljebb 10 napra előre foglalhatsz. Pályára lépés előtt jelentkezz be a klubházban." },
  { title: "Készpénz a helyszínen", text: "A klubban csak készpénzzel fizethetsz; a bérletek ára átutalással is rendezhető, legkésőbb az első játéknapon." },
  { title: "Eső esetén", text: "A pálya állapotáról telefonon érdeklődhetsz. Az eső miatt elmaradt órák egy egyeztetett időpontban pótolhatók." },
  { title: "Sportos öltözet", text: "A klub területén csak sportruhában, teniszcipőben lehet tartózkodni; dohányozni és szeszes italt fogyasztani tilos." },
];

export const PASS_RULES = [
  "A 10 alkalmas bérlet az adott szezonban bármikor felhasználható, fix vagy változó időpontokra.",
  "A szezonbérlet a meghirdetett szezonban fix napon és idősávban érvényes; év közben is megvehető, ilyenkor a hátralévő hetekre járó díjat kell egy összegben kifizetni.",
  "A legalább 24 órával előtte lemondott bérletes alkalom 30 napon belül, szabad pálya függvényében pótolható.",
  "A fel nem használt alkalmak nem vihetők át a következő szezonba.",
];
