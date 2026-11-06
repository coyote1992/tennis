import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, FaqList, Head, PageHero } from "@/components/a/Blocks";
import { Icon } from "@/components/shared/Icon";
import { GOOD_MORNING_CLUB, KOREDZES, SITE, TRAINER, ft } from "@/lib/site";

export const metadata: Metadata = {
  title: "Csoportos órák",
  description: `Köredzés kiscsoportban és a reggeli Good Morning Club a Normafánál. ${KOREDZES.when}, ${GOOD_MORNING_CLUB.when.toLowerCase()}. Online helyfoglalással.`,
};

export default function GroupPage() {
  return (
    <>
      <PageHero
        eyebrow="Csoportos órák"
        title={
          <>
            Mozogj velünk, <em>közösségben.</em>
          </>
        }
        lead="Kiscsoportos köredzés és reggeli közös mozgás a pályák melletti stúdióban és a friss levegőn. Nem kell hozzá teniszezned."
        image="/images/studio-mat.jpg"
        imageAlt="Edzőmatrac és gimnasztikai labda a stúdióban"
        position="50% 60%"
      >
        <a className="btn btn--primary" href="#koredzes">
          Köredzés
        </a>
        <a className="btn btn--ghost" href="#good-morning-club">
          Good Morning Club
        </a>
      </PageHero>

      <section className="band band--dark" id="koredzes" aria-labelledby="kor-title">
        <div className="container split split--top">
          <div>
            <p className="eyebrow reveal">Kiscsoport · {TRAINER.name}</p>
            <h2 className="h2 reveal" id="kor-title">
              Köredzés, <em>kiscsoportban</em>
            </h2>
            <p className="lead reveal" style={{ marginTop: 22 }}>
              {KOREDZES.text}
            </p>
            <p className="reveal" style={{ color: "var(--ivory-2)" }}>
              {KOREDZES.more}
            </p>
            <ul className="tags reveal" style={{ marginTop: 26 }}>
              {["Mozgásminőség", "Erő", "Mobilitás", "Állóképesség", "Biztonságosabb hétköznapi mozgás", "Személyes odafigyelés"].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <figure className="fig fig--wide reveal reveal--img" style={{ margin: "0 0 20px" }}>
              <Image src="/images/studio-corner.jpg" alt="Edzőeszközök a stúdió sarkában" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectPosition: "50% 70%" }} />
            </figure>
            <aside className="panel reveal" aria-labelledby="kor-info">
              <h3 id="kor-info">Köredzés</h3>
              <dl className="dl">
                <div>
                  <dt>Mikor</dt>
                  <dd>
                    {KOREDZES.when}
                    <small>A konkrét alkalmak a foglalási naptárban</small>
                  </dd>
                </div>
                <div>
                  <dt>Díj</dt>
                  <dd>{ft(KOREDZES.fee)} / alkalom</dd>
                </div>
                <div>
                  <dt>Létszám</dt>
                  <dd>Kiscsoport, vezeti {TRAINER.name}</dd>
                </div>
                <div>
                  <dt>Helyszín</dt>
                  <dd>Mozgásstúdió a pályák mellett</dd>
                </div>
              </dl>
              <div className="btn-row">
                <a className="btn btn--primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Helyfoglalás online <Icon name="arrowUpRight" size={14} />
                </a>
                <Link className="btn btn--ghost" href="/jelentkezes?program=koredzes">
                  Jelentkezés
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="band band--stone" id="good-morning-club" aria-labelledby="gmc-title">
        <div className="container split split--top">
          <div>
            <figure className="fig fig--tall reveal reveal--img" style={{ margin: 0 }}>
              <Image src="/images/studio-house.jpg" alt="A mozgásstúdió faháza a fák alatt, előtte virágokkal" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </figure>
          </div>
          <div>
            <p className="eyebrow reveal">Reggel · Mindenkinek</p>
            <h2 className="h2 reveal" id="gmc-title">
              Good Morning <em>Club</em>
            </h2>
            <p className="lead reveal" style={{ marginTop: 22 }}>
              <strong>Indítsd tudatosan a napot!</strong> {GOOD_MORNING_CLUB.text}
            </p>
            <p className="reveal" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "1.6rem", color: "var(--clay)", margin: "6px 0 26px" }}>
              Ébredj. Mozdulj. Kapcsolódj.
            </p>
            <aside className="panel reveal" aria-labelledby="gmc-info">
              <h3 id="gmc-info">Good Morning Club</h3>
              <dl className="dl">
                <div>
                  <dt>Mikor</dt>
                  <dd>
                    {GOOD_MORNING_CLUB.when}
                    <small>A konkrét alkalmak a foglalási naptárban</small>
                  </dd>
                </div>
                <div>
                  <dt>Díj</dt>
                  <dd>{ft(GOOD_MORNING_CLUB.fee)} / alkalom</dd>
                </div>
                <div>
                  <dt>Kinek</dt>
                  <dd>Mindenkinek</dd>
                </div>
                <div>
                  <dt>Hozd magaddal</dt>
                  <dd>{GOOD_MORNING_CLUB.bring}</dd>
                </div>
              </dl>
              <div className="btn-row">
                <a className="btn btn--primary" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Helyfoglalás online <Icon name="arrowUpRight" size={14} />
                </a>
                <Link className="btn btn--ghost" href="/jelentkezes?program=good-morning-club">
                  Jelentkezés
                </Link>
              </div>
              <p className="small muted" style={{ margin: "16px 0 0" }}>
                {SITE.address.line}, parkolni a pályák mellett lehet.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="band band--paper" aria-labelledby="faq-title">
        <div className="container">
          <Head center eyebrow="Gyakori kérdések" id="faq-title" title={<>Jó tudni, <em>mielőtt jössz</em></>} />
          <FaqList keys={["gmc", "noTennis", "ptToo", "access"]} />
        </div>
      </section>

      <CtaBand title={<>Kedden és csütörtökön <em>fél nyolckor kezdünk.</em></>} primary={{ href: "/jelentkezes?program=good-morning-club", label: "Jelentkezés" }} />
    </>
  );
}
