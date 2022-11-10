export default function Customer(props){

    const { customers } = props;

    return (
    <div >
        <p>{JSON.stringify(props)}</p>
        {customers.map((customer,index)=>(
            <div>
                <p><b>ID:</b> {customer.personal_id}</p>
                <p><b>Nombre:</b> {customer.name}</p>
                <p><b>Apellido:</b> {customer.surname}</p>
                <p><b>Fecha de nacimiento:</b> {customer.date_of_birth}</p>
                <p><b>Plan:</b> {customer.selected_plan}</p>
                <p><b>Fecha de suscripcion:</b> {customer.subscription_date}</p>
                <p><b>Creation date:</b> {customer.creation_date}</p>
            </div>
        ))}
    </div>
    )
}