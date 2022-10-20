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
      <div>
        <header className="App-header">
          <h1>Multichannel Portal</h1>
          <h2><code>API</code></h2>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
       
      </div>
      <div className="App-body">
      
        <table>
          <tr >
            <td className='Cell'>
              <button onClick={getTickets}  className="Button">Obtener tickets</button>
            </td>
            <td className='Cell'>
             
              {tickets ? (
              <Ticket tickets={tickets}></Ticket>
                ):   <textarea disabled="true" value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTickets}  className="Button">Obtener tickets</button>
            </td>
            <td className='Cell'>
             
              {tickets ? (
              <Ticket tickets={tickets}></Ticket>
                ):   <textarea disabled="true" value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTickets}  className="Button">Obtener tickets</button>
            </td>
            <td className='Cell'>
             
              {tickets ? (
              <Ticket tickets={tickets}></Ticket>
                ):   <textarea disabled="true" value={"..."}></textarea>}
            </td>
          </tr>
        </table>

     
      </div>
    </div>
  );
}

export default App;
