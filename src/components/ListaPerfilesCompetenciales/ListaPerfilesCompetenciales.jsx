// librerías
import { useEffect, useState } from 'react';
// componentes
import BotonFiltrador from '../BotonFiltrador/BotonFiltrador';
import CheckboxDesplegable from '../CheckboxDesplegable/CheckboxDesplegable';
import AjaxLoader from '../AjaxLoader/AjaxLoader';
// hooks
import useCompetencias from '../../hooks/useCompetencias';

const ListaPerfilesCompetenciales = (props) => {

    const { competencias, cargando } = useCompetencias();
    const [competenciasFiltradas, setCompetenciasFiltradas] = useState([]);
    const [checked, setChecked] = useState(false);
    
    function handleCompetencias(e) {

        if (e.target.checked) {
            const resultadoCompetencias = competencias.filter((competencia) => +competencia.id === +e.target.id);
            
            setCompetenciasFiltradas([...competenciasFiltradas, ...resultadoCompetencias]);
        } else {
            const resultadoCompetencias = competenciasFiltradas.filter((competencia) => +competencia.id !== +e.target.id);
            setCompetenciasFiltradas([...resultadoCompetencias]);
        }
    }

    function mandarCompetenciasFiltradas() {
        props.competenciasFiltradas(competenciasFiltradas);
    }

    function obtenerBotonesCompetencias(competencia) {

        if (checked) return (
            <BotonFiltrador key={competencia.id} id={competencia.id} nombre={competencia.nombre} onChange={handleCompetencias}></BotonFiltrador>
        );
    }

    function isChecked() {
        setChecked(!checked);
    }

    useEffect(mandarCompetenciasFiltradas, [competenciasFiltradas]);
    
    return (
        <div className='row lista-filtrado-botones'>
            <div className="col-12">
                <h1>Filtra por perfil competencial <CheckboxDesplegable isChecked={isChecked}></CheckboxDesplegable></h1>
                {
                    cargando
                        ? <AjaxLoader></AjaxLoader>
                        : competencias.map(obtenerBotonesCompetencias)
                }
            </div>
        </div>
    );
}

export default ListaPerfilesCompetenciales;
