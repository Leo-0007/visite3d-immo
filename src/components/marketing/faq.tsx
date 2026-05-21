"use client";

import { faqItems } from "@/content/faq";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
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
      <FadeIn>
        <SectionHeader
          badge="Questions fréquentes"
          title="Tout ce que vous devez savoir"
        />
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--v3d-warm-border)] bg-white p-2 sm:p-4 shadow-sm">
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                className="border-[var(--v3d-warm-border)]"
              >
                <AccordionTrigger className="px-4 py-4 text-[0.925rem] font-medium text-[var(--v3d-text)] hover:text-[var(--v3d-blue)] hover:no-underline [&>svg]:text-[var(--v3d-text-muted)]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-sm leading-relaxed text-[var(--v3d-text-secondary)]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
