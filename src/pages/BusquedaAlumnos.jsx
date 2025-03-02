// librerías
import React, { useState } from 'react';
// componentes
import ListaPerfilesCompetenciales from '../components/ListaPerfilesCompetenciales/ListaPerfilesCompetenciales';
import ListaFamiliasProfesionales from '../components/ListaFamiliasProfesionales/ListaFamiliasProfesionales';
import ResultadosBusquedaAlumnos from '../components/ResultadosBusquedaAlumnos/ResultadosBusquedaAlumnos';

const Alumnos = () => {

    const [familiasFiltradas, setFamiliasFiltradas] = useState([]);
    const [competenciasFiltradas, setCompetenciasFiltradas] = useState([]);

    function manejarFamiliasFiltradas(familias) {
        if (Array.isArray(familias)) setFamiliasFiltradas(familias);
    }

    function manejarCompetenciasFiltradas(competencias) {
        if (Array.isArray(competencias)) setCompetenciasFiltradas(competencias);
    }

    console.log('familias filtradas', familiasFiltradas);
    console.log('competencias filtradas', competenciasFiltradas);

    return (
        <div className="row">
            <div className="col-12">
                <ListaPerfilesCompetenciales competenciasFiltradas={manejarCompetenciasFiltradas}></ListaPerfilesCompetenciales>
                <ListaFamiliasProfesionales familiasFiltradas={manejarFamiliasFiltradas}></ListaFamiliasProfesionales>
                <ResultadosBusquedaAlumnos competenciasFiltradas={competenciasFiltradas} familiasFiltradas={familiasFiltradas}></ResultadosBusquedaAlumnos>
            </div>
        </div>
    );
}

export default Alumnos;
