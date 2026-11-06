// Club facts used across the site. Sources: fortunatenisz.hu (home, Áraink, Rólunk, Edzőink,
// Események, Kapcsolat), the club's 2026 summer-camp sheet linked from its homepage, and Kovács
// Bea's email reply in 100web (new children are welcome; a kindergarten group starts again once
// enough children sign up; she prefers to talk on the phone).

export const CLUB = {
  name: "Fortuna SE Tenisz",
  fullName: "Fortuna Sportegyesület · Tenisz szakosztály",
  address: "1173 Budapest, Gyökér utca 18.",
  phone: "06 20 529 1664",
  phoneHref: "tel:+36205291664",
  phoneName: "Kovács Bea",
  phone2: "06 20 927 7195",
  phone2Href: "tel:+36209277195",
  phone2Name: "Kovács István",
  landline: "06 1 258 7146",
  landlineHref: "tel:+3612587146",
  email: "horvathbea65@gmail.com",
  emailHref: "mailto:horvathbea65@gmail.com",
  bank: { name: "OTP Bank", account: "11717009-20193151", holder: "Fortuna-Team Kft.", iban: "HU36 11717009-20193151" },
  facebook: "https://www.facebook.com/profile.php?id=100057411852048",
  instagram: "https://www.instagram.com/fortuna_tenisz_szakosztaly/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=1173+Budapest%2C+Gy%C3%B6k%C3%A9r+utca+18.",
  mapsEmbed: "https://maps.google.com/maps?q=1173%20Budapest%2C%20Gy%C3%B6k%C3%A9r%20utca%2018.&z=15&output=embed",
};

/** Covered-court hours in the 2026/27 winter season (from the club's price list). */
export const HOURS = [
  { days: "Hétfő – péntek", time: "6:00 – 21:00" },
  { days: "Szombat – vasárnap", time: "6:00 – 21:00" },
];

export const NAV = [
  { href: "/#teniszsuli", label: "Teniszsuli" },
  { href: "/#arak", label: "Pályabérlés" },
  { href: "/#rolunk", label: "Rólunk" },
  { href: "/#edzok", label: "Edzők" },
  { href: "/#tabor", label: "Tábor" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];
