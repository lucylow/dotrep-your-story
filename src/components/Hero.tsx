import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { CopyCLI } from "./CopyCLI";
import { AnimatedCounter } from "./AnimatedCounter";
import { LiveSandbox } from "./LiveSandbox";

export const Hero = () => {
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
          <span className="text-primary text-sm font-medium">Full-stack TypeScript development made simple</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Build faster with
          <span className="block gradient-accent bg-clip-text text-transparent mt-2 drop-shadow-[0_0_30px_rgba(14,165,233,0.5)]">
            DotRep
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          A modern full-stack framework powered by tRPC, Drizzle ORM, and PostgreSQL.
          Ship production-ready applications in record time.
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
          <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-smooth text-lg px-8 py-6">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-foreground text-lg px-8 py-6">
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
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
          <AnimatedCounter value={10} suffix="x" label="Faster Development" />
          <AnimatedCounter value={100} suffix="%" label="Type Safety" />
          <AnimatedCounter value={0} label="Zero Config" />
          <AnimatedCounter value={999} suffix="+" label="Scalability" />
        </motion.div>
      </div>
    </section>
  );
};
