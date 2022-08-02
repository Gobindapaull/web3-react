import './App.css';

function App() {
  const programming = ['JavaScript', 'TypeScript', 'React', 'Solidity', 'Ethers', 'Rust'];
  return (
    <div className="App">
      <h1>{programming[0]} {programming[1]}</h1>
      {/* print all array names */}
      {programming.map((name, key) => {
        return <h2 key={key}>{name}</h2>;
      })}
    </div>
  );
}

export default App;
