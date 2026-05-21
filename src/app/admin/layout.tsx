/**
 * Admin Layout
 * Auth guard dans middleware.ts
 * Sidebar conditionnelle via AdminShell (pas sur /admin/login)
 */

import { AdminShell } from "./components/admin-shell";

export const metadata = {
  title: "Admin — Visite3D Immo",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <AdminShell>{children}</AdminShell>
    </div>
  );
}
