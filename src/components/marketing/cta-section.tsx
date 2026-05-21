import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL } from "@/lib/constants";
import { FadeIn } from "@/components/animations";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 section-warm">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[var(--v3d-text)]">
            Pr{"ê"}t {"à"} transformer vos visites&nbsp;?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[var(--v3d-text-secondary)] sm:text-base">
            Rejoignez les agences suisses qui modernisent leurs annonces.
            Premi{"è"}re visite 3D d{"è"}s 49&nbsp;CHF.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10">
            <a
              href="#tarifs"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[var(--v3d-blue)] hover:bg-[#164060] text-white text-sm font-semibold px-10 py-6 rounded-lg shadow-md transition-all"
              )}
            >
              Commander maintenant &rarr;
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
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
