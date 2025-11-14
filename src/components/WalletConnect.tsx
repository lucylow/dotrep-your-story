import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, CheckCircle2, AlertCircle, Loader2, LogOut } from "lucide-react";
import { usePolkadotWallet } from "@/hooks/usePolkadotWallet";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface WalletConnectProps {
  onConnected?: (address: string, source: string) => void;
  showDisconnect?: boolean;
}

export const WalletConnect = ({ onConnected, showDisconnect = true }: WalletConnectProps) => {
  const { account, isConnecting, isConnected, error, connect, disconnect } = usePolkadotWallet();
  const [isLinking, setIsLinking] = useState(false);

  const handleConnect = async () => {
    const connectedAccount = await connect();
    if (connectedAccount) {
      toast({
        title: "Wallet Connected!",
        description: `Connected to ${connectedAccount.address.slice(0, 8)}...${connectedAccount.address.slice(-8)}`,
      });
      onConnected?.(connectedAccount.address, connectedAccount.meta.source);
    } else if (error) {
      toast({
        title: "Connection Failed",
        description: error,
        variant: "destructive",
      });
    }
  };

  const handleDisconnect = () => {
    disconnect();
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected.",
    });
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-6)}`;
  };

  return (
    <div className="space-y-4">
      <AnimatePresence mode="wait">
        {!isConnected ? (
          <motion.div
            key="connect"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="lg"
              onClick={handleConnect}
              disabled={isConnecting}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-smooth text-lg px-8 py-6 w-full sm:w-auto"
            >
              {isConnecting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <Wallet className="mr-2 h-5 w-5" />
                  Connect Polkadot Wallet
                </>
              )}
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="connected"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">Wallet Connected</h3>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                      {account?.meta.source || "Polkadot"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono break-all">
                    {account?.address && formatAddress(account.address)}
                  </p>
                  {account?.meta.name && (
                    <p className="text-xs text-muted-foreground">
                      {account.meta.name}
                    </p>
                  )}
                </div>
              </div>
              {showDisconnect && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleDisconnect}
                  className="flex-shrink-0"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-start gap-2 p-4 rounded-xl bg-destructive/10 border border-destructive/20"
          >
            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div className="space-y-1 flex-1">
              <p className="text-sm font-medium text-destructive">Connection Error</p>
              <p className="text-xs text-destructive/80">{error}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
