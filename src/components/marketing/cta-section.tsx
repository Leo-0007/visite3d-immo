import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL } from "@/lib/constants";
import { FadeIn } from "@/components/animations";

export function CTASection() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--v3d-blue)]">
            Commencer
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.035em] leading-[1.1] text-[var(--v3d-text)]">
            Pr{"ê"}t {"à"} transformer
            <br />
            vos annonces&nbsp;?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[var(--v3d-text-secondary)]">
            Premi{"è"}re visite 3D d{"è"}s 49 CHF.
            Sans engagement, livr{"é"}e en 24h.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#tarifs"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[var(--v3d-blue)] hover:bg-[#164060] text-white text-sm font-semibold px-10 py-6 rounded-lg shadow-sm transition-all"
              )}
            >
              Voir les offres
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-xs text-[var(--v3d-text-muted)]">
            Des questions ?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[var(--v3d-blue)] underline underline-offset-4 transition-colors hover:text-[#164060]"
            >
              {"É"}crivez-nous
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
