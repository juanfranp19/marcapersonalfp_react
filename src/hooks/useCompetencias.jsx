// libreías
import { useEffect, useState } from 'react';
// servicios
import getCompetencias from '../services/getCompetencias';

const useCompetencias = () => {

    const [competencias, setCompetencias] = useState([]);
    const [cargando, setCargando] = useState(false);

    function obtenerCompetencias() {
        setCargando(true);
        getCompetencias()
            .then(competencias => {
                setCargando(false);
                setCompetencias(competencias);
            });
    }

    useEffect(obtenerCompetencias, []);

    return ({ competencias, cargando });
}

export default useCompetencias;
