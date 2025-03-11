// librerías
import { useEffect, useState } from 'react';
// hooks
import useCount from './useCount';
// servicios
import getProyectos from '../services/getProyectos';

const INITIAL_PAGE = 0;

const useProyectos = () => {

    const [proyectos, setProyectos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [hasMore, setHasMore] = useState(true);
    const numProyectos = useCount('proyectos');

    function obtenerProyectos() {
        setCargando(true);
        getProyectos({page: page})
            .then(datos => {
                if (datos.length >= numProyectos.count) {
                    setHasMore(false);
                    console.log('No hay más proyectos');
                } else {
                    setProyectos(datos);
                }
                setCargando(false);
                //console.log('datos', datos.length);
                //console.log('numProyectos', numProyectos.count);
            });
    }

    useEffect(obtenerProyectos, [page]);

    return ({ cargando, proyectos, setPage, hasMore });
}

export default useProyectos;
