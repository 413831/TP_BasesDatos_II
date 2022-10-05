import logo from './logo.svg';
import './App.css';

const GET_TICKETS = "tickets";

function App() {

  // Request
  const reqApi = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS}`)
    const data = await api.json();
    console.log(data);
  }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={reqApi}>Obtener tickets</button>
        <h1>Mi primer app</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
