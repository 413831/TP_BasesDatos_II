export default function Ticket(props){
    console.log(props)

    const { tickets } = props;

    return (
    <div>
        <h1>Tickets</h1>
        <h2>Response</h2>
        <p>{JSON.stringify(props)}</p>
        {tickets.map((ticket,index)=>(
            <div>
                <p><b>ID:</b> {ticket._id}</p>
                <p><b>Fecha:</b> {ticket.fecha}</p>
                <p><b>Categoria:</b> {ticket.categoria}</p>
            </div>
        ))}
    </div>
    )
}