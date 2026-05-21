/**
 * POST /api/admin/auth — Login admin
 *
 * Body: { password: string }
 * Rate limit: 5 tentatives/IP/heure (in-memory)
 * Set cookie httpOnly admin_token (7 jours)
 */

import { NextRequest, NextResponse } from "next/server";

// Rate limit store (in-memory, reset au redeploy)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }

  if (entry.count >= 5) {
    return false;
  }

  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many attempts", locked: true },
      { status: 429 }
    );
  }

  const { password } = await req.json();
  const secret = process.env.ADMIN_SECRET_TOKEN;

  if (!secret || password !== secret) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  // Reset rate limit on success
  rateLimitMap.delete(ip);

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_token", secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 jours
  });

  return res;
}
