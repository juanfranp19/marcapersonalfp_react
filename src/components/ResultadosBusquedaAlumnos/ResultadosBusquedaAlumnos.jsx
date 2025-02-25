// hooks
import useUsers from '../../hooks/useUsers';
// componentes
import AlumnoMincard from '../AlumnoMincard/AlumnoMincard';

const ResultadosBusquedaAlumnos = () => {

    const users = useUsers();

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
        <div className='row justify-content-center'>
            {obtenerMiniCardAlumnos()}
        </div>
    );

}

export default ResultadosBusquedaAlumnos;
