// librerías
import { useEffect, useState } from 'react';
// servicios
import getUsers from '../services/getUsers';

const INITIAL_PAGE = 0;

const useUsers = () => {

    const [users, setUsers] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);

    function obtenerUsers() {
        setCargando(true);
        getUsers({page: page})
            .then(datos => {
                setUsers(datos);
                setCargando(false);
            });
    }

    useEffect(obtenerUsers, [page]);

    return { cargando, users, setPage };
}

export default useUsers;
