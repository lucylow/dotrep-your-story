import { Database, Zap, Shield, Code2, Workflow, Cloud } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on Vite and optimized for development speed. Hot module replacement keeps you in the flow.",
  },
  {
    icon: Database,
    title: "Powerful ORM",
    description: "Drizzle ORM provides type-safe database queries with zero overhead and incredible DX.",
  },
  {
    icon: Code2,
    title: "End-to-End TypeScript",
    description: "Full type safety from your database to your frontend. Catch errors before they reach production.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Built-in security best practices, input validation, and protection against common vulnerabilities.",
  },
  {
    icon: Workflow,
    title: "tRPC Integration",
    description: "Move fast with auto-generated API clients. No code generation, just pure TypeScript magic.",
  },
  {
    icon: Cloud,
    title: "Deploy Anywhere",
    description: "Deploy to your favorite platform with zero configuration. Vercel, Railway, or self-hosted.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to build modern apps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            DotRep combines the best tools in the TypeScript ecosystem into one cohesive framework
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-smooth hover:glow-primary"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
