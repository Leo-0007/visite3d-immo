"use client";

import { useEffect, useState, useCallback } from "react";
import {
  RefreshCw,
  Phone,
  Mail,
  Building2,
  MapPin,
  Loader2,
  ChevronRight,
} from "lucide-react";
import { adminFetch } from "./use-admin-fetch";

interface Lead {
  id: string;
  email: string;
  company_name: string | null;
  contact_name: string | null;
  phone: string | null;
  city: string | null;
  canton: string | null;
  segment: string | null;
  status: string;
  score: number;
  source: string | null;
  next_action: string | null;
  next_action_at: string | null;
  created_at: string;
  last_contact_at: string | null;
}

const COLUMNS: { id: string; label: string; color: string }[] = [
  { id: "new", label: "Nouveau", color: "border-zinc-600" },
  { id: "contacted", label: "Contacte", color: "border-blue-500" },
  { id: "qualified", label: "Qualifie", color: "border-amber-500" },
  { id: "demo", label: "Demo", color: "border-violet-500" },
  { id: "won", label: "Gagne", color: "border-emerald-500" },
  { id: "lost", label: "Perdu", color: "border-red-500" },
];

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 75
      ? "bg-emerald-500/10 text-emerald-400"
      : score >= 50
        ? "bg-amber-500/10 text-amber-400"
        : score >= 25
          ? "bg-blue-500/10 text-blue-400"
          : "bg-zinc-800 text-zinc-400";

  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${color}`}>
      {score}
    </span>
  );
}

export function LeadsKanban() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [moving, setMoving] = useState<string | null>(null);

  const loadLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await adminFetch<{ leads: Lead[] }>(
        "/api/crm/leads?limit=200"
      );
      setLeads(res.leads ?? []);
    } catch {
      // Error
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLeads();
  }, [loadLeads]);

  async function moveLead(leadId: string, newStatus: string) {
    setMoving(leadId);
    try {
      await adminFetch(`/api/crm/leads/${leadId}`, {
        method: "PATCH",
        body: JSON.stringify({ status: newStatus }),
      });
      setLeads((prev) =>
        prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
      );
    } catch {
      // Error
    } finally {
      setMoving(null);
    }
  }

  function getNextStatus(current: string): string | null {
    const order = ["new", "contacted", "qualified", "demo", "won"];
    const idx = order.indexOf(current);
    return idx >= 0 && idx < order.length - 1 ? order[idx + 1] : null;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-6 w-6 animate-spin text-zinc-400" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <button
          onClick={loadLeads}
          className="rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-zinc-400 transition hover:text-white"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
        <span className="text-sm text-zinc-500">
          {leads.length} lead{leads.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {COLUMNS.map((col) => {
          const colLeads = leads.filter((l) => l.status === col.id);
          return (
            <div key={col.id} className="min-h-[300px]">
              <div
                className={`mb-3 flex items-center justify-between border-t-2 pt-2 ${col.color}`}
              >
                <span className="text-sm font-medium text-zinc-300">
                  {col.label}
                </span>
                <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-500">
                  {colLeads.length}
                </span>
              </div>

              <div className="space-y-2">
                {colLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="rounded-lg border border-zinc-800 bg-zinc-900 p-3 transition hover:border-zinc-700"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <div className="min-w-0 flex-1">
                        {lead.company_name && (
                          <div className="flex items-center gap-1 text-xs text-zinc-400">
                            <Building2 className="h-3 w-3 shrink-0" />
                            <span className="truncate">{lead.company_name}</span>
                          </div>
                        )}
                        <p className="truncate text-sm font-medium text-white">
                          {lead.contact_name ?? lead.email}
                        </p>
                      </div>
                      <ScoreBadge score={lead.score} />
                    </div>

                    {(lead.city || lead.canton) && (
                      <div className="mb-2 flex items-center gap-1 text-xs text-zinc-500">
                        <MapPin className="h-3 w-3" />
                        {[lead.city, lead.canton].filter(Boolean).join(", ")}
                      </div>
                    )}

                    {lead.next_action && (
                      <p className="mb-2 text-xs text-amber-400/80">
                        {lead.next_action}
                      </p>
                    )}

                    <div className="flex items-center gap-1">
                      {lead.phone && (
                        <a
                          href={`tel:${lead.phone}`}
                          className="rounded p-1 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
                          title="Appeler"
                        >
                          <Phone className="h-3 w-3" />
                        </a>
                      )}
                      <a
                        href={`mailto:${lead.email}`}
                        className="rounded p-1 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
                        title="Envoyer un email"
                      >
                        <Mail className="h-3 w-3" />
                      </a>

                      {moving === lead.id ? (
                        <Loader2 className="ml-auto h-3 w-3 animate-spin text-zinc-400" />
                      ) : (
                        getNextStatus(lead.status) && (
                          <button
                            onClick={() =>
                              moveLead(
                                lead.id,
                                getNextStatus(lead.status)!
                              )
                            }
                            className="ml-auto rounded p-1 text-zinc-500 transition hover:bg-blue-500/10 hover:text-blue-400"
                            title={`Passer en ${getNextStatus(lead.status)}`}
                          >
                            <ChevronRight className="h-3 w-3" />
                          </button>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
