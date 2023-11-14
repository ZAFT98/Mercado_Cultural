import React from "react";
import { Link } from "react-router-dom";

const Menunavegasao = () => {
    return(
        <div className="container-fluid">
            <h1 className="display-1 text-center">MERCADO CULTURAL</h1> 
            <nav className="navbar navbar-expand-lg  justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Principal</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/Buscar'}>Buscar un producto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/Historial'}>Historial de ventas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/Insertar'}>Insertar un Producto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/Modificar'}>Modificar un Producto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/Vender'}>Realizar una venta</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Menunavegasao;