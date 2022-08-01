import './App.css';

function App() {
  return (
    <div className="App">
       <h1>Connect to the wallet</h1>
       <button onClick={async () => {
          if(window.ethereum) {
            console.log(await window.ethereum.enable());
          } else {
            console.log('Install Metamask');
          }
       }}>Connect Metamask</button>
    </div>
  );
}

export default App;
