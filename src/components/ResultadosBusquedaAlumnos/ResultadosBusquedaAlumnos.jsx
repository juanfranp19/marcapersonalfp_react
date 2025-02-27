// librerías
import InfiniteScroll from 'react-infinite-scroll-component';
// hooks
import useUsers from '../../hooks/useUsers';
// componentes
import AlumnoMincard from '../AlumnoMincard/AlumnoMincard';

const ResultadosBusquedaAlumnos = (props) => {

    const { cargando, users, setPage } = useUsers();

    function obtenerNextPage() {
        setPage(prevPage => prevPage + 1);
    }

    function obtenerMiniCardAlumnos() {

        return users.map(user => {

            let apareceCompetencia = false;
            let apareceFamilia = false;

            user.competencias.some((competencia) => {
                props.competenciasFiltradas.some((competenciaFiltrada) => {
                    if (competencia.nombre === competenciaFiltrada.nombre) apareceCompetencia = true;
                })
            });

            user.ciclos.some((ciclo) => {
                props.familiasFiltradas.some((familiaFiltrada) => {
                    if (ciclo.codFamilia === familiaFiltrada.codigo) apareceFamilia = true;
                })
            });

            if (props.competenciasFiltradas.lenght < 1) apareceCompetencia = true;
            if (props.familiasFiltradas.length < 1) apareceFamilia = true;

            if (!apareceCompetencia && !apareceFamilia) return null;

            return (
                cargando
                    ? <p key={user.id}>Cargando...</p>
                    : <AlumnoMincard
                        key={user.id}
                        imagen={user.imagen}
                        nombre={user.nombre}
                        apellidos={user.apellidos}
                        idiomas={user.idiomas}
                        ciclos={user.ciclos}
                        sobre_mi={user.sobre_mi}
                    ></AlumnoMincard>
            );
        });
    }

    return (
        <div className='row'>
            <InfiniteScroll
                dataLength={users.length}
                next={obtenerNextPage}
                hasMore={true}
            >
                <div className='row justify-content-center resultados-busqueda'>
                    {obtenerMiniCardAlumnos()}
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default ResultadosBusquedaAlumnos;
