"use client"
import { sdk } from "./CoinbaseWalletSetup";

export const provider = sdk.makeWeb3Provider({ options: "smartWalletOnly" });
export const addresses = provider.request({ method: "eth_requestAccounts" });
