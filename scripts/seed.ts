/**
 * Seed donnees de test — Dashboard admin
 * Usage : npx tsx scripts/seed.ts
 * NE PAS executer en production
 */

import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const testUploads = [
  {
    email: "agent.dupont@agence-test.ch",
    address: "Rue de la Paix 12, 1201 Geneve",
    pack: "pack-immo",
    status: "received",
    stripe_payment_id: "cs_test_seed_001",
  },
  {
    email: "marie.martin@immobilier-test.ch",
    address: "Avenue de la Gare 5, 1003 Lausanne",
    pack: "solo",
    status: "processing",
    stripe_payment_id: "cs_test_seed_002",
  },
  {
    email: "regie.bernoise@regie-test.ch",
    address: "Bahnhofstrasse 45, 3001 Berne",
    pack: "pack-agence",
    status: "delivered",
    delivery_url: "https://visite3d.ch/demo/test-bien",
    stripe_payment_id: "cs_test_seed_003",
    delivered_at: new Date().toISOString(),
  },
  {
    email: "lucas.favre@agence-test.ch",
    address: "Chemin des Vignes 8, 1009 Pully",
    pack: "pack-immo",
    status: "received",
    stripe_payment_id: "cs_test_seed_004",
  },
  {
    email: "nathalie.rouge@courtier-test.ch",
    address: "Rue du Marche 3, 2300 La Chaux-de-Fonds",
    pack: "solo",
    status: "delivered",
    delivery_url: "https://visite3d.ch/demo/test-bien-2",
    stripe_payment_id: "cs_test_seed_005",
    delivered_at: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
  },
  {
    email: "info@promoteur-test.ch",
    address: "Avenue de Rumine 18, 1005 Lausanne",
    pack: "pack-agence",
    status: "processing",
    stripe_payment_id: "cs_test_seed_006",
  },
  {
    email: "yann.blanc@particulier-test.ch",
    address: "Route de Berne 120, 1010 Lausanne",
    pack: "solo",
    status: "rejected",
    rejection_reason: "Video filmee en mode portrait (vertical)",
    stripe_payment_id: "cs_test_seed_007",
  },
  {
    email: "contact@regie-genevoise-test.ch",
    address: "Rue du Rhone 50, 1204 Geneve",
    pack: "pack-immo",
    status: "received",
    stripe_payment_id: "cs_test_seed_008",
  },
  {
    email: "sophie.muller@agence-test.ch",
    address: "Place de la Riponne 2, 1005 Lausanne",
    pack: "pack-immo",
    status: "validating",
    stripe_payment_id: "cs_test_seed_009",
  },
  {
    email: "admin@grande-regie-test.ch",
    address: "Quai du Mont-Blanc 7, 1201 Geneve",
    pack: "pack-agence",
    status: "received",
    stripe_payment_id: "cs_test_seed_010",
  },
];

