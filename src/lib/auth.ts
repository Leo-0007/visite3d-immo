/**
 * Auth utilitaire — verification admin par token
 *
 * Env var : ADMIN_SECRET_TOKEN
 *
 * Utilisation : header Authorization: Bearer <token>
 */

import { NextRequest } from "next/server";

export function verifyAdmin(req: NextRequest): boolean {
  const secret = process.env.ADMIN_SECRET_TOKEN;
  if (!secret) return false;

  const auth = req.headers.get("authorization");
  if (!auth) return false;

  const token = auth.replace("Bearer ", "");
  return token === secret;
}

/**
 * Verification token pour les crons Vercel
 * Header: Authorization: Bearer <CRON_SECRET>
 */
export function verifyCron(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;

  const auth = req.headers.get("authorization");
  if (!auth) return false;

  const token = auth.replace("Bearer ", "");
  return token === secret;
}
