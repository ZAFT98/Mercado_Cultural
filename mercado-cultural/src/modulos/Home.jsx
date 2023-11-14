import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "../Componentes/Login";
import LogoutButton from "../Componentes/Logout";
import Profile from "../Componentes/PerfilInfo";
import Menunavegasao from "../Componentes/BarraNavegasao";

export default function Home (){
    
    const {isAuthenticated} = useAuth0();
    return(
        <div>
        {isAuthenticated ?(
            <>
            <h1 className="display-1 text-center">MERCADO CULTURAL</h1> 
            <Menunavegasao />
            <h1>Hola, Bienvenido al mercado cultural</h1>
            <LogoutButton />
            <Profile />
            </>   
        ):
        <LoginButton />}
        </div>
    )
}