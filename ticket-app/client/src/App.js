import logo from './logo.svg';
import './App.css';
import Ticket from './components/Ticket';
import { useState } from "react";

const GET_TICKETS = "tickets";
const GET_TICKETS_FIX = "tickets/fix";

function App() {

  // Variables
  const [tickets, setTickets] = useState(null);

  // Request
  const getTickets = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS}`)
    const data = await api.json();

    setTickets(data);
    // console.log(data);
  }

  const getTicketsFix = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS_FIX}`)
    const data = await api.json();

    setTickets(data);
    // console.log(data);
  }

  // UI
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       

        {tickets ? (
          <Ticket tickets={tickets}></Ticket>
        ):  (<button onClick={getTickets}>Obtener tickets</button>)}

        
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
