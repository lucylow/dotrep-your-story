import { useState, useCallback } from "react";
import { web3Enable, web3Accounts, web3FromSource } from "@polkadot/extension-dapp";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { stringToU8a, u8aToHex } from "@polkadot/util";

interface WalletState {
  account: InjectedAccountWithMeta | null;
  isConnecting: boolean;
  isConnected: boolean;
  error: string | null;
}

export const usePolkadotWallet = () => {
  const [state, setState] = useState<WalletState>({
    account: null,
    isConnecting: false,
    isConnected: false,
    error: null,
  });

  const connect = useCallback(async () => {
    setState(prev => ({ ...prev, isConnecting: true, error: null }));
    
    try {
      const extensions = await web3Enable("DotRep");
      
      if (extensions.length === 0) {
        setState(prev => ({
          ...prev,
          isConnecting: false,
          error: "No Polkadot wallet extension found. Please install Polkadot.js or Talisman.",
        }));
        return null;
      }

      const accounts = await web3Accounts();
      
      if (accounts.length === 0) {
        setState(prev => ({
          ...prev,
          isConnecting: false,
          error: "No accounts found in your wallet. Please create or import an account.",
        }));
        return null;
      }

      const account = accounts[0];
      setState({
        account,
        isConnecting: false,
        isConnected: true,
        error: null,
      });

      return account;
    } catch (error) {
      console.error("Wallet connection error:", error);
      setState(prev => ({
        ...prev,
        isConnecting: false,
        error: "Failed to connect wallet. Please try again.",
      }));
      return null;
    }
  }, []);

  const disconnect = useCallback(() => {
    setState({
      account: null,
      isConnecting: false,
      isConnected: false,
      error: null,
    });
  }, []);

  const signMessage = useCallback(
    async (message: string): Promise<string | null> => {
      if (!state.account) {
        setState(prev => ({ ...prev, error: "No wallet connected" }));
        return null;
      }

      try {
        const injector = await web3FromSource(state.account.meta.source);
        const signRaw = injector?.signer?.signRaw;

        if (!signRaw) {
          setState(prev => ({
            ...prev,
            error: "Wallet does not support message signing",
          }));
          return null;
        }

        const { signature } = await signRaw({
          address: state.account.address,
          data: u8aToHex(stringToU8a(message)),
          type: "bytes",
        });

        return signature;
      } catch (error) {
        console.error("Signing error:", error);
        setState(prev => ({
          ...prev,
          error: "Failed to sign message. Please try again.",
        }));
        return null;
      }
    },
    [state.account]
  );

  return {
    ...state,
    connect,
    disconnect,
    signMessage,
  };
};
