"use client";

/**
 * The course enquiry, with the same fields as the club's own form (course, name, e-mail, phone,
 * note). There is no server behind it: sending opens the visitor's e-mail app with everything
 * filled in, addressed to the club, and the phone number is offered next to it.
 * Styling comes from each version's stylesheet (.enquiry, .chip, .input, …).
 */
import { type FormEvent, useState } from "react";
import { CLUB, ENQUIRY_COURSES } from "@/lib/site";

export function EnquiryForm() {
  const [course, setCourse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!course) return setError("Válaszd ki, melyik tanfolyam érdekel.");
    if (!name.trim()) return setError("Add meg a neved.");
    if (!email.trim() && phone.replace(/\D/g, "").length < 9) return setError("Adj meg e-mail-címet vagy telefonszámot, hogy fel tudjunk keresni.");
    setError("");
    const body = [`Választott tanfolyam: ${course}`, `Név: ${name}`, `E-mail: ${email}`, `Telefon: ${phone}`, note.trim() ? `Megjegyzés: ${note.trim()}` : ""]
      .filter(Boolean)
      .join("\n");
    window.location.href = `${CLUB.emailHref}?subject=${encodeURIComponent(`Jelentkezés: ${course}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="enquiry" onSubmit={submit} noValidate>
      <fieldset className="enquiry__set">
        <legend>Melyik tanfolyam érdekel?</legend>
        <div className="enquiry__chips">
          {ENQUIRY_COURSES.map((c) => (
            <label key={c} className="chip">
              <input type="radio" name="course" value={c} checked={course === c} onChange={() => setCourse(c)} />
              {c}
            </label>
          ))}
        </div>
      </fieldset>
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
        <textarea className="input input--area" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Például a gyerek életkora, a tudásszinted vagy a jó időpontok." />
      </label>
      {error && (
        <p className="enquiry__error" role="alert">
          {error}
        </p>
      )}
      <div className="enquiry__actions">
        <button type="submit" className="btn btn--accent">
          Jelentkezés elküldése
        </button>
        <a className="enquiry__phone" href={CLUB.phoneHref}>
          vagy hívj: {CLUB.phone}
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
