import React, { useState, useEffect } from "react";

const LogicaBuscar = () => {
  const [productos, setProductos] = useState([]);
  const [busquedas, setBusquedas] = useState("");
  const url = "https://prueba-yeison-default-rtdb.firebaseio.com/productos.json";

  const mostrarDatos = async () => {
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();

      // Convierte el objeto de productos a un array
      const productosArray = Object.keys(datos).map((key) => ({
        id: key,
        ...datos[key],
      }));

      setProductos(productosArray);
      console.log(productosArray);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const buscador = (e) => {
    setBusquedas(e.target.value.toLowerCase());
  };

  useEffect(() => {
    mostrarDatos();
  }, []);

  const results = !busquedas
    ? productos
    : productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busquedas)
      );

  return (
    <div>
      <input
        value={busquedas}
        onChange={buscador}
        type="text"
        placeholder="Ingresa el nombre del producto que deseas buscar"
        className="form-control"
      />
      <table className="table table-warning table-hover mt-5 shadow-lg">
        <thead>
          <tr className="table-danger bg-curso">
            <th>NOMBRE</th>
            <th>PRECIO</th>
            <th>DESCRIPCIÓN</th>
          </tr>
        </thead>
        <tbody>
          {results.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogicaBuscar;
