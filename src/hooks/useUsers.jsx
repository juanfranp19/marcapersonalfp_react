// librerías
import { useEffect, useState } from 'react';
// servicios
import getUsers from '../services/getUsers';
import useCount from './useCount';

const INITIAL_PAGE = 0;

const useUsers = () => {

    const [users, setUsers] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [hasMore, setHasMore] = useState(true);
    const numUsers = useCount('users');

    function obtenerUsers() {
        setCargando(true);
        getUsers({page: page})
            .then(datos => {
                if (datos.length >= numUsers.count) {
                    setHasMore(false);
                    console.log('No hay más usuarios');
                } else {
                    setUsers(datos);
                }
                setCargando(false);
            });
    }

    useEffect(obtenerUsers, [page]);

    return { cargando, users, setPage, hasMore };
}

export default useUsers;
