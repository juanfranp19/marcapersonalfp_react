// librerías
import React, { useEffect, useState } from 'react';
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

    return (
        <>
            
        </>
    );

}

export default ListaFamiliasProfesionales;
