import React from "react";
import Menunavegasao from "../Componentes/BarraNavegasao";
import RealizarVenta from "../Componentes/Codigo_Ventas";

const Vender = () =>{
    return(
        <div>
            <h1 className="display-1 text-center">MERCADO CULTURAL</h1> 
            <Menunavegasao />
            <RealizarVenta />
        </div>
    )
}

export default Vender;