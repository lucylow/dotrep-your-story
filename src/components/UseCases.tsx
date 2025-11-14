import { ArrowRight } from "lucide-react";

export const UseCases = () => {
  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="p-6 bg-card border border-border rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">For Developers</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Prove your contributions, earn reputation, and build trust across ecosystems.
          </p>
          <a href="#developers" className="text-primary font-medium flex items-center gap-1 hover:underline">
            Learn more <ArrowRight size={16} />
          </a>
        </div>

        <div className="p-6 bg-card border border-border rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">For DAOs & Teams</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Evaluate contributors using verifiable, tamper-proof evidence — automatically aggregated and scored.
          </p>
          <a href="#daos" className="text-primary font-medium flex items-center gap-1 hover:underline">
            Explore use cases <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
