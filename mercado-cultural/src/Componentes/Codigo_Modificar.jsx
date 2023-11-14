import React, { useState, useEffect } from 'react';

const ModificarProducto = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const url = 'https://prueba-yeison-default-rtdb.firebaseio.com/productos.json';

  const obtenerProductos = async () => {
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();

      // Convierte el objeto de productos a un array
      const productosArray = Object.keys(datos).map((key) => ({
        id: key,
        ...datos[key],
      }));

      setProductos(productosArray);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const seleccionarProducto = (id) => {
    const producto = productos.find((p) => p.id === id);
    setProductoSeleccionado(producto);
    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setDescripcion(producto.descripcion);
  };

  const modificarProducto = async () => {
    if (!productoSeleccionado) {
      console.error('No se ha seleccionado ningún producto para modificar');
      return;
    }

    const urlModificar = `https://prueba-yeison-default-rtdb.firebaseio.com/productos/${productoSeleccionado.id}.json`;

    try {
      const respuesta = await fetch(urlModificar, {
        method: 'PATCH', // Utiliza PATCH para modificar solo las propiedades especificadas
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          precio: parseFloat(precio), // Convierte el precio a número
          descripcion: descripcion,
        }),
      });

      if (respuesta.ok) {
        console.log('Producto modificado exitosamente');
        obtenerProductos(); // Actualiza la lista de productos después de la modificación
        limpiarFormulario();
      } else {
        console.error('Error al modificar el producto:', respuesta.status);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  const limpiarFormulario = () => {
    setProductoSeleccionado(null);
    setNombre('');
    setPrecio('');
    setDescripcion('');
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div>
      <h2 className="text-center">Modifica un producto</h2>
      <select className="form-select" onChange={(e) => seleccionarProducto(e.target.value)}>
        <option value="" disabled selected>
          Selecciona un producto
        </option>
        {productos.map((producto) => (
          <option key={producto.id} value={producto.id}>
            {producto.nombre}
          </option>
        ))}
      </select>

      {productoSeleccionado && (
        <div className='text-center'>
          <br></br>
          <h3>Modificar {productoSeleccionado.nombre}</h3>
          
          <label htmlFor="nombre">Nombre:</label>
          <input
          className="form-control"
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
<br></br>
          <label htmlFor="precio">Precio:</label>
          <input
          className="form-control"
            type="number"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
<br></br>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
          className="form-control"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
<br></br>
          <button class="btn btn-outline-success" type="button" onClick={modificarProducto}>
            Modificar Producto
          </button>
          <button className="btn btn-outline-warning" type="button" onClick={limpiarFormulario}>
            Limpiar Formulario
          </button>
        </div>
      )}
    </div>
  );
};

export default ModificarProducto;