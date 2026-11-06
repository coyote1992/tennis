// Receives the sign-up flow. Sends it by e-mail through Resend when RESEND_API_KEY is set on the
// server (to SIGNUP_TO, or the club's address); without a key it answers "not_configured" and the
// form offers the same answers as a ready-made e-mail, as on the previous site.
import { NextResponse } from "next/server";
import { type FlowData, summarize, validateStep } from "@/lib/flow";
import { PROGRAMS, SITE } from "@/lib/site";

export async function POST(req: Request) {
  let data: FlowData;
  try {
    data = (await req.json()) as FlowData;
  } catch {
    return NextResponse.json({ error: "invalid", fields: ["body"] }, { status: 422 });
  }
  if (!data || typeof data !== "object") return NextResponse.json({ error: "invalid", fields: ["body"] }, { status: 422 });
  // the hidden "website" field is only ever filled in by bots
  if (data.website) return NextResponse.json({ ok: true });

  const program = PROGRAMS.find((p) => p.id === data.program);
  if (!program) return NextResponse.json({ error: "invalid", fields: ["program"] }, { status: 422 });
  const bad = program.steps.flatMap((s) => Object.keys(validateStep(s, { ...emptyLists, ...data })));
  if (bad.length) return NextResponse.json({ error: "invalid", fields: bad }, { status: 422 });

  const key = process.env.RESEND_API_KEY;
  // answered with 200 so the browser console stays clean; the form reads `ok`
  if (!key) return NextResponse.json({ ok: false, error: "not_configured" });

  const rows = [...summarize(data), ["Név", data.name], ["E-mail", data.email], ["Telefon", data.phone]] as [string, string][];
  if (data.message?.trim()) rows.push(["Megjegyzés", data.message.trim()]);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.SIGNUP_FROM ?? "Next Tenisz <jelentkezes@next.tenis.studio>",
      to: [process.env.SIGNUP_TO ?? SITE.email],
      reply_to: data.email,
      subject: `Jelentkezés: ${program.title}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
    }),
  });
  if (!res.ok) return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}

const emptyLists = { slots: [], formats: [], goals: [], days: [], dayparts: [], interests: [] } as Partial<FlowData>;
