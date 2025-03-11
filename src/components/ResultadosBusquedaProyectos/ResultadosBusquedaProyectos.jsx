// librerías
import InfiniteScroll from 'react-infinite-scroll-component';
// hooks
import useProyectos from '../../hooks/useProyectos';
// componentes
import ProyectoMinCard from '../ProyectoMincard/ProyectoMincard';
import AjaxLoader from '../AjaxLoader/AjaxLoader';

const ResultadosBusquedaProyectos = (props) => {

    const { proyectos, setPage, hasMore } = useProyectos();

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
                <ProyectoMinCard
                    key={proyecto.id}
                    imagen={proyecto.imagen}
                    nombre={proyecto.nombre}
                    alumnos={proyecto.participantes.map(p => p.nombre).join(', ')}
                    tutor={proyecto.docente_id}
                    ciclos={proyecto.ciclos}
                ></ProyectoMinCard>
            );
        });
    }

    return (
        <>
            <InfiniteScroll
                dataLength={proyectos.length}
                next={obtenerNextPage}
                hasMore={hasMore}
                loader={<AjaxLoader></AjaxLoader>}
            >
                <div className='row justify-content-center resultados-busqueda'>
                
                    {obtenerMiniCardProyectos()}
                
                </div>
            </InfiniteScroll>
        </>
    );
}

export default ResultadosBusquedaProyectos;
