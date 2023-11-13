import React from "react";
import Menunavegasao from '../Componentes/BarraNavegasao'
import LogicaBuscar from "../Componentes/Codigo_Buscar";

const Buscar = () =>{
    return(
        <div>
            <h1 className="text-center">MERCADO CULTURAL</h1>        
            <Menunavegasao />
            <h2 className="text-center">Encuentra un producto</h2>
            <div className="container-fluid">
            <LogicaBuscar />
            </div>

        </div>     
    )
}

export default Buscar;