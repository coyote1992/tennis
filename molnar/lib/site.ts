// Facts used across the site. Sources: molnarteniszakademia.eu (Budakeszi: home, Kapcsolat,
// Pályabérlés, Áraink with the 2026/27 covered-season prices, Felnőtt tenisz, Gyermek tenisz, Táborok,
// Rólunk with the coaches, the 2026 news posts and the "Nálunk 1 az 2!" poster) and Balázs's email
// reply in 100web: newcomers join the existing amateur community; team training is on Wednesday and
// Friday 19–21 (some come to one, some to both); the academy fields teams in three divisions
// (OB II, Budapest II, Pest megye I); he invited us to try a session.

export const CLUB = {
  name: "Molnár Teniszakadémia",
  tagline: "Tenisz. Másképp.",
  motto: "Profizmus szívvel",
  founded: 2009,
  budakesziSince: 2019,
  address: "2092 Budakeszi, Márity László u. 17.",
  reception: { label: "Recepció, pályabérlés", phone: "+36 20 805 6363", href: "tel:+36208056363" },
  coaching: { label: "Oktatás, tanfolyam, tábor", phone: "+36 70 382 2862", href: "tel:+36703822862" },
  email: "info@molnarteniszakademia.hu",
  emailHref: "mailto:info@molnarteniszakademia.hu",
  trialHref: "mailto:info@molnarteniszakademia.hu?subject=Csapatedz%C3%A9s%20kipr%C3%B3b%C3%A1l%C3%A1sa",
  hours: [
    { days: "Hétköznap", time: "7:00 – 21:00" },
    { days: "Szombat", time: "7:00 – 18:00" },
    { days: "Vasárnap", time: "8:00 – 18:00" },
  ],
  facebook: "https://www.facebook.com/Teniszakad%C3%A9mia-Moln%C3%A1r-408993042625683/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Moln%C3%A1r+Teniszakad%C3%A9mia%2C+2092+Budakeszi%2C+M%C3%A1rity+L%C3%A1szl%C3%B3+u.+17.",
  mapsEmbed: "https://maps.google.com/maps?q=Moln%C3%A1r%20Teniszakad%C3%A9mia%2C%20Budakeszi&z=15&output=embed",
};

/** Covered season 2026. szeptember 21. – 2027. április 18. (30 hét). Prices in Ft per hour unless noted. */
export const COVERED = [
  { day: "Hétköznap", when: "7–10", season: "9 900", ten: "10 600", total: "297 000", casual: "11 500" },
  { day: "Hétköznap", when: "10–14", season: "7 900", ten: "9 300", total: "237 000", casual: "11 500", best: true },
  { day: "Hétköznap", when: "14–16", season: "9 900", ten: "10 600", total: "297 000", casual: "11 500" },
  { day: "Hétköznap", when: "16–21", season: "11 000", ten: "12 000", total: "330 000", casual: "13 000" },
  { day: "Szombat", when: "7–15", season: "9 900", ten: "10 600", total: "297 000", casual: "11 500" },
  { day: "Szombat", when: "15–18", season: "7 900", ten: "9 300", total: "237 000", casual: "11 500", best: true },
  { day: "Vasárnap", when: "8–12", season: "9 900", ten: "10 600", total: "297 000", casual: "11 500" },
  { day: "Vasárnap", when: "12–19", season: "7 900", ten: "9 300", total: "237 000", casual: "11 500", best: true },
];

export const COACHES = [
  {
    name: "Molnár Balázs",
    role: "Tulajdonos, vezetőedző",
    img: "/img/edzo-molnar-balazs.jpg",
    facts: ["Egykori profi játékos", "USPTR képesített edző", "Edzői munka Németországban (Kastl)", "Head szerződött edző"],
  },
  {
    name: "Lázár Vilmos",
    role: "Edző",
    img: "/img/edzo-lazar-vilmos.jpg",
    facts: [
      "Volt válogatott keretedző, Király Kupa-kapitány",
      "B licences edző, 8 év németországi edzői múlt",
      "Egykori profi játékos, Davis Kupa-kerettag",
      "7× magyar bajnok csapatban, magyar bajnok párosban",
    ],
  },
  {
    name: "Molnár István",
    role: "Edző",
    img: "/img/edzo-molnar-istvan.jpg",
    facts: [
      "30 éves edzői múlt",
      "Többszörös korosztályos magyar bajnok, felnőtt bajnokcsapat edzője",
      "Egykori első osztályú játékos",
      "Az MTK, a Pára és a Vasas egykori vezetőedzője",
    ],
  },
  {
    name: "Szöllös Gergő",
    role: "Edző",
    img: "/img/edzo-szollos-gergo.jpg",
    facts: ["PTR nemzetközi képesített edző", "Head szerződött edző"],
  },
];

export const NAV = [
  { href: "/#felnott", label: "Felnőtteknek" },
  { href: "/#gyerekek", label: "Gyerekeknek" },
  { href: "/#rolunk", label: "Edzőink" },
  { href: "/#palyak", label: "Pályák és árak" },
  { href: "/#tabor", label: "Tábor" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];
