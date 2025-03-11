// librerías
import { useEffect, useState } from "react";
// servicios
import getFamiliasProfesionales from "../services/getFamiliasProfesionales";

const useFamiliasProfesionales = () => {

    const [familiasProfesionales, setFamiliasProfesionales] = useState([]);
    const [cargando, setCargando] = useState(false);

    function obtenerFamiliasProfesionales() {
        setCargando(true);
        getFamiliasProfesionales()
            .then(datos => {
                setCargando(false);
                setFamiliasProfesionales(datos);
            });
    }

    useEffect(obtenerFamiliasProfesionales, []);

    return ({ familiasProfesionales, cargando });
}

export default useFamiliasProfesionales;
