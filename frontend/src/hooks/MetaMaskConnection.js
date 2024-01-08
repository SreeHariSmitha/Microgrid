import { ethers } from 'ethers';
import contractABI from '../blockChain/Microgrid.json';

export default  async function ConnectToMetaMask() {
  try {
    const { ethereum } = window;
    console.log("Requesting account...");
    if (window.ethereum) {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log(accounts);
<<<<<<< HEAD
      const contractAddress = "0x3f8F191CC98C7B828181d5687369f585Df89c12b";
      const ganacheProvider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");

      console.log(ethereum.selectedAddress);
      const wallet = new ethers.Wallet(ethereum.selectedAddress, ganacheProvider);
      const walletProvider = new ethers.providers.Web3Provider(ethereum);
      const sendDataContract = new ethers.Contract(contractAddress, contractABI.abi, walletProvider.getSigner());
      const getDataContract  = new ethers.Contract(contractAddress, contractABI.abi, wallet);
      return { sendDataContract, getDataContract };

=======
      const contractAddress = "0xc2ac7A5e7C0298c82490CA20C55263821B146dA2";
      const ganacheProvider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
      const metaMaskAddress = ethereum.selectedAddress;
      // console.log("meta mask:",metaMaskAddress)
      const wallet = new ethers.Wallet(ethereum.selectedAddress, ganacheProvider);
      const walletProvider = new ethers.providers.Web3Provider(ethereum);
      const sendDataContract = new ethers.Contract(contractAddress, contractABI.abi, walletProvider.getSigner());
      const getDataContract = new ethers.Contract(contractAddress, contractABI.abi, wallet);
      return { sendDataContract, getDataContract,metaMaskAddress };
>>>>>>> 98329c3741b88c7733dde4c61547cd52c3948c89
    } else {
      alert("MetaMask not detected");
      return null;
    }
  } catch (error) {
    console.error("Error connecting:", error);
    throw error;
  }
}
