"use client";
import { Address } from "@/components/Address/Address";
import { BlueCreateWalletButton } from "@/components/coinbase-connect";
import Hero from "@/components/hero";
import { useAccount } from "wagmi";

export default function Index() {
  const { address } = useAccount();
  const handleSuccess = (address: string) => {
    console.log("Wallet created with address:", address);
  };

  const handleError = (error: unknown) => {
    console.error("Error creating wallet:", error);
  };
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {!address ? (
          <BlueCreateWalletButton
            handleSuccess={handleSuccess}
            handleError={handleError}
          />
        ) : (
          <Address address={address} />
        )}
      </main>
    </>
  );
}
