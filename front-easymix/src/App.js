import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './componentes/FormularioLogin';
import UsuarioDetail from './componentes/DetalleUsuario';
import UsuarioList from './componentes/ListaUsuarios';
import FormularioProducto from './componentes/FormularioProducto';
import ProductoList from './componentes/ListaProductos';
import ProductoDetail from './componentes/DetalleProducto';


function App(){
  const [token, setToken] = useState(''); 
  const handleLoginSuccess = (token) => { 
    setToken(token); 
    console.log("Token recibido: ", token); 
  };
  return (
    <Router>
      <div>
        <h1>EasyMix</h1>
        <Routes>
          <Route path="/" element={<LoginForm onLoginSuccess={handleLoginSuccess}/>}/>
          <Route path="/usuario/:id" element={<UsuarioDetail/>}/>
          <Route path="/usuario" element={<UsuarioList/>}/>
          <Route path='/añadir-producto/:id' element={<FormularioProducto/>}/>
          <Route path='/producto' element={<ProductoList/>}/>
          <Route path='/producto/:id' element={<ProductoDetail/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
