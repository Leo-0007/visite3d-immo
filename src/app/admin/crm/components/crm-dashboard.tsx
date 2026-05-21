"use client";

import { useState } from "react";
import { MetricsHeader } from "./metrics-header";
import { UploadsTable } from "./uploads-table";
import { LeadsKanban } from "./leads-kanban";
import { CsvImport } from "./csv-import";

type Tab = "uploads" | "leads" | "import";

export function CrmDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("uploads");

  const tabs: { id: Tab; label: string }[] = [
    { id: "uploads", label: "Uploads" },
    { id: "leads", label: "Leads" },
    { id: "import", label: "Import CSV" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <MetricsHeader />

      <div className="mt-8 border-b border-zinc-800">
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-t-lg px-5 py-2.5 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 bg-zinc-900 text-white"
                  : "text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        {activeTab === "uploads" && <UploadsTable />}
        {activeTab === "leads" && <LeadsKanban />}
        {activeTab === "import" && <CsvImport />}
      </div>
    </div>
  );
}
