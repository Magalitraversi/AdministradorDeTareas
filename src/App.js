import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import NuevaCuenta from './components/NuevaCuenta';
import ProyectoState from './context/proyecto/proyectoState';
import Proyectos from './proyectos/Proyectos';

function App() {
  return (
    <ProyectoState>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/nueva-cuenta' element={<NuevaCuenta />} />
          <Route path='/proyectos' element={<Proyectos />} />
        </Routes>
      </BrowserRouter>
    </ProyectoState>

  );
}

export default App;
