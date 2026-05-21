/**
 * PATCH /api/uploads/[id] — Met a jour le statut / delivery URL
 */

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { verifyAdmin } from "@/lib/auth";
import { sendDelivery } from "@/lib/brevo";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const { status, delivery_url, rejection_reason, notes } = body;

  const db = supabaseAdmin();

  const updates: Record<string, unknown> = {};
  if (status) updates.status = status;
  if (delivery_url) updates.delivery_url = delivery_url;
  if (rejection_reason) updates.rejection_reason = rejection_reason;
  if (notes !== undefined) updates.notes = notes;
  if (status === "delivered") updates.delivered_at = new Date().toISOString();

  const { data, error } = await db
    .from("uploads")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Si delivered, envoyer l'email de livraison
  if (status === "delivered" && delivery_url && data?.email) {
    await sendDelivery(data.email, data.address, delivery_url);
  }

  return NextResponse.json({ upload: data });
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const db = supabaseAdmin();

  const { data, error } = await db
    .from("uploads")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }

  return NextResponse.json({ upload: data });
}
