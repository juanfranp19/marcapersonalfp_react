import React from 'react';

import Cabecera from './components/Cabecera/Cabecera';
import Contenido from './components/Contenido/Contenido';


function App() {

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-12">
          <Cabecera></Cabecera>
        </div>
      </div>
      
      <Contenido></Contenido>
    </div>
  );
}

export default App;
