import React from 'react';
import Cabecera from './components/Cabecera/Cabecera';
import Home from './pages/Home';

function App() {

  return (
    <div className='container-fluid'>
      <Cabecera></Cabecera>
      <Home></Home>
    </div>
  );
}

export default App;
