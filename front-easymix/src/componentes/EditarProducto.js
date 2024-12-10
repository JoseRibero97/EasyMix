import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditarProducto() {
    const {id} = useParams();
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [marca, setMarca] = useState('');
    const [presentacion, setPresentacion] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [medida, setMedida] = useState('');
    const [proveedor, setProveedor] = useState('');
    const [usuario, setUsuario] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        // Obtener los detalles de la cuenta
        axios.get(`http://localhost:8094/api/producto/list/${id}`)
          .then(response => {
            const producto = response.data;
            setProveedor(producto.idProveedor.id);
            setUsuario(producto.idUsuario.id);
            setNombre(producto.nombre);
            setDescripcion(producto.descripcion);
            setMarca(producto.marca);
            setPresentacion(producto.presentacion);
            setCantidad(producto.cantidad);
            setMedida(producto.medida);
          })
          .catch(error => {
            console.error('Error al obtener los detalles del producto', error);
          });
      }, [id]);

      const handleSubmit = async (event) => {
        event.preventDefault();
        try {

          const UsuarioResponse = await axios.get(`http://localhost:8094/api/usuario/registros/${usuario}`)

          const ProveedorResponse = await axios.get(`http://localhost:8094/api/proveedor/registros/${proveedor}`)
          
          const response = await axios.put(`http://localhost:8094/api/producto/${id}`, {
            idUsuario: UsuarioResponse.data,
            idProveedor: ProveedorResponse.data,
            nombre,
            descripcion,
            marca,
            presentacion,
            cantidad,
            medida
          });
          console.log('Producto actualizado:', response.data);
          navigate(`/producto/${id}`);
        } catch (error) {
          console.error('Error al actualizar la cuenta:', error);
        }
      };

      return (
        <>
          <h1>Añadir Producto</h1>
          <div className='table-container'>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Id Usuario:</label>
                <input
                  type="number"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  required
                />
            </div>
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
            <button type="submit">Confirmar</button>
            <button onClick={() => navigate(-1)}>Cancelar</button>
        </form>
        </div>
    </>
    );
}

export default EditarProducto;