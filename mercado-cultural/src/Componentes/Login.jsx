import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return(
    <div className="fondo  vh-100 row m-0 text-center align-items-center justify-content-center">     
      <div className="col-auto">
      <h1>Bienvenido al mercado cultural</h1>
      <button className="btn btn-outline-success" onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
      </div>
    </div>) 
};

export default LoginButton;