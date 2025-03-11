// librerías
import { useContext, useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
// imagenes
import imagenProyectoDefecto from '../../assets/images/proyecto.svg';

import traducciones from '../../mock-traducciones';
import TraduccionContext from '../../contexts/TraduccionContext';

const ProyectoMinCard = (props) => {

    const idioma = useContext(TraduccionContext);
    const [imagenProyecto, setImagenProyecto] = useState([]);

    function obtenerImagenProyecto() {
        if(!props.imagen) setImagenProyecto(imagenProyectoDefecto);
    }

    function ciclos() {
        return (
            props.ciclos.length < 1
                ? 'No hay ciclos'
                : props.ciclos.map((c, key) => {

                    return (
                        <span
                            key={`ciclo-${key}`}
                            data-tooltip-id={c.codCiclo}
                        >
                            {c.codCiclo} |
                            <Tooltip id={c.codCiclo} content={c.nombre} />
                        </span>
                    );
                })
        );
    }

    useEffect(obtenerImagenProyecto, []);

    return (
        
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="card m-2">

                <div className="row p-4 card-body">
                    <div className="col-6 col-sm-12 col-md-6 col-lg-12 col-xxl-6">
                        <img src={imagenProyecto} alt="Proyecto" className="w-100" />
                    </div>

                    <div className="col-6 col-sm-12 col-md-6 col-lg-12 col-xxl-6">

                        <h1>{props.nombre}</h1>

                        <div className="info">
                            <h2>{traducciones[idioma].proyecto_mincard.alumnos}</h2>

                            <div>{props.alumnos}</div>

                            <div>
                                <span className='negrita'>{traducciones[idioma].proyecto_mincard.tutor}: </span>
                                {props.tutor}
                            </div>

                            <div>
                                <span className='negrita'>{traducciones[idioma].proyecto_mincard.ciclos}: </span>
                                {ciclos()}
                            </div>
                        </div>

                    </div>

                    <div className="col-12 boton-ver">
                        <button type="button" className=" w-100 btn btn-outline-primary">Ver</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProyectoMinCard;
