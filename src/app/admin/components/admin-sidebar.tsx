"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BarChart3,
  Package,
  Users,
  TrendingUp,
  LogOut,
  ExternalLink,
} from "lucide-react";
import { adminFetch } from "../crm/components/use-admin-fetch";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    async function loadPending() {
      try {
        const res = await adminFetch<{
          uploads: Array<{ status: string }>;
        }>("/api/uploads?status=received");
        setPendingCount(res.uploads?.length ?? 0);
      } catch {
        // Silently fail
      }
    }
    loadPending();
    // Refresh toutes les 60s
    const interval = setInterval(loadPending, 60_000);
    return () => clearInterval(interval);
  }, []);

  const nav: NavItem[] = [
    { label: "Dashboard", href: "/admin/crm", icon: BarChart3 },
    {
      label: "Commandes",
      href: "/admin/uploads",
      icon: Package,
      badge: pendingCount,
    },
    { label: "Leads CRM", href: "/admin/crm?tab=leads", icon: Users },
    { label: "Metriques", href: "/admin/metrics", icon: TrendingUp },
  ];

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-zinc-800 bg-zinc-950">
      {/* Logo */}
      <div className="flex h-14 items-center gap-2 border-b border-zinc-800 px-5">
        <span className="text-lg font-bold text-white">
          Visite<span className="text-blue-400">3D</span>
        </span>
        <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
          Admin
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {nav.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/admin/crm" && pathname === "/admin/crm" && !item.href.includes("?"));
          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-500/10 text-blue-400"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </a>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-zinc-800 px-3 py-4 space-y-1">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-500 transition hover:bg-zinc-900 hover:text-zinc-300"
        >
          <ExternalLink className="h-4 w-4" />
          Voir le site
        </a>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-500 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut className="h-4 w-4" />
          Deconnexion
        </button>
      </div>
    </aside>
  );
}
