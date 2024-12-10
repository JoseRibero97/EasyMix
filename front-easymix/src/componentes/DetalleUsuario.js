import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function UsuarioDetail() {
  const { id } = useParams(); // Obtiene el ID de la cuenta desde la URL
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8094/api/usuario/registros/${id}`)
      .then(response => setUsuario(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!usuario) return <p>Cargando...</p>;

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
            </tr>
          </thead>
          <tbody>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
          </tbody>
        </table>
        <button onClick={() => navigate(`/añadir-producto/${id}`)}>Añadir Producto</button>
        <button onClick={() => navigate(`/usuario`)}>Lista de usuarios</button>
        <button onClick={() => navigate(`/producto`)}>Lista de Productos</button>
      </div>
    </div>
  );
}

export default UsuarioDetail;