import React, { useState, useEffect } from 'react';

const RealizarVenta = () => {
  const [productos, setProductos] = useState([]);
  const [clienteCedula, setClienteCedula] = useState('');
  const [productosVenta, setProductosVenta] = useState([]);
  const [totalPagado, setTotalPagado] = useState(0);

  const urlProductos = 'https://prueba-yeison-default-rtdb.firebaseio.com/productos.json';
  const urlVentas = 'https://prueba-yeison-default-rtdb.firebaseio.com/ventas.json';

  const obtenerProductos = async () => {
    try {
      const respuesta = await fetch(urlProductos);
      const datos = await respuesta.json();

      // Convierte el objeto de productos a un array
      const productosArray = Object.keys(datos).map((key) => ({
        id: key,
        ...datos[key],
      }));

      setProductos(productosArray);
    } catch (error) {
      console.error('Error al obtener los datos de productos:', error);
    }
  };

  const agregarProductoVenta = (producto) => {
    setProductosVenta([...productosVenta, producto]);
    setTotalPagado(totalPagado + producto.precio);
  };

  const realizarVenta = async () => {
    if (!clienteCedula || productosVenta.length === 0) {
      console.error('Por favor, completa la información de la venta');
      return;
    }

    const fechaVenta = new Date().toLocaleDateString(); // Obtén la fecha actual en formato de cadena

    const nuevaVenta = {
      cedulacliente: clienteCedula,
      fecha: fechaVenta,
      totalpagado: totalPagado,
    };

    try {
      const respuesta = await fetch(urlVentas, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevaVenta),
      });

      if (respuesta.ok) {
        console.log('Venta realizada exitosamente');
        limpiarFormulario();
      } else {
        console.error('Error al realizar la venta:', respuesta.status);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  const limpiarFormulario = () => {
    setClienteCedula('');
    setProductosVenta([]);
    setTotalPagado(0);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div>
      <h2>Realizar Venta</h2>

      <label htmlFor="cedula">Cédula del Cliente:</label>
      <input
        type="text"
        id="cedula"
        value={clienteCedula}
        onChange={(e) => setClienteCedula(e.target.value)}
        required
      />

      <label>Productos Seleccionados:</label>
      <ul>
        {productosVenta.map((producto) => (
          <li key={producto.id}>{producto.nombre} - ${producto.precio}</li>
        ))}
      </ul>

      <p>Total Pagado: ${totalPagado}</p>

      <label htmlFor="productos">Seleccionar Producto:</label>
      <select
        id="productos"
        onChange={(e) => {
          const productoSeleccionado = productos.find((p) => p.id === e.target.value);
          agregarProductoVenta(productoSeleccionado);
        }}
      >
        <option value="" disabled selected>
          Selecciona un producto
        </option>
        {productos.map((producto) => (
          <option key={producto.id} value={producto.id}>
            {producto.nombre} - ${producto.precio}
          </option>
        ))}
      </select>

      <button type="button" onClick={realizarVenta}>
        Realizar Venta
      </button>
      <button type="button" onClick={limpiarFormulario}>
        Limpiar Formulario
      </button>
    </div>
  );
};

export default RealizarVenta;
