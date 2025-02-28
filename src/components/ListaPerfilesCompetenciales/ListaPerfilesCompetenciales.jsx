// librerías
import { useEffect, useState } from 'react';
// componentes
import BotonFiltrador from '../BotonFiltrador/BotonFiltrador';
// hooks
import useCompetencias from '../../hooks/useCompetencias';

const ListaPerfilesCompetenciales = (props) => {

    const listaCompetencias = useCompetencias();
    const [competenciasFiltradas, setCompetenciasFiltradas] = useState([]);
    
    function handleCompetencias(e) {

        if (e.target.checked) {
            const resultadoCompetencias = listaCompetencias.filter((competencia) => +competencia.id === +e.target.id);
            
            setCompetenciasFiltradas([...competenciasFiltradas, ...resultadoCompetencias]);
        } else {
            const resultadoCompetencias = competenciasFiltradas.filter((competencia) => +competencia.id !== +e.target.id);
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
