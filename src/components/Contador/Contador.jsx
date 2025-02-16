// librerías
import React, { useContext, useEffect, useState } from 'react';
// servicios
import getCount from '../../services/getCount';
// contextos
import TraduccionContext from '../../contexts/TraduccionContext';
// mock
import traducciones from '../../mock-traducciones';

const Contador = (props) => {

    const cual = props.cual;
    
    const [titulo, setTitulo] = useState();
    const [count, setCount] = useState([]);

    const idioma = useContext(TraduccionContext);

    function obtenerCount() {
        getCount(cual)
            .then(count => {
                setCount(count);
            });
    }

    function obtenerTitulo() {
        switch (cual) {
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

    useEffect(() => (
        obtenerCount(),
        obtenerTitulo()
    ), [idioma]);

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
