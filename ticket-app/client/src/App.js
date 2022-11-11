import logo from './logo.svg';
import './App.css';
import Ticket from './components/Ticket';
import Customer from './components/Customer';
import { useState } from "react";
import Center from './components/Center';

const GET_TICKETS = "tickets";
const GET_TICKETS_FIX = "tickets/fix";
const GET_TICKETS_SERVICIOS = "tickets/servicios";
const GET_TICKETS_HIGH_PRIORITY = "tickets/high_priority";
const GET_TICKETS_HIGH_PRIORITY_TECH = "tickets/high_priority_tech";
const GET_TICKETS_HIGH_PRIORITY_VIEWS = "tickets/high_priority_views";
const GET_TICKETS_LOW_PRIORITY = "tickets/low_priority";
const GET_TICKETS_VALID = "tickets/valid_tickets";
const GET_TICKETS_CLOSED = "tickets/closed_tickets";
const GET_TICKETS_ACTIVE = "tickets/active_tickets";
const GET_TICKETS_NON_TECH_VALID = "tickets/non_tech_valid_tickets";
const GET_TICKETS_BY_CUSTOMER = "tickets/tickets_by_customer";
const GET_CUSTOMERS_AVELLANEDA_SUPERPACK = "customers/pack_superpack_avellaneda";
const GET_CUSTOMERS_CENTRO_PASTEUR = "customers/clientes_centro_pasteur";
const GET_CENTERS_MORE_40_STAFF = "centers/more_than_40";
const GET_CENTERS_LESS_10_STAFF = "centers/less_equal_than_10";

