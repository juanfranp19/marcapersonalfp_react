import React from 'react';
import Cabecera from './components/Cabecera/Cabecera';
import Contenido from './components/Contenido/Contenido';

function App() {

  return (
    <div className='container-fluid'>
      <Cabecera></Cabecera>
      <Contenido></Contenido>
    </div>
  );
}

export default App;
