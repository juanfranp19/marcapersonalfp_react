// librerías
import { useEffect, useState } from 'react';
// componenetes
import BotonFiltrador from '../BotonFiltrador/BotonFiltrador';
// hooks
import useFamiliasProfesionales from '../../hooks/useFamiliasProfesionales';

const ListaFamiliasProfesionales = (props) => {

    const listaFamilias = useFamiliasProfesionales();

    const [familiasSeleccionadas, setFamiliasSeleccionadas] = useState({});
    const [familiasFiltradas, setFamiliasFiltradas] = useState([]);

    function handleFamilias(e) {
        setFamiliasSeleccionadas({ ...familiasSeleccionadas, [e.target.id]: e.target.checked });

        if (e.target.checked) {
            const resultadoFamilias = listaFamilias.filter((familia) => familia.codigo === e.target.id);
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
        return (
            <BotonFiltrador key={familia.id} id={familia.codigo} nombre={familia.nombre} onChange={handleFamilias}></BotonFiltrador>
        );
    }

    useEffect(mandarFamiliasFiltradas, [familiasFiltradas]);

    return (
        <div className='row lista-filtrado-botones'>
            <div className="col-12">
                <h1>Filtra por familia profesional</h1>
                {listaFamilias.map(obtenerBotonesFamilias)}
            </div>
        </div>
    );

}

export default ListaFamiliasProfesionales;
