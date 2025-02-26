// librerías
import React from 'react';
// componenetes
import BotonFiltrador from '../BotonFiltrador/BotonFiltrador';
// hooks
import useFamiliasProfesionales from '../../hooks/useFamiliasProfesionales';

const ListaFamiliasProfesionales = () => {

    const listaFamilias = useFamiliasProfesionales();

    function obtenerBotonesFamilias(familia) {
        return (
            <BotonFiltrador key={familia.id} id={familia.codigo} nombre={familia.nombre}></BotonFiltrador>
        );
    }

    return (
        <>
            {listaFamilias.map(obtenerBotonesFamilias)}
        </>
    );

}

export default ListaFamiliasProfesionales;
