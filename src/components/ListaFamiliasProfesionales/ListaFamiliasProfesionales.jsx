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
        <div className='row lista-filtrado-botones'>
            <div className="col-12">
                <h1>Filtra por familia profesional</h1>
                {listaFamilias.map(obtenerBotonesFamilias)}
            </div>
        </div>
    );

}

export default ListaFamiliasProfesionales;
