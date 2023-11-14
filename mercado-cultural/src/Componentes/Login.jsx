import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return(
    <div>
      <h1>Hola, Bienvenido al mercado cultural</h1>
      <button onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
    </div>) 
};

export default LoginButton;