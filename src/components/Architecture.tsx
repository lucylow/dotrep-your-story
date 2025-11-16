import { motion } from "framer-motion";
import { Database, GitBranch, Blocks, Coins } from "lucide-react";

const architectureLanes = [
  {
    title: "Ingestion Engine",
    icon: GitBranch,
    steps: [
      "Normalize GitHub events",
      "Canonical JSON",
      "sha256(proof)",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Merkle + DA Layer",
    icon: Database,
    steps: [
      "batch.json",
      "merkle_root",
      "CID (IPFS-compatible)",
    ],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Substrate Pallet",
    icon: Blocks,
    steps: [
      "anchor_proof()",
      "finalize_anchor()",
      "storage maps",
      "emit events",
    ],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "SBT + XCM",
    icon: Coins,
    steps: [
      "off-chain minter",
      "reputation updates",
      "XCM reputation queries",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export const Architecture = () => {
  return (
    <section className="py-20 px-6 bg-background" id="architecture">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">System Architecture</h2>
          <p className="text-muted-foreground text-lg font-mono">
            From GitHub webhook to on-chain finalization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {architectureLanes.map((lane, index) => (
            <motion.div
              key={lane.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className={`p-6 rounded-2xl border border-border ${lane.bgColor} h-full`}>
                <div className={`mb-4 inline-flex p-3 rounded-xl bg-card ${lane.color}`}>
                  <lane.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-mono">{lane.title}</h3>
                <ul className="space-y-3">
                  {lane.steps.map((step, i) => (
                    <li key={i} className="text-sm text-muted-foreground font-mono flex items-start">
                      <span className="mr-2 text-primary">→</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              {index < architectureLanes.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-2xl z-10">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl border border-border bg-card"
        >
          <h3 className="text-xl font-bold mb-6 font-mono">Data Flow</h3>
          <div className="font-mono text-sm text-muted-foreground space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-primary">1.</span>
              <span>GitHub Webhook → Canonical JSON</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">2.</span>
              <span>Merkle Batch + CID → Polkadot Cloud DA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">3.</span>
              <span>anchor_proof() → Substrate Extrinsic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">4.</span>
              <span>finalize_anchor() → On-chain Storage</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">5.</span>
              <span>SBT Mint → Reputation Token Issued</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
