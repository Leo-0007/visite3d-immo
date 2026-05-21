/**
 * POST /api/webhooks/brevo
 *
 * Recoit les evenements Brevo (email opened, clicked, unsubscribed)
 * et met a jour le CRM + log activity
 */

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

interface BrevoEvent {
  event: string;
  email: string;
  "message-id"?: string;
  ts_event?: number;
  tag?: string;
}

export async function POST(req: NextRequest) {
  const events: BrevoEvent[] = await req.json();

  if (!Array.isArray(events)) {
    return NextResponse.json({ error: "Expected array" }, { status: 400 });
  }

  const db = supabaseAdmin();

  for (const evt of events) {
    const { email, event: eventType } = evt;
    if (!email) continue;

    // Trouver le lead
    const { data: lead } = await db
      .from("leads")
      .select("id, score")
      .eq("email", email)
      .single();

    if (!lead) continue;

    // Map event type
    let activityType: string;
    let scoreBoost = 0;

    switch (eventType) {
      case "opened":
        activityType = "email_opened";
        scoreBoost = 5;
        break;
      case "click":
        activityType = "email_clicked";
        scoreBoost = 15;
        break;
      case "unsubscribed":
        activityType = "unsubscribed";
        // Update status
        await db
          .from("leads")
          .update({ status: "unsubscribed" })
          .eq("id", lead.id);
        break;
      default:
        activityType = "email_sent";
        break;
    }

    // Log activity
    await db.from("lead_activities").insert({
      lead_id: lead.id,
      type: activityType,
      channel: "brevo",
      content: `Event: ${eventType}`,
    });

    // Update score
    if (scoreBoost > 0) {
      const newScore = Math.min(100, (lead.score ?? 0) + scoreBoost);
      await db
        .from("leads")
        .update({ score: newScore, last_contact_at: new Date().toISOString() })
        .eq("id", lead.id);
    }
  }

  return NextResponse.json({ processed: events.length });
}
