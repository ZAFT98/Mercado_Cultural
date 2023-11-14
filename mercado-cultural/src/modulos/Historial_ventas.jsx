import React from "react";
import Menunavegasao from "../Componentes/BarraNavegasao";
import LogicaHistorialVentas from "../Componentes/Codigo_Historial";

const Historial = () =>{
    return(
        <div>
            <Menunavegasao />
            <h2 className="text-center">Encuentra una venta</h2>
            <LogicaHistorialVentas />
        </div>
    )
}

export default Historial;