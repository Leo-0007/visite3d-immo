/**
 * GET /api/cron/reminders — Cron quotidien 10h
 *
 * Rappels et relances automatiques :
 * 1. Uploads "received" depuis 48h sans video -> reminder email
 * 2. Uploads "processing" depuis 20h -> alerte livraison due
 * 3. Leads avec next_action_at depasse -> alerte Telegram
 */

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { verifyCron } from "@/lib/auth";
import { sendUploadReminder } from "@/lib/brevo";
import { alertDeliveryDue } from "@/lib/telegram";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function GET(req: NextRequest) {
  if (!verifyCron(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = supabaseAdmin();
  const now = new Date();
  const results = {
    uploadReminders: 0,
    deliveryAlerts: 0,
    actionReminders: 0,
  };

  // 1. Uploads sans video depuis 48h
  const twoDaysAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000).toISOString();
  const { data: staleUploads } = await db
    .from("uploads")
    .select("*")
    .eq("status", "received")
    .is("video_url", null)
    .lt("created_at", twoDaysAgo)
    .limit(20);

  for (const upload of staleUploads ?? []) {
    await sendUploadReminder(upload.email, upload.address);
    results.uploadReminders++;
  }

  // 2. Uploads en processing depuis 20h -> livraison bientot due
  const twentyHoursAgo = new Date(now.getTime() - 20 * 60 * 60 * 1000).toISOString();
  const { data: processingUploads } = await db
    .from("uploads")
    .select("*")
    .eq("status", "processing")
    .lt("created_at", twentyHoursAgo)
    .limit(20);

  for (const upload of processingUploads ?? []) {
    const createdAt = new Date(upload.created_at);
    const hoursElapsed = (now.getTime() - createdAt.getTime()) / (60 * 60 * 1000);
    const hoursRemaining = Math.max(0, Math.round(24 - hoursElapsed));

    await alertDeliveryDue(upload.address, upload.email, hoursRemaining);
    results.deliveryAlerts++;
  }

  // 3. Leads avec action en retard
  const { data: overdueLeads } = await db
    .from("leads")
    .select("*")
    .lt("next_action_at", now.toISOString())
    .not("status", "in", '("won","lost","unsubscribed")')
    .limit(20);

  for (const lead of overdueLeads ?? []) {
    await alertDeliveryDue(
      lead.company_name ?? lead.email,
      lead.next_action ?? "Action requise",
      0
    );
    results.actionReminders++;
  }

  return NextResponse.json({
    ok: true,
    timestamp: now.toISOString(),
    results,
  });
}
