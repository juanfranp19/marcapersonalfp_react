// librerías
import InfiniteScroll from 'react-infinite-scroll-component';
// hooks
import useUsers from '../../hooks/useUsers';
// componentes
import AlumnoMincard from '../AlumnoMincard/AlumnoMincard';

const ResultadosBusquedaAlumnos = () => {

    const {cargando, users, setPage} = useUsers();

    function obtenerNextPage() {
        setPage(prevPage => prevPage + 1);
    }

    function obtenerMiniCardAlumnos() {
        return users.map(user => {
            return (
                <AlumnoMincard
                    key={user.id}
                    imagen={user.imagen}
                    nombre={user.nombre}
                    apellidos={user.apellidos}
                    idiomas={user.idiomas}
                    ciclos={user.ciclos}
                    sobre_mi={user.sobre_mi}
                />
            );
        });
    }

    

    return (
        <>
            <InfiniteScroll
                dataLength={users.length}
                next={obtenerNextPage}
                hasMore={true}
                loader={<h4>Cargando...</h4>}
            >
                <div className='row justify-content-center'>
                    {obtenerMiniCardAlumnos()}
                </div>
            </InfiniteScroll>
        </>
    );
}

export default ResultadosBusquedaAlumnos;
