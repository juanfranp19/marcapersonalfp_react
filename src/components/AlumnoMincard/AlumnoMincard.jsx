// librerías
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
// mocks
import banderas from '../../mock-banderas';
// imágenes
import imagenAlumnoDefecto from '../../assets/images/alumno.svg';

const AlumnoMincard = (props) => {

    const [imagenAlumno, setImagenAlumno] = useState([]);

    function obtenerImagenAlumno() {
        if (!props.imagen) setImagenAlumno(imagenAlumnoDefecto);
    } 

    function bandera(idioma) {
        return banderas[idioma] ? banderas[idioma].flag : banderas['unknown'].flag;
    }

    function nivel(nivel) {
        let niveles= [];

        switch (nivel) {
            case 'Básico':
                niveles = ['A1', 'A2'];
                break;
            case 'Intermedio':
                niveles = ['B1', 'B2'];
                break;
            case 'Avanzado':
                niveles = ['C1', 'C2'];
                break;
        }

        const randomNivel = Math.floor(Math.random() * niveles.length);

        return niveles[randomNivel];
    }

    function centificado(certificado) {
        if (certificado === 0) return 'SC';
        if (certificado === 1) return 'C';
    }

    function certificadoTooltip(certificado) {
        if (certificado === 0) return 'sin centificar';
        if (certificado === 1) return 'certificado';
    }

    function tablaIdiomas() {
        return (
            <table>
                <tbody>
                    <tr>
                        {props.idiomas.map((i, key) => {
                            return (
                                <td 
                                    key={key}
                                    className='bandera'
                                    data-tooltip-id={i.alpha2}
                                >
                                    {bandera(i.alpha2)}
                                    <Tooltip id={i.alpha2} content={i.native_name} />
                                </td>
                            );
                        })}</tr>
                    <tr>
                        {props.idiomas.map((i, key) => {
                            return (
                                <td key={key}>{nivel(i.nivel)}</td>
                            );
                        })}
                    </tr>
                    <tr>
                        {props.idiomas.map((i, key) => {
                            return (
                                <td 
                                    key={key}
                                    className='certificado'
                                    data-tooltip-id={`id${i.certificado}`}
                                >
                                    {centificado(i.certificado)}
                                    <Tooltip id={`id${i.certificado}`} content={certificadoTooltip(i.certificado)} />
                                </td>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
        );
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

    useEffect(obtenerImagenAlumno, []);

    return (
        
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="card m-2">

                <div className="row p-4 card-body">
                    <div className="col-6 col-sm-12 col-md-6 col-lg-12 col-xxl-6">
                        <img src={imagenAlumno} alt="Proyecto" className="w-100" />
                    </div>

                    <div className="col-6 col-sm-12 col-md-6 col-lg-12 col-xxl-6">

                        <h1>{props.name}</h1>

                        {tablaIdiomas()}

                        <p><span className='negrita'>Perfiles.</span></p>
                        <div><span className='negrita'>Ciclos: </span>{ciclos()}</div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default AlumnoMincard;
