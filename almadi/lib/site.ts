// Everything both versions show. Sources: almaditenisz.hu (holding page: hours, phone, e-mail, logo,
// drone photo, weather box), the club's Foggo page (app.foggosport.com/sportprovider/almaditenisz:
// six courts, 2026 prices, annual pass), balatonalmadi.hu (Teniszezés: 6 clay courts in the Szent
// Erzsébet liget, coaching and court hire, president), programturizmus.hu (floodlights, by the lake),
// tennistourtalk.com (founded 1925, beside the Wesselényi beach; the $15,000 ITF Balatonalmádi Open,
// May 2018) and Győri Viktor's email reply in 100web (4 November 2026: outdoor season only, closed from
// 1 November, 2027 opening late March / early April; unplayable courts are flagged in the booking
// system; in changeable weather, phone).

export const CLUB = {
  name: "Balatonalmádi Tenisz Club",
  full: "Balatonalmádi Tenisz Club 1925 SE",
  short: "Almádi Tenisz",
  founded: "1925",
  place: "Szent Erzsébet liget",
  address: "8220 Balatonalmádi, Szent Erzsébet liget",
  phone: "+36 70 321 5001",
  phoneHref: "tel:+36703215001",
  email: "info@almaditenisz.hu",
  emailHref: "mailto:info@almaditenisz.hu",
  president: "Győri Viktor",
  booking: "https://app.foggosport.com/sportprovider/almaditenisz/calendar",
  bookingPrices: "https://app.foggosport.com/sportprovider/almaditenisz/passes",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Balatonalm%C3%A1di%20Tenisz%20Club%2C%20Szent%20Erzs%C3%A9bet%20liget%2C%208220%20Balatonalm%C3%A1di",
  mapsEmbed: "https://maps.google.com/maps?q=Balatonalm%C3%A1di%20Tenisz%20Club%2C%20Szent%20Erzs%C3%A9bet%20liget&z=16&output=embed",
  /** for the live weather box (Open-Meteo), the courts in the Szent Erzsébet liget */
  lat: 47.0262,
  lon: 18.0158,
  hours: "7:00–21:00",
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "szezon", label: "Szezon" },
  { id: "palyak", label: "Pályák és árak" },
  { id: "foglalas", label: "Foglalás" },
  { id: "klub", label: "A klub" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export const SEASON = {
  /** shown at the top of the page while the club is closed for the winter */
  closed: true,
  status: "Téli szünet",
  note: "November 1-jén megkezdtük a pályák téliesítését, idén már nem fogadunk vendégeket.",
  reopen: "2027. március vége / április eleje",
  reopenShort: "Nyitás 2027 tavaszán",
  /** months of the outdoor season (0 = január): late March to the end of October */
  months: [2, 3, 4, 5, 6, 7, 8, 9],
  partial: [2],
};

export const FACTS = [
  { num: "1925", label: "óta teniszklub" },
  { num: "6", label: "salakpálya" },
  { num: "7–21", label: "óráig nyitva a szezonban" },
  { num: "2018", label: "ITF férfi verseny a pályákon" },
];

export const COURTS = {
  count: 6,
  title: "Hat salakpálya a ligetben",
  text: "Két sorban, három-három pálya, a Szent Erzsébet liget fái között, pár lépésre a Wesselényi strandtól és a víztől. A pályák esti világítással rendelkeznek.",
  points: ["6 salakpálya (1–6.)", "Esti világítás", "Szabadtéri szezon: tavasztól október végéig", "Teniszoktatás és pályabérlés"],
};

export const PRICES = {
  season: "2026",
  rows: [
    { item: "Pályabérlés", price: "6 000 Ft", unit: "/ óra", note: "óradíj" },
    { item: "Éves pályabérlet, felnőtt", price: "85 000 Ft", unit: "/ év", note: "365 napig, mind a hat pályán érvényes" },
  ],
  note: "A 2026-os szezon árai a foglalási rendszerből. A 2027-es árakról a klubnál érdeklődj.",
};

export const BOOKING_STEPS = [
  { title: "Foglalj a Foggóban", text: "A pályák szabad időpontjait a Foggo naptárában látod és ott is foglalhatsz (regisztráció után)." },
  { title: "Vagy hívj minket", text: "Telefonon is foglalhatsz és érdeklődhetsz oktatásról, bérletről: +36 70 321 5001." },
  { title: "Esőben előbb telefonálj", text: "Ha egy pálya az időjárás miatt játszhatatlan, a karbantartó jelzi a foglalási rendszerben. Változékony, esős időben érdemes előtte telefonon egyeztetni." },
];

export const STORY = [
  "A Balatonalmádi Tenisz Club 1925-ben alakult. Hat salakpályája a Szent Erzsébet liget fái között van, a Wesselényi strand szomszédságában, pár lépésre a Balatontól.",
  "A szezonban reggel héttől este kilencig lehet játszani, a pályák esti világítással is használhatók. 2018 májusában itt rendezték a 15 000 dolláros ITF férfi versenyt, a Balatonalmádi Opent.",
];

export const MILESTONES = [
  { year: "1925", text: "Megalakul a klub" },
  { year: "2018", text: "ITF férfi verseny: Balatonalmádi Open" },
  { year: "2027", text: "Nyitás tavasszal, március végén vagy április elején" },
];

export const FORM = {
  topics: ["Pályafoglalás", "Teniszoktatás", "Éves bérlet", "Egyéb"],
};
