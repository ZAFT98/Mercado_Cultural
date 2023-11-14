import React from "react";
import Menunavegasao from "../Componentes/BarraNavegasao";
import ModificarProducto from "../Componentes/Codigo_Modificar";

const Modificar = () =>{
    return(
        <div>
            <h1 className="display-1 text-center">MERCADO CULTURAL</h1> 
            <Menunavegasao />
            <ModificarProducto />
        </div>
    )
}

export default Modificar;