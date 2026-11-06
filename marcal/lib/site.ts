// Everything both versions show. Sources: teniszgyor.hu (Főoldal with its counters and events,
// Rólunk with the house rules and opening hours, Sportágak, Szolgáltatások with the coaches,
// Csapatunk, Kapcsolat, the "Pilates & Padel" and "duális képzés" posts) and Pátka-Szitter Kata's
// email reply in 100web: an enquiry goes to a coach, who sets out the options and, if needed,
// brings in a colleague so the player lands with the right coach.
// The site's sports photos are mostly stock images, so only the centre's own photos are used.

export const CLUB = {
  name: "Marcal Teniszcentrum",
  since: "2006",
  address: "9024 Győr, Gulyás István u. 3.",
  phone: "+36 30 466 0088",
  phoneHref: "tel:+36304660088",
  phone2: "+36 96 548 444",
  phone2Href: "tel:+3696548444",
  email: "info@teniszgyor.hu",
  emailHref: "mailto:info@teniszgyor.hu",
  booking: "https://sportmateclub.com/hu",
  facebook: "https://www.facebook.com/marcalteniszcentrum",
  instagram: "https://www.instagram.com/teniszgyor/",
  tiktok: "https://www.tiktok.com/@teniszcentrum_gyor",
  events: "https://www.facebook.com/marcalteniszcentrum/events",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Marcal+Teniszcentrum%2C+9024+Gy%C5%91r%2C+Guly%C3%A1s+Istv%C3%A1n+u.+3.",
  mapsEmbed: "https://maps.google.com/maps?q=Marcal%20Teniszcentrum%2C%209024%20Gy%C5%91r%2C%20Guly%C3%A1s%20Istv%C3%A1n%20u.%203.&z=16&output=embed",
  manager: { name: "Pátka-Szitter Kata", role: "klubmenedzser" },
};

export const HOURS = [
  { days: "Hétfő – szombat", time: "7:00 – 22:00" },
  { days: "Vasárnap", time: "7:00 – 21:00" },
];

