import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function FormularioProducto() {
  const {id} = useParams();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [marca, setMarca] = useState('');
  const [presentacion, setPresentacion] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [medida, setMedida] = useState('');
  const [proveedor, setProveedor] = useState('');
  const [idUsuario, setIdUsuario] = useState('');
  const [idProveedor, setIdProveedor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {      
      // Crear la transacción con el objeto cuenta obtenido
      axios.get(`http://localhost:8094/api/usuario/registros/${id}`)
        .then(response => setIdUsuario(response.data))
        .catch(error => console.error(error));
      axios.get(`http://localhost:8094/api/proveedor/registros/${id}`)
        .then(response1 => setIdProveedor(response1.data))
        .catch(error => console.error(error));
      const productoResponse = await axios.post('http://localhost:8094/api/producto/', {
        idProveedor,
        idUsuario,
        nombre,
        descripcion,
        marca,
        presentacion,
        cantidad,
        medida
      });
      console.log('Producto Añadido:', productoResponse.data);
      // Redirigir de nuevo a la página de detalles de la cuenta
      navigate(`/producto`);
    } catch (error) {
      console.error('Error al crear la transacción:', error);
    }
  };

  return (
    <>
      <h1>Añadir Producto</h1>
      <div className='table-container'>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Id Proveedor:</label>
            <input
              type="number"
              value={proveedor}
              onChange={(e) => setProveedor(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Descripción:</label>
            <input
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Marca:</label>
            <input
              type="text"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Presentacion:</label>
            <input
              type="text"
              value={presentacion}
              onChange={(e) => setPresentacion(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Cantidad:</label>
            <input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Medida:</label>
            <input
              type="text"
              value={medida}
              onChange={(e) => setMedida(e.target.value)}
              required
            />
          </div>
          <button type="submit">Crear</button>
          <button onClick={() => navigate(-1)}>Regresar</button>
        </form>
      </div>
    </>
    );
}

export default FormularioProducto;