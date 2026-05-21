import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { DemoViewer } from "@/components/demo-viewer";
import { FadeIn } from "@/components/animations";

const DEMO_3D_URL =
  "https://cloud.splatlabs.ai/viewer/f95e1016-b5db-40ae-81cc-c6354b1c470c?view=splat";

export function DemoSection() {
  return (
    <SectionWrapper id="demo" className="pb-24 sm:pb-32 pt-0 md:pt-0">
      <SectionHeader
        badge="Démonstration"
        title="Explorez cet intérieur"
        description="Cliquez et déplacez votre souris pour naviguer — exactement comme vos acheteurs le feront."
      />

      <FadeIn delay={0.15}>
        <div className="rounded-2xl border border-[var(--v3d-warm-border)] bg-white shadow-lg overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)]">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
            </div>
            <div className="flex-1 mx-8">
              <div className="h-7 max-w-xs mx-auto rounded-lg bg-white flex items-center justify-center text-[11px] text-[var(--v3d-text-muted)] font-mono border border-[var(--v3d-warm-border)]">
                visite3dimmo.ch/demo/appartement-geneve
              </div>
            </div>
          </div>

          {/* 3D Viewer */}
          <DemoViewer src={DEMO_3D_URL} />
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="mt-8 text-center text-sm text-[var(--v3d-text-muted)]">
          Cette visite a été créée à partir d&apos;une simple vidéo smartphone
        </p>
      </FadeIn>
    </SectionWrapper>
  );
}
