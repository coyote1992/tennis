"use client";

/**
 * The sign-up flow both versions use: pick a program, answer one or two short steps, leave
 * contact details. It posts to /api/jelentkezes; when online sending is not set up (no e-mail
 * service key on the server) it offers the same answers as a ready-made e-mail instead, exactly
 * like the previous site did. Styling comes from each version's stylesheet (.flow, .choice,
 * .chip, .field, …). `?program=` and `?csoport=` preselect a program and a junior group.
 */
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { type FormEvent, type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { EMPTY, type Errors, type FlowData, GROUP_CHOICES, summarize, validateStep } from "@/lib/flow";
import {
  ALL_DAYS,
  ALL_JUNIOR_GROUPS,
  CHILD_AGES,
  DAYPARTS,
  FORMATS,
  GMC_DAYS,
  GOALS,
  INTERESTS,
  LEVELS,
  PROGRAMS,
  SITE,
  STEP_HINTS,
  STEP_TITLES,
  type StepId,
  TRAINER,
  WEEKDAYS,
} from "@/lib/site";
import { Icon } from "./Icon";

function Field({ label, name, error, required, children }: { label: ReactNode; name: string; error?: string; required?: boolean; children: ReactNode }) {
  return (
    <div className="field" data-field={name}>
      <label htmlFor={name}>
        {label} {required && <span className="req">*</span>}
      </label>
      {children}
      {error && (
        <span className="field__error" id={`${name}-error`}>
          <Icon name="info" size={14} />
          {error}
        </span>
      )}
    </div>
  );
}

function ErrorLine({ msg }: { msg?: string }) {
  return msg ? (
    <span className="field__error" role="alert">
      <Icon name="info" size={14} />
      {msg}
    </span>
  ) : null;
}

function Chips({ options, selected, onToggle }: { options: string[]; selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div className="chips">
      {options.map((o) => (
        <label key={o} className="chip">
          <input type="checkbox" checked={selected.includes(o)} onChange={() => onToggle(o)} />
          {o}
        </label>
      ))}
    </div>
  );
}

function Summary({ data }: { data: FlowData }) {
  const rows = summarize(data);
  if (!rows.length) return null;
  return (
    <div className="summary">
      <span className="summary__label">Összegzés</span>
      <dl>
        {rows.map(([k, v]) => (
          <div key={k} className="summary__row">
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function BookingFlow({ homeHref = "/", privacyHref = "/adatkezeles" }: { homeHref?: string; privacyHref?: string }) {
  const params = useSearchParams();
  const [data, setData] = useState<FlowData>(EMPTY);
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<"fwd" | "back">("fwd");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [failure, setFailure] = useState<"not_configured" | "invalid" | "network" | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const preset = useRef(false);
  const mounted = useRef(false);

  const program = PROGRAMS.find((p) => p.id === data.program);
  const steps: StepId[] = program?.steps ?? ["program", "time", "contact"];
  const current = steps[step] ?? "program";
  const last = step === steps.length - 1;

  // ?program=junior&csoport=piros → skip the first step
  useEffect(() => {
    if (preset.current) return;
    preset.current = true;
    const p = params.get("program");
    if (p && PROGRAMS.some((x) => x.id === p)) {
      const g = params.get("csoport");
      setData((d) => ({ ...d, program: p, group: g && GROUP_CHOICES.some((x) => x.id === g) ? g : d.group }));
      setStep(1);
    }
  }, [params]);

  // move focus to the new step's title (not on first render)
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    titleRef.current?.focus({ preventScroll: true });
    const flow = titleRef.current?.closest(".flow");
    if (flow && flow.getBoundingClientRect().top < 0) flow.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step, status]);

  const set = <K extends keyof FlowData>(k: K, v: FlowData[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };
  const toggle = (k: "slots" | "formats" | "goals" | "days" | "dayparts" | "interests", v: string) => {
    setData((d) => ({ ...d, [k]: d[k].includes(v) ? d[k].filter((x) => x !== v) : [...d[k], v] }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };
  const focusFirst = (e: Errors) => {
    requestAnimationFrame(() => {
      const k = Object.keys(e)[0];
      const el = document.querySelector<HTMLElement>(
        `[data-field="${k}"] input, [data-field="${k}"] select, [data-field="${k}"] textarea, [data-field="${k}"] button`,
      );
      el?.focus();
    });
  };

  const choose = (id: string) => {
    if (id === data.program) {
      setDir("fwd");
      setStep(1);
      return;
    }
    // a new program starts fresh, but keeps the contact details already typed
    setData((d) => ({ ...EMPTY, program: id, name: d.name, email: d.email, phone: d.phone, message: d.message, consent: d.consent }));
    setErrors({});
    setDir("fwd");
    setStep(1);
  };

  const next = () => {
    const e = validateStep(current, data);
    if (Object.keys(e).length) {
      setErrors(e);
      focusFirst(e);
      return;
    }
    setErrors({});
    setDir("fwd");
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const back = () => {
    setErrors({});
    setDir("back");
    setStep((s) => Math.max(s - 1, 0));
  };

  const send = async () => {
    const e = validateStep("contact", data);
    if (Object.keys(e).length) {
      setErrors(e);
      focusFirst(e);
      return;
    }
    setStatus("sending");
    setFailure(null);
    try {
      const res = await fetch("/api/jelentkezes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && body.ok) {
        setStatus("done");
        return;
      }
      setFailure(body.error === "not_configured" ? "not_configured" : body.error === "invalid" ? "invalid" : "network");
      setStatus("error");
    } catch {
      setFailure("network");
      setStatus("error");
    }
  };

  const mailto = useMemo(() => {
    const rows = [...summarize(data), ["Név", data.name], ["E-mail", data.email], ["Telefon", data.phone]] as [string, string][];
    if (data.message.trim()) rows.push(["Megjegyzés", data.message.trim()]);
    const body = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
    const subject = `Jelentkezés: ${program?.title ?? "edzés"}`;
    return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [data, program]);

  const phone = program?.toTrainer ? TRAINER.phone : SITE.phone;

  if (status === "done") {
    const first = data.name.trim().split(/\s+/).pop();
    return (
      <div className="flow" aria-live="polite">
        <div className="flow__done">
          <span className="flow__done-mark">
            <Icon name="check" size={28} />
          </span>
          <h2 ref={titleRef} tabIndex={-1} className="flow__title">
            Köszönjük{first ? `, ${first}` : ""}! Megkaptuk a jelentkezésed.
          </h2>
          <p className="flow__hint">
            Hamarosan keresünk telefonon vagy e-mailben, hogy egyeztessük a részleteket. Ha közben kérdésed van, hívj: {phone.display}.
          </p>
          <Summary data={data} />
          <div className="flow__actions">
            <Link className="btn btn--primary" href={homeHref}>
              Vissza a kezdőlapra
            </Link>
            <a className="btn btn--ghost" href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer">
              Pályafoglalás <Icon name="arrowUpRight" size={15} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flow">
      <div className="flow__progress" style={{ ["--steps" as string]: program ? steps.length : 1 }} aria-hidden="true">
        {program ? steps.map((s, i) => <span key={s + i} data-done={i <= step} />) : <span data-done="false" />}
      </div>
      <div className="flow__stepline">
        <span>{program ? `${step + 1}. lépés / ${steps.length}` : "1. lépés"}</span>
        {program && step > 0 && <span>{program.title}</span>}
      </div>

      <form
        noValidate
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          if (last) send();
          else next();
        }}
      >
        <div className="flow__panel" data-dir={dir} key={current}>
          <h2 ref={titleRef} tabIndex={-1} className="flow__title">
            {STEP_TITLES[current]}
          </h2>
          <p className="flow__hint">{STEP_HINTS[current]}</p>

          {current === "program" && (
            <div data-field="program">
              <div className="choice-grid">
                {PROGRAMS.map((p) => (
                  <button key={p.id} type="button" className="choice" aria-pressed={data.program === p.id} onClick={() => choose(p.id)}>
                    <span className="choice__icon">
                      <Icon name={p.icon} size={18} />
                    </span>
                    <span className="choice__title">{p.title}</span>
                    <span className="choice__text">{p.text}</span>
                  </button>
                ))}
                <a className="choice choice--out" href={SITE.hellaUrl} target="_blank" rel="noopener noreferrer">
                  <span className="choice__icon">
                    <Icon name="arrowUpRight" size={18} />
                  </span>
                  <span className="choice__title">Pályát foglalnék</span>
                  <span className="choice__text">Online, a Hella rendszerében</span>
                </a>
              </div>
              <ErrorLine msg={errors.program} />
            </div>
          )}

          {current === "junior" && (
            <>
              <div className="field-row">
                <Field label="A gyerek neve" name="childName" error={errors.childName} required>
                  <input
                    id="childName"
                    className="input"
                    autoComplete="off"
                    value={data.childName}
                    onChange={(e) => set("childName", e.target.value)}
                    aria-invalid={!!errors.childName}
                    aria-describedby={errors.childName ? "childName-error" : undefined}
                  />
                </Field>
                <Field label="Életkora" name="childAge" error={errors.childAge} required>
                  <select
                    id="childAge"
                    className="select"
                    value={data.childAge}
                    onChange={(e) => set("childAge", e.target.value)}
                    aria-invalid={!!errors.childAge}
                    aria-describedby={errors.childAge ? "childAge-error" : undefined}
                  >
                    <option value="">Válassz</option>
                    {CHILD_AGES.map((a) => (
                      <option key={a} value={a}>
                        {a} éves
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <fieldset className="fieldset" data-field="group">
                <legend>
                  Csoport <span className="req">*</span>
                </legend>
                <div className="chips">
                  {GROUP_CHOICES.map((g) => (
                    <label key={g.id} className="chip">
                      <input
                        type="radio"
                        name="group"
                        value={g.id}
                        checked={data.group === g.id}
                        onChange={() => {
                          setData((d) => ({ ...d, group: g.id, slots: [], days: [] }));
                          setErrors((e) => ({ ...e, group: undefined, slots: undefined, days: undefined }));
                        }}
                      />
                      {g.name}
                    </label>
                  ))}
                </div>
                <ErrorLine msg={errors.group} />
              </fieldset>
              {data.group && data.group !== "nem-tudom" && (
                <fieldset className="fieldset" data-field="slots">
                  <legend>
                    Mely időpontok jók? <span className="req">*</span>
                  </legend>
                  <p className="field__help">Több is választható. 2026 ősz, hétköznap délután.</p>
                  <Chips options={ALL_JUNIOR_GROUPS.find((g) => g.id === data.group)?.slots ?? []} selected={data.slots} onToggle={(v) => toggle("slots", v)} />
                  <ErrorLine msg={errors.slots} />
                </fieldset>
              )}
              {data.group === "nem-tudom" && (
                <fieldset className="fieldset" data-field="days">
                  <legend>
                    Melyik délutánok jók? <span className="req">*</span>
                  </legend>
                  <Chips options={WEEKDAYS} selected={data.days} onToggle={(v) => toggle("days", v)} />
                  <ErrorLine msg={errors.days} />
                </fieldset>
              )}
              <label className="consent">
                <input type="checkbox" checked={data.fitness} onChange={(e) => set("fitness", e.target.checked)} />
                <span>Az erőnléti és koordinációs edzés is érdekel a tenisz mellé.</span>
              </label>
            </>
          )}

          {current === "level" && (
            <>
              <fieldset className="fieldset" data-field="level">
                <legend>
                  Melyik áll hozzád a legközelebb? <span className="req">*</span>
                </legend>
                <div className="choice-grid">
                  {LEVELS.map((l) => (
                    <label key={l} className="choice choice--radio">
                      <input type="radio" name="level" value={l} checked={data.level === l} onChange={() => set("level", l)} />
                      <span className="choice__title">{l.split(",")[0]}</span>
                      <span className="choice__text">{l.split(",").slice(1).join(",").trim()}</span>
                    </label>
                  ))}
                </div>
                <ErrorLine msg={errors.level} />
              </fieldset>
              <fieldset className="fieldset">
                <legend>
                  Hogyan játszanál? <span className="optional">(nem kötelező)</span>
                </legend>
                <Chips options={FORMATS} selected={data.formats} onToggle={(v) => toggle("formats", v)} />
              </fieldset>
            </>
          )}

          {current === "goals" && (
            <fieldset className="fieldset" data-field="goals">
              <legend>
                Célok <span className="req">*</span>
              </legend>
              <Chips options={GOALS} selected={data.goals} onToggle={(v) => toggle("goals", v)} />
              <ErrorLine msg={errors.goals} />
            </fieldset>
          )}

          {current === "time" && (
            <>
              <fieldset className="fieldset" data-field="days">
                <legend>
                  Napok <span className="req">*</span>
                </legend>
                <Chips options={ALL_DAYS} selected={data.days} onToggle={(v) => toggle("days", v)} />
                <ErrorLine msg={errors.days} />
              </fieldset>
              <fieldset className="fieldset" data-field="dayparts">
                <legend>
                  Napszak <span className="req">*</span>
                </legend>
                <Chips options={DAYPARTS} selected={data.dayparts} onToggle={(v) => toggle("dayparts", v)} />
                <ErrorLine msg={errors.dayparts} />
              </fieldset>
            </>
          )}

          {current === "weekdays" && (
            <fieldset className="fieldset" data-field="days">
              <legend>
                Napok <span className="req">*</span>
              </legend>
              <Chips options={GMC_DAYS} selected={data.days} onToggle={(v) => toggle("days", v)} />
              <ErrorLine msg={errors.days} />
            </fieldset>
          )}

          {current === "interest" && (
            <fieldset className="fieldset" data-field="interests">
              <legend>
                Kezelés <span className="req">*</span>
              </legend>
              <Chips options={INTERESTS} selected={data.interests} onToggle={(v) => toggle("interests", v)} />
              <ErrorLine msg={errors.interests} />
            </fieldset>
          )}

          {current === "contact" && (
            <>
              <Field label={data.program === "junior" ? "A szülő neve" : "A neved"} name="name" error={errors.name} required>
                <input
                  id="name"
                  className="input"
                  autoComplete="name"
                  value={data.name}
                  onChange={(e) => set("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
              </Field>
              <div className="field-row">
                <Field label="E-mail" name="email" error={errors.email} required>
                  <input
                    id="email"
                    className="input"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={(e) => set("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                </Field>
                <Field label="Telefon" name="phone" error={errors.phone} required>
                  <input
                    id="phone"
                    className="input"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+36 30 123 4567"
                    value={data.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                </Field>
              </div>
              <Field
                label={
                  <>
                    {data.program === "szemelyi-edzes" || data.program === "regeneracio"
                      ? "Van sérülésed, fájdalmad, vagy bármi, amiről tudnunk kell?"
                      : "Üzenet"}{" "}
                    <span className="optional">(nem kötelező)</span>
                  </>
                }
                name="message"
              >
                <textarea id="message" className="textarea" value={data.message} onChange={(e) => set("message", e.target.value)} />
              </Field>
              <div className="visually-hidden" aria-hidden="true">
                <label htmlFor="website">Weboldal</label>
                <input id="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => set("website", e.target.value)} />
              </div>
              <div data-field="consent">
                <label className="consent">
                  <input type="checkbox" checked={data.consent} onChange={(e) => set("consent", e.target.checked)} aria-invalid={!!errors.consent} />
                  <span>
                    Elolvastam az{" "}
                    <Link className="inline-link" href={privacyHref} target="_blank">
                      adatkezelési tájékoztatót
                    </Link>
                    , és hozzájárulok, hogy a megadott adataimmal felvegyétek velem a kapcsolatot.
                  </span>
                </label>
                <ErrorLine msg={errors.consent} />
              </div>
              <Summary data={data} />
              {status === "error" && (
                <div className="flow__alert" role="alert">
                  <strong>{failure === "invalid" ? "Valami nem stimmel az adatokkal." : "Most nem sikerült elküldeni a jelentkezést."}</strong>
                  <span>
                    {failure === "invalid"
                      ? "Nézd át a lépéseket, és próbáld újra."
                      : failure === "not_configured"
                        ? "Az online küldés most nem elérhető. Küldd el e-mailben, a kitöltött adatok már benne vannak, vagy hívj minket:"
                        : "Próbáld újra egy perc múlva, vagy küldd el e-mailben, a kitöltött adatokkal együtt:"}
                  </span>
                  {failure !== "invalid" && (
                    <span className="flow__alert-actions">
                      <a className="btn btn--primary btn--sm" href={mailto}>
                        <Icon name="mail" size={16} />
                        Küldés e-mailben
                      </a>
                      <a className="inline-link" href={phone.href}>
                        {phone.display}
                      </a>
                    </span>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {current !== "program" && (
          <div className="flow__nav">
            <button type="button" className="btn btn--ghost" onClick={back}>
              <Icon name="left" size={16} /> Vissza
            </button>
            <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
              {last ? (status === "sending" ? "Küldés…" : "Jelentkezés elküldése") : "Tovább"}
              {!last && <Icon name="arrow" size={16} />}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
