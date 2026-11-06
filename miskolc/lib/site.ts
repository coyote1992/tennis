// Facts used across the site. Sources: tenisz.uni-miskolc.hu (Főoldal, Rólunk, Áraink with the
// winter 2026/27 price list image, Squash, Házirend, Kapcsolat, Strandsport, Futball aréna) and Török
// Bence's email reply in 100web: everyone picks the court surface to suit their own needs and level.

export const CLUB = {
  name: "Miskolci Egyetem Teniszcentrum",
  short: "Egyetemi Teniszcentrum",
  address: "3515 Miskolc-Egyetemváros",
  phone: "+36 20 393 1795",
  phoneHref: "tel:+36203931795",
  email: "palyafoglalas@uni-miskolc.hu",
  emailHref: "mailto:palyafoglalas@uni-miskolc.hu",
  booking: "https://palyafoglalas.uni-miskolc.hu/",
  hours: "Hétfőtől vasárnapig 6:00 – 22:00",
  facebook: "https://www.facebook.com/egyetemi.sportcentrum",
  university: "https://www.uni-miskolc.hu",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Miskolci+Egyetem+Teniszcentrum%2C+Miskolc-Egyetemv%C3%A1ros",
  mapsEmbed: "https://maps.google.com/maps?q=Miskolci%20Egyetem%20Teniszcentrum%2C%20Miskolc-Egyetemv%C3%A1ros&z=15&output=embed",
  season: "2026. november 2. – 2027. április 4.",
};

export type PriceList = {
  id: string;
  label: string;
  note: string;
  bands: string[];
  rows: { who: string; prices: string[]; member?: boolean }[];
};

/** Winter 2026/27, valid until 4 April 2027. Ft / court / hour. "ME" = University of Miskolc staff and students. */
export const PRICES: PriceList[] = [
  {
    id: "csarnok",
    label: "Teniszcsarnok",
    note: "4 fedett keménypálya",
    bands: ["6:00 – 14:00", "14:00 – 22:00", "Hétvége"],
    rows: [
      { who: "Alkalmi ár", prices: ["6 000", "10 000", "10 000"] },
      { who: "Szezon ár", prices: ["5 400", "9 000", "9 000"] },
      { who: "ME dolgozó, hallgató, alkalmi", prices: ["5 100", "8 500", "8 500"], member: true },
      { who: "ME dolgozó, hallgató, szezon", prices: ["4 500", "7 500", "7 500"], member: true },
    ],
  },
  {
    id: "kulteri",
    label: "Kültéri pályák",
    note: "4 keményborítású és 4 salakpálya",
    bands: ["6:00 – 10:00", "10:00 – 16:00", "16:00 – 22:00"],
    rows: [
      { who: "Alkalmi ár", prices: ["4 000", "3 000", "4 000"] },
      { who: "ME dolgozó, hallgató, alkalmi", prices: ["3 400", "2 550", "3 400"], member: true },
    ],
  },
  {
    id: "fallabda",
    label: "Fallabda (squash)",
    note: "2 beltéri pálya, egyszerre max. 4 fő",
    bands: ["6:00 – 14:00", "14:00 – 22:00", "Hétvége"],
    rows: [
      { who: "Alkalmi ár", prices: ["4 500", "4 500", "4 500"] },
      { who: "Szezon ár", prices: ["4 050", "4 050", "4 050"] },
      { who: "ME dolgozó, hallgató, alkalmi", prices: ["3 825", "3 825", "3 825"], member: true },
    ],
  },
];

export const NAV = [
  { href: "/#palyak", label: "Pályák" },
  { href: "/#arak", label: "Árak" },
  { href: "/#foglalas", label: "Foglalás" },
  { href: "/#rolunk", label: "Rólunk" },
  { href: "/#sportcentrum", label: "Sportcentrum" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];
