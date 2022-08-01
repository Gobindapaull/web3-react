import React, {useState} from "react";
import './App.css';

const ConnectMetamask2 = () => {
    const [walletAddress, setWalletAddress] = useState(null);

  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      console.log("Metamask is installed");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // console.log(accounts);
      setWalletAddress(accounts[0]);
    }
  };
  return (
    <div className="App">
      <h1>connect Metamask2</h1>
      <h2>Address: {walletAddress}</h2>
      <button onClick={connect}>connection 2</button>
    </div>
  );
};

export default ConnectMetamask2;
