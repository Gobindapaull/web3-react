import "./App.css";

function Metamask() {
  return (
    <div className="App">
      <h1>Connect to the wallet</h1>
      <button
        onClick={async () => {
          if (window.ethereum) {
            const account = await window.ethereum.enable();
            console.log(account);
          } else {
            console.log("Install Metamask");
          }
        }}
      >
        Connect Metamask
      </button>
    </div>
  );
}

export default Metamask;
