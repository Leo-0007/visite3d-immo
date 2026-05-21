"use client";

import { useEffect, useState, useCallback } from "react";
import { RefreshCw, ExternalLink, Check, X, Loader2 } from "lucide-react";
import { adminFetch } from "./use-admin-fetch";

interface Upload {
  id: string;
  email: string;
  address: string;
  pack: string;
  status: string;
  video_url: string | null;
  delivery_url: string | null;
  created_at: string;
  delivered_at: string | null;
  notes: string | null;
}

const STATUS_COLORS: Record<string, string> = {
  received: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  validating: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  processing: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  delivered: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  rejected: "bg-red-500/10 text-red-400 border-red-500/20",
  refund: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
};

const STATUSES = [
  "received",
  "validating",
  "processing",
  "delivered",
  "rejected",
  "refund",
];

export function UploadsTable() {
  const [uploads, setUploads] = useState<Upload[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [updating, setUpdating] = useState<string | null>(null);

  const loadUploads = useCallback(async () => {
    setLoading(true);
    try {
      const url = filterStatus
        ? `/api/uploads?status=${filterStatus}`
        : "/api/uploads";
      const res = await adminFetch<{ uploads: Upload[] }>(url);
      setUploads(res.uploads ?? []);
    } catch {
      // Error handled silently
    } finally {
      setLoading(false);
    }
  }, [filterStatus]);

  useEffect(() => {
    loadUploads();
  }, [loadUploads]);

  async function updateStatus(id: string, status: string) {
    setUpdating(id);
    try {
      let body: Record<string, string> = { status };

      if (status === "delivered") {
        const url = prompt("URL de livraison :");
        if (!url) {
          setUpdating(null);
          return;
        }
        body = { status, delivery_url: url };
      }

      if (status === "rejected") {
        const reason = prompt("Raison du rejet :");
        if (!reason) {
          setUpdating(null);
          return;
        }
        body = { status, rejection_reason: reason };
      }

      await adminFetch(`/api/uploads/${id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
      });
      await loadUploads();
    } catch {
      // Error
    } finally {
      setUpdating(null);
    }
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("fr-CH", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div>
      {/* Filters */}
      <div className="mb-4 flex items-center gap-3">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white"
        >
          <option value="">Tous les statuts</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button
          onClick={loadUploads}
          className="rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-zinc-400 transition hover:text-white"
        >
          <RefreshCw className="h-4 w-4" />
        </button>

        <span className="text-sm text-zinc-500">
          {uploads.length} upload{uploads.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-zinc-800">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-800 bg-zinc-900/50">
            <tr>
              <th className="px-4 py-3 font-medium text-zinc-400">Date</th>
              <th className="px-4 py-3 font-medium text-zinc-400">Email</th>
              <th className="px-4 py-3 font-medium text-zinc-400">Adresse</th>
              <th className="px-4 py-3 font-medium text-zinc-400">Pack</th>
              <th className="px-4 py-3 font-medium text-zinc-400">Statut</th>
              <th className="px-4 py-3 font-medium text-zinc-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {loading ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-zinc-500">
                  <Loader2 className="mx-auto h-5 w-5 animate-spin" />
                </td>
              </tr>
            ) : uploads.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-zinc-500">
                  Aucun upload
                </td>
              </tr>
            ) : (
              uploads.map((u) => (
                <tr key={u.id} className="transition hover:bg-zinc-900/30">
                  <td className="px-4 py-3 text-zinc-300">
                    {formatDate(u.created_at)}
                  </td>
                  <td className="px-4 py-3 text-white">{u.email}</td>
                  <td className="max-w-[200px] truncate px-4 py-3 text-zinc-300">
                    {u.address}
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded bg-zinc-800 px-2 py-0.5 text-xs font-medium text-zinc-300">
                      {u.pack}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${STATUS_COLORS[u.status] ?? ""}`}
                    >
                      {u.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      {updating === u.id ? (
                        <Loader2 className="h-4 w-4 animate-spin text-zinc-400" />
                      ) : (
                        <>
                          {u.status === "received" && (
                            <button
                              onClick={() => updateStatus(u.id, "processing")}
                              className="rounded p-1 text-blue-400 transition hover:bg-blue-500/10"
                              title="Passer en processing"
                            >
                              <RefreshCw className="h-3.5 w-3.5" />
                            </button>
                          )}
                          {u.status === "processing" && (
                            <>
                              <button
                                onClick={() => updateStatus(u.id, "delivered")}
                                className="rounded p-1 text-emerald-400 transition hover:bg-emerald-500/10"
                                title="Marquer livré"
                              >
                                <Check className="h-3.5 w-3.5" />
                              </button>
                              <button
                                onClick={() => updateStatus(u.id, "rejected")}
                                className="rounded p-1 text-red-400 transition hover:bg-red-500/10"
                                title="Rejeter"
                              >
                                <X className="h-3.5 w-3.5" />
                              </button>
                            </>
                          )}
                          {u.delivery_url && (
                            <a
                              href={u.delivery_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded p-1 text-zinc-400 transition hover:text-white"
                              title="Voir la visite"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
