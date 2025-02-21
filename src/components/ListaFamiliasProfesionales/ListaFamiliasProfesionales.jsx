// librerías
import React, { useEffect, useState } from 'react';
// componenetes
import BotonFamiliaProfesional from '../BotonFamiliaProfesional/BotonFamiliaProfesional';
// servicios
import getFamiliasProfesionales from '../../services/getFamiliasProfesionales';
import useFamiliasProfesionales from '../../hooks/useFamiliasProfesionales';

const ListaFamiliasProfesionales = () => {

    const listaFamilias = useFamiliasProfesionales();

    function obtenerBotonesFamilias(familia) {
        return <BotonFamiliaProfesional key={familia.id} id={familia.codigo} nombre={familia.nombre}></BotonFamiliaProfesional>
    }

    return (
        <>
            {listaFamilias.familiasProfesionales.map(obtenerBotonesFamilias)}
        </>
    );

}

export default ListaFamiliasProfesionales;
