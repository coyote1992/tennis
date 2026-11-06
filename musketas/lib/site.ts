// Facts used across the site. Sources: musketastenisz.hu (home, Áraink with the 2026/27 prices,
// Pályafoglalás with the HELLA booking rules, Rólunk, MATK versenyek, Kapcsolat, the house-rules
// PDF, the Google reviews widget) and the club's email reply in 100web: online bookings are made for a
// specific court type, which usually can't be changed on site; players know which surface they want.

export const CLUB = {
  name: "Muskétás Teniszcentrum",
  address: "1112 Budapest, Muskétás u. 1.",
  mobile: "+36 70 881 6554",
  mobileHref: "tel:+36708816554",
  landline: "+36 1 401 7225",
  landlineHref: "tel:+3614017225",
  email: "info@musketastenisz.hu",
  emailHref: "mailto:info@musketastenisz.hu",
  hours: "Minden nap 7:00 – 22:00",
  cashier: "Pénztár: hétköznap 9:00 – 17:00",
  booking: "https://foglalas.musketastenisz.hu/",
  signup: "https://foglalas.musketastenisz.hu/Customer/User/SignUp",
  facebook: "https://www.facebook.com/musketastenisz",
  instagram: "https://www.instagram.com/musketastenisz/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Musk%C3%A9t%C3%A1s+Teniszcentrum%2C+1112+Budapest%2C+Musk%C3%A9t%C3%A1s+u.+1.",
  mapsEmbed: "https://maps.google.com/maps?q=Musk%C3%A9t%C3%A1s%20Teniszcentrum%2C%201112%20Budapest&z=15&output=embed",
  rating: "4,8",
};

export type Band = { when: string; hourly?: string; season: string; seasonPer: string; member: string; memberPer: string };
export type PriceSet = { id: string; surface: string; place: string; season: "tél" | "nyár"; weeks: number; bands: Band[] };

/** 2026/27 season. Season pass = 27 (winter) or 25 (summer) weeks; KLUBTAGSÁG = winter and summer pass bought together. */
export const PRICES: PriceSet[] = [
  {
    id: "csarnok-tel",
    surface: "Swiss Court® salak",
    place: "Csarnok",
    season: "tél",
    weeks: 27,
    bands: [
      { when: "6:00 – 11:00", hourly: "11 500", season: "283 500", seasonPer: "10 500", member: "243 000", memberPer: "9 000" },
      { when: "11:00 – 15:00", hourly: "10 500", season: "256 500", seasonPer: "9 500", member: "229 500", memberPer: "8 500" },
      { when: "15:00 – 21:00", hourly: "12 500", season: "310 500", seasonPer: "11 500", member: "270 000", memberPer: "10 000" },
    ],
  },
  {
    id: "sator-tel",
    surface: "Keménypálya",
    place: "Sátor",
    season: "tél",
    weeks: 27,
    bands: [
      { when: "10:00 – 15:00", hourly: "9 500", season: "216 000", seasonPer: "8 000", member: "202 500", memberPer: "7 500" },
      { when: "15:00 – 20:00", hourly: "10 500", season: "243 000", seasonPer: "9 000", member: "229 500", memberPer: "8 500" },
    ],
  },
  {
    id: "csarnok-nyar",
    surface: "Swiss Court® salak",
    place: "Csarnok",
    season: "nyár",
    weeks: 25,
    bands: [
      { when: "6:00 – 11:00", hourly: "6 000", season: "137 500", seasonPer: "5 500", member: "125 000", memberPer: "5 000" },
      { when: "11:00 – 15:00", hourly: "5 000", season: "112 500", seasonPer: "4 500", member: "100 000", memberPer: "4 000" },
      { when: "15:00 – 21:00", hourly: "6 500", season: "150 000", seasonPer: "6 000", member: "137 500", memberPer: "5 500" },
    ],
  },
  {
    id: "szabadter-nyar",
    surface: "Swiss Court® salak",
    place: "Szabadtér",
    season: "nyár",
    weeks: 25,
    bands: [
      { when: "6:00 – 11:00", hourly: "5 500", season: "125 000", seasonPer: "5 000", member: "112 500", memberPer: "4 500" },
      { when: "11:00 – 15:00", hourly: "4 500", season: "100 000", seasonPer: "4 000", member: "87 500", memberPer: "3 500" },
      { when: "15:00 – 21:00", hourly: "6 000", season: "137 500", seasonPer: "5 500", member: "125 000", memberPer: "5 000" },
    ],
  },
];

export const NAV = [
  { href: "/#palyak", label: "Pályák" },
  { href: "/#arak", label: "Árak" },
  { href: "/#foglalas", label: "Foglalás" },
  { href: "/#klub", label: "Klub" },
  { href: "/#versenyek", label: "Versenyek" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];
