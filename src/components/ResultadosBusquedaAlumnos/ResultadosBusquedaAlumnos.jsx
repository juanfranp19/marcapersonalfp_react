// librerías
import InfiniteScroll from 'react-infinite-scroll-component';
// hooks
import useUsers from '../../hooks/useUsers';
// componentes
import AlumnoMincard from '../AlumnoMincard/AlumnoMincard';
import AjaxLoader from '../AjaxLoader/AjaxLoader';
import { useEffect } from 'react';

const ResultadosBusquedaAlumnos = (props) => {

    const { users, setPage, hasMore } = useUsers();

    function obtenerNextPage() {
        setPage(prevPage => prevPage + 1);
    }

    function obtenerMiniCardAlumnos() {

        return users.map(user => {

            let apareceCompetencia = false;
            let apareceFamilia = false;

            if (props.competenciasFiltradas.length > 0) {
                user.competencias.some((competencia) => {
                    props.competenciasFiltradas.some((competenciaFiltrada) => {

                        if (competencia.id === competenciaFiltrada.id) apareceCompetencia = true;
                    })
                });
            } else {
                apareceCompetencia = true;
            }

            if (props.familiasFiltradas.length > 0) {
                user.ciclos.some((ciclo) => {
                    props.familiasFiltradas.some((familiaFiltrada) => {

                        if (ciclo.codFamilia === familiaFiltrada.codigo) apareceFamilia = true;
                    })
                });
            } else {
                apareceFamilia = true;
            }

            if (!apareceCompetencia || !apareceFamilia) return null;

            return (
                <AlumnoMincard
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
                hasMore={hasMore}
                loader={<AjaxLoader></AjaxLoader>}
            >
                <div className='row justify-content-center resultados-busqueda'>
                    {obtenerMiniCardAlumnos()}
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default ResultadosBusquedaAlumnos;
