/**
 * Applique les migrations Supabase via connexion directe (force IPv4)
 * Usage: node scripts/migrate.mjs
 */

import pg from "pg";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import dns from "dns";

// Force IPv4
dns.setDefaultResultOrder("ipv4first");

const __dirname = dirname(fileURLToPath(import.meta.url));

const client = new pg.Client({
  connectionString:
    process.env.DATABASE_URL ??
    "postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT_REF.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

const migrations = [
  "001_initial.sql",
  "002_stripe_events.sql",
];

async function run() {
  await client.connect();
  console.log("Connecte a Supabase PostgreSQL\n");

  for (const file of migrations) {
    const path = join(__dirname, "..", "supabase", "migrations", file);
    const sql = readFileSync(path, "utf-8");
    console.log(`Execution: ${file}...`);
    try {
      await client.query(sql);
      console.log(`  OK`);
    } catch (err) {
      if (err.code === "42P07") {
        console.log(`  Deja existante, skip`);
      } else {
        console.error(`  ERREUR: ${err.message}`);
      }
    }
  }

  await client.end();
  console.log("\nMigrations terminees.");
}

run().catch((err) => {
  console.error("Erreur fatale:", err.message);
  process.exit(1);
});
