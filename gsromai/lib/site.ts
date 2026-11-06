// Facts used across the site. Sources: gsteniszclub.hu (home, Árak with the summer and winter court
// fees, Elérhetőség, Teniszakadémia, Galéria and the Római Padel Akadémia logo), smarttennis.hu (the
// SmartTennis SE tennis club that runs the tennis at the complex and its HELLA booking), and Szabó
// Éva's email reply in 100web: most new guests already know what they want and come to book a court;
// this winter there are 2 covered, heated tennis courts and 2 covered, heated padel courts; padel is
// recommended to those just getting to know the sport, and it is worth coming to watch a good match.

export const CLUB = {
  name: "Római Padel Akadémia",
  alsoKnown: "GS Tenisz Club",
  address: "1039 Budapest, Királyok útja 321.",
  area: "12 000 m²",
  hours: "Hétfőtől vasárnapig 7:00 – 22:00",
  tennisUntil: "Teniszezni 21:00-ig lehet",
  padel: { phone: "+36 30 122 2980", href: "tel:+36301222980" },
  tennis: {
    club: "SmartTennis SE",
    phone: "+36 30 695 5599",
    href: "tel:+36306955599",
    email: "info@smarttennis.hu",
    booking: "https://smarttennis.hellabooking.com/Customer/Reservation",
    site: "https://smarttennis.hu/",
  },
  email: "marketing@gsromai.hu",
  emailHref: "mailto:marketing@gsromai.hu",
  eventsHref: "mailto:marketing@gsromai.hu?subject=Rendezv%C3%A9ny%20%2F%20terembérlet%20aj%C3%A1nlatk%C3%A9r%C3%A9s",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=1039+Budapest%2C+Kir%C3%A1lyok+%C3%BAtja+321.",
  mapsEmbed: "https://maps.google.com/maps?q=1039%20Budapest%2C%20Kir%C3%A1lyok%20%C3%BAtja%20321.&z=15&output=embed",
};

/** Court fees per court, for 60 minutes of play (Árak page). */
export const WINTER = [
  { court: "Padel", note: "fedett és kültéri", price: "16 000 Ft" },
  { court: "Tenisz, fedett", note: "fűtött pálya", price: "10 000 Ft" },
  { court: "Tenisz, kültéri", note: "keményborítás", price: "5 500 Ft" },
];

export const SUMMER_PADEL = [
  { when: "8:00 – 12:00", outdoor: "10 000 Ft", covered: "10 000 Ft" },
  { when: "12:00 – 16:00", outdoor: "6 000 Ft", covered: "8 000 Ft", best: true },
  { when: "16:00 – 22:00", outdoor: "10 000 Ft", covered: "10 000 Ft" },
];

export const NAV = [
  { href: "/#padel", label: "Padel" },
  { href: "/#tenisz", label: "Tenisz" },
  { href: "/#arak", label: "Árak" },
  { href: "/#klub", label: "Bisztró és wellness" },
  { href: "/#rendezveny", label: "Rendezvény" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];
