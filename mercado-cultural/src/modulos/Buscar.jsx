import React from "react";
import Menunavegasao from '../Componentes/BarraNavegasao'
import LogicaBuscar from "../Componentes/Codigo_Buscar";

const Buscar = () =>{
    return(
        <div>    
            <Menunavegasao />
            <h2 className="text-center">Encuentra un producto</h2>
            <div className="container-fluid">
            <LogicaBuscar />
            </div>

        </div>     
    )
}

export default Buscar;