import { useEffect, useState } from 'react';
import getCount from '../../services/getCount';

const Contador = (props) => {

    const cual = props.cual;
    const [titulo, setTitulo] = useState();
    const [count, setCount] = useState([]);

    function obtenerCount() {
        getCount(cual)
            .then(count => {
                setCount(count);
            });
    }

    function obtenerTitulo() {
        switch (cual) {
            case 'empresas':
                setTitulo('Empresas');
                break;
            case 'proyectos':
                setTitulo('Proyectos');
                break;
            case 'users':
                setTitulo('Alumnos');
                break;
            default:
                break;
        }
    }

    useEffect(obtenerCount, []);
    useEffect(obtenerTitulo, []);

    return (
        <div className="row">
            <div className="col-12">
                <h1>{titulo}</h1>
            </div>
            <div className="col-12">
                <span className='numContador'>{count.count}</span>
            </div>
        </div>
    );
}

export default Contador;
