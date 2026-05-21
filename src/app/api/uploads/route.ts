/**
 * GET /api/uploads — Liste les uploads (admin)
 * POST /api/uploads — Cree un upload manuellement
 */

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { verifyAdmin } from "@/lib/auth";

export async function GET(req: NextRequest) {
  if (!verifyAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = supabaseAdmin();
  const status = req.nextUrl.searchParams.get("status");
  const limit = parseInt(req.nextUrl.searchParams.get("limit") ?? "50");

  let query = db
    .from("uploads")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (status) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ uploads: data });
}

export async function POST(req: NextRequest) {
  if (!verifyAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { email, address, pack, notes } = body;

  if (!email || !address || !pack) {
    return NextResponse.json(
      { error: "email, address et pack requis" },
      { status: 400 }
    );
  }

  const db = supabaseAdmin();
  const { data, error } = await db
    .from("uploads")
    .insert({ email, address, pack, notes, status: "received" })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ upload: data }, { status: 201 });
}
