// Club facts used across the site. Sources: bajatenisz.ewk.hu (Egyesület, Szolgáltatások,
// Pályafoglalás, Kapcsolat, Rendezvénynaptár with the 2024 and 2025 calendars, the 2024 court-fee
// poster, the house rules PDF, the grant notice), the booking system at bajatenisz.hu, and
// Almádi-Székely Éva's email reply in 100web: there is no membership fee any more, only a court
// fee, so anyone can register for online booking; in winter an outside operator runs the courts
// with fixed renters, and winter court rental goes through Kökény Gábor.

export const CLUB = {
  name: "Bajai Tenisz Klub",
  short: "BTK",
  founded: 1980,
  centre: "Dr. Csátaljay István Tenisz Centrum",
  address: "Baja, Petőfi-sziget, Március 15. sétány 9–11.",
  place: "Petőfi-sziget",
  caretakerPhone: "+36 30 115 8861",
  caretakerHref: "tel:+36301158861",
  email: "info@bajatenisz.hu",
  emailHref: "mailto:info@bajatenisz.hu",
  booking: "https://bajatenisz.hu/login",
  register: "https://bajatenisz.hu/register",
  bookingLabel: "bajatenisz.hu",
  winter: { name: "Kökény Gábor", phone: "+36 70 459 2926", href: "tel:+36704592926" },
  bank: "11732033-20003634",
  colours: "kék-sárga",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=46.17501665534147%2C18.940553769277372",
  mapsEmbed: "https://maps.google.com/maps?q=46.17501665534147,18.940553769277372&z=15&output=embed",
};

export const COACHES = [
  { name: "Pestuka Szilvia", phone: "+36 20 942 4478", href: "tel:+36209424478" },
  { name: "Almádi-Székely Éva", phone: "+36 20 519 2482", href: "tel:+36205192482" },
  { name: "Markó István", phone: "+36 70 708 5065", href: "tel:+36707085065" },
];

export const NAV = [
  { href: "/#foglalas", label: "Foglalás" },
  { href: "/#arak", label: "Pályadíjak" },
  { href: "/#klub", label: "A klub" },
  { href: "/#edzok", label: "Edzők" },
  { href: "/#versenyek", label: "Versenyek" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];
