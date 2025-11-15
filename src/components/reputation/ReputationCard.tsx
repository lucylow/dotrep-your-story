import { motion } from "framer-motion";
import { Trophy, TrendingUp, Award, Users } from "lucide-react";
import { ReputationScore } from "@/data/mockData";

interface ReputationCardProps {
  score: ReputationScore;
  className?: string;
}

export const ReputationCard = ({ score, className = "" }: ReputationCardProps) => {
  const getScoreColor = (value: number) => {
    if (value >= 800) return "text-emerald-500";
    if (value >= 600) return "text-blue-500";
    if (value >= 400) return "text-yellow-500";
    return "text-orange-500";
  };

  const getTier = (percentile: number) => {
    if (percentile >= 95) return "Diamond";
    if (percentile >= 85) return "Platinum";
    if (percentile >= 70) return "Gold";
    if (percentile >= 50) return "Silver";
    return "Bronze";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-card rounded-xl border border-border p-6 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Reputation Score</h3>
          <p className="text-sm text-muted-foreground">
            Updated {new Date(score.lastUpdated).toLocaleDateString()}
          </p>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className={`text-4xl font-bold ${getScoreColor(score.overall)}`}
        >
          {score.overall}
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center p-3 bg-primary/10 rounded-lg"
        >
          <Trophy className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">#{score.rank}</div>
          <div className="text-xs text-muted-foreground">Global Rank</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center p-3 bg-accent/10 rounded-lg"
        >
          <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">{score.percentile}%</div>
          <div className="text-xs text-muted-foreground">Percentile</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center p-3 bg-secondary rounded-lg"
        >
          <Award className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-lg font-semibold text-foreground">{getTier(score.percentile)}</div>
          <div className="text-xs text-muted-foreground">Tier</div>
        </motion.div>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium text-foreground flex items-center gap-2">
          <Users className="w-4 h-4" />
          Score Breakdown
        </h4>
        {Object.entries(score.breakdown).map(([type, value], index) => (
          <motion.div
            key={type}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.05 }}
            className="flex items-center justify-between"
          >
            <span className="text-sm text-muted-foreground capitalize">
              {type.replace(/([A-Z])/g, ' $1').trim()}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-20 bg-secondary rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(value / Math.max(...Object.values(score.breakdown))) * 100}%` }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.8 }}
                  className="bg-gradient-to-r from-primary to-accent h-full"
                />
              </div>
              <span className="text-sm font-medium text-foreground w-8 text-right">
                {value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
