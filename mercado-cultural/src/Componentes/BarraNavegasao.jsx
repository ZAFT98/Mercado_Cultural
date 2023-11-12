import React from "react";
import { Link } from "react-router-dom";

const Menunavegasao = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/Buscar'}>Buscar</Link>
                    </li>
                    <li>
                        <Link to={'/Historial'}>Historial</Link>
                    </li>
                    <li>
                        <Link to={'/Insertar'}>Insertar</Link>
                    </li>
                    <li>
                        <Link to={'/Modificar'}>Modificar</Link>
                    </li>
                    <li>
                        <Link to={'/Vender'}>Vender</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Menunavegasao;