// Club facts used across the site. Sources: teniszklubkecskemet.hu (home, Rólunk, Kapcsolat,
// Tagfelvétel, the 2026 city team championship and "Aranyhomok Open" pages, OB III, Pályafejlesztéseink,
// Felajánlások, Tenisz Kecskeméten Anno, In Memoriam, the club day page, the photo gallery) and
// Göbölyös Alexander's email reply in 100web: new members come both through the city championship
// and through the community first, and people come and go, even season by season.

export const CLUB = {
  name: "KATE",
  fullName: "Kecskeméti Amatőr Teniszezők Egyesülete",
  founded: 2002,
  courts: "GAMF-pályák",
  address: "6000 Kecskemét, Ceglédi út 114.",
  email: "katekecskemetteniszklub@gmail.com",
  emailHref: "mailto:katekecskemetteniszklub@gmail.com",
  booking: "https://foglalas.ktu.hu/Customer/Reservation",
  league: "https://teniszvarosibajnoksag.teniszklubkecskemet.hu",
  joinForm: "https://www.teniszklubkecskemet.hu/tagfelvetel/",
  bank: { name: "Fókusz Takarékszövetkezet", account: "51700100-10022984" },
  winterClosed: "2026. október 18.",
};

export const FEES = [
  { who: "18 év alatt", price: "8 000 Ft", note: "éves tagdíj" },
  { who: "18 év felett", price: "13 000 Ft", note: "éves tagdíj" },
];

export const NAV = [
  { href: "/#kezdes", label: "Kezdés" },
  { href: "/#bajnoksag", label: "Bajnokságok" },
  { href: "/#klub", label: "A klub" },
  { href: "/#tagsag", label: "Tagság" },
  { href: "/#klubelet", label: "Klubélet" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];
