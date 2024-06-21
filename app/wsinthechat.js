import Web3 from "web3";
import * as Web3Utils from "web3-utils";

// Define setWhitelistLevelText function
const setWhitelistLevelText = (levelText) => {
  // Your function implementation here
  console.log("Whitelist level:", levelText);
};

const web3 = new Web3("https://api.avax-test.network/ext/bc/C/rpc"); // Fuji testnet RPC URL

const contractABI = require("./dragonToken.json"); // Load ABI from a JSON file

console.log("contractABI:", contractABI);
if (!Array.isArray(contractABI)) {
  throw new Error("Invalid contract ABI: must be an array");
}

const contractAddress = "0xFe924C488C0E67aa273AaD21E31a81DAa53F68AC"; // Your contract address on Fuji testnet

// Instantiate Contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to check if an address is allowlisted for a specific phase
const isAllowlisted = async (address) => {
  try {
    // Validate Ethereum address format
    if (!Web3Utils.isAddress(address)) {
      throw new Error("Invalid Ethereum address format");
    }

    // Checksum address to ensure validity
    const checksumAddress = Web3Utils.toChecksumAddress(address);

    const result = await contract.methods.allowlisted(checksumAddress).call();
    const phase = result; // Assuming the result directly represents the phase number
    const message =
      phase > 0
        ? `Address ${checksumAddress} is whitelisted for phase ${phase}.`
        : `Address ${checksumAddress} is not whitelisted.`;
    setWhitelistLevelText(message);
    return message;
  } catch (error) {
    console.error("Error:", error);
    return "Error checking whitelist status.";
  }
};
async function processFees(amount) {
  try {
    // Check if MetaMask is installed
    if (typeof window.ethereum === "undefined") {
      throw new Error("MetaMask is not installed.");
    }

    // Request account access if needed
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const fromAddress = accounts[0]; // Get the first account

    // Define transaction parameters
    const tx = {
      from: fromAddress,
      to: contractAddress,
      value: Web3Utils.toHex(Web3Utils.toWei(amount, "ether")), // Convert amount to Wei and hex
      gas: Web3Utils.toHex(444), // Set gas limit
    };

    // Send the transaction using MetaMask
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [tx],
    });

    console.log("Transaction hash:", txHash);
    return "Transaction successful. Hash: " + txHash;
  } catch (error) {
    console.error("Error processing fees:", error);
    return "Error processing fees: " + error.message;
  }
}

// Export the functions to be used in the React component
export { isAllowlisted, setWhitelistLevelText, processFees };
