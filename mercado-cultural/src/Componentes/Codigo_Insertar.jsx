import React, { useState } from 'react';

const AgregarProducto = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convierte el valor del precio a un número
    const precioNumerico = parseFloat(precio);

    // Verifica si el precio es un número válido
    if (isNaN(precioNumerico)) {
      console.error('El precio no es un número válido');
      return;
    }

    // Realiza la lógica de inserción aquí
    const url = 'https://prueba-yeison-default-rtdb.firebaseio.com/productos.json';

    try {
      const respuesta = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          precio: precioNumerico,
          descripcion: descripcion,
        }),
      });

      if (respuesta.ok) {
        console.log('Producto agregado exitosamente');
        // Puedes realizar alguna acción adicional, como limpiar el formulario o actualizar la lista de productos.
        setNombre('');
        setPrecio('');
        setDescripcion('');
      } else {
        console.error('Error al agregar el producto:', respuesta.status);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div className='text-center'>
      <h2 className="text-center">Agrega un producto</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control"
        placeholder='Ingresa el nombre del producto'
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

<br></br>

        <input className="form-control"
        placeholder='Ingresa el precio del producto'
          type="number"
          id="precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
<br></br>
        <textarea className="form-control"
        placeholder='Ingresa la descripción del producto'
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        ></textarea>
<br></br>
        <button className='btn btn-outline-success' type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AgregarProducto;
