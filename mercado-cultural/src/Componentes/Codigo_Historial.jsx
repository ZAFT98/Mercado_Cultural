import React, { useState, useEffect } from "react";

const LogicaBuscar = () => {
  const [ventas, setventas] = useState([]);
  const [busquedas, setBusquedas] = useState("");
  const url = "https://prueba-yeison-default-rtdb.firebaseio.com/ventas.json";

  const mostrarDatos = async () => {
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();

      // Convierte el objeto de productos a un array
      const ventasArray = Object.keys(datos).map((key) => ({
        id: key,
        ...datos[key],
      }));

      setventas(ventasArray);
      console.log(ventasArray);
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
    ? ventas
    : ventas.filter((venta) =>
        venta.cedulacliente.toLowerCase().includes(busquedas)
      );

  return (
    <div>
      <input
        value={busquedas}
        onChange={buscador}
        type="text"
        placeholder="Ingresa la cedula del cliente a buscar:"
        className="form-control"
      />
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso">
            <th>CEDULA:</th>
            <th>TOTAL A PAGAR:</th>
            <th>FECHA:</th>
          </tr>
        </thead>
        <tbody>
          {results.map((venta) => (
            <tr key={venta.cedulacliente}>
              <td>{venta.cedulacliente}</td>
              <td>{venta.totalpagado}</td>
              <td>{venta.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogicaBuscar;

