import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconArrow, IconMail, IconPhone } from "@/components/icons";
import { TurnStrip } from "@/components/TurnStrip";
import { COURSE_PRICES } from "@/lib/course";
import { CLUB } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gyerek tenisz tanfolyam 2026/27",
  description:
    "Gyerek tenisz tanfolyam 5–18 éveseknek Budakalászon: négyhetes turnusok augusztus 31-től június 18-ig, Play & Stay és kemény labdás csoportok, árak és tudnivalók.",
};

const INCLUDED = [
  "4 hetes turnus, heti 1–3 alkalom, igény szerint",
  "Profi edzői felügyelet minden alkalommal",
  "Play & Stay módszertan: puha labdák, a gyerek méretéhez igazított pálya",
  "Ütőt biztosítunk, nem kell sajátot hozni",
  "Továbblépési lehetőség versenyző csoportba, egyéni ajánlat alapján",
];

const PREP = [
  { what: "Cipő", text: "Lapos talpú sportcipő, nem stoplis. Érdemes külön teniszcipő, mert salakos lesz." },
  { what: "Folyadék", text: "Hozz magaddal vizet. Ha nincs, a büfében is lehet venni." },
  { what: "Ruha", text: "Kényelmes melegítő, réteges öltözék. Ne a legféltettebb ruha: a salak nehezen jön ki." },
  { what: "Sapka", text: "Napsütésben kell, különösen tavasszal és nyáron." },
];

export default function Course() {
  return (
    <>
      <section className="page-head">
        <div className="container course-page__head">
          <div>
            <p className="eyebrow">Gyerek tenisz · 5–18 év</p>
            <h1 className="h2 h2--xl">
              Gyerek tanfolyam <em>2026/27</em>
            </h1>
            <p className="lead">
              Heti két alkalom iskola után, 15 és 20 óra között. A konkrét napokat és időpontokat a jelentkezés után, a csoportbeosztásnál
              egyeztetjük, hogy a csoportok a tényleges igényekhez igazodjanak.
            </p>
            <div className="hero__ctas">
              <a href={CLUB.phoneHref} className="btn btn--accent">
                <IconPhone /> Jelentkezés: {CLUB.phone}
              </a>
              <a href={`mailto:${CLUB.email}?subject=Gyerek%20tanfolyam`} className="btn btn--ghost">
                <IconMail /> E-mail
              </a>
            </div>
          </div>
          <figure className="course-page__photo">
            <Image src="/img/play-and-stay.jpg" alt="Gyerekek koordinációs gyakorlatot végeznek karikákkal a salakpályán" fill priority sizes="(max-width: 900px) 100vw, 36vw" style={{ objectFit: "cover" }} />
          </figure>
        </div>
      </section>

      <div className="container course-page">
        <section className="course-page__block" aria-labelledby="turnusok">
          <h2 id="turnusok" className="h3">
            Turnusok <em>négy hetes bontásban</em>
          </h2>
          <TurnStrip detailed />
        </section>

        <section className="course-page__block" aria-labelledby="arak">
          <h2 id="arak" className="h3">
            Részvételi díj <em>4 hetes turnusra</em>
          </h2>
          <p className="course-page__note">Az árak a téli szezonban sem változnak.</p>
          <div className="pricetable glass">
            <table>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Csoport</span>
                  </th>
                  <th scope="col">Heti 1 alkalom</th>
                  <th scope="col">Heti 2 alkalom</th>
                  <th scope="col">Heti 3 alkalom</th>
                </tr>
              </thead>
              <tbody>
                {COURSE_PRICES.map((c) => (
                  <tr key={c.name}>
                    <th scope="row">
                      {c.name}
                      <small>{c.note}</small>
                    </th>
                    {c.per.map((v, i) => (
                      <td key={i} data-label={`Heti ${i + 1} alkalom`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="course-page__cols">
          <section className="course-page__block" aria-labelledby="tartalom">
            <h2 id="tartalom" className="h3">
              Mit <em>tartalmaz?</em>
            </h2>
            <ul className="ticks">
              {INCLUDED.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>

          <section className="course-page__block" aria-labelledby="keszulj">
            <h2 id="keszulj" className="h3">
              Hogyan <em>készüljetek?</em>
            </h2>
            <p className="course-page__note">Salakon teniszezünk, ezért néhány dolog fontos.</p>
            <dl className="prep">
              {PREP.map((p) => (
                <div key={p.what}>
                  <dt>{p.what}</dt>
                  <dd>{p.text}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <section className="course-page__cta glass">
          <div>
            <p className="course-page__cta-title">Szeretnéd kipróbálni?</p>
            <p>Jelentkezz, és felvesszük veled a kapcsolatot a próbaedzéssel kapcsolatban. Vezetőedző: {CLUB.coach}.</p>
          </div>
          <div className="hero__ctas">
            <a href={CLUB.phoneHref} className="btn btn--accent">
              <IconPhone /> {CLUB.phone}
            </a>
            <Link href="/#edzes" className="btn btn--ghost">
              Vissza az edzésekhez <IconArrow />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
