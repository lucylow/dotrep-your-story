import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  CheckCircle,
  Clock,
  GitPullRequest,
  Code,
  BookOpen,
  MessageCircle,
  FileText,
  ExternalLink,
  ChevronDown,
  Github
} from "lucide-react";
import { Contribution } from "@/data/mockData";

interface ContributionCardProps {
  contributions: Contribution[];
  className?: string;
}

export const ContributionCard = ({ contributions, className = "" }: ContributionCardProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getIcon = (type: string) => {
    const icons = {
      PullRequest: GitPullRequest,
      CodeCommit: Code,
      Documentation: BookOpen,
      CommunityHelp: MessageCircle,
      IssueResolution: FileText,
      CodeReview: Github
    };
    return icons[type as keyof typeof icons] || Code;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-card rounded-xl border border-border ${className}`}
    >
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Recent Contributions</h3>
        <p className="text-sm text-muted-foreground">Your verified open-source work</p>
      </div>

      <div className="divide-y divide-border">
        {contributions.map((contribution, index) => {
          const Icon = getIcon(contribution.type);
          const isExpanded = expandedId === contribution.id;

          return (
            <motion.div
              key={contribution.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 hover:bg-secondary/50 transition-colors cursor-pointer"
              onClick={() => setExpandedId(isExpanded ? null : contribution.id)}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  contribution.verified 
                    ? "bg-primary/10" 
                    : "bg-muted"
                }`}>
                  <Icon className={`w-4 h-4 ${
                    contribution.verified 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  }`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-sm font-medium text-foreground">
                      {contribution.title}
                    </h4>
                    <ChevronDown 
                      className={`w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">
                    {contribution.description}
                  </p>

                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      contribution.verified
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {contribution.verified ? (
                        <><CheckCircle className="w-3 h-3" /> Verified</>
                      ) : (
                        <><Clock className="w-3 h-3" /> Pending</>
                      )}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Weight: {contribution.weight}/10
                    </span>
                    <span className="text-xs text-muted-foreground capitalize">
                      {contribution.source}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(contribution.timestamp).toLocaleDateString()}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4"
                      >
                        <div className="bg-secondary rounded-lg p-4 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Proof:</span>
                            <a
                              href={`https://github.com/${contribution.proof}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline flex items-center gap-1"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {contribution.proof}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                          {contribution.metadata && (
                            <>
                              {contribution.metadata.repo && (
                                <div className="text-sm">
                                  <span className="text-muted-foreground">Repository: </span>
                                  <span className="text-foreground">{contribution.metadata.repo}</span>
                                </div>
                              )}
                              {contribution.metadata.language && (
                                <div className="text-sm">
                                  <span className="text-muted-foreground">Language: </span>
                                  <span className="text-foreground">{contribution.metadata.language}</span>
                                </div>
                              )}
                              {contribution.metadata.lines && (
                                <div className="text-sm">
                                  <span className="text-muted-foreground">Lines Changed: </span>
                                  <span className="text-foreground">{contribution.metadata.lines}</span>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
