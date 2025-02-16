// librerías
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// componentes
import Cabecera from './components/Cabecera/Cabecera';
// páginas
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import CentroEducativo from './pages/CentroEducativo';
import Alumno from './pages/Alumno';

function App() {

  return (
    <div className='container-fluid'>
      <Cabecera></Cabecera>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/empresa' element={<Empresa></Empresa>}></Route>
        <Route path='/centroeducativo' element={<CentroEducativo></CentroEducativo>}></Route>
        <Route path='/alumno' element={<Alumno></Alumno>}></Route>
      </Routes>
    </div>
  );
}

export default App;