export const SEASONS = { summer: "április 16. – október 15.", winter: "október 16. – április 15." };

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "sportagak", label: "Sportágak" },
  { id: "foglalas", label: "Foglalás" },
  { id: "oktatas", label: "Oktatás" },
  { id: "esemenyek", label: "Események" },
  { id: "rendezvenyek", label: "Rendezvények" },
  { id: "jelentkezes", label: "Jelentkezés" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export const FACTS = [
  { num: "2006", label: "óta az ütős sportok szolgálatában" },
  { num: "4", label: "sportág: tenisz, padel, squash, bowling" },
  { num: "1000+", label: "óra, amit edzőink évente a pályán töltenek" },
  { num: "300+", label: "gyerek csoportos óra évente" },
];

export type Sport = { id: string; name: string; tagline: string; courts: string; text: string; features: string[] };
export const SPORTS: Sport[] = [
  {
    id: "tenisz",
    name: "Tenisz",
    tagline: "Örök klasszikus, ami sosem megy ki a divatból.",
    courts: "7 salakos pálya",
    text: "Nyáron szabadtéren, télen fűtött sátorral fedve: a téli szezonban 4 pályát fedünk le. Folyamatos karbantartás, automata öntözőrendszer és évente teljes felújítás; nyáron három pályán világítás az esti játékhoz.",
    features: ["Alkalmi foglalás és váltható szezonbérlet", "Ütőbérlés", "Gyerek- és felnőttoktatás"],
  },
  {
    id: "padel",
    name: "Padel",
    tagline: "Trendi, dinamikus közösségi sport. Vigyázz, függőséget okoz!",
    courts: "4 pálya, ebből 3 fedett",
    text: "A padel a tenisz és a fallabda legjobb elemeit ötvözi, és gyorsan el lehet jutni olyan szintre, ahol már mindenkinek élvezetes. A fedett csarnok télen fűtött, nyáron hűtött.",
    features: ["10 alkalmas bérlet", "Ütőbérlés", "Gyerek- és felnőttoktatás"],
  },
  {
    id: "squash",
    name: "Squash",
    tagline: "Pörgős, mozgalmasabb játékforma, mint hinnéd.",
    courts: "4 pálya, ebből 1 teljes üveg",
    text: "Légkondicionált pályák, köztük egy teljes üvegpálya a különleges élményre vágyóknak. Kezdőket, amatőröket és versenyzőket is várunk.",
    features: ["10 alkalmas bérlet", "Ütőbérlés", "Gyerek- és felnőttoktatás"],
  },
  {
    id: "bowling",
    name: "Bowling",
    tagline: "Családi és baráti összejövetelek kedvence.",
    courts: "2 pálya és klubhelyiség",
    text: "Egy jó társaság, néhány strike és egy kis nevetés: családi programra, születésnapra vagy csapatépítőre is.",
    features: ["Rendezvényterem", "Catering lehetőség", "Születésnapok, csapatépítők"],
  },
];

export const EXTRAS = [
  { name: "Asztalitenisz", text: "2 ping-pong asztal, versenyre további asztalokkal; ütőt és labdát is adunk." },
  { name: "Büfé és terasz", text: "Hideg és meleg italok, kávé, könnyű harapnivalók; nyári estéken havonta közösségi programok a teraszon." },
  { name: "Marcal Beauty", text: "Szépség- és wellness-szolgáltatások a teniszcentrumban." },
  { name: "Ingyenes parkolás", text: "A teniszcentrumnál ingyen parkolhatsz." },
];

export const BOOKING_WHY = [
  "Azonnal látod a szabad időpontokat",
  "Bárhonnan, bármikor foglalhatsz",
  "Egy helyen követed és módosítod a foglalásaidat",
  "Az app értesítést küld, így nem maradsz le semmiről",
];

export const RULES = [
  { title: "Bejelentkezés", text: "Pályára lépni csak a recepción történő bejelentkezés után lehet." },
  { title: "Játékidő", text: "Tenisz: egész órától 55 percig, utána 5 perc pályalehúzás. Squash, padel és bowling: 60 perc." },
  { title: "Lemondás", text: "Tenisz, squash és bowling: legalább 24 órával előtte. Padel: legalább 48 órával előtte." },
  { title: "Szezonok", text: "26 hetes téli és 26 hetes nyári szezon; a szezonon belül a lemondott alkalom később pótolható." },
];

export type Coach = { name: string; sports: string; img?: string };
export const COACHES: Coach[] = [
  { name: "Reider Tamás", sports: "Tenisz, padel és squash", img: "/img/reider-tamas.jpg" },
  { name: "Jakab Norbert", sports: "Tenisz és padel", img: "/img/jakab-norbert.jpg" },
  { name: "Mészáros Gergő", sports: "Padel", img: "/img/meszaros-gergo.jpg" },
  { name: "Gulyás Balázs", sports: "Padel" },
  { name: "Szigeti Boglárka", sports: "Padel · recepció" },
];

export const COACHING = {
  lead: "Szakképzett, a központban önállóan dolgozó edzők, egyéni és csoportos órák kezdőknek és haladóknak, teniszben, padelben és squashban.",
  how: "Töltsd ki a jelentkezést (sportág, egyéni vagy csoportos, tudásszint, időpontok). Továbbítjuk egy edzőnknek, aki felvázolja a lehetőségeket, és ha kell, bevon egy kollégát is, hogy a neked megfelelő szakembernél landolj.",
  kids: "A gyerekcsoportok minden év szeptember elején indulnak, korcsoport és tudásszint szerint. Egyéni oktatás egész évben, gyerekeknek és felnőtteknek.",
  camps: "Az iskolai nyári szünetben gyerektáborokat szervezünk, tenisz- és fallabdaedzésekkel, változatos programokkal.",
};

export type Event = { tag: string; title: string; when?: string; text: string; href?: string };
export const EVENTS: Event[] = [
  { tag: "Következő esemény", title: "Ingyenes squash nyílt nap gyerekeknek", when: "November 21., 15–16 óra", text: "Vidám, mozgással teli játékos próbaóra: gyertek, próbáljátok ki a fallabdát! Minden érdeklődő családot szeretettel várunk." },
  { tag: "Havonta", title: "MTC Padel League – Americano", text: "Havonta egy alkalommal Americano körversenyt tartunk padelben." },
  { tag: "Visszatekintő", title: "Pilates & Padel", when: "Március 28.", text: "Győrben elsőként rendeztük meg: egy teljes pilates óra és egy lendületes padel edzés egyszerre, egy helyen." },
  { tag: "Duális képzés", title: "A sport lehet a szakmád", text: "Duális képzőhelyként fitness-wellness instruktor és sportedző–sportszervező tanulóknak adunk gyakorlati helyet." },
];

export const VENUE = {
  family: "Születésnap, névnap, évforduló: különtermünkben akár 50 fővel ünnepelhettek. Egyedi ajánlatot adunk, megszervezzük a hideg- vagy melegtálas cateringet és a dekorációt.",
  corporate: "Céges rendezvények, workshopok és tréningek akár 50 főig, projektorral, flipcharttal és kávészünettel, sportolási lehetőséggel és ingyenes parkolással. Vállalati partnereinknek kedvezményes sportcsomagokat is kínálunk.",
};

export const REVIEWS = [
  "Nagyon szeretünk ide járni a kollégákkal. Akár teniszről, akár fallabdáról vagy padelről van szó. Kedves személyzet, remek pályák.",
  "A padel- és a teniszoktatásokon különösen nagy segítséget jelentettek kezdő gyermekem számára az edzők. A nyári tenisztáborok is fantasztikusak voltak.",
  "Régóta járunk a Teniszcentrumba, szeretjük a családias hangulatot, kedvesek az ott dolgozók.",
];

/** The two forms of the club's site: coaching enquiry and partner search. */
export const FORM = {
  sports: ["Tenisz", "Padel", "Squash"],
  formats: ["Egyéni", "Csoportos", "Mindegy"],
  levels: ["Kezdő", "Középhaladó", "Haladó", "Versenyző"],
};
