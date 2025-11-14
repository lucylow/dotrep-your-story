import { Database, Shield, Code2, Workflow, Cloud, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verifiable",
    description: "All contributions are reduced to deterministic proof objects and hashed into Merkle trees.",
  },
  {
    icon: Database,
    title: "Portable",
    description: "Your reputation follows you across parachains, DAOs, and EVM chains via XCM-compatible APIs.",
  },
  {
    icon: Award,
    title: "Tamper-Resistant",
    description: "Anchored to Polkadot and secured by SBT issuance through a custom Substrate pallet.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-smooth"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
