import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { MetricsSection } from "@/components/MetricsSection";
import { ProductPreview } from "@/components/ProductPreview";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { CodeExample } from "@/components/CodeExample";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <MetricsSection />
      <ProductPreview />
      <HowItWorks />
      <UseCases />
      <CodeExample />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
