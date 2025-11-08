import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const LiveSandbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const stackblitzUrl = "https://stackblitz.com/edit/vitejs-vite-z7kf3d?embed=1&file=src/App.tsx&view=preview";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 group"
        >
          <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          {isOpen ? "Hide Demo" : "Try in Browser"}
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="border-border hover:bg-secondary text-foreground text-lg px-8 py-6"
        >
          <a
            href="https://codesandbox.io/s/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Open in CodeSandbox
          </a>
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 500, marginTop: 32 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-2xl border border-border shadow-2xl"
          >
            <iframe
              src={stackblitzUrl}
              className="w-full h-full"
              title="DotRep Interactive Demo"
              loading="lazy"
              sandbox="allow-forms allow-modals allow-popups allow-scripts allow-same-origin"
              aria-label="Interactive DotRep code demo"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
