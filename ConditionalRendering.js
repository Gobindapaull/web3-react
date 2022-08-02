import './App.css';

function App() {
  const isGreen = true;
  return (
    <div className="App">
      <h1 className="metamask">Metamask</h1>
      <button className="button" style={{color: isGreen ? "green" : "red"}}>Connect Wallet</button>
      {isGreen && <button>Show Button</button>}
    </div>
  );
}

export default App;
