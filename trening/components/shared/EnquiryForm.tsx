"use client";

/**
 * "Kérj ajánlatot": the centre's offer request in two modes, coaching ("Oktatás") and events
 * ("Rendezvény"). There is no server behind it: sending opens the visitor's e-mail app with
 * everything filled in, addressed to the centre, and the phone numbers are offered next to it.
 * Styling comes from each version's stylesheet (.enquiry, .chip, .input, …).
 */
import { type FormEvent, useState } from "react";
import { CLUB, FORM } from "@/lib/site";

type Mode = "oktatas" | "rendezveny";

export function EnquiryForm() {
  const [mode, setMode] = useState<Mode>("oktatas");
  const [kind, setKind] = useState("");
  const [level, setLevel] = useState("");
  const [when, setWhen] = useState("");
  const [people, setPeople] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const switchMode = (m: Mode) => {
    setMode(m);
    setKind("");
    setError("");
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!kind) return setError(mode === "oktatas" ? "Válaszd ki, milyen oktatás érdekel." : "Válaszd ki a rendezvény típusát.");
    if (!name.trim()) return setError("Add meg a neved.");
    if (!email.trim() && phone.replace(/\D/g, "").length < 9) return setError("Adj meg e-mail-címet vagy telefonszámot, hogy fel tudjunk keresni.");
    setError("");
    const rows =
      mode === "oktatas"
        ? [
            "Oktatás – ajánlatkérés",
            `Mi érdekel: ${kind}`,
            level ? `Tudásszint: ${level}` : "",
            when.trim() ? `Melyik napokon, hánykor jó: ${when.trim()}` : "",
            people.trim() ? `Hány fő: ${people.trim()}` : "",
          ]
        : [
            "Rendezvény – ajánlatkérés",
            `Rendezvény: ${kind}`,
            when.trim() ? `Tervezett időpont: ${when.trim()}` : "",
            people.trim() ? `Létszám: ${people.trim()}` : "",
          ];
    rows.push(`Név: ${name.trim()}`, email.trim() ? `E-mail: ${email.trim()}` : "", phone.trim() ? `Telefon: ${phone.trim()}` : "", note.trim() ? `Egyéb: ${note.trim()}` : "");
    const subject = mode === "oktatas" ? `Ajánlatkérés – oktatás: ${kind}` : `Ajánlatkérés – rendezvény: ${kind}`;
    window.location.href = `${CLUB.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(rows.filter(Boolean).join("\n"))}`;
    setSent(true);
  };

  const chips = (group: string, options: string[], value: string, set: (v: string) => void) => (
    <div className="enquiry__chips">
      {options.map((o) => (
        <label key={o} className="chip">
          <input type="radio" name={group} value={o} checked={value === o} onChange={() => set(o)} />
          {o}
        </label>
      ))}
    </div>
  );

  return (
    <form className="enquiry" onSubmit={submit} noValidate>
      <div className="enquiry__modes" role="tablist" aria-label="Mire kérsz ajánlatot?">
        {(
          [
            ["oktatas", "Oktatás"],
            ["rendezveny", "Rendezvény"],
          ] as [Mode, string][]
        ).map(([m, label]) => (
          <button key={m} type="button" role="tab" aria-selected={mode === m} className="enquiry__mode" onClick={() => switchMode(m)}>
            {label}
          </button>
        ))}
      </div>

      <fieldset className="enquiry__set">
        <legend>{mode === "oktatas" ? "Milyen oktatás érdekel?" : "Milyen rendezvényt terveztek?"}</legend>
        {mode === "oktatas" ? chips("kind", FORM.coaching, kind, setKind) : chips("kind", FORM.events, kind, setKind)}
      </fieldset>
      {mode === "oktatas" && (
        <fieldset className="enquiry__set">
          <legend>Tudásszint</legend>
          {chips("level", FORM.levels, level, setLevel)}
        </fieldset>
      )}
      <div className="enquiry__row">
        <label className="enquiry__field">
          <span>{mode === "oktatas" ? "Melyik napokon, hánykor jó?" : "Tervezett időpont"}</span>
          <input className="input" value={when} onChange={(e) => setWhen(e.target.value)} placeholder={mode === "oktatas" ? "Pl. kedd és csütörtök 18 után" : "Pl. 2027. május eleje, szombat"} />
        </label>
        <label className="enquiry__field">
          <span>{mode === "oktatas" ? "Hány fő?" : "Várható létszám"}</span>
          <input className="input" inputMode="numeric" value={people} onChange={(e) => setPeople(e.target.value)} placeholder={mode === "oktatas" ? "Pl. 1 vagy 4" : "Pl. 40"} />
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
        <textarea
          className="input input--area"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder={mode === "oktatas" ? "Például: baráti társaságként jelentkeznénk felnőtt kezdő csoportba." : "Például: catering, sátor, gyerekprogramok."}
        />
      </label>
      {error && (
        <p className="enquiry__error" role="alert">
          {error}
        </p>
      )}
      <div className="enquiry__actions">
        <button type="submit" className="btn btn--accent">
          Ajánlatot kérek
        </button>
        <a className="enquiry__phone" href={CLUB.contact.phoneHref}>
          vagy hívj: {CLUB.contact.phone} ({CLUB.contact.name})
        </a>
      </div>
      {sent && (
        <p className="enquiry__done" aria-live="polite">
          Megnyitottuk a levelezőprogramodat a kitöltött adatokkal: csak küldd el. Ha nem nyílt meg, írj a {CLUB.email} címre, vagy hívj minket.
        </p>
      )}
    </form>
  );
}
