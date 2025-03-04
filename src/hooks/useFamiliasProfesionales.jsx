// librerías
import { useEffect, useState } from "react";
// servicios
import getFamiliasProfesionales from "../services/getFamiliasProfesionales";

const useFamiliasProfesionales = () => {

    const [familiasProfesionales, setFamiliasProfesionales] = useState([]);

    function obtenerFamiliasProfesionales() {
        getFamiliasProfesionales()
            .then(datos => {
                setFamiliasProfesionales(datos);
            });
    }

    useEffect(obtenerFamiliasProfesionales, []);

    return familiasProfesionales;
}

export default useFamiliasProfesionales;
