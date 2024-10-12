import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

const sdk = new CoinbaseWalletSDK({
  appName: "My App Name",
  appChainIds: [8453],
});
