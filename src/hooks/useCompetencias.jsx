// libreías
import { useEffect, useState } from 'react';
// servicios
import getCompetencias from '../services/getCompetencias';

const useCompetencias = () => {

    const [competencias, setCompetencias] = useState([]);

    function obtenerCompetencias() {
        getCompetencias()
            .then(competencias => {
                setCompetencias(competencias);
            });
    }

    useEffect(obtenerCompetencias, []);

    return competencias;
}

export default useCompetencias;
