"use client";

import { useEffect, useState } from "react";
import {
  Upload,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  Target,
} from "lucide-react";
import { adminFetch } from "./use-admin-fetch";

interface Metrics {
  totalUploads: number;
  pendingUploads: number;
  totalLeads: number;
  hotLeads: number;
  wonLeads: number;
  revenue: number;
}

export function MetricsHeader() {
  const [metrics, setMetrics] = useState<Metrics>({
    totalUploads: 0,
    pendingUploads: 0,
    totalLeads: 0,
    hotLeads: 0,
    wonLeads: 0,
    revenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [uploadsRes, leadsRes] = await Promise.all([
          adminFetch<{ uploads: Array<{ status: string; pack: string }> }>(
            "/api/uploads?limit=500"
          ),
          adminFetch<{ leads: Array<{ status: string; score: number }> }>(
            "/api/crm/leads?limit=500"
          ),
        ]);

        const uploads = uploadsRes.uploads ?? [];
        const leads = leadsRes.leads ?? [];

        // Revenue estimation
        const packPrices: Record<string, number> = {
          solo: 49,
          "pack-immo": 89,
          "pack-agence": 399,
        };
        const revenue = uploads
          .filter((u) => u.status !== "refund")
          .reduce((sum, u) => sum + (packPrices[u.pack] ?? 0), 0);

        setMetrics({
          totalUploads: uploads.length,
          pendingUploads: uploads.filter(
            (u) => u.status === "received" || u.status === "processing"
          ).length,
          totalLeads: leads.length,
          hotLeads: leads.filter((l) => l.score >= 75).length,
          wonLeads: leads.filter((l) => l.status === "won").length,
          revenue,
        });
      } catch {
        // Silently fail on metrics load
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const cards = [
    {
      label: "Uploads",
      value: metrics.totalUploads,
      icon: Upload,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      label: "En attente",
      value: metrics.pendingUploads,
      icon: Clock,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
    },
    {
      label: "Leads",
      value: metrics.totalLeads,
      icon: Users,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: "Leads chauds",
      value: metrics.hotLeads,
      icon: Target,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
    },
    {
      label: "Gagnes",
      value: metrics.wonLeads,
      icon: TrendingUp,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: "Revenue",
      value: `${metrics.revenue} CHF`,
      icon: DollarSign,
      color: "text-violet-400",
      bgColor: "bg-violet-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
        >
          <div className="flex items-center gap-2">
            <div className={`rounded-lg p-1.5 ${card.bgColor}`}>
              <card.icon className={`h-4 w-4 ${card.color}`} />
            </div>
            <span className="text-xs text-zinc-500">{card.label}</span>
          </div>
          <div className="mt-2 text-2xl font-bold text-white">
            {loading ? (
              <div className="h-8 w-16 animate-pulse rounded bg-zinc-800" />
            ) : (
              card.value
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
