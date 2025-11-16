import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Copy, Check } from "lucide-react";

const apiEndpoints = [
  {
    method: "POST",
    endpoint: "/api/webhook/github",
    description: "Receive GitHub webhook events",
    request: {
      event: "pull_request",
      action: "closed",
      pull_request: {
        number: 123,
        merged: true,
        user: { login: "developer" },
      },
    },
    response: {
      status: "accepted",
      proof_hash: "0xabc123...",
    },
  },
  {
    method: "POST",
    endpoint: "/cloud/da/pin",
    description: "Pin batch to Polkadot Cloud DA",
    request: {
      batch_id: "batch_001",
      proofs: ["0xabc123...", "0xdef456..."],
      merkle_root: "0x789abc...",
    },
    response: {
      cid: "bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
      status: "pinned",
    },
  },
  {
    method: "POST",
    endpoint: "/dotrep/anchors",
    description: "Submit anchor proof extrinsic",
    request: {
      merkle_root: "0x789abc...",
      cid: "bafybeigdyrzt5sfp...",
      batch_size: 2,
    },
    response: {
      tx_hash: "0x1234567890abcdef...",
      block_number: 12345,
      status: "finalized",
    },
  },
  {
    method: "POST",
    endpoint: "/api/finalize",
    description: "Finalize anchor and mint SBT",
    request: {
      anchor_id: "anchor_001",
      account: "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    },
    response: {
      sbt_id: "sbt_001",
      reputation_score: 750,
      status: "minted",
    },
  },
];

export const ApiExamples = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">API Reference</h2>
          <p className="text-muted-foreground text-lg font-mono">
            Real endpoints from the DotRep backend
          </p>
        </motion.div>

        <div className="space-y-4">
          {apiEndpoints.map((api, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-border rounded-2xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="px-3 py-1 rounded-lg bg-primary/20 text-primary text-xs font-mono font-bold">
                    {api.method}
                  </span>
                  <div>
                    <div className="font-mono text-sm mb-1">{api.endpoint}</div>
                    <div className="text-xs text-muted-foreground">{api.description}</div>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-border"
                  >
                    <div className="p-6 space-y-4">
                      {/* Request */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-mono text-muted-foreground">Request</h4>
                          <button
                            onClick={() =>
                              copyToClipboard(JSON.stringify(api.request, null, 2), index * 2)
                            }
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {copiedIndex === index * 2 ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        <pre className="p-4 rounded-lg bg-background border border-border overflow-x-auto text-xs font-mono text-muted-foreground">
                          {JSON.stringify(api.request, null, 2)}
                        </pre>
                      </div>

                      {/* Response */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-mono text-muted-foreground">Response</h4>
                          <button
                            onClick={() =>
                              copyToClipboard(JSON.stringify(api.response, null, 2), index * 2 + 1)
                            }
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {copiedIndex === index * 2 + 1 ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        <pre className="p-4 rounded-lg bg-background border border-border overflow-x-auto text-xs font-mono text-muted-foreground">
                          {JSON.stringify(api.response, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
