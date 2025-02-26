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
        <div className='row lista-filtrado-botones'>
            <div className="col-12">
                <h1>Filtra por perfil competencial</h1>
                {listaCompetencias.map(obtenerBotonesCompetencias)}
            </div>
        </div>
    );
}

export default ListaPerfilesCompetenciales;
