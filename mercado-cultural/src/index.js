import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './modulos/Home';
import Buscar from './modulos/Buscar';
import Historial from './modulos/Historial_ventas';
import Insertar from './modulos/Insertarproducto';
import Modificar from './modulos/Modificar';
import Vender from './modulos/Vender';

const enrutador = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Buscar" element={<Buscar />} />
    <Route path="/Historial" element={<Historial />} />
    <Route path="/Insertar" element={<Insertar />} />
    <Route path="/Modificar" element={<Modificar />} />
    <Route path="/Vender" element={<Vender />} />
  </Routes>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider 
    domain='mercado-cultural.us.auth0.com' 
    clientId='CF6Ssr8aT7rePYj6qBrjqZVgMvM2PiHJ' 
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <Router>
      {enrutador}
    </Router>
  </Auth0Provider>
);