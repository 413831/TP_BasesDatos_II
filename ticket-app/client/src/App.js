import logo from './logo.svg';
import './App.css';
import Ticket from './components/Ticket';
import { useState } from "react";

const GET_TICKETS = "tickets";
const GET_TICKETS_FIX = "tickets/fix";
const GET_TICKETS_SERVICIOS = "tickets/servicios";
const GET_TICKETS_HIGH_PRIORITY = "tickets/high_priority";
const GET_TICKETS_HIGH_PRIORITY_TECH = "tickets/high_priority_tech";
const GET_TICKETS_HIGH_PRIORITY_VIEWS = "tickets/high_priority_views";
const GET_TICKETS_LOW_PRIORITY = "tickets/low_priority";

function App() {

  // Variables
  const [tickets, setTickets] = useState(null);
  const [ticketsFix, setTicketsFix] = useState(null);
  const [ticketsServicios, setTicketsServicios] = useState(null);
  const [ticketsAltaPrioridad, setTicketsAltaPrioridad] = useState(null);
  const [ticketsAltaPrioridadTech, setTicketsAltaPrioridadTech] = useState(null);
  const [ticketsAltaPrioridadMasViews, setTicketsAltaPrioridadMasViews] = useState(null);
  const [ticketsBajaPrioridad, setTicketsBajaPrioridad] = useState(null);

  // Request
  const getTickets = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS}`)
    const data = await api.json();

    setTickets(data);
  }

  const getTicketsFix = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS_FIX}`)
    const data = await api.json();

    setTicketsFix(data);
  }

  const getTicketsServicios = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS_SERVICIOS}`)
    const data = await api.json();

    setTicketsServicios(data);
  }

  const getTicketsAltaPrioridad = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS_HIGH_PRIORITY}`)
    const data = await api.json();

    setTicketsAltaPrioridad(data);
  }

  const getTicketsAltaPrioridadTech = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS_HIGH_PRIORITY_TECH}`)
    const data = await api.json();

    setTicketsAltaPrioridadTech(data);
  }
  
  const getTicketsAltaPrioridadMasViews = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS_HIGH_PRIORITY_VIEWS}`)
    const data = await api.json();

    setTicketsAltaPrioridadMasViews(data);
  }

  const getTicketsBajaPrioridad = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS_LOW_PRIORITY}`)
    const data = await api.json();

    setTicketsBajaPrioridad(data);
  }
 

  // UI
  return (

    <div className="App">
      <div>
        <header className="App-header">
          <h1>Multichannel Portal</h1>
          <h2><code>API</code></h2>
        </header>
       
      </div>
      <div className="App-body">
      
        <table>
          <tr >
            <td className='Cell'>
              <button onClick={getTickets}  className="Button"><code>Todos los tickets: find()</code></button>
            </td>
            <td className='Cell'>
             
              {tickets ? (
              <Ticket tickets={tickets}></Ticket>
                ):   <textarea disabled="true" value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTicketsFix}  className="Button"><code>Tickets con el tag fix</code>: </button>
            </td>
            <td className='Cell'>
             
              {ticketsFix ? (
              <Ticket tickets={ticketsFix}></Ticket>
                ):   <textarea disabled="true" value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTicketsServicios}  className="Button"><code>Tickets que actualmente estan en servicio_tecnico</code></button>
            </td>
            <td className='Cell'>
             
              {ticketsServicios ? (
              <Ticket tickets={ticketsServicios}></Ticket>
                ):   <textarea disabled="true" value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTicketsAltaPrioridad}  className="Button"><code>Tickets de alta prioridad</code></button>
            </td>
            <td className='Cell'>
             
              {ticketsAltaPrioridad ? (
              <Ticket tickets={ticketsAltaPrioridad}></Ticket>
                ):   <textarea disabled="true" value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTicketsAltaPrioridadTech}  className="Button"><code>Tickets de alta prioridad y de servicio_tecnico</code></button>
            </td>
            <td className='Cell'>
             
              {ticketsAltaPrioridadTech ? (
              <Ticket tickets={ticketsAltaPrioridadTech}></Ticket>
                ):   <textarea disabled="true" value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTicketsAltaPrioridadMasViews}  className="Button"><code>Tickets de alta prioridad y mas de 10 vistas</code></button>
            </td>
            <td className='Cell'>
             
              {ticketsAltaPrioridadMasViews ? (
              <Ticket tickets={ticketsAltaPrioridadMasViews}></Ticket>
                ):   <textarea disabled="true" value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTicketsBajaPrioridad}  className="Button">Tickets de <code>baja prioridad</code></button>
            </td>
            <td className='Cell'>
             
              {ticketsBajaPrioridad ? (
              <Ticket tickets={ticketsBajaPrioridad}></Ticket>
                ):   <textarea disabled="true" value={"..."}></textarea>}
            </td>
          </tr>
        </table>

     
      </div>
    </div>
  );
}

export default App;
