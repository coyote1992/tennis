// Everything both versions show. Sources: szigliget-tennis.hu (Kezdőlap, Rólunk, Tagság, Foglalás,
// Szigliget Open with its galleries, Házirend, ÁSZF and Impresszum, all dated 15 May 2026) and the
// club's email reply in 100web (3 November 2026, Blödorn Péter: new family members are mixed, about
// 60–70% holiday-makers). The court price and the member rates are the ones the booking page itself
// charges (5 000 Ft per court hour for non-members; members free, 1 250 Ft per hour for each
// non-member partner). The old site says "two courts" while its booking grid shows four, so the site
// gives no number.

export const CLUB = {
  name: "Tennis Club Szigliget",
  legal: "Szigliget Tenisz Club Kft.",
  town: "Szigliget",
  region: "Balaton-felvidék",
  operators: "Werner és Eszter Blödorn",
  address: "8264 Szigliget, Réhelyi út 31–32.",
  hours: "Minden nap 8:00–21:00",
  hoursShort: "8:00–21:00",
  phone: "+36 20 331 1630",
  phoneHref: "tel:+36203311630",
  email: "szigligettenisz@gmail.com",
  emailHref: "mailto:szigligettenisz@gmail.com",
  booking: "https://www.szigliget-tennis.hu/appointment",
  bookingDe: "https://www.szigliget-tennis.hu/appointment?lang=de",
  bookingEn: "https://www.szigliget-tennis.hu/appointment?lang=en",
  register: "https://www.szigliget-tennis.hu/register",
  membershipShop: "https://www.szigliget-tennis.hu/membership",
  rules: "https://www.szigliget-tennis.hu/hazirend",
  terms: "https://www.szigliget-tennis.hu/aszf",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Szigliget%20Tenisz%20Club%2C%20R%C3%A9helyi%20%C3%BAt%2031%2C%20Szigliget",
  mapsEmbed: "https://maps.google.com/maps?q=Szigliget%2C%20R%C3%A9helyi%20%C3%BAt%2031&z=15&output=embed",
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "foglalas", label: "Foglalás" },
  { id: "tagsag", label: "Tagság" },
  { id: "palyak", label: "Pályák" },
  { id: "edzok", label: "Edzők" },
  { id: "open", label: "Szigliget Open" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

/** What a court hour costs, as the booking page charges it. */
export const COURT_PRICE = 5000;
export const GUEST_PRICE = 1250;

export const BOOKING_STEPS = [
  {
    title: "Regisztrálj",
    text: "Ingyenes. A fiók az e-mailben kapott megerősítő linkkel válik aktívvá.",
  },
  {
    title: "Válassz időpontot",
    text: "Napot, órát és a játékosok számát (1–4 fő). Egy óra egész órakor kezdődik.",
  },
  {
    title: "Fizess kártyával",
    text: "Online, a Barionon keresztül. A visszaigazolás és a számla e-mailben érkezik.",
  },
];

export const BOOKING_RULES = [
  "Díjmentes lemondás a kezdés előtt 2 óráig, a visszaigazoló levél linkjével.",
  "Ha eső miatt nem játszható a pálya, 30 napon belül kreditet kérhetsz a fiókodban.",
  "A játék az óra 55. percéig tart: az utolsó öt perc a locsolásé és a lehúzásé.",
  "Teniszcipőben és sportos öltözékben lehet pályára lépni.",
];

export type Membership = { id: string; title: string; who: string; price: number; family?: boolean; people: number };

/** Klubtagság 2026: valid until 31 December 2026. */
export const MEMBERSHIPS: Membership[] = [
  { id: "felnott", title: "Felnőtt", who: "1 felnőtt", price: 80000, people: 1 },
  { id: "ket-felnott", title: "2 felnőtt", who: "2 felnőtt", price: 130000, people: 2 },
  { id: "csalad-1", title: "Családi", who: "2 felnőtt + 1 gyerek", price: 140000, family: true, people: 3 },
  { id: "csalad-2", title: "Családi", who: "2 felnőtt + 2 gyerek", price: 160000, family: true, people: 4 },
  { id: "csalad-3", title: "Családi", who: "2 felnőtt + 3 gyerek", price: 175000, family: true, people: 5 },
  { id: "gyerek", title: "Gyerek", who: "14 éves korig", price: 40000, people: 1 },
  { id: "ifjusagi", title: "Ifjúsági", who: "15–20 éves korig", price: 60000, people: 1 },
];

export const MEMBERSHIP_NOTES = {
  year: "2026",
  valid: "A tagság a naptári év végéig, december 31-ig érvényes.",
  kids: "A családi csomagban a gyerek 16 éves korig számít.",
  daily: "Tagként naponta legfeljebb 2 óra foglalható a tagi feltételekkel; ami ezen felül van, teljes áron megy.",
  reply: "Új családi tagjaink többsége nyaraló, a többiek helyiek.",
};

export const COURTS = {
  title: "Salak, nyárfák, klubház",
  text: "Gondozott salakpályák magas nyárfák és lombos fák között, a pályák mellett a klubház teraszával. A pályákat Werner és Eszter Blödorn üzemeltetik.",
  points: [
    "Salakos pályák",
    "Klubház terasszal",
    "Parkoló a kijelölt helyen",
    "Kölcsönfelszerelés térítés ellenében",
  ],
  visitors:
    "Kísérők és nézők a klubház közös területein várhatnak. 18 év alatti gyerek felnőtt felügyelete mellett lehet a klub területén, kutyát pórázon lehet hozni.",
};

export const COACHES = [
  { name: "Szántó Bálint", phone: "+36 30 814 4216", phoneHref: "tel:+36308144216" },
  { name: "Kalmár Gábor", phone: "+36 70 310 9713", phoneHref: "tel:+36703109713" },
];

export const OPEN = {
  year: "2026",
  dates: "2026. augusztus 7–9.",
  kidsFrom: "Gyerekeknek augusztus 6-tól",
  events: [
    { title: "Férfi egyéni", detail: "−40, 40–60, +60" },
    { title: "Női egyéni" },
    { title: "Férfi páros" },
    { title: "Vegyes páros" },
    { title: "Gyerekszámok", detail: "−14 és páros, kezdők és haladók külön" },
    { title: "Ifjúsági", detail: "14–18 éves korig" },
  ],
  fees: [
    { label: "Egyéni", price: "9 000 Ft / fő" },
    { label: "Páros", price: "13 000 Ft / pár" },
    { label: "Ifjúsági", price: "6 000 Ft" },
    { label: "Gyermek", price: "5 000 Ft" },
  ],
  entry: [
    { label: "Felnőttek", value: "augusztus 7. (péntek) 12:00-ig, a verseny is ekkor kezdődik" },
    { label: "Gyermekek", value: "augusztus 6. (csütörtök) 9:00-ig, kezdés 9:00" },
  ],
  format:
    "Két nyert szettig, szettenként négy játékig, előny nélkül, a döntő szett 10 pontos tiebreak. Az elődöntőktől hat játékig.",
  extras: [
    "Versenyszámonként az első négy helyezett serleget, érmet és tárgynyereményt kap.",
    "Szombaton 13:00-tól Player's Party: az ebéd minden résztvevőnek ingyenes.",
    "Eredményhirdetés vasárnap 17:00 körül. Eső esetén a következő napokon folytatódik.",
  ],
  preEntry: "Előnevezés SMS-ben a +36 20 331 1630-as számon, vagy e-mailben.",
};

export const FORM = {
  topics: ["Pályafoglalás", "Tagság", "Edzés", "Szigliget Open", "Egyéb"],
};

/** 80000 → "80 000" (no-break space, same on server and client). */
export const fmt = (n: number) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
