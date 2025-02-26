// librerías
import InfiniteScroll from 'react-infinite-scroll-component';
// hooks
import useProyectos from '../../hooks/useProyectos';
// componentes
import ProyectoMinCard from '../ProyectoMincard/ProyectoMincard';

const ResultadosBusquedaProyectos = () => {

    const { cargando, proyectos, setPage } = useProyectos();

    function obtenerNextPage() {
        setPage(prevPage => prevPage + 1);
    }

    function obtenerMiniCardProyectos() {
        return proyectos.map(proyecto => {
            return (
                cargando 
                    ? <p>Cargando...</p>
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
                <div className='row justify-content-center'>
                    {obtenerMiniCardProyectos()}
                </div>
            </InfiniteScroll>
        </>
    );
}

export default ResultadosBusquedaProyectos;
