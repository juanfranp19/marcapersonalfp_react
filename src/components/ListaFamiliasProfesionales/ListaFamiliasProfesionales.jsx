// librerías
import React from 'react';
// componenetes
import BotonFamiliaProfesional from '../BotonFamiliaProfesional/BotonFamiliaProfesional';
// hooks
import useFamiliasProfesionales from '../../hooks/useFamiliasProfesionales';

const ListaFamiliasProfesionales = () => {

    const listaFamilias = useFamiliasProfesionales();

    function obtenerBotonesFamilias(familia) {
        return <BotonFamiliaProfesional key={familia.id} id={familia.codigo} nombre={familia.nombre}></BotonFamiliaProfesional>
    }

    return (
        <>
            {listaFamilias.map(obtenerBotonesFamilias)}
        </>
    );

}

export default ListaFamiliasProfesionales;
