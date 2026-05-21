/**
 * GET /api/crm/leads — Liste les leads avec filtres
 * POST /api/crm/leads — Cree un lead
 */

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { verifyAdmin } from "@/lib/auth";

export async function GET(req: NextRequest) {
  if (!verifyAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = supabaseAdmin();
  const sp = req.nextUrl.searchParams;
  const status = sp.get("status");
  const segment = sp.get("segment");
  const canton = sp.get("canton");
  const minScore = sp.get("min_score");
  const limit = parseInt(sp.get("limit") ?? "100");

  let query = db
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (status) query = query.eq("status", status);
  if (segment) query = query.eq("segment", segment);
  if (canton) query = query.eq("canton", canton);
  if (minScore) query = query.gte("score", parseInt(minScore));

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ leads: data });
}

export async function POST(req: NextRequest) {
  if (!verifyAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { email, company_name, contact_name, phone, city, canton, segment, source } = body;

  if (!email) {
    return NextResponse.json({ error: "email requis" }, { status: 400 });
  }

  const db = supabaseAdmin();
  const { data, error } = await db
    .from("leads")
    .insert({
      email,
      company_name: company_name ?? null,
      contact_name: contact_name ?? null,
      phone: phone ?? null,
      city: city ?? null,
      canton: canton ?? null,
      segment: segment ?? "particulier",
      source: source ?? "manual",
      status: "new",
      score: 0,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ lead: data }, { status: 201 });
}
