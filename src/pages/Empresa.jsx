// librerías
import React from 'react';
// componentes
import MenuEmpresa from '../components/MenuEmpresa/MenuEmpresa';
import { Route, Routes } from 'react-router-dom';
import BusquedaProyectos from './BusquedaProyectos';
import BusquedaAlumnos from './BusquedaAlumnos';

const Empresa = () => {
    return (
        <div className="row">
            <div className="col-12">
                <MenuEmpresa></MenuEmpresa>

                <Routes>
                    <Route path='proyectos' element={<BusquedaProyectos></BusquedaProyectos>}></Route>
                    <Route path='alumnos' element={<BusquedaAlumnos></BusquedaAlumnos>}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Empresa;
