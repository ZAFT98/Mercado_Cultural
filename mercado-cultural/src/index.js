import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import LoginButton from './modulos/Login';
import {Auth0Provider} from '@auth0/auth0-react';
import Home from './modulos/Home';

const rutero = createBrowserRouter ([{path:'/', element: <LoginButton />, errorElement: <h1>Esta pagina no existe, tu ta loco chamo</h1>},]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain='mercado-cultural.us.auth0.com' 
    clientId='CF6Ssr8aT7rePYj6qBrjqZVgMvM2PiHJ' 
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <RouterProvider router={rutero}></RouterProvider>
    </Auth0Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
