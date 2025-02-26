// librerías
import { useEffect, useState } from 'react';
// servicios
import getProyectos from '../services/getProyectos';

const INITIAL_PAGE = 0;

const useProyectos = () => {

    const [proyectos, setProyectos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);

    function obtenerProyectos() {
        setCargando(true);
        getProyectos({page: page})
            .then(datos => {
                setProyectos(datos);
                setCargando(false);
            });
    }

    useEffect(obtenerProyectos, [page]);

    return { cargando, proyectos, setPage };
}

export default useProyectos;
