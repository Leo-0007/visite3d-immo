/**
 * Verification des variables d'environnement
 * Usage : npx tsx scripts/check-env.ts
 */

import "dotenv/config";

const REQUIRED = [
  "ADMIN_SECRET_TOKEN",
  "CRON_SECRET",
  "STRIPE_SECRET_KEY",
  "STRIPE_WEBHOOK_SECRET",
  "SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
  "TELEGRAM_BOT_TOKEN",
  "TELEGRAM_CHAT_ID",
];

const OPTIONAL = [
  "NEXT_PUBLIC_STRIPE_LINK_AGENCE",
  "AIRTABLE_API_KEY",
  "AIRTABLE_BASE_ID",
  "AIRTABLE_LEADS_TABLE_ID",
  "AIRTABLE_ACTIVITIES_TABLE_ID",
  "BREVO_API_KEY",
  "VOICEIA_API_KEY",
  "VOICEIA_AGENT_ID",
  "NEXT_PUBLIC_PLAUSIBLE_DOMAIN",
];

let hasError = false;
console.log("\nVerification des variables d'environnement\n");

for (const key of REQUIRED) {
  if (!process.env[key]) {
    console.error(`  MANQUANTE (requise): ${key}`);
    hasError = true;
  } else {
    console.log(`  OK: ${key}`);
  }
}

console.log("");

for (const key of OPTIONAL) {
  if (!process.env[key]) {
    console.warn(`  MANQUANTE (optionnelle): ${key}`);
  } else {
    console.log(`  OK: ${key}`);
  }
}

if (hasError) {
  console.error("\nVariables requises manquantes. Arret.\n");
  process.exit(1);
}
console.log("\nToutes les variables requises sont presentes.\n");
