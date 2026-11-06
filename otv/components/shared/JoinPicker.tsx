"use client";

/**
 * "Mire jelentkeznél?": one chooser for everything a visitor can sign up for. Each option leads to
 * the club's own channel, exactly as o10v.hu does it: the club's Google Forms for ovi-tenisz and the
 * free kids' trial session, a phone call for adult coaching and room hire, an e-mail for the summer
 * camp and the membership notice. Styling comes from each version's stylesheet (.join*, .btn*).
 */
import { useState } from "react";
import { CAMP, CLUB, FORMS, MEMBERSHIP, ROOMS } from "@/lib/site";

type Action = { label: string; href: string; external?: boolean };
type Option = { id: string; label: string; meta: string; title: string; text: string; primary: Action; secondary?: Action };

const OPTIONS: Option[] = [
  {
    id: "ovis",
    label: "Ovi-tenisz",
    meta: "4–6 év · 18 000 Ft / hó",
    title: "Hozd el az első órára!",
    text: "Csütörtök 16:00–17:00 vagy vasárnap 9:00–10:00. Töltsd ki a rövid jelentkezési lapot, és felvesszük veled a kapcsolatot.",
    primary: { label: "Jelentkezési lap", href: FORMS.ovis, external: true },
    secondary: { label: `Hívás: ${CLUB.coachPhone}`, href: CLUB.coachPhoneHref },
  },
  {
    id: "gyerek",
    label: "Gyerektenisz",
    meta: "6–18 év · az első edzés ingyenes",
    title: "Ingyenes próbaedzés, kötelezettség nélkül.",
    text: "Töltsd ki az online jelentkezési lapot. Mindenki a Piros csoportban kezd, ahol az edző játékos formában megismeri a gyereket, utána a korának és tudásának megfelelő csoportban folytatja.",
    primary: { label: "Jelentkezés próbaedzésre", href: FORMS.gyerek, external: true },
    secondary: { label: `Hívás: ${CLUB.coachPhone}`, href: CLUB.coachPhoneHref },
  },
  {
    id: "felnott",
    label: "Felnőtt edzés",
    meta: "16 000 Ft / óra, pályával",
    title: "Foglalj időpontot edzőnknél.",
    text: "Egyéni edzés bármilyen szinten. Hívj minket, és egyeztetünk egy neked megfelelő időpontot.",
    primary: { label: `Hívás: ${CLUB.coachPhone}`, href: CLUB.coachPhoneHref },
  },
  {
    id: "tabor",
    label: "Nyári tábor",
    meta: "8–16 év · 55 000 Ft / hét (2026)",
    title: "Kérdezz a nyári táborról.",
    text: `${CAMP.lead} Írj nekünk, és rövid időn belül felvesszük veled a kapcsolatot.`,
    primary: { label: "E-mail a táborról", href: `${CLUB.emailHref}?subject=${encodeURIComponent("Nyári tenisztábor – érdeklődés")}` },
    secondary: { label: `Hívás: ${CLUB.phone}`, href: CLUB.phoneHref },
  },
  {
    id: "klubtagsag",
    label: "Klubtagság",
    meta: `${MEMBERSHIP.price} ${MEMBERSHIP.per}`,
    title: "A jelentkezés most zárva.",
    text: MEMBERSHIP.status,
    primary: { label: "Értesítést kérek a nyitásról", href: MEMBERSHIP.notifyHref },
    secondary: { label: "Klubszabályzat (PDF)", href: CLUB.clubRules, external: true },
  },
  {
    id: "terem",
    label: "Terembérlés",
    meta: "Stúdió, masszázsterem, kávézó",
    title: "Terem jógához, workshophoz, eseményhez.",
    text: `${ROOMS.lead} Kapcsolat, foglalás és árazás telefonon vagy Viberen.`,
    primary: { label: `Hívás: ${ROOMS.contact.label.split(" (")[0]}`, href: ROOMS.contact.href },
  },
];

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ActionLink({ a, cls }: { a: Action; cls: string }) {
  return (
    <a className={cls} href={a.href} {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {a.label}
      {cls.includes("accent") && <Arrow />}
    </a>
  );
}

export function JoinPicker() {
  const [id, setId] = useState(OPTIONS[1].id);
  const o = OPTIONS.find((x) => x.id === id) ?? OPTIONS[0];

  return (
    <div className="join">
      <div className="join__opts" role="tablist" aria-label="Mire jelentkeznél?">
        {OPTIONS.map((x) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            id={`join-tab-${x.id}`}
            aria-selected={x.id === id}
            aria-controls="join-panel"
            className="join__opt"
            onClick={() => setId(x.id)}
          >
            <span className="join__opt-label">{x.label}</span>
            <span className="join__opt-meta">{x.meta}</span>
          </button>
        ))}
      </div>
      <div className="join__panel" id="join-panel" role="tabpanel" aria-labelledby={`join-tab-${o.id}`} key={o.id}>
        <p className="join__kicker">{o.label}</p>
        <h3 className="join__title">{o.title}</h3>
        <p className="join__text">{o.text}</p>
        <div className="join__actions">
          <ActionLink a={o.primary} cls="btn btn--accent" />
          {o.secondary && <ActionLink a={o.secondary} cls="btn btn--ghost" />}
        </div>
      </div>
    </div>
  );
}
