// componentes
import BotonFiltrador from '../BotonFiltrador/BotonFiltrador';
// hooks
import useCompetencias from '../../hooks/useCompetencias';
import { useEffect, useState } from 'react';

const ListaPerfilesCompetenciales = (props) => {

    const listaCompetencias = useCompetencias();

    const [competenciasSeleccionadas, setCompetenciasSeleccionadas] = useState({});
    const [competenciasFiltradas, setCompetenciasFiltradas] = useState([]);
    
    function handleCompetencias(e) {
        setCompetenciasSeleccionadas({ ...competenciasSeleccionadas, [e.target.nombre]: e.target.checked });

        if (e.target.checked) {
            const resultadoCompetencias = listaCompetencias.filter((competencia) => competencia.nombre === e.target.nombre);
            setCompetenciasFiltradas([...competenciasFiltradas, ...resultadoCompetencias]);
        } else {
            const resultadoCompetencias = listaCompetencias.filter((competencia) => competencia.nombre !== e.target.nombre);
            setCompetenciasFiltradas([...resultadoCompetencias]);
        }
    }

    function mandarCompetenciasFiltradas() {
        props.competenciasFiltradas(competenciasFiltradas);
    }

    function obtenerBotonesCompetencias(competencia) {
        return (
            <BotonFiltrador key={competencia.id} id={competencia.id} nombre={competencia.nombre} onChange={handleCompetencias}></BotonFiltrador>
        );
    }

    

    useEffect(mandarCompetenciasFiltradas, [competenciasFiltradas]);
    
    return (
        <div className='row lista-filtrado-botones'>
            <div className="col-12">
                <h1>Filtra por perfil competencial</h1>
                {listaCompetencias.map(obtenerBotonesCompetencias)}
            </div>
        </div>
    );
}

export default ListaPerfilesCompetenciales;
