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

/** Homepage sections, in page order; both versions use these ids, so the A/B switch keeps your place. */
export const SECTIONS = [
  { id: "palyak", label: "Pályák" },
  { id: "foglalas", label: "Foglalás" },
  { id: "kiskut-open", label: "Kiskút Open" },
  { id: "edzes", label: "Edzés" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

/** Version B's navigation (version B lives under /b). */
export const NAV = SECTIONS.map((s) => ({ href: `/b#${s.id}`, label: s.label }));

export const PARKING =
  "a régi klubház előtti parkolóban és a fehér murvás területen. A sporttelepen kívül, a közúton ingyenes.";
export const PAYMENT = "Fizetés készpénzzel a recepción (hétköznap 8–22), online SimplePay-jel vagy átutalással.";

// ——— moved from the homepage so both versions show the same facts ———

export const FACTS = [
  { num: "6", label: "salakpálya a megújult, 10 000 m²-es telken" },
  { num: "3", label: "pálya világítással, a sötétedés után is" },
  { num: "14", label: "napra előre foglalhatsz online" },
  { num: "2016", label: "májusa óta várják a játékosokat a pályák" },
];

export const STEPS = [
  {
    title: "Regisztrálj a recepción",
    text: "Az első alkalommal felvesszük az adataidat, és a recepció elküldi a HELLA foglalási rendszer belépési adatait.",
  },
  {
    title: "Foglalj online, két hétre előre",
    text: "A naptárban látod, melyik pálya szabad. Alkalmi órát legfeljebb 14 nappal előre foglalhatsz, és fizethetsz rögtön SimplePay-jel.",
  },
  {
    title: "Ha mégsem jössz, mondd le 24 órával előtte",
    text: "A lemondás is a rendszerben történik. Amit a kezdés előtt 24 órán belül mondasz le, azt lejátszottnak tekintjük.",
  },
];

export const HALL_PRICES = [
  { when: "Hétköznap 8–16", price: "8 500 Ft" },
  { when: "Hétköznap 16–20", price: "10 000 Ft", peak: true },
  { when: "Hétköznap 20–8", price: "6 300 Ft" },
  { when: "Hétvégén és ünnepnap", price: "8 000 Ft" },
];

export const PASSES = [
  { name: "Éves bérlet", detail: "50 alkalom, hétköznap", day: "335 000 Ft", eve: "400 000 Ft" },
  { name: "Téli bérlet", detail: "25 alkalom, hétköznap", day: "180 000 Ft", eve: "220 000 Ft" },
];

export const GOOD_TO_KNOW = [
  "A váltócipő kötelező.",
  "A pályára legfeljebb 5 perccel a kezdés előtt lehet bemenni.",
  "Az óra utolsó 5 perce a pályáé: a játékosok lehúzzák a salakot.",
  "Öltözőszekrény a recepción kérhető, 500 Ft kaucióért.",
];

export const OPEN = [
  { year: "2017", tag: "ITF női torna", text: "Az első Kiskút Open. A döntőt Udvardy Panna nyeri Jani Réka Luca ellen." },
  { year: "2018", tag: "ITF női torna", text: "Ioana Gașpar a bajnok, a döntőben Lukács Vandát veri." },
  { year: "2019", tag: "Két ITF-torna", text: "Egy évben két női verseny: Nicoleta Dascălu, majd Danka Kovinić nyer." },
  { year: "2023", tag: "ATP Challenger", text: "Először férfi Challenger a Kiskúton. Bajnok: Hamad Međedović." },
  { year: "2024", tag: "ATP Challenger 75", text: "Március 11–17. Tseng Chun-hsin nyeri a tornát." },
  { year: "2025", tag: "ITF női torna", text: "Visszatér a női verseny. Sinja Kraus nyer, a döntőben Tóth Amarissa ellen." },
];

export const STAGES = [
  {
    key: "red",
    name: "Piros pálya",
    court: { len: 11, wid: 5.5 },
    goals: ["Egy tie-break lejátszása", "Ne féljen hálóra menni", "A szervamozdulat elsajátítása"],
  },
  {
    key: "orange",
    name: "Narancs pálya",
    court: { len: 18, wid: 8.23 },
    goals: ["Pontszámolás meccs közben", "Pörgetés és nyesés", "Első és második szerva különbsége"],
  },
  {
    key: "green",
    name: "Zöld pálya",
    court: { len: 23.77, wid: 8.23 },
    goals: ["Egy erős, nyerő ütés", "Vágott és pörgetett szerva", "Tempóváltás játék közben"],
  },
];

export const PROGRAMS = [
  {
    age: "6–11 év",
    title: "Gyerektenisz",
    text: "Csoportos edzés szakképzett edzőkkel, kor és tudásszint szerinti csoportokban. A cél, hogy a gyerekek minél többet üssenek labdába.",
    meta: ["Kezdők: 4–6 fős csoport, heti 2 × 1 óra", "Haladók: 2–3 fős csoport, heti 3 × 1,5 óra"],
  },
  {
    age: "11–14 év",
    title: "Szabadidős vagy versenyző",
    text: "Ebben a korban válik el, ki játszik kedvtelésből és ki versenyez. Mindkét út mást kíván, ezért másképp is edzünk.",
    meta: ["Szabadidős: heti 2–3 óra csoportos edzés", "Versenyző: napi legalább 1,5 óra tenisz + erőnlét"],
  },
  {
    age: "Felnőtt",
    title: "Amatőr játékosok",
    text: "Szabadidős játékra vagy amatőr versenyekre: egyéni vagy kiscsoportos edzés, edzővel vagy partnerrel.",
    meta: ["Szabadidős: heti 1–2 óra, egyéni vagy 3–4 fős csoport", "Versenyre készülve: heti 3–4 óra"],
  },
  {
    age: "Felnőtt kezdő",
    title: "Tennis Xpress tanfolyam",
    text: "Az ITF Tennis Xpress programjára épülő tanfolyam azoknak, akik felnőttként kezdenék: a szervától és a returntől az első teljes meccsig.",
    meta: ["2–6 fős csoport", "5 hét, heti 2 × 1 óra"],
  },
];
