"use client";

/**
 * Training enquiry ("Jelentkezés edzésre"). There is no server behind it: sending opens the
 * visitor's e-mail app with everything filled in, addressed to the club, and the head coach's phone
 * number is offered next to it. Styling comes from each version's stylesheet (.enquiry, .chip, …).
 */
import { type FormEvent, useState } from "react";
import { CLUB, FORM } from "@/lib/site";

export function EnquiryForm() {
  const [who, setWho] = useState("");
  const [level, setLevel] = useState("");
  const [age, setAge] = useState("");
  const [when, setWhen] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!who) return setError("Válaszd ki, kinek keresel edzést.");
    if (!name.trim()) return setError("Add meg a neved.");
    if (!email.trim() && phone.replace(/\D/g, "").length < 9) return setError("Adj meg e-mail-címet vagy telefonszámot, hogy fel tudjunk keresni.");
    setError("");
    const rows = [
      "Jelentkezés edzésre",
      `Kinek: ${who}`,
      level ? `Tudásszint: ${level}` : "",
      age.trim() ? `Életkor: ${age.trim()}` : "",
      when.trim() ? `Melyik napokon, hánykor jó: ${when.trim()}` : "",
      `Név: ${name.trim()}`,
      email.trim() ? `E-mail: ${email.trim()}` : "",
      phone.trim() ? `Telefon: ${phone.trim()}` : "",
      note.trim() ? `Egyéb: ${note.trim()}` : "",
    ].filter(Boolean);
    window.location.href = `${CLUB.emailHref}?subject=${encodeURIComponent(`Jelentkezés edzésre: ${who}`)}&body=${encodeURIComponent(rows.join("\n"))}`;
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
      <fieldset className="enquiry__set">
        <legend>Kinek keresel edzést?</legend>
        {chips("who", FORM.who, who, setWho)}
      </fieldset>
      <fieldset className="enquiry__set">
        <legend>Tudásszint</legend>
        {chips("level", FORM.levels, level, setLevel)}
      </fieldset>
      <div className="enquiry__row">
        <label className="enquiry__field">
          <span>Életkor</span>
          <input className="input" inputMode="numeric" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Pl. 8 év" />
        </label>
        <label className="enquiry__field">
          <span>Melyik napokon, hánykor jó?</span>
          <input className="input" value={when} onChange={(e) => setWhen(e.target.value)} placeholder="Pl. hétköznap 16 után" />
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
        <textarea className="input input--area" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Például: eddigi versenyek, korábbi edzések." />
      </label>
      {error && (
        <p className="enquiry__error" role="alert">
          {error}
        </p>
      )}
      <div className="enquiry__actions">
        <button type="submit" className="btn btn--accent">
          Jelentkezem
        </button>
        <a className="enquiry__phone" href={CLUB.coachPhoneHref}>
          vagy hívj: {CLUB.coachPhone} ({CLUB.coachName})
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
