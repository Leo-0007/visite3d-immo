import { Suspense } from "react";
import { CrmDashboard } from "./components/crm-dashboard";

export default function CrmPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
        </div>
      }
    >
      <CrmDashboard />
    </Suspense>
  );
}
