import React from "react";
import Menunavegasao from "../Componentes/BarraNavegasao";
import LogicaHistorialVentas from "../Componentes/Codigo_Historial";

const Historial = () =>{
    return(
        <div>
            <h1 className="display-1 text-center">MERCADO CULTURAL</h1> 
            <Menunavegasao />
            <h2 className="text-center">Encuentra una venta</h2>
            <LogicaHistorialVentas />
        </div>
    )
}

export default Historial;