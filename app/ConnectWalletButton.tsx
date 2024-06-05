//@ts-nocheck
"use client"
import React, { useEffect, useState } from 'react';
import { initOnboard } from './onboard';
import {
  init,
  useConnectWallet,
  useSetChain,
  useWallets
} from '@web3-onboard/react'
const ConnectWalletButton: React.FC = () => {


  const [{ wallet }, connect, disconnect] = useConnectWallet();
  const connectedWallets = useWallets();
  const [onboard, setOnboard] = useState<any>(null);

  useEffect(() => {
    const onboardInstance = initOnboard();
    setOnboard(onboardInstance);
  }, []);

  useEffect(() => {
    if (!connectedWallets.length) return;

    const connectedWalletsLabelArray = connectedWallets.map(
      ({ label }: any) => label
    );
    window.localStorage.setItem(
      'connectedWallets',
      JSON.stringify(connectedWalletsLabelArray)
    );
  }, [connectedWallets]);

  useEffect(() => {
    if (!onboard) return;

    const previouslyConnectedWallets = JSON.parse(
      window.localStorage.getItem('connectedWallets') || '[]'
    );
    async function setWalletFromLocalStorage() {
      await connect({
        walletName: previouslyConnectedWallets[0],
      });
    }
    if (previouslyConnectedWallets?.length) {


      setWalletFromLocalStorage();
    }
  }, [onboard, connect]);

  return (
    <div className="font-sans absolute text-center scale-75 md:scale-100 md:top-5 md:right-10 md:left-[80%] right-[20%] left-[20%] top-5 px-4 py-2 rounded-full text-xl transition-all duration-300">
      {wallet ? (
        <button
          onClick={() => disconnect({ label: wallet.label })}
          className="bg-red-600 text-white px-4 py-2 rounded-full"
        >
          Disconnect Wallet
        </button>
      ) : (
        <button
          onClick={() => connect()}
          className="bg-green-600 text-white px-4 py-2 rounded-full"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWalletButton;