// Facts used across the site. Sources: the club's page on bibichotel.hu (Teniszklub a Tüskevárban:
// courts, prices, booking conditions, house rules, gallery, logo), the hotel site's menu and footer
// (address, phones, e-mail, the Tüskevár's other offers) and the club's email reply in 100web: a small,
// family-like club whose courts are mainly kept for children's lessons and training; free slots are
// open to local players, and hotel guests are welcome to play too.

export const CLUB = {
  name: "Bíbic Tennis Club",
  place: "Tüskevár",
  address: "4481 Nyíregyháza, Jázmin köz 26.",
  contact: { name: "ifj. Varga László", phone: "+36 30 625 8961", href: "tel:+36306258961" },
  hotelPhone: "+36 42 475 898",
  hotelPhoneHref: "tel:+3642475898",
  hotelMobile: "+36 30 949 1602",
  hotelMobileHref: "tel:+36309491602",
  email: "info@bibichotel.hu",
  emailHref: "mailto:info@bibichotel.hu",
  booking: "https://bibichotel.booked4.us/public/",
  facebook: "https://www.facebook.com/tuskevarnyiregyhaza",
  hotel: "https://bibichotel.hu/hu",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=47.999912%2C21.742372",
  mapsEmbed: "https://maps.google.com/maps?q=47.999912,21.742372&z=15&output=embed",
};

export const PRICES = [
  { court: "Kültéri pályák", note: "1-es és 2-es pálya", rows: [
    { when: "7:00 – 20:00", price: "3 000 Ft / óra" },
    { when: "20:00 – 22:00", price: "4 000 Ft / óra" },
  ] },
  { court: "Fedett salakpálya", note: "3-as pálya", rows: [{ when: "7:00 – 22:00", price: "5 000 Ft / óra" }] },
];

export const NAV = [
  { href: "/#gyerekek", label: "Gyerekeknek" },
  { href: "/#arak", label: "Pályabérlés" },
  { href: "/#tuskevar", label: "A Tüskevár" },
  { href: "/#hazirend", label: "Házirend" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];
