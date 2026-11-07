// Everything both versions show. Sources: elonyitt.hu (Főoldal, Pályabérlés, Edzőink, Galéria,
// Kapcsolat; Teniszsuli, Versenyek, Hírek and Rólunk are empty; Táblázat is password-protected),
// klub.elonyitt.hu (online booking with registration, "Teniszklub Piramis" ladder after login) and the
// club's email reply in 100web (3 November 2026: most new adults come through the free trial, and
// parents also take up the game). Photos: the club's July 2024 gallery and a 2021 photo of children
// training in the club's winter tennis tent.

export const CLUB = {
  name: "Előnyitt S.E. Tenisz Klub",
  short: "Előnyitt SE",
  town: "Nyergesújfalu",
  address: "Nyergesújfalu, Május 1. tér 8. mögött",
  hours: "Minden nap 7:00–21:00",
  contact: "Héjjas Mihály",
  phone: "+36 30 982 0360",
  phoneHref: "tel:+36309820360",
  email: "elonyittse@gmail.com",
  emailHref: "mailto:elonyittse@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100075819648353",
  booking: "https://klub.elonyitt.hu/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Nyergesújfalu%2C%20Május%201.%20tér%208.",
  mapsEmbed: "https://maps.google.com/maps?q=Nyergesújfalu%2C%20Május%201.%20tér%208.&z=16&output=embed",
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "arak", label: "Árak" },
  { id: "kezdes", label: "Kezdés" },
  { id: "palyak", label: "Pályák" },
  { id: "edzo", label: "Edző" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

/** The court-hire prices, as the club publishes them. */
export const PRICES = [
  {
    id: "gyerek",
    title: "14 éves korig",
    price: "Ingyenes",
    note: "A gyerek kísérőjének is.",
  },
  {
    id: "eves",
    title: "Éves pályabérlet",
    price: "10 000 Ft",
    unit: "/ fő / év",
    note: "Időben és gyakoriságban korlátlan.",
    main: true,
  },
  {
    id: "kiprobalas",
    title: "Kipróbálás",
    price: "Ingyenes",
    unit: "2 alkalom",
    note: "Két alkalom, hogy lásd, neked való-e.",
  },
];

export const STEPS = [
  {
    title: "Regisztrálj vagy hívj",
    text: "Foglalni online lehet a klub rendszerében (regisztráció után), vagy telefonon Héjjas Mihálynál.",
  },
  {
    title: "Játssz két alkalmat ingyen",
    text: "A kipróbálás két alkalomra ingyenes. A legtöbb új felnőtt tagunk így kezdi.",
  },
  {
    title: "Maradj egész évre",
    text: "Ha tetszik, az éves pályabérlet 10 000 Ft, és utána annyit játszol, amennyit szeretnél.",
  },
];

export const FAMILY =
  "A 14 év alatti gyerekek és a kísérőjük ingyen játszhatnak. Sok szülő a gyerek mellett kezdi el ezt a gyönyörű sportágat.";

export const COURTS = {
  title: "Salakpályák a fák között",
  text: "A pályák Nyergesújfalun, a Május 1. tér mögött vannak, fák között, a klubház mellett. Minden nap reggel héttől este kilencig lehet játszani.",
  points: ["Salakos pályák", "Klubház a pályák mellett", "Parkolás a pályák mellett", "Télen teniszsátor"],
  piramis: "A klub online rendszerében foglalhatsz pályát, és bejelentkezés után ott látod a klub piramis-ranglistáját is.",
};

export const COACH = {
  name: "Pánya Sándor",
  role: "Edző",
  intro: "1980-ban fogott először teniszütőt, és több mint negyven éve töretlen a lelkesedése.",
  bio: [
    "1983-ban végezte el a segédedzői tanfolyamot, később egy kétéves középfokú teniszedző-képzést. Tanított Nyergesújfalun, Tatabányán és Tatán.",
    "MTSZ B-licencet és Play and Stay képesítést szerzett.",
    "2022-ben iskolatenisz-programot indított: két év alatt 80 gyerek ismerte meg a teniszt a szabadban. Télen a klub teniszsátrában óvodás program is indult.",
  ],
  offer: "Csoportos és egyéni oktatás, igény szerint.",
  quote:
    "Hivatásomnak tekintem, hogy a tenisz szeretetével és az utánpótlás nevelésével segítsem a gyermekek testi, szellemi fejlődését.",
};

export const FORM = {
  topics: ["Kipróbálás", "Éves bérlet", "Oktatás", "Gyerekeknek", "Egyéb"],
};
