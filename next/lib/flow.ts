// The sign-up flow's data, validation and summary: shared by the form (client) and the API route (server).
import { ALL_JUNIOR_GROUPS, PROGRAMS, type StepId } from "@/lib/site";

export type FlowData = {
  program: string;
  childName: string;
  childAge: string;
  group: string;
  slots: string[];
  fitness: boolean;
  level: string;
  formats: string[];
  goals: string[];
  days: string[];
  dayparts: string[];
  interests: string[];
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
  website: string;
};

export const EMPTY: FlowData = {
  program: "",
  childName: "",
  childAge: "",
  group: "",
  slots: [],
  fitness: false,
  level: "",
  formats: [],
  goals: [],
  days: [],
  dayparts: [],
  interests: [],
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
  website: "",
};

export const GROUP_CHOICES = [...ALL_JUNIOR_GROUPS.map((g) => ({ id: g.id, name: g.name })), { id: "nem-tudom", name: "Még nem tudom" }];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type Errors = Partial<Record<keyof FlowData, string>>;

export function validateStep(step: StepId, d: FlowData): Errors {
  const e: Errors = {};
  switch (step) {
    case "program":
      if (!PROGRAMS.some((p) => p.id === d.program)) e.program = "Válaszd ki, mire jelentkezel.";
      break;
    case "junior":
      if (!d.childName.trim()) e.childName = "Add meg a gyerek nevét.";
      if (!d.childAge) e.childAge = "Válaszd ki a gyerek életkorát.";
      if (!d.group) e.group = "Válassz csoportot, vagy jelöld, hogy még nem tudod.";
      else if (d.group !== "nem-tudom" && d.slots.length === 0) e.slots = "Jelölj be legalább egy időpontot.";
      else if (d.group === "nem-tudom" && d.days.length === 0) e.days = "Jelölj be legalább egy napot.";
      break;
    case "level":
      if (!d.level) e.level = "Válaszd ki, melyik áll hozzád a legközelebb.";
      break;
    case "goals":
      if (d.goals.length === 0) e.goals = "Jelölj be legalább egy célt.";
      break;
    case "time":
      if (d.days.length === 0) e.days = "Jelölj be legalább egy napot.";
      if (d.dayparts.length === 0) e.dayparts = "Jelölj be legalább egy napszakot.";
      break;
    case "weekdays":
      if (d.days.length === 0) e.days = "Jelölj be legalább egy napot.";
      break;
    case "interest":
      if (d.interests.length === 0) e.interests = "Jelölj be legalább egyet.";
      break;
    case "contact":
      if (!d.name.trim()) e.name = "Add meg a neved.";
      if (!d.email.trim()) e.email = "Add meg az e-mail-címed.";
      else if (!EMAIL_RE.test(d.email.trim())) e.email = "Ez nem tűnik érvényes e-mail-címnek. Nézd át, kérlek.";
      if (d.phone.replace(/\D/g, "").length < 9) e.phone = "Add meg a telefonszámod, hogy fel tudjunk hívni.";
      if (!d.consent) e.consent = "A küldéshez fogadd el az adatkezelési tájékoztatót.";
      break;
  }
  return e;
}

export function summarize(d: FlowData): [string, string][] {
  const p = PROGRAMS.find((x) => x.id === d.program);
  const has = (s: StepId) => !!p?.steps.includes(s);
  const out: [string, string][] = [];
  if (p) out.push(["Program", p.title]);
  if (d.program === "junior") {
    if (d.childName) out.push(["Gyerek", `${d.childName}${d.childAge ? `, ${d.childAge} éves` : ""}`]);
    if (d.group) out.push(["Csoport", GROUP_CHOICES.find((g) => g.id === d.group)?.name ?? d.group]);
    if (d.slots.length) out.push(["Időpontok", d.slots.join(", ")]);
    if (d.group === "nem-tudom" && d.days.length) out.push(["Napok", d.days.join(", ")]);
    out.push(["Erőnlét, koordináció", d.fitness ? "Érdekel" : "Most nem"]);
  }
  if (has("level") && d.level) out.push(["Szint", d.level]);
  if (has("level") && d.formats.length) out.push(["Forma", d.formats.join(", ")]);
  if (has("goals") && d.goals.length) out.push(["Célok", d.goals.join(", ")]);
  if ((has("time") || has("weekdays")) && d.days.length) out.push(["Napok", d.days.join(", ")]);
  if (has("time") && d.dayparts.length) out.push(["Napszak", d.dayparts.join(", ")]);
  if (has("interest") && d.interests.length) out.push(["Érdeklődés", d.interests.join(", ")]);
  return out;
}

