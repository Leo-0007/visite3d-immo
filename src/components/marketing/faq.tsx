"use client";

import { faqItems } from "@/content/faq";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeIn } from "@/components/animations";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <SectionWrapper id="faq">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — header */}
        <div className="lg:col-span-4">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--v3d-blue)]">
              FAQ
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-[var(--v3d-text)]">
              Vos questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--v3d-text-secondary)]">
              Tout ce que vous devez savoir avant de commander.
            </p>
          </FadeIn>
        </div>

        {/* Right — accordion */}
        <div className="lg:col-span-8">
          <FadeIn delay={0.1}>
            <Accordion>
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  className="border-[var(--v3d-warm-border)]"
                >
                  <AccordionTrigger className="px-0 py-5 text-[0.925rem] font-medium text-[var(--v3d-text)] hover:text-[var(--v3d-blue)] hover:no-underline [&>svg]:text-[var(--v3d-text-muted)]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pb-5 text-sm leading-relaxed text-[var(--v3d-text-secondary)]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
