import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CodeExample } from "@/components/CodeExample";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CodeExample />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
