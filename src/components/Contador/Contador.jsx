// librerías
import React, { useContext, useEffect, useState } from 'react';
// hooks
import useCount from '../../hooks/useCount';
// contextos
import TraduccionContext from '../../contexts/TraduccionContext';
// mock
import traducciones from '../../mock-traducciones';

const Contador = (props) => {

    const tabla = props.tabla;
    const [titulo, setTitulo] = useState();
    const count = useCount(tabla);
    const idioma = useContext(TraduccionContext);

    function obtenerTitulo() {
        switch (tabla) {
            case 'empresas':
                setTitulo(traducciones[idioma].contador.empresa);
                break;
            case 'proyectos':
                setTitulo(traducciones[idioma].contador.proyectos);
                break;
            case 'users':
                setTitulo(traducciones[idioma].contador.alumnos);
                break;
            default:
                break;
        }
    }

    useEffect(obtenerTitulo, [idioma]);

    return (
        <div className='row'>
            <div className='col-12'>
                <h1>{titulo}</h1>
            </div>
            <div className='col-12'>
                <span className='numContador'>{count.count}</span>
            </div>
        </div>
    );
}

export default Contador;
