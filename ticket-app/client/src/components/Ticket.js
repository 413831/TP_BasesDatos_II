export default function Ticket(props){
    console.log(props)

    const { tickets } = props;

    return (
    <div >
        <p>{JSON.stringify(props)}</p>
        {tickets.map((ticket,index)=>(
            <div>
                <hr></hr>
                <p><b>ID:</b> {ticket._id}</p>
                <p><b>Title:</b> {ticket.title}</p>
                <p><b>Description:</b> {ticket.description}</p>
                <p><b>Priority:</b> {ticket.priority}</p>
                <p><b>Area:</b> {ticket.current_area}</p>
                <p><b>View count:</b> {ticket.view_counter}</p>
                <p><b>Creation date:</b> {ticket.creation_date}</p>
            </div>
        ))}
    </div>
    )
}