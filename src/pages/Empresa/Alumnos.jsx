// librerías
import React from 'react';
// componentes
import ListaFamiliasProfesionales from '../../components/ListaFamiliasProfesionales/ListaFamiliasProfesionales';
import ResultadosBusquedaAlumnos from '../../components/ResultadosBusquedaAlumnos/ResultadosBusquedaAlumnos';

const Alumnos = () => {
    return (
        <div className="row">
            <div className="col-12">
                {/* <ListaPerfilesCompetenciales></ListaPerfilesCompetenciales> */}
                <ListaFamiliasProfesionales></ListaFamiliasProfesionales>
                <ResultadosBusquedaAlumnos></ResultadosBusquedaAlumnos>
            </div>
        </div>
    );
}

export default Alumnos;
