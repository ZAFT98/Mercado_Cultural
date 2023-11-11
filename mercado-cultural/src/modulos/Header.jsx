import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Mi Aplicación</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/modulo1">Módulo 1</Link>
          </li>
          <li>
            <Link to="/modulo2">Módulo 2</Link>
          </li>
          {/* Agrega más enlaces según tus necesidades */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;