/**
 * POST /api/webhooks/cal
 *
 * Recoit les evenements Cal.com (booking created, cancelled)
 * Met a jour le CRM
 */

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

interface CalPayload {
  triggerEvent: "BOOKING_CREATED" | "BOOKING_CANCELLED" | "BOOKING_RESCHEDULED";
  payload: {
    title: string;
    startTime: string;
    endTime: string;
    attendees: Array<{
      email: string;
      name: string;
    }>;
    organizer: {
      email: string;
      name: string;
    };
    metadata?: Record<string, string>;
  };
}

export async function POST(req: NextRequest) {
  const body: CalPayload = await req.json();
  const { triggerEvent, payload } = body;

  const db = supabaseAdmin();
  const attendeeEmail = payload.attendees?.[0]?.email;

  if (!attendeeEmail) {
    return NextResponse.json({ ok: true, matched: false });
  }

  // Trouver le lead
  const { data: lead } = await db
    .from("leads")
    .select("id, score")
    .eq("email", attendeeEmail)
    .single();

  if (!lead) {
    return NextResponse.json({ ok: true, matched: false });
  }

  switch (triggerEvent) {
    case "BOOKING_CREATED": {
      await db.from("lead_activities").insert({
        lead_id: lead.id,
        type: "demo_booked",
        channel: "cal",
        content: `Demo planifiee: ${payload.startTime}`,
      });

      await db
        .from("leads")
        .update({
          status: "demo",
          score: Math.min(100, (lead.score ?? 0) + 25),
          last_contact_at: new Date().toISOString(),
          next_action: "Demo a effectuer",
          next_action_at: payload.startTime,
        })
        .eq("id", lead.id);

      break;
    }

    case "BOOKING_CANCELLED": {
      await db.from("lead_activities").insert({
        lead_id: lead.id,
        type: "note",
        channel: "cal",
        content: "Demo annulee par le prospect",
      });

      await db
        .from("leads")
        .update({
          status: "contacted",
          next_action: "Relancer suite annulation demo",
          next_action_at: new Date(
            Date.now() + 2 * 24 * 60 * 60 * 1000
          ).toISOString(),
        })
        .eq("id", lead.id);

      break;
    }

    case "BOOKING_RESCHEDULED": {
      await db.from("lead_activities").insert({
        lead_id: lead.id,
        type: "note",
        channel: "cal",
        content: `Demo replanifiee: ${payload.startTime}`,
      });

      await db
        .from("leads")
        .update({
          next_action: "Demo replanifiee",
          next_action_at: payload.startTime,
        })
        .eq("id", lead.id);

      break;
    }
  }

  return NextResponse.json({ ok: true, matched: true });
}
