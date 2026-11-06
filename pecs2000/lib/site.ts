// Everything both versions show. Sources: teniszpecs2000.hu (Kezdőlap, Rólunk with the club history
// and the three coaches, Tanfolyamok, Kapcsolat with the enquiry form and social handles) and Koncz
// Liliána's email reply in 100web: family tennis is arranged around the families who sign up and the
// indoor court capacity, and +36 20 932 6860 is the number for details or to book a time.
// The site's other photos are Webnode stock images, so only the coach portraits are used.

export const CLUB = {
  name: "Pécs 2000 Tenisz Club",
  short: "Pécs 2000 TC",
  founded: "1993",
  team: "Koncz Tennis Team",
  address: "7633 Pécs, Tüzér utca 22.",
  phone: "+36 20 932 6860",
  phoneHref: "tel:+36209326860",
  email: "pecs2000teniszclub@gmail.com",
  emailHref: "mailto:pecs2000teniszclub@gmail.com",
  instagram: { handle: "pecs2000_teniszclub", url: "https://www.instagram.com/pecs2000_teniszclub/" },
  tiktok: { handle: "pecs.2000.tc", url: "https://www.tiktok.com/@pecs.2000.tc" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=7633+P%C3%A9cs%2C+T%C3%BCz%C3%A9r+utca+22.",
  mapsEmbed: "https://maps.google.com/maps?q=7633%20P%C3%A9cs%2C%20T%C3%BCz%C3%A9r%20utca%2022.&z=16&output=embed",
};

/** Section ids shared by both versions, in page order; the version switch keeps your place by them. */
export const SECTIONS = [
  { id: "tanfolyamok", label: "Tanfolyamok" },
  { id: "csaladi", label: "Családi tenisz" },
  { id: "edzok", label: "Edzők" },
  { id: "tortenet", label: "A klub" },
  { id: "szerviz", label: "Ütőszerviz" },
  { id: "jelentkezes", label: "Jelentkezés" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export const METHOD =
  "Az iskolatenisz programot az országban elsők között indítottuk. Alapja a Magyar Tenisz Szövetség Play&Stay módszertana és a Koncz Tennis Team saját oktatási rendszere; az edzéseket „A” licenszes vezetőedző és PTR Professional minősítésű edzők vezetik.";

export type Course = { id: string; group: string; name: string; age?: string; text: string };
export const COURSES: Course[] = [
  { id: "ovoda", group: "Gyerekeknek", name: "Tenisz óvoda", age: "5–8 évesek", text: "Kiscsoportos foglalkozások óvodásoknak, szivacslabdával; a mini teniszütőt mi biztosítjuk." },
  { id: "iskolas", group: "Gyerekeknek", name: "Iskolás gyerekek", age: "9–13 évesek", text: "A Magyar Tenisz Szövetség iskolatenisz programjának részeként, kis létszámú csoportokban, életkor és tudás szerint. Play+Stay: piros, narancs és zöld labdás edzések." },
  { id: "kozepiskolas", group: "Gyerekeknek", name: "Középiskolások", age: "14–18 évesek", text: "Csoportos teniszoktatás középiskolásoknak, a klub életpálya-modelljének részeként." },
  { id: "felnott-alap", group: "Felnőtteknek", name: "Felnőtt alapprogram", age: "Kezdőknek", text: "Kis létszámú, 3–6 fős csoportokban, zöld labdás foglalkozásokon; az ütőt mi biztosítjuk." },
  { id: "felnott-halado", group: "Felnőtteknek", name: "Felnőtt haladó csoport", age: "Haladóknak", text: "Előzetes szintfelmérés után kis létszámú csoportokban, házi versenyekkel összekapcsolva." },
  { id: "egyeni", group: "Egyénileg", name: "Egyéni foglalkozás", age: "Kezdőtől haladóig", text: "Kezdőknek az alaptechnika, haladóknak szintfelmérés után a céljaikhoz szabott edzésprogram." },
];

export const FAMILY = {
  title: "Családi tenisz",
  text: "A szülők a gyerekeikkel együtt sajátíthatják el a játék alapjait. Nincs kötött órarend: az edzéseket a jelentkező családokhoz és a fedett pályák szabad idejéhez igazítjuk.",
};

export type Coach = { name: string; role: string; img: string; bio: string; results: string };
export const COACHES: Coach[] = [
  {
    name: "Koncz Zsolt",
    role: "Vezetőedző",
    img: "/img/koncz-zsolt.jpg",
    bio: "A Testnevelési Főiskola teniszedzői szakán végzett. „A játék alapjai” oktatófilm szerzője, US PTR Professional és magyarországi „A” licenszes edző, számos korosztályos és felnőtt magyar bajnok nevelőedzője. Tíz éven át irányította a Final Four-ba jutott női Szuperliga-csapatot.",
    results: "Korosztályos válogatott és első osztályú felnőtt játékos volt az MTK-VM, az SVSE, a Siófoki Spartacus és a Pécsi Spartacus csapatában.",
  },
  {
    name: "Koncz Liliána",
    role: "Edző",
    img: "/img/koncz-liliana.jpg",
    bio: "18 évesen szerezte meg a US PTR Professional minősítést. Vezette a Magyar Tenisz Szövetség iskolatenisz programját Pécsett, Zalaegerszegen, Keszthelyen és Lentiben; Pécsett ma három iskolában szervezi és vezeti.",
    results: "12 éves kora óta korosztályos válogatott, sokszoros korosztályos magyar bajnok, Tennis Europe versenyek helyezettje és győztese; a Final Four-os női Szuperliga-csapat játékosa volt.",
  },
  {
    name: "Koncz Levente",
    role: "Edző",
    img: "/img/koncz-levente.jpg",
    bio: "Több mint 15 éve teniszezik, 2020 óta edzőként dolgozik: egyéni és csoportos edzéseket tart, és több iskolában vezette az iskolatenisz programot. Célja, hogy a játékosai valóban megszeressék a sportágat.",
    results: "Magyar bajnoki és csapatbajnoki dobogós helyezések, vidéki bajnoki arany.",
  },
];

export const HISTORY = [
  { year: "1993", text: "A Koncz Tennis Team és baráti köre megalapítja a Pécs 2000 Tenisz Clubot. Már az első évben a klub rendezi a 25 000 dolláros pécsi férfi teniszverseny magyarországi állomását." },
  { year: "1994", text: "Elkészül az ország első teniszes oktatófilmje, „A játék alapjai”, Czopf János közreműködésével. Ez lesz a klub saját oktatási rendszerének alapja." },
  { year: "1995", text: "A klub kezdeményezi a Fedettpályás Korosztályos Magyar Bajnokság elindítását, és az első 15 évben a Magyar Tenisz Szövetséggel kötött szerződés alapján rendezi." },
  { year: "1997", text: "A 12 évesek Európai körversenye Magyarországra kerül: egyik állomását öt éven át a klub rendezi." },
  { year: "2000", text: "Elsők között indítjuk el az iskolatenisz programot, és éveken át rendezzük a regionális iskolatenisz versenyeket." },
];

export const ACHIEVEMENTS = [
  "Számos egyéni, páros és csapat korosztályos magyar bajnoki cím",
  "Koncz Barnabás korosztályában a legjobb 15 közé került a Tennis Europe ranglistáján",
  "Női csapatunk öt éven át folyamatosan a Szuperliga Final Four résztvevője volt",
];

export const SERVICES = [
  { name: "Húrozás", text: "Multifilament és monofilament húrokkal, automata húrozógéppel." },
  { name: "Grip", text: "Alap- és fedőgrip csere, több színben, nedvszívó változatban is." },
  { name: "Nyél átalakítás", text: "Nyélméret csökkentése vagy növelése, legfeljebb egy mérettel." },
  { name: "Súlyozás", text: "Ólomszalaggal, illetve a súlypont áthelyezésével." },
  { name: "Húrvezető csere", text: "Sérült persely cseréje egyenként, vagy teljes garnitúra, ha megrendelhető." },
  { name: "Kiegészítők", text: "Fejvédő szalag, rezgéscsillapító." },
];

/** The courses offered in the enquiry form, as on the club's own form. */
export const ENQUIRY_COURSES = ["Tenisz óvoda", "Iskolás gyerekek", "Középiskolások", "Felnőtt tanfolyam", "Egyéni foglalkozás", "Családi tenisz"];
