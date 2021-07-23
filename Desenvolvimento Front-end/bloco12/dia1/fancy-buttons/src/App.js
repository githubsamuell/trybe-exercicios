import './App.css';

class App extends React.Component  {
  constructor(){
    super()

    this.buttonExec = this.buttonExec.bind(this);
    this.buttonExecu = this.buttonExecu.bind(this);
    this.buttonExecut = this.buttonExecut.bind(this);
  }

  function buttonExec() {
    console.log(this);
    console.log('Voce Clicou');
  }
  
  function buttonExecu() {
    console.log(this);
    console.log('Clicastes');
  } 
  
  function buttonExecut() {
    console.log(this);
    console.log('Clicastes');
  } 

  render() {
  return (
    <div className="App">
      <button onClick={this.buttonExec}>Butones</button>
      <button onClick={this.buttonExecu}>Buto</button>
      <button onClick={this.buttonExecut}>Botao</button>

    </div>
  );
  }
}

export default App;
