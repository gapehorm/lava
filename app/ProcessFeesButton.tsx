import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Contract } from 'web3-eth-contract'; // Ensure you have web3-eth-contract installed
import ContractABI from './dragonToken.json'; // Import your contract ABI

const ContractAddress = '0xFe924C488C0E67aa273AaD21E31a81DAa53F68AC'; // Define your contract address here
const rpcEndpoint = 'https://api.avax-test.network/ext/bc/C/rpc'; // Fuji testnet RPC endpoint

const ProcessFeesButton: React.FC = () => {
  const { account, library } = useWeb3React();
  const [isLoading, setIsLoading] = useState(false);

  const processFees = async () => {
    if (!library || !account) {
      console.error('Web3 library or account not available.');
      return;
    }

    const contract = new Contract(ContractAddress, ContractABI, library.getSigner());

    try {
      setIsLoading(true);
      const tx = await contract.processFees();
      await tx.wait();
      console.log('Fees processed successfully!');
    } catch (error) {
      console.error('Error processing fees:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={processFees} disabled={!account || isLoading}>
        {isLoading ? 'Processing...' : 'Process Fees'}
      </button>
    </div>
  );
};

export default ProcessFeesButton;
