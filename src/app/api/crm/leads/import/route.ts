/**
 * POST /api/crm/leads/import — Import CSV Swiss-Leads
 *
 * Body: { csv: string } (contenu CSV brut)
 * Format attendu: email,company,contact,phone,city,canton
 */

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { verifyAdmin } from "@/lib/auth";

interface CsvRow {
  email: string;
  company_name: string;
  contact_name: string;
  phone: string;
  city: string;
  canton: string;
}

function parseCsv(raw: string): CsvRow[] {
  const lines = raw.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
  const rows: CsvRow[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",").map((v) => v.trim());
    const obj: Record<string, string> = {};
    headers.forEach((h, idx) => {
      obj[h] = values[idx] ?? "";
    });

    if (obj.email) {
      rows.push({
        email: obj.email,
        company_name: obj.company || obj.company_name || "",
        contact_name: obj.contact || obj.contact_name || "",
        phone: obj.phone || obj.telephone || "",
        city: obj.city || obj.ville || "",
        canton: obj.canton || "",
      });
    }
  }

  return rows;
}

export async function POST(req: NextRequest) {
  if (!verifyAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { csv } = body;

  if (!csv || typeof csv !== "string") {
    return NextResponse.json(
      { error: "csv (string) requis dans le body" },
      { status: 400 }
    );
  }

  const rows = parseCsv(csv);
  if (rows.length === 0) {
    return NextResponse.json(
      { error: "Aucune ligne valide dans le CSV" },
      { status: 400 }
    );
  }

  const db = supabaseAdmin();
  let created = 0;
  let duplicates = 0;
  let errors = 0;

  // Batch insert par 10 (limite Supabase/Airtable)
  for (let i = 0; i < rows.length; i += 10) {
    const batch = rows.slice(i, i + 10);
    const { data, error } = await db
      .from("leads")
      .upsert(
        batch.map((r) => ({
          email: r.email,
          company_name: r.company_name || null,
          contact_name: r.contact_name || null,
          phone: r.phone || null,
          city: r.city || null,
          canton: r.canton || null,
          segment: "agence" as const,
          source: "swiss-leads",
          status: "new" as const,
          score: 0,
        })),
        { onConflict: "email", ignoreDuplicates: false }
      )
      .select();

    if (error) {
      errors += batch.length;
    } else {
      created += data?.length ?? 0;
      duplicates += batch.length - (data?.length ?? 0);
    }
  }

  return NextResponse.json({
    total: rows.length,
    created,
    duplicates,
    errors,
  });
}
