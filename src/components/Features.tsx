import { Database, Shield, Code2, Award, GitBranch, Blocks, Network, FileJson } from "lucide-react";

const features = [
  {
    icon: FileJson,
    title: "Client-side Merkle Verification",
    description: "Verify contribution proofs locally using cryptographic merkle proofs without trusting centralized servers.",
    code: "merkle.verify(proof, root)",
  },
  {
    icon: Database,
    title: "DA-backed Contribution History",
    description: "All contribution data is permanently stored on Polkadot Cloud Data Availability layer with verifiable CIDs.",
    code: "pin_to_da(batch_json)",
  },
  {
    icon: GitBranch,
    title: "Off-Chain Verification Engine",
    description: "Automated verification of GitHub events through canonical JSON normalization and cryptographic hashing.",
    code: "sha256(canonical_json)",
  },
  {
    icon: Award,
    title: "SBT Issuance Pipeline",
    description: "Mint reputation soulbound tokens automatically after anchor finalization. Non-transferable proof of contribution.",
    code: "mint_sbt(account, score)",
  },
  {
    icon: Network,
    title: "Cross-Chain Reputation (XCM)",
    description: "Query and verify reputation scores across Polkadot parachains using XCM messaging protocol.",
    code: "xcm_query(chain, account)",
  },
  {
    icon: Blocks,
    title: "Substrate Pallet Integration",
    description: "Custom pallet for anchor_proof() and finalize_anchor() extrinsics with on-chain storage and events.",
    code: "anchor_proof(merkle_root)",
  },
  {
    icon: Shield,
    title: "Replay Demo Flow",
    description: "Interactive sandbox to test the full pipeline: webhook → batch → anchor → finalize → SBT mint.",
    code: "simulate_pipeline(pr_url)",
  },
  {
    icon: Code2,
    title: "Canonical JSON Generator",
    description: "Deterministic JSON serialization ensures identical proofs for same contributions across all systems.",
    code: "canonicalize(github_event)",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technical Features</h2>
          <p className="text-muted-foreground text-lg font-mono">
            Production-ready components for decentralized reputation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-mono">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
              {feature.code && (
                <code className="block px-3 py-2 rounded-lg bg-background border border-border text-xs font-mono text-primary">
                  {feature.code}
                </code>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
