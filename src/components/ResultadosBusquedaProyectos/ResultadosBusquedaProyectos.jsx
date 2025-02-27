// librerías
import InfiniteScroll from 'react-infinite-scroll-component';
// hooks
import useProyectos from '../../hooks/useProyectos';
// componentes
import ProyectoMinCard from '../ProyectoMincard/ProyectoMincard';

const ResultadosBusquedaProyectos = (props) => {

    const { cargando, proyectos, setPage } = useProyectos();

    function obtenerNextPage() {
        setPage(prevPage => prevPage + 1);
    }

    function obtenerMiniCardProyectos() {
        return proyectos.map(proyecto => {

            let aparece = false;

            proyecto.ciclos.some(c => {
                props.familiasFiltradas.some(familia => {
                    if (c.codFamilia === familia.codigo) aparece = true;
                });
            });

            if (props.familiasFiltradas.length < 1) aparece = true;

            if (!aparece) return null;

            return (
                cargando 
                    ? <p key={proyecto.id}>Cargando...</p>
                    : <ProyectoMinCard
                        key={proyecto.id}
                        imagen={proyecto.imagen}
                        nombre={proyecto.nombre}
                        alumnos={proyecto.participantes.map(p => p.nombre).join(', ')}
                        tutor={proyecto.docente_id}
                        ciclos={
                            proyecto.ciclos.length < 1
                                ? 'No hay ciclos'
                                : proyecto.ciclos.map(c => c.codCiclo).join(' | ')
                        }
                    ></ProyectoMinCard>
            );
        });
    }

    return (
        <>
            <InfiniteScroll
                dataLength={proyectos.length}
                next={obtenerNextPage}
                hasMore={true}
            >
                <div className='row justify-content-center resultados-busqueda'>
                    {obtenerMiniCardProyectos()}
                </div>
            </InfiniteScroll>
        </>
    );
}

export default ResultadosBusquedaProyectos;
