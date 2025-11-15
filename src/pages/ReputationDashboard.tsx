import { motion } from "framer-motion";
import { ArrowLeft, Users, TrendingUp, Award, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { ReputationCard } from "@/components/reputation/ReputationCard";
import { ContributionCard } from "@/components/reputation/ContributionCard";
import { mockUserProfile, mockNetworkStats } from "@/data/mockData";

const ReputationDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold gradient-accent bg-clip-text text-transparent">
              Reputation Dashboard
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* User Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl p-8 mb-8 border border-border"
        >
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent p-1"
            >
              <img
                src={mockUserProfile.avatar}
                alt={mockUserProfile.name}
                className="w-full h-full rounded-full bg-background"
              />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-foreground">{mockUserProfile.name}</h2>
                {mockUserProfile.verified && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    Verified
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground font-mono mt-1">
                {mockUserProfile.address}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Member since {new Date(mockUserProfile.joinedDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Network Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { icon: Users, label: "Total Users", value: mockNetworkStats.totalUsers.toLocaleString(), color: "text-blue-500" },
            { icon: TrendingUp, label: "Verified Contributions", value: mockNetworkStats.verifiedContributions.toLocaleString(), color: "text-emerald-500" },
            { icon: Network, label: "Active Chains", value: mockNetworkStats.activeChains, color: "text-purple-500" },
            { icon: Award, label: "Total Reputation", value: (mockNetworkStats.totalReputation / 1000000).toFixed(1) + "M", color: "text-primary" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Reputation Score */}
          <div className="xl:col-span-1">
            <ReputationCard score={mockUserProfile.reputation} />
          </div>

          {/* Contributions List */}
          <div className="xl:col-span-2">
            <ContributionCard contributions={mockUserProfile.contributions} />
          </div>
        </div>

        {/* XCM Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-xl border border-border p-8"
        >
          <div className="text-center max-w-2xl mx-auto">
            <Network className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Cross-Chain Reputation Queries
            </h3>
            <p className="text-muted-foreground mb-6">
              Query reputation scores across Polkadot parachains using XCM messaging. 
              Connect your wallet to enable cross-chain features.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:scale-105 transition-transform font-medium">
                Connect Wallet
              </button>
              <button className="px-6 py-3 bg-secondary text-foreground rounded-xl hover:bg-secondary/80 transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReputationDashboard;
