/**
 * POST /api/webhooks/voiceia
 *
 * Recoit les callbacks VoiceIA apres un appel
 * Met a jour le CRM avec le resultat
 */

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { alertHotLead } from "@/lib/telegram";

interface VoiceIACallback {
  call_id: string;
  status: "completed" | "no_answer" | "busy" | "failed";
  duration: number;
  outcome: string;
  transcript: string;
  summary: string;
  metadata: {
    contact_name: string;
    company_name: string;
    purpose: string;
  };
  phone_number: string;
}

export async function POST(req: NextRequest) {
  const body: VoiceIACallback = await req.json();

  const db = supabaseAdmin();

  // Trouver le lead par telephone
  const { data: lead } = await db
    .from("leads")
    .select("id, score, company_name")
    .eq("phone", body.phone_number)
    .single();

  if (!lead) {
    return NextResponse.json({ ok: true, matched: false });
  }

  // Determine activity type
  let activityType: string;
  let scoreBoost = 0;

  switch (body.status) {
    case "completed":
      activityType = "call_answered";
      scoreBoost = 20;
      break;
    case "no_answer":
    case "busy":
      activityType = "call_voicemail";
      scoreBoost = 5;
      break;
    default:
      activityType = "call_made";
      break;
  }

  // Log activity
  await db.from("lead_activities").insert({
    lead_id: lead.id,
    type: activityType,
    channel: "voiceia",
    content: body.summary || body.transcript?.slice(0, 500),
    outcome: body.outcome,
  });

  // Update score + status
  const newScore = Math.min(100, (lead.score ?? 0) + scoreBoost);
  const updates: Record<string, unknown> = {
    score: newScore,
    last_contact_at: new Date().toISOString(),
  };

  if (body.status === "completed" && body.outcome === "interested") {
    updates.status = "qualified";
    updates.next_action = "Planifier demo";
    updates.next_action_at = new Date(
      Date.now() + 24 * 60 * 60 * 1000
    ).toISOString();
  }

  await db.from("leads").update(updates).eq("id", lead.id);

  // Alert si hot lead
  if (newScore >= 75) {
    await alertHotLead(
      lead.company_name ?? "Inconnu",
      newScore,
      "Appel qualifie — planifier demo"
    );
  }

  return NextResponse.json({ ok: true, matched: true });
}
