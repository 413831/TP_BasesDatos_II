export default function Ticket(props){
    console.log(props)

    const { tickets } = props;

    return (
    <div >
        <p>{JSON.stringify(props)}</p>
        {tickets.map((ticket,index)=>(
            <div>
                <p><b>ID:</b> {ticket._id}</p>
                <p><b>Title:</b> {ticket.title}</p>
                <p><b>Priority:</b> {ticket.priority}</p>
                <p><b>Area:</b> {ticket.area}</p>
            </div>
        ))}
    </div>
    )
}