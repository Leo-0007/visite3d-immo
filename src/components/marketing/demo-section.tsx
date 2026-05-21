import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DemoViewer } from "@/components/demo-viewer";
import { FadeIn } from "@/components/animations";

const DEMO_3D_URL =
  "https://cloud.splatlabs.ai/viewer/f95e1016-b5db-40ae-81cc-c6354b1c470c?view=splat";

export function DemoSection() {
  return (
    <SectionWrapper id="demo" className="section-warm">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — text */}
        <div className="lg:col-span-4">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--v3d-blue)]">
              D{"é"}monstration
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-[var(--v3d-text)]">
              Explorez cet{" "}
              <span className="text-[var(--v3d-text-muted)]">int{"é"}rieur</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--v3d-text-secondary)]">
              Cliquez et d{"é"}placez votre souris pour naviguer. Exactement comme
              vos acheteurs le feront.
            </p>
            <p className="mt-6 text-xs text-[var(--v3d-text-muted)]">
              Cr{"é"}{"é"} {"à"} partir d{"'"}une simple vid{"é"}o smartphone
            </p>
          </FadeIn>
        </div>

        {/* Right — viewer */}
        <div className="lg:col-span-8">
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-xl border border-[var(--v3d-warm-border)] bg-white shadow-lg">
              <DemoViewer src={DEMO_3D_URL} />
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
