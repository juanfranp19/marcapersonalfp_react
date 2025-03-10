// librerías
import React, { useState } from 'react';
// componentes
import ListaFamiliasProfesionales from '../components/ListaFamiliasProfesionales/ListaFamiliasProfesionales';
import ResultadosBusquedaProyectos from '../components/ResultadosBusquedaProyectos/ResultadosBusquedaProyectos';
import MenuEmpresa from '../components/MenuEmpresa/MenuEmpresa';

const Proyectos = () => {

    const [familiasFiltradas, setFamiliasFiltradas] = useState([]);

    function manejarFamiliasFiltradas(familias) {
        if (Array.isArray(familias)) setFamiliasFiltradas(familias);
    }

    console.log(familiasFiltradas);

    return (
        <>
            <MenuEmpresa></MenuEmpresa>

            <div className="row">
                <div className="col-12">
                    <ListaFamiliasProfesionales familiasFiltradas={manejarFamiliasFiltradas}></ListaFamiliasProfesionales>
                    <ResultadosBusquedaProyectos familiasFiltradas={familiasFiltradas}></ResultadosBusquedaProyectos>
                </div>
            </div>
        </>
    );
}

export default Proyectos;
