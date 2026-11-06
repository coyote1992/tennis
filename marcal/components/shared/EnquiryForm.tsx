"use client";

/**
 * The club's two forms in one: "Oktatásra jelentkezem" (coaching) and "Partnert keresek" (a playing
 * partner), with the same fields as on teniszgyor.hu. There is no server behind it: sending opens
 * the visitor's e-mail app with everything filled in, addressed to the club, and the phone number is
 * offered next to it. Styling comes from each version's stylesheet (.enquiry, .chip, .input, …).
 */
import { type FormEvent, useState } from "react";
import { CLUB, FORM } from "@/lib/site";

type Mode = "oktatas" | "partner";

export function EnquiryForm() {
  const [mode, setMode] = useState<Mode>("oktatas");
  const [sport, setSport] = useState("");
  const [format, setFormat] = useState("");
  const [level, setLevel] = useState("");
  const [when, setWhen] = useState("");
  const [often, setOften] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!sport) return setError("Válaszd ki a sportágat.");
    if (!name.trim()) return setError("Add meg a neved.");
    if (!email.trim() && phone.replace(/\D/g, "").length < 9) return setError("Adj meg e-mail-címet vagy telefonszámot, hogy fel tudjunk keresni.");
    setError("");
    const rows = [
      mode === "oktatas" ? "Oktatásra jelentkezem" : "Partnert keresek",
      `Sportág: ${sport}`,
      mode === "oktatas" && format ? `Egyéni vagy csoportos: ${format}` : "",
      level ? `Tudásszint: ${level}` : "",
      when.trim() ? `Időpontok: ${when.trim()}` : "",
      often.trim() ? `Gyakoriság: ${often.trim()}` : "",
      `Név: ${name}`,
      `E-mail: ${email}`,
      `Telefon: ${phone}`,
      note.trim() ? `Egyéb: ${note.trim()}` : "",
    ].filter(Boolean);
    const subject = mode === "oktatas" ? `Oktatásra jelentkezem: ${sport}` : `Partnert keresek: ${sport}`;
    window.location.href = `${CLUB.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(rows.join("\n"))}`;
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
    <form className="enquiry" onSubmit={submit} noValidate>
      <div className="enquiry__modes" role="tablist" aria-label="Mire jelentkezel?">
        {(
          [
            ["oktatas", "Oktatásra jelentkezem"],
            ["partner", "Partnert keresek"],
          ] as [Mode, string][]
        ).map(([m, label]) => (
          <button key={m} type="button" role="tab" aria-selected={mode === m} className="enquiry__mode" onClick={() => setMode(m)}>
            {label}
          </button>
        ))}
      </div>

      <fieldset className="enquiry__set">
        <legend>{mode === "oktatas" ? "Milyen sportág érdekel?" : "Milyen sportágban keresel partnert?"}</legend>
        {chips("sport", FORM.sports, sport, setSport)}
      </fieldset>
      {mode === "oktatas" && (
        <fieldset className="enquiry__set">
          <legend>Egyéni vagy csoportos?</legend>
          {chips("format", FORM.formats, format, setFormat)}
        </fieldset>
      )}
      <fieldset className="enquiry__set">
        <legend>Tudásszint</legend>
        {chips("level", FORM.levels, level, setLevel)}
      </fieldset>
      <div className="enquiry__row">
        <label className="enquiry__field">
          <span>Milyen időpontokban tudnál jönni?</span>
          <input className="input" value={when} onChange={(e) => setWhen(e.target.value)} placeholder="Pl. hétköznap 17 után" />
        </label>
        <label className="enquiry__field">
          <span>Milyen gyakran?</span>
          <input className="input" value={often} onChange={(e) => setOften(e.target.value)} placeholder="Pl. heti egyszer" />
        </label>
      </div>
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
          Plusz információ <em>(nem kötelező)</em>
        </span>
        <textarea className="input input--area" value={note} onChange={(e) => setNote(e.target.value)} placeholder={mode === "oktatas" ? "Ha kifejezetten egy edzőhöz jelentkeznél, írd ide." : "Például: páros partnert keresek padelhez."} />
      </label>
      {error && (
        <p className="enquiry__error" role="alert">
          {error}
        </p>
      )}
      <div className="enquiry__actions">
        <button type="submit" className="btn btn--accent">
          Üzenet küldése
        </button>
        <a className="enquiry__phone" href={CLUB.phoneHref}>
          vagy hívj: {CLUB.phone}
        </a>
      </div>
      {sent && (
        <p className="enquiry__done" aria-live="polite">
          Megnyitottuk a levelezőprogramodat a kitöltött adatokkal: csak küldd el. Ha nem nyílt meg, írj az {CLUB.email} címre, vagy hívj minket.
        </p>
      )}
    </form>
  );
}
