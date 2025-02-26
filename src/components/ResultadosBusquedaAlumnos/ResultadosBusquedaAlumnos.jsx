// librerías
import InfiniteScroll from 'react-infinite-scroll-component';
// hooks
import useUsers from '../../hooks/useUsers';
// componentes
import AlumnoMincard from '../AlumnoMincard/AlumnoMincard';

const ResultadosBusquedaAlumnos = () => {

    const { cargando, users, setPage } = useUsers();

    function obtenerNextPage() {
        setPage(prevPage => prevPage + 1);
    }

    function obtenerMiniCardAlumnos() {
        return users.map(user => {
            return (
                cargando
                    ? <p>Cargando...</p>
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
