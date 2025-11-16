import { useState } from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle, Code } from "lucide-react";
import { Button } from "./ui/button";

export const Sandbox = () => {
  const [step, setStep] = useState(0);
  const [prUrl, setPrUrl] = useState("https://github.com/user/repo/pull/123");

  const mockResults = {
    canonical: {
      repo: "user/repo",
      pr_number: 123,
      author: "developer",
      timestamp: "2025-11-16T12:00:00Z",
    },
    merkleLeaf: "0xabc123def456...",
    cid: "bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
    txHash: "0x1234567890abcdef",
  };

  const steps = [
    { title: "Enter GitHub PR URL", action: "Input" },
    { title: "Generate Canonical JSON", action: "Compute" },
    { title: "Compute Merkle Leaf", action: "Hash" },
    { title: "Simulate DA Pin", action: "Pin" },
    { title: "Simulate anchor_proof()", action: "Submit" },
  ];

  const runDemo = () => {
    setStep(0);
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= 4) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
  };

  return (
    <section className="py-20 px-6 bg-card" id="sandbox">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Interactive Sandbox</h2>
          <p className="text-muted-foreground text-lg font-mono">
            Test the DotRep pipeline with mock data
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Input */}
          <div className="p-6 rounded-2xl border border-border bg-background">
            <label className="block text-sm font-mono text-muted-foreground mb-2">
              GitHub PR URL
            </label>
            <input
              type="text"
              value={prUrl}
              onChange={(e) => setPrUrl(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-mono text-sm"
              placeholder="https://github.com/user/repo/pull/123"
            />
          </div>

          {/* Run Button */}
          <Button
            onClick={runDemo}
            size="lg"
            className="w-full gap-2"
          >
            <Play className="h-5 w-5" />
            Run Pipeline Demo
          </Button>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((s, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: step >= index ? 1 : 0.3,
                  x: 0,
                }}
                className={`p-4 rounded-xl border ${
                  step > index
                    ? "border-primary bg-primary/5"
                    : step === index
                    ? "border-secondary bg-secondary/5"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {step > index ? (
                      <CheckCircle className="h-5 w-5 text-primary" />
                    ) : (
                      <Code className="h-5 w-5 text-muted-foreground" />
                    )}
                    <span className="font-mono text-sm">{s.title}</span>
                  </div>
                  {step > index && (
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono">
                      PASS
                    </span>
                  )}
                </div>

                {/* Show result */}
                {step > index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 p-3 rounded-lg bg-background/50 font-mono text-xs text-muted-foreground overflow-x-auto"
                  >
                    {index === 1 && (
                      <pre>{JSON.stringify(mockResults.canonical, null, 2)}</pre>
                    )}
                    {index === 2 && <code>{mockResults.merkleLeaf}</code>}
                    {index === 3 && <code>CID: {mockResults.cid}</code>}
                    {index === 4 && <code>TX: {mockResults.txHash}</code>}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Final Status */}
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl border-2 border-primary bg-primary/5 text-center"
            >
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Pipeline Complete</h3>
              <p className="text-muted-foreground font-mono text-sm">
                Proof anchored and finalized on-chain
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
