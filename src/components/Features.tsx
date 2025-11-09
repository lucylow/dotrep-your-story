import { Database, Shield, Code2, Workflow, Cloud, Award } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Cryptographic Proofs",
    description: "Every contribution is cryptographically signed and anchored to Polkadot Cloud for immutable verification.",
  },
  {
    icon: Database,
    title: "XCM Integration",
    description: "Query reputation across parachains using Cross-Consensus Message (XCM) format for seamless interoperability.",
  },
  {
    icon: Shield,
    title: "Soulbound Tokens",
    description: "Non-transferable SBTs represent your portable reputation that follows you across the Polkadot ecosystem.",
  },
  {
    icon: Code2,
    title: "Developer Identity",
    description: "Link GitHub contributions to your on-chain identity with verifiable credentials and attestations.",
  },
  {
    icon: Workflow,
    title: "Trust Primitives",
    description: "Built-in reputation primitives for commits, reviews, issues, and cross-project collaboration.",
  },
  {
    icon: Cloud,
    title: "Polkadot Cloud DA",
    description: "Contribution manifests anchored to Polkadot Cloud Data Availability for censorship-resistant storage.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Reputation that travels with you
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            DotRep creates portable, verifiable developer reputation anchored on Polkadot
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
