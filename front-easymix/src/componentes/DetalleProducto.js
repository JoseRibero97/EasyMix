import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function ProductoDetail() {
  const { id } = useParams(); // Obtiene el ID de la cuenta desde la URL
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8094/api/producto/list/${id}`)
      .then(response => setProducto(response.data))
      .catch(error => console.error(error));
  }, [id]);
  
  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Proveedor</th>
              <th scope="col">Usuario</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Marca</th>
              <th scope="col">presentacion</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Medida</th>
            </tr>
          </thead>
          <tbody>
                <td>{producto.id}</td>
                <td>{producto.idProveedor.nombre}</td>
                <td>{producto.idUsuario.nombre}</td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.marca}</td>
                <td>{producto.presentacion}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.medida}</td>
          </tbody>
        </table>
        <button onClick={() => navigate(`/añadir-producto/${id}`)}>Editar Producto</button>
        <button
            onClick={() => axios.delete(`http://localhost:8094/api/producto/${id}`) & navigate(`/producto`)}
            className="delete-button"
          >
            Eliminar
          </button>
        <button onClick={() => navigate(`/producto`)}>Lista de Productos</button>
      </div>
    </div>
  );
}

export default ProductoDetail;