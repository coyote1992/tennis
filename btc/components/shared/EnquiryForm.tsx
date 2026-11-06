"use client";

/**
 * Court booking and training enquiry in one form. There is no server behind it: sending opens the
 * visitor's e-mail app with everything filled in, addressed to the reception, and the reception's
 * phone number is offered next to it (the club books by phone, in person or by e-mail and confirms).
 * "Jelentkezem" links elsewhere on the page preselect a group through <PickGroup> and jump to the
 * form itself (#urlap), not just its section, so on phones it is not a long scroll away.
 * Styling comes from each version's stylesheet (.enquiry, .chip, …).
 */
import { type FormEvent, useEffect, useState } from "react";
import { CLUB, FORM } from "@/lib/site";

type Mode = "court" | "training";
const PICK = "btc:pick";

/** A link to the form that also chooses the group (or court booking) in it. */
export function PickGroup({ group, mode = "training", className, children }: { group?: string; mode?: Mode; className?: string; children: React.ReactNode }) {
  return (
    <a
      href="#urlap"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(PICK, { detail: { mode, group } }))}
    >
      {children}
    </a>
  );
}

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

export function EnquiryForm() {
  const [mode, setMode] = useState<Mode>("training");
  const [group, setGroup] = useState("");
  const [age, setAge] = useState("");
  const [level, setLevel] = useState("");
  const [when, setWhen] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [surface, setSurface] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [min, setMin] = useState<string>();

  useEffect(() => {
    setMin(today());
    const onPick = (e: Event) => {
      const { mode: m, group: g } = (e as CustomEvent<{ mode: Mode; group?: string }>).detail;
      setMode(m);
      if (g) setGroup(g);
      setError("");
    };
    window.addEventListener(PICK, onPick);
    return () => window.removeEventListener(PICK, onPick);
  }, []);

  const adult = group.startsWith("Felnőtt");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (mode === "training" && !group) return setError("Válaszd ki, melyik edzés érdekel.");
    if (mode === "court" && !date) return setError("Add meg, melyik napra foglalnál.");
    if (mode === "court" && !time.trim()) return setError("Add meg, hány órától játszanál.");
    if (!name.trim()) return setError("Add meg a neved.");
    if (!email.trim() && phone.replace(/\D/g, "").length < 9) return setError("Adj meg telefonszámot vagy e-mail-címet, hogy vissza tudjunk jelezni.");
    setError("");
    const day = date ? date.replace(/-/g, ". ") + "." : "";
    const rows =
      mode === "court"
        ? [
            "Pályafoglalási kérés",
            `Nap: ${day}`,
            `Időpont: ${time.trim()}`,
            surface ? `Pálya: ${surface}` : "",
          ]
        : [
            "Jelentkezés edzésre",
            `Edzés: ${group}`,
            age.trim() && !adult ? `Életkor: ${age.trim()}` : "",
            level ? `Tudásszint: ${level}` : "",
            when.trim() ? `Melyik napokon, hánykor jó: ${when.trim()}` : "",
          ];
    rows.push(`Név: ${name.trim()}`, email.trim() ? `E-mail: ${email.trim()}` : "", phone.trim() ? `Telefon: ${phone.trim()}` : "", note.trim() ? `Megjegyzés: ${note.trim()}` : "");
    const subject = mode === "court" ? `Pályafoglalás: ${day} ${time.trim()}` : `Jelentkezés edzésre: ${group}`;
    window.location.href = `${CLUB.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(rows.filter(Boolean).join("\n"))}`;
    setSent(true);
  };

  const chips = (name: string, options: string[], value: string, set: (v: string) => void) => (
    <div className="enquiry__chips">
      {options.map((o) => (
        <label key={o} className="chip">
          <input type="radio" name={name} value={o} checked={value === o} onChange={() => set(o)} />
          {o}
        </label>
      ))}
    </div>
  );

  return (
    <form id="urlap" className="enquiry" onSubmit={submit} noValidate>
      <div className="enquiry__modes" role="radiogroup" aria-label="Mit szeretnél?">
        {(
          [
            ["training", "Edzés"],
            ["court", "Pályafoglalás"],
          ] as const
        ).map(([m, label]) => (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={mode === m}
            className={`enquiry__mode${mode === m ? " is-on" : ""}`}
            onClick={() => {
              setMode(m);
              setError("");
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {mode === "training" ? (
        <>
          <fieldset className="enquiry__set">
            <legend>Melyik edzés érdekel?</legend>
            {chips("group", FORM.groups, group, setGroup)}
          </fieldset>
          <fieldset className="enquiry__set">
            <legend>Tudásszint</legend>
            {chips("level", FORM.levels, level, setLevel)}
          </fieldset>
          <div className="enquiry__row">
            {!adult && (
              <label className="enquiry__field">
                <span>A gyerek életkora</span>
                <input className="input" inputMode="numeric" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Pl. 7 év" />
              </label>
            )}
            <label className="enquiry__field">
              <span>Melyik napokon, hánykor jó?</span>
              <input className="input" value={when} onChange={(e) => setWhen(e.target.value)} placeholder="Pl. kedd és csütörtök délután" />
            </label>
          </div>
        </>
      ) : (
        <>
          <div className="enquiry__row">
            <label className="enquiry__field">
              <span>Nap</span>
              <input className="input" type="date" min={min} value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label className="enquiry__field">
              <span>Hány órától?</span>
              <input className="input" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Pl. 18:00, 1 órára" />
            </label>
          </div>
          <fieldset className="enquiry__set">
            <legend>Pálya</legend>
            {chips("surface", FORM.surfaces, surface, setSurface)}
          </fieldset>
          <p className="enquiry__hint">
            Nyitvatartás: {CLUB.hours.map((h) => `${h.days.toLowerCase()} ${h.time}`).join(", ")}. A foglalás a recepció visszaigazolásával él.
          </p>
        </>
      )}

      <div className="enquiry__row">
        <label className="enquiry__field">
          <span>Név</span>
          <input className="input" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="enquiry__field">
          <span>Telefonszám</span>
          <input className="input" type="tel" inputMode="tel" autoComplete="tel" placeholder="+36 30 123 4567" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
      </div>
      <label className="enquiry__field">
        <span>E-mail</span>
        <input className="input" type="email" inputMode="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="enquiry__field">
        <span>
          Megjegyzés <em>(nem kötelező)</em>
        </span>
        <textarea className="input input--area" value={note} onChange={(e) => setNote(e.target.value)} placeholder={mode === "court" ? "Például: páros, bérlet érdekel." : "Például: eddigi edzések, versenyek."} />
      </label>
      {error && (
        <p className="enquiry__error" role="alert">
          {error}
        </p>
      )}
      <div className="enquiry__actions">
        <button type="submit" className="btn btn--accent">
          {mode === "court" ? "Foglalást kérek" : "Jelentkezem"}
        </button>
        <a className="enquiry__phone" href={CLUB.phoneHref}>
          vagy hívd a recepciót: <span style={{ whiteSpace: "nowrap" }}>{CLUB.phone}</span>
        </a>
      </div>
      {sent && (
        <p className="enquiry__done" aria-live="polite">
          Megnyitottuk a levelezőprogramodat a kitöltött adatokkal: csak küldd el. A recepció visszajelez. Ha nem nyílt meg, írj a {CLUB.email} címre, vagy hívj minket.
        </p>
      )}
    </form>
  );
}
