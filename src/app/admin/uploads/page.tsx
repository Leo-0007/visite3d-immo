"use client";

import { useEffect, useState, useCallback } from "react";
import {
  RefreshCw,
  ExternalLink,
  Check,
  X,
  Loader2,
  Package,
  AlertTriangle,
  Mail,
  Clock,
  Play,
} from "lucide-react";
import { adminFetch } from "../crm/components/use-admin-fetch";

// --- Types ---

interface Upload {
  id: string;
  email: string;
  address: string;
  pack: string;
  status: string;
  video_url: string | null;
  delivery_url: string | null;
  rejection_reason: string | null;
  created_at: string;
  delivered_at: string | null;
  notes: string | null;
}

// --- Constants ---

const STATUS_CONFIG: Record<
  string,
  { label: string; color: string; dot: string }
> = {
  received: {
    label: "Recu",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    dot: "bg-blue-400",
  },
  validating: {
    label: "Validation",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    dot: "bg-amber-400",
  },
  processing: {
    label: "En traitement",
    color: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    dot: "bg-violet-400",
  },
  delivered: {
    label: "Livre",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-400",
  },
  rejected: {
    label: "Rejete",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
    dot: "bg-red-400",
  },
  refund: {
    label: "Rembourse",
    color: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
    dot: "bg-zinc-400",
  },
};

const REJECTION_REASONS = [
  "Video filmee en mode portrait (vertical)",
  "Duree insuffisante (moins de 3 minutes)",
  "Flou excessif — filmer plus lentement",
  "Eclairage insuffisant",
  "Personnes ou animaux visibles",
  "Couverture incomplete du bien",
  "Qualite video insuffisante (resolution trop basse)",
  "Autre (preciser dans l'email)",
];

const PACK_LABELS: Record<string, string> = {
  solo: "Solo 49",
  "pack-immo": "Pack Immo 89",
  "pack-agence": "Pack Agence 399",
  regie: "Regie",
};

const STATUSES = Object.keys(STATUS_CONFIG);

// --- Helpers ---

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-CH", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function hoursAgo(iso: string) {
  return (Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60);
}

// --- Modal Components ---

function DeliveryModal({
  onConfirm,
  onCancel,
}: {
  onConfirm: (url: string) => void;
  onCancel: () => void;
}) {
  const [url, setUrl] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Livrer la visite 3D
        </h3>
        <label className="mb-2 block text-sm text-zinc-400">
          URL de la visite 3D
        </label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://viewer.visite3dimmo.ch/..."
          className="mb-4 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none"
          autoFocus
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            Annuler
          </button>
          <button
            onClick={() => url.trim() && onConfirm(url.trim())}
            disabled={!url.trim()}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500 disabled:opacity-50"
          >
            Confirmer la livraison
          </button>
        </div>
      </div>
    </div>
  );
}

