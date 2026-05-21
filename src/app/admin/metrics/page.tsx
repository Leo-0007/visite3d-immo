"use client";

import { useEffect, useState } from "react";
import {
  TrendingUp,
  DollarSign,
  Package,
  Users,
  Target,
  Clock,
  BarChart3,
  Loader2,
} from "lucide-react";
import { adminFetch } from "../crm/components/use-admin-fetch";

interface Upload {
  status: string;
  pack: string;
  created_at: string;
  delivered_at: string | null;
}

interface Lead {
  status: string;
  score: number;
  segment: string | null;
  canton: string | null;
  source: string | null;
  created_at: string;
}

interface Stats {
  // Uploads
  totalUploads: number;
  deliveredUploads: number;
  pendingUploads: number;
  avgDeliveryHours: number;
  // Revenue
  totalRevenue: number;
  revenueByPack: Record<string, number>;
  // Leads
  totalLeads: number;
  hotLeads: number;
  wonLeads: number;
  conversionRate: number;
  // Segments
  leadsBySegment: Record<string, number>;
  leadsByCanton: Record<string, number>;
  leadsBySource: Record<string, number>;
  // Funnel
  funnel: Record<string, number>;
}

const PACK_PRICES: Record<string, number> = {
  solo: 49,
  "pack-immo": 89,
  "pack-agence": 399,
};

export default function MetricsPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [uploadsRes, leadsRes] = await Promise.all([
          adminFetch<{ uploads: Upload[] }>("/api/uploads?limit=1000"),
          adminFetch<{ leads: Lead[] }>("/api/crm/leads?limit=1000"),
        ]);

        const uploads = uploadsRes.uploads ?? [];
        const leads = leadsRes.leads ?? [];

        // Revenue
        const totalRevenue = uploads
          .filter((u) => u.status !== "refund")
          .reduce((sum, u) => sum + (PACK_PRICES[u.pack] ?? 0), 0);

        const revenueByPack: Record<string, number> = {};
        uploads
          .filter((u) => u.status !== "refund")
          .forEach((u) => {
            revenueByPack[u.pack] =
              (revenueByPack[u.pack] ?? 0) + (PACK_PRICES[u.pack] ?? 0);
          });

        // Avg delivery time
        const delivered = uploads.filter(
          (u) => u.status === "delivered" && u.delivered_at
        );
        const avgDeliveryHours =
          delivered.length > 0
            ? delivered.reduce((sum, u) => {
                const diff =
                  new Date(u.delivered_at!).getTime() -
                  new Date(u.created_at).getTime();
                return sum + diff / (1000 * 60 * 60);
              }, 0) / delivered.length
            : 0;

        // Leads funnel
        const funnel: Record<string, number> = {};
        leads.forEach((l) => {
          funnel[l.status] = (funnel[l.status] ?? 0) + 1;
        });

        // Segments
        const leadsBySegment: Record<string, number> = {};
        leads.forEach((l) => {
          const seg = l.segment ?? "inconnu";
          leadsBySegment[seg] = (leadsBySegment[seg] ?? 0) + 1;
        });

        // Cantons
        const leadsByCanton: Record<string, number> = {};
        leads.forEach((l) => {
          const c = l.canton ?? "inconnu";
          leadsByCanton[c] = (leadsByCanton[c] ?? 0) + 1;
        });

        // Sources
        const leadsBySource: Record<string, number> = {};
        leads.forEach((l) => {
          const s = l.source ?? "inconnu";
          leadsBySource[s] = (leadsBySource[s] ?? 0) + 1;
        });

        const wonLeads = leads.filter((l) => l.status === "won").length;
        const totalNonNew = leads.filter((l) => l.status !== "new").length;
        const conversionRate =
          totalNonNew > 0 ? (wonLeads / totalNonNew) * 100 : 0;

        setStats({
          totalUploads: uploads.length,
          deliveredUploads: delivered.length,
          pendingUploads: uploads.filter(
            (u) => u.status === "received" || u.status === "processing"
          ).length,
          avgDeliveryHours: Math.round(avgDeliveryHours * 10) / 10,
          totalRevenue,
          revenueByPack,
          totalLeads: leads.length,
          hotLeads: leads.filter((l) => l.score >= 75).length,
          wonLeads,
          conversionRate: Math.round(conversionRate * 10) / 10,
          leadsBySegment,
          leadsByCanton,
          leadsBySource,
          funnel,
        });
      } catch {
        // Silent
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="p-8 text-center text-zinc-500">
        Impossible de charger les metriques
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Metriques</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Vue d&apos;ensemble de l&apos;activite
        </p>
      </div>

      {/* KPI Cards */}
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiCard
          label="Revenue total"
          value={`${stats.totalRevenue} CHF`}
          icon={DollarSign}
          color="text-emerald-400"
          bg="bg-emerald-500/10"
        />
        <KpiCard
          label="Commandes"
          value={stats.totalUploads}
          sub={`${stats.deliveredUploads} livrees`}
          icon={Package}
          color="text-blue-400"
          bg="bg-blue-500/10"
        />
        <KpiCard
          label="Leads total"
          value={stats.totalLeads}
          sub={`${stats.hotLeads} chauds`}
          icon={Users}
          color="text-violet-400"
          bg="bg-violet-500/10"
        />
        <KpiCard
          label="Taux conversion"
          value={`${stats.conversionRate}%`}
          sub={`${stats.wonLeads} gagnes`}
          icon={Target}
          color="text-amber-400"
          bg="bg-amber-500/10"
        />
      </div>

      {/* Secondary metrics */}
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
        <KpiCard
          label="Delai moyen livraison"
          value={`${stats.avgDeliveryHours}h`}
          icon={Clock}
          color="text-blue-400"
          bg="bg-blue-500/10"
        />
        <KpiCard
          label="En attente"
          value={stats.pendingUploads}
          icon={Package}
          color={stats.pendingUploads > 0 ? "text-amber-400" : "text-zinc-400"}
          bg={stats.pendingUploads > 0 ? "bg-amber-500/10" : "bg-zinc-800"}
        />
        <KpiCard
          label="Leads chauds"
          value={stats.hotLeads}
          icon={TrendingUp}
          color="text-red-400"
          bg="bg-red-500/10"
        />
      </div>

      {/* Distribution grids */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Revenue by pack */}
        <DistributionCard
          title="Revenue par pack"
          icon={DollarSign}
          data={Object.entries(stats.revenueByPack).map(([k, v]) => ({
            label: k,
            value: `${v} CHF`,
            count: v,
          }))}
          total={stats.totalRevenue}
        />

        {/* Funnel */}
        <DistributionCard
          title="Pipeline leads"
          icon={BarChart3}
          data={Object.entries(stats.funnel)
            .sort(
              (a, b) =>
                ["new", "contacted", "qualified", "demo", "won", "lost", "unsubscribed"].indexOf(
                  a[0]
                ) -
                ["new", "contacted", "qualified", "demo", "won", "lost", "unsubscribed"].indexOf(
                  b[0]
                )
            )
            .map(([k, v]) => ({
              label: k,
              value: v.toString(),
              count: v,
            }))}
          total={stats.totalLeads}
        />

        {/* By segment */}
        <DistributionCard
          title="Leads par segment"
          icon={Users}
          data={Object.entries(stats.leadsBySegment).map(([k, v]) => ({
            label: k,
            value: v.toString(),
            count: v,
          }))}
          total={stats.totalLeads}
        />

        {/* By canton */}
        <DistributionCard
          title="Leads par canton"
          icon={Target}
          data={Object.entries(stats.leadsByCanton)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([k, v]) => ({
              label: k,
              value: v.toString(),
              count: v,
            }))}
          total={stats.totalLeads}
        />
      </div>
    </div>
  );
}

