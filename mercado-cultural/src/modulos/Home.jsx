import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "../Componentes/Login";
import LogoutButton from "../Componentes/Logout";
import Profile from "../Componentes/PerfilInfo";
import Menunavegasao from "../Componentes/BarraNavegasao";

export default function Home (){
    
    const {isAuthenticated} = useAuth0();
    return(
        <div className="fondo vh-100 row m-0 text-center justify-content-center">
        {isAuthenticated ?(
            <>
            
            <Menunavegasao />
            <div className="col-auto">
            <h1 >Bienvenido al mercado cultural</h1>    
            <br></br>        
            <Profile />
            
            <LogoutButton />
      
            </div>

            </>               
        ):
        <LoginButton />}


        </div>
    )
}