function RejectModal({
  onConfirm,
  onCancel,
}: {
  onConfirm: (reason: string) => void;
  onCancel: () => void;
}) {
  const [selected, setSelected] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Raison du rejet
        </h3>
        <p className="mb-4 text-sm text-zinc-400">
          Le client recevra un email avec la raison et pourra renvoyer sa video
          gratuitement.
        </p>
        <div className="mb-4 space-y-2">
          {REJECTION_REASONS.map((reason) => (
            <label
              key={reason}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                selected === reason
                  ? "border-red-500/50 bg-red-500/10 text-red-300"
                  : "border-zinc-800 text-zinc-300 hover:border-zinc-700"
              }`}
            >
              <input
                type="radio"
                name="rejection"
                value={reason}
                checked={selected === reason}
                onChange={() => setSelected(reason)}
                className="sr-only"
              />
              <div
                className={`h-3 w-3 shrink-0 rounded-full border-2 ${
                  selected === reason
                    ? "border-red-400 bg-red-400"
                    : "border-zinc-600"
                }`}
              />
              {reason}
            </label>
          ))}
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            Annuler
          </button>
          <button
            onClick={() => selected && onConfirm(selected)}
            disabled={!selected}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500 disabled:opacity-50"
          >
            Confirmer le rejet
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Main Page ---

export default function UploadsPage() {
  const [uploads, setUploads] = useState<Upload[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("");
  const [updating, setUpdating] = useState<string | null>(null);
  const [deliveryModal, setDeliveryModal] = useState<string | null>(null);
  const [rejectModal, setRejectModal] = useState<string | null>(null);

  const loadUploads = useCallback(async () => {
    setLoading(true);
    try {
      const url = filterStatus
        ? `/api/uploads?status=${filterStatus}`
        : "/api/uploads";
      const res = await adminFetch<{ uploads: Upload[] }>(url);
      setUploads(res.uploads ?? []);
    } catch {
      // Silent
    } finally {
      setLoading(false);
    }
  }, [filterStatus]);

  useEffect(() => {
    loadUploads();
  }, [loadUploads]);

  // Counts
  const pendingCount = uploads.filter(
    (u) => u.status === "received" || u.status === "processing"
  ).length;
  const urgentCount = uploads.filter(
    (u) =>
      (u.status === "received" || u.status === "processing") &&
      hoursAgo(u.created_at) > 20
  ).length;

  // Actions
  async function handleProcess(id: string) {
    setUpdating(id);
    try {
      await adminFetch(`/api/uploads/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "processing" }),
      });
      await loadUploads();
    } catch {
      // Error
    } finally {
      setUpdating(null);
    }
  }

  async function handleDeliver(id: string, url: string) {
    setDeliveryModal(null);
    setUpdating(id);
    try {
      await adminFetch(`/api/uploads/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "delivered", delivery_url: url }),
      });
      await loadUploads();
    } catch {
      // Error
    } finally {
      setUpdating(null);
    }
  }

  async function handleReject(id: string, reason: string) {
    setRejectModal(null);
    setUpdating(id);
    try {
      await adminFetch(`/api/uploads/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "rejected", rejection_reason: reason }),
      });
      await loadUploads();
    } catch {
      // Error
    } finally {
      setUpdating(null);
    }
  }

  function contactClient(email: string, address: string) {
    const subject = encodeURIComponent(
      `Visite3D — Votre commande pour ${address}`
    );
    const body = encodeURIComponent(
      `Bonjour,\n\nConcernant votre commande de visite 3D pour le bien situe a ${address}.\n\n`
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Commandes</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Gestion des uploads et livraisons
          </p>
        </div>
        <div className="flex items-center gap-3">
          {pendingCount > 0 && (
            <div className="flex items-center gap-2 rounded-lg bg-amber-500/10 px-3 py-2 text-sm text-amber-400">
              <Package className="h-4 w-4" />
              {pendingCount} en attente
            </div>
          )}
          {urgentCount > 0 && (
            <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400">
              <AlertTriangle className="h-4 w-4" />
              {urgentCount} urgent{urgentCount > 1 ? "s" : ""} (&gt;20h)
            </div>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4 flex items-center gap-3">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
        >
          <option value="">Tous les statuts</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {STATUS_CONFIG[s].label}
            </option>
          ))}
        </select>

        <button
          onClick={loadUploads}
          className="rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-zinc-400 transition hover:text-white"
          title="Rafraichir"
        >
          <RefreshCw className="h-4 w-4" />
        </button>

        <span className="text-sm text-zinc-500">
          {uploads.length} commande{uploads.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-zinc-800">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-800 bg-zinc-900/60">
            <tr>
              <th className="px-4 py-3 font-medium text-zinc-400">Adresse</th>
              <th className="px-4 py-3 font-medium text-zinc-400">Email</th>
              <th className="px-4 py-3 font-medium text-zinc-400">Pack</th>
              <th className="px-4 py-3 font-medium text-zinc-400">Statut</th>
              <th className="px-4 py-3 font-medium text-zinc-400">Date</th>
              <th className="px-4 py-3 font-medium text-zinc-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {loading ? (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center">
                  <Loader2 className="mx-auto h-6 w-6 animate-spin text-zinc-500" />
                </td>
              </tr>
            ) : uploads.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-12 text-center text-zinc-500"
                >
                  Aucune commande
                </td>
              </tr>
            ) : (
              uploads.map((u) => {
                const hours = hoursAgo(u.created_at);
                const isUrgent =
                  (u.status === "received" || u.status === "processing") &&
                  hours > 20;

                return (
                  <tr
                    key={u.id}
                    className={`transition ${isUrgent ? "bg-red-500/5" : "hover:bg-zinc-900/30"}`}
                  >
                    <td className="max-w-[240px] px-4 py-3">
                      <div className="flex items-center gap-2">
                        {isUrgent && (
                          <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-red-400" />
                        )}
                        <span className="truncate font-medium text-white">
                          {u.address}
                        </span>
                      </div>
                      {isUrgent && (
                        <span className="mt-0.5 flex items-center gap-1 text-xs text-red-400">
                          <Clock className="h-3 w-3" />
                          {Math.round(hours)}h — livraison 24h depassee bientot
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-zinc-300">{u.email}</td>
                    <td className="px-4 py-3">
                      <span className="rounded bg-zinc-800 px-2 py-0.5 text-xs font-medium text-zinc-300">
                        {PACK_LABELS[u.pack] ?? u.pack}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${STATUS_CONFIG[u.status]?.color ?? ""}`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${STATUS_CONFIG[u.status]?.dot ?? ""}`}
                        />
                        {STATUS_CONFIG[u.status]?.label ?? u.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">
                      {formatDate(u.created_at)}
                    </td>
                    <td className="px-4 py-3">
                      {updating === u.id ? (
                        <Loader2 className="h-4 w-4 animate-spin text-zinc-400" />
                      ) : (
                        <div className="flex items-center gap-1">
                          {/* Received -> Processing */}
                          {u.status === "received" && (
                            <button
                              onClick={() => handleProcess(u.id)}
                              className="flex items-center gap-1 rounded-md bg-violet-500/10 px-2 py-1 text-xs font-medium text-violet-400 transition hover:bg-violet-500/20"
                              title="En traitement"
                            >
                              <Play className="h-3 w-3" />
                              Traiter
                            </button>
                          )}

                          {/* Processing -> Deliver or Reject */}
                          {u.status === "processing" && (
                            <>
                              <button
                                onClick={() => setDeliveryModal(u.id)}
                                className="flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400 transition hover:bg-emerald-500/20"
                                title="Livrer"
                              >
                                <Check className="h-3 w-3" />
                                Livrer
                              </button>
                              <button
                                onClick={() => setRejectModal(u.id)}
                                className="flex items-center gap-1 rounded-md bg-red-500/10 px-2 py-1 text-xs font-medium text-red-400 transition hover:bg-red-500/20"
                                title="Rejeter"
                              >
                                <X className="h-3 w-3" />
                                Rejeter
                              </button>
                            </>
                          )}

                          {/* Delivery link */}
                          {u.delivery_url && (
                            <a
                              href={u.delivery_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-md p-1 text-zinc-500 transition hover:text-white"
                              title="Voir la visite"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          )}

                          {/* Contact client */}
                          <button
                            onClick={() => contactClient(u.email, u.address)}
                            className="rounded-md p-1 text-zinc-500 transition hover:text-white"
                            title="Contacter le client"
                          >
                            <Mail className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {deliveryModal && (
        <DeliveryModal
          onConfirm={(url) => handleDeliver(deliveryModal, url)}
          onCancel={() => setDeliveryModal(null)}
        />
      )}
      {rejectModal && (
        <RejectModal
          onConfirm={(reason) => handleReject(rejectModal, reason)}
          onCancel={() => setRejectModal(null)}
        />
      )}
    </div>
  );
}
