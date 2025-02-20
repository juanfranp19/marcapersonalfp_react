// librerías
import { useEffect, useState } from 'react';
// servicios
import getProyectos from '../../services/getProyectos';
// componentes
import ProyectoMinCard from '../ProyectoMincard/ProyectoMincard';

const ResultadosBusquedaProyectos = () => {

    const [proyectos, setProyectos] = useState([]);

    function obtenerProyectos() {
        getProyectos()
            .then(data => {
                setProyectos(data);
            });
    }

    function obtenerMiniCardProyectos() {
        return proyectos.map(proyecto => {
            return (
                <ProyectoMinCard
                    key={proyecto.id}
                    imagen={proyecto.imagen}
                    nombre={proyecto.nombre}
                    alumnos={proyecto.participantes.map(p => p.nombre).join(', ')}
                    tutor={proyecto.docente_id}
                    ciclos={proyecto.ciclos.map(c => c.codCiclo).join(' | ')}
                />
            );
        });
    }

    useEffect(obtenerProyectos, []);

    return (
        <div className='row justify-content-center'>
            {obtenerMiniCardProyectos()}
        </div>
    );

}

export default ResultadosBusquedaProyectos;
