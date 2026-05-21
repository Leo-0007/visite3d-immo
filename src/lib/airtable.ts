/**
 * Airtable CRM — operations leads
 *
 * Tables Airtable requises :
 * - Leads : email, company_name, contact_name, phone, city, canton,
 *           segment, status, score, source, notes
 * - Activities : lead_id, type, channel, content, outcome
 *
 * Env vars : AIRTABLE_API_KEY, AIRTABLE_BASE_ID,
 *            AIRTABLE_LEADS_TABLE_ID, AIRTABLE_ACTIVITIES_TABLE_ID
 */

const AIRTABLE_API = "https://api.airtable.com/v0";

function headers() {
  const key = process.env.AIRTABLE_API_KEY;
  if (!key) throw new Error("AIRTABLE_API_KEY manquant");
  return {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };
}

function baseUrl() {
  const id = process.env.AIRTABLE_BASE_ID;
  if (!id) throw new Error("AIRTABLE_BASE_ID manquant");
  return `${AIRTABLE_API}/${id}`;
}

export type LeadSegment =
  | "agence"
  | "regie"
  | "courtier"
  | "particulier"
  | "promoteur";

export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "demo"
  | "won"
  | "lost"
  | "unsubscribed";

export interface LeadInput {
  email: string;
  company_name?: string;
  contact_name?: string;
  phone?: string;
  city?: string;
  canton?: string;
  segment?: LeadSegment;
  source?: string;
  notes?: string;
}

export async function createLead(lead: LeadInput) {
  const tableId = process.env.AIRTABLE_LEADS_TABLE_ID;
  const res = await fetch(`${baseUrl()}/${tableId}`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      records: [
        {
          fields: {
            Email: lead.email,
            "Company Name": lead.company_name ?? "",
            "Contact Name": lead.contact_name ?? "",
            Phone: lead.phone ?? "",
            City: lead.city ?? "",
            Canton: lead.canton ?? "",
            Segment: lead.segment ?? "particulier",
            Status: "new",
            Score: 0,
            Source: lead.source ?? "website",
            Notes: lead.notes ?? "",
          },
        },
      ],
    }),
  });
  const data = await res.json();
  return data.records?.[0]?.id as string | undefined;
}

export async function updateLeadStatus(
  airtableId: string,
  status: LeadStatus,
  notes?: string
) {
  const tableId = process.env.AIRTABLE_LEADS_TABLE_ID;
  const fields: Record<string, string> = { Status: status };
  if (notes) fields.Notes = notes;

  await fetch(`${baseUrl()}/${tableId}`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify({
      records: [{ id: airtableId, fields }],
    }),
  });
}

export async function getLeadsByStatus(status: LeadStatus) {
  const tableId = process.env.AIRTABLE_LEADS_TABLE_ID;
  const formula = encodeURIComponent(`{Status} = '${status}'`);
  const res = await fetch(
    `${baseUrl()}/${tableId}?filterByFormula=${formula}`,
    { headers: headers() }
  );
  const data = await res.json();
  return data.records ?? [];
}

export async function getHotLeads(minScore = 75) {
  const tableId = process.env.AIRTABLE_LEADS_TABLE_ID;
  const formula = encodeURIComponent(`{Score} >= ${minScore}`);
  const res = await fetch(
    `${baseUrl()}/${tableId}?filterByFormula=${formula}&sort%5B0%5D%5Bfield%5D=Score&sort%5B0%5D%5Bdirection%5D=desc`,
    { headers: headers() }
  );
  const data = await res.json();
  return data.records ?? [];
}

/**
 * Import CSV Swiss-Leads format.
 * Colonnes attendues : email, company, contact, phone, city, canton
 */
export async function importFromCSV(csvData: string) {
  const lines = csvData.trim().split("\n");
  const headerLine = lines[0];
  const headers_csv = headerLine.split(",").map((h) => h.trim().toLowerCase());

  const records: LeadInput[] = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",").map((v) => v.trim());
    const row: Record<string, string> = {};
    headers_csv.forEach((h, idx) => {
      row[h] = values[idx] ?? "";
    });
    if (row.email) {
      records.push({
        email: row.email,
        company_name: row.company || row.company_name,
        contact_name: row.contact || row.contact_name,
        phone: row.phone || row.telephone,
        city: row.city || row.ville,
        canton: row.canton,
        segment: "agence",
        source: "swiss-leads",
      });
    }
  }

  // Batch insert (Airtable max 10 per request)
  let created = 0;
  let errors = 0;
  const tableId = process.env.AIRTABLE_LEADS_TABLE_ID;

  for (let i = 0; i < records.length; i += 10) {
    const batch = records.slice(i, i + 10);
    try {
      await fetch(`${baseUrl()}/${tableId}`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({
          records: batch.map((r) => ({
            fields: {
              Email: r.email,
              "Company Name": r.company_name ?? "",
              "Contact Name": r.contact_name ?? "",
              Phone: r.phone ?? "",
              City: r.city ?? "",
              Canton: r.canton ?? "",
              Segment: r.segment ?? "agence",
              Status: "new",
              Score: 0,
              Source: r.source ?? "swiss-leads",
            },
          })),
        }),
      });
      created += batch.length;
    } catch {
      errors += batch.length;
    }
  }

  return { total: records.length, created, errors };
}