// --- Sub-components ---

function KpiCard({
  label,
  value,
  sub,
  icon: Icon,
  color,
  bg,
}: {
  label: string;
  value: string | number;
  sub?: string;
  icon: React.ElementType;
  color: string;
  bg: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-3 flex items-center gap-2">
        <div className={`rounded-lg p-2 ${bg}`}>
          <Icon className={`h-4 w-4 ${color}`} />
        </div>
        <span className="text-xs text-zinc-500">{label}</span>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      {sub && <p className="mt-0.5 text-xs text-zinc-500">{sub}</p>}
    </div>
  );
}

function DistributionCard({
  title,
  icon: Icon,
  data,
  total,
}: {
  title: string;
  icon: React.ElementType;
  data: Array<{ label: string; value: string; count: number }>;
  total: number;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-4 w-4 text-zinc-400" />
        <h3 className="text-sm font-medium text-zinc-300">{title}</h3>
      </div>
      <div className="space-y-3">
        {data.map((d) => {
          const pct = total > 0 ? (d.count / total) * 100 : 0;
          return (
            <div key={d.label}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-zinc-300">{d.label}</span>
                <span className="text-zinc-500">{d.value}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${Math.max(2, pct)}%` }}
                />
              </div>
            </div>
          );
        })}
        {data.length === 0 && (
          <p className="text-sm text-zinc-600">Aucune donnee</p>
        )}
      </div>
    </div>
  );
}
