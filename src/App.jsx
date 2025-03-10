// librerías
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// componentes
import Cabecera from './components/Cabecera/Cabecera';
// páginas
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import CentroEducativo from './pages/CentroEducativo';
import Alumno from './pages/Alumno';
import BusquedaProyectos from './pages/BusquedaProyectos';
import BusquedaAlumnos from './pages/BusquedaAlumnos';
// contextos
import TraduccionContext from './contexts/TraduccionContext';

function App() {

    const [idiomaSeleccionado, setIdiomaSeleccionado] = useState('es');

    function manejarSeleccionIdioma(idioma) {
        setIdiomaSeleccionado(idioma);
    }

    return (

        <div className='container-fluid'>
            <TraduccionContext.Provider value={idiomaSeleccionado}>

                <Cabecera manejarSeleccionIdioma={manejarSeleccionIdioma}></Cabecera>

                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>

                    <Route path='/empresa' element={<Empresa></Empresa>}></Route>
                    <Route path='/empresa/proyectos' element={<BusquedaProyectos></BusquedaProyectos>}></Route>
                    <Route path='/empresa/alumnos' element={<BusquedaAlumnos></BusquedaAlumnos>}></Route>

                    <Route path='/centroeducativo' element={<CentroEducativo></CentroEducativo>}></Route>

                    <Route path='/alumno' element={<Alumno></Alumno>}></Route>
                </Routes>
                
            </TraduccionContext.Provider>
        </div>
    );
}

export default App;
