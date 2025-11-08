import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
          <span className="text-primary text-sm font-medium">Full-stack TypeScript development made simple</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-glow">
          Build faster with
          <span className="block gradient-accent bg-clip-text text-transparent mt-2">
            DotRep
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          A modern full-stack framework powered by tRPC, Drizzle ORM, and PostgreSQL.
          Ship production-ready applications in record time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-smooth text-lg px-8 py-6">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-lg px-8 py-6">
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { value: "10x", label: "Faster Development" },
            { value: "100%", label: "Type Safety" },
            { value: "Zero", label: "Config Required" },
            { value: "∞", label: "Scalability" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
