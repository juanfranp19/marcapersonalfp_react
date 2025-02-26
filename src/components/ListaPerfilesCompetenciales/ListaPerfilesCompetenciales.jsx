// componentes
import BotonFiltrador from '../BotonFiltrador/BotonFiltrador';
// hooks
import useCompetencias from '../../hooks/useCompetencias';

const ListaPerfilesCompetenciales = () => {

    const listaCompetencias = useCompetencias();

    function obtenerBotonesCompetencias(competencia) {
        return (
            <BotonFiltrador key={competencia.id} id={competencia.id} nombre={competencia.nombre}></BotonFiltrador>
        );
    }
    
    return (
        <>
            {listaCompetencias.map(obtenerBotonesCompetencias)}
        </>
    );
}

export default ListaPerfilesCompetenciales;