const testLeads = [
  {
    email: "directeur@agence-geneve-test.ch",
    company_name: "Agence Lac Leman",
    contact_name: "Philippe Rochat",
    phone: "+41 22 345 67 89",
    city: "Geneve",
    canton: "GE",
    segment: "agence",
    status: "qualified",
    score: 82,
    source: "swiss-leads",
  },
  {
    email: "info@regie-vaudoise-test.ch",
    company_name: "Regie Vaudoise SA",
    contact_name: "Catherine Bonvin",
    phone: "+41 21 234 56 78",
    city: "Lausanne",
    canton: "VD",
    segment: "regie",
    status: "demo",
    score: 91,
    source: "swiss-leads",
  },
  {
    email: "pierre.favre@courtier-jura-test.ch",
    company_name: "Favre Immobilier",
    contact_name: "Pierre Favre",
    phone: "+41 32 456 78 90",
    city: "Delemont",
    canton: "JU",
    segment: "courtier",
    status: "contacted",
    score: 45,
    source: "swiss-leads",
  },
  {
    email: "contact@immoscout-test.ch",
    company_name: "ImmoScout Partner",
    contact_name: "Marc Auberson",
    phone: "+41 26 789 01 23",
    city: "Fribourg",
    canton: "FR",
    segment: "agence",
    status: "new",
    score: 0,
    source: "swiss-leads",
  },
  {
    email: "direction@alpine-immo-test.ch",
    company_name: "Alpine Immobilier",
    contact_name: "Jean-Marc Berset",
    phone: "+41 27 123 45 67",
    city: "Sion",
    canton: "VS",
    segment: "agence",
    status: "won",
    score: 95,
    source: "swiss-leads",
  },
  {
    email: "info@regie-neuchatel-test.ch",
    company_name: "Regie du Littoral",
    contact_name: "Anne-Sophie Perret",
    phone: "+41 32 987 65 43",
    city: "Neuchatel",
    canton: "NE",
    segment: "regie",
    status: "contacted",
    score: 35,
    source: "swiss-leads",
  },
  {
    email: "vente@courtier-fribourg-test.ch",
    company_name: "Courtage Fribourgeois",
    contact_name: "Daniel Savary",
    phone: "+41 26 543 21 09",
    city: "Fribourg",
    canton: "FR",
    segment: "courtier",
    status: "qualified",
    score: 68,
    source: "swiss-leads",
  },
  {
    email: "contact@mega-regie-test.ch",
    company_name: "MegaRegie Suisse",
    contact_name: "Thomas Wider",
    phone: "+41 21 876 54 32",
    city: "Lausanne",
    canton: "VD",
    segment: "regie",
    status: "demo",
    score: 88,
    source: "website",
  },
  {
    email: "admin@promoteur-romand-test.ch",
    company_name: "Promotions Romandes SA",
    contact_name: "Claire Dubois",
    phone: "+41 22 111 22 33",
    city: "Geneve",
    canton: "GE",
    segment: "promoteur",
    status: "new",
    score: 10,
    source: "swiss-leads",
  },
  {
    email: "julien.rouge@particulier-test.ch",
    company_name: null,
    contact_name: "Julien Rouge",
    phone: "+41 79 123 45 67",
    city: "Montreux",
    canton: "VD",
    segment: "particulier",
    status: "won",
    score: 78,
    source: "website",
  },
  {
    email: "lost-lead@agence-test.ch",
    company_name: "Agence Perdue",
    contact_name: "Robert Noir",
    phone: "+41 21 000 00 00",
    city: "Yverdon",
    canton: "VD",
    segment: "agence",
    status: "lost",
    score: 30,
    source: "swiss-leads",
  },
  {
    email: "unsub@ancienne-regie-test.ch",
    company_name: "Ancienne Regie",
    contact_name: "Georges Ancien",
    phone: "+41 22 000 00 00",
    city: "Geneve",
    canton: "GE",
    segment: "regie",
    status: "unsubscribed",
    score: 15,
    source: "swiss-leads",
  },
  {
    email: "nouveau@agence-bienne-test.ch",
    company_name: "Immo Bienne",
    contact_name: "Stefan Weber",
    phone: "+41 32 111 22 33",
    city: "Bienne",
    canton: "BE",
    segment: "agence",
    status: "new",
    score: 0,
    source: "swiss-leads",
  },
  {
    email: "hot-lead@premium-immo-test.ch",
    company_name: "Premium Immobilier",
    contact_name: "Alexandra Tissot",
    phone: "+41 21 999 88 77",
    city: "Lausanne",
    canton: "VD",
    segment: "agence",
    status: "qualified",
    score: 92,
    source: "website",
    next_action: "Planifier demo",
    next_action_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    email: "info@courtier-valais-test.ch",
    company_name: "Courtage Valaisan",
    contact_name: "Michel Cretton",
    phone: "+41 27 999 88 77",
    city: "Martigny",
    canton: "VS",
    segment: "courtier",
    status: "contacted",
    score: 55,
    source: "swiss-leads",
  },
];

async function seed() {
  console.log("Demarrage du seed...\n");

  // Clear existing test data
  const { error: delUploads } = await supabase
    .from("uploads")
    .delete()
    .like("stripe_payment_id", "cs_test_seed_%");
  if (delUploads) console.error("Erreur suppression uploads:", delUploads.message);

  const { error: delLeads } = await supabase
    .from("leads")
    .delete()
    .like("email", "%-test.ch");
  if (delLeads) console.error("Erreur suppression leads:", delLeads.message);

  // Insert uploads
  const { error: uploadsError } = await supabase
    .from("uploads")
    .insert(testUploads);
  if (uploadsError) {
    console.error("Uploads:", uploadsError.message);
  } else {
    console.log(`${testUploads.length} uploads crees`);
  }

  // Insert leads
  const { error: leadsError } = await supabase
    .from("leads")
    .insert(testLeads);
  if (leadsError) {
    console.error("Leads:", leadsError.message);
  } else {
    console.log(`${testLeads.length} leads crees`);
  }

  console.log("\nSeed termine. Dashboard pret a tester.");
  console.log("http://localhost:3000/admin/crm\n");
}

seed();
