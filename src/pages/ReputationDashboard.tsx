import { motion } from "framer-motion";
import { ArrowLeft, Users, TrendingUp, Award, Network, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ReputationCard } from "@/components/reputation/ReputationCard";
import { ContributionCard } from "@/components/reputation/ContributionCard";
import { mockUserProfile, mockNetworkStats } from "@/data/mockData";

const ReputationDashboard = () => {
  return (
    <div className="min-h-screen gradient-hero">
      {/* Header */}
      <header className="glass sticky top-0 z-10 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="group flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Reputation Dashboard
              </span>
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* User Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group mb-8"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition duration-500" />
          <div className="relative glass-card rounded-2xl p-8 overflow-hidden">
            <div className="absolute inset-0 shimmer opacity-30" />
            <div className="relative flex items-center gap-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-full blur opacity-75" />
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <img
                    src={mockUserProfile.avatar}
                    alt={mockUserProfile.name}
                    className="w-full h-full rounded-full bg-card object-cover"
                  />
                </div>
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-bold text-foreground">{mockUserProfile.name}</h2>
                  {mockUserProfile.verified && (
                    <span className="px-4 py-1.5 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 text-emerald-400 text-sm font-semibold rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4" />
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground font-mono mt-2 bg-card/50 px-3 py-1.5 rounded-lg inline-block">
                  {mockUserProfile.address}
                </p>
                <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Member since {new Date(mockUserProfile.joinedDate).toLocaleDateString()}
                </p>
              </div>
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
            { icon: Users, label: "Total Users", value: mockNetworkStats.totalUsers.toLocaleString(), gradient: "from-blue-500 to-blue-400" },
            { icon: TrendingUp, label: "Verified Contributions", value: mockNetworkStats.verifiedContributions.toLocaleString(), gradient: "from-emerald-500 to-emerald-400" },
            { icon: Network, label: "Active Chains", value: mockNetworkStats.activeChains, gradient: "from-purple-500 to-purple-400" },
            { icon: Award, label: "Total Reputation", value: (mockNetworkStats.totalReputation / 1000000).toFixed(1) + "M", gradient: "from-primary to-accent" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="relative group/stat"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-xl opacity-0 group-hover/stat:opacity-20 blur transition duration-300`} />
              <div className="relative glass-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} p-2.5 mb-4`}>
                  <stat.icon className="w-full h-full text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
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
          className="relative mt-8 group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition duration-500" />
          <div className="relative glass-card rounded-2xl p-10 overflow-hidden">
            <div className="absolute inset-0 shimmer opacity-20" />
            <div className="relative text-center max-w-2xl mx-auto">
              <div className="inline-flex p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-6">
                <Network className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3">
                Cross-Chain Reputation Queries
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Query reputation scores across Polkadot parachains using XCM messaging. 
                Connect your wallet to enable cross-chain features.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-105">
                  <span className="relative z-10">Connect Wallet</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </button>
                <button className="px-8 py-4 glass border border-border/50 text-foreground rounded-xl font-semibold hover:border-primary/50 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReputationDashboard;
