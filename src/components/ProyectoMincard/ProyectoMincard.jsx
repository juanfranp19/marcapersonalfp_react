// librerías
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
// imagenes
import imagenProyectoDefecto from '../../assets/images/proyecto.svg';

const ProyectoMinCard = (props) => {

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

                        <h2>ALUMNOS</h2>
                        <p>{props.alumnos}</p>

                        <p><span>Tutor:</span> {props.tutor}</p>
                        <div><span>Ciclos:</span> {ciclos()}</div>

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
