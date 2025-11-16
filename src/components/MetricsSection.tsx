import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Award, CheckCircle } from "lucide-react";

interface Metrics {
  anchorsLastHour: number;
  anchorsPerMinute: number;
  avgAnchorLatencyMs: number;
  sbtsMintedTotal: number;
  pinSuccessPct: number;
  lastUpdated: string;
}

export const MetricsSection = () => {
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  useEffect(() => {
    fetch("/data/metrics.json")
      .then((r) => r.json())
      .then((data) => setMetrics(data))
      .catch((err) => console.error("Failed to load metrics:", err));
  }, []);

  if (!metrics) {
    return (
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse text-muted-foreground">Loading metrics…</div>
        </div>
      </section>
    );
  }

  const stats = [
    {
      icon: TrendingUp,
      value: metrics.anchorsLastHour,
      label: "Anchors (last hour)",
      color: "text-primary",
    },
    {
      icon: Zap,
      value: metrics.anchorsPerMinute.toFixed(1),
      label: "Anchors / min",
      color: "text-accent",
    },
    {
      icon: CheckCircle,
      value: `${(metrics.avgAnchorLatencyMs / 1000).toFixed(1)}s`,
      label: "Avg anchor latency",
      color: "text-primary",
    },
    {
      icon: Award,
      value: metrics.sbtsMintedTotal,
      label: "SBTs minted",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Live Network Metrics</h2>
          <p className="text-muted-foreground text-lg">
            Real-time data from the DotRep reputation network
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className={`inline-flex p-3 rounded-xl bg-primary/10 mb-4 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-4xl font-bold mb-2 gradient-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-xs text-muted-foreground"
        >
          Last updated {new Date(metrics.lastUpdated).toLocaleString()} • Success rate:{" "}
          {metrics.pinSuccessPct}%
        </motion.div>
      </div>
    </section>
  );
};
