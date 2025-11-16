export const HowItWorks = () => {
  const steps = [
    { title: "Event & Proof", desc: "Capture developer contribution event and package canonical proof." },
    { title: "Pin to DA", desc: "Batch proofs and pin to Polkadot Cloud Data Availability." },
    { title: "Anchor on Chain", desc: "Submit merkle root extrinsic to the Substrate/Polkadot chain." },
    { title: "Mint SBT", desc: "Issue a reputation SBT to the contributor's address." },
  ];

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">How DotRep Works</h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="md:flex md:items-start md:gap-8 group">
              <div className="text-6xl font-bold gradient-accent bg-clip-text text-transparent md:w-1/4 mb-4 md:mb-0 group-hover:scale-110 transition-transform">
                0{i + 1}
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-lg text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
