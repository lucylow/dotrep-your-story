import { Database, Shield, Code2, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Proof Anchoring",
    description: "Pin batches to Polkadot Cloud Data Availability and anchor merkle roots on-chain for cryptographic verification.",
  },
  {
    icon: Award,
    title: "Reputation SBTs",
    description: "Issue soulbound tokens to trusted contributors. Your reputation follows you across parachains via XCM.",
  },
  {
    icon: Database,
    title: "Polkadot Cloud",
    description: "Built on Polkadot Cloud data availability and execution pods for scalable, decentralized reputation.",
  },
  {
    icon: Code2,
    title: "Analytics Dashboard",
    description: "Real-time metrics: anchors/hr, latency, SBTs minted. Track your reputation growth across the ecosystem.",
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
