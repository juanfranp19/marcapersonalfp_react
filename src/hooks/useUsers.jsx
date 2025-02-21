// servicios
import { useEffect, useState } from 'react';
import getUsers from '../services/getUsers';

const useUsers = () => {

    const [users, setUsers] = useState([]);

    function obtenerUsers() {
        getUsers()
            .then(datos => {
                setUsers(datos);
            });
    }

    useEffect(obtenerUsers, []);

    return { users };
}

export default useUsers;
