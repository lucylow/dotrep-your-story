import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CopyCLI } from "./CopyCLI";
import { AnimatedCounter } from "./AnimatedCounter";
import { LiveSandbox } from "./LiveSandbox";
import { WalletConnect } from "./WalletConnect";

export const Hero = () => {
  const handleWalletConnected = (address: string, source: string) => {
    console.log("Wallet connected:", address, source);
    // TODO: Store wallet info, link to GitHub, etc.
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm"
        >
          <span className="text-primary text-sm font-mono">Decentralized Reputation Protocol</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Decentralized Reputation.
          <span className="block text-primary mt-2 drop-shadow-[0_0_30px_rgba(230,0,122,0.6)]">
            Verifiable Proofs.
          </span>
          <span className="block text-secondary mt-2 drop-shadow-[0_0_30px_rgba(214,69,255,0.6)]">
            Cross-Chain Ready.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-mono"
        >
          DotRep anchors developer contributions into Polkadot Cloud DA, verifies them off-chain, and finalizes trust on-chain through a custom Substrate pallet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-8"
        >
          <CopyCLI command="npx create-dotrep-app my-app" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <WalletConnect onConnected={handleWalletConnected} showDisconnect={true} />
          <Link to="/reputation">
            <Button size="lg" className="text-lg px-8 py-6 gap-2 group">
              <Award className="h-5 w-5" />
              View Dashboard
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-foreground text-lg px-8 py-6" asChild>
            <a href="https://github.com/lucylow/dotrep-your-story" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <LiveSandbox />
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          <AnimatedCounter value={100} suffix="%" label="Verifiable Proofs" />
          <AnimatedCounter value={42} suffix="+" label="Parachains" />
          <AnimatedCounter value={0} label="Trust Required" />
          <AnimatedCounter value={1000} suffix="+" label="Contributors" />
        </motion.div>
      </div>
    </section>
  );
};
