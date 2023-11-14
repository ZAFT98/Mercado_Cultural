import React from "react";
import Menunavegasao from "../Componentes/BarraNavegasao";
import AgregarProducto from "../Componentes/Codigo_Insertar";

const Insertar = () =>{
    return(
        <div>
            <h1 className="display-1 text-center">MERCADO CULTURAL</h1> 
            <Menunavegasao />
            <AgregarProducto />
        </div>
    )
}

export default Insertar;