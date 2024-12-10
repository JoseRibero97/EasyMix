import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FormularioLogin.css';

const LoginForm = ({ onLoginSuccess }) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Datos enviados: ", { email: correo, contrasena});
      const response = await axios.post('http://localhost:8094/api/usuario/login', { email: correo, contrasena });
      console.log("Respuesta del servidor: ", response.data);
      onLoginSuccess(response.data.token);
      const usuario = response.data.Usuario;
      navigate(`/usuario/${usuario.id}`);
    } catch (err) {
      console.error('Error al autenticar: ', err);
      setError('Error de autenticación. Por favor, verifica tus credenciales.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar Sesión</h2>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id='correo'
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id='contrasena'
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
