// Club facts used across the site. Every value here comes from the club's own website
// (fehervartenisz.hu: homepage, Pályabérlés, Házirend, the 2023/24 price list, the coaching
// programme) or the club's email signature; tournament results from the ITF / Wikipedia records.

export const CLUB = {
  name: "Kiskút Tenisz Klub",
  fullName: "Fehérvár Kiskút Tenisz Klub",
  motto: "Több mint tenisz!",
  city: "Székesfehérvár",
  address: "8000 Székesfehérvár, Kiskút\u00a0útja\u00a03.",
  street: "Kiskút útja 3.",
  postal: "8000 Székesfehérvár",
  phone: "+36 30 503 8223",
  phoneHref: "tel:+36305038223",
  email: "kiskuttenisz.hella@gmail.com",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kisk%C3%BAt+Tenisz+Klub%2C+Sz%C3%A9kesfeh%C3%A9rv%C3%A1r%2C+Kisk%C3%BAt+%C3%BAtja+3",
  mapsEmbed:
    "https://maps.google.com/maps?q=Kisk%C3%BAt%20Tenisz%20Klub%2C%20Sz%C3%A9kesfeh%C3%A9rv%C3%A1r%2C%20Kisk%C3%BAt%20%C3%BAtja%203&z=15&output=embed",
  legacySite: "https://fehervartenisz.hu",
};

export const HOURS = [
  { days: "Hétfő – péntek", time: "6:00 – 22:00" },
  { days: "Szombat – vasárnap", time: "7:00 – 20:00" },
];

export const NAV = [
  { href: "/#palyak", label: "Pályák" },
  { href: "/#foglalas", label: "Foglalás" },
  { href: "/#kiskut-open", label: "Kiskút Open" },
  { href: "/#edzes", label: "Edzés" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];
