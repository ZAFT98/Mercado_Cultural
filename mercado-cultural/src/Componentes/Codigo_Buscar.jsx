import React,{useState, useEffect} from "react";

const LogicaBuscar = ()=>
{
    const [productos, setproductos] = useState([])
    const [busquedas, setbusquedas] = useState("")
    const url = 'https://prueba-yeison-default-rtdb.firebaseio.com/.json'

    const mostrardatos = async ()=>
    {
        const respuesta = await fetch(url)
        const datos = await respuesta.json()
        setproductos(datos)
    }


    const buscador = (e) => 
    {
        setbusquedas(e.target.value)
        console.log(e.target.value)
    }

    let results = []
    if(!busquedas)
    {
        results = productos
    } else 
    {
        results = productos.filter( (dato) => 
        dato.name.toLowerCase().includes(busquedas.toLocaleLowerCase()))
    }

    useEffect( () =>
    {
        mostrardatos()
    },[])

    

    return(
        
        <div>
            <input value={busquedas} onChange={buscador} type="text" placeholder="Ingresa el nombre del producto que deseas buscar" className="form-control"></input>


            <table className="table table-striped table-hover mt-5 shadow-lg">
                <thead>
                    <tr className="bg-curso text-white">
                        <th>
                            ID
                        </th>
                        <th>
                            NOMBRE
                        </th>
                        <th>
                            PRECIO
                        </th>
                        <th>
                            DESCRIPCIÓN
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        results.map((producto)=>(
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.name}</td>
                            <td>{producto.price}</td>
                            <td>{producto.description}</td>
                        </tr>
                        ))
                    }          
                </tbody>
            </table>
        </div>
    )
}

export default LogicaBuscar;