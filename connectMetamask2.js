import React from "react";
import './App.css';

const connectMetamask2 = () => {
  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      console.log("Metamask is installed");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
    }
  };
  return (
    <div className="App">
      <h1>connect Metamask2</h1>
      <button onClick={connect}>connection 2</button>
    </div>
  );
};

export default connectMetamask2;
