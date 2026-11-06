import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, Head, PageHero } from "@/components/a/Blocks";
import { Icon } from "@/components/shared/Icon";
import { DIRECTIONS, HOURS, SITE, TRAINER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description: `${SITE.address.line}, pár perc sétára a Normafától. Pályák és tenisz: ${SITE.phone.display}. Személyi edzés: ${TRAINER.phone.display}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        short
        eyebrow="Kapcsolat"
        title={
          <>
            Pár perc sétára <em>a Normafától.</em>
          </>
        }
        lead="Hívj, írj, vagy gyere fel hozzánk. Fent a hegyen, a fák között várunk."
        image="/images/aerial-club.jpg"
        imageAlt="A klub felülről: a pályák, a parkoló és a faház"
      />

      <section className="band band--dark" aria-labelledby="contacts-title">
        <div className="container">
          <h2 className="visually-hidden" id="contacts-title">
            Elérhetőségek
          </h2>
          <div className="cards">
            <div className="panel reveal">
              <h3>Pályák és tenisz</h3>
              <dl className="dl">
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a className="inline-link" href={SITE.phone.href}>
                      {SITE.phone.display}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a className="inline-link" href={`mailto:${SITE.email}`}>
                      {SITE.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="btn-row">
                <a className="btn btn--primary" href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer">
                  Pályafoglalás a Hellán <Icon name="arrowUpRight" size={14} />
                </a>
              </div>
            </div>
            <div className="panel reveal">
              <h3>Személyi edzés, csoportos órák</h3>
              <dl className="dl">
                <div>
                  <dt>Edző</dt>
                  <dd>
                    {TRAINER.name}
                    <small>{TRAINER.role}</small>
                  </dd>
                </div>
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a className="inline-link" href={TRAINER.phone.href}>
                      {TRAINER.phone.display}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="btn-row">
                <Link className="btn btn--ghost" href="/jelentkezes">
                  Jelentkezés online
                </Link>
              </div>
            </div>
            <div className="panel reveal">
              <h3>Nyitvatartás</h3>
              <dl className="dl">
                {HOURS.map((h) => (
                  <div key={h.days}>
                    <dt>{h.days}</dt>
                    <dd>
                      {h.time}
                      {h.note && <small>{h.note}</small>}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="small muted" style={{ margin: "16px 0 0" }}>
                {SITE.season.label}: {SITE.season.untilIg}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--stone" id="megkozelites" aria-labelledby="access-title">
        <div className="container split split--top">
          <div>
            <p className="eyebrow reveal">Megközelítés</p>
            <h2 className="h2 reveal" id="access-title">
              {SITE.address.line.split(", ")[0]}, <em>{SITE.address.short}</em>
            </h2>
            <dl className="dl reveal" style={{ marginTop: 28 }}>
              <div>
                <dt>Autóval</dt>
                <dd>{DIRECTIONS.car}</dd>
              </div>
              <div>
                <dt>Parkolás</dt>
                <dd>{DIRECTIONS.parking}</dd>
              </div>
              <div>
                <dt>Tömegközlekedés</dt>
                <dd>{DIRECTIONS.transit}</dd>
              </div>
            </dl>
            <div className="btn-row reveal" style={{ marginTop: 26 }}>
              <a className="btn btn--primary" href={SITE.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                Útvonal a Google Térképen <Icon name="arrowUpRight" size={14} />
              </a>
            </div>
          </div>
          <div className="map reveal">
            <iframe title="A Next Tenisz Akadémia a térképen" src={SITE.address.embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section className="band band--paper" id="kerdesek" aria-labelledby="faq-title">
        <div className="container">
          <Head center eyebrow="Gyakori kérdések" id="faq-title" title={<>Kérdésed van? <em>Szívesen segítünk.</em></>} />
          <FaqList keys={["booking", "price", "group", "juniorTimes", "firstPt", "gmc", "treatments", "access"]} />
        </div>
      </section>
    </>
  );
}
