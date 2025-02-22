import useUsers from '../../hooks/useUsers';
import AlumnoMincard from '../AlumnoMincard/AlumnoMincard';

const ResultadosBusquedaAlumnos = () => {

    const users = useUsers();

    function obtenerMiniCardAlumnos() {
        return users.map(user => {
            return (
                <AlumnoMincard
                    key={user.id}
                    imagen={user.imagen}
                    name={user.name}
                    idiomas={user.idiomas}
                    ciclos={user.ciclos.map(c => c.codCiclo).join(' | ')}
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
