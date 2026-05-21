"use client";

import { useState } from "react";
import { Upload, FileText, Check, AlertCircle, Loader2 } from "lucide-react";
import { adminFetch } from "./use-admin-fetch";

interface ImportResult {
  total: number;
  created: number;
  duplicates: number;
  errors: number;
}

export function CsvImport() {
  const [csvContent, setCsvContent] = useState("");
  const [importing, setImporting] = useState(false);
  const [result, setResult] = useState<ImportResult | null>(null);
  const [error, setError] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      setCsvContent(ev.target?.result as string);
      setResult(null);
      setError("");
    };
    reader.readAsText(file);
  }

  async function handleImport() {
    if (!csvContent.trim()) {
      setError("Aucun contenu CSV");
      return;
    }

    setImporting(true);
    setError("");
    setResult(null);

    try {
      const res = await adminFetch<ImportResult>("/api/crm/leads/import", {
        method: "POST",
        body: JSON.stringify({ csv: csvContent }),
      });
      setResult(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur d'import");
    } finally {
      setImporting(false);
    }
  }

  const previewLines = csvContent.trim().split("\n").slice(0, 6);

  return (
    <div className="max-w-2xl">
      <h2 className="mb-4 text-lg font-semibold text-white">
        Import CSV Swiss-Leads
      </h2>
      <p className="mb-6 text-sm text-zinc-400">
        Format attendu : <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs">email,company,contact,phone,city,canton</code>
      </p>

      {/* Upload zone */}
      <label className="mb-6 flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 border-dashed border-zinc-700 bg-zinc-900/50 p-8 transition hover:border-zinc-500">
        <Upload className="h-8 w-8 text-zinc-500" />
        <span className="text-sm text-zinc-400">
          Glisser un fichier CSV ou cliquer pour parcourir
        </span>
        <input
          type="file"
          accept=".csv,text/csv"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {/* Preview */}
      {csvContent && (
        <div className="mb-6 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
          <div className="mb-2 flex items-center gap-2">
            <FileText className="h-4 w-4 text-zinc-400" />
            <span className="text-sm font-medium text-zinc-300">
              Apercu ({csvContent.trim().split("\n").length - 1} lignes)
            </span>
          </div>
          <div className="overflow-x-auto">
            <pre className="text-xs text-zinc-400">
              {previewLines.join("\n")}
              {csvContent.trim().split("\n").length > 6 && "\n..."}
            </pre>
          </div>
        </div>
      )}

      {/* Textarea fallback */}
      <details className="mb-6">
        <summary className="cursor-pointer text-sm text-zinc-500 hover:text-zinc-300">
          Ou coller le CSV directement
        </summary>
        <textarea
          value={csvContent}
          onChange={(e) => {
            setCsvContent(e.target.value);
            setResult(null);
            setError("");
          }}
          rows={8}
          className="mt-3 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 font-mono text-sm text-white placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none"
          placeholder="email,company,contact,phone,city,canton&#10;info@agence.ch,Agence Immo,Jean Dupont,+41791234567,Lausanne,VD"
        />
      </details>

      {/* Error */}
      {error && (
        <div className="mb-4 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mb-4 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Check className="h-4 w-4 text-emerald-400" />
            <span className="font-medium text-emerald-400">
              Import termine
            </span>
          </div>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-zinc-400">Total</span>
              <p className="text-lg font-bold text-white">{result.total}</p>
            </div>
            <div>
              <span className="text-zinc-400">Crees</span>
              <p className="text-lg font-bold text-emerald-400">
                {result.created}
              </p>
            </div>
            <div>
              <span className="text-zinc-400">Doublons</span>
              <p className="text-lg font-bold text-amber-400">
                {result.duplicates}
              </p>
            </div>
            <div>
              <span className="text-zinc-400">Erreurs</span>
              <p className="text-lg font-bold text-red-400">{result.errors}</p>
            </div>
          </div>
        </div>
      )}

      {/* Import button */}
      <button
        onClick={handleImport}
        disabled={!csvContent.trim() || importing}
        className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {importing ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Import en cours...
          </>
        ) : (
          <>
            <Upload className="h-4 w-4" />
            Importer les leads
          </>
        )}
      </button>
    </div>
  );
}
