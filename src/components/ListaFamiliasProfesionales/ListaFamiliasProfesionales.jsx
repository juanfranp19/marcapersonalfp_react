// librerías
import React, { useEffect, useState } from 'react';
// componenetes
import BotonFamiliaProfesional from '../BotonFamiliaProfesional/BotonFamiliaProfesional';
// servicios
import getFamiliasProfesionales from '../../services/getFamiliasProfesionales';

const ListaFamiliasProfesionales = () => {

    const [listaFamilias, setListaFamilias] = useState([]);

    function obtenerFamiliasProfesionales() {
        getFamiliasProfesionales()
            .then(datos => {
                setListaFamilias(datos);
            });
    }

    useEffect(obtenerFamiliasProfesionales, []);

    function obtenerBotonesFamilias() {
        return listaFamilias.map(familia => {
            return (
                <BotonFamiliaProfesional key={familia.id} id={familia.codigo} nombre={familia.nombre}></BotonFamiliaProfesional>
            );
        });
    }

    return (
        <>
            {obtenerBotonesFamilias()}
        </>
    );

}

export default ListaFamiliasProfesionales;
