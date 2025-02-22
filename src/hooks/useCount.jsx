// librerías
import { useEffect, useState } from 'react';
// servicios
import getCount from '../services/getCount';

const useCount = (tabla) => {

    const [count, setCount] = useState([]);

    function obtenerCount() {
        getCount(tabla)
            .then(count => {
                setCount(count);
            });
    }

    useEffect(obtenerCount, []);

    return count;
}

export default useCount;
