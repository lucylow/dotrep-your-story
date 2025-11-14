export const ProductPreview = () => {
  const leftFeatures = [
    "Pull Request analytics & event normalization",
    "Feature vector extraction & scoring model",
    "Merkle batch anchoring & DA pinning",
    "SBT issuance & on-chain identity",
  ];

  const rightFeatures = [
    "Anomaly detection & sybil-resistance",
    "Contributor influence analysis",
    "Proof Explorer with client-side Merkle checks",
    "Full API / XCM-ready architecture",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Your Developer Identity — Reimagined
        </h2>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-4xl h-72 bg-secondary/30 rounded-2xl border border-border shadow-inner flex items-center justify-center">
            <span className="text-muted-foreground">[ Dashboard Screenshot Placeholder ]</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <ul className="space-y-4 text-muted-foreground">
            {leftFeatures.map((feature, i) => (
              <li key={i}>• {feature}</li>
            ))}
          </ul>
          <ul className="space-y-4 text-muted-foreground">
            {rightFeatures.map((feature, i) => (
              <li key={i}>• {feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
