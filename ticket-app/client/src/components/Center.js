export default function Center(props){
    console.log(props)

    const { centers } = props;

    return (
    <div >
        <p>{JSON.stringify(props)}</p>
        {centers.map((center,index)=>(
            <div>
                <p><b>ID:</b> {center._id}</p>
                <p><b>Nombre:</b> {center.name}</p>
                <p><b>Cantidad de empleados:</b> {center.staff_counter}</p>
            </div>
        ))}
    </div>
    )
}