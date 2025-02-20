// librerías
import React from 'react';
// componentes
import MenuEmpresa from '../../components/MenuEmpresa/MenuEmpresa';
import { Route, Routes } from 'react-router-dom';
import Proyectos from './Proyectos';
import Alumnos from './Alumnos';

const Empresa = () => {
    return (
        <div className="row">
            <div className="col-12">
                <MenuEmpresa></MenuEmpresa>

                <Routes>
                    <Route path='proyectos' element={<Proyectos></Proyectos>}></Route>
                    <Route path='alumnos' element={<Alumnos></Alumnos>}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Empresa;
