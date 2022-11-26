export default function Ticket(props){
    console.log(props)

    const { tickets } = props;

    return (
    <div >
        <p>{JSON.stringify(props)}</p>
        {tickets.map((ticket,index)=>(
            <div>
                <hr></hr>
                {ticket._id ? (<p><b>ID:</b> {ticket._id}</p>): <p></p>}
                {ticket.promedio ? (<p><b>Promedio vistas:</b> {ticket.promedio}</p>) : <p></p>}
                {ticket.title ? (<p><b>Title:</b> {ticket.title}</p>) : <p></p>}
                {ticket.description ? (<p><b>Description:</b> {ticket.description}</p>) : <p></p>}
                {ticket.priority ? (<p><b>Priority:</b> {ticket.priority}</p>) : <p></p>}
                {ticket.current_area ? (<p><b>Area:</b> {ticket.current_area}</p>) : <p></p>}
                {ticket.view_counter ? (<p><b>View count:</b> {ticket.view_counter}</p>): <p></p>}
                {ticket.current_area ? (<p><b>Current area:</b> {ticket.current_area}</p>) : <p></p>}
                {ticket.creation_date ? (<p><b>Creation date:</b> {ticket.creation_date}</p>) : <p></p>}
            </div>
        ))}
    </div>
    )
}