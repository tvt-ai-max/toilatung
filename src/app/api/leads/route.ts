import { NextResponse } from "next/server";

type LeadPayload = {
  source?: string;
  submittedAt?: string;
  fields?: Record<string, string>;
};

function sanitizeLead(payload: unknown): LeadPayload | null {
  if (!payload || typeof payload !== "object") return null;

  const candidate = payload as LeadPayload;
  if (!candidate.fields || typeof candidate.fields !== "object") return null;

  const fields = Object.fromEntries(
    Object.entries(candidate.fields)
      .filter(([, value]) => typeof value === "string")
      .map(([key, value]) => [key, value.trim()])
  );

  const hasContact = Boolean(fields.email || fields.phone || fields.contact);
  const hasName = Boolean(fields.name);

  if (!hasName || !hasContact) return null;

  return {
    source: candidate.source || "unknown",
    submittedAt: candidate.submittedAt || new Date().toISOString(),
    fields,
  };
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const lead = sanitizeLead(payload);

  if (!lead) {
    return NextResponse.json(
      { error: "Missing required lead fields" },
      { status: 400 }
    );
  }

  if (process.env.LEAD_WEBHOOK_URL) {
    const response = await fetch(process.env.LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Lead webhook rejected the submission" },
        { status: 502 }
      );
    }
  } else {
    console.info("Lead captured without webhook:", lead);
  }

  return NextResponse.json({ ok: true });
}
