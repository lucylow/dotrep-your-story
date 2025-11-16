import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Architecture } from "@/components/Architecture";
import { MetricsSection } from "@/components/MetricsSection";
import { ApiExamples } from "@/components/ApiExamples";
import { Sandbox } from "@/components/Sandbox";
import { CodeExample } from "@/components/CodeExample";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Architecture />
      <Features />
      <MetricsSection />
      <ApiExamples />
      <Sandbox />
      <CodeExample />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
