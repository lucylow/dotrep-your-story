import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Terminal } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CopyCLIProps {
  command: string;
}

export const CopyCLI = ({ command }: CopyCLIProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "Run this command in your terminal to get started.",
      });
      setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please copy the command manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="inline-flex items-center gap-3 bg-secondary/80 backdrop-blur-sm border border-border rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all group">
      <Terminal className="h-5 w-5 text-primary" />
      <code className="text-sm font-mono text-foreground select-all">{command}</code>
      <Button
        size="sm"
        variant="ghost"
        onClick={handleCopy}
        className="ml-2 hover:bg-primary/10"
        aria-label="Copy command to clipboard"
      >
        {copied ? (
          <Check className="h-4 w-4 text-primary" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};
