import { JsonLd } from "@/components/json-ld";
import { productSchemas, serviceSchema } from "@/lib/schema";

import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/marketing/hero";
import { TrustBar } from "@/components/marketing/trust-bar";
import { ProblemSolution } from "@/components/marketing/problem-solution";
import { DemoSection } from "@/components/marketing/demo-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works";
import { PricingSection } from "@/components/marketing/pricing";
import { TestimonialsSection } from "@/components/marketing/testimonials";
import { FAQSection } from "@/components/marketing/faq";
import { PortalIntegration } from "@/components/marketing/portal-integration";
import { CTASection } from "@/components/marketing/cta-section";
import { Footer } from "@/components/marketing/footer";

export default function Home() {
  return (
    <main className="bg-white">
      <JsonLd data={serviceSchema} />
      {productSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <Navbar />
      <HeroSection />
      <TrustBar />
      <DemoSection />
      <ProblemSolution />
      <HowItWorksSection />
      <PricingSection />
      <PortalIntegration />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
