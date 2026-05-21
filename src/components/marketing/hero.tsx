import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * HeroSection — NO motion library.
 * CSS animations only for reliable SSR rendering.
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-0 sm:pt-36 sm:pb-0">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left — Copy */}
          <div className="lg:col-span-7 lg:pb-20">
            {/* Badge */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium tracking-[0.08em] uppercase text-[var(--v3d-text-muted)]">
                  <span aria-label="Suisse">&#127464;&#127469;</span>{" "}
                  Service suisse
                </span>
                <span className="h-px flex-1 max-w-[60px] bg-[var(--v3d-warm-border)]" />
              </div>
            </div>

            {/* H1 — strong editorial hierarchy */}
            <div className="animate-fade-in-up" style={{ animationDelay: "80ms" }}>
              <h1 className="mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--v3d-text)]">
                Vos acheteurs visitent
                <br />
                <span className="text-[var(--v3d-blue)]">avant de se d{"é"}placer</span>
              </h1>
            </div>

            {/* Subtitle — concise, value-first */}
            <div className="animate-fade-in-up" style={{ animationDelay: "160ms" }}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--v3d-text-secondary)] sm:text-lg">
                Filmez avec votre smartphone. Recevez une visite 3D
                navigable en 24h.{" "}
                <span className="font-semibold text-[var(--v3d-text)]">
                  D{"è"}s 49 CHF, sans abonnement.
                </span>
              </p>
            </div>

            {/* CTAs — aligned left, not centered */}
            <div className="animate-fade-in-up" style={{ animationDelay: "240ms" }}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#tarifs"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-[var(--v3d-blue)] hover:bg-[#164060] text-white text-sm font-semibold px-8 py-6 rounded-lg shadow-sm transition-all"
                  )}
                >
                  Voir les offres
                </a>
                <a
                  href="#demo"
                  className="group flex items-center gap-2 text-sm font-medium text-[var(--v3d-text-secondary)] transition-colors hover:text-[var(--v3d-blue)]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--v3d-warm-border)] bg-white transition-all group-hover:border-[var(--v3d-blue)]/30">
                    <svg
                      className="h-3 w-3 translate-x-[1px] text-[var(--v3d-blue)]"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M5.5 3.5L12 8l-6.5 4.5V3.5z" />
                    </svg>
                  </span>
                  Explorer la d{"é"}mo
                </a>
              </div>
            </div>

            {/* Trust pills — minimal, inline */}
            <div className="animate-fade-in-up" style={{ animationDelay: "320ms" }}>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[var(--v3d-text-muted)]">
                {["Sans engagement", "Livraison 24h", "Paiement sécurisé"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-emerald-500" />
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right — Key metrics, stacked vertically */}
          <div className="hidden lg:col-span-5 lg:flex lg:flex-col lg:items-end lg:pb-20">
            <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="flex flex-col gap-6">
                {[
                  { value: "24h", label: "Délai de livraison" },
                  { value: "49 CHF", label: "Par bien immobilier" },
                  { value: "5 min", label: "Temps de capture" },
                ].map((stat) => (
                  <div key={stat.label} className="text-right">
                    <p className="text-[2.5rem] font-bold tracking-[-0.04em] leading-none text-[var(--v3d-text)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--v3d-text-muted)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile metrics */}
        <div className="mt-12 lg:hidden">
          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <div className="grid grid-cols-3 gap-4 rounded-xl border border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)] p-5">
              {[
                { value: "24h", label: "Livraison" },
                { value: "49 CHF", label: "Par bien" },
                { value: "5 min", label: "Capture" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl font-bold tracking-tight text-[var(--v3d-text)]">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.1em] text-[var(--v3d-text-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom divider */}
      <div className="mt-16 sm:mt-20">
        <div className="gradient-divider" />
      </div>
    </section>
  );
}