function App() {

  // Variables
  const [tickets, setTickets] = useState(null);
  const [ticketsFix, setTicketsFix] = useState(null);
  const [ticketsServicios, setTicketsServicios] = useState(null);
  const [ticketsAltaPrioridad, setTicketsAltaPrioridad] = useState(null);
  const [ticketsAltaPrioridadTech, setTicketsAltaPrioridadTech] = useState(null);
  const [ticketsAltaPrioridadMasViews, setTicketsAltaPrioridadMasViews] = useState(null);
  const [ticketsBajaPrioridad, setTicketsBajaPrioridad] = useState(null);
  const [ticketsValid, setTicketsValidos] = useState(null);
  const [ticketsClosed, setTicketsClosed] = useState(null);
  const [ticketsActive, setTicketsActive] = useState(null);
  const [ticketsNonTechValid, setTicketsNonTechValid] = useState(null);
  const [ticketsByCustomer, setTicketsByCustomer] = useState(null);
  const [customersAvellanedaSuperPack, setCustomersAvellanedaSuperPack] = useState(null);
  const [customersCentroPasteur, setCustomersCentroPasteur] = useState(null);
  const [centersMore40Staff, setCentersMore40Staff] = useState(null);
  const [centersLess10Staff, setCentersLess10Staff] = useState(null);

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

  const getTicketsValid = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS_VALID}`)
    const data = await api.json();

    setTicketsValidos(data);
  }

  const getTicketsClosed = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS_CLOSED}`)
    const data = await api.json();

    setTicketsClosed(data);
  }

  const getTicketsActive = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS_ACTIVE}`)
    const data = await api.json();

    setTicketsActive(data);
  }

  const getTicketsNonTechValid = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS_NON_TECH_VALID}`)
    const data = await api.json();

    setTicketsNonTechValid(data);
  }

  const getTicketsByCustomer = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_TICKETS_BY_CUSTOMER}`)
    const data = await api.json();

    setTicketsByCustomer(data);
  }

  const getCustomersAvellanedaSuperPack = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_CUSTOMERS_AVELLANEDA_SUPERPACK}`)
    const data = await api.json();

    setCustomersAvellanedaSuperPack(data);
  }
 
  const getCustomersCentroPasteur = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_CUSTOMERS_CENTRO_PASTEUR}`)
    const data = await api.json();

    setCustomersCentroPasteur(data);
  }

  const getCentersMore40Staff = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_CENTERS_MORE_40_STAFF}`)
    const data = await api.json();

    setCentersMore40Staff(data);
  }

  const getCentersLess10Staff = async () =>{
    const api = await fetch(`http://localhost:3000/${GET_CENTERS_LESS_10_STAFF}`)
    const data = await api.json();

    setCentersLess10Staff(data);
  }

  // UI
  return (

    <div className="App">
      <div>
        <header className="App-header">
          <h1>Multichannel Portal API</h1>
        </header>
       
      </div>
      <div className="App-body">
      
        <table>
          <tbody>
          <tr >
            <td className='Cell'>
              <button onClick={getTickets}  className="Button">Todos los tickets: find()</button>
            </td>
            <td className='Cell'>
             
              {tickets ? (
              <Ticket tickets={tickets}></Ticket>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTicketsFix}  className="Button">Tickets con el tag fix: </button>
            </td>
            <td className='Cell'>
             
              {ticketsFix ? (
              <Ticket tickets={ticketsFix}></Ticket>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTicketsServicios}  className="Button">Tickets que actualmente estan en servicio_tecnico</button>
            </td>
            <td className='Cell'>
             
              {ticketsServicios ? (
              <Ticket tickets={ticketsServicios}></Ticket>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTicketsAltaPrioridad}  className="Button">Tickets de alta prioridad</button>
            </td>
            <td className='Cell'>
             
              {ticketsAltaPrioridad ? (
              <Ticket tickets={ticketsAltaPrioridad}></Ticket>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTicketsAltaPrioridadTech}  className="Button">Tickets de alta prioridad y de servicio_tecnico</button>
            </td>
            <td className='Cell'>
             
              {ticketsAltaPrioridadTech ? (
              <Ticket tickets={ticketsAltaPrioridadTech}></Ticket>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTicketsAltaPrioridadMasViews}  className="Button">Tickets de alta prioridad y mas de 10 vistas</button>
            </td>
            <td className='Cell'>
             
              {ticketsAltaPrioridadMasViews ? (
              <Ticket tickets={ticketsAltaPrioridadMasViews}></Ticket>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getTicketsBajaPrioridad}  className="Button">Tickets de baja prioridad</button>
            </td>
            <td className='Cell'>
             
              {ticketsBajaPrioridad ? (
              <Ticket tickets={ticketsBajaPrioridad}></Ticket>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>

          <tr >
            <td className='Cell'>
              <button onClick={getTicketsValid}  className="Button">Tickets validos : state != "discarded"</button>
            </td>
            <td className='Cell'>
             
              {ticketsValid ? (
              <Ticket tickets={ticketsValid}></Ticket>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>

          <tr >
            <td className='Cell'>
              <button onClick={getTicketsNonTechValid}  className="Button">Tickets validos de área no técnica </button>
            </td>
            <td className='Cell'>
             
              {ticketsNonTechValid ? (
              <Ticket tickets={ticketsNonTechValid}></Ticket>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>

          <tr >
            <td className='Cell'>
              <button onClick={getTicketsByCustomer}  className="Button">Tickets por cliente </button>
            </td>
            <td className='Cell'>
             
              {ticketsByCustomer ? (
              <Ticket tickets={ticketsByCustomer}></Ticket>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>

          <tr >
            <td className='Cell'>
              <button onClick={getTicketsClosed}  className="Button">Tickets cerrados : state == "resolved" or state == "discarded</button>
            </td>
            <td className='Cell'>
             
              {ticketsClosed ? (
              <Ticket tickets={ticketsClosed}></Ticket>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>

          <tr >
            <td className='Cell'>
              <button onClick={getTicketsActive}  className="Button">Tickets activos : state == "resolved" nor state == "discarded</button>
            </td>
            <td className='Cell'>
             
              {ticketsActive ? (
              <Ticket tickets={ticketsActive}></Ticket>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>

          <tr >
            <td className='Cell'>
              <button onClick={getCustomersAvellanedaSuperPack}  className="Button">Clientes de Avellaneda con el plan Superpack</button>
            </td>
            <td className='Cell'>
             
              {customersAvellanedaSuperPack ? (
              <Customer customers={customersAvellanedaSuperPack}></Customer>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>
          <tr >
            <td className='Cell'>
              <button onClick={getCustomersCentroPasteur}  className="Button">Clientes dentro de area de cobertura del Centro Pasteur</button>
            </td>
            <td className='Cell'>
             
              {customersCentroPasteur ? (
              <Customer customers={customersCentroPasteur}></Customer>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>

          <tr >
            <td className='Cell'>
              <button onClick={getCentersMore40Staff}  className="Button">Centros de atención con más de 40 empleados</button>
            </td>
            <td className='Cell'>
             
              {centersMore40Staff ? (
              <Center centers={centersMore40Staff}></Center>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>

          <tr >
            <td className='Cell'>
              <button onClick={getCentersLess10Staff}  className="Button">Centros de atención con menos de 10 empleados</button>
            </td>
            <td className='Cell'>
             
              {centersLess10Staff ? (
              <Center centers={centersLess10Staff}></Center>
                ):   <textarea disabled={true} value={"..."}></textarea>}
            </td>
          </tr>
          </tbody>
        </table>

     
      </div>
    </div>
  );
}

export default App;
