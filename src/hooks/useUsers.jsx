// librerías
import { useEffect, useState } from 'react';
// hooks
import useCount from '../hooks/useCount';
// servicios
import getUsers from '../services/getUsers';

const useUsers = () => {

    const [users, setUsers] = useState([]);
    const countUsers = useCount('users');

    function obtenerUsers() {
        getUsers(countUsers)
            .then(datos => {
                setUsers(datos);
            });
    }

    useEffect(obtenerUsers, []);

    return users;
}

export default useUsers;
