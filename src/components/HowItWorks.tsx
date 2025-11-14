export const HowItWorks = () => {
  const steps = [
    "GitHub Event",
    "Feature Extraction",
    "Merkle Batch Build",
    "Polkadot Cloud DA",
    "Substrate Pallet & SBT",
  ];

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">How DotRep Works</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {i + 1}
                </div>
                <p className="text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
