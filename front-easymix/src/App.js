import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './componentes/FormularioLogin';


function App() {
  return (
    <Router>
      <div>
        <h1>EasyMix</h1>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
