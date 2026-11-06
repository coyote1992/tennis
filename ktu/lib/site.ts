// Facts used across the site. Sources: kecskemetiteniszudvar.hu (home, Szolgáltatások with the
// winter cancellation rules and the racket-service sheet, Információk with the FAQ, Árak with the
// 2026 summer price list, the 2025/26 winter price list image, Galéria, the KTU Kupa page) and
// Mónika's email reply in 100web: they service anyone's racket, not only their own players', and
// the service contacts are Kocsis Zoltán and Ujhidy Zoltán.

export const CLUB = {
  name: "Kecskeméti Tenisz Udvar",
  short: "KTU",
  founded: 2021,
  address: "6000 Kecskemét, Ceglédi út 108.",
  phone: "+36 30 606 7544",
  phoneHref: "tel:+36306067544",
  email: "info@ktu.hu",
  emailHref: "mailto:info@ktu.hu",
  hours: "Hétfőtől vasárnapig 7:00 – 22:00",
  booking: "https://foglalas.ktu.hu/Customer/Reservation",
  signup: "https://foglalas.ktu.hu/Customer/User/SignUp",
  facebook: "https://www.facebook.com/kecskemetiteniszudvar",
  review: "https://g.page/r/CWN5Qh94xNVHEBM/review",
  mapsUrl: "https://www.google.com/maps/place/Kecskem%C3%A9ti+Tenisz+Udvar/@46.9311609,19.7037175,17z",
  mapsEmbed: "https://maps.google.com/maps?q=46.9311609,19.7037175&z=16&output=embed",
  service: {
    email: "szerviz@ktu.hu",
    people: [
      { name: "Kocsis Zoltán", phone: "+36 70 270 8707", href: "tel:+36702708707" },
      { name: "Ujhidy Zoltán", phone: "+36 30 925 2432", href: "tel:+36309252432" },
    ],
  },
};

export const NAV = [
  { href: "/#foglalas", label: "Foglalás" },
  { href: "/#arak", label: "Árak" },
  { href: "/#ktu", label: "A KTU" },
  { href: "/#edzes", label: "Oktatás" },
  { href: "/#szerviz", label: "Ütőszerviz" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];
