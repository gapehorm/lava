// components/onboard.ts
import Onboard from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import { init } from "@web3-onboard/react";
import walletConnectModule from "@web3-onboard/walletconnect";

const injected = injectedModule();
const apiKey = "d9f27de5-e090-457c-b2fa-eca466c934e3";
init({
  apiKey,
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
    },
    {
      id: "0x2105",
      token: "ETH",
      label: "Base",
      rpcUrl: "https://mainnet.base.org",
    },
  ],
});
const walletConnect = walletConnectModule({
  projectId: "d9f27de5-e090-457c-b2fa-eca466c934e3", // Your DApp ID for WalletConnect
  requiredChains: [1],
  optionalChains: [42161, 8453, 10, 137, 56],
  dappUrl: "http://localhost:3000",
});

export const initOnboard = () => {
  return Onboard({
    wallets: [injected, walletConnect],
    chains: [
      {
        id: "0x1", // Mainnet chain ID
        token: "ETH",
        label: "Ethereum Mainnet",
        rpcUrl: "https://mainnet.infura.io/v3/80149f5f9c924b24b0594d175172313e",
      },
      // Add other chains if needed
    ],
    appMetadata: {
      name: "Your App Name",
      icon: "<svg></svg>", // Your app icon in SVG format
      description: "Your app description",
    },
  });
};
