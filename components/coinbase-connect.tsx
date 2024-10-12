import React, { useCallback } from "react";
import { CoinbaseWalletLogo } from "./CoinbaseWalletLogo";
import { provider } from "@/utils/Web3Provider";

interface BlueCreateWalletButtonProps {
  handleSuccess: (address: string) => void;
  handleError: (error: unknown) => void;
}

const buttonStyles: React.CSSProperties = {
  background: "transparent",
  border: "1px solid transparent",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: 200,
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  fontSize: 18,
  backgroundColor: "#0052FF",
  paddingLeft: 15,
  paddingRight: 30,
  borderRadius: 10,
};

export function BlueCreateWalletButton({
  handleSuccess,
  handleError,
}: BlueCreateWalletButtonProps) {
  const createWallet = useCallback(async () => {
    try {
      const [address]: string[] = await provider.request({
        method: "eth_requestAccounts",
      });
      handleSuccess(address);
    } catch (error) {
      handleError(error);
    }
  }, [handleSuccess, handleError]);

  return (
    <button style={buttonStyles} onClick={createWallet}>
      <CoinbaseWalletLogo />
      Create Wallet
    </button>
  );
}
