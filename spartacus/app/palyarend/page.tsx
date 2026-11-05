import type { Metadata } from "next";
import Link from "next/link";
import { CLUB } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pályarend",
  description: "A Siófoki Spartacus SE 2026-os pályahasználati rendje és foglalási szabályai.",
};

const RULES = [
  {
    id: "foglalas",
    title: "Foglalás és lemondás",
    items: [
      <>
        A pályák <strong>kizárólag az online foglalási rendszerben szereplő foglalások alapján</strong> használhatók ({CLUB.bookingLabel}).
      </>,
      <>Alkalmi foglalás legfeljebb két héttel előre lehetséges.</>,
      <>
        <strong>24 órával a foglalás időpontja előtt ingyenesen lemondható vagy áttehető</strong> az alkalmi és a szezonbérletes óra is.
      </>,
      <>Fizetés SimplePay-jel vagy kreditből. Kreditet készpénzzel a klubvezetőnél vagy online, SimplePay-jel lehet feltölteni.</>,
      <>A pályadíj technikai okok miatt nem osztható meg.</>,
    ],
  },
  {
    id: "palya",
    title: "A pálya rendje",
    items: [
      <>
        A pályát <strong>5 perccel az óra vége előtt, azaz :55-kor</strong> kérjük lehúzni, a pályalehúzót a pályaelválasztó fémrácshoz
        visszatenni.
      </>,
      <>Az érkező játékosok legkorábban 5 perccel a kezdés előtt, :55-re érkezzenek a pályára.</>,
      <>A téli szezonban a 19:00-kor és 20:00-kor végző utolsó játékosoknak nem kötelező lehúzni a pályát, ha valóban nem követi őket senki.</>,
      <>A világítás minden nap a játék vége után 10 perccel automatikusan lekapcsol, ezért a pályát legkésőbb óra 5 perckor kérjük elhagyni.</>,
      <>A pálya kizárólag teniszjátékra használható, kivéve, ha a klubvezetés másként rendelkezik.</>,
    ],
  },
  {
    id: "oltozek",
    title: "Cipő és öltözék",
    items: [
      <>Pályahasználat kizárólag arra alkalmas cipőben engedélyezett.</>,
      <>Csak megfelelő sportruházatban: fürdőruhában vagy más nem sportos ruhában, illetve félmeztelenül nem lehet a pályán játszani.</>,
    ],
  },
  {
    id: "klub",
    title: "A klub területén",
    items: [
      <>Kérjük, az öltözők és a büfé használatakor ügyeljetek a tisztaságra.</>,
      <>A klub területére ételt és italt behozni tilos: kizárólag a büfében vásárolt termékek fogyaszthatók.</>,
      <>A pálya és a klub berendezéseiben kárt tenni tilos; az okozott kárt meg kell téríteni.</>,
      <>A pályák területére állatot bevinni tilos.</>,
      <>A pályák területén tilos a dohányzás és a nyílt láng használata.</>,
      <>6 év alatti gyermekek csak felnőtt kísérővel tartózkodhatnak a pályákon.</>,
      <>A pályákat mindenki saját felelősségére használja; az őrizetlenül hagyott értékekért a klub üzemeltetője nem vállal felelősséget.</>,
    ],
  },
];

export default function CourtRules() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Pályarend 2026</p>
          <h1 className="h2 h2--xl">
            Hogy a következő játékos is <em>jó pályát kapjon.</em>
          </h1>
          <p className="lead">
            A Siófoki Spartacus SE pályahasználati rendje és foglalási szabályai röviden. Kérdés esetén: {CLUB.manager},{" "}
            <a href={CLUB.managerPhoneHref}>{CLUB.managerPhone}</a>.
          </p>
        </div>
      </section>

      <div className="container rules">
        <nav className="rules__toc" aria-label="A pályarend részei">
          {RULES.map((r) => (
            <a key={r.id} href={`#${r.id}`}>
              {r.title}
            </a>
          ))}
        </nav>
        <div className="rules__body">
          {RULES.map((r) => (
            <section key={r.id} id={r.id} className="rule glass" aria-labelledby={`${r.id}-t`}>
              <h2 id={`${r.id}-t`}>{r.title}</h2>
              <ul>
                {r.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </section>
          ))}
          <p className="rules__valid">
            <Link href="/#foglalas" className="link-arrow">
              Vissza a foglaláshoz
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
