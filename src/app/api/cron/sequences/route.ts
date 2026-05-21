/**
 * GET /api/cron/sequences — Cron quotidien 9h
 *
 * Orchestration des sequences commerciales :
 * 1. Leads "new" depuis 24h -> cold email J0 + appel VoiceIA
 * 2. Leads "contacted" sans reponse 3j -> relance J3
 * 3. Leads "demo" sans conversion 7j -> followup post-demo
 * 4. Leads score >= 75 sans action -> alerte hot lead
 */

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { verifyCron } from "@/lib/auth";
import { startSequence } from "@/lib/brevo";
import { initiateCall } from "@/lib/voiceia";
import { alertHotLead } from "@/lib/telegram";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function GET(req: NextRequest) {
  if (!verifyCron(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = supabaseAdmin();
  const now = new Date();
  const results = {
    coldEmails: 0,
    callsInitiated: 0,
    relances: 0,
    followups: 0,
    hotAlerts: 0,
  };

  // 1. Leads "new" depuis plus de 24h sans contact
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
  const { data: newLeads } = await db
    .from("leads")
    .select("*")
    .eq("status", "new")
    .lt("created_at", oneDayAgo)
    .is("last_contact_at", null)
    .limit(20);

  for (const lead of newLeads ?? []) {
    // Demarrer sequence cold email
    if (lead.email) {
      await startSequence(lead.email, "cold-agence");
      results.coldEmails++;
    }

    // Appel de qualification si telephone
    if (lead.phone) {
      try {
        await initiateCall({
          phone: lead.phone,
          contactName: lead.contact_name ?? "",
          companyName: lead.company_name ?? "",
          purpose: "qualification",
          context: `Lead ${lead.segment} de ${lead.city ?? "CH"}`,
        });
        results.callsInitiated++;
      } catch {
        // VoiceIA peut etre indisponible, on continue
      }
    }

    // Update status
    await db
      .from("leads")
      .update({
        status: "contacted",
        last_contact_at: now.toISOString(),
        next_action: "Attendre reponse email/appel",
        next_action_at: new Date(
          now.getTime() + 3 * 24 * 60 * 60 * 1000
        ).toISOString(),
      })
      .eq("id", lead.id);
  }

  // 2. Leads "contacted" sans activite depuis 3 jours -> relance
  const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString();
  const { data: staleContacted } = await db
    .from("leads")
    .select("*")
    .eq("status", "contacted")
    .lt("last_contact_at", threeDaysAgo)
    .limit(20);

  for (const lead of staleContacted ?? []) {
    if (lead.phone) {
      try {
        await initiateCall({
          phone: lead.phone,
          contactName: lead.contact_name ?? "",
          companyName: lead.company_name ?? "",
          purpose: "relance",
        });
        results.relances++;
      } catch {
        // Continue
      }
    }

    await db
      .from("leads")
      .update({
        last_contact_at: now.toISOString(),
        next_action: "Attendre relance J7",
        next_action_at: new Date(
          now.getTime() + 4 * 24 * 60 * 60 * 1000
        ).toISOString(),
      })
      .eq("id", lead.id);
  }

  // 3. Leads "demo" sans conversion depuis 7j -> followup
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const { data: staleDemo } = await db
    .from("leads")
    .select("*")
    .eq("status", "demo")
    .lt("last_contact_at", sevenDaysAgo)
    .limit(20);

  for (const lead of staleDemo ?? []) {
    if (lead.email) {
      await startSequence(lead.email, "followup-demo");
      results.followups++;
    }

    await db
      .from("leads")
      .update({
        last_contact_at: now.toISOString(),
        next_action: "Suivi post-demo automatise",
      })
      .eq("id", lead.id);
  }

  // 4. Hot leads (score >= 75) sans action recente
  const { data: hotLeads } = await db
    .from("leads")
    .select("*")
    .gte("score", 75)
    .not("status", "in", '("won","lost","unsubscribed")')
    .lt("last_contact_at", oneDayAgo)
    .limit(10);

  for (const lead of hotLeads ?? []) {
    await alertHotLead(
      lead.company_name ?? lead.email,
      lead.score,
      lead.next_action ?? "Contacter en priorite"
    );
    results.hotAlerts++;
  }

  return NextResponse.json({
    ok: true,
    timestamp: now.toISOString(),
    results,
  });
}
