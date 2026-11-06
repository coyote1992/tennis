"use client";

/**
 * A short message to the club. There is no server behind it: sending opens the visitor's e-mail app
 * with everything filled in, addressed to the club, with the phone offered next to it.
 * Styling comes from each version's stylesheet (.enquiry, .chip, …).
 */
import { type FormEvent, useState } from "react";
import { CLUB, FORM } from "@/lib/site";

export function ContactForm() {
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!topic) return setError("Válaszd ki, miben segíthetünk.");
    if (!name.trim()) return setError("Add meg a neved.");
    if (!email.trim() && phone.replace(/\D/g, "").length < 9) return setError("Adj meg e-mail-címet vagy telefonszámot, hogy válaszolni tudjunk.");
    if (!msg.trim()) return setError("Írd le röviden, mit szeretnél.");
    setError("");
    const rows = [`Téma: ${topic}`, `Név: ${name.trim()}`, email.trim() ? `E-mail: ${email.trim()}` : "", phone.trim() ? `Telefon: ${phone.trim()}` : "", "", msg.trim()].filter((r, i) => r || i === 4);
    window.location.href = `${CLUB.emailHref}?subject=${encodeURIComponent(`${topic}: ${name.trim()}`)}&body=${encodeURIComponent(rows.join("\n"))}`;
    setSent(true);
  };

  return (
    <form id="urlap" className="enquiry" onSubmit={submit} noValidate>
      <fieldset className="enquiry__set">
        <legend>Miben segíthetünk?</legend>
        <div className="enquiry__chips">
          {FORM.topics.map((t) => (
            <label key={t} className="chip">
              <input type="radio" name="topic" value={t} checked={topic === t} onChange={() => setTopic(t)} />
              {t}
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
        <span>Üzenet</span>
        <textarea className="input input--area" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Például: melyik napokon, hány órára, hány főre." />
      </label>
      {error && (
        <p className="enquiry__error" role="alert">
          {error}
        </p>
      )}
      <div className="enquiry__actions">
        <button type="submit" className="btn btn--accent">
          Elküldöm
        </button>
        <a className="enquiry__phone" href={CLUB.phoneHref}>
          vagy hívj: <span style={{ whiteSpace: "nowrap" }}>{CLUB.phone}</span>
        </a>
      </div>
      {sent && (
        <p className="enquiry__done" aria-live="polite">
          Megnyitottuk a levelezőprogramodat a kitöltött üzenettel: csak küldd el. Ha nem nyílt meg, írj a {CLUB.email} címre, vagy hívj minket.
        </p>
      )}
    </form>
  );
}
