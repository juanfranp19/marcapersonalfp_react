// librerías
import { useContext, useEffect, useState } from 'react';
// componenetes
import BotonFiltrador from '../BotonFiltrador/BotonFiltrador';
import CheckboxDesplegable from '../CheckboxDesplegable/CheckboxDesplegable';
import AjaxLoader from '../AjaxLoader/AjaxLoader';
// hooks
import useFamiliasProfesionales from '../../hooks/useFamiliasProfesionales';

import traducciones from '../../mock-traducciones';
import TraduccionContext from '../../contexts/TraduccionContext';

const ListaFamiliasProfesionales = (props) => {

    const idioma = useContext(TraduccionContext);
    const { familiasProfesionales, cargando } = useFamiliasProfesionales();
    const [familiasFiltradas, setFamiliasFiltradas] = useState([]);
    const [checked, setchecked] = useState(false);

    function handleFamilias(e) {

        if (e.target.checked) {
            const resultadoFamilias = familiasProfesionales.filter((familia) => familia.codigo === e.target.id);
            setFamiliasFiltradas([...familiasFiltradas, ...resultadoFamilias]);

        } else {
            const resultadoFamilias = familiasFiltradas.filter((familia) => familia.codigo !== e.target.id);
            setFamiliasFiltradas([...resultadoFamilias]);
        }
    }

    function mandarFamiliasFiltradas() {
        props.familiasFiltradas(familiasFiltradas);
    }

    function obtenerBotonesFamilias(familia) {
        if (checked) return (
            <BotonFiltrador key={familia.id} id={familia.codigo} nombre={familia.nombre} onChange={handleFamilias}></BotonFiltrador>
        );
    }

    function isChecked() {
        setchecked(!checked);
    }

    useEffect(mandarFamiliasFiltradas, [familiasFiltradas]);

    return (
        <div className='row lista-filtrado-botones'>
            <div className="col-12">
                <h1>{traducciones[idioma].empresa_filtros.familias_profesionales} <CheckboxDesplegable isChecked={isChecked}></CheckboxDesplegable></h1>
                {
                    cargando
                        ? <AjaxLoader></AjaxLoader>
                        : familiasProfesionales.map(obtenerBotonesFamilias)
                }
            </div>
        </div>
    );

}

export default ListaFamiliasProfesionales;
