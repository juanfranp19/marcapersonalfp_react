// librerías
import React from 'react';
// componentes
import ListaFamiliasProfesionales from '../../components/ListaFamiliasProfesionales/ListaFamiliasProfesionales';
import ResultadosBusquedaProyectos from '../../components/ResultadosBusquedaProyectos/ResultadosBusquedaProyectos';

const Proyectos = () => {
    return (
        <div className="row">
            <div className="col-12">
                <ListaFamiliasProfesionales></ListaFamiliasProfesionales>
                <ResultadosBusquedaProyectos></ResultadosBusquedaProyectos>
            </div>
        </div>
    );
}

export default Proyectos;
