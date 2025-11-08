import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden gradient-hero border border-border p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-grid-white/5" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to build something amazing?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get started with DotRep in minutes. No complex setup, just install and start building.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-8 py-6">
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-lg px-8 py-6">
                Read Docs
              </Button>
            </div>

            <div className="inline-flex items-center gap-3 bg-secondary/50 backdrop-blur-sm border border-border rounded-xl px-6 py-4">
              <Terminal className="h-5 w-5 text-primary" />
              <code className="text-sm font-mono">npx create-dotrep-app my-app</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
