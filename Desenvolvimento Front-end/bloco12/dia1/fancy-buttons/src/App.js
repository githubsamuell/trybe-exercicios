import './App.css';

function buttonExec() {
  console.log('Voce Clicou')
}

function buttonExecu() {
  console.log('Clicastes')
} 

function buttonExecut() {
  console.log('Clicastes')
} 

function App() {
  return (
    <div className="App">
      <button onClick={buttonExec}>Butones</button>
      <button onClick={buttonExecu}>Buto</button>
      <button onClick={buttonExecut}>Botao</button>

    </div>
  );
}

export default App;
