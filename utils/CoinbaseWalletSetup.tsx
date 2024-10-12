"use client"
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

export const sdk = new CoinbaseWalletSDK({
  appName: "Lumen",
  appChainIds: [84532],
});